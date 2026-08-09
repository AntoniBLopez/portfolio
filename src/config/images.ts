/**
 * Canonical image paths under /public. Import from here — do not hardcode
 * the same asset path in multiple components.
 */
export const images = {
  /** Full-body portrait used in the experience section. */
  portrait: "/images/me/sentado.png",
  /** Profile crop used as the header logo. */
  logo: "/images/me/traje_verde/IMG_7867_recortada.png",
  /** Formal headshot (suit, looking left) — trust signal on /web. */
  headshot: "/images/me/traje_verde/IMG_7863_recortada.png",
  /** Formal headshot (blue suit) — trust signal on /ai. */
  headshotAi: "/images/me/traje_azul/IMG_7647_recortada_x2.png",
} as const;
