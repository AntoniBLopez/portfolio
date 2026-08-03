/**
 * Single source of truth for every piece of personal and commercial content.
 *
 * Every string that a visitor reads is defined here as { en, es }. UI chrome
 * (nav labels, buttons, form fields) lives in `messages/en.json` and
 * `messages/es.json` instead.
 *
 * Search for "TODO" to find the values that still need your real data.
 */

import type { IconName } from "@/components/ui/icon";
import { contact, whatsappUrl } from "@/config/contact";
import { links, socialLinks } from "@/config/links";

export type Localized = { en: string; es: string };
export type LocalizedList = { en: string[]; es: string[] };

/** Reads the value for the active locale, falling back to English. */
export function tx(value: Localized, locale: string): string {
  return locale === "es" ? value.es : value.en;
}

export function txList(value: LocalizedList, locale: string): string[] {
  return locale === "es" ? value.es : value.en;
}

/* -------------------------------------------------------------------------- */
/*  Profile                                                                    */
/* -------------------------------------------------------------------------- */

export const profile = {
  // TODO: replace with your real name as you want it shown in the header and hero.
  name: "Antoni B. López",
  initials: "AL",

  role: {
    en: "Software Engineer · Full-Stack",
    es: "Ingeniero de Software · Full-Stack",
  },

  // TODO: replace with your city / region.
  location: { en: "Barcelona, Spain — remote friendly", es: "Barcelona, España — remoto" },

  yearsExperience: 4,

  /** Re-exported from `@/config/contact` so existing `profile.email` call sites keep working. */
  email: contact.email,
  phone: contact.phone,
  whatsappUrl,
  // TODO: replace with your real booking URL.
  calendarUrl: "https://cal.com/your-handle/intro",
  /** Re-exported from `@/config/links` so existing `profile.fiverrUrl` call sites keep working. */
  fiverrUrl: links.fiverr,
  resumeUrl: "/cv.pdf",

  /** Canonical production URL. Used for metadata, sitemap and JSON-LD. */
  // TODO: replace with your real domain before deploying.
  url: "https://example.com",

  headline: {
    en: "I build web products that businesses actually run on.",
    es: "Construyo productos web sobre los que los negocios realmente funcionan.",
  },

  summary: {
    en: "Full-stack developer with over 4 years of experience taking web applications from an empty repository to production. I design the architecture, write the frontend and the backend, ship it, and then automate the manual work around it with AI.",
    es: "Desarrollador full-stack con más de 4 años de experiencia llevando aplicaciones web desde un repositorio vacío hasta producción. Diseño la arquitectura, escribo el frontend y el backend, lo lanzo y después automatizo con IA el trabajo manual que lo rodea.",
  },

  socials: socialLinks,
} as const;

/** Headline numbers shown under the hero. TODO: adjust to your real figures. */
export const heroStats = [
  { value: "4+", labelKey: "statsExperience" },
  { value: "12+", labelKey: "statsProjects" },
  { value: "100k€", labelKey: "statsSavings" },
] as const;

/* -------------------------------------------------------------------------- */
/*  About                                                                      */
/* -------------------------------------------------------------------------- */

export const about = {
  paragraphs: {
    en: [
      "I am a full-stack software developer. For more than four years I have been building and maintaining web applications that real people use every day — learning platforms, financial tools, booking systems and offline-capable apps — owning them from the first database schema to the production deploy.",
      "My work sits across the whole stack. On the frontend that means TypeScript, React and Next.js with a serious focus on performance and accessibility. On the backend it means well-modelled APIs, relational data, background jobs and infrastructure that does not wake anyone up at night.",
      "What I care about is the part that usually gets skipped: understanding why the software is being built. A feature that ships fast but solves the wrong problem is a liability. So I ask about the business before I ask about the framework.",
      "Alongside product development I design AI automation for companies drowning in manual process work. Same discipline, different surface: find the expensive repetition, model it properly, and let software carry it.",
    ],
    es: [
      "Soy desarrollador de software full-stack. Desde hace más de cuatro años construyo y mantengo aplicaciones web que usan personas reales cada día — plataformas de aprendizaje, herramientas financieras, sistemas de reservas y apps que funcionan sin conexión — asumiéndolas desde el primer esquema de base de datos hasta el despliegue en producción.",
      "Mi trabajo abarca todo el stack. En el frontend significa TypeScript, React y Next.js con un foco serio en rendimiento y accesibilidad. En el backend significa APIs bien modeladas, datos relacionales, procesos en segundo plano e infraestructura que no despierta a nadie de madrugada.",
      "Me importa la parte que normalmente se salta: entender por qué se está construyendo el software. Una funcionalidad que sale rápido pero resuelve el problema equivocado es un pasivo. Así que pregunto por el negocio antes de preguntar por el framework.",
      "Junto al desarrollo de producto diseño automatización con IA para empresas ahogadas en procesos manuales. La misma disciplina en otra superficie: encontrar la repetición costosa, modelarla bien y dejar que el software la sostenga.",
    ],
  } satisfies LocalizedList,

  principles: [
    {
      icon: "target" as IconName,
      title: { en: "Outcome before output", es: "Resultado antes que entrega" },
      body: {
        en: "I start from the number you are trying to move, then work backwards to the smallest thing that moves it.",
        es: "Empiezo por el número que quieres mover y trabajo hacia atrás hasta lo mínimo que lo mueve.",
      },
    },
    {
      icon: "gauge" as IconName,
      title: { en: "Fast by default", es: "Rápido por defecto" },
      body: {
        en: "Performance and accessibility are requirements, not a phase two. Every page ships measured.",
        es: "Rendimiento y accesibilidad son requisitos, no una fase dos. Cada página se entrega medida.",
      },
    },
    {
      icon: "message-square" as IconName,
      title: { en: "Plain language", es: "Lenguaje claro" },
      body: {
        en: "You will always know what is done, what is blocked and what it costs. No jargon as a shield.",
        es: "Siempre sabrás qué está hecho, qué está bloqueado y cuánto cuesta. Sin jerga como escudo.",
      },
    },
    {
      icon: "shield" as IconName,
      title: { en: "Built to be handed over", es: "Hecho para entregarse" },
      body: {
        en: "Typed, documented and tested where it matters, so the next developer is not stuck — even when that is you.",
        es: "Tipado, documentado y testeado donde importa, para que el siguiente desarrollador no se atasque, incluso si eres tú.",
      },
    },
  ],
};

export const skillGroups = [
  {
    icon: "monitor" as IconName,
    title: { en: "Frontend", es: "Frontend" },
    items: [
      "TypeScript",
      "React",
      "Next.js",
      "Angular",
      "Tailwind CSS",
      "Astro",
      "Framer Motion",
      "PWA / offline-first",
      "Accessibility (WCAG)",
    ],
  },
  {
    icon: "server" as IconName,
    title: { en: "Backend", es: "Backend" },
    items: [
      "Node.js",
      "NestJS",
      "Express",
      "Java",
      "Python / FastAPI",
      "REST & tRPC",
      "PostgreSQL",
      "Prisma / Drizzle",
      "Redis",
    ],
  },
  {
    icon: "cloud" as IconName,
    title: { en: "Infrastructure", es: "Infraestructura" },
    items: [
      "Vercel",
      "Docker",
      "GitHub Actions",
      "AWS (S3, Lambda, RDS)",
      "Azure",
      "Supabase",
      "Cloudflare",
      "Observability",
      "CI/CD",
    ],
  },
  {
    icon: "brain" as IconName,
    title: { en: "AI & Automation", es: "IA y Automatización" },
    items: [
      "OpenAI & Anthropic APIs",
      "Third-party APIs",
      "RAG pipelines",
      "Vector databases",
      "n8n / Make",
      "Agentic workflows",
      "Prompt engineering",
      "Process mapping",
      "Zapier integrations",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  Experience                                                                 */
/* -------------------------------------------------------------------------- */
/* TODO: replace every entry below with your real roles, dates and outcomes.   */

export type ExperienceEntry = {
  company: string;
  companyUrl?: string;
  role: Localized;
  start: string;
  end: string | null;
  location: Localized;
  summary: Localized;
  highlights: LocalizedList;
  stack: string[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "Forvis Mazars",
    companyUrl: "https://www.linkedin.com/company/forvis-mazars-es",
    role: {
      en: "Full-Stack Developer & AI Engineer",
      es: "Desarrollador Full-Stack e Ingeniero de IA",
    },
    start: "2025",
    end: null,
    location: { en: "Barcelona, Spain", es: "Barcelona, España" },
    summary: {
      en: "Building AI-integrated internal platforms for a global consulting firm: secure collaboration tools, document workflows and agent automation that teams and clients use every day.",
      es: "Construyo plataformas internas con IA para una firma global de consultoría: herramientas de colaboración seguras, flujos documentales y automatización con agentes que usan equipos y clientes cada día.",
    },
    highlights: {
      en: [
        "Technical lead for a team of 4 on a company-wide collaboration platform — documents, tasks, requests and AI agent workflows under one product.",
        "Shipped scalable AI-integrated features with React 19, TypeScript, Node.js, GraphQL and LangChain, deployed on Azure with CI/CD.",
        "Raised delivery quality through rigorous code reviews and pull-request standards aligned with modern React and TypeScript practice.",
      ],
      es: [
        "Liderazgo técnico de un equipo de 4 en una plataforma de colaboración para toda la compañía: documentos, tareas, solicitudes y flujos con agentes de IA en un solo producto.",
        "Entregué funcionalidades escalables con IA usando React 19, TypeScript, Node.js, GraphQL y LangChain, desplegadas en Azure con CI/CD.",
        "Elevé la calidad de entrega con code reviews rigurosos y estándares de pull request alineados con React y TypeScript modernos.",
      ],
    },
    stack: [
      "React 19",
      "TypeScript",
      "Node.js",
      "GraphQL",
      "LangChain",
      "Azure",
      "Jira",
      "CI/CD",
    ],
  },
  {
    company: "eXplorins",
    companyUrl: "https://www.linkedin.com/company/explorins",
    role: { en: "Frontend Developer", es: "Desarrollador Frontend" },
    start: "2023",
    end: "2025",
    location: { en: "Barcelona, Spain", es: "Barcelona, España" },
    summary: {
      en: "Client-facing product engineering for enterprise and government projects — from AI computer-vision prototypes to large Angular applications with Domain-Driven Design.",
      es: "Ingeniería de producto de cara a cliente para proyectos enterprise y de gobierno: desde prototipos de visión artificial con IA hasta aplicaciones Angular grandes con Domain-Driven Design.",
    },
    highlights: {
      en: [
        "Delivered AI facial recognition (face-api.js) and gesture recognition (MediaPipe) for an Andorran government project, owning client communication and iterative delivery.",
        "Built a Benetton application on Angular 19 and TypeScript with REST APIs, hexagonal architecture and DDD for long-term maintainability and scale.",
        "Shipped data-analysis dashboards and E2E coverage with Playwright, working in Scrum with Jira, Confluence, Figma and AI-assisted development workflows.",
      ],
      es: [
        "Entregué reconocimiento facial con IA (face-api.js) y de gestos (MediaPipe) para un proyecto del gobierno de Andorra, asumiendo la comunicación con el cliente y la entrega iterativa.",
        "Construí una aplicación para Benetton con Angular 19 y TypeScript, APIs REST, arquitectura hexagonal y DDD para mantenibilidad y escala a largo plazo.",
        "Lancé dashboards de análisis de datos y cobertura E2E con Playwright, trabajando en Scrum con Jira, Confluence, Figma y flujos de desarrollo asistidos por IA.",
      ],
    },
    stack: [
      "Angular 19",
      "TypeScript",
      "DDD",
      "REST APIs",
      "Playwright",
      "MediaPipe",
      "face-api.js",
      "Figma",
    ],
  },
  {
    company: "Giggin",
    companyUrl: "https://www.linkedin.com/company/gigginltd",
    role: {
      en: "Frontend Web Developer (Freelance)",
      es: "Desarrollador Web Frontend (Freelance)",
    },
    start: "2022",
    end: "2023",
    location: { en: "Barcelona, Spain", es: "Barcelona, España" },
    summary: {
      en: "Product UI for a live-events startup: real-time audience experiences built with React, TypeScript and WebSockets, from design handoff to production.",
      es: "UI de producto para una startup de eventos en vivo: experiencias de audiencia en tiempo real con React, TypeScript y WebSockets, del handoff de diseño a producción.",
    },
    highlights: {
      en: [
        "Implemented WebSocket-driven real-time updates so the product stayed live during concerts and gigs without full page refreshes.",
        "Built the UX/UI in React and TypeScript with Sass, translating Figma designs into a responsive, production-ready interface.",
        "Collaborated through GitLab with clear branching and review habits that kept a small startup shipping safely.",
      ],
      es: [
        "Implementé actualizaciones en tiempo real con WebSockets para que el producto se mantuviera vivo en conciertos sin recargar la página.",
        "Construí la UX/UI en React y TypeScript con Sass, pasando diseños de Figma a una interfaz responsive lista para producción.",
        "Colaboré vía GitLab con branching y revisiones claras que permitieron a una startup pequeña entregar con seguridad.",
      ],
    },
    stack: ["React", "TypeScript", "WebSockets", "Sass", "Node.js", "Express", "GitLab", "Figma"],
  },
  // --- Placeholder / alternative entries kept for review ---
  {
    company: "Independent / Freelance",
    role: {
      en: "Full-Stack Developer & Automation Consultant",
      es: "Desarrollador Full-Stack y Consultor de Automatización",
    },
    start: "2024",
    end: null,
    location: { en: "Remote", es: "Remoto" },
    summary: {
      en: "Design and delivery of web products and AI automation for small and mid-sized companies, from first scoping call to production handover.",
      es: "Diseño y entrega de productos web y automatización con IA para pymes, desde la primera llamada de alcance hasta la entrega en producción.",
    },
    highlights: {
      en: [
        "Delivered web applications end to end for clients across education, fitness and professional services.",
        "Mapped and automated back-office processes, removing recurring manual work measured in full working days per week.",
        "Set up the deployment, monitoring and documentation so clients could operate the product without me.",
      ],
      es: [
        "Entregué aplicaciones web completas para clientes de educación, fitness y servicios profesionales.",
        "Mapeé y automaticé procesos de back-office, eliminando trabajo manual recurrente medido en días laborables por semana.",
        "Configuré despliegue, monitorización y documentación para que los clientes operasen el producto sin mí.",
      ],
    },
    stack: ["Next.js", "TypeScript", "PostgreSQL", "OpenAI API", "Vercel", "n8n"],
  },
  {
    company: "Product Company",
    role: { en: "Full-Stack Developer", es: "Desarrollador Full-Stack" },
    start: "2023",
    end: "2024",
    location: { en: "Barcelona / Hybrid", es: "Barcelona / Híbrido" },
    summary: {
      en: "Feature ownership across a customer-facing web platform, working directly with product and design in a small cross-functional team.",
      es: "Responsabilidad de funcionalidades en una plataforma web de cara al cliente, trabajando junto a producto y diseño en un equipo pequeño y multidisciplinar.",
    },
    highlights: {
      en: [
        "Shipped user-facing features from ticket to production, including the API, the UI and the tests.",
        "Cut page load times substantially by reworking data fetching and rendering strategy.",
        "Reviewed pull requests and mentored a junior developer through their first production releases.",
      ],
      es: [
        "Entregué funcionalidades de cara al usuario desde el ticket hasta producción, incluyendo API, UI y tests.",
        "Reduje notablemente los tiempos de carga replanteando la obtención de datos y la estrategia de renderizado.",
        "Revisé pull requests y acompañé a un desarrollador junior en sus primeras entregas a producción.",
      ],
    },
    stack: ["React", "Node.js", "PostgreSQL", "Docker", "GitHub Actions"],
  },
  {
    company: "Digital Agency",
    role: { en: "Web Developer", es: "Desarrollador Web" },
    start: "2022",
    end: "2023",
    location: { en: "Remote", es: "Remoto" },
    summary: {
      en: "Client work across marketing sites and small web applications, with direct client contact and tight delivery windows.",
      es: "Trabajo para clientes en webs de marketing y pequeñas aplicaciones web, con contacto directo y plazos ajustados.",
    },
    highlights: {
      en: [
        "Built and launched multiple client websites with strong Core Web Vitals and SEO foundations.",
        "Standardised the starter setup used across projects, shortening the time from kickoff to first deploy.",
        "Handled requirements gathering and demos directly with non-technical stakeholders.",
      ],
      es: [
        "Construí y lancé múltiples webs de cliente con buenos Core Web Vitals y bases sólidas de SEO.",
        "Estandaricé la plantilla base usada en todos los proyectos, acortando el tiempo del inicio al primer despliegue.",
        "Gestioné la toma de requisitos y las demos directamente con perfiles no técnicos.",
      ],
    },
    stack: ["TypeScript", "Next.js", "Tailwind CSS", "Headless CMS"],
  },
];

/* -------------------------------------------------------------------------- */
/*  Projects                                                                   */
/* -------------------------------------------------------------------------- */
/* TODO: the metrics below are illustrative placeholders. Replace them with    */
/* your real numbers, and add liveUrl / repoUrl where the project is public.   */

export const projectCategories = [
  { id: "realtime", label: { en: "Realtime", es: "Tiempo real" } },
  { id: "education", label: { en: "Learning", es: "Aprendizaje" } },
  { id: "offline", label: { en: "Offline-first", es: "Offline-first" } },
  { id: "platform", label: { en: "Platforms", es: "Plataformas" } },
  { id: "fintech", label: { en: "Fintech", es: "Fintech" } },
  { id: "ai", label: { en: "AI", es: "IA" } },
  { id: "productivity", label: { en: "Productivity", es: "Productividad" } },
] as const;

export type ProjectCategory = (typeof projectCategories)[number]["id"];

export type Project = {
  slug: string;
  name: string;
  category: ProjectCategory;
  icon: IconName;
  accent: string;
  year: string;
  featured: boolean;
  tagline: Localized;
  role: Localized;
  timeline: Localized;
  challenge: Localized;
  approach: Localized;
  outcome: Localized;
  features: { title: Localized; body: Localized }[];
  metrics: { value: string; label: Localized }[];
  stack: string[];
  /** Cover image under /public, shown on cards and case study hero. */
  image?: string;
  liveUrl?: string;
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "blau-yoga",
    name: "Blau Yoga",
    category: "platform",
    icon: "palette",
    accent: "from-sky-400/25 via-brand-500/10 to-transparent",
    year: "2026",
    featured: true,
    tagline: {
      en: "A custom yoga studio website with five inner pages plus a landing, and an admin panel to edit copy, images and colours without touching code.",
      es: "Una web a medida para un estudio de yoga con cinco páginas interiores más la landing, y un panel de administración para editar textos, imágenes y colores sin tocar código.",
    },
    role: { en: "Full-stack developer, direct client project", es: "Desarrollador full-stack, proyecto directo de cliente" },
    timeline: { en: "Client project", es: "Proyecto de cliente" },
    challenge: {
      en: "The studio needed a fast, fully branded multi-page site — classes, schedule, about, pricing and contact — without the weight and lock-in of WordPress, Wix or similar builders. Content and look had to stay editable by the owner after launch.",
      es: "El estudio necesitaba una web multipágina rápida y con marca propia — clases, horario, sobre mí, precios y contacto — sin el peso ni el encierro de WordPress, Wix o constructores similares. El contenido y la apariencia tenían que seguir siendo editables por la dueña después del lanzamiento.",
    },
    approach: {
      en: "I built the site in native code end to end: a public marketing surface with a landing page and five inner pages, backed by a lightweight admin where texts, images and colour tokens can be changed without redeploying a theme. No page builder, no plugin stack — just a fast app the client owns and can restyle as the brand evolves.",
      es: "Construí la web en código nativo de punta a punta: una superficie pública de marketing con landing y cinco páginas interiores, respaldada por un panel ligero donde se pueden cambiar textos, imágenes y tokens de color sin redesplegar un tema. Sin page builder ni pila de plugins: solo una app rápida que la cliente posee y puede restilar a medida que evoluciona la marca.",
    },
    outcome: {
      en: "A production yoga site that loads fast, matches the brand exactly, and lets the owner update copy, photography and colours from an admin panel — fully customisable without a CMS lock-in.",
      es: "Una web de yoga en producción que carga rápido, encaja con la marca al detalle y permite a la dueña actualizar textos, fotos y colores desde un panel de administración: 100% personalizable sin quedar atrapada en un CMS.",
    },
    features: [
      {
        title: { en: "Landing + five pages", es: "Landing + cinco páginas" },
        body: {
          en: "Home, studio, classes, schedule, about, pricing and contact wired as a coherent multi-page experience.",
          es: "Inicio, estudio, clases, horario, sobre mí, precios y contacto enlazados como una experiencia multipágina coherente.",
        },
      },
      {
        title: { en: "Admin content panel", es: "Panel de contenidos" },
        body: {
          en: "Edit texts and swap images from a private admin without opening a code editor.",
          es: "Edita textos y cambia imágenes desde un admin privado sin abrir el editor de código.",
        },
      },
      {
        title: { en: "Brand colour control", es: "Control de colores de marca" },
        body: {
          en: "Colours and visual tokens adjustable so the look can evolve with the studio.",
          es: "Colores y tokens visuales ajustables para que la apariencia evolucione con el estudio.",
        },
      },
      {
        title: { en: "Native, builder-free stack", es: "Stack nativo, sin builders" },
        body: {
          en: "Custom code instead of WordPress or Wix — faster pages and full ownership of every detail.",
          es: "Código a medida en lugar de WordPress o Wix: páginas más rápidas y control total de cada detalle.",
        },
      },
    ],
    metrics: [
      { value: "6", label: { en: "Public pages (landing + 5)", es: "Páginas públicas (landing + 5)" } },
      { value: "100%", label: { en: "Customisable via admin", es: "Personalizable desde el admin" } },
      { value: "0", label: { en: "Page-builder lock-in", es: "Dependencia de page builders" } },
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    image: "/projects/blau-yoga.png",
    liveUrl: "https://cyane-yoga.vercel.app/",
  },
  {
    slug: "dance-academy-platform",
    name: "Wey Productions",
    category: "platform",
    icon: "users",
    accent: "from-brand-400/25 via-brand-600/10 to-transparent",
    year: "2026",
    featured: true,
    tagline: {
      en: "Custom dynamic web app for a Barcelona dance academy. Responsive, fast, and built with solid SEO.",
      es: "Aplicación web dinámica hecha a medida para una academia de baile de Barcelona. Responsive, rápida y con buen SEO.",
    },
    role: { en: "Full-stack developer, direct client project", es: "Desarrollador full-stack, proyecto directo de cliente" },
    timeline: { en: "4 months", es: "4 meses" },
    challenge: {
      en: "The academy ran on a shared spreadsheet, a paper attendance book and several WhatsApp groups. Nobody knew reliably who had paid, classes were double-booked, and the owner spent most of Sunday reconciling the week by hand.",
      es: "La academia funcionaba con una hoja de cálculo compartida, un libro de asistencia en papel y varios grupos de WhatsApp. Nadie sabía con certeza quién había pagado, las clases se duplicaban y la dueña pasaba casi todo el domingo cuadrando la semana a mano.",
    },
    approach: {
      en: "I modelled the real domain first — courses, terms, class occurrences, memberships and drop-ins — because getting that wrong is what makes booking systems collapse later. On top of it went a public schedule with live capacity, self-service enrolment with recurring payments, QR check-in for the door, and an admin side where the owner can see occupancy, revenue and outstanding payments without exporting anything. Automated reminders replaced the WhatsApp broadcasting entirely.",
      es: "Modelé primero el dominio real — cursos, trimestres, ocurrencias de clase, membresías y clases sueltas — porque equivocarse ahí es lo que hace que los sistemas de reservas se derrumben después. Encima construí un horario público con aforo en vivo, inscripción autogestionada con pagos recurrentes, check-in por QR en la puerta y un panel donde la dueña ve ocupación, ingresos y pagos pendientes sin exportar nada. Los recordatorios automáticos sustituyeron por completo la difusión por WhatsApp.",
    },
    outcome: {
      en: "Administration collapsed from a full weekend day to a short check on Monday morning. Double bookings stopped, unpaid memberships became visible immediately, and the academy could finally see which classes were actually profitable.",
      es: "La administración pasó de un día entero de fin de semana a una revisión corta el lunes por la mañana. Se acabaron las reservas duplicadas, los impagos se hicieron visibles al instante y la academia pudo ver por fin qué clases eran realmente rentables.",
    },
    features: [
      {
        title: { en: "Live schedule and capacity", es: "Horario y aforo en vivo" },
        body: {
          en: "A public timetable with real-time places left, waiting lists and cancellation windows.",
          es: "Un horario público con plazas restantes en tiempo real, listas de espera y ventanas de cancelación.",
        },
      },
      {
        title: { en: "Memberships and drop-ins", es: "Membresías y clases sueltas" },
        body: {
          en: "Recurring subscriptions, class packs and single bookings under one payment flow.",
          es: "Suscripciones recurrentes, bonos de clases y reservas sueltas en un único flujo de pago.",
        },
      },
      {
        title: { en: "QR check-in", es: "Check-in por QR" },
        body: {
          en: "Attendance taken at the door in seconds, feeding straight into occupancy reporting.",
          es: "Asistencia registrada en la puerta en segundos, alimentando directamente los informes de ocupación.",
        },
      },
      {
        title: { en: "Owner dashboard", es: "Panel para la dueña" },
        body: {
          en: "Revenue, occupancy per class and outstanding payments, without a single export.",
          es: "Ingresos, ocupación por clase y pagos pendientes, sin una sola exportación.",
        },
      },
    ],
    metrics: [
      { value: "−90%", label: { en: "Time spent on admin", es: "Tiempo dedicado a administración" } },
      { value: "0", label: { en: "Double bookings since launch", es: "Reservas duplicadas desde el lanzamiento" } },
      { value: "3x", label: { en: "Faster enrolment for students", es: "Inscripción más rápida para alumnos" } },
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Resend", "Tailwind CSS"],
    image: "/projects/soriano_app.png",
    liveUrl: "https://soriano-app.vercel.app/",
  },
  {
    slug: "language-learning-app",
    name: "Bocabla",
    category: "education",
    icon: "graduation-cap",
    accent: "from-brand-500/25 via-brand-600/10 to-transparent",
    year: "2026",
    featured: true,
    tagline: {
      en: "A gamified language learning app with streaks, spaced repetition and bite-sized lessons.",
      es: "Una app de aprendizaje de idiomas gamificada con rachas, repetición espaciada y lecciones breves.",
    },
    role: { en: "Sole developer and product design", es: "Desarrollador único y diseño de producto" },
    timeline: { en: "5 months", es: "5 meses" },
    challenge: {
      en: "Language apps lose people in week two. The lessons get harder, the streak breaks once, and the habit dies. The problem is not content — it is that most apps have no memory of what a specific learner is actually struggling with, so every session feels equally hard.",
      es: "Las apps de idiomas pierden a la gente en la segunda semana. Las lecciones se complican, la racha se rompe una vez y el hábito muere. El problema no es el contenido: la mayoría de apps no recuerdan con qué está luchando cada alumno concreto, así que todas las sesiones se sienten igual de duras.",
    },
    approach: {
      en: "I built a lesson engine on top of a spaced-repetition scheduler that tracks confidence per individual item, not per lesson. Every answer updates an interval, and the next session is assembled from what is closest to being forgotten. Around that sits the motivation layer: streaks with a forgiveness day, XP, and a progress map that always shows the next small step rather than the distant finish line.",
      es: "Construí un motor de lecciones sobre un planificador de repetición espaciada que sigue la confianza de cada elemento individual, no de la lección completa. Cada respuesta actualiza un intervalo y la siguiente sesión se ensambla con lo que está más cerca de olvidarse. Alrededor está la capa de motivación: rachas con un día de perdón, XP y un mapa de progreso que siempre muestra el siguiente paso pequeño en lugar de la meta lejana.",
    },
    outcome: {
      en: "Learners return because the app meets them where they are weakest instead of marching through a fixed syllabus. Session completion and week-two retention both moved well above the baselines the project started from.",
      es: "Los alumnos vuelven porque la app les atiende donde son más débiles en lugar de avanzar por un plan fijo. La finalización de sesiones y la retención en la segunda semana subieron muy por encima de las referencias iniciales del proyecto.",
    },
    features: [
      {
        title: { en: "Adaptive review scheduling", es: "Repaso adaptativo" },
        body: {
          en: "Per-item spaced repetition that rebuilds each session around what you are about to forget.",
          es: "Repetición espaciada por elemento que reconstruye cada sesión con lo que estás a punto de olvidar.",
        },
      },
      {
        title: { en: "Streaks that survive real life", es: "Rachas que sobreviven a la vida real" },
        body: {
          en: "A forgiveness day and catch-up sessions, because one missed evening should not reset months of work.",
          es: "Un día de perdón y sesiones de recuperación, porque una noche perdida no debería borrar meses de trabajo.",
        },
      },
      {
        title: { en: "Audio-first exercises", es: "Ejercicios centrados en audio" },
        body: {
          en: "Listening and pronunciation drills with pre-generated audio, cached for instant playback.",
          es: "Ejercicios de escucha y pronunciación con audio pregenerado y cacheado para reproducción instantánea.",
        },
      },
      {
        title: { en: "Progress that reads at a glance", es: "Progreso legible de un vistazo" },
        body: {
          en: "A skill map showing mastery per topic, so learners can see the shape of what they know.",
          es: "Un mapa de habilidades con el dominio por tema, para que el alumno vea la forma de lo que sabe.",
        },
      },
    ],
    metrics: [
      { value: "+38%", label: { en: "Week-two retention", es: "Retención semana dos" } },
      { value: "4.2", label: { en: "Sessions per user weekly", es: "Sesiones por usuario a la semana" } },
      { value: "<1s", label: { en: "Time to first exercise", es: "Tiempo al primer ejercicio" } },
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS", "Web Audio API"],
    image: "/projects/bocabla.png",
  },
  {
    slug: "salsa-hits-offline",
    name: "Salsa Hits",
    category: "offline",
    icon: "music",
    accent: "from-accent-500/25 via-brand-500/10 to-transparent",
    year: "2026",
    featured: true,
    tagline: {
      en: "An offline-first music app for social dancers, built to work in venues with no signal.",
      es: "Una app de música offline-first para bailarines sociales, hecha para funcionar en locales sin cobertura.",
    },
    role: { en: "Sole developer", es: "Desarrollador único" },
    timeline: { en: "3 months", es: "3 meses" },
    challenge: {
      en: "Dancers and DJs need their music in basements, festival halls and studios — exactly the places where mobile data does not reach. A streaming-only app is useless the moment the connection drops mid-song, and the usual answer of downloading a whole library is too heavy for a phone.",
      es: "Bailarines y DJs necesitan su música en sótanos, salas de festival y estudios: exactamente donde no llega la cobertura. Una app solo de streaming es inútil en el momento en que la conexión cae a mitad de canción, y la respuesta habitual de descargar toda la biblioteca es demasiado pesada para un móvil.",
    },
    approach: {
      en: "I made offline the default rather than a fallback. The app is a PWA with a service worker that caches the interface shell on first visit and then lets users pin specific playlists for offline use, storing audio in the Cache API with a size budget they control. Playback state, queue position and newly created playlists are written locally and synchronised opportunistically whenever a connection reappears, so the app never blocks on the network.",
      es: "Hice que offline fuese el modo por defecto y no un plan B. La app es una PWA con un service worker que cachea el shell de la interfaz en la primera visita y después permite fijar listas concretas para uso offline, guardando el audio en la Cache API con un límite de tamaño que el usuario controla. El estado de reproducción, la posición en la cola y las listas nuevas se escriben en local y se sincronizan de forma oportunista cuando vuelve la conexión, así la app nunca se bloquea esperando a la red.",
    },
    outcome: {
      en: "The app works identically in airplane mode and on fibre. Users pin a night's playlist before they leave home and never think about connectivity again, which is exactly the point.",
      es: "La app funciona igual en modo avión que con fibra. Los usuarios fijan la lista de la noche antes de salir de casa y no vuelven a pensar en la conectividad, que es justo el objetivo.",
    },
    features: [
      {
        title: { en: "Pin playlists for offline", es: "Fijar listas para offline" },
        body: {
          en: "Selective caching with a user-controlled storage budget and clear per-playlist status.",
          es: "Cacheado selectivo con límite de almacenamiento controlado por el usuario y estado claro por lista.",
        },
      },
      {
        title: { en: "Background sync", es: "Sincronización en segundo plano" },
        body: {
          en: "Local writes queue up and reconcile automatically once the device is back online.",
          es: "Las escrituras locales se encolan y se reconcilian solas cuando el dispositivo vuelve a estar en línea.",
        },
      },
      {
        title: { en: "Installable on any device", es: "Instalable en cualquier dispositivo" },
        body: {
          en: "Full PWA install, lock-screen media controls and gapless queue playback.",
          es: "Instalación PWA completa, controles de medios en pantalla de bloqueo y cola sin cortes.",
        },
      },
      {
        title: { en: "Tempo and timing metadata", es: "Metadatos de tempo y compás" },
        body: {
          en: "BPM and count-in information surfaced per track, so dancers can pick by tempo.",
          es: "Información de BPM y entrada por pista, para que los bailarines elijan por tempo.",
        },
      },
    ],
    metrics: [
      { value: "100%", label: { en: "Features available offline", es: "Funciones disponibles offline" } },
      { value: "0", label: { en: "Network calls to start playback", es: "Llamadas de red para empezar a sonar" } },
      { value: "98", label: { en: "Lighthouse PWA score", es: "Puntuación PWA de Lighthouse" } },
    ],
    stack: ["Next.js", "TypeScript", "Service Workers", "IndexedDB", "Cache API", "Workbox"],
    liveUrl: "https://salsa-instruments.vercel.app/",
  },
  {
    slug: "net-worth-tracker",
    name: "Net Worth App",
    category: "fintech",
    icon: "wallet",
    accent: "from-emerald-400/20 via-brand-500/10 to-transparent",
    year: "2024",
    featured: true,
    tagline: {
      en: "A private net worth tracker that turns scattered accounts into one honest number over time.",
      es: "Un registro privado de patrimonio que convierte cuentas dispersas en un único número honesto a lo largo del tiempo.",
    },
    role: { en: "Sole developer", es: "Desarrollador único" },
    timeline: { en: "3 months", es: "3 meses" },
    challenge: {
      en: "Anyone with a couple of bank accounts, a pension, some crypto and a mortgage has no idea what they are actually worth. Bank apps show fragments, and spreadsheets answer today's question but lose the history — which is the only part that tells you whether things are improving.",
      es: "Cualquiera con un par de cuentas, un plan de pensiones, algo de cripto y una hipoteca no tiene idea real de su patrimonio. Las apps bancarias muestran fragmentos y las hojas de cálculo responden a la pregunta de hoy pero pierden el histórico, que es la única parte que dice si las cosas van mejorando.",
    },
    approach: {
      en: "I built it around immutable monthly snapshots instead of live balances. Each account or asset gets a value entry per period, so the history is never overwritten and the trend is always computable. Multi-currency positions are converted at the rate of their own snapshot date rather than today's, which keeps historical charts truthful. Liabilities are modelled as first-class entries so the headline figure is real net worth, not a total of assets.",
      es: "Lo construí en torno a instantáneas mensuales inmutables en lugar de saldos en vivo. Cada cuenta o activo recibe un valor por periodo, así el histórico nunca se sobrescribe y la tendencia siempre es calculable. Las posiciones en varias divisas se convierten al tipo de su propia fecha de instantánea y no al de hoy, lo que mantiene los gráficos históricos veraces. Los pasivos se modelan como entradas de primer nivel para que la cifra principal sea patrimonio neto real y no una suma de activos.",
    },
    outcome: {
      en: "One screen answers the only question that matters: is this going up, and because of what. Because the data model is snapshot-based, adding a new account never distorts the past.",
      es: "Una sola pantalla responde a la única pregunta que importa: ¿esto sube, y por qué? Como el modelo de datos se basa en instantáneas, añadir una cuenta nueva nunca distorsiona el pasado.",
    },
    features: [
      {
        title: { en: "Monthly snapshots", es: "Instantáneas mensuales" },
        body: {
          en: "Immutable period entries, so history stays intact no matter what you add later.",
          es: "Entradas de periodo inmutables, para que el histórico siga intacto sin importar lo que añadas después.",
        },
      },
      {
        title: { en: "Assets and liabilities", es: "Activos y pasivos" },
        body: {
          en: "Mortgages and loans modelled properly, so the headline number is genuine net worth.",
          es: "Hipotecas y préstamos bien modelados, para que la cifra principal sea patrimonio neto real.",
        },
      },
      {
        title: { en: "Multi-currency, historically correct", es: "Multidivisa, correcto históricamente" },
        body: {
          en: "Each snapshot converts at its own period rate instead of retroactively at today's.",
          es: "Cada instantánea convierte al tipo de su periodo y no retroactivamente al de hoy.",
        },
      },
      {
        title: { en: "Allocation and trend views", es: "Vistas de distribución y tendencia" },
        body: {
          en: "Composition over time, contribution per account, and growth broken out from deposits.",
          es: "Composición en el tiempo, aportación por cuenta y crecimiento separado de las aportaciones.",
        },
      },
    ],
    metrics: [
      { value: "1", label: { en: "Screen for the full picture", es: "Pantalla para la imagen completa" } },
      { value: "10+", label: { en: "Account types supported", es: "Tipos de cuenta soportados" } },
      { value: "Local", label: { en: "Data stays private", es: "Los datos siguen privados" } },
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle", "Recharts", "Tailwind CSS"],
    liveUrl: "https://net-worth-app-antoni-bassols-lopezs-projects.vercel.app/",
  },
  {
    slug: "bingo-live",
    name: "Bingo Live",
    category: "realtime",
    icon: "grid",
    accent: "from-brand-500/30 via-accent-500/15 to-transparent",
    year: "2026",
    featured: true,
    tagline: {
      en: "A multiplayer bingo game where cards, calls and winners sync live over WebSockets.",
      es: "Un bingo multijugador donde cartones, cantadas y ganadores se sincronizan en vivo con WebSockets.",
    },
    role: { en: "Sole developer", es: "Desarrollador único" },
    timeline: { en: "Personal project", es: "Proyecto personal" },
    challenge: {
      en: "Bingo only works when every player sees the same ball at the same moment. A refresh-based UI lags, desyncs cards and ruins the room the second someone joins late or drops offline mid-round.",
      es: "El bingo solo funciona si todos ven la misma bola en el mismo instante. Una UI a base de refrescos se desfasa, desincroniza cartones y rompe la sala en cuanto alguien entra tarde o se cae a mitad de ronda.",
    },
    approach: {
      en: "I built a lobby-to-game flow on a realtime WebSocket channel: players join a room, the host starts the round, and every call is broadcast so cards mark themselves and win conditions are checked on the server. Late joiners catch up from room state instead of guessing what they missed.",
      es: "Monté el flujo de lobby a partida sobre un canal WebSocket en tiempo real: los jugadores entran a una sala, el anfitrión arranca la ronda y cada cantada se emite para que los cartones se marquen solos y las condiciones de victoria se validen en el servidor. Quien entra tarde recupera el estado de la sala en lugar de adivinar lo que se perdió.",
    },
    outcome: {
      en: "A playable live bingo room you can open on any device: share the link, fill the lobby and run a round without page refreshes or manual sync.",
      es: "Una sala de bingo en vivo jugable desde cualquier dispositivo: compartes el enlace, llenas el lobby y tiras una ronda sin refrescar ni sincronizar a mano.",
    },
    features: [
      {
        title: { en: "Realtime lobby", es: "Lobby en tiempo real" },
        body: {
          en: "Players appear in the room as they join, ready for the host to start the game.",
          es: "Los jugadores aparecen en la sala al unirse, listos para que el anfitrión arranque la partida.",
        },
      },
      {
        title: { en: "Live ball calls", es: "Cantadas en vivo" },
        body: {
          en: "Each number is pushed over WebSockets so every connected card updates together.",
          es: "Cada número se emite por WebSockets para que todos los cartones conectados se actualicen a la vez.",
        },
      },
      {
        title: { en: "Shared game state", es: "Estado de partida compartido" },
        body: {
          en: "Room state stays authoritative on the server so reconnects and late joins stay consistent.",
          es: "El estado de la sala queda en el servidor para que reconexiones y entradas tardías sigan siendo coherentes.",
        },
      },
      {
        title: { en: "Multi-device play", es: "Juego multi-dispositivo" },
        body: {
          en: "Open the link on phones or laptops in the same room — no install, no refresh loop.",
          es: "Abre el enlace en móviles u ordenadores en la misma sala: sin instalar ni bucles de refresco.",
        },
      },
    ],
    metrics: [
      { value: "Live", label: { en: "WebSocket sync", es: "Sincronización WebSocket" } },
      { value: "Multi", label: { en: "Players per room", es: "Jugadores por sala" } },
      { value: "0", label: { en: "Page refreshes mid-game", es: "Refrescos a mitad de partida" } },
    ],
    stack: ["TypeScript", "React", "WebSockets", "Node.js", "Fly.io"],
    liveUrl: "https://bingogame.fly.dev/",
  },
  {
    slug: "smart-cv-builder",
    name: "Smart CV Builder",
    category: "ai",
    icon: "file-text",
    accent: "from-violet-400/20 via-brand-500/10 to-transparent",
    year: "2025",
    featured: true,
    tagline: {
      en: "An AI CV builder that rewrites your experience against the specific job you are applying for.",
      es: "Un generador de CV con IA que reescribe tu experiencia según la oferta concreta a la que aplicas.",
    },
    role: { en: "Sole developer", es: "Desarrollador único" },
    timeline: { en: "3 months", es: "3 meses" },
    challenge: {
      en: "Most CV tools are formatting tools. They make a document look tidy but leave the hardest part to the user: deciding what to emphasise for this particular role, and phrasing it as an outcome instead of a duty. Meanwhile applicant tracking systems silently discard layouts they cannot parse.",
      es: "La mayoría de herramientas de CV son herramientas de maquetación. Dejan un documento ordenado pero dejan al usuario la parte más difícil: decidir qué destacar para ese puesto concreto y redactarlo como resultado en lugar de como tarea. Y mientras, los sistemas de seguimiento de candidatos descartan en silencio los diseños que no pueden leer.",
    },
    approach: {
      en: "The app keeps a structured profile of everything a person has done, then treats each application as a projection of that profile against a pasted job description. It extracts the requirements from the posting, matches them to real entries in the profile, and rewrites bullets to lead with outcomes — always from stored facts, never inventing experience. Every export is a clean, parseable document, and each generated version is saved so applications can be compared later.",
      es: "La app mantiene un perfil estructurado de todo lo que la persona ha hecho y trata cada candidatura como una proyección de ese perfil contra una oferta pegada. Extrae los requisitos del anuncio, los empareja con entradas reales del perfil y reescribe los puntos para empezar por el resultado, siempre a partir de hechos guardados y sin inventar experiencia. Cada exportación es un documento limpio y legible por máquinas, y cada versión generada se guarda para poder comparar candidaturas después.",
    },
    outcome: {
      en: "Tailoring a CV went from an hour of rewriting to a couple of minutes of review. Because output is generated from stored facts and always exported in a parseable layout, applications stop dying quietly in the screening step.",
      es: "Adaptar un CV pasó de una hora de reescritura a un par de minutos de revisión. Como la salida se genera a partir de hechos guardados y siempre se exporta en un formato legible, las candidaturas dejan de morir en silencio en el filtrado.",
    },
    features: [
      {
        title: { en: "Job-description matching", es: "Emparejado con la oferta" },
        body: {
          en: "Requirements extracted from the posting and mapped against your real experience.",
          es: "Requisitos extraídos del anuncio y emparejados con tu experiencia real.",
        },
      },
      {
        title: { en: "Outcome-led rewriting", es: "Reescritura orientada a resultados" },
        body: {
          en: "Bullets rephrased to lead with impact, grounded strictly in what you actually did.",
          es: "Puntos reescritos para empezar por el impacto, ceñidos estrictamente a lo que hiciste.",
        },
      },
      {
        title: { en: "Parseable exports", es: "Exportaciones legibles" },
        body: {
          en: "Clean PDF and DOCX output that applicant tracking systems can read reliably.",
          es: "Salida PDF y DOCX limpia que los sistemas de seguimiento pueden leer con fiabilidad.",
        },
      },
      {
        title: { en: "Version history per application", es: "Historial de versiones por candidatura" },
        body: {
          en: "Every tailored CV stored against its job posting, so you can compare what worked.",
          es: "Cada CV adaptado guardado junto a su oferta, para comparar qué funcionó.",
        },
      },
    ],
    metrics: [
      { value: "~2 min", label: { en: "To tailor a full CV", es: "Para adaptar un CV completo" } },
      { value: "2", label: { en: "Export formats", es: "Formatos de exportación" } },
      { value: "0", label: { en: "Invented experience", es: "Experiencia inventada" } },
    ],
    stack: ["Next.js", "TypeScript", "OpenAI API", "PostgreSQL", "React PDF", "Zod"],
  },
  {
    slug: "pdf-book-library",
    name: "PDF Shelf",
    category: "productivity",
    icon: "book-open",
    accent: "from-amber-400/20 via-brand-500/10 to-transparent",
    year: "2024",
    featured: true,
    tagline: {
      en: "A personal library for PDF books with a real reader and reading progress that follows you across devices.",
      es: "Una biblioteca personal de libros en PDF con lector propio y progreso de lectura que te sigue entre dispositivos.",
    },
    role: { en: "Sole developer", es: "Desarrollador único" },
    timeline: { en: "2 months", es: "2 meses" },
    challenge: {
      en: "Technical books and course material end up as PDFs scattered across a downloads folder, a cloud drive and two devices. Nothing tracks where you stopped, so every session starts with scrolling to find your place, and half-read books are invisible.",
      es: "Los libros técnicos y el material de cursos acaban como PDFs dispersos entre la carpeta de descargas, un disco en la nube y dos dispositivos. Nada registra dónde te quedaste, así que cada sesión empieza buscando la página, y los libros a medias son invisibles.",
    },
    approach: {
      en: "I built a library and a reader rather than just storage. Uploads are parsed for metadata and a cover, then rendered in a custom viewer built on a canvas-based PDF renderer with virtualised pages so a 900-page book scrolls smoothly. Reading position is persisted continuously and reconciled per device, and highlights and notes are anchored to page coordinates so they survive re-opening. The shelf view sorts by what is actually in progress.",
      es: "Construí una biblioteca y un lector, no solo almacenamiento. Las subidas se analizan para extraer metadatos y portada, y luego se muestran en un visor propio sobre un renderizador de PDF en canvas con páginas virtualizadas, para que un libro de 900 páginas se desplace con fluidez. La posición de lectura se guarda de forma continua y se reconcilia por dispositivo, y los subrayados y notas se anclan a coordenadas de página para que sobrevivan al reabrir. La estantería ordena por lo que está realmente en curso.",
    },
    outcome: {
      en: "Reading picks up exactly where it stopped, on whichever device is nearest. Books in progress are visible instead of buried, which is what actually makes them get finished.",
      es: "La lectura continúa exactamente donde se dejó, en el dispositivo que tengas más cerca. Los libros en curso son visibles en lugar de estar enterrados, que es lo que de verdad hace que se terminen.",
    },
    features: [
      {
        title: { en: "Custom PDF reader", es: "Lector de PDF propio" },
        body: {
          en: "Virtualised page rendering that stays smooth on very long documents.",
          es: "Renderizado de páginas virtualizado que se mantiene fluido en documentos muy largos.",
        },
      },
      {
        title: { en: "Progress across devices", es: "Progreso entre dispositivos" },
        body: {
          en: "Reading position persisted continuously and reconciled per device.",
          es: "Posición de lectura guardada continuamente y reconciliada por dispositivo.",
        },
      },
      {
        title: { en: "Highlights and notes", es: "Subrayados y notas" },
        body: {
          en: "Annotations anchored to page coordinates so they survive reopening and resizing.",
          es: "Anotaciones ancladas a coordenadas de página para que sobrevivan al reabrir y redimensionar.",
        },
      },
      {
        title: { en: "Automatic metadata and covers", es: "Metadatos y portadas automáticos" },
        body: {
          en: "Titles, authors and cover thumbnails extracted on upload, with full-text search.",
          es: "Títulos, autores y miniaturas de portada extraídos al subir, con búsqueda de texto completo.",
        },
      },
    ],
    metrics: [
      { value: "900+", label: { en: "Pages scrolled smoothly", es: "Páginas con desplazamiento fluido" } },
      { value: "Auto", label: { en: "Metadata on upload", es: "Metadatos al subir" } },
      { value: "Synced", label: { en: "Progress everywhere", es: "Progreso en todos lados" } },
    ],
    stack: ["Next.js", "TypeScript", "PDF.js", "PostgreSQL", "S3", "Tailwind CSS"],
    liveUrl: "https://my-reading-shelf.vercel.app/",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

/* -------------------------------------------------------------------------- */
/*  Services                                                                   */
/* -------------------------------------------------------------------------- */
/* TODO: confirm the prices and timelines below match what you actually sell.  */

export type ServicePackage = {
  name: Localized;
  price: string;
  timeline: Localized;
  description: Localized;
  features: LocalizedList;
  popular?: boolean;
};

export type Service = {
  slug: "web-development" | "ai-automation";
  icon: IconName;
  name: Localized;
  tagline: Localized;
  summary: Localized;
  teaser: Localized;
  outcomes: LocalizedList;
  packages: ServicePackage[];
  process: { icon: IconName; title: Localized; body: Localized }[];
  faq: { question: Localized; answer: Localized }[];
};

export const services: Service[] = [
  {
    slug: "web-development",
    icon: "code",
    name: { en: "Web Development", es: "Desarrollo Web" },
    tagline: {
      en: "Websites and web apps that load fast, rank well and turn visitors into customers.",
      es: "Webs y aplicaciones web que cargan rápido, posicionan bien y convierten visitas en clientes.",
    },
    summary: {
      en: "I design and build the site your business deserves: fast, accessible, easy to edit and built on a stack you will not need to throw away in a year. Fixed scope, fixed price, and a date you can plan around.",
      es: "Diseño y construyo la web que tu negocio merece: rápida, accesible, fácil de editar y sobre un stack que no tendrás que tirar en un año. Alcance fijo, precio fijo y una fecha con la que puedes planificar.",
    },
    teaser: {
      en: "From a single high-converting landing page to a full custom web application. Available directly or through my Fiverr profile.",
      es: "Desde una landing page que convierte hasta una aplicación web completa a medida. Disponible directamente o a través de mi perfil de Fiverr.",
    },
    outcomes: {
      en: [
        "A site that scores in the green on Core Web Vitals, not just on your laptop",
        "Copy and structure organised around the action you want visitors to take",
        "Technical SEO, metadata and structured data configured from day one",
        "Accessible to keyboard and screen reader users, tested rather than assumed",
        "Content you can update yourself without calling a developer",
      ],
      es: [
        "Una web en verde en Core Web Vitals, y no solo en tu portátil",
        "Textos y estructura organizados en torno a la acción que quieres que haga el visitante",
        "SEO técnico, metadatos y datos estructurados configurados desde el primer día",
        "Accesible para teclado y lectores de pantalla, probado y no supuesto",
        "Contenido que puedes actualizar tú sin llamar a un desarrollador",
      ],
    },
    packages: [
      {
        name: { en: "Landing Page", es: "Landing Page" },
        price: "450€",
        timeline: { en: "3 - 5 days", es: "3 - 5 días" },
        description: {
          en: "One page, one goal. Ideal for launching a product, a service or a campaign quickly.",
          es: "Una página, un objetivo. Ideal para lanzar un producto, un servicio o una campaña rápido.",
        },
        features: {
          en: [
            "Single responsive page, custom design",
            "Contact form with email delivery",
            "Core Web Vitals and on-page SEO",
            "Analytics installed and verified",
            "Deployed on your domain",
          ],
          es: [
            "Página única responsive, diseño a medida",
            "Formulario de contacto con envío por email",
            "Core Web Vitals y SEO on-page",
            "Analítica instalada y verificada",
            "Desplegada en tu dominio",
          ],
        },
      },
      {
        name: { en: "Business Website", es: "Web Corporativa" },
        price: "1.200€",
        timeline: { en: "2 - 3 weeks", es: "2 - 3 semanas" },
        description: {
          en: "A complete multi-page site with editable content, built to be found and to convert.",
          es: "Una web completa de varias páginas con contenido editable, hecha para encontrarse y convertir.",
        },
        features: {
          en: [
            "Up to 8 custom pages",
            "CMS so you can edit content yourself",
            "Blog or portfolio section",
            "Multilingual setup available",
            "Technical SEO and structured data",
            "30 days of post-launch support",
          ],
          es: [
            "Hasta 8 páginas a medida",
            "CMS para que edites el contenido tú",
            "Sección de blog o portfolio",
            "Configuración multiidioma disponible",
            "SEO técnico y datos estructurados",
            "30 días de soporte tras el lanzamiento",
          ],
        },
        popular: true,
      },
      {
        name: { en: "Web Application", es: "Aplicación Web" },
        price: "3.500€",
        timeline: { en: "From 6 weeks", es: "Desde 6 semanas" },
        description: {
          en: "Custom software: accounts, dashboards, payments, integrations. Scoped together before anything is written.",
          es: "Software a medida: cuentas, paneles, pagos, integraciones. Definido contigo antes de escribir nada.",
        },
        features: {
          en: [
            "Authentication and user roles",
            "Database design and admin panel",
            "Payments and third-party integrations",
            "AI integration when the product needs it",
            "Automated tests on critical paths",
            "CI/CD pipeline and monitoring",
            "Technical documentation and handover",
          ],
          es: [
            "Autenticación y roles de usuario",
            "Diseño de base de datos y panel de administración",
            "Pagos e integraciones con terceros",
            "Integración de IA cuando el producto lo necesite",
            "Tests automáticos en los flujos críticos",
            "Pipeline de CI/CD y monitorización",
            "Documentación técnica y traspaso",
          ],
        },
      },
    ],
    process: [
      {
        icon: "message-square",
        title: { en: "Scoping call", es: "Llamada de alcance" },
        body: {
          en: "Thirty minutes on what the site has to achieve, who it is for and what already exists. You leave with a fixed price and a date.",
          es: "Treinta minutos sobre qué debe lograr la web, para quién es y qué existe ya. Te vas con un precio fijo y una fecha.",
        },
      },
      {
        icon: "palette",
        title: { en: "Design and structure", es: "Diseño y estructura" },
        body: {
          en: "Layout, copy structure and visual direction agreed before a single component is built, so revisions are cheap.",
          es: "Estructura, textos y dirección visual acordados antes de construir un solo componente, para que las revisiones sean baratas.",
        },
      },
      {
        icon: "code",
        title: { en: "Build", es: "Construcción" },
        body: {
          en: "I build on a staging URL you can open at any point. You see progress continuously instead of waiting for a reveal.",
          es: "Construyo en una URL de pruebas que puedes abrir en cualquier momento. Ves el progreso de forma continua en lugar de esperar un estreno.",
        },
      },
      {
        icon: "rocket",
        title: { en: "Launch and handover", es: "Lanzamiento y traspaso" },
        body: {
          en: "Domain, analytics, search console and a short walkthrough of how to edit your own content. Then support while you settle in.",
          es: "Dominio, analítica, search console y una guía corta para editar tu propio contenido. Después, soporte mientras te acomodas.",
        },
      },
    ],
    faq: [
      {
        question: { en: "Should I order on Fiverr or contact you directly?", es: "¿Contrato en Fiverr o te escribo directamente?" },
        answer: {
          en: "Both reach me and the work is identical. Fiverr is convenient if you want buyer protection and a packaged scope. For larger or ongoing projects, contacting me directly is usually simpler and cheaper.",
          es: "Ambos llegan a mí y el trabajo es idéntico. Fiverr es cómodo si quieres protección del comprador y un alcance empaquetado. Para proyectos grandes o continuos, escribirme directamente suele ser más simple y económico.",
        },
      },
      {
        question: { en: "Do you write the content and source the images?", es: "¿Escribes el contenido y buscas las imágenes?" },
        answer: {
          en: "I structure the page and draft the copy so nothing ships as placeholder text, then you review and adjust the wording. I select licensed imagery unless you have your own brand assets.",
          es: "Estructuro la página y redacto los textos para que nada salga con texto de relleno, y después tú revisas y ajustas. Selecciono imágenes con licencia salvo que tengas material propio de marca.",
        },
      },
      {
        question: { en: "What do you need from me to start?", es: "¿Qué necesitas de mí para empezar?" },
        answer: {
          en: "A clear idea of the goal, access to your domain, and whatever brand material you already have. If any of that is missing we sort it out in the scoping call.",
          es: "Una idea clara del objetivo, acceso a tu dominio y el material de marca que ya tengas. Si falta algo, lo resolvemos en la llamada de alcance.",
        },
      },
      {
        question: { en: "Who owns the code?", es: "¿De quién es el código?" },
        answer: {
          en: "You do, completely, on final payment. It goes in your repository and deploys to your accounts. There is no lock-in and no licence tied to me.",
          es: "Tuyo por completo al pago final. Va a tu repositorio y se despliega en tus cuentas. Sin dependencias ni licencias atadas a mí.",
        },
      },
      {
        question: { en: "Can you take over an existing site?", es: "¿Puedes hacerte cargo de una web existente?" },
        answer: {
          en: "Usually yes. I will review what is there first and tell you honestly whether it is better to improve it or rebuild it — rebuilding is not always the right answer.",
          es: "Normalmente sí. Primero reviso lo que hay y te digo con honestidad si conviene mejorarlo o reconstruirlo. Reconstruir no siempre es la respuesta correcta.",
        },
      },
    ],
  },
  {
    slug: "ai-automation",
    icon: "bot",
    name: { en: "AI Business Automation", es: "Automatización de Negocio con IA" },
    tagline: {
      en: "I find the manual work quietly draining your margin, and replace it with automation that pays for itself.",
      es: "Encuentro el trabajo manual que consume tu margen en silencio y lo sustituyo por automatización que se paga sola.",
    },
    summary: {
      en: "Most companies do not have a technology problem, they have a repetition problem. Quotes retyped into three systems, invoices reconciled by hand, reports rebuilt every Monday. I map where those hours go, put a number on them, and build the automation that gives them back — commonly reaching six figures of annual saving.",
      es: "La mayoría de empresas no tienen un problema de tecnología, tienen un problema de repetición. Presupuestos reescritos en tres sistemas, facturas cuadradas a mano, informes rehechos cada lunes. Mapeo dónde se van esas horas, les pongo un número y construyo la automatización que las devuelve, llegando habitualmente a cifras de ahorro anual de seis dígitos.",
    },
    teaser: {
      en: "A free audit that quantifies your manual process cost, then automation built and deployed against the biggest items.",
      es: "Una auditoría gratuita que cuantifica el coste de tus procesos manuales y después automatización construida y desplegada sobre lo más costoso.",
    },
    outcomes: {
      en: [
        "A costed map of every manual process, ranked by what it is worth to remove",
        "Automation running in your existing tools rather than a new platform to learn",
        "Documents, emails and data entry handled without a person in the loop",
        "Reporting that builds itself instead of consuming a morning each week",
        "A measurable before-and-after, so the saving is proven and not claimed",
      ],
      es: [
        "Un mapa con coste de cada proceso manual, ordenado por lo que vale eliminarlo",
        "Automatización funcionando en tus herramientas actuales, no una plataforma nueva que aprender",
        "Documentos, emails y entrada de datos gestionados sin una persona en medio",
        "Informes que se construyen solos en lugar de consumir una mañana cada semana",
        "Un antes y después medible, para que el ahorro esté demostrado y no prometido",
      ],
    },
    packages: [
      {
        name: { en: "Process Audit", es: "Auditoría de Procesos" },
        price: "0€",
        timeline: { en: "1 week", es: "1 semana" },
        description: {
          en: "I map your workflows, quantify the cost of each manual step and hand you a prioritised roadmap. Yours to keep either way.",
          es: "Mapeo tus flujos, cuantifico el coste de cada paso manual y te entrego una hoja de ruta priorizada. Es tuya en cualquier caso.",
        },
        features: {
          en: [
            "Interviews with the people doing the work",
            "Process map with hours and cost per step",
            "Automation opportunities ranked by return",
            "Written roadmap with effort estimates",
            "No obligation to continue",
          ],
          es: [
            "Entrevistas con quienes hacen el trabajo",
            "Mapa de procesos con horas y coste por paso",
            "Oportunidades de automatización ordenadas por retorno",
            "Hoja de ruta escrita con estimaciones de esfuerzo",
            "Sin obligación de continuar",
          ],
        },
      },
      {
        name: { en: "Automation Sprint", es: "Sprint de Automatización" },
        price: "2.900€",
        timeline: { en: "3 - 4 weeks", es: "3 - 4 semanas" },
        description: {
          en: "We take the highest-value item from the roadmap and put it live, measured against the baseline we recorded.",
          es: "Tomamos el punto de mayor valor de la hoja de ruta y lo ponemos en producción, medido contra la referencia que registramos.",
        },
        features: {
          en: [
            "One high-impact workflow fully automated",
            "Integrated with your current tools",
            "AI document and email processing where it fits",
            "Error handling and human escalation path",
            "Team training and written runbook",
            "Before-and-after measurement",
          ],
          es: [
            "Un flujo de alto impacto totalmente automatizado",
            "Integrado con tus herramientas actuales",
            "Procesamiento de documentos y emails con IA donde encaje",
            "Gestión de errores y vía de escalado a personas",
            "Formación del equipo y manual escrito",
            "Medición antes y después",
          ],
        },
        popular: true,
      },
      {
        name: { en: "Automation Partner", es: "Socio de Automatización" },
        price: "1.500€/mes",
        timeline: { en: "Rolling monthly", es: "Mensual renovable" },
        description: {
          en: "Ongoing capacity to work down the roadmap, maintain what is live and adapt as the business changes.",
          es: "Capacidad continua para avanzar la hoja de ruta, mantener lo desplegado y adaptarlo según cambie el negocio.",
        },
        features: {
          en: [
            "Continuous delivery from the roadmap",
            "Monitoring and maintenance of live automations",
            "Monthly savings report",
            "Priority response on failures",
            "Quarterly re-audit as processes evolve",
            "Cancel any month",
          ],
          es: [
            "Entrega continua desde la hoja de ruta",
            "Monitorización y mantenimiento de lo desplegado",
            "Informe mensual de ahorro",
            "Respuesta prioritaria ante fallos",
            "Reauditoría trimestral según evolucionen los procesos",
            "Cancelable cualquier mes",
          ],
        },
      },
    ],
    process: [
      {
        icon: "search",
        title: { en: "Audit", es: "Auditoría" },
        body: {
          en: "I sit with the people doing the repetitive work and record what actually happens, not what the process document says.",
          es: "Me siento con quienes hacen el trabajo repetitivo y registro lo que ocurre de verdad, no lo que dice el documento de proceso.",
        },
      },
      {
        icon: "euro",
        title: { en: "Quantify", es: "Cuantificar" },
        body: {
          en: "Every manual step gets hours and a cost attached. This is what turns a vague inefficiency into a business case.",
          es: "Cada paso manual recibe horas y un coste. Esto es lo que convierte una ineficiencia difusa en un caso de negocio.",
        },
      },
      {
        icon: "workflow",
        title: { en: "Build", es: "Construir" },
        body: {
          en: "Automation built into your existing tools, starting with the highest return so the project funds itself early.",
          es: "Automatización integrada en tus herramientas actuales, empezando por el mayor retorno para que el proyecto se financie pronto.",
        },
      },
      {
        icon: "line-chart",
        title: { en: "Measure and expand", es: "Medir y ampliar" },
        body: {
          en: "We compare against the baseline, prove the saving, then move to the next item on the roadmap.",
          es: "Comparamos contra la referencia, demostramos el ahorro y pasamos al siguiente punto de la hoja de ruta.",
        },
      },
    ],
    faq: [
      {
        question: { en: "Is the audit really free?", es: "¿La auditoría es realmente gratuita?" },
        answer: {
          en: "Yes, and the roadmap is yours whether or not you hire me. It is the fastest way for both of us to find out if there is enough value here to justify a project.",
          es: "Sí, y la hoja de ruta es tuya me contrates o no. Es la forma más rápida de que ambos sepamos si hay valor suficiente para justificar un proyecto.",
        },
      },
      {
        question: { en: "How can you claim savings of that size?", es: "¿Cómo puedes afirmar un ahorro de ese tamaño?" },
        answer: {
          en: "It is arithmetic, not optimism. A team of fifteen losing six hours each per week to manual work is over four thousand hours a year. Automating even part of that reaches six figures in most European salary bands — and I show you the calculation with your own numbers before you commit.",
          es: "Es aritmética, no optimismo. Un equipo de quince personas perdiendo seis horas cada una por semana en trabajo manual son más de cuatro mil horas al año. Automatizar solo una parte alcanza seis cifras en la mayoría de bandas salariales europeas, y te enseño el cálculo con tus propios números antes de que te comprometas.",
        },
      },
      {
        question: { en: "Will this replace my team?", es: "¿Esto sustituirá a mi equipo?" },
        answer: {
          en: "That is not what I am selling. I automate the work people dislike and are worst at — copying data, chasing documents, rebuilding the same report. Their hours move to the work that needs judgement.",
          es: "No es lo que vendo. Automatizo el trabajo que la gente odia y en el que peor rinde: copiar datos, perseguir documentos, rehacer el mismo informe. Sus horas se mueven al trabajo que requiere criterio.",
        },
      },
      {
        question: { en: "Do we have to change our software?", es: "¿Tenemos que cambiar de software?" },
        answer: {
          en: "Almost never. I automate around what you already use. Replacing core systems is a much bigger project and rarely the cheapest way to get the hours back.",
          es: "Casi nunca. Automatizo alrededor de lo que ya usas. Sustituir sistemas centrales es un proyecto mucho mayor y rara vez la forma más económica de recuperar las horas.",
        },
      },
      {
        question: { en: "What about our data and compliance?", es: "¿Y nuestros datos y el cumplimiento normativo?" },
        answer: {
          en: "Data handling is agreed before anything is built. Where a process is sensitive, it can run against models hosted in the EU or on your own infrastructure, and every automated decision leaves an audit trail.",
          es: "El tratamiento de datos se acuerda antes de construir nada. Cuando un proceso es sensible, puede funcionar contra modelos alojados en la UE o en tu propia infraestructura, y cada decisión automatizada deja registro auditable.",
        },
      },
    ],
  },
];

export function getService(slug: Service["slug"]) {
  const service = services.find((item) => item.slug === slug);
  if (!service) throw new Error(`Unknown service: ${slug}`);
  return service;
}

/** Departments used as automation examples on the AI service page. */
export const automationAreas = [
  {
    icon: "target" as IconName,
    title: { en: "Sales", es: "Ventas" },
    body: {
      en: "Lead enrichment, quote generation from a call transcript, CRM updated without anyone typing.",
      es: "Enriquecimiento de leads, presupuestos generados desde la transcripción de una llamada, CRM actualizado sin que nadie escriba.",
    },
  },
  {
    icon: "file-text" as IconName,
    title: { en: "Finance", es: "Finanzas" },
    body: {
      en: "Invoice extraction, three-way matching, payment chasing and month-end reconciliation.",
      es: "Extracción de facturas, conciliación a tres bandas, seguimiento de cobros y cierre de mes.",
    },
  },
  {
    icon: "message-square" as IconName,
    title: { en: "Customer support", es: "Atención al cliente" },
    body: {
      en: "Drafted replies from your own knowledge base, routing by intent, escalation when confidence drops.",
      es: "Respuestas redactadas desde tu propia base de conocimiento, enrutado por intención y escalado cuando baja la confianza.",
    },
  },
  {
    icon: "users" as IconName,
    title: { en: "Operations", es: "Operaciones" },
    body: {
      en: "Order intake from email or PDF, stock alerts, supplier follow-up and scheduling.",
      es: "Recepción de pedidos por email o PDF, alertas de stock, seguimiento a proveedores y planificación.",
    },
  },
  {
    icon: "briefcase" as IconName,
    title: { en: "HR and onboarding", es: "RRHH y onboarding" },
    body: {
      en: "CV screening against real requirements, contract generation, access provisioning checklists.",
      es: "Filtrado de CVs contra requisitos reales, generación de contratos y checklists de provisión de accesos.",
    },
  },
  {
    icon: "line-chart" as IconName,
    title: { en: "Reporting", es: "Informes" },
    body: {
      en: "Dashboards and weekly summaries assembled from your systems, delivered before the meeting.",
      es: "Paneles y resúmenes semanales construidos desde tus sistemas y entregados antes de la reunión.",
    },
  },
];

/**
 * Illustrative ROI figures for the AI automation page.
 * TODO: adjust to the numbers you use in your own sales conversations.
 */
export const roiExample = {
  teamSize: 15,
  hoursPerPersonPerWeek: 6,
  hourlyCost: 32,
  automatedShare: 0.7,
} as const;

export function calculateRoi() {
  const { teamSize, hoursPerPersonPerWeek, hourlyCost, automatedShare } = roiExample;
  const weeklyHours = teamSize * hoursPerPersonPerWeek;
  const annualHours = weeklyHours * 46;
  const annualCost = annualHours * hourlyCost;
  const savedHoursWeekly = Math.round(weeklyHours * automatedShare);
  const annualSaving = Math.round(annualCost * automatedShare);

  return { weeklyHours, annualHours, annualCost, savedHoursWeekly, annualSaving };
}
