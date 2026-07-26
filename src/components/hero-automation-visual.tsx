/**
 * Decorative hero visual: software / systems motif.
 * Pure SVG + CSS — little text, mostly motion and shape.
 */
export function HeroAutomationVisual() {
  return (
    <div className="hero-automation relative mx-auto aspect-square w-full max-w-[22rem]">
      <div
        aria-hidden
        className="absolute inset-[10%] rounded-full bg-gradient-to-br from-brand-500/35 via-accent-500/12 to-transparent blur-3xl"
      />

      <svg
        viewBox="0 0 400 400"
        className="relative h-full w-full"
        role="img"
        aria-label="Software engineering visual"
      >
        <defs>
          <linearGradient id="ha-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#2563eb" stopOpacity="0.7" />
          </linearGradient>
          <linearGradient id="ha-panel" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#122033" />
            <stop offset="100%" stopColor="#0a101c" />
          </linearGradient>
          <linearGradient id="ha-code" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
          <radialGradient id="ha-glow" cx="50%" cy="45%" r="55%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx="200" cy="200" r="168" fill="url(#ha-glow)" />

        <circle
          cx="200"
          cy="200"
          r="168"
          fill="none"
          stroke="url(#ha-stroke)"
          strokeWidth="1"
          strokeDasharray="3 14"
          opacity="0.4"
          className="ha-ring"
          style={{ transformOrigin: "200px 200px" }}
        />

        {/* Large code brackets */}
        <g
          fill="none"
          stroke="#3b82f6"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.2"
        >
          <path d="M62 110 C38 150, 38 250, 62 290" />
          <path d="M338 110 C362 150, 362 250, 338 290" />
        </g>

        {/* Code window */}
        <g className="ha-window">
          <rect
            x="78"
            y="96"
            width="244"
            height="208"
            rx="22"
            fill="url(#ha-panel)"
            stroke="#3b82f6"
            strokeOpacity="0.4"
            strokeWidth="1.35"
          />

          <circle cx="104" cy="122" r="5" fill="#60a5fa" opacity="0.75" />
          <circle cx="122" cy="122" r="5" fill="#38bdf8" opacity="0.45" />
          <circle cx="140" cy="122" r="5" fill="#22d3ee" opacity="0.35" />

          {/* Gutter line numbers */}
          <g fill="#334155" fontFamily="ui-monospace, monospace" fontSize="11">
            <text x="98" y="168">1</text>
            <text x="98" y="196">2</text>
            <text x="98" y="224">3</text>
            <text x="98" y="252">4</text>
            <text x="98" y="280">5</text>
          </g>

          {/* Code lines */}
          <g strokeLinecap="round" className="ha-lines">
            <line x1="120" y1="164" x2="210" y2="164" stroke="#60a5fa" strokeWidth="8" opacity="0.9" />
            <line x1="120" y1="192" x2="286" y2="192" stroke="#38bdf8" strokeWidth="8" opacity="0.55" />
            <line x1="136" y1="220" x2="252" y2="220" stroke="#93c5fd" strokeWidth="8" opacity="0.75" />
            <line x1="136" y1="248" x2="270" y2="248" stroke="#22d3ee" strokeWidth="8" opacity="0.5" />
            <line x1="120" y1="276" x2="222" y2="276" stroke="url(#ha-code)" strokeWidth="8" opacity="0.85" />
          </g>

          <rect x="230" y="266" width="3.5" height="20" rx="1" fill="#e0f2fe" className="ha-cursor" />
        </g>
      </svg>
    </div>
  );
}
