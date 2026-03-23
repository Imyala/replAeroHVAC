import { ReactNode, useState } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { 
  BookOpen, 
  Box, 
  Wrench, 
  PenTool, 
  Activity, 
  GraduationCap, 
  ChevronLeft, 
  ChevronRight,
  ChevronDown,
  Wind,
  Hammer,
  Zap,
  Battery,
  Gauge,
  Calculator,
  Layers,
  Scale,
  GitBranch
} from "lucide-react";
import { useGetProgress } from "@workspace/api-client-react";

interface LayoutProps {
  children: ReactNode;
}

type NavItem = { href: string; label: string; icon: React.ElementType };
type NavGroup = { heading: string; items: NavItem[] };
type NavParent = { href: string; label: string; icon: React.ElementType; groups: NavGroup[] };
type NavSection = NavItem | NavGroup | NavParent;

function isGroup(s: NavSection): s is NavGroup {
  return "heading" in s && !("href" in s);
}
function isParent(s: NavSection): s is NavParent {
  return "groups" in s;
}

const navSections: NavSection[] = [
  { href: "/", label: "Dashboard", icon: Activity },
  {
    href: "/learn",
    label: "Learn Theory",
    icon: BookOpen,
    groups: [
      {
        heading: "1A",
        items: [
          { href: "/legislation", label: "Legislation", icon: Scale },
        ],
      },
      {
        heading: "1B",
        items: [
          { href: "/basic-tools", label: "Bolts & Screws", icon: Hammer },
        ],
      },
      {
        heading: "1C",
        items: [
          { href: "/basic-electrical-circuit", label: "Electrical Fundamentals", icon: Zap },
          { href: "/emf-sources", label: "EMF Sources", icon: Battery },
          { href: "/resistance", label: "Resistance", icon: Gauge },
          { href: "/ohms-law-power", label: "Ohm's Law", icon: Calculator },
          { href: "/power", label: "Power", icon: Zap },
          { href: "/effects-of-current", label: "Effects of Current", icon: Zap },
          { href: "/series-circuit", label: "Series Circuit", icon: Layers },
          { href: "/parallel-circuit", label: "Parallel Circuit", icon: GitBranch },
        ],
      },
    ],
  },
  { href: "/components", label: "Component Library", icon: Box },
  { href: "/build", label: "Build & Assemble", icon: Wrench },
  { href: "/disassemble", label: "Disassemble", icon: PenTool },
  { href: "/fault-finding", label: "Fault Finding", icon: Activity },
  { href: "/quiz", label: "Assessment", icon: GraduationCap },
];

function CollapsibleNavGroup({ group, location, isCollapsed }: { group: NavGroup; location: string; isCollapsed: boolean }) {
  const hasActive = group.items.some(i => i.href === location);
  const [open, setOpen] = useState(true);

  return (
    <div className="pb-1">
      {!isCollapsed && (
        <button
          onClick={() => setOpen(o => !o)}
          className="flex items-center justify-between w-full px-3 py-2 mb-1 rounded-lg hover:bg-white/5 group transition-colors"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground/70 select-none group-hover:text-muted-foreground transition-colors">
            {group.heading}
          </span>
          <ChevronDown
            className={cn(
              "w-4 h-4 text-muted-foreground/40 group-hover:text-muted-foreground transition-all duration-200",
              open ? "rotate-0" : "-rotate-90"
            )}
          />
        </button>
      )}
      {(open || isCollapsed) && (
        <div className={cn("space-y-1", !isCollapsed && "pl-2 border-l-2 ml-1", hasActive ? "border-primary/40" : "border-primary/20")}>
          {group.items.map(item => (
            <NavLink key={item.href} item={item} isActive={location === item.href} isCollapsed={isCollapsed} />
          ))}
        </div>
      )}
    </div>
  );
}

function ParentNavItem({ parent, location, isCollapsed }: { parent: NavParent; location: string; isCollapsed: boolean }) {
  const isSelfActive = location === parent.href;
  const hasChildActive = parent.groups.some(g => g.items.some(i => i.href === location));
  const [open, setOpen] = useState(isSelfActive || hasChildActive);

  return (
    <div>
      <div className="flex items-center gap-1">
        <Link
          href={parent.href}
          className={cn(
            "flex-1 flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group relative",
            isSelfActive
              ? "bg-primary/10 text-primary border border-primary/20"
              : "text-muted-foreground hover:bg-white/5 hover:text-foreground border border-transparent"
          )}
          title={isCollapsed ? parent.label : undefined}
        >
          {isSelfActive && (
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1/2 bg-primary rounded-r-full shadow-[0_0_10px_var(--color-primary)]" />
          )}
          <parent.icon className={cn("w-5 h-5 flex-shrink-0", isSelfActive && "drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]")} />
          {!isCollapsed && <span className="font-medium text-sm">{parent.label}</span>}
        </Link>
        {!isCollapsed && (
          <button
            onClick={() => setOpen(o => !o)}
            className="p-2 rounded-lg hover:bg-white/5 text-muted-foreground/40 hover:text-muted-foreground transition-colors"
            title={open ? "Collapse" : "Expand"}
          >
            <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", open ? "rotate-0" : "-rotate-90")} />
          </button>
        )}
      </div>
      {(open || isCollapsed) && !isCollapsed && (
        <div className="mt-1 ml-2 pl-3 border-l-2 border-primary/20 space-y-1">
          {parent.groups.map(group => (
            <CollapsibleNavGroup key={group.heading} group={group} location={location} isCollapsed={isCollapsed} />
          ))}
        </div>
      )}
    </div>
  );
}

function NavLink({ item, isActive, isCollapsed }: { item: NavItem; isActive: boolean; isCollapsed: boolean }) {
  return (
    <Link
      href={item.href}
      className={cn(
        "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group relative",
        isActive
          ? "bg-primary/10 text-primary border border-primary/20"
          : "text-muted-foreground hover:bg-white/5 hover:text-foreground border border-transparent"
      )}
      title={isCollapsed ? item.label : undefined}
    >
      {isActive && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1/2 bg-primary rounded-r-full shadow-[0_0_10px_var(--color-primary)]" />
      )}
      <item.icon className={cn("w-5 h-5 flex-shrink-0", isActive && "drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]")} />
      {!isCollapsed && <span className="font-medium text-sm">{item.label}</span>}
    </Link>
  );
}

export function Layout({ children }: LayoutProps) {
  const [location] = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { data: progressData } = useGetProgress();

  const modulesCompleted = progressData?.filter(p => p.completed).length || 0;
  const totalModules = 6;
  const progressPercent = Math.min(Math.round((modulesCompleted / totalModules) * 100), 100);

  return (
    <div className="flex h-screen bg-background overflow-hidden selection:bg-primary/30">
      {/* Sidebar */}
      <aside
        className={cn(
          "relative flex flex-col glass-panel border-r border-y-0 border-l-0 border-white/5 transition-all duration-300 z-20",
          isCollapsed ? "w-20" : "w-64"
        )}
      >
        <div className="flex h-16 items-center justify-between px-4 border-b border-white/5">
          {!isCollapsed && (
            <div className="flex items-center gap-2 text-primary font-display font-bold text-xl tracking-tight">
              <Wind className="w-6 h-6 text-primary" />
              <span>AeroHVACR</span>
            </div>
          )}
          {isCollapsed && <Wind className="w-8 h-8 text-primary mx-auto" />}
        </div>

        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          {navSections.map((section) => {
            if (isParent(section)) {
              return (
                <ParentNavItem key={section.href} parent={section} location={location} isCollapsed={isCollapsed} />
              );
            }
            if (isGroup(section)) {
              return (
                <CollapsibleNavGroup key={section.heading} group={section} location={location} isCollapsed={isCollapsed} />
              );
            }
            return (
              <NavLink key={section.href} item={section} isActive={location === section.href} isCollapsed={isCollapsed} />
            );
          })}
        </nav>

        {/* Global Progress */}
        {!isCollapsed && (
          <div className="p-4 border-t border-white/5 bg-black/20">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-medium text-muted-foreground">Course Progress</span>
              <span className="text-xs font-bold text-primary">{progressPercent}%</span>
            </div>
            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
              <div
                className="h-full bg-primary shadow-[0_0_10px_var(--color-primary)] transition-all duration-1000 ease-out"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        )}

        {/* Collapse toggle */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute -right-3 top-20 w-6 h-6 bg-card border border-white/10 rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors z-30 shadow-lg"
        >
          {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          {children}
        </div>
      </main>
    </div>
  );
}
