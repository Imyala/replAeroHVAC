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
  Wind,
  Hammer
} from "lucide-react";
import { useGetProgress } from "@workspace/api-client-react";

interface LayoutProps {
  children: ReactNode;
}

const navItems = [
  { href: "/", label: "Dashboard", icon: Activity },
  { href: "/learn", label: "Learn Theory", icon: BookOpen },
  { href: "/components", label: "Component Library", icon: Box },
  { href: "/basic-tools", label: "Basic Tools", icon: Hammer },
  { href: "/build", label: "Build & Assemble", icon: Wrench },
  { href: "/disassemble", label: "Disassemble", icon: PenTool },
  { href: "/fault-finding", label: "Fault Finding", icon: Activity },
  { href: "/quiz", label: "Assessment", icon: GraduationCap },
];

export function Layout({ children }: LayoutProps) {
  const [location] = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { data: progressData } = useGetProgress();

  // Calculate global progress
  const modulesCompleted = progressData?.filter(p => p.completed).length || 0;
  // There are 6 main trackable modules (learn, components, build, disassemble, fault-finding, quiz)
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
          {navItems.map((item) => {
            const isActive = location === item.href;
            return (
              <Link 
                key={item.href} 
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
