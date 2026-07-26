"use server";

import { headers } from "next/headers";
import { Resend } from "resend";
import { profile } from "@/content/site";
import { contactSchema, toFieldErrors, type ContactState } from "@/lib/contact";

/**
 * Per-instance throttle. Enough to stop casual abuse of the form; a serverless
 * deployment spread over many instances would need a shared store to be strict.
 */
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 3;
const submissions = new Map<string, number[]>();

function isRateLimited(key: string) {
  const now = Date.now();
  const recent = (submissions.get(key) ?? []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS,
  );

  if (recent.length >= RATE_LIMIT_MAX) {
    submissions.set(key, recent);
    return true;
  }

  recent.push(now);
  submissions.set(key, recent);

  if (submissions.size > 5000) submissions.clear();
  return false;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function submitContactForm(
  _prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // Honeypot: real users never see this field, bots fill everything.
  if (formData.get("website")) {
    return { status: "success" };
  }

  const parsed = contactSchema.safeParse({
    name: formData.get("name") ?? "",
    email: formData.get("email") ?? "",
    company: formData.get("company") ?? "",
    projectType: formData.get("projectType") ?? "other",
    budget: formData.get("budget") ?? "undecided",
    message: formData.get("message") ?? "",
  });

  if (!parsed.success) {
    return { status: "invalid", fieldErrors: toFieldErrors(parsed.error) };
  }

  const headerList = await headers();
  const ip =
    headerList.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    headerList.get("x-real-ip") ??
    "unknown";

  if (isRateLimited(ip)) {
    return { status: "error", code: "rateLimited" };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("[contact] RESEND_API_KEY is not set, submission was not delivered.");
    return { status: "error", code: "notConfigured" };
  }

  const { name, email, company, projectType, budget, message } = parsed.data;

  const rows = [
    ["Name", name],
    ["Email", email],
    ["Company", company || "—"],
    ["Project type", projectType],
    ["Budget", budget],
  ]
    .map(
      ([label, value]) =>
        `<tr><td style="padding:6px 14px 6px 0;color:#64748b;font-size:13px">${label}</td><td style="padding:6px 0;font-size:14px;font-weight:500">${escapeHtml(String(value))}</td></tr>`,
    )
    .join("");

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL ?? profile.email,
      replyTo: email,
      subject: `New enquiry from ${name} (${projectType})`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company || "-"}`,
        `Project type: ${projectType}`,
        `Budget: ${budget}`,
        "",
        message,
      ].join("\n"),
      html: `
        <div style="font-family:ui-sans-serif,system-ui,sans-serif;color:#0f172a;max-width:640px">
          <h2 style="margin:0 0 18px;font-size:18px">New portfolio enquiry</h2>
          <table style="border-collapse:collapse;margin-bottom:20px">${rows}</table>
          <div style="white-space:pre-wrap;border-top:1px solid #e2e8f0;padding-top:16px;font-size:14px;line-height:1.6">${escapeHtml(message)}</div>
        </div>
      `,
    });

    if (error) {
      console.error("[contact] Resend rejected the message:", error);
      return { status: "error", code: "generic" };
    }

    return { status: "success" };
  } catch (error) {
    console.error("[contact] Failed to send message:", error);
    return { status: "error", code: "generic" };
  }
}
