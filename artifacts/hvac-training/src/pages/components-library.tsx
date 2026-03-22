import { useState } from "react";
import { componentsLibrary } from "@/data/content";
import { ProgressButton } from "@/components/progress-button";
import { Search, X, Info, ShieldAlert, Navigation } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ComponentsLibrary() {
  const [search, setSearch] = useState("");
  const [selectedComp, setSelectedComp] = useState<typeof componentsLibrary[0] | null>(null);

  const filtered = componentsLibrary.filter(c => 
    c.name.toLowerCase().includes(search.toLowerCase()) || 
    c.function.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8 md:p-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground">Component Library</h1>
          <p className="text-muted-foreground mt-2">Explore 3D parts and understand their function and common faults.</p>
        </div>
        <ProgressButton moduleId="components" moduleName="Component Library" />
      </div>

      <div className="relative mb-8 max-w-md">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <input 
          type="text"
          placeholder="Search components..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-card/50 border-2 border-border text-foreground placeholder:text-muted-foreground pl-12 pr-4 py-3 rounded-xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-200"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <AnimatePresence>
          {filtered.map(comp => (
            <motion.div
              key={comp.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedComp(comp)}
              className="glass-card rounded-2xl overflow-hidden cursor-pointer flex flex-col group relative"
            >
              <div className="h-48 bg-black/40 border-b border-white/5 relative flex items-center justify-center p-4">
                {comp.image ? (
                  <img 
                    src={`${import.meta.env.BASE_URL}images/${comp.image}`} 
                    alt={comp.name} 
                    className="max-h-full object-contain drop-shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="text-muted-foreground/30 font-mono text-sm">No 3D Model</div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-50" />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="font-bold text-lg mb-2 text-foreground">{comp.name}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">{comp.function}</p>
                <div className="text-xs font-semibold text-primary">View Details &rarr;</div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedComp && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              onClick={() => setSelectedComp(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="fixed top-[5%] bottom-[5%] left-[5%] right-[5%] md:left-[15%] md:right-[15%] lg:left-[20%] lg:right-[20%] glass-panel rounded-2xl z-50 flex flex-col overflow-hidden shadow-2xl shadow-primary/10"
            >
              <div className="flex justify-between items-center p-4 border-b border-white/10 bg-black/20">
                <h2 className="text-xl font-bold">{selectedComp.name}</h2>
                <button onClick={() => setSelectedComp(null)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto p-6 md:p-8 flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <div className="w-full aspect-square bg-black/30 rounded-2xl border border-white/5 flex items-center justify-center p-8 mb-6 relative">
                    {selectedComp.image ? (
                      <img 
                        src={`${import.meta.env.BASE_URL}images/${selectedComp.image}`} 
                        alt={selectedComp.name} 
                        className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                      />
                    ) : (
                      <span className="text-muted-foreground">Image placeholder</span>
                    )}
                  </div>
                </div>

                <div className="flex-1 space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-primary font-semibold">
                      <Info className="w-5 h-5" /> Function
                    </div>
                    <p className="text-gray-300 leading-relaxed bg-black/20 p-4 rounded-xl border border-white/5">{selectedComp.function}</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-primary font-semibold">
                      <Navigation className="w-5 h-5" /> System Location
                    </div>
                    <p className="text-gray-300 leading-relaxed bg-black/20 p-4 rounded-xl border border-white/5">{selectedComp.location}</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-orange-400 font-semibold">
                      <ShieldAlert className="w-5 h-5" /> Common Faults
                    </div>
                    <ul className="space-y-2">
                      {selectedComp.faults.map((fault, i) => (
                        <li key={i} className="bg-orange-500/10 border border-orange-500/20 text-orange-200 px-4 py-2 rounded-lg text-sm flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                          {fault}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
