import { useState } from "react";
import { theorySections } from "@/data/content";
import { ProgressButton } from "@/components/progress-button";
import { motion, AnimatePresence } from "framer-motion";
import { ThermometerSun, Snowflake, Waves } from "lucide-react";

export default function Learn() {
  const [activeSection, setActiveSection] = useState(theorySections[0].id);
  const currentData = theorySections.find(s => s.id === activeSection);

  return (
    <div className="p-8 md:p-12 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
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
          {/* Decorative background elements */}
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

                {/* Simulated Diagram Area */}
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
    </div>
  );
}
