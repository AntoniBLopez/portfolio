/**
 * Canonical contact details. Import from here — do not hardcode the email
 * or phone in components or content files.
 */
export const contact = {
  email: "antonilopezdev@gmail.com",
  /** E.164 WhatsApp / phone number. */
  phone: "+34691788761",
} as const;

export const mailto = `mailto:${contact.email}` as const;

/** Digits-only form used by wa.me. */
export const whatsappPhone = contact.phone.replace(/\D/g, "");

export const whatsappUrl = `https://wa.me/${whatsappPhone}` as const;
