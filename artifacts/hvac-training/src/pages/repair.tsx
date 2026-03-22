import { useState } from "react";
import { ProgressButton } from "@/components/progress-button";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Wrench, Play, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const repairGuides = [
  {
    id: "r1",
    title: "Compressor Replacement",
    difficulty: "Advanced",
    tools: ["Torches", "Vacuum Pump", "Recovery Machine", "Multimeter"],
    steps: ["Recover refrigerant", "Disconnect electrical", "Unbraze old compressor", "Install new filter drier", "Braze new compressor", "Pressure test", "Evacuate", "Recharge"]
  },
  {
    id: "r2",
    title: "Refrigerant Leak Repair",
    difficulty: "Intermediate",
    tools: ["Electronic Leak Detector", "Soap Bubbles", "Torches", "Nitrogen"],
    steps: ["Pressurize with Nitrogen", "Locate leak with bubbles/sniffer", "Recover remaining gas", "Braze leak closed", "Pressure test again", "Evacuate and recharge"]
  },
  {
    id: "r3",
    title: "Contactor Replacement",
    difficulty: "Beginner",
    tools: ["Multimeter", "Screwdriver", "Wire strippers"],
    steps: ["Turn off power", "Verify 0V across all legs", "Label wires", "Remove old contactor", "Install new contactor", "Reconnect wires", "Test operation"]
  }
];

export default function Repair() {
  const [activeGuide, setActiveGuide] = useState<string | null>(null);

  return (
    <div className="p-8 md:p-12 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground">Repair Procedures</h1>
          <p className="text-muted-foreground mt-2">Standard operating procedures for common field repairs.</p>
        </div>
        <ProgressButton moduleId="repair" moduleName="Repair Guides" />
      </div>

      <div className="space-y-4">
        {repairGuides.map((guide) => {
          const isActive = activeGuide === guide.id;
          return (
            <div key={guide.id} className="glass-card rounded-2xl overflow-hidden border border-white/10 transition-all duration-300">
              <button 
                onClick={() => setActiveGuide(isActive ? null : guide.id)}
                className="w-full px-6 py-5 flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-lg ${
                    guide.difficulty === 'Advanced' ? 'bg-destructive/20 text-destructive' :
                    guide.difficulty === 'Intermediate' ? 'bg-orange-500/20 text-orange-400' :
                    'bg-emerald-500/20 text-emerald-400'
                  }`}>
                    <Wrench className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-lg">{guide.title}</h3>
                    <p className="text-xs font-mono text-muted-foreground">Difficulty: {guide.difficulty}</p>
                  </div>
                </div>
                <Play className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${isActive ? 'rotate-90 text-primary' : ''}`} />
              </button>

              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="border-t border-white/5 bg-black/20"
                  >
                    <div className="p-6 md:p-8 flex flex-col md:flex-row gap-8">
                      <div className="flex-1">
                        <h4 className="font-semibold text-primary mb-4 flex items-center gap-2">
                          <Wrench className="w-4 h-4" /> Required Tools
                        </h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {guide.tools.map((tool, i) => (
                            <li key={i} className="text-sm text-gray-300 flex items-center gap-2 bg-black/40 px-3 py-2 rounded-md border border-white/5">
                              <span className="w-1 h-1 rounded-full bg-primary" /> {tool}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex-1">
                        <h4 className="font-semibold text-primary mb-4">Step-by-Step</h4>
                        <div className="space-y-4 relative before:absolute before:inset-0 before:ml-3 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary/50 before:to-transparent">
                          {guide.steps.map((step, i) => (
                            <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                              <div className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-primary bg-background shadow shadow-primary/50 text-primary z-10 font-bold text-xs">
                                {i + 1}
                              </div>
                              <div className="bg-card/50 border border-white/10 ml-4 md:ml-0 md:w-[calc(50%-2rem)] p-4 rounded-xl group-hover:border-primary/50 transition-colors">
                                <p className="text-sm text-gray-200">{step}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </div>
  );
}
