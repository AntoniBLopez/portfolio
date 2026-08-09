/**
 * Canonical image paths under /public. Import from here — do not hardcode
 * the same asset path in multiple components.
 */
export const images = {
  /** Full-body portrait used in the experience section. */
  portrait: "/images/me/sentado.png",
  /** Profile crop used as the header logo. */
  logo: "/images/me/traje_verde/IMG_7927_recortada_x2.png",
  /** Formal headshot (suit, looking left) — trust signal on /web. */
  headshot: "/images/me/traje_verde/IMG_7863_recortada.png",
  /** Formal headshot (blue suit) — trust signal on /ai. */
  headshotAi: "/images/me/traje_azul/IMG_7647_recortada_x2.png",
  /** Formal headshot (blue suit) — home / recruiter landing (desktop). */
  headshotHome: "/images/me/traje_azul/IMG_7754_recortada_x2.png",
  /** Alternate crop for home when the photo stacks under the copy (small screens). */
  headshotHomeMobile: "/images/me/traje_azul/IMG_7694_recortada_x2.png",
  /** Headshot in the About ("Sobre mí") section. */
  about: "/images/me/traje_verde/IMG_7927_recortada_x2.png",
} as const;
