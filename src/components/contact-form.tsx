"use client";

import { useActionState, useId } from "react";
import { useTranslations } from "next-intl";
import { submitContactForm } from "@/app/actions/contact";
import {
  budgetRanges,
  initialContactState,
  projectTypes,
  type FieldName,
  type ProjectType,
} from "@/lib/contact";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/utils";

const fieldStyles =
  "w-full rounded-xl bg-canvas px-4 py-3 text-sm text-ink ring-1 ring-line transition-colors placeholder:text-ink-3 focus:ring-2 focus:ring-brand-500 focus:outline-none";

const projectTypeLabelKeys = {
  web: "projectTypeWeb",
  ai: "projectTypeAi",
  job: "projectTypeJob",
  other: "projectTypeOther",
} as const;

const budgetLabelKeys = {
  undecided: "budgetUndecided",
  small: "budgetSmall",
  medium: "budgetMedium",
  large: "budgetLarge",
  xlarge: "budgetXlarge",
} as const;

const validationKeys = {
  name: "validationName",
  email: "validationEmail",
  message: "validationMessage",
  messageLong: "validationMessageLong",
} as const;

export function ContactForm({
  defaultProjectType = "web",
}: {
  defaultProjectType?: ProjectType;
}) {
  const t = useTranslations("Contact");
  const [state, formAction, pending] = useActionState(
    submitContactForm,
    initialContactState,
  );
  const formId = useId();

  const fieldError = (field: FieldName) =>
    state.status === "invalid" ? state.fieldErrors[field] : undefined;

  if (state.status === "success") {
    return (
      <div className="flex flex-col items-start gap-4 rounded-2xl bg-panel p-8 ring-1 ring-emerald-500/25">
        <span className="grid size-12 place-items-center rounded-2xl bg-emerald-500/12 text-emerald-400">
          <Icon name="check-circle" className="size-6" />
        </span>
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold text-ink">{t("successTitle")}</h3>
          <p className="text-sm leading-relaxed text-ink-2">{t("successBody")}</p>
        </div>
      </div>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-5" noValidate>
      {state.status === "error" && (
        <div
          role="alert"
          className="flex items-start gap-3 rounded-xl bg-red-500/8 p-4 ring-1 ring-red-500/25"
        >
          <Icon name="x" className="mt-0.5 size-4 shrink-0 text-red-400" />
          <div className="flex flex-col gap-0.5">
            <p className="text-sm font-medium text-ink">{t("errorTitle")}</p>
            <p className="text-sm text-ink-2">
              {state.code === "rateLimited"
                ? t("errorRateLimited")
                : state.code === "notConfigured"
                  ? t("errorNotConfigured")
                  : t("errorGeneric")}
            </p>
          </div>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id={`${formId}-name`}
          label={t("nameLabel")}
          error={fieldError("name") && t(validationKeys[fieldError("name")!])}
        >
          <input
            id={`${formId}-name`}
            name="name"
            type="text"
            autoComplete="name"
            required
            placeholder={t("namePlaceholder")}
            aria-invalid={Boolean(fieldError("name"))}
            className={cn(fieldStyles, fieldError("name") && "ring-red-500/50")}
          />
        </Field>

        <Field
          id={`${formId}-email`}
          label={t("emailLabel")}
          error={fieldError("email") && t(validationKeys[fieldError("email")!])}
        >
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder={t("emailPlaceholder")}
            aria-invalid={Boolean(fieldError("email"))}
            className={cn(fieldStyles, fieldError("email") && "ring-red-500/50")}
          />
        </Field>
      </div>

      <Field id={`${formId}-company`} label={t("companyLabel")}>
        <input
          id={`${formId}-company`}
          name="company"
          type="text"
          autoComplete="organization"
          placeholder={t("companyPlaceholder")}
          className={fieldStyles}
        />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id={`${formId}-type`} label={t("projectTypeLabel")}>
          <select
            id={`${formId}-type`}
            name="projectType"
            defaultValue={defaultProjectType}
            className={cn(fieldStyles, "select-field appearance-none")}
          >
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {t(projectTypeLabelKeys[type])}
              </option>
            ))}
          </select>
        </Field>

        <Field id={`${formId}-budget`} label={t("budgetLabel")}>
          <select
            id={`${formId}-budget`}
            name="budget"
            defaultValue="undecided"
            className={cn(fieldStyles, "select-field appearance-none")}
          >
            {budgetRanges.map((range) => (
              <option key={range} value={range}>
                {t(budgetLabelKeys[range])}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field
        id={`${formId}-message`}
        label={t("messageLabel")}
        error={fieldError("message") && t(validationKeys[fieldError("message")!])}
      >
        <textarea
          id={`${formId}-message`}
          name="message"
          rows={5}
          required
          placeholder={t("messagePlaceholder")}
          aria-invalid={Boolean(fieldError("message"))}
          className={cn(fieldStyles, "resize-y", fieldError("message") && "ring-red-500/50")}
        />
      </Field>

      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor={`${formId}-website`}>Website</label>
        <input id={`${formId}-website`} name="website" type="text" tabIndex={-1} />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" size="lg" disabled={pending} className="max-sm:w-full">
          {pending ? (
            <>
              <Icon name="loader" className="size-4 animate-spin" />
              {t("submitting")}
            </>
          ) : (
            <>
              {t("submit")}
              <Icon name="send" className="size-4" />
            </>
          )}
        </Button>
        <p className="text-xs text-ink-3">{t("responseTime")}</p>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium text-ink-2">
        {label}
      </label>
      {children}
      {error && (
        <p role="alert" className="text-xs text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}
