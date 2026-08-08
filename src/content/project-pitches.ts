import type { Localized, LocalizedList } from "@/content/site";

/** Audience-specific overlay for a project case study. */
export type ProjectPitch = {
  tagline: Localized;
  challenge: Localized;
  approach: Localized;
  outcome: Localized;
  features: { title: Localized; body: Localized }[];
  metrics?: { value: string; label: Localized }[];
  /** Plain-language benefit bullets for non-technical audiences. */
  benefits?: LocalizedList;
};

/**
 * Web = business owners buying websites (no jargon).
 * AI = business owners buying automation (ROI / process).
 * Missing pitches fall back to the recruiter (default) project fields.
 */
export const projectPitches: Record<string, { web?: ProjectPitch; ai?: ProjectPitch }> = {
  "blau-yoga": {
    web: {
      tagline: {
        en: "A fast, beautiful yoga studio website your clients can update themselves — texts, photos, colours and section order — without calling a developer.",
        es: "Una web rápida y bonita para un estudio de yoga que la dueña puede actualizar sola: textos, fotos, colores y el orden de las secciones, sin llamar a un programador.",
      },
      challenge: {
        en: "The studio needed a professional multi-page site that looks great on mobile, loads quickly and ranks well — without WordPress bloat or paying every time a sentence changes.",
        es: "El estudio necesitaba una web multipágina profesional que se viera bien en el móvil, cargara rápido y posicionara bien — sin el peso de WordPress ni pagar cada vez que cambia una frase.",
      },
      approach: {
        en: "A custom site with landing + inner pages and a simple admin: show or hide sections, reorder them, edit every title and paragraph, change colours and typography, and swap images — all from the browser.",
        es: "Una web a medida con landing + páginas interiores y un admin sencillo: mostrar u ocultar secciones, reordenarlas, editar títulos y textos, cambiar colores y tipografía, y sustituir imágenes — todo desde el navegador.",
      },
      outcome: {
        en: "A live brand site that feels premium, stays fast, and stays under the owner's control. Fixed price for the client: 480€.",
        es: "Una web de marca en producción que se siente premium, sigue siendo rápida y queda bajo control de la dueña. Precio fijo para la cliente: 480€.",
      },
      benefits: {
        en: [
          "Loads fast on phones",
          "Clear structure for Google (SEO)",
          "Easy to edit texts and images",
          "Colours and fonts you can change later",
          "No WordPress plugins to break",
        ],
        es: [
          "Carga rápida en el móvil",
          "Estructura clara para Google (SEO)",
          "Textos e imágenes fáciles de editar",
          "Colores y tipografía que puedes cambiar después",
          "Sin plugins de WordPress que se rompan",
        ],
      },
      features: [
        {
          title: { en: "Edit without code", es: "Editar sin código" },
          body: {
            en: "Change copy, titles and photos from a private admin panel.",
            es: "Cambia textos, títulos y fotos desde un panel privado.",
          },
        },
        {
          title: { en: "Reorder sections", es: "Reordenar secciones" },
          body: {
            en: "Show, hide or rearrange blocks on the home page and inside each page.",
            es: "Muestra, oculta o reordena bloques en la home y dentro de cada página.",
          },
        },
        {
          title: { en: "Your brand look", es: "Tu look de marca" },
          body: {
            en: "Adjust colours and typography as the studio evolves.",
            es: "Ajusta colores y tipografía a medida que evoluciona el estudio.",
          },
        },
        {
          title: { en: "Fast & mobile-ready", es: "Rápida y lista para móvil" },
          body: {
            en: "Built for speed and phones first — where most visits happen.",
            es: "Hecha para velocidad y móvil primero — donde llegan la mayoría de visitas.",
          },
        },
      ],
      metrics: [
        { value: "480€", label: { en: "Client investment", es: "Inversión de la cliente" } },
        { value: "6", label: { en: "Public pages", es: "Páginas públicas" } },
        { value: "Admin", label: { en: "Self-serve edits", es: "Edición autónoma" } },
      ],
    },
    ai: {
      tagline: {
        en: "Client website with a lightweight admin so content updates do not become recurring developer tickets.",
        es: "Web de cliente con un admin ligero para que actualizar contenido no se convierta en tickets recurrentes de desarrollo.",
      },
      challenge: {
        en: "Marketing sites often create ongoing ops cost: every copy tweak needs a developer. The studio needed ownership after launch.",
        es: "Las webs de marketing suelen generar coste operativo continuo: cada cambio de texto pide un desarrollador. El estudio necesitaba autonomía tras el lanzamiento.",
      },
      approach: {
        en: "Shipped a custom site plus an admin for sections, copy, media and brand tokens — removing the CMS lock-in tax while keeping the stack lean.",
        es: "Entregué una web a medida más un admin de secciones, textos, medios y tokens de marca — sin el peaje de un CMS cerrado y con un stack ligero.",
      },
      outcome: {
        en: "Fewer handoffs after launch: the owner runs content changes; engineering time stays on product work.",
        es: "Menos idas y venidas tras el lanzamiento: la dueña gestiona el contenido; el tiempo de ingeniería se reserva para producto.",
      },
      features: [
        {
          title: { en: "Self-serve content ops", es: "Contenido autogestionado" },
          body: {
            en: "Texts, images and section layout editable without redeploys.",
            es: "Textos, imágenes y layout de secciones editables sin redespliegues.",
          },
        },
        {
          title: { en: "Brand tokens in admin", es: "Tokens de marca en el admin" },
          body: {
            en: "Colours and typography adjustable as the brand evolves.",
            es: "Colores y tipografía ajustables a medida que evoluciona la marca.",
          },
        },
      ],
    },
  },

  "dance-academy-platform": {
    web: {
      tagline: {
        en: "A custom web app for a Barcelona dance academy: bookings, memberships and a clear public site — fast, mobile-friendly and built to convert visitors into students.",
        es: "Aplicación web a medida para una academia de baile en Barcelona: reservas, membresías y una web pública clara — rápida, pensada para móvil y hecha para convertir visitas en alumnos.",
      },
      challenge: {
        en: "Spreadsheets and WhatsApp could not keep payments, class capacity and enrolments straight. The academy needed one place students and staff could trust.",
        es: "Las hojas de cálculo y WhatsApp no cuadraban pagos, aforo e inscripciones. La academia necesitaba un solo sitio en el que alumnos y equipo pudieran confiar.",
      },
      approach: {
        en: "A public schedule with live places, online enrolment, memberships and an owner dashboard — so admin does not eat the weekend.",
        es: "Un horario público con plazas en vivo, inscripción online, membresías y un panel para la dueña — para que la administración no se coma el fin de semana.",
      },
      outcome: {
        en: "Fewer double bookings, clearer payments and a site that sells the academy every day of the week.",
        es: "Menos reservas duplicadas, pagos más claros y una web que vende la academia todos los días.",
      },
      benefits: {
        en: [
          "Students book online without WhatsApp chaos",
          "Clear schedule on mobile",
          "Owner sees occupancy and payments",
          "Fast pages that feel trustworthy",
        ],
        es: [
          "Los alumnos reservan online sin el caos de WhatsApp",
          "Horario claro en el móvil",
          "La dueña ve ocupación y pagos",
          "Páginas rápidas que transmiten confianza",
        ],
      },
      features: [
        {
          title: { en: "Online booking", es: "Reserva online" },
          body: {
            en: "Classes and packs in one flow students understand immediately.",
            es: "Clases y bonos en un flujo que el alumno entiende al instante.",
          },
        },
        {
          title: { en: "Owner dashboard", es: "Panel para la dueña" },
          body: {
            en: "Revenue, occupancy and outstanding payments without exports.",
            es: "Ingresos, ocupación y pagos pendientes sin exportar nada.",
          },
        },
        {
          title: { en: "Built for phones", es: "Hecha para el móvil" },
          body: {
            en: "Parents and students book from the sofa — the UI is mobile-first.",
            es: "Padres y alumnos reservan desde el sofá: la interfaz es mobile-first.",
          },
        },
      ],
    },
    ai: {
      tagline: {
        en: "Operations platform that replaced manual reconciliation with live capacity, payments and reminders.",
        es: "Plataforma de operaciones que sustituyó la conciliación manual por aforo en vivo, pagos y recordatorios.",
      },
      challenge: {
        en: "Manual admin was burning a full weekend day every week and hiding unpaid memberships.",
        es: "La administración manual quemaba un día entero de fin de semana y ocultaba impagos.",
      },
      approach: {
        en: "Modelled the real domain (classes, memberships, drop-ins) and automated enrolment, reminders and reporting.",
        es: "Modelé el dominio real (clases, membresías, sueltas) y automaticé inscripción, recordatorios e informes.",
      },
      outcome: {
        en: "Admin time collapsed; double bookings stopped; unpaid accounts became visible immediately.",
        es: "El tiempo de admin se desplomó; se acabaron las reservas duplicadas; los impagos se hicieron visibles al instante.",
      },
      benefits: {
        en: [
          "Fewer hours on admin every week",
          "Live capacity instead of double bookings",
          "Unpaid memberships visible immediately",
          "Reminders without manual chasing",
        ],
        es: [
          "Menos horas de admin cada semana",
          "Aforo en vivo en lugar de reservas duplicadas",
          "Impagos visibles al instante",
          "Recordatorios sin perseguir a mano",
        ],
      },
      features: [
        {
          title: { en: "Process → product", es: "Proceso → producto" },
          body: {
            en: "WhatsApp and spreadsheets replaced by a single operational system.",
            es: "WhatsApp y hojas de cálculo sustituidos por un único sistema operativo.",
          },
        },
        {
          title: { en: "Owner visibility", es: "Visibilidad para la dueña" },
          body: {
            en: "Occupancy, payments and outstanding balances in one place.",
            es: "Ocupación, pagos y saldos pendientes en un solo sitio.",
          },
        },
      ],
      metrics: [
        { value: "-1 day", label: { en: "Admin / weekend", es: "Admin / fin de semana" } },
        { value: "Live", label: { en: "Capacity sync", es: "Aforo en vivo" } },
        { value: "1 system", label: { en: "Instead of chats + sheets", es: "En vez de chats + hojas" } },
      ],
    },
  },

  "bingo-live": {
    web: {
      tagline: {
        en: "A live multiplayer game in the browser — open a link, play together, everything updates instantly. Built as a skills demo (not a client website package).",
        es: "Un juego multijugador en el navegador — abres un enlace, jugáis juntos y todo se actualiza al instante. Hecho como demo de habilidades (no es un paquete de web para cliente).",
      },
      challenge: {
        en: "Show that realtime experiences can stay in sync for everyone without refreshing the page.",
        es: "Demostrar que una experiencia en vivo puede mantenerse sincronizada para todos sin refrescar la página.",
      },
      approach: {
        en: "A shared room over a live connection: when someone starts or draws a ball, every open screen updates together.",
        es: "Una sala compartida con conexión en vivo: cuando alguien arranca o saca una bola, todas las pantallas se actualizan a la vez.",
      },
      outcome: {
        en: "Open two tabs and you instantly see the sync working — useful if you want interactive product demos, not just a brochure site.",
        es: "Abre dos pestañas y ves el sync al instante — útil si quieres demos de producto interactivas, no solo una web escaparate.",
      },
      benefits: {
        en: ["Works in the browser", "No install", "Live updates for every player"],
        es: ["Funciona en el navegador", "Sin instalar nada", "Actualizaciones en vivo para cada jugador"],
      },
      features: [
        {
          title: { en: "Share one link", es: "Un solo enlace" },
          body: {
            en: "Friends join the same room from any device.",
            es: "Los amigos entran a la misma sala desde cualquier dispositivo.",
          },
        },
      ],
    },
  },

  "pdf-book-library": {
    web: {
      tagline: {
        en: "A digital book library: store PDF books, read offline, auto-save progress, fullscreen light/dark reader — built mobile-first.",
        es: "Biblioteca digital de libros: guarda libros en PDF, lee offline, guarda el progreso automáticamente, lector a pantalla completa con light/dark — pensada mobile-first.",
      },
      challenge: {
        en: "Books as PDFs get lost in downloads folders; progress resets; reading on the metro without signal is painful.",
        es: "Los libros en PDF se pierden en descargas; el progreso se resetea; leer en el metro sin cobertura es un suplicio.",
      },
      approach: {
        en: "A library with folders, notes, offline reading and a distraction-free reader with zoom and copy.",
        es: "Una biblioteca con carpetas, notas, lectura offline y un lector sin distracciones con zoom y copiar texto.",
      },
      outcome: {
        en: "Pick up any book where you left off — even underground.",
        es: "Retomas cualquier libro donde lo dejaste — incluso bajo tierra.",
      },
      benefits: {
        en: ["Offline reading", "Automatic progress", "Fullscreen light/dark", "Organised by folders"],
        es: ["Lectura offline", "Progreso automático", "Pantalla completa light/dark", "Organizado por carpetas"],
      },
      features: [
        {
          title: { en: "Read offline", es: "Leer offline" },
          body: {
            en: "Take your books on the metro without worrying about signal.",
            es: "Lleva tus libros al metro sin preocuparte por la cobertura.",
          },
        },
      ],
    },
  },
};
