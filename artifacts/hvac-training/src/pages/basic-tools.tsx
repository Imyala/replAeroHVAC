import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wrench, ChevronDown, ChevronUp, Info } from "lucide-react";

const boltParts = [
  {
    name: "Head",
    description:
      "The top of the bolt, designed for gripping with a wrench or driver. Hex heads are the most common in HVAC/R work, allowing a spanner or socket to apply torque. The shape determines what tool is needed.",
  },
  {
    name: "Radius",
    description:
      "The curved transition zone between the head and the shank. This fillet radius strengthens the bolt at the point of highest stress concentration, reducing the risk of fatigue failure under load.",
  },
  {
    name: "Shank (Grip Length)",
    description:
      "The smooth, unthreaded cylindrical body of the bolt that passes through the clamped material. The grip length is the measurement of this unthreaded section. It bears the shear load and keeps components aligned.",
  },
  {
    name: "Runout",
    description:
      "The transition zone between the threaded section and the unthreaded shank. Thread runout is an incomplete thread and should not be within the clamped joint — only full threads should engage the nut.",
  },
  {
    name: "Thread",
    description:
      "The helical ridges that wind along the end of the bolt shaft. When engaged with a nut or tapped hole, the thread converts rotational torque into axial clamping force. Thread pitch (threads per mm/inch) determines the rate of advance per revolution.",
  },
  {
    name: "Nut",
    description:
      "A hexagonal fastener with an internal thread that screws onto the bolt. Together, the bolt and nut clamp components between the bolt head and the nut face. A washer is often used under the nut to spread the load.",
  },
];

const measurements = [
  {
    name: "Thread Length",
    description:
      "The length of the threaded portion from the tip of the bolt to where the thread runs out. Must be long enough to allow full nut engagement — typically at least 1× the bolt diameter for steel.",
  },
  {
    name: "Grip Length",
    description:
      "The length of the unthreaded shank. This should match the total thickness of the materials being clamped so that threads do not end up within the joint.",
  },
  {
    name: "Nominal Length",
    description:
      "The total measured length of the bolt from under the head to the tip — thread length plus grip length. This is the number you specify when ordering a bolt (e.g. M10 × 50mm).",
  },
];

const screwTypes = [
  {
    name: "Machine Screw",
    use: "General panel and bracket fastening. Requires a tapped hole or nut.",
    tip: "Use thread-locking compound on vibrating equipment.",
  },
  {
    name: "Self-Tapping Screw",
    use: "Sheet metal ductwork and casing assembly. Cuts its own thread as it's driven in.",
    tip: "Always pre-drill a pilot hole in thicker gauge steel.",
  },
  {
    name: "Hex Head Bolt",
    use: "Compressor mounting, condenser fan motor, and heavy structural connections.",
    tip: "Always use a calibrated torque wrench to reach the manufacturer's specified torque value.",
  },
  {
    name: "Stud Bolt",
    use: "Flange connections on chillers and large valves. Threaded on both ends.",
    tip: "Never reuse stud bolts on pressure flanges — replace as a set.",
  },
  {
    name: "Allen / Socket Head Cap Screw",
    use: "Access panels, motor terminal covers, and tight-space fastening.",
    tip: "Use the correct hex key size — a worn key can round out the socket.",
  },
];

function AccordionItem({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-white/8 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-white/5 transition-colors"
      >
        <span className="font-semibold text-foreground">{title}</span>
        {open ? <ChevronUp className="w-4 h-4 text-primary" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-white/5 pt-4">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function BasicTools() {
  const [selectedPart, setSelectedPart] = useState<string | null>(null);

  return (
    <div className="min-h-screen p-6 md:p-10 max-w-5xl mx-auto">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
            <Wrench className="w-6 h-6 text-primary" />
          </div>
          <span className="text-sm font-medium text-primary uppercase tracking-widest">Basic Tools</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Bolts &amp; Screws</h1>
        <p className="text-muted-foreground text-lg">
          Understanding fasteners is fundamental to HVAC/R work. Correct selection, installation, and torque
          prevent leaks, vibration failures, and costly callbacks.
        </p>
      </motion.div>

      {/* Diagram Section */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-10 bg-card border border-white/8 rounded-2xl overflow-hidden"
      >
        <div className="px-6 py-4 border-b border-white/8 flex items-center gap-2">
          <Info className="w-4 h-4 text-primary" />
          <h2 className="font-semibold text-foreground">Bolt Anatomy Diagram</h2>
        </div>
        <div className="p-6 flex flex-col md:flex-row gap-8 items-start">
          {/* Diagram image */}
          <div className="flex-shrink-0 w-full md:w-1/2 bg-white rounded-xl overflow-hidden flex items-center justify-center p-4">
            <img
              src="/images/bolt-diagram.png"
              alt="Bolt anatomy diagram showing Thread, Nut, Runout, Shank, Radius, Head and their measurements"
              className="w-full object-contain"
            />
          </div>

          {/* Parts list */}
          <div className="flex-1 space-y-2">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-semibold">
              Click a part to learn more
            </p>
            {boltParts.map((part) => (
              <button
                key={part.name}
                onClick={() => setSelectedPart(selectedPart === part.name ? null : part.name)}
                className={`w-full text-left px-4 py-3 rounded-xl border transition-all duration-200 ${
                  selectedPart === part.name
                    ? "bg-primary/10 border-primary/30 text-primary"
                    : "border-white/8 hover:bg-white/5 text-foreground"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-sm">{part.name}</span>
                  {selectedPart === part.name ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-muted-foreground" />
                  )}
                </div>
                <AnimatePresence>
                  {selectedPart === part.name && (
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden text-xs text-muted-foreground mt-2 leading-relaxed"
                    >
                      {part.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </button>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Measurements */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-10"
      >
        <h2 className="text-xl font-bold text-foreground mb-4">Key Measurements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {measurements.map((m, i) => (
            <div
              key={m.name}
              className="bg-card border border-white/8 rounded-xl p-5"
            >
              <div className="text-primary font-bold text-sm uppercase tracking-widest mb-2">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-semibold text-foreground mb-2">{m.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{m.description}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Common Types */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-10"
      >
        <h2 className="text-xl font-bold text-foreground mb-4">Common Types in HVAC/R</h2>
        <div className="space-y-3">
          {screwTypes.map((s) => (
            <AccordionItem key={s.name} title={s.name}>
              <p className="mb-2">
                <span className="font-semibold text-foreground">Common Use: </span>
                {s.use}
              </p>
              <p className="flex items-start gap-2">
                <span className="text-primary font-semibold flex-shrink-0">Tip:</span>
                {s.tip}
              </p>
            </AccordionItem>
          ))}
        </div>
      </motion.section>

      {/* Key Rules */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-primary/5 border border-primary/20 rounded-2xl p-6"
      >
        <h2 className="text-lg font-bold text-foreground mb-4">Golden Rules for Fasteners</h2>
        <ul className="space-y-3 text-sm text-muted-foreground">
          {[
            "Always use a torque wrench for compressor, motor, and pressure flange bolts — over-torquing strips threads and under-torquing causes leaks.",
            "Match material: use stainless steel fasteners in coastal/humid environments to prevent galvanic corrosion.",
            "Never mix metric and imperial fasteners — thread pitch differences cause cross-threading and failure.",
            "Apply thread sealant (not PTFE tape) on tapered NPT fittings. Use thread-locking compound on machine screws subject to vibration.",
            "Replace any fastener that shows signs of corrosion, stretching, or thread damage — do not reuse critical fasteners.",
          ].map((rule, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center font-bold mt-0.5">
                {i + 1}
              </span>
              {rule}
            </li>
          ))}
        </ul>
      </motion.section>
    </div>
  );
}
