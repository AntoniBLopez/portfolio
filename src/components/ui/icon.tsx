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
