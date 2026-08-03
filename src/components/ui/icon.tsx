import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Blocks,
  Bot,
  BookOpen,
  Boxes,
  Brain,
  Briefcase,
  Calendar,
  Check,
  CircleCheck,
  ChevronDown,
  Clock,
  Cloud,
  Code2,
  Cpu,
  Database,
  Download,
  Euro,
  ExternalLink,
  FileText,
  Flame,
  Gauge,
  GitBranch,
  Globe,
  GraduationCap,
  Grid3x3,
  Languages,
  Layers,
  LineChart,
  Loader2,
  Lock,
  Mail,
  MapPin,
  Menu,
  MonitorSmartphone,
  Moon,
  Music4,
  Palette,
  PanelsTopLeft,
  Plug,
  Quote,
  Repeat2,
  Rocket,
  Search,
  Send,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Target,
  Terminal,
  TrendingUp,
  Users,
  Wallet,
  WifiOff,
  Workflow,
  Wrench,
  X,
  Zap,
  Sun,
  MessageSquare,
} from "lucide-react";

type SvgProps = React.ComponentProps<"svg">;

function GithubMark(props: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 .5a11.5 11.5 0 0 0-3.63 22.42c.57.1.78-.25.78-.55v-2.1c-3.2.7-3.88-1.4-3.88-1.4-.52-1.34-1.28-1.7-1.28-1.7-1.05-.71.08-.7.08-.7 1.16.09 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.5 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.06.78 2.14v3.17c0 .3.2.66.79.55A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}

function LinkedinMark(props: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05a3.75 3.75 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13Zm1.78 13.02H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

function WhatsappMark(props: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

export const icons = {
  "arrow-left": ArrowLeft,
  "arrow-right": ArrowRight,
  "arrow-up-right": ArrowUpRight,
  blocks: Blocks,
  bot: Bot,
  "book-open": BookOpen,
  boxes: Boxes,
  brain: Brain,
  briefcase: Briefcase,
  calendar: Calendar,
  check: Check,
  "check-circle": CircleCheck,
  "chevron-down": ChevronDown,
  clock: Clock,
  cloud: Cloud,
  code: Code2,
  cpu: Cpu,
  database: Database,
  download: Download,
  euro: Euro,
  "external-link": ExternalLink,
  "file-text": FileText,
  flame: Flame,
  gauge: Gauge,
  "git-branch": GitBranch,
  github: GithubMark,
  globe: Globe,
  "graduation-cap": GraduationCap,
  grid: Grid3x3,
  languages: Languages,
  layers: Layers,
  "line-chart": LineChart,
  linkedin: LinkedinMark,
  loader: Loader2,
  lock: Lock,
  mail: Mail,
  "map-pin": MapPin,
  menu: Menu,
  "message-square": MessageSquare,
  monitor: MonitorSmartphone,
  moon: Moon,
  music: Music4,
  palette: Palette,
  panels: PanelsTopLeft,
  plug: Plug,
  quote: Quote,
  repeat: Repeat2,
  rocket: Rocket,
  search: Search,
  send: Send,
  server: Server,
  shield: ShieldCheck,
  smartphone: Smartphone,
  sparkles: Sparkles,
  star: Star,
  sun: Sun,
  target: Target,
  terminal: Terminal,
  "trending-up": TrendingUp,
  users: Users,
  wallet: Wallet,
  whatsapp: WhatsappMark,
  "wifi-off": WifiOff,
  workflow: Workflow,
  wrench: Wrench,
  x: X,
  zap: Zap,
} as const;

export type IconName = keyof typeof icons;

type IconProps = SvgProps & {
  name: IconName;
};

export function Icon({ name, ...props }: IconProps) {
  const Component = icons[name];
  return <Component aria-hidden {...props} />;
}
