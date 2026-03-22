import { useState } from "react";
import { Zap, Info, ChevronDown, ChevronUp, BookOpen, AlertTriangle, Leaf, Flame } from "lucide-react";
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

      {/* The Electrical Industry */}
      <section className="bg-card border border-white/8 rounded-2xl overflow-hidden">
        <div className="flex items-center gap-2 px-6 py-4 border-b border-white/8">
          <Info className="w-4 h-4 text-primary" />
          <h2 className="font-semibold text-foreground">The Electrical Industry</h2>
        </div>
        <div className="p-6 space-y-5">
          <p className="text-sm text-muted-foreground leading-relaxed">
            The electrical industry is broad. As an HVAC/R technician you work within the <span className="text-foreground font-medium">Refrigeration &amp; Air Conditioning</span> sector, but you will regularly interact with all of the sectors below.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { label: "Electrical Supply", desc: "Covering power generation, transmission and distribution.", colour: "text-yellow-400", dot: "bg-yellow-400" },
              { label: "Industrial", desc: "Installing and maintaining electrical machinery and wiring in factories and industrial complexes.", colour: "text-blue-400", dot: "bg-blue-400" },
              { label: "Commercial & Domestic", desc: "Installation of wiring (lighting, power, data) and appliances.", colour: "text-green-400", dot: "bg-green-400" },
              { label: "Refrigeration & Air Conditioning", desc: "Your sector — electrical systems in HVAC/R equipment across residential, commercial, and industrial applications.", colour: "text-red-400", dot: "bg-red-400" },
            ].map((s) => (
              <div key={s.label} className="flex items-start gap-3 rounded-xl border border-white/8 p-4">
                <span className={cn("mt-1.5 w-2 h-2 rounded-full flex-shrink-0", s.dot)} />
                <div>
                  <p className={cn("font-semibold text-sm mb-0.5", s.colour)}>{s.label}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-xl border border-white/8 p-4">
            <p className="text-xs font-semibold text-foreground mb-2">Electronics Industry</p>
            <p className="text-xs text-muted-foreground leading-relaxed mb-3">The electronics industry overlaps with electrical but focuses on lower-voltage signal and data systems. It includes:</p>
            <div className="space-y-1.5">
              {[
                { label: "Data & Voice Communications", desc: "Telecommunications, radio and TV transmission, communication systems." },
                { label: "Consumer Electronics", desc: "Maintenance of domestic electronic appliances." },
                { label: "Commercial Electronics", desc: "Repairing and servicing electronic equipment used by commerce." },
              ].map((e) => (
                <div key={e.label} className="flex items-start gap-2 text-xs text-muted-foreground">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                  <span><span className="text-foreground font-medium">{e.label}</span> — {e.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What is Electricity */}
      <section className="bg-card border border-white/8 rounded-2xl overflow-hidden">
        <div className="flex items-center gap-2 px-6 py-4 border-b border-white/8">
          <Zap className="w-4 h-4 text-yellow-400" />
          <h2 className="font-semibold text-foreground">What is Electricity?</h2>
        </div>
        <div className="p-6 space-y-5">
          <div className="rounded-xl border border-yellow-400/20 bg-yellow-400/5 p-5 text-center">
            <p className="text-xl font-display font-bold text-foreground mb-2">Electricity is the flow of electrons.</p>
            <p className="text-sm text-muted-foreground">To achieve a flow of electrons in a circuit, a <span className="text-foreground font-medium">pressure difference</span> in that circuit must be created.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Static */}
            <div className="rounded-xl border border-white/8 p-5 space-y-3">
              <p className="font-semibold text-sm text-foreground">Static Electricity</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Static electricity is usually caused when materials are rubbed against each other — like wool on plastic. The process causes electrons to be pulled from the surface of one material and relocated on the surface of the other.
              </p>
              <div className="rounded-lg bg-white/3 border border-white/8 p-3 space-y-1.5">
                <p className="text-xs font-semibold text-foreground">Laws of Static Electricity</p>
                {["Likes repel", "Opposites attract", "Charged objects attract neutral objects"].map((l) => (
                  <div key={l} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400/60 flex-shrink-0" />{l}
                  </div>
                ))}
              </div>
              <div className="rounded-lg bg-white/3 border border-white/8 p-3 space-y-1.5">
                <p className="text-xs font-semibold text-foreground">Methods of Charging</p>
                {["Friction — rubbing two materials together", "Conduction (contact) — touching a charged object", "Induction — bringing a charge close without touching"].map((m) => (
                  <div key={m} className="flex items-start gap-2 text-xs text-muted-foreground">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-400/60 flex-shrink-0" />{m}
                  </div>
                ))}
              </div>
              <div className="rounded-lg bg-white/3 border border-white/8 p-3 space-y-1.5">
                <p className="text-xs font-semibold text-foreground">Applications of Static</p>
                {["Spray painting (electrostatic attraction)", "Dust precipitators (air filtration)", "Photocopiers (selenium drum)", "Lightning — natural discharge"].map((a) => (
                  <div key={a} className="flex items-start gap-2 text-xs text-muted-foreground">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400/60 flex-shrink-0" />{a}
                  </div>
                ))}
              </div>
            </div>
            {/* Current */}
            <div className="rounded-xl border border-white/8 p-5 space-y-3">
              <p className="font-semibold text-sm text-foreground">Current Electricity</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Current electricity is <span className="text-foreground font-medium">dynamic</span>. Current is the measured flow of electrons in a given time.
              </p>
              <div className="rounded-lg border border-blue-400/20 bg-blue-400/5 p-3 text-center">
                <p className="text-sm font-bold text-blue-300 mb-1">1 Ampere</p>
                <p className="text-xs text-muted-foreground">= 6,280,000,000,000,000,000 electrons past a point per second</p>
                <p className="text-xs text-muted-foreground mt-1">i.e. 10 A = 10 packages of electrons past a point in 1 second</p>
              </div>
              <div className="rounded-lg bg-white/3 border border-white/8 p-3 space-y-2">
                <p className="text-xs font-semibold text-foreground">Current Flow — Two Conventions</p>
                <div className="flex items-start gap-2 text-xs text-muted-foreground">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                  <span><span className="text-foreground font-medium">Conventional current flow</span> — flows from positive (+) to negative (−). Used in circuit diagrams.</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-muted-foreground">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                  <span><span className="text-foreground font-medium">Electron current flow</span> — actual electron movement from negative (−) to positive (+).</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Energy Sources */}
      <section className="bg-card border border-white/8 rounded-2xl overflow-hidden">
        <div className="flex items-center gap-2 px-6 py-4 border-b border-white/8">
          <Leaf className="w-4 h-4 text-green-400" />
          <h2 className="font-semibold text-foreground">Energy Sources</h2>
        </div>
        <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Renewable */}
          <div className="rounded-xl border border-green-400/20 bg-green-400/5 p-5 space-y-3">
            <div className="flex items-center gap-2">
              <Leaf className="w-4 h-4 text-green-400" />
              <p className="font-semibold text-sm text-green-400">Renewable Energy Sources</p>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              With Australia's signing of the Kyoto Agreement, there is a growing movement toward energy production from renewable sources. These sources are naturally replenished and produce little to no greenhouse emissions.
            </p>
            <div className="grid grid-cols-2 gap-2">
              {["Solar", "Wind", "Tidal & wave energy", "Biomass & Biogas", "Geothermal", "Hydro"].map((s) => (
                <div key={s} className="flex items-center gap-2 rounded-lg border border-green-400/15 bg-green-400/5 px-3 py-2 text-xs text-green-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />{s}
                </div>
              ))}
            </div>
          </div>
          {/* Non-Renewable */}
          <div className="rounded-xl border border-orange-400/20 bg-orange-400/5 p-5 space-y-3">
            <div className="flex items-center gap-2">
              <Flame className="w-4 h-4 text-orange-400" />
              <p className="font-semibold text-sm text-orange-400">Non-Renewable Energy Sources</p>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Non-renewable sources are finite — once consumed they cannot be replaced on a human timescale. They currently provide the majority of grid electricity in Australia, though this is changing rapidly.
            </p>
            <div className="grid grid-cols-2 gap-2">
              {["Coal", "Gas", "Oil", "Nuclear"].map((s) => (
                <div key={s} className="flex items-center gap-2 rounded-lg border border-orange-400/15 bg-orange-400/5 px-3 py-2 text-xs text-orange-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0" />{s}
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed pt-1">Electricity is generated from these fuels by burning them to produce steam which drives turbines connected to generators (coal, gas, oil), or by controlled nuclear fission (nuclear).</p>
          </div>
        </div>
      </section>

      {/* Electrical Units Defined */}
      <section className="bg-card border border-white/8 rounded-2xl overflow-hidden">
        <div className="flex items-center gap-2 px-6 py-4 border-b border-white/8">
          <Zap className="w-4 h-4 text-yellow-400" />
          <h2 className="font-semibold text-foreground">Electrical Units Defined</h2>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              sym: "A", name: "Ampere", colour: "text-blue-400", border: "border-blue-400/20", bg: "bg-blue-400/5",
              def: "The unit of electric current — current is the flow of electrons, similar to the flow of water. The ampere represents the quantity of electricity flowing.",
            },
            {
              sym: "V", name: "Volt", colour: "text-yellow-400", border: "border-yellow-400/20", bg: "bg-yellow-400/5",
              def: "The difference of electrical pressure between two points of a circuit. Also called potential or potential difference (PD).",
            },
            {
              sym: "Ω", name: "Ohm", colour: "text-red-400", border: "border-red-400/20", bg: "bg-red-400/5",
              def: "The electric resistance in a circuit that opposes the flow of current.",
            },
            {
              sym: "W", name: "Watt", colour: "text-green-400", border: "border-green-400/20", bg: "bg-green-400/5",
              def: "The unit of power — used when energy is converted from one form to another, e.g., electricity to light or heat.",
            },
          ].map((u) => (
            <div key={u.name} className={cn("rounded-xl border p-4 space-y-2", u.border, u.bg)}>
              <div className="flex items-baseline gap-3">
                <span className={cn("text-3xl font-display font-black", u.colour)}>{u.sym}</span>
                <span className="font-semibold text-foreground">{u.name}</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">{u.def}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SI Units */}
      <section className="bg-card border border-white/8 rounded-2xl overflow-hidden">
        <div className="flex items-center gap-2 px-6 py-4 border-b border-white/8">
          <Info className="w-4 h-4 text-primary" />
          <h2 className="font-semibold text-foreground">SI Units — Système Internationale</h2>
        </div>
        <div className="p-6 space-y-6">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Electrical quantities are measured using the <span className="text-foreground font-medium">International System of Units (SI)</span>. There are <span className="text-foreground font-medium">seven base units</span> and two supplementary units. All other units are derived — for example, velocity = metre/second, power = joule/second (watt).
          </p>

          {/* 7 Base Units table */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">The 7 Base Units</p>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-white/8">
                    <th className="text-left py-2 pr-4 font-semibold text-muted-foreground">Quantity</th>
                    <th className="text-left py-2 pr-4 font-semibold text-muted-foreground">Unit</th>
                    <th className="text-left py-2 font-semibold text-muted-foreground">Symbol</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    { qty: "Length", unit: "Metre", sym: "m", highlight: false },
                    { qty: "Mass", unit: "Kilogram", sym: "kg", highlight: false },
                    { qty: "Time", unit: "Second", sym: "s", highlight: false },
                    { qty: "Electric Current", unit: "Ampere", sym: "A", highlight: true },
                    { qty: "Thermodynamic Temperature", unit: "Kelvin", sym: "K", highlight: false },
                    { qty: "Amount of Substance", unit: "Mole", sym: "mol", highlight: false },
                    { qty: "Luminous Intensity", unit: "Candela", sym: "cd", highlight: false },
                  ].map((row) => (
                    <tr key={row.qty} className={cn(row.highlight && "bg-primary/5")}>
                      <td className={cn("py-2 pr-4", row.highlight ? "text-foreground font-medium" : "text-muted-foreground")}>{row.qty}</td>
                      <td className="py-2 pr-4 text-muted-foreground">{row.unit}</td>
                      <td className={cn("py-2 font-bold font-display", row.highlight ? "text-primary" : "text-muted-foreground")}>{row.sym}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Derived electrical units */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">Key Derived Electrical Units</p>
            <p className="text-xs text-muted-foreground mb-3">These units are not base units — they are calculated from combinations of the 7 base units. The "Equals" column shows the formula that defines each unit.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-white/8">
                    <th className="text-left py-2 pr-3 font-semibold text-muted-foreground">Quantity</th>
                    <th className="text-left py-2 pr-3 font-semibold text-muted-foreground">Unit</th>
                    <th className="text-left py-2 pr-3 font-semibold text-muted-foreground">Symbol</th>
                    <th className="text-left py-2 font-semibold text-muted-foreground">Equals</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    { qty: "Voltage / EMF", unit: "Volt", sym: "V", from: "W/A", plain: "Watts ÷ Amps" },
                    { qty: "Resistance", unit: "Ohm", sym: "Ω", from: "V/A", plain: "Volts ÷ Amps" },
                    { qty: "Power", unit: "Watt", sym: "W", from: "J/s", plain: "Joules per second" },
                    { qty: "Energy", unit: "Joule", sym: "J", from: "N·m", plain: "Newtons × Metres" },
                    { qty: "Frequency", unit: "Hertz", sym: "Hz", from: "1/s", plain: "Cycles per second" },
                    { qty: "Capacitance", unit: "Farad", sym: "F", from: "C/V", plain: "Coulombs ÷ Volts" },
                    { qty: "Inductance", unit: "Henry", sym: "H", from: "Wb/A", plain: "Webers ÷ Amps" },
                    { qty: "Pressure", unit: "Pascal", sym: "Pa", from: "N/m²", plain: "Newtons per m²" },
                    { qty: "Electric Conductance", unit: "Siemens", sym: "S", from: "1/Ω", plain: "Inverse of Ohms" },
                  ].map((row) => (
                    <tr key={row.qty}>
                      <td className="py-2 pr-3 text-foreground font-medium">{row.qty}</td>
                      <td className="py-2 pr-3 text-muted-foreground">{row.unit}</td>
                      <td className="py-2 pr-3 font-bold font-display text-primary">{row.sym}</td>
                      <td className="py-2">
                        <span className="font-mono text-primary">{row.from}</span>
                        <span className="text-muted-foreground ml-2">({row.plain})</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Historical origins */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Historical Origin of the 7 Base Units</p>
            <div className="space-y-2">
              {[
                { num: "1", name: "Metre", origin: "1/10,000,000 of the distance from the Earth's equator to the North Pole, measured on the circumference through Paris." },
                { num: "2", name: "Kilogram", origin: "The mass of one litre of water. A litre is one thousandth of a cubic metre." },
                { num: "3", name: "Second", origin: "The day is divided into 24 hours, each hour into 60 minutes, each minute into 60 seconds. A second is 1/(24 × 60 × 60) of the day." },
                { num: "4", name: "Ampere", origin: "Originally defined electrochemically as the current required to deposit 1.118 milligrams of silver per second from a silver nitrate solution. 1 A = 6,280,000,000,000,000,000 electrons past a point per second." },
                { num: "5", name: "Kelvin", origin: "Uses the degree Celsius for its unit increment but is a thermodynamic scale. 0 K = absolute zero (−273.15 °C)." },
                { num: "6", name: "Mole", origin: "Atomic or molecular weight multiplied by the molar mass constant, 1 g/mol." },
                { num: "7", name: "Candela", origin: "The candlepower — based on the light emitted from a burning candle of standard properties." },
              ].map((item) => (
                <div key={item.num} className="flex items-start gap-3 rounded-xl border border-white/8 p-3">
                  <span className="w-6 h-6 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold flex items-center justify-center flex-shrink-0">{item.num}</span>
                  <div>
                    <span className="font-semibold text-xs text-foreground">{item.name}: </span>
                    <span className="text-xs text-muted-foreground">{item.origin}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Multiplies & Sub-Multiplies */}
      <section className="bg-card border border-white/8 rounded-2xl overflow-hidden">
        <div className="flex items-center gap-2 px-6 py-4 border-b border-white/8">
          <Info className="w-4 h-4 text-primary" />
          <h2 className="font-semibold text-foreground">Multiples &amp; Sub-Multiples</h2>
        </div>
        <div className="p-6 space-y-6">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Electrical values span an enormous range — from microvolts in sensors to megavolts in transmission lines. SI prefixes let us express these values concisely. The base unit (×10⁰ = 1) sits at the centre; prefixes to the left multiply, prefixes to the right divide.
          </p>

          {/* Common prefixes table */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Common Prefixes in Electrical Work</p>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-white/8">
                    <th className="text-left py-2 pr-4 font-semibold text-muted-foreground">Power of 10</th>
                    <th className="text-left py-2 pr-4 font-semibold text-muted-foreground">Prefix</th>
                    <th className="text-left py-2 pr-4 font-semibold text-muted-foreground">Symbol</th>
                    <th className="text-left py-2 font-semibold text-muted-foreground">Example</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    { pow: "10¹²", prefix: "tera", sym: "T", ex: "1 TW = 1 trillion watts" },
                    { pow: "10⁹", prefix: "giga", sym: "G", ex: "1 GHz = 1 billion hertz" },
                    { pow: "10⁶", prefix: "mega", sym: "M", ex: "47.84 MΩ = 47,840,000 ohms" },
                    { pow: "10³", prefix: "kilo", sym: "k", ex: "5 kW = 5,000 watts" },
                    { pow: "10⁰", prefix: "(none)", sym: "—", ex: "Base unit" },
                    { pow: "10⁻³", prefix: "milli", sym: "m", ex: "500 mA = 0.5 amps" },
                    { pow: "10⁻⁶", prefix: "micro", sym: "μ", ex: "12.3 μA = 0.0000123 amps" },
                    { pow: "10⁻⁹", prefix: "nano", sym: "n", ex: "100 nF capacitor" },
                    { pow: "10⁻¹²", prefix: "pico", sym: "p", ex: "22 pF ceramic cap" },
                  ].map((r, i) => (
                    <tr key={r.prefix} className={cn(i === 4 && "bg-primary/5 font-semibold")}>
                      <td className="py-2 pr-4 font-mono text-muted-foreground">{r.pow}</td>
                      <td className="py-2 pr-4 text-foreground">{r.prefix}</td>
                      <td className="py-2 pr-4 font-bold text-primary">{r.sym}</td>
                      <td className="py-2 text-muted-foreground">{r.ex}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Practical examples */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Reading Multimeter Displays</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-xl border border-white/8 bg-white/2 p-4 space-y-2">
                <div className="font-display font-black text-2xl text-foreground">47.84 MΩ</div>
                <p className="text-xs text-muted-foreground">Megaohms — M = 10⁶</p>
                <div className="rounded-lg bg-primary/5 border border-primary/15 p-2 font-mono text-xs text-primary">= 47.84 × 10⁶ Ω</div>
                <p className="text-xs text-muted-foreground">Keep between 1 and 3 digits left of the decimal. Exponent must be 0 or a multiple of 3.</p>
              </div>
              <div className="rounded-xl border border-white/8 bg-white/2 p-4 space-y-2">
                <div className="font-display font-black text-2xl text-foreground">12.3 μA</div>
                <p className="text-xs text-muted-foreground">Microamps — μ = 10⁻⁶</p>
                <div className="rounded-lg bg-primary/5 border border-primary/15 p-2 font-mono text-xs text-primary">= 12.3 × 10⁻⁶ A = 0.0000123 A</div>
                <p className="text-xs text-muted-foreground">Count 6 places from decimal to convert to amps.</p>
              </div>
            </div>
          </div>

          {/* Full prefix table */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Full SI Prefix Table</p>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-white/8">
                    <th className="text-left py-2 pr-3 font-semibold text-muted-foreground">10ⁿ</th>
                    <th className="text-left py-2 pr-3 font-semibold text-muted-foreground">Prefix</th>
                    <th className="text-left py-2 pr-3 font-semibold text-muted-foreground">Symbol</th>
                    <th className="text-left py-2 pr-3 font-semibold text-muted-foreground">Since</th>
                    <th className="text-left py-2 font-semibold text-muted-foreground">Scale name</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    { pow: "10²⁴", pre: "yotta-", sym: "Y", since: "1991", scale: "Septillion" },
                    { pow: "10²¹", pre: "zetta-", sym: "Z", since: "1991", scale: "Sextillion" },
                    { pow: "10¹⁸", pre: "exa-", sym: "E", since: "1975", scale: "Quintillion" },
                    { pow: "10¹⁵", pre: "peta-", sym: "P", since: "1975", scale: "Quadrillion" },
                    { pow: "10¹²", pre: "tera-", sym: "T", since: "1960", scale: "Trillion", common: true },
                    { pow: "10⁹", pre: "giga-", sym: "G", since: "1960", scale: "Billion", common: true },
                    { pow: "10⁶", pre: "mega-", sym: "M", since: "1960", scale: "Million", common: true },
                    { pow: "10³", pre: "kilo-", sym: "k", since: "1795", scale: "Thousand", common: true },
                    { pow: "1", pre: "(none)", sym: "—", since: "—", scale: "One (base unit)", base: true },
                    { pow: "10⁻³", pre: "milli-", sym: "m", since: "1795", scale: "Thousandth", common: true },
                    { pow: "10⁻⁶", pre: "micro-", sym: "μ", since: "1960", scale: "Millionth", common: true },
                    { pow: "10⁻⁹", pre: "nano-", sym: "n", since: "1960", scale: "Billionth", common: true },
                    { pow: "10⁻¹²", pre: "pico-", sym: "p", since: "1960", scale: "Trillionth", common: true },
                    { pow: "10⁻¹⁵", pre: "femto-", sym: "f", since: "1964", scale: "Quadrillionth" },
                    { pow: "10⁻¹⁸", pre: "atto-", sym: "a", since: "1964", scale: "Quintillionth" },
                    { pow: "10⁻²¹", pre: "zepto-", sym: "z", since: "1991", scale: "Sextillionth" },
                    { pow: "10⁻²⁴", pre: "yocto-", sym: "y", since: "1991", scale: "Septillionth" },
                  ].map((r) => (
                    <tr key={r.pre} className={cn(r.base && "bg-primary/5", r.common && "text-foreground")}>
                      <td className="py-1.5 pr-3 font-mono text-muted-foreground">{r.pow}</td>
                      <td className={cn("py-1.5 pr-3", r.common ? "text-foreground font-medium" : "text-muted-foreground")}>{r.pre}</td>
                      <td className={cn("py-1.5 pr-3 font-bold font-display", r.common ? "text-primary" : "text-muted-foreground/50")}>{r.sym}</td>
                      <td className="py-1.5 pr-3 text-muted-foreground">{r.since}</td>
                      <td className="py-1.5 text-muted-foreground">{r.scale}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* AS/NZS Wiring Rules */}
      <section className="bg-card border border-white/8 rounded-2xl overflow-hidden">
        <div className="flex items-center gap-2 px-6 py-4 border-b border-white/8">
          <AlertTriangle className="w-4 h-4 text-yellow-400" />
          <h2 className="font-semibold text-foreground">AS/NZS 3000 — Australian Wiring Rules Definitions</h2>
        </div>
        <div className="p-6 space-y-5">
          <p className="text-sm text-muted-foreground leading-relaxed">
            The <span className="text-foreground font-medium">Australian/New Zealand Standard for Electrical Installations (AS/NZS 3000)</span>, known as the Wiring Rules, defines key electrical terms. These definitions apply in all HVAC/R electrical work across Australia and New Zealand.
          </p>

          {/* Voltage categories */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Clause 1.4.90 — Voltage Categories</p>
            <div className="space-y-3">
              {[
                {
                  clause: "(a) Extra-Low Voltage (ELV)",
                  def: "Not exceeding 50 V a.c. or 120 V ripple-free d.c.",
                  colour: "text-green-400", border: "border-green-400/20", bg: "bg-green-400/5",
                  note: "Safe for direct skin contact (below shock threshold). Examples: 24 V control circuits, 12 V DC sensor loops.",
                },
                {
                  clause: "(b) Low Voltage (LV)",
                  def: "Exceeding extra-low voltage, but not exceeding 1000 V a.c. or 1500 V d.c.",
                  colour: "text-yellow-400", border: "border-yellow-400/20", bg: "bg-yellow-400/5",
                  note: "Most HVAC/R equipment operates in this band — 240 V single-phase, 415 V three-phase. Licensed work required.",
                },
                {
                  clause: "(c) High Voltage (HV)",
                  def: "Exceeding low voltage.",
                  colour: "text-red-400", border: "border-red-400/20", bg: "bg-red-400/5",
                  note: "Power transmission and large industrial plant. Specialist licencing required beyond standard electrician.",
                },
              ].map((v) => (
                <div key={v.clause} className={cn("rounded-xl border p-4 space-y-1.5", v.border, v.bg)}>
                  <p className={cn("font-semibold text-sm", v.colour)}>{v.clause}</p>
                  <p className="text-sm text-foreground">{v.def}</p>
                  <p className="text-xs text-muted-foreground">{v.note}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Current types */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Fault Current Definitions</p>
            <div className="space-y-3">
              {[
                {
                  clause: "1.4.34 — Current, Fault",
                  def: "A current resulting from an insulation failure or from the bridging of insulation.",
                  note: "Typically flows via earth due to damaged cable or moisture ingress. Detected by RCDs (residual current devices).",
                },
                {
                  clause: "1.4.35 — Current, Overload",
                  def: "An overcurrent occurring in a circuit which is electrically sound.",
                  note: "The wiring is intact but the load draws more than rated current — e.g. a seized compressor motor. Protected by fuses and overload relays.",
                },
                {
                  clause: "1.4.36 — Current, Short-Circuit",
                  def: "A fault current resulting from a fault of negligible impedance between live conductors having a difference in potential under normal operating conditions. The fault path may include the path from active via earth to neutral.",
                  note: "Causes an almost instantaneous and very large current surge. Protected by fuses or circuit breakers rated for the prospective short-circuit current (PSCC).",
                },
              ].map((c) => (
                <div key={c.clause} className="rounded-xl border border-white/8 p-4 space-y-1.5">
                  <p className="font-semibold text-sm text-primary">{c.clause}</p>
                  <p className="text-sm text-foreground leading-relaxed">{c.def}</p>
                  <p className="text-xs text-muted-foreground">{c.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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
