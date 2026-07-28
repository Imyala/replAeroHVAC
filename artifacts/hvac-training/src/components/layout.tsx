import { ReactNode, useState, useEffect } from "react";
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
  GitBranch,
  Menu,
  X
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
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { data: progressData } = useGetProgress();

  // Close mobile nav whenever the route changes
  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  const modulesCompleted = progressData?.filter(p => p.completed).length || 0;
  const totalModules = 6;
  const progressPercent = Math.min(Math.round((modulesCompleted / totalModules) * 100), 100);

  return (
    <div className="flex h-screen bg-background overflow-hidden selection:bg-primary/30">
      {/* Skip-to-content link for keyboard / screen-reader users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[999] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-primary focus:text-primary-foreground focus:font-semibold focus:shadow-lg"
      >
        Skip to content
      </a>

      {/* Mobile backdrop */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar — fixed overlay on mobile, in-flow on desktop */}
      <aside
        className={cn(
          "flex flex-col glass-panel border-r border-white/5 transition-all duration-300",
          // Mobile: fixed overlay; desktop: in-flow relative
          "fixed inset-y-0 left-0 z-40 md:relative md:inset-y-auto md:left-auto md:z-20",
          // Mobile slide-in / always-visible on desktop
          isMobileOpen
            ? "translate-x-0 shadow-2xl shadow-black/50"
            : "-translate-x-full md:translate-x-0",
          // Width: always 256px on mobile; responsive on desktop
          isCollapsed ? "w-64 md:w-20" : "w-64",
        )}
        aria-label="Primary navigation"
      >
        {/* Sidebar header */}
        <div className="flex h-16 items-center justify-between px-4 border-b border-white/5">
          {(!isCollapsed || isMobileOpen) && (
            <div className="flex items-center gap-2 text-primary font-display font-bold text-xl tracking-tight">
              <Wind className="w-6 h-6 text-primary" />
              <span>AeroHVACR</span>
            </div>
          )}
          {isCollapsed && !isMobileOpen && (
            <Wind className="w-8 h-8 text-primary mx-auto" aria-hidden="true" />
          )}

          {/* Close button — mobile only */}
          <button
            onClick={() => setIsMobileOpen(false)}
            className="md:hidden p-1.5 rounded-lg hover:bg-white/10 transition-colors text-muted-foreground hover:text-foreground ml-auto"
            aria-label="Close navigation menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1 custom-scrollbar" aria-label="Site sections">
          {navSections.map((section) => {
            if (isParent(section)) {
              return (
                <ParentNavItem key={section.href} parent={section} location={location} isCollapsed={isCollapsed && !isMobileOpen} />
              );
            }
            if (isGroup(section)) {
              return (
                <CollapsibleNavGroup key={section.heading} group={section} location={location} isCollapsed={isCollapsed && !isMobileOpen} />
              );
            }
            return (
              <NavLink key={section.href} item={section} isActive={location === section.href} isCollapsed={isCollapsed && !isMobileOpen} />
            );
          })}
        </nav>

        {/* Global Progress */}
        {(!isCollapsed || isMobileOpen) && (
          <div className="p-4 border-t border-white/5 bg-black/20">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-medium text-muted-foreground">Course Progress</span>
              <span className="text-xs font-bold text-primary">{progressPercent}%</span>
            </div>
            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden" role="progressbar" aria-valuenow={progressPercent} aria-valuemin={0} aria-valuemax={100} aria-label={`Course progress: ${progressPercent}%`}>
              <div
                className="h-full bg-primary shadow-[0_0_10px_var(--color-primary)] transition-all duration-1000 ease-out"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <p className="text-xs text-muted-foreground mt-2">{modulesCompleted} of {totalModules} modules complete</p>
          </div>
        )}

        {/* Desktop collapse toggle */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          className="hidden md:flex absolute -right-3 top-20 w-6 h-6 bg-card border border-white/10 rounded-full items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors z-30 shadow-lg"
        >
          {isCollapsed ? <ChevronRight className="w-4 h-4" aria-hidden="true" /> : <ChevronLeft className="w-4 h-4" aria-hidden="true" />}
        </button>
      </aside>

      {/* Main Content */}
      <main id="main-content" className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden relative">
        {/* Mobile header bar */}
        <header className="flex md:hidden items-center justify-between px-4 h-14 border-b border-white/5 bg-card/30 backdrop-blur-sm shrink-0">
          <div className="flex items-center gap-2 text-primary font-display font-bold">
            <Wind className="w-5 h-5" aria-hidden="true" />
            <span>AeroHVACR</span>
          </div>
          <button
            onClick={() => setIsMobileOpen(true)}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors text-muted-foreground hover:text-foreground"
            aria-label="Open navigation menu"
            aria-expanded={isMobileOpen}
            aria-controls="mobile-sidebar"
          >
            <Menu className="w-6 h-6" aria-hidden="true" />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto custom-scrollbar">
          {children}
        </div>
      </main>
    </div>
  );
}
