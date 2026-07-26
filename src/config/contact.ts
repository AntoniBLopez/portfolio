/**
 * Canonical contact details. Import from here — do not hardcode the email
 * in components or content files.
 */
export const contact = {
  email: "antonilopezdev@gmail.com",
} as const;

export const mailto = `mailto:${contact.email}` as const;
