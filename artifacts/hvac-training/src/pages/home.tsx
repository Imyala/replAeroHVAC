import { Link } from "wouter";
import { BookOpen, Box, Wrench, Activity, ChevronRight, PenTool, GraduationCap, Stethoscope, FileText, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";

const modules = [
  {
    href: "/learn",
    icon: BookOpen,
    label: "Learn Theory",
    desc: "Refrigeration cycle, thermodynamics, electrical fundamentals, and more.",
    colour: "blue",
    iconBg: "bg-blue-500/10 border-blue-500/20",
    iconText: "text-blue-400",
    iconHover: "group-hover:bg-blue-500 group-hover:text-white",
    linkText: "text-primary",
  },
  {
    href: "/components",
    icon: Box,
    label: "Components",
    desc: "Explore compressors, evaporators, condensers, valves and their common faults.",
    colour: "purple",
    iconBg: "bg-purple-500/10 border-purple-500/20",
    iconText: "text-purple-400",
    iconHover: "group-hover:bg-purple-500 group-hover:text-white",
    linkText: "text-purple-400",
  },
  {
    href: "/build",
    icon: Wrench,
    label: "Build & Assemble",
    desc: "Step-by-step guide to piping and commissioning a complete refrigeration system.",
    colour: "emerald",
    iconBg: "bg-emerald-500/10 border-emerald-500/20",
    iconText: "text-emerald-400",
    iconHover: "group-hover:bg-emerald-500 group-hover:text-white",
    linkText: "text-emerald-400",
  },
  {
    href: "/disassemble",
    icon: PenTool,
    label: "Disassemble",
    desc: "Safe decommissioning procedure with LOTO, refrigerant recovery, and component removal.",
    colour: "red",
    iconBg: "bg-red-500/10 border-red-500/20",
    iconText: "text-red-400",
    iconHover: "group-hover:bg-red-500 group-hover:text-white",
    linkText: "text-red-400",
  },
  {
    href: "/repair",
    icon: Stethoscope,
    label: "Repair Procedures",
    desc: "SOPs for compressor replacement, leak repair, contactor swap and more.",
    colour: "orange",
    iconBg: "bg-orange-500/10 border-orange-500/20",
    iconText: "text-orange-400",
    iconHover: "group-hover:bg-orange-500 group-hover:text-white",
    linkText: "text-orange-400",
  },
  {
    href: "/fault-finding",
    icon: Activity,
    label: "Fault Finding",
    desc: "Symptom-driven diagnostic decision tree for common field problems.",
    colour: "cyan",
    iconBg: "bg-cyan-500/10 border-cyan-500/20",
    iconText: "text-cyan-400",
    iconHover: "group-hover:bg-cyan-500 group-hover:text-white",
    linkText: "text-cyan-400",
  },
];

const stats = [
  { icon: Box, value: "6", label: "Modules" },
  { icon: FileText, value: "10", label: "Study Topics" },
  { icon: HelpCircle, value: "15", label: "Quiz Questions" },
];

const learningPath = [
  { step: 1, label: "Theory", href: "/learn", colour: "bg-blue-500" },
  { step: 2, label: "Components", href: "/components", colour: "bg-purple-500" },
  { step: 3, label: "Build", href: "/build", colour: "bg-emerald-500" },
  { step: 4, label: "Disassemble", href: "/disassemble", colour: "bg-red-500" },
  { step: 5, label: "Repair", href: "/repair", colour: "bg-orange-500" },
  { step: 6, label: "Fault Find", href: "/fault-finding", colour: "bg-cyan-500" },
  { step: 7, label: "Assessment", href: "/quiz", colour: "bg-yellow-500" },
];

export default function Home() {
  return (
    <div className="relative min-h-full pb-16">
      {/* Hero Section */}
      <div className="relative h-[44vh] min-h-[320px] w-full flex flex-col justify-center px-6 md:px-16 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <img
            src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
        </div>

        <div className="relative z-10 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-5">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              Technical Training Platform v1.0
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4 text-glow leading-tight">
              Master Refrigeration &<br className="hidden sm:block" /> Air Conditioning
            </h1>
            <p className="text-base md:text-xl text-muted-foreground max-w-2xl">
              Interactive components, guided assemblies, thermodynamic theory, and symptom-based fault finding.
            </p>

            {/* Stats bar */}
            <div className="flex flex-wrap items-center gap-4 md:gap-6 mt-6">
              {stats.map(({ icon: Icon, value, label }, i) => (
                <div key={i} className="flex items-center gap-2">
                  {i > 0 && <div className="hidden sm:block w-px h-6 bg-white/10 -mx-1" aria-hidden="true" />}
                  <Icon className="w-4 h-4 text-muted-foreground" aria-hidden="true" />
                  <span className="text-lg font-bold text-foreground">{value}</span>
                  <span className="text-sm text-muted-foreground">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Module Cards */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 -mt-10 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {modules.map(({ href, icon: Icon, label, desc, iconBg, iconText, iconHover, linkText }, idx) => (
            <motion.div
              key={href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
            >
              <Link href={href} className="block group h-full">
                <div className="glass-card h-full p-6 rounded-2xl flex flex-col">
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-4 transition-all duration-300 ${iconBg} ${iconText} ${iconHover} group-hover:scale-110`}>
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{label}</h3>
                  <p className="text-sm text-muted-foreground flex-1 leading-relaxed">{desc}</p>
                  <div className={`mt-4 flex items-center text-sm font-semibold ${linkText} group-hover:translate-x-1 transition-transform`}>
                    Start Module <ChevronRight className="w-4 h-4 ml-1" aria-hidden="true" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Learning Path */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 mt-14">
        <div className="glass-panel rounded-2xl p-6 md:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-xl font-display font-bold text-foreground">Recommended Learning Path</h2>
              <p className="text-sm text-muted-foreground mt-1">Work through each stage in order for the best learning experience.</p>
            </div>
            <Link href="/quiz">
              <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary font-semibold text-sm hover:bg-primary/20 transition-colors whitespace-nowrap">
                <GraduationCap className="w-4 h-4" aria-hidden="true" />
                Take Assessment
              </div>
            </Link>
          </div>

          <div className="flex flex-wrap gap-3 items-center">
            {learningPath.map(({ step, label, href, colour }, idx) => (
              <div key={href} className="flex items-center gap-3">
                <Link href={href}>
                  <div className="group flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-card/60 border border-white/10 hover:border-white/20 hover:bg-card transition-all duration-200 cursor-pointer">
                    <div className={`w-6 h-6 rounded-full ${colour} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
                      {step}
                    </div>
                    <span className="text-sm font-medium text-foreground whitespace-nowrap">{label}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/40 group-hover:text-muted-foreground group-hover:translate-x-0.5 transition-all" aria-hidden="true" />
                  </div>
                </Link>
                {idx < learningPath.length - 1 && (
                  <ChevronRight className="w-4 h-4 text-muted-foreground/20 shrink-0 hidden sm:block" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
