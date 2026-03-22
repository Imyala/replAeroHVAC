import { useState } from "react";
import { faultTree } from "@/data/content";
import { ProgressButton } from "@/components/progress-button";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, RefreshCcw, ArrowRight } from "lucide-react";

type NodeKey = keyof typeof faultTree;

export default function FaultFinding() {
  const [history, setHistory] = useState<NodeKey[]>(["root"]);
  
  const currentNodeId = history[history.length - 1];
  const currentNode = faultTree[currentNodeId as NodeKey] as any; // any to bypass strict index for mock data

  const handleSelect = (nextNode: string) => {
    setHistory(prev => [...prev, nextNode as NodeKey]);
  };

  const handleRestart = () => {
    setHistory(["root"]);
  };

  return (
    <div className="p-8 md:p-12 max-w-5xl mx-auto h-full flex flex-col">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground flex items-center gap-3">
            <Activity className="w-8 h-8 text-primary" /> Fault Finding
          </h1>
          <p className="text-muted-foreground mt-2">Interactive diagnostic tree based on field symptoms.</p>
        </div>
        <ProgressButton moduleId="fault-finding" moduleName="Fault Finding" />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentNodeId}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-2xl"
          >
            {currentNode.isEndpoint ? (
              <div className="glass-panel p-8 md:p-12 rounded-3xl text-center border-orange-500/30 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-primary" />
                <h2 className="text-2xl font-bold text-orange-400 mb-6">Diagnosis Complete</h2>
                <p className="text-xl text-foreground mb-8 leading-relaxed">
                  {currentNode.text}
                </p>
                <button 
                  onClick={handleRestart}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-card border border-white/10 hover:bg-white/10 transition-colors font-semibold"
                >
                  <RefreshCcw className="w-4 h-4" /> Start Over
                </button>
              </div>
            ) : (
              <div className="glass-panel p-8 md:p-12 rounded-3xl relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent" />
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8 text-center">
                  {currentNode.question}
                </h2>
                
                <div className="space-y-3">
                  {currentNode.options.map((opt: any, idx: number) => (
                    <button
                      key={idx}
                      onClick={() => handleSelect(opt.next)}
                      className="w-full flex items-center justify-between p-5 rounded-xl bg-black/20 border border-white/10 hover:border-primary/50 hover:bg-primary/5 transition-all duration-200 group text-left"
                    >
                      <span className="text-lg text-gray-200 group-hover:text-primary transition-colors">{opt.text}</span>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transform group-hover:translate-x-1 transition-all" />
                    </button>
                  ))}
                </div>

                {history.length > 1 && (
                  <div className="mt-8 pt-6 border-t border-white/5 text-center">
                    <button 
                      onClick={() => setHistory(h => h.slice(0, -1))}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      &larr; Go Back
                    </button>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
