import { Link } from "wouter";
import { BookOpen, Box, Wrench, Activity, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative min-h-full pb-12">
      {/* Hero Section */}
      <div className="relative h-[40vh] min-h-[300px] w-full flex flex-col justify-center px-8 md:px-16 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <img 
            src={`${import.meta.env.BASE_URL}images/hero-bg.png`} 
            alt="Hero background" 
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Technical Training Platform v1.0
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4 text-glow leading-tight">
              Master Refrigeration & <br/>Air Conditioning
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Interactive components, guided assemblies, thermodynamic theory, and symptom-based fault finding.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Modules Grid */}
      <div className="max-w-7xl mx-auto px-8 md:px-16 -mt-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <Link href="/learn" className="block group">
            <div className="glass-card h-full p-6 rounded-2xl flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Learn Theory</h3>
              <p className="text-sm text-muted-foreground flex-1">Understand the refrigeration cycle, thermodynamics, and refrigerants.</p>
              <div className="mt-4 flex items-center text-sm font-semibold text-primary group-hover:translate-x-1 transition-transform">
                Start Module <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          </Link>

          <Link href="/components" className="block group">
            <div className="glass-card h-full p-6 rounded-2xl flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4 group-hover:scale-110 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                <Box className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Components</h3>
              <p className="text-sm text-muted-foreground flex-1">Explore 3D models of compressors, evaporators, condensers, and valves.</p>
              <div className="mt-4 flex items-center text-sm font-semibold text-purple-400 group-hover:translate-x-1 transition-transform">
                Start Module <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          </Link>

          <Link href="/build" className="block group">
            <div className="glass-card h-full p-6 rounded-2xl flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Build & Assemble</h3>
              <p className="text-sm text-muted-foreground flex-1">Step-by-step interactive guide to piping and assembling a full system.</p>
              <div className="mt-4 flex items-center text-sm font-semibold text-emerald-400 group-hover:translate-x-1 transition-transform">
                Start Module <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          </Link>

          <Link href="/fault-finding" className="block group">
            <div className="glass-card h-full p-6 rounded-2xl flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-4 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Fault Finding</h3>
              <p className="text-sm text-muted-foreground flex-1">Diagnostic decision trees based on common field symptoms.</p>
              <div className="mt-4 flex items-center text-sm font-semibold text-orange-400 group-hover:translate-x-1 transition-transform">
                Start Module <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          </Link>

        </div>
      </div>
    </div>
  );
}
