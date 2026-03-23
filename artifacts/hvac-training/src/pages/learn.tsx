import { useState } from "react";
import { Link } from "wouter";
import { theorySections } from "@/data/content";
import { ProgressButton } from "@/components/progress-button";
import { motion, AnimatePresence } from "framer-motion";
import { ThermometerSun, Snowflake, Waves, Hammer, Zap, Battery, Gauge, Calculator, ChevronRight, Layers } from "lucide-react";

const units = [
  {
    heading: "1A",
    colour: "border-amber-400/30 bg-amber-400/5",
    headingColour: "text-amber-300",
    items: [
      { href: "/basic-tools", label: "Bolts & Screws", icon: Hammer, desc: "Fastener types, thread standards, torque and installation technique." },
    ],
  },
  {
    heading: "1B",
    colour: "border-blue-400/30 bg-blue-400/5",
    headingColour: "text-blue-300",
    items: [
      { href: "/basic-electrical-circuit", label: "Electrical Fundamentals", icon: Zap, desc: "Voltage, current, resistance and the basics of electrical circuits." },
      { href: "/emf-sources", label: "EMF Sources", icon: Battery, desc: "Batteries, generators, thermocouples, solar cells and other EMF sources." },
      { href: "/resistance", label: "Resistance", icon: Gauge, desc: "Resistivity, colour codes, series/parallel circuits and voltage drop." },
      { href: "/ohms-law-power", label: "Ohm's Law & Power", icon: Calculator, desc: "Ohm's Law, Watt's Law, energy, work, efficiency and torque." },
      { href: "/effects-of-current", label: "Effects of Current", icon: Zap, desc: "Heating, magnetic, chemical and physiological effects of electric current." },
      { href: "/series-circuit", label: "Series Circuit", icon: Layers, desc: "Current, voltage and resistance rules for components connected end-to-end." },
    ],
  },
];

export default function Learn() {
  const [activeSection, setActiveSection] = useState(theorySections[0].id);
  const currentData = theorySections.find(s => s.id === activeSection);

  return (
    <div className="p-8 md:p-12 max-w-6xl mx-auto space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground">Theory & Principles</h1>
          <p className="text-muted-foreground mt-2">Master the core concepts of thermodynamics and refrigeration.</p>
        </div>
        <ProgressButton moduleId="learn" moduleName="Theory & Principles" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Navigation Sidebar */}
        <div className="lg:col-span-1 space-y-2">
          {theorySections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 ${
                activeSection === section.id 
                  ? "bg-primary/20 text-primary font-semibold border border-primary/30" 
                  : "bg-card/50 text-muted-foreground border border-white/5 hover:bg-card hover:text-foreground"
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="lg:col-span-3 glass-panel rounded-2xl p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          
          <AnimatePresence mode="wait">
            {currentData && (
              <motion.div
                key={currentData.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl font-bold text-foreground mb-4">{currentData.title}</h2>
                <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                  {currentData.content}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentData.details.map((detail, idx) => (
                    <div key={idx} className="bg-black/20 border border-white/5 p-5 rounded-xl hover:border-primary/30 transition-colors">
                      <div className="flex items-center gap-3 mb-3 text-primary font-semibold">
                        {idx === 0 ? <ThermometerSun className="w-5 h-5" /> : 
                         idx === 1 ? <Snowflake className="w-5 h-5" /> : 
                         <Waves className="w-5 h-5" />}
                        {detail.step}
                      </div>
                      <p className="text-sm text-gray-300 leading-relaxed">{detail.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 border border-white/10 rounded-xl bg-black/40 p-8 flex items-center justify-center min-h-[300px] relative overflow-hidden group">
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                  <p className="text-muted-foreground/50 font-mono text-sm relative z-10 text-center">
                    [ Interactive Technical Diagram Loading... ]<br/>
                    <span className="text-xs">Visualizing {currentData.title}</span>
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ── Study Units ── */}
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-display font-bold text-foreground">Study Units</h2>
          <p className="text-sm text-muted-foreground mt-1">Select a topic to begin studying.</p>
        </div>
        {units.map(({ heading, colour, headingColour, items }) => (
          <div key={heading} className={`border rounded-2xl overflow-hidden ${colour}`}>
            <div className="px-6 py-3 border-b border-white/10">
              <span className={`text-xs font-bold uppercase tracking-widest ${headingColour}`}>Unit {heading}</span>
            </div>
            <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {items.map(({ href, label, icon: Icon, desc }) => (
                <Link key={href} href={href}>
                  <div className="group flex items-start gap-3 bg-card/60 hover:bg-card border border-white/5 hover:border-primary/30 rounded-xl p-4 transition-all duration-200 cursor-pointer h-full">
                    <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-semibold text-foreground">{label}</span>
                        <ChevronRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                      </div>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
