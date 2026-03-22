import { useState } from "react";
import { Zap, Info, ChevronDown, ChevronUp, BookOpen, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";
import { ZoomableImage } from "@/components/zoomable-image";

const ohmLawCards = [
  {
    symbol: "V",
    name: "Voltage",
    unit: "Volts (V)",
    colour: "text-yellow-400",
    border: "border-yellow-400/30",
    bg: "bg-yellow-400/5",
    description: "Electrical pressure that pushes current through a circuit. Think of it like water pressure in a pipe.",
    hvac: "Mains supply in HVAC/R is typically 240 V (single-phase) or 415 V (three-phase) in Australia. Control circuits are commonly 24 V or 12 V DC.",
  },
  {
    symbol: "I",
    name: "Current",
    unit: "Amperes (A)",
    colour: "text-blue-400",
    border: "border-blue-400/30",
    bg: "bg-blue-400/5",
    description: "The rate of flow of electric charge through a conductor. Like the volume of water flowing through a pipe per second.",
    hvac: "A 5 kW single-phase compressor at 240 V draws roughly 21 A. Always check the nameplate full-load amps (FLA) before selecting a fuse or overload relay.",
  },
  {
    symbol: "R",
    name: "Resistance",
    unit: "Ohms (Ω)",
    colour: "text-red-400",
    border: "border-red-400/30",
    bg: "bg-red-400/5",
    description: "Opposition to current flow. Higher resistance means less current for the same voltage.",
    hvac: "Dirty contacts, corroded terminals, and undersized wiring all add resistance — causing voltage drop, heat, and unreliable operation.",
  },
];

const formulas = [
  { label: "Voltage", formula: "V = I × R", description: "Volts equals Amps × Ohms" },
  { label: "Current", formula: "I = V ÷ R", description: "Amps equals Volts ÷ Ohms" },
  { label: "Resistance", formula: "R = V ÷ I", description: "Ohms equals Volts ÷ Amps" },
  { label: "Power", formula: "P = V × I", description: "Watts equals Volts × Amps" },
];

const circuitTypes = [
  {
    name: "Series Circuit",
    colour: "text-blue-400",
    border: "border-blue-400/20",
    bg: "bg-blue-400/5",
    rules: [
      "Current is the same through every component",
      "Total resistance = sum of all individual resistances (R₁ + R₂ + …)",
      "Voltage is divided across each component",
      "If one component fails open, the entire circuit stops",
    ],
    hvac: "Safety controls wired in series (high-pressure cutout, low-pressure cutout, freeze stat, motor overload). Any one trip opens the circuit and shuts down the compressor.",
  },
  {
    name: "Parallel Circuit",
    colour: "text-green-400",
    border: "border-green-400/20",
    bg: "bg-green-400/5",
    rules: [
      "Voltage is the same across every branch",
      "Total current = sum of all branch currents (I₁ + I₂ + …)",
      "Total resistance is less than the smallest branch resistance",
      "If one branch fails open, other branches continue to operate",
    ],
    hvac: "Multiple evaporator fan motors or condenser fans wired in parallel across the supply. Failure of one fan does not kill the others.",
  },
];

const components = [
  {
    name: "Fuse",
    symbol: "—/—",
    description: "One-time overcurrent protection. Melts to break the circuit when current exceeds its rating. Must be replaced after blowing.",
    tip: "Always replace with the same type and rating. Never use a higher-rated fuse — it defeats the protection.",
  },
  {
    name: "Circuit Breaker",
    symbol: "[ ]",
    description: "Resettable overcurrent protection. Trips on overload or short circuit and can be reset without replacement.",
    tip: "A breaker that repeatedly trips indicates a fault in the load — investigate before resetting.",
  },
  {
    name: "Contactor",
    symbol: "K",
    description: "Electromagnetically operated switch used to switch high-current loads (compressors, fans). Controlled by a low-current coil circuit.",
    tip: "Inspect contact tips for pitting and burning. Badly worn contacts cause voltage drop and overheating.",
  },
  {
    name: "Relay",
    symbol: "RY",
    description: "Small electromagnetically operated switch used in control circuits. Allows a low-voltage signal to switch another circuit.",
    tip: "Common in 24 V control boards — a buzzing relay usually indicates low coil voltage or a stuck armature.",
  },
  {
    name: "Capacitor",
    symbol: "—||—",
    description: "Stores electrical energy. Run capacitors keep single-phase motors running smoothly. Start capacitors give motors an extra torque kick at startup.",
    tip: "A failed run capacitor causes the motor to draw high current and overheat. Always discharge before handling.",
  },
  {
    name: "Thermostat / Sensor",
    symbol: "T",
    description: "Opens or closes a circuit based on temperature. Can be mechanical (bimetal) or electronic (thermistor/NTC).",
    tip: "Check calibration against a reference thermometer. A 2 °C drift can significantly affect system performance.",
  },
];

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}
function Accordion({ title, children }: AccordionProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn("border border-white/8 rounded-xl overflow-hidden", open && "border-primary/30")}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-white/5 transition-colors"
      >
        <span className="font-medium text-sm text-foreground">{title}</span>
        {open ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
      </button>
      {open && <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{children}</div>}
    </div>
  );
}

export default function BasicElectricalCircuit() {
  const [activeFormula, setActiveFormula] = useState<string | null>(null);

  return (
    <div className="min-h-full p-6 md:p-10 space-y-10 max-w-5xl mx-auto">

      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center">
            <Zap className="w-5 h-5 text-yellow-400" />
          </div>
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Basic Tools · 1A</p>
        </div>
        <h1 className="text-4xl font-display font-bold text-foreground tracking-tight mb-3">Basic Electrical Circuit</h1>
        <p className="text-muted-foreground text-base leading-relaxed max-w-2xl">
          A solid understanding of electrical circuits is essential for every HVAC/R technician. From reading wiring diagrams to diagnosing faults, everything builds on these fundamentals.
        </p>
      </div>

      {/* Ohm's Law */}
      <section className="bg-card border border-white/8 rounded-2xl overflow-hidden">
        <div className="flex items-center gap-2 px-6 py-4 border-b border-white/8">
          <Info className="w-4 h-4 text-primary" />
          <h2 className="font-semibold text-foreground">Ohm's Law — The Foundation</h2>
        </div>
        <div className="p-6 space-y-6">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Ohm's Law describes the relationship between <span className="text-foreground font-medium">Voltage (V)</span>, <span className="text-foreground font-medium">Current (I)</span>, and <span className="text-foreground font-medium">Resistance (R)</span>. It is the single most important equation in electrical work.
          </p>

          {/* Triangle visual */}
          <div className="flex flex-col items-center gap-4">
            <div className="relative w-44 h-36 select-none">
              <svg viewBox="0 0 160 120" className="w-full h-full" fill="none">
                <polygon points="80,8 8,112 152,112" stroke="rgb(59,130,246)" strokeWidth="2" fill="rgba(59,130,246,0.06)" />
                <line x1="80" y1="60" x2="80" y2="112" stroke="rgb(59,130,246)" strokeWidth="1" strokeDasharray="4,3" opacity="0.5" />
                <line x1="44" y1="60" x2="116" y2="60" stroke="rgb(59,130,246)" strokeWidth="1" strokeDasharray="4,3" opacity="0.5" />
                <text x="80" y="38" textAnchor="middle" fill="#facc15" fontWeight="bold" fontSize="18">V</text>
                <text x="44" y="100" textAnchor="middle" fill="#60a5fa" fontWeight="bold" fontSize="18">I</text>
                <text x="116" y="100" textAnchor="middle" fill="#f87171" fontWeight="bold" fontSize="18">R</text>
              </svg>
            </div>
            <p className="text-xs text-muted-foreground text-center">Cover the unknown quantity to read the formula — cover V to get I×R, cover I to get V÷R, cover R to get V÷I.</p>
          </div>

          {/* VIR cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {ohmLawCards.map((c) => (
              <div key={c.name} className={cn("rounded-xl p-4 border", c.border, c.bg)}>
                <div className={cn("text-3xl font-display font-black mb-2", c.colour)}>{c.symbol}</div>
                <div className="font-semibold text-foreground text-sm mb-0.5">{c.name}</div>
                <div className="text-xs text-muted-foreground mb-2">{c.unit}</div>
                <p className="text-xs text-muted-foreground leading-relaxed mb-2">{c.description}</p>
                <div className="border-t border-white/8 pt-2 mt-2">
                  <p className="text-xs text-muted-foreground leading-relaxed"><span className="text-foreground font-medium">HVAC/R: </span>{c.hvac}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Formula tiles */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Tap a formula to highlight it</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {formulas.map((f) => (
                <button
                  key={f.label}
                  onClick={() => setActiveFormula(activeFormula === f.label ? null : f.label)}
                  className={cn(
                    "rounded-xl border p-3 text-left transition-all",
                    activeFormula === f.label
                      ? "border-primary/50 bg-primary/10 shadow-[0_0_16px_rgba(59,130,246,0.15)]"
                      : "border-white/8 bg-white/2 hover:bg-white/5"
                  )}
                >
                  <div className="text-base font-display font-bold text-foreground mb-1">{f.formula}</div>
                  <div className="text-xs text-muted-foreground">{f.description}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Series & Parallel */}
      <section className="bg-card border border-white/8 rounded-2xl overflow-hidden">
        <div className="flex items-center gap-2 px-6 py-4 border-b border-white/8">
          <Info className="w-4 h-4 text-primary" />
          <h2 className="font-semibold text-foreground">Series vs Parallel Circuits</h2>
        </div>
        <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {circuitTypes.map((ct) => (
            <div key={ct.name} className={cn("rounded-xl border p-5 space-y-3", ct.border, ct.bg)}>
              <h3 className={cn("font-semibold text-sm", ct.colour)}>{ct.name}</h3>
              <ul className="space-y-1.5">
                {ct.rules.map((r) => (
                  <li key={r} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className={cn("mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0", ct.colour.replace("text-", "bg-"))} />
                    {r}
                  </li>
                ))}
              </ul>
              <div className="border-t border-white/8 pt-3">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  <span className="text-foreground font-medium">HVAC/R example: </span>{ct.hvac}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Common Components */}
      <section className="bg-card border border-white/8 rounded-2xl overflow-hidden">
        <div className="flex items-center gap-2 px-6 py-4 border-b border-white/8">
          <BookOpen className="w-4 h-4 text-primary" />
          <h2 className="font-semibold text-foreground">Common Circuit Components</h2>
        </div>
        <div className="p-6 space-y-3">
          {components.map((comp) => (
            <Accordion key={comp.name} title={comp.name}>
              <div className="space-y-2 pt-1">
                <p>{comp.description}</p>
                <div className="flex items-start gap-2 mt-2 p-3 rounded-lg bg-yellow-400/5 border border-yellow-400/20">
                  <AlertTriangle className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-yellow-200/80">{comp.tip}</p>
                </div>
              </div>
            </Accordion>
          ))}
        </div>
      </section>

      {/* Voltage Drop */}
      <section className="bg-card border border-white/8 rounded-2xl overflow-hidden">
        <div className="flex items-center gap-2 px-6 py-4 border-b border-white/8">
          <AlertTriangle className="w-4 h-4 text-yellow-400" />
          <h2 className="font-semibold text-foreground">Voltage Drop — Why It Matters</h2>
        </div>
        <div className="p-6 space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Voltage drop occurs when resistance in the wiring or connections reduces the voltage reaching the load. Even a few volts of drop can cause <span className="text-foreground font-medium">motor overheating, contactor chatter, unreliable control boards,</span> and premature component failure.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { label: "Acceptable", value: "≤ 3%", desc: "For power circuits (AS/NZS 3000)", colour: "text-green-400", border: "border-green-400/20", bg: "bg-green-400/5" },
              { label: "Caution", value: "3–5%", desc: "Performance may degrade — investigate wiring", colour: "text-yellow-400", border: "border-yellow-400/20", bg: "bg-yellow-400/5" },
              { label: "Unacceptable", value: "> 5%", desc: "Likely to cause faults and equipment damage", colour: "text-red-400", border: "border-red-400/20", bg: "bg-red-400/5" },
            ].map((v) => (
              <div key={v.label} className={cn("rounded-xl border p-4", v.border, v.bg)}>
                <div className={cn("text-2xl font-display font-black mb-1", v.colour)}>{v.value}</div>
                <div className="text-sm font-semibold text-foreground mb-1">{v.label}</div>
                <p className="text-xs text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            <span className="text-foreground font-medium">Formula: </span>Voltage Drop = I × R<sub>wire</sub>. To reduce voltage drop: use a larger cable cross-section, shorten the cable run, or tighten/clean all connections.
          </p>
        </div>
      </section>

      {/* Using a Multimeter */}
      <section className="bg-card border border-white/8 rounded-2xl overflow-hidden">
        <div className="flex items-center gap-2 px-6 py-4 border-b border-white/8">
          <Info className="w-4 h-4 text-primary" />
          <h2 className="font-semibold text-foreground">Using a Multimeter</h2>
        </div>
        <div className="p-6 space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            A digital multimeter (DMM) is your primary electrical diagnostic tool. It measures voltage, current, and resistance. Always select the correct function and range before connecting leads.
          </p>
          <div className="space-y-3">
            {[
              {
                measure: "DC / AC Voltage",
                how: "Set to V~ (AC) or V⎓ (DC). Place red lead on the point to test, black on neutral/ground. Never touch bare leads together.",
                use: "Check supply voltage at contactor, control transformer output, sensor supply rails.",
              },
              {
                measure: "Resistance (Ω)",
                how: "Set to Ω. Isolate and de-energise the circuit first. Place leads across the component.",
                use: "Check motor winding resistance, fuse continuity, contact resistance.",
              },
              {
                measure: "Continuity",
                how: "Set to continuity (🔊 symbol). Beep = low resistance path exists. No beep = open circuit.",
                use: "Trace wiring faults, confirm safety control trips, verify fuse condition.",
              },
              {
                measure: "AC Current (Clamp)",
                how: "Use a clamp meter around a single live conductor. Do not clamp both conductors together.",
                use: "Check compressor running current vs nameplate FLA. High current = overloaded motor or faulty capacitor.",
              },
            ].map((m) => (
              <div key={m.measure} className="rounded-xl border border-white/8 p-4 space-y-1.5">
                <div className="font-semibold text-sm text-foreground">{m.measure}</div>
                <p className="text-xs text-muted-foreground"><span className="text-foreground font-medium">How: </span>{m.how}</p>
                <p className="text-xs text-muted-foreground"><span className="text-foreground font-medium">Used for: </span>{m.use}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Rules */}
      <section className="bg-red-950/30 border border-red-500/20 rounded-2xl overflow-hidden">
        <div className="flex items-center gap-2 px-6 py-4 border-b border-red-500/20">
          <AlertTriangle className="w-4 h-4 text-red-400" />
          <h2 className="font-semibold text-red-300">Electrical Safety — Golden Rules</h2>
        </div>
        <div className="p-6">
          <ul className="space-y-3">
            {[
              "Always isolate and lock out / tag out (LOTO) before working on energised equipment.",
              "Test before you touch — use a multimeter or non-contact tester to confirm a circuit is de-energised.",
              "Never work alone on live circuits above extra-low voltage (ELV, > 50 V AC / 120 V DC).",
              "Discharge capacitors before touching — run capacitors can hold lethal charge for hours after power is removed.",
              "Use insulated tools rated for the voltage level you are working on.",
              "In Australia, electrical work on fixed wiring must be performed by a licensed electrician (unless you hold a refrigeration and air conditioning licence with the appropriate permit).",
            ].map((rule) => (
              <li key={rule} className="flex items-start gap-3 text-sm text-red-200/80">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-red-400 flex-shrink-0" />
                {rule}
              </li>
            ))}
          </ul>
        </div>
      </section>

    </div>
  );
}
