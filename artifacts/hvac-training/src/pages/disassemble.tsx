import { useState } from "react";
import { disassembleSteps } from "@/data/content";
import { ProgressButton } from "@/components/progress-button";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldAlert, AlertTriangle, ChevronRight, PenTool } from "lucide-react";

export default function Disassemble() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = disassembleSteps.length;
  const stepData = disassembleSteps.find(s => s.id === currentStep);

  const nextStep = () => {
    if (currentStep < totalSteps) setCurrentStep(c => c + 1);
  };
  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(c => c - 1);
  };

  const progressPercent = ((currentStep - 1) / (totalSteps - 1)) * 100;

  return (
    <div className="p-8 md:p-12 max-w-6xl mx-auto h-full flex flex-col">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground flex items-center gap-3">
            System Disassembly <ShieldAlert className="text-destructive w-8 h-8" />
          </h1>
          <p className="text-muted-foreground mt-2">Follow strict safety protocols when decommissioning a system.</p>
        </div>
        {currentStep === totalSteps && (
          <ProgressButton moduleId="disassemble" moduleName="Disassemble" />
        )}
      </div>

      <div className="mb-8">
        <div className="flex justify-between text-sm font-medium text-muted-foreground mb-2">
          <span>Step {currentStep} of {totalSteps}</span>
          <span>{Math.round(progressPercent)}%</span>
        </div>
        <div className="h-2 w-full bg-card border border-white/5 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-destructive"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Instructions Panel */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div className="flex-1 glass-card border-destructive/20 p-6 md:p-8 rounded-2xl flex flex-col justify-center relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 rounded-xl bg-destructive/20 text-destructive flex items-center justify-center font-bold text-xl mb-6">
                  {stepData?.id}
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">{stepData?.title}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {stepData?.desc}
                </p>

                <div className="bg-orange-500/10 border border-orange-500/30 p-4 rounded-xl flex gap-3 text-orange-200">
                  <AlertTriangle className="w-6 h-6 flex-shrink-0 text-orange-400" />
                  <p className="text-sm">Safety First: Always wear appropriate PPE including safety glasses and gloves during this procedure.</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex gap-4">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className="px-6 py-4 rounded-xl font-semibold bg-card border border-white/10 text-foreground hover:bg-white/5 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex-1"
            >
              Previous
            </button>
            <button
              onClick={nextStep}
              disabled={currentStep === totalSteps}
              className="px-6 py-4 rounded-xl font-semibold bg-destructive text-destructive-foreground hover:brightness-110 shadow-lg shadow-destructive/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex-1 flex items-center justify-center gap-2"
            >
              {currentStep === totalSteps ? "Finish" : "Next Step"} <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Visual Panel */}
        <div className="lg:col-span-3 glass-panel rounded-2xl relative overflow-hidden flex flex-col bg-black/60">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.05)_0%,transparent_70%)]" />
          
          <div className="flex-1 p-8 flex items-center justify-center relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, scale: 1.1, filter: "blur(4px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.9, filter: "blur(4px)" }}
                transition={{ duration: 0.4 }}
                className="w-64 h-64 border-2 border-dashed border-destructive/30 rounded-full flex items-center justify-center bg-black/40"
              >
                <PenTool className="w-16 h-16 text-destructive/40" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
