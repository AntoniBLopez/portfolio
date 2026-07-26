import { z } from "zod";

export const projectTypes = ["web", "ai", "job", "other"] as const;
export const budgetRanges = ["undecided", "small", "medium", "large", "xlarge"] as const;

export type ProjectType = (typeof projectTypes)[number];
export type BudgetRange = (typeof budgetRanges)[number];

export type FieldName = "name" | "email" | "message";
export type ValidationCode = "name" | "email" | "message" | "messageLong";
export type ErrorCode = "generic" | "rateLimited" | "notConfigured";

export type ContactState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; code: ErrorCode }
  | { status: "invalid"; fieldErrors: Partial<Record<FieldName, ValidationCode>> };

export const initialContactState: ContactState = { status: "idle" };

export const contactSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.email().max(160),
  company: z.string().trim().max(160).optional().default(""),
  projectType: z.enum(projectTypes).default("other"),
  budget: z.enum(budgetRanges).default("undecided"),
  message: z.string().trim().min(15).max(4000),
});

export function toFieldErrors(error: z.ZodError) {
  const fieldErrors: Partial<Record<FieldName, ValidationCode>> = {};

  for (const issue of error.issues) {
    const field = issue.path[0];

    if (field === "name") fieldErrors.name ??= "name";
    if (field === "email") fieldErrors.email ??= "email";
    if (field === "message") {
      fieldErrors.message ??= issue.code === "too_big" ? "messageLong" : "message";
    }
  }

  return fieldErrors;
}
