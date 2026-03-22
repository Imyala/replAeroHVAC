import { Zap, Info, BookOpen, Thermometer, Activity, Sun } from "lucide-react";

const resistiveElements = [
  { sym: "Cr", name: "Chromium", an: 24, am: "52.00" },
  { sym: "Fe", name: "Iron",     an: 26, am: "55.85" },
  { sym: "Co", name: "Cobalt",   an: 27, am: "58.93" },
  { sym: "Ni", name: "Nickel",   an: 28, am: "58.96" },
  { sym: "Cu", name: "Copper",   an: 29, am: "63.55" },
  { sym: "Ag", name: "Silver",   an: 47, am: "107.87" },
  { sym: "W",  name: "Tungsten", an: 74, am: "183.85" },
  { sym: "Au", name: "Gold",     an: 79, am: "196.97" },
];

const resistivityRows = [
  { material: "Silver",    rho: "1.63 × 10⁻⁸", compare: "20.4",       cat: "conductor" },
  { material: "Copper",    rho: "1.72 × 10⁻⁸", compare: "21.7",       cat: "conductor" },
  { material: "Gold",      rho: "2.44 × 10⁻⁸", compare: "28.0",       cat: "conductor" },
  { material: "Aluminium", rho: "2.83 × 10⁻⁸", compare: "34.4",       cat: "conductor" },
  { material: "Tungsten",  rho: "5.3 × 10⁻⁸",  compare: "67.5",       cat: "resistive" },
  { material: "Nichrome",  rho: "112 × 10⁻⁸",  compare: "1 426",      cat: "resistive" },
  { material: "Carbon",    rho: "3.5 × 10⁻³",  compare: "4 456 327",  cat: "resistive" },
];

const catStyle: Record<string, string> = {
  conductor: "bg-blue-400/10 border-blue-400/25 text-blue-300",
  resistive:  "bg-orange-400/10 border-orange-400/25 text-orange-300",
};
const catLabel: Record<string, string> = {
  conductor: "Conductor",
  resistive: "Resistive",
};

const heatColours = [
  { name: "Faint red",     f: 930,  c: 500,  k: 770,  hex: "#7f0000" },
  { name: "Blood red",     f: 1075, c: 580,  k: 855,  hex: "#990000" },
  { name: "Dark cherry",   f: 1175, c: 635,  k: 910,  hex: "#b30000" },
  { name: "Medium cherry", f: 1275, c: 690,  k: 965,  hex: "#cc0000" },
  { name: "Cherry",        f: 1375, c: 745,  k: 1020, hex: "#e60000" },
  { name: "Bright cherry", f: 1450, c: 790,  k: 1060, hex: "#ff1a1a" },
  { name: "Salmon",        f: 1550, c: 845,  k: 1115, hex: "#ff6633" },
  { name: "Dark orange",   f: 1630, c: 890,  k: 1160, hex: "#ff8000" },
  { name: "Orange",        f: 1725, c: 940,  k: 1215, hex: "#ffaa00" },
  { name: "Lemon",         f: 1830, c: 1000, k: 1270, hex: "#ffdd00" },
  { name: "Light yellow",  f: 1975, c: 1080, k: 1355, hex: "#ffee66" },
  { name: "White",         f: 2200, c: 1205, k: 1480, hex: "#ffffff" },
];

const colourCode = [
  { colour: "Black",  digit: "0", zeros: "0",    tolerance: "",    hex: "#000000", text: "text-white" },
  { colour: "Brown",  digit: "1", zeros: "1",    tolerance: "1%",  hex: "#8B4513", text: "text-white" },
  { colour: "Red",    digit: "2", zeros: "2",    tolerance: "2%",  hex: "#FF0000", text: "text-white" },
  { colour: "Orange", digit: "3", zeros: "3",    tolerance: "",    hex: "#FF8C00", text: "text-white" },
  { colour: "Yellow", digit: "4", zeros: "4",    tolerance: "",    hex: "#FFD700", text: "text-black" },
  { colour: "Green",  digit: "5", zeros: "5",    tolerance: "",    hex: "#008000", text: "text-white" },
  { colour: "Blue",   digit: "6", zeros: "6",    tolerance: "",    hex: "#0000FF", text: "text-white" },
  { colour: "Violet", digit: "7", zeros: "7",    tolerance: "",    hex: "#8B008B", text: "text-white" },
  { colour: "Grey",   digit: "8", zeros: "8",    tolerance: "",    hex: "#808080", text: "text-white" },
  { colour: "White",  digit: "9", zeros: "9",    tolerance: "",    hex: "#FFFFFF", text: "text-black" },
  { colour: "Gold",   digit: "—", zeros: "× 0.1", tolerance: "5%",hex: "#FFD700", text: "text-black" },
  { colour: "Silver", digit: "—", zeros: "× 0.01",tolerance: "10%",hex: "#C0C0C0",text: "text-black" },
];

export default function Resistance() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12">

      {/* ── Page header ── */}
      <div>
        <div className="w-10 h-10 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center mb-4">
          <Activity className="w-5 h-5 text-orange-400" />
        </div>
        <h1 className="text-4xl font-display font-bold text-foreground tracking-tight mb-3">Resistance</h1>
        <p className="text-muted-foreground leading-relaxed max-w-2xl">
          Resistance is the opposition a material offers to the flow of electric current. Every conductor, component, and connection in an HVAC/R circuit has resistance — understanding it is essential for fault finding, cable sizing, and interpreting meter readings.
        </p>
      </div>

      {/* ── Simple Electric Circuit ── */}
      <div className="bg-card border border-border rounded-2xl p-5 space-y-4">
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-yellow-400" />
          <h2 className="font-semibold text-foreground">Simple Electric Circuit</h2>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed">
          The basic electric circuit consists of the following <span className="text-foreground font-medium">three components</span>:
        </p>
        <div className="grid grid-cols-3 gap-3">
          {[
            { n: "1", label: "A Source", desc: "Provides the electromotive force (EMF) — e.g. a battery, generator, or power supply.", colour: "text-yellow-400", border: "border-yellow-400/30", bg: "bg-yellow-400/5" },
            { n: "2", label: "A Complete Path", desc: "An unbroken electrically conductive path for current to flow through — e.g. copper wire. Must be insulated so electricity arrives where the work is done (no short circuits).", colour: "text-blue-400", border: "border-blue-400/30", bg: "bg-blue-400/5" },
            { n: "3", label: "A Load to do Work", desc: "A device that converts electrical energy into another form — e.g. a lamp filament, motor, or heating element. The load has resistance.", colour: "text-orange-400", border: "border-orange-400/30", bg: "bg-orange-400/5" },
          ].map(({ n, label, desc, colour, border, bg }) => (
            <div key={n} className={`${bg} border ${border} rounded-xl p-3 space-y-1.5`}>
              <div className="flex items-center gap-2">
                <span className={`font-mono font-bold text-lg ${colour}`}>{n}.</span>
                <span className={`font-semibold text-sm ${colour}`}>{label}</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Simple flashlight circuit SVG */}
        <div className="bg-black/20 border border-white/8 rounded-xl p-4">
          <p className="text-xs font-semibold text-muted-foreground mb-3 text-center">Simple Circuit — Flashlight Example</p>
          <svg viewBox="0 0 360 120" className="w-full max-w-lg mx-auto" aria-label="Simple flashlight circuit diagram">
            {/* Battery cells */}
            <rect x="20" y="45" width="60" height="30" rx="4" fill="#1e293b" stroke="#fbbf24" strokeWidth="1.5"/>
            <text x="50" y="64" textAnchor="middle" fill="#fbbf24" fontSize="8" fontWeight="bold">CELLS</text>
            <text x="50" y="74" textAnchor="middle" fill="#94a3b8" fontSize="7">(Source)</text>
            {/* Wires — top */}
            <line x1="80" y1="55" x2="200" y2="55" stroke="#60a5fa" strokeWidth="2"/>
            {/* Wires — bottom */}
            <line x1="80" y1="65" x2="120" y2="65" stroke="#60a5fa" strokeWidth="2"/>
            <line x1="160" y1="65" x2="200" y2="65" stroke="#60a5fa" strokeWidth="2"/>
            {/* Switch */}
            <rect x="120" y="57" width="40" height="16" rx="3" fill="#1e293b" stroke="#60a5fa" strokeWidth="1.5"/>
            <line x1="128" y1="65" x2="152" y2="65" stroke="#60a5fa" strokeWidth="1.5"/>
            <circle cx="128" cy="65" r="2" fill="#60a5fa"/>
            <line x1="130" y1="65" x2="148" y2="58" stroke="#60a5fa" strokeWidth="1.5"/>
            <text x="140" y="84" textAnchor="middle" fill="#94a3b8" fontSize="7">Switch</text>
            {/* Lamp */}
            <circle cx="240" cy="60" r="22" fill="#1e293b" stroke="#fb923c" strokeWidth="1.5"/>
            <line x1="200" y1="55" x2="218" y2="55" stroke="#60a5fa" strokeWidth="2"/>
            <line x1="200" y1="65" x2="218" y2="65" stroke="#60a5fa" strokeWidth="2"/>
            {/* filament */}
            <path d="M226,60 Q230,50 234,60 Q238,70 242,60 Q246,50 250,60" fill="none" stroke="#fbbf24" strokeWidth="1.5"/>
            <line x1="262" y1="55" x2="300" y2="55" stroke="#60a5fa" strokeWidth="2"/>
            <line x1="262" y1="65" x2="300" y2="65" stroke="#60a5fa" strokeWidth="2"/>
            <text x="240" y="94" textAnchor="middle" fill="#94a3b8" fontSize="7">Load (Lamp filament)</text>
            {/* Connector lines */}
            <line x1="300" y1="55" x2="340" y2="55" stroke="#60a5fa" strokeWidth="2"/>
            <line x1="300" y1="65" x2="340" y2="65" stroke="#60a5fa" strokeWidth="2"/>
            <line x1="340" y1="55" x2="340" y2="65" stroke="#60a5fa" strokeWidth="2"/>
            <line x1="20" y1="55" x2="10" y2="55" stroke="#60a5fa" strokeWidth="2"/>
            <line x1="20" y1="65" x2="10" y2="65" stroke="#60a5fa" strokeWidth="2"/>
            <line x1="10" y1="55" x2="10" y2="65" stroke="#60a5fa" strokeWidth="2"/>
            {/* Labels */}
            <text x="340" y="45" textAnchor="middle" fill="#60a5fa" fontSize="7">Complete</text>
            <text x="340" y="53" textAnchor="middle" fill="#60a5fa" fontSize="7">path</text>
          </svg>
        </div>
      </div>

      {/* ── What is Resistance ── */}
      <div className="bg-card border border-border rounded-2xl p-5 space-y-4">
        <div className="flex items-center gap-2">
          <Info className="w-4 h-4 text-orange-400" />
          <h2 className="font-semibold text-foreground">What is Resistance?</h2>
        </div>
        <div className="bg-orange-500/10 border border-orange-400/20 rounded-xl p-4 text-center">
          <p className="text-lg font-bold text-orange-300">Resistance is the opposition to the flow of electrons.</p>
          <p className="text-sm text-muted-foreground mt-1">All materials exhibit a value of resistance to the flow of electrons.</p>
        </div>
        <div className="grid grid-cols-3 gap-3 text-xs">
          {[
            { label: "Symbol", value: "R" },
            { label: "SI Unit", value: "Ohm (Ω)" },
            { label: "Named after", value: "Georg Simon Ohm · 1827" },
          ].map(({ label, value }) => (
            <div key={label} className="bg-background/60 border border-white/8 rounded-xl p-3 text-center">
              <p className="text-muted-foreground/70 mb-1">{label}</p>
              <p className="font-semibold text-foreground">{value}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div className="flex gap-3 items-start bg-blue-400/5 border border-blue-400/20 rounded-xl p-3">
            <span className="mt-0.5 w-2 h-2 rounded-full flex-shrink-0 bg-blue-400" />
            <p className="text-muted-foreground"><span className="text-blue-300 font-semibold">Good conductor</span> — has a small resistance. Electrons pass through easily (e.g. copper wire).</p>
          </div>
          <div className="flex gap-3 items-start bg-red-400/5 border border-red-400/20 rounded-xl p-3">
            <span className="mt-0.5 w-2 h-2 rounded-full flex-shrink-0 bg-red-400" />
            <p className="text-muted-foreground"><span className="text-red-300 font-semibold">Insulator</span> — has very high resistance. Electrons are blocked from flowing (e.g. rubber, glass).</p>
          </div>
        </div>
        {/* Light bulb note */}
        <div className="bg-background/40 border border-white/8 rounded-xl p-3 flex gap-3 text-xs">
          <Zap className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
          <p className="text-muted-foreground">A light bulb is a resistor. The <span className="text-foreground font-medium">resistance of the tungsten filament is high</span>, so a lot of heat and light are produced as electricity forces its way through. The circuit wire has a relatively low resistance in comparison.</p>
        </div>
        <div className="flex gap-3 items-start text-xs">
          <span className="mt-0.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-orange-400" />
          <p className="text-muted-foreground"><span className="text-foreground font-medium">Resistance is measured with an ohmmeter</span> — always with the circuit de-energised (power off). Measuring resistance on a live circuit will damage the meter and may cause injury.</p>
        </div>
      </div>

      {/* ── Ohm's Law ── */}
      <div className="bg-card border border-border rounded-2xl p-5 space-y-4">
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-yellow-400" />
          <h2 className="font-semibold text-foreground">Ohm's Law — Calculating Resistance</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            { formula: "R = V ÷ I", label: "Resistance", sub: "Ohms = Volts ÷ Amps", colour: "text-orange-400", border: "border-orange-400/30", bg: "bg-orange-400/5" },
            { formula: "V = I × R", label: "Voltage", sub: "Volts = Amps × Ohms", colour: "text-yellow-400", border: "border-yellow-400/30", bg: "bg-yellow-400/5" },
            { formula: "I = V ÷ R", label: "Current", sub: "Amps = Volts ÷ Ohms", colour: "text-blue-400", border: "border-blue-400/30", bg: "bg-blue-400/5" },
          ].map(({ formula, label, sub, colour, border, bg }) => (
            <div key={label} className={`${bg} border ${border} rounded-xl p-4 text-center`}>
              <p className={`text-xl font-mono font-bold ${colour} mb-1`}>{formula}</p>
              <p className="text-xs font-semibold text-foreground">{label}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>
            </div>
          ))}
        </div>
        <div className="bg-background/40 border border-white/8 rounded-xl p-4 flex flex-col items-center gap-3">
          <p className="text-xs font-semibold text-muted-foreground">Ohm's Law Triangle</p>
          <svg viewBox="0 0 200 160" className="w-48" aria-label="Ohm's Law triangle">
            <polygon points="100,10 190,150 10,150" fill="none" stroke="#f97316" strokeWidth="2" />
            <line x1="10" y1="105" x2="190" y2="105" stroke="#f97316" strokeWidth="1.5" strokeDasharray="4,3" />
            <line x1="100" y1="105" x2="100" y2="150" stroke="#f97316" strokeWidth="1.5" strokeDasharray="4,3" />
            <text x="100" y="68" textAnchor="middle" fill="#fbbf24" fontSize="20" fontWeight="bold" fontFamily="monospace">V</text>
            <text x="55" y="138" textAnchor="middle" fill="#60a5fa" fontSize="20" fontWeight="bold" fontFamily="monospace">I</text>
            <text x="145" y="138" textAnchor="middle" fill="#fb923c" fontSize="20" fontWeight="bold" fontFamily="monospace">R</text>
          </svg>
          <p className="text-xs text-muted-foreground text-center">Cover the unknown value — the remaining two show the calculation.</p>
        </div>
        <div className="bg-background/40 border border-white/8 rounded-xl p-4 space-y-2 text-xs">
          <p className="font-semibold text-foreground">Worked Example</p>
          <p className="text-muted-foreground">A 240 V supply drives 4 A through a heating element. What is the resistance of the element?</p>
          <div className="font-mono text-foreground space-y-0.5 pl-3 border-l border-orange-400/30">
            <p>R = V ÷ I</p>
            <p>R = 240 ÷ 4</p>
            <p className="text-orange-400 font-bold">R = 60 Ω</p>
          </div>
        </div>
      </div>

      {/* ── Resistive Materials ── */}
      <div className="bg-card border border-border rounded-2xl p-5 space-y-4">
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-purple-400" />
          <h2 className="font-semibold text-foreground">Resistive Materials</h2>
        </div>
        <div className="space-y-2 text-xs text-muted-foreground leading-relaxed">
          <p>The amount of opposition to current flow a material produces depends on the <span className="text-foreground font-medium">amount of available free electrons it contains</span>. Impurities and defects in the material's structure also affect resistance.</p>
        </div>
        {/* Element cards */}
        <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
          {resistiveElements.map((el) => (
            <div key={el.sym} className="bg-purple-400/10 border border-purple-400/25 rounded-xl p-2 text-center">
              <p className="text-purple-400/60 text-xs leading-none mb-0.5">{el.an}</p>
              <p className="font-mono font-bold text-purple-300 text-xl leading-none">{el.sym}</p>
              <p className="text-purple-200 text-xs font-medium mt-0.5">{el.name}</p>
              <p className="text-purple-400/60 text-xs mt-0.5">{el.am}</p>
            </div>
          ))}
        </div>
        {/* Mechanical / Electrical spectrum bar */}
        <div className="bg-background/40 border border-white/8 rounded-xl p-4 space-y-3 text-xs">
          <div className="space-y-1">
            <div className="flex justify-between text-muted-foreground font-medium">
              <span>Hard</span><span className="text-muted-foreground/60 italic">Mechanical characteristics</span><span>Soft</span>
            </div>
            <div className="h-2 rounded-full bg-gradient-to-r from-slate-400 via-slate-500 to-orange-300" />
            <div className="flex justify-between text-muted-foreground/60">
              <span>Cr</span><span>Fe</span><span>Co</span><span>Ni</span><span>Cu</span><span>Ag</span><span>W</span><span>Au</span>
            </div>
          </div>
          <div className="space-y-1">
            <div className="flex justify-between text-muted-foreground font-medium">
              <span>High resistance</span><span className="text-muted-foreground/60 italic">Electrical characteristics</span><span>Low resistance</span>
            </div>
            <div className="h-2 rounded-full bg-gradient-to-r from-red-500 via-orange-400 to-blue-400" />
          </div>
        </div>
      </div>

      {/* ── Factors Affecting Resistance ── */}
      <div className="bg-card border border-border rounded-2xl p-5 space-y-5">
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-cyan-400" />
          <h2 className="font-semibold text-foreground">Factors Affecting Resistance</h2>
        </div>
        <p className="text-xs text-muted-foreground">There are only <span className="text-foreground font-medium">four factors</span> that affect the resistance of a conductor, summarised by the formula:</p>
        <div className="bg-cyan-500/10 border border-cyan-400/20 rounded-xl p-4 text-center">
          <p className="font-mono text-lg text-cyan-300 font-bold">R = ρ × L / A</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2 text-xs text-muted-foreground">
            <span>R = resistance (Ω)</span>
            <span>ρ = resistivity (Ω·m) at 20 °C</span>
            <span>L = length (m)</span>
            <span>A = cross-sectional area (m²)</span>
          </div>
        </div>

        {/* Factor 1 — Material */}
        <div className="bg-blue-400/5 border border-blue-400/30 rounded-xl p-4 space-y-2">
          <div className="flex items-center gap-3">
            <span className="font-mono text-2xl font-bold text-blue-400">ρ</span>
            <h3 className="font-semibold text-sm text-blue-400">1. Material (Resistivity)</h3>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">Different materials oppose current flow to different degrees. This property is called <span className="text-foreground font-medium">resistivity (ρ)</span>, measured in Ω·m. The amount of opposition depends on the number of free electrons in the material. Impurities and structural defects also increase resistivity.</p>
          <div className="flex gap-2 items-start text-xs">
            <span className="text-green-400 flex-shrink-0 font-semibold">HVAC/R</span>
            <span className="text-muted-foreground">Copper conductors are used throughout HVAC/R wiring for their low resistance. Nichrome wire is used in electric reheat coils and strip heaters because its high resistivity generates heat efficiently.</span>
          </div>
        </div>

        {/* Factor 2 — Length */}
        <div className="bg-yellow-400/5 border border-yellow-400/30 rounded-xl p-4 space-y-3">
          <div className="flex items-center gap-3">
            <span className="font-mono text-2xl font-bold text-yellow-400">L</span>
            <h3 className="font-semibold text-sm text-yellow-400">2. Length of the Conductor</h3>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">Resistance is <span className="text-yellow-300 font-semibold">proportional</span> to the length of a conductor. Doubling the length doubles the resistance. <span className="font-mono">R ∝ L</span></p>
          <p className="text-xs text-muted-foreground">If a 1 mm diameter copper conductor has a length of 2 km, its resistance will be twice that of a 1 km conductor of the same diameter.</p>
          {/* Length SVG diagram */}
          <div className="bg-black/20 rounded-xl p-3">
            <svg viewBox="0 0 320 90" className="w-full" aria-label="Length of conductor diagram">
              {/* Total length arrow */}
              <defs><marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#fbbf24"/></marker><marker id="arrl" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto-start-reverse"><path d="M0,0 L6,3 L0,6 Z" fill="#fbbf24"/></marker></defs>
              <line x1="30" y1="10" x2="290" y2="10" stroke="#fbbf24" strokeWidth="1" markerStart="url(#arrl)" markerEnd="url(#arr)"/>
              <text x="160" y="8" textAnchor="middle" fill="#fbbf24" fontSize="9">Total length (2L)</text>
              {/* Half arrows */}
              <line x1="30" y1="20" x2="160" y2="20" stroke="#94a3b8" strokeWidth="1" markerStart="url(#arrl)" markerEnd="url(#arr)"/>
              <text x="95" y="18" textAnchor="middle" fill="#94a3b8" fontSize="8">L</text>
              <line x1="160" y1="20" x2="290" y2="20" stroke="#94a3b8" strokeWidth="1" markerStart="url(#arrl)" markerEnd="url(#arr)"/>
              <text x="225" y="18" textAnchor="middle" fill="#94a3b8" fontSize="8">L</text>
              {/* Conductor body */}
              <rect x="20" y="30" width="130" height="30" rx="15" fill="#cd7f32" opacity="0.7"/>
              <rect x="160" y="30" width="130" height="30" rx="15" fill="#cd7f32" opacity="0.7"/>
              {/* Current arrows */}
              <line x1="5" y1="45" x2="18" y2="45" stroke="#60a5fa" strokeWidth="2" markerEnd="url(#arr)"/>
              <text x="2" y="43" fill="#60a5fa" fontSize="9" fontStyle="italic">i</text>
              <line x1="293" y1="45" x2="306" y2="45" stroke="#60a5fa" strokeWidth="2" markerEnd="url(#arr)"/>
              <text x="310" y="43" fill="#60a5fa" fontSize="9" fontStyle="italic">i</text>
              {/* Resistance labels */}
              <text x="85" y="50" textAnchor="middle" fill="#fbbf24" fontSize="10" fontWeight="bold">(R)</text>
              <text x="225" y="50" textAnchor="middle" fill="#fbbf24" fontSize="10" fontWeight="bold">(R)</text>
              <text x="160" y="75" textAnchor="middle" fill="#94a3b8" fontSize="9">Total resistance = 2R</text>
              {/* Area indicator */}
              <line x1="295" y1="30" x2="312" y2="30" stroke="#94a3b8" strokeWidth="1"/>
              <line x1="295" y1="60" x2="312" y2="60" stroke="#94a3b8" strokeWidth="1"/>
              <line x1="305" y1="32" x2="305" y2="58" stroke="#94a3b8" strokeWidth="1" markerStart="url(#arrl)" markerEnd="url(#arr)"/>
              <text x="316" y="48" fill="#94a3b8" fontSize="8">A</text>
            </svg>
          </div>
          <div className="flex gap-2 items-start text-xs">
            <span className="text-green-400 flex-shrink-0 font-semibold">HVAC/R</span>
            <span className="text-muted-foreground">Long cable runs to remote condensing units cause voltage drop. Undersized or overly long cables raise resistance, causing excessive heat and motor underperformance.</span>
          </div>
        </div>

        {/* Factor 3 — CSA */}
        <div className="bg-green-400/5 border border-green-400/30 rounded-xl p-4 space-y-3">
          <div className="flex items-center gap-3">
            <span className="font-mono text-2xl font-bold text-green-400">A</span>
            <h3 className="font-semibold text-sm text-green-400">3. Cross-sectional Area (CSA)</h3>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">Resistance is <span className="text-green-300 font-semibold">inversely proportional</span> to the cross-sectional area (CSA) of a conductor. The smaller the CSA, the higher the resistance of the conductor. <span className="font-mono">R ∝ 1/A</span></p>
          {/* CSA SVG */}
          <div className="bg-black/20 rounded-xl p-3">
            <svg viewBox="0 0 320 80" className="w-full" aria-label="Cross-sectional area examples">
              {/* Shape 1: 2×2 square */}
              <text x="55" y="12" textAnchor="middle" fill="#94a3b8" fontSize="8">csa = 4 mm²</text>
              <rect x="30" y="18" width="50" height="50" rx="2" fill="#d4a574" opacity="0.6" stroke="#d4a574" strokeWidth="1"/>
              <line x1="30" y1="15" x2="30" y2="72" stroke="#94a3b8" strokeWidth="0.8"/>
              <line x1="80" y1="15" x2="80" y2="72" stroke="#94a3b8" strokeWidth="0.8"/>
              <line x1="28" y1="18" x2="28" y2="68" stroke="#94a3b8" strokeWidth="0.8" markerStart="url(#arrl)" markerEnd="url(#arr)"/>
              <text x="22" y="47" fill="#94a3b8" fontSize="7">2mm</text>
              <text x="55" y="77" textAnchor="middle" fill="#94a3b8" fontSize="7">2mm</text>
              <text x="55" y="45" textAnchor="middle" fill="#fbbf24" fontSize="8" fontWeight="bold">csa = w × h</text>
              {/* Shape 2: 4×1 rectangle */}
              <text x="165" y="12" textAnchor="middle" fill="#94a3b8" fontSize="8">csa = 4 mm²</text>
              <rect x="110" y="38" width="110" height="25" rx="2" fill="#d4a574" opacity="0.6" stroke="#d4a574" strokeWidth="1"/>
              <text x="165" y="54" textAnchor="middle" fill="#94a3b8" fontSize="7">4mm wide × 1mm high</text>
              {/* Shape 3: circle */}
              <text x="285" y="12" textAnchor="middle" fill="#94a3b8" fontSize="8">csa = 4 mm²</text>
              <circle cx="285" cy="47" r="22" fill="#d4a574" opacity="0.6" stroke="#d4a574" strokeWidth="1"/>
              <text x="285" y="51" textAnchor="middle" fill="#fbbf24" fontSize="9" fontWeight="bold">A = πr²</text>
              <text x="285" y="77" textAnchor="middle" fill="#94a3b8" fontSize="7">r = 1.13mm</text>
            </svg>
          </div>
          <div className="flex gap-2 items-start text-xs">
            <span className="text-green-400 flex-shrink-0 font-semibold">HVAC/R</span>
            <span className="text-muted-foreground">Higher-current loads (compressors, large fans) require larger cable cross-sections to keep resistance — and voltage drop and heat — within safe limits per AS/NZS 3000.</span>
          </div>
        </div>

        {/* Factor 4 — Temperature */}
        <div className="bg-red-400/5 border border-red-400/30 rounded-xl p-4 space-y-3">
          <div className="flex items-center gap-3">
            <span className="font-mono text-2xl font-bold text-red-400">T</span>
            <h3 className="font-semibold text-sm text-red-400">4. Temperature</h3>
          </div>
          <div className="space-y-1.5 text-xs text-muted-foreground">
            <p>The resistance of <span className="text-foreground font-medium">all conductors varies with temperature</span>.</p>
            <p>For <span className="text-red-300 font-semibold">pure metals</span>, an increase in temperature gives an <span className="text-red-300 font-semibold">increase in resistance</span> — atoms vibrate more, impeding electron flow.</p>
            <p>How much the resistance changes depends on the type of metal.</p>
          </div>
          {/* Temperature vs Relative Resistance graph */}
          <div className="bg-black/20 rounded-xl p-3">
            <p className="text-xs font-semibold text-muted-foreground mb-2 text-center">Relative Resistance (R/R₀) vs Temperature — Pure Metals</p>
            <svg viewBox="0 0 300 160" className="w-full max-w-sm mx-auto" aria-label="Resistance vs temperature for pure metals">
              <line x1="40" y1="10" x2="40" y2="130" stroke="#475569" strokeWidth="1.5"/>
              <line x1="40" y1="130" x2="275" y2="130" stroke="#475569" strokeWidth="1.5"/>
              {/* Y axis labels */}
              <text x="35" y="14" fill="#94a3b8" fontSize="8" textAnchor="end">5</text>
              <text x="35" y="64" fill="#94a3b8" fontSize="8" textAnchor="end">3</text>
              <text x="35" y="114" fill="#94a3b8" fontSize="8" textAnchor="end">1</text>
              <line x1="37" y1="114" x2="40" y2="114" stroke="#475569"/>
              <line x1="37" y1="64" x2="40" y2="64" stroke="#475569"/>
              <line x1="37" y1="14" x2="40" y2="14" stroke="#475569"/>
              {/* X axis labels */}
              <text x="40" y="143" fill="#94a3b8" fontSize="7" textAnchor="middle">0</text>
              <text x="120" y="143" fill="#94a3b8" fontSize="7" textAnchor="middle">400</text>
              <text x="200" y="143" fill="#94a3b8" fontSize="7" textAnchor="middle">700</text>
              <text x="260" y="143" fill="#94a3b8" fontSize="7" textAnchor="middle">1000°C</text>
              <text x="158" y="155" fill="#94a3b8" fontSize="7" textAnchor="middle">Temperature (T)</text>
              <text x="10" y="70" fill="#94a3b8" fontSize="7" textAnchor="middle" transform="rotate(-90,10,70)">Relative R (R/R₀)</text>
              {/* Nickel — steepest */}
              <path d="M40,114 C80,110 120,90 160,68 C200,46 240,26 270,14" fill="none" stroke="#f472b6" strokeWidth="2"/>
              <text x="210" y="30" fill="#f472b6" fontSize="8">Nickel</text>
              {/* Balco */}
              <path d="M40,114 C80,111 120,97 160,80 C200,63 240,46 270,32" fill="none" stroke="#fb923c" strokeWidth="2"/>
              <text x="225" y="50" fill="#fb923c" fontSize="8">Balco</text>
              {/* Copper */}
              <path d="M40,114 C80,112 120,102 160,88 C200,74 240,60 270,48" fill="none" stroke="#60a5fa" strokeWidth="2"/>
              <text x="230" y="64" fill="#60a5fa" fontSize="8">Copper</text>
              {/* Platinum — shallowest */}
              <path d="M40,114 C80,113 120,107 160,98 C200,89 240,80 270,72" fill="none" stroke="#a3e635" strokeWidth="2"/>
              <text x="232" y="85" fill="#a3e635" fontSize="8">Platinum</text>
            </svg>
          </div>
          <div className="flex gap-2 items-start text-xs">
            <span className="text-green-400 flex-shrink-0 font-semibold">HVAC/R</span>
            <span className="text-muted-foreground">Motor windings heat up under load, increasing winding resistance. RTDs (Resistance Temperature Detectors) such as Pt100 exploit this predictable linear relationship for precision temperature measurement.</span>
          </div>
        </div>
      </div>

      {/* ── Resistivity Tables ── */}
      <div className="bg-card border border-border rounded-2xl p-5 space-y-4">
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-amber-400" />
          <h2 className="font-semibold text-foreground">Resistivity of Conductors</h2>
          <span className="text-xs text-muted-foreground font-normal">(at 20 °C)</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Resistivity table */}
          <div className="overflow-x-auto rounded-xl border border-white/8">
            <p className="text-xs font-semibold text-muted-foreground px-3 pt-2">Resistivity (Ω·m)</p>
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-white/8 bg-background/40">
                  <th className="text-left py-2 px-3 font-semibold text-muted-foreground">Material</th>
                  <th className="text-right py-2 px-3 font-semibold text-muted-foreground">ρ (Ω·m)</th>
                  <th className="text-left py-2 px-3 font-semibold text-muted-foreground">Type</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {resistivityRows.map((r) => (
                  <tr key={r.material} className="hover:bg-white/2 transition-colors">
                    <td className="py-2 px-3 font-medium text-foreground">{r.material}</td>
                    <td className="py-2 px-3 font-mono text-foreground text-right">{r.rho}</td>
                    <td className="py-2 px-3">
                      <span className={`inline-flex text-xs px-2 py-0.5 rounded-full border ${catStyle[r.cat]}`}>{catLabel[r.cat]}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Comparison table */}
          <div className="overflow-x-auto rounded-xl border border-white/8">
            <p className="text-xs font-semibold text-muted-foreground px-3 pt-2">Comparison — 1 km × 1 mm dia. wire at 20 °C</p>
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-white/8 bg-background/40">
                  <th className="text-left py-2 px-3 font-semibold text-muted-foreground">Material</th>
                  <th className="text-right py-2 px-3 font-semibold text-muted-foreground">Resistance (Ω)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {resistivityRows.map((r) => (
                  <tr key={r.material} className="hover:bg-white/2 transition-colors">
                    <td className="py-2 px-3 font-medium text-foreground">{r.material}</td>
                    <td className="py-2 px-3 font-mono text-right text-foreground">{r.compare}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-xs text-muted-foreground/60 px-3 pb-2 pt-1">Note: Silver has a resistivity expressed without scientific notation of 0.0000000163 Ω·m</p>
          </div>
        </div>
      </div>

      {/* ── Heat Colour Chart ── */}
      <div className="bg-card border border-border rounded-2xl p-5 space-y-4">
        <div className="flex items-center gap-2">
          <Thermometer className="w-4 h-4 text-red-400" />
          <h2 className="font-semibold text-foreground">Heat Colour Chart</h2>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed">When a conductor's resistance causes significant heating (resistive heating), the metal glows with a colour that indicates its approximate temperature. This is used in welding and metal working, and is visible in incandescent lamp filaments during operation.</p>
        <div className="overflow-x-auto rounded-xl border border-white/8">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-white/8 bg-background/40">
                <th className="text-left py-2 px-3 font-semibold text-muted-foreground">Colour</th>
                <th className="text-right py-2 px-3 font-semibold text-muted-foreground">°F</th>
                <th className="text-right py-2 px-3 font-semibold text-muted-foreground">°C</th>
                <th className="text-right py-2 px-3 font-semibold text-muted-foreground">K</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {heatColours.map((row) => (
                <tr key={row.name} className="hover:bg-white/2 transition-colors">
                  <td className="py-1.5 px-3">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded flex-shrink-0 border border-white/10" style={{ backgroundColor: row.hex }} />
                      <span className="text-foreground font-medium">{row.name}</span>
                    </div>
                  </td>
                  <td className="py-1.5 px-3 font-mono text-muted-foreground text-right">{row.f.toLocaleString()}</td>
                  <td className="py-1.5 px-3 font-mono text-muted-foreground text-right">{row.c.toLocaleString()}</td>
                  <td className="py-1.5 px-3 font-mono text-muted-foreground text-right">{row.k.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ── Types of Resistors ── */}
      <div className="bg-card border border-border rounded-2xl p-5 space-y-5">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-orange-400" />
          <h2 className="font-semibold text-foreground">Types of Resistors</h2>
        </div>

        {/* Fixed */}
        <div className="bg-slate-400/5 border border-slate-400/25 rounded-xl p-4 space-y-3">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-semibold text-sm text-slate-300">Fixed Resistors</h3>
            <span className="text-xs text-muted-foreground">Rated in <span className="text-foreground font-medium">Ohms (Ω) &amp; Watts (W)</span></span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">A fixed resistor has a set resistance value that does not change. The most common type is the <span className="text-foreground font-medium">carbon film resistor</span> — a spiral of carbon film on a ceramic rod, with an insulating outer coating and metal end caps.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bg-black/20 rounded-xl p-3">
              <p className="text-xs text-muted-foreground mb-2 text-center">Carbon Film Resistor — Construction</p>
              <svg viewBox="0 0 240 80" className="w-full" aria-label="Fixed resistor construction">
                {/* Body */}
                <rect x="40" y="20" width="160" height="40" rx="4" fill="#d4a574" stroke="#94a3b8" strokeWidth="1"/>
                {/* End caps */}
                <rect x="35" y="22" width="12" height="36" rx="2" fill="#94a3b8"/>
                <rect x="193" y="22" width="12" height="36" rx="2" fill="#94a3b8"/>
                {/* Carbon spiral lines */}
                {[55,70,85,100,115,130,145,160,175].map((x) => (
                  <line key={x} x1={x} y1="22" x2={x} y2="58" stroke="#1e293b" strokeWidth="3"/>
                ))}
                {/* Leads */}
                <line x1="5" y1="40" x2="35" y2="40" stroke="#94a3b8" strokeWidth="2"/>
                <line x1="205" y1="40" x2="235" y2="40" stroke="#94a3b8" strokeWidth="2"/>
                {/* Labels */}
                <text x="120" y="72" textAnchor="middle" fill="#94a3b8" fontSize="7">ceramic rod</text>
                <text x="120" y="13" textAnchor="middle" fill="#94a3b8" fontSize="7">carbon film spiralled to give value</text>
                <text x="45" y="72" textAnchor="middle" fill="#94a3b8" fontSize="7">end cap</text>
                <text x="5" y="35" textAnchor="middle" fill="#94a3b8" fontSize="7">lead</text>
              </svg>
            </div>
            <div className="bg-black/20 rounded-xl p-3 flex flex-col items-center justify-center gap-2">
              <p className="text-xs text-muted-foreground">Circuit symbol</p>
              <svg viewBox="0 0 120 40" className="w-32" aria-label="Fixed resistor circuit symbol">
                <line x1="5" y1="20" x2="30" y2="20" stroke="#94a3b8" strokeWidth="2"/>
                <rect x="30" y="10" width="60" height="20" rx="2" fill="none" stroke="#94a3b8" strokeWidth="2"/>
                <line x1="90" y1="20" x2="115" y2="20" stroke="#94a3b8" strokeWidth="2"/>
              </svg>
              <p className="text-xs text-muted-foreground/60 text-center">Rectangle symbol used in Australian / IEC standards</p>
            </div>
          </div>
        </div>

        {/* Variable */}
        <div className="bg-cyan-400/5 border border-cyan-400/25 rounded-xl p-4 space-y-3">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-semibold text-sm text-cyan-300">Variable Resistors</h3>
            <span className="text-xs text-muted-foreground">Also known as <span className="text-foreground font-medium">potentiometer</span> or <span className="text-foreground font-medium">pot</span> · Rated in <span className="text-foreground font-medium">Ohms &amp; Watts</span></span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">A variable resistor allows resistance to be adjusted continuously between zero and a maximum value. The wiper arm slides along a resistive track, changing the effective resistance. Used for volume controls, speed controls, and position sensing.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="space-y-1.5 text-xs text-muted-foreground">
              <div className="flex gap-2"><span className="text-cyan-400">•</span><span><span className="text-foreground font-medium">Rheostat</span> — 2-terminal connection, used for current control.</span></div>
              <div className="flex gap-2"><span className="text-cyan-400">•</span><span><span className="text-foreground font-medium">Potentiometer</span> — 3-terminal connection, used as a voltage divider.</span></div>
              <div className="flex gap-2"><span className="text-cyan-400">•</span><span>In HVAC/R: fan speed controls, damper position feedback, older thermostat dials.</span></div>
            </div>
            <div className="bg-black/20 rounded-xl p-3 flex flex-col items-center gap-2">
              <p className="text-xs text-muted-foreground">Circuit symbol</p>
              <svg viewBox="0 0 120 60" className="w-32" aria-label="Variable resistor circuit symbol">
                <line x1="5" y1="30" x2="30" y2="30" stroke="#94a3b8" strokeWidth="2"/>
                <rect x="30" y="20" width="60" height="20" rx="2" fill="none" stroke="#94a3b8" strokeWidth="2"/>
                <line x1="90" y1="30" x2="115" y2="30" stroke="#94a3b8" strokeWidth="2"/>
                {/* Arrow */}
                <line x1="60" y1="48" x2="60" y2="22" stroke="#67e8f9" strokeWidth="1.5" markerEnd="url(#arr)"/>
                <line x1="60" y1="48" x2="52" y2="55" stroke="#67e8f9" strokeWidth="1.5"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Thermistors */}
        <div className="bg-red-400/5 border border-red-400/25 rounded-xl p-4 space-y-3">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-semibold text-sm text-red-300">Thermistors (Temperature)</h3>
            <span className="text-xs text-muted-foreground">Rated in <span className="text-foreground font-medium">Ohms &amp; Watts</span></span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">A thermistor's resistance changes significantly and predictably with temperature. They are semiconductor devices packaged in disc or rectangular form, and are the most common temperature sensor in HVAC/R control circuits.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bg-blue-400/5 border border-blue-400/20 rounded-xl p-3 space-y-1.5">
              <p className="font-semibold text-blue-300 text-xs">NTC — Negative Temperature Coefficient</p>
              <p className="text-xs text-muted-foreground">Resistance <span className="text-blue-300 font-medium">decreases</span> as temperature rises. Most common in HVAC/R — used as air, pipe, and outdoor ambient temperature sensors.</p>
              <p className="font-mono text-xs text-muted-foreground bg-background/40 rounded px-2 py-1">e.g. 10 kΩ at 25 °C → ~1 kΩ at 85 °C</p>
            </div>
            <div className="bg-red-400/5 border border-red-400/20 rounded-xl p-3 space-y-1.5">
              <p className="font-semibold text-red-300 text-xs">PTC — Positive Temperature Coefficient</p>
              <p className="text-xs text-muted-foreground">Resistance <span className="text-red-300 font-medium">increases rapidly</span> above a threshold temperature. Used in compressor motor protection — overheating spikes resistance and cuts current.</p>
              <p className="font-mono text-xs text-muted-foreground bg-background/40 rounded px-2 py-1">Low R below ~120 °C → spikes to MΩ range</p>
            </div>
          </div>
          {/* PTC and NTC curves side by side */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-black/20 rounded-xl p-3">
              <p className="text-xs text-muted-foreground text-center mb-2">PTC response curve</p>
              <svg viewBox="0 0 120 90" className="w-full" aria-label="PTC thermistor response curve">
                <line x1="15" y1="5" x2="15" y2="75" stroke="#475569" strokeWidth="1.5"/>
                <line x1="15" y1="75" x2="110" y2="75" stroke="#475569" strokeWidth="1.5"/>
                <text x="8" y="70" fill="#94a3b8" fontSize="7" textAnchor="middle" transform="rotate(-90,8,40)">resistance</text>
                <text x="62" y="84" fill="#94a3b8" fontSize="7" textAnchor="middle">temperature (°C)</text>
                {/* S-curve PTC */}
                <path d="M15,65 C30,64 40,62 48,55 C56,48 58,35 62,22 C66,12 72,8 90,7 C100,7 108,7 110,7" fill="none" stroke="#f87171" strokeWidth="2.5"/>
              </svg>
            </div>
            <div className="bg-black/20 rounded-xl p-3">
              <p className="text-xs text-muted-foreground text-center mb-2">NTC response curve</p>
              <svg viewBox="0 0 120 90" className="w-full" aria-label="NTC thermistor response curve">
                <line x1="15" y1="5" x2="15" y2="75" stroke="#475569" strokeWidth="1.5"/>
                <line x1="15" y1="75" x2="110" y2="75" stroke="#475569" strokeWidth="1.5"/>
                <text x="8" y="70" fill="#94a3b8" fontSize="7" textAnchor="middle" transform="rotate(-90,8,40)">resistance</text>
                <text x="62" y="84" fill="#94a3b8" fontSize="7" textAnchor="middle">temperature (°C)</text>
                {/* Exponential decay NTC */}
                <path d="M15,10 C22,10 30,15 38,25 C48,38 60,55 80,67 C90,72 100,74 110,75" fill="none" stroke="#60a5fa" strokeWidth="2.5"/>
              </svg>
            </div>
          </div>
          <p className="text-xs text-muted-foreground text-center">Thermistors have many applications and are packaged in disc or rectangular form. Symbol: rectangle with diagonal line marked <span className="font-mono">+t°</span> (PTC) or <span className="font-mono">−t°</span> (NTC).</p>
        </div>

        {/* LDR */}
        <div className="bg-amber-400/5 border border-amber-400/25 rounded-xl p-4 space-y-3">
          <div className="flex items-center gap-2 flex-wrap">
            <Sun className="w-4 h-4 text-amber-400" />
            <h3 className="font-semibold text-sm text-amber-300">LDR — Light Dependent Resistor</h3>
            <span className="text-xs text-muted-foreground">Rated in <span className="text-foreground font-medium">Ohms &amp; Watts</span></span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">An LDR's resistance changes with light intensity. The active element is a <span className="text-foreground font-medium">sulphide compound on a metallic grid</span>. As light intensity increases, more charge carriers are generated and resistance falls dramatically.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bg-black/20 rounded-xl p-3">
              <p className="text-xs text-muted-foreground text-center mb-2">LDR — Resistance vs Light Intensity</p>
              <svg viewBox="0 0 160 100" className="w-full" aria-label="LDR response curve">
                <line x1="25" y1="5" x2="25" y2="85" stroke="#475569" strokeWidth="1.5"/>
                <line x1="25" y1="85" x2="150" y2="85" stroke="#475569" strokeWidth="1.5"/>
                <text x="12" y="10" fill="#94a3b8" fontSize="7">10MΩ</text>
                <text x="12" y="75" fill="#94a3b8" fontSize="7">100Ω</text>
                <text x="30" y="97" fill="#94a3b8" fontSize="7">dark</text>
                <text x="90" y="97" fill="#94a3b8" fontSize="7">light intensity</text>
                <text x="140" y="97" fill="#94a3b8" fontSize="7">daylight</text>
                {/* Steep exponential drop */}
                <path d="M25,8 C35,9 45,15 60,35 C75,55 95,72 120,79 C135,82 145,83 150,84" fill="none" stroke="#fbbf24" strokeWidth="2.5"/>
                {/* Dashed reference lines */}
                <line x1="22" y1="8" x2="25" y2="8" stroke="#475569" strokeWidth="1" strokeDasharray="2"/>
                <line x1="22" y1="75" x2="25" y2="75" stroke="#475569" strokeWidth="1" strokeDasharray="2"/>
              </svg>
            </div>
            <div className="space-y-2 text-xs text-muted-foreground">
              <div className="flex gap-2"><span className="text-amber-400">•</span><span>In <span className="text-foreground font-medium">darkness</span>: resistance up to 10 MΩ</span></div>
              <div className="flex gap-2"><span className="text-amber-400">•</span><span>In <span className="text-foreground font-medium">bright daylight</span>: resistance as low as 100 Ω</span></div>
              <div className="flex gap-2"><span className="text-amber-400">•</span><span>Construction: sulphide element on metallic grid</span></div>
              <div className="flex gap-2"><span className="text-amber-400">•</span><span>HVAC/R use: daylight/occupancy sensing for building automation and lighting control circuits</span></div>
              <div className="bg-black/20 rounded-xl p-3 flex flex-col items-center gap-1">
                <p className="text-muted-foreground">Circuit symbol</p>
                <svg viewBox="0 0 120 50" className="w-28" aria-label="LDR circuit symbol">
                  <line x1="5" y1="25" x2="30" y2="25" stroke="#94a3b8" strokeWidth="2"/>
                  <rect x="30" y="15" width="60" height="20" rx="2" fill="none" stroke="#94a3b8" strokeWidth="2"/>
                  <line x1="90" y1="25" x2="115" y2="25" stroke="#94a3b8" strokeWidth="2"/>
                  <line x1="52" y1="38" x2="38" y2="5" stroke="#fbbf24" strokeWidth="1.5"/>
                  <line x1="62" y1="38" x2="48" y2="5" stroke="#fbbf24" strokeWidth="1.5"/>
                  <path d="M47,10 L50,5 L45,8" fill="#fbbf24"/>
                  <path d="M57,10 L60,5 L55,8" fill="#fbbf24"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* VDR / Varistor / MOV */}
        <div className="bg-violet-400/5 border border-violet-400/25 rounded-xl p-4 space-y-3">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-semibold text-sm text-violet-300">VDR — Voltage Dependent Resistor</h3>
            <span className="text-xs text-muted-foreground">Also: <span className="text-foreground font-medium">Varistor · MOV (Metal Oxide Varistor)</span> · Rated in <span className="text-foreground font-medium">Joules &amp; Volts</span></span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">A VDR has a resistance that <span className="text-foreground font-medium">decreases sharply when the voltage across it exceeds its clamping voltage</span>. At normal voltages it presents high resistance; during a voltage surge it conducts heavily, diverting the surge energy and protecting downstream equipment.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="space-y-2 text-xs text-muted-foreground">
              <div className="flex gap-2"><span className="text-violet-400">•</span><span>Rated in <span className="text-foreground font-medium">Joules</span> (energy absorbed) and <span className="text-foreground font-medium">Volts</span> (clamping voltage)</span></div>
              <div className="flex gap-2"><span className="text-violet-400">•</span><span>Common materials: Zinc Oxide (ZnO) and Silicon Carbide (SiC)</span></div>
              <div className="flex gap-2"><span className="text-violet-400">•</span><span><span className="text-foreground font-medium">VDR protection circuit:</span> the VDR is connected in parallel across the supply. A surge causes high current to flow through the VDR, which ruptures an in-series fuse before the surge reaches the equipment.</span></div>
              <div className="flex gap-2"><span className="text-violet-400">•</span><span>HVAC/R use: surge protection on control boards, VFDs, and compressor electronics.</span></div>
            </div>
            <div className="bg-black/20 rounded-xl p-3">
              <p className="text-xs text-muted-foreground text-center mb-2">VDR Surge Protection Circuit</p>
              <svg viewBox="0 0 200 100" className="w-full" aria-label="VDR surge protection circuit">
                {/* Supply lines */}
                <line x1="5" y1="30" x2="40" y2="30" stroke="#94a3b8" strokeWidth="1.5"/>
                <line x1="5" y1="70" x2="160" y2="70" stroke="#94a3b8" strokeWidth="1.5"/>
                <text x="5" y="20" fill="#94a3b8" fontSize="8">240V</text>
                {/* Fuse */}
                <rect x="40" y="24" width="35" height="12" rx="3" fill="none" stroke="#fbbf24" strokeWidth="1.5"/>
                <line x1="47" y1="30" x2="68" y2="30" stroke="#fbbf24" strokeWidth="1.5"/>
                <text x="57" y="22" fill="#fbbf24" fontSize="7" textAnchor="middle">fuse</text>
                {/* VDR */}
                <line x1="75" y1="30" x2="105" y2="30" stroke="#94a3b8" strokeWidth="1.5"/>
                <line x1="105" y1="30" x2="105" y2="70" stroke="#94a3b8" strokeWidth="1.5"/>
                <circle cx="105" cy="50" r="10" fill="none" stroke="#a78bfa" strokeWidth="1.5"/>
                <text x="105" y="53" fill="#a78bfa" fontSize="7" textAnchor="middle">VDR</text>
                <text x="118" y="50" fill="#a78bfa" fontSize="7">275V</text>
                {/* Output */}
                <line x1="105" y1="30" x2="160" y2="30" stroke="#94a3b8" strokeWidth="1.5"/>
                <line x1="160" y1="30" x2="160" y2="70" stroke="#94a3b8" strokeWidth="1.5"/>
                <rect x="160" y="40" width="30" height="20" rx="3" fill="#1e293b" stroke="#60a5fa" strokeWidth="1"/>
                <text x="175" y="53" fill="#60a5fa" fontSize="7" textAnchor="middle">Load</text>
                <text x="105" y="88" fill="#94a3b8" fontSize="7" textAnchor="middle">surge → VDR conducts → fuse blows</text>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* ── Resistor Colour Code ── */}
      <div className="bg-card border border-border rounded-2xl p-5 space-y-4">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-pink-400" />
          <h2 className="font-semibold text-foreground">Resistor Colour Code</h2>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed">Fixed resistors are too small to print their value numerically. Instead, <span className="text-foreground font-medium">coloured bands</span> are used: the first two bands give digits, the third gives the number of zeros (multiplier), and the fourth gives tolerance.</p>
        {/* Example */}
        <div className="bg-background/40 border border-white/8 rounded-xl p-4 flex flex-col items-center gap-2">
          <p className="text-xs text-muted-foreground">Example — 4 band resistor: Yellow · Violet · Red · Gold = <span className="text-foreground font-bold">4 700 Ω ±5%</span></p>
          <svg viewBox="0 0 200 50" className="w-48" aria-label="Example resistor 4700 ohm">
            <line x1="5" y1="25" x2="35" y2="25" stroke="#94a3b8" strokeWidth="2"/>
            <rect x="35" y="10" width="130" height="30" rx="4" fill="#d4a574"/>
            <line x1="165" y1="25" x2="195" y2="25" stroke="#94a3b8" strokeWidth="2"/>
            {/* Bands */}
            <rect x="50" y="10" width="12" height="30" fill="#FFD700"/>
            <rect x="70" y="10" width="12" height="30" fill="#8B008B"/>
            <rect x="90" y="10" width="12" height="30" fill="#FF0000"/>
            <rect x="130" y="10" width="12" height="30" fill="#FFD700"/>
            {/* Labels */}
            <text x="56" y="48" textAnchor="middle" fill="#fbbf24" fontSize="7">4</text>
            <text x="76" y="48" textAnchor="middle" fill="#d8b4fe" fontSize="7">7</text>
            <text x="96" y="48" textAnchor="middle" fill="#f87171" fontSize="7">×100</text>
            <text x="136" y="48" textAnchor="middle" fill="#fbbf24" fontSize="7">±5%</text>
          </svg>
          <p className="text-xs font-mono text-foreground font-bold">4 · 7 · 00 Ω = 4 700 Ω</p>
        </div>
        {/* Colour table */}
        <div className="overflow-x-auto rounded-xl border border-white/8">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-white/8 bg-background/40">
                <th className="text-left py-2 px-3 font-semibold text-muted-foreground">Colour</th>
                <th className="text-center py-2 px-3 font-semibold text-muted-foreground">Digit</th>
                <th className="text-center py-2 px-3 font-semibold text-muted-foreground">Multiplier (zeros)</th>
                <th className="text-center py-2 px-3 font-semibold text-muted-foreground">Tolerance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {colourCode.map((row) => (
                <tr key={row.colour} className="hover:bg-white/2 transition-colors">
                  <td className="py-1.5 px-3">
                    <div className="flex items-center gap-2">
                      <span className={`w-8 h-5 rounded flex-shrink-0 border border-white/20 flex items-center justify-center text-xs font-bold ${row.text}`} style={{ backgroundColor: row.hex }}>{row.colour[0]}</span>
                      <span className="text-foreground font-medium">{row.colour}</span>
                    </div>
                  </td>
                  <td className="py-1.5 px-3 font-mono text-center text-foreground">{row.digit}</td>
                  <td className="py-1.5 px-3 font-mono text-center text-foreground">{row.zeros}</td>
                  <td className="py-1.5 px-3 font-mono text-center text-foreground">{row.tolerance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ── Power Resistors ── */}
      <div className="bg-card border border-border rounded-2xl p-5 space-y-4">
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-red-400" />
          <h2 className="font-semibold text-foreground">Power Resistors</h2>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed">Where large amounts of power must be dissipated as heat, standard carbon film resistors are insufficient. <span className="text-foreground font-medium">Power resistors</span> use resistance wire wound onto a ceramic former — more turns give a higher resistance value.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-black/20 rounded-xl p-4">
            <p className="text-xs text-muted-foreground text-center mb-3">Wire-wound Construction</p>
            <svg viewBox="0 0 240 80" className="w-full" aria-label="Power resistor wire wound construction">
              {/* Low resistance - fewer turns */}
              <rect x="20" y="20" width="90" height="35" rx="3" fill="#d4a574" opacity="0.3" stroke="#d4a574" strokeWidth="1"/>
              {[28,36,44,52,60,68,76,84,92,100].map((x) => (
                <line key={x} x1={x} y1="22" x2={x} y2="53" stroke="#94a3b8" strokeWidth="2"/>
              ))}
              <line x1="5" y1="37" x2="20" y2="37" stroke="#94a3b8" strokeWidth="2"/>
              <line x1="110" y1="37" x2="125" y2="37" stroke="#94a3b8" strokeWidth="2"/>
              <text x="65" y="68" textAnchor="middle" fill="#94a3b8" fontSize="8">low resistance value</text>
              {/* High resistance - more turns */}
              <rect x="130" y="20" width="90" height="35" rx="3" fill="#d4a574" opacity="0.3" stroke="#d4a574" strokeWidth="1"/>
              {[134,138,142,146,150,154,158,162,166,170,174,178,182,186,190,194,198,202,206,210,214].map((x) => (
                x <= 218 ? <line key={x} x1={x} y1="22" x2={x} y2="53" stroke="#94a3b8" strokeWidth="1.5"/> : null
              ))}
              <line x1="115" y1="37" x2="130" y2="37" stroke="#94a3b8" strokeWidth="2"/>
              <line x1="220" y1="37" x2="235" y2="37" stroke="#94a3b8" strokeWidth="2"/>
              <text x="175" y="68" textAnchor="middle" fill="#94a3b8" fontSize="8">high resistance value</text>
            </svg>
          </div>
          <div className="space-y-2 text-xs text-muted-foreground">
            <div className="flex gap-2 items-start"><span className="text-red-400 flex-shrink-0">•</span><span><span className="text-foreground font-medium">Oven fan speed control resistor</span> — ceramic-bodied wire-wound resistor used to control the speed of HVAC/R fan motors by dropping voltage.</span></div>
            <div className="flex gap-2 items-start"><span className="text-red-400 flex-shrink-0">•</span><span><span className="text-foreground font-medium">Grid resistors</span> — large banks of resistance wire used in motor starting circuits and dynamic braking for large HVAC/R plant.</span></div>
            <div className="flex gap-2 items-start"><span className="text-red-400 flex-shrink-0">•</span><span>Power resistors are rated in both <span className="text-foreground font-medium">Ohms</span> and <span className="text-foreground font-medium">Watts</span> — the wattage rating must not be exceeded or the resistor will overheat and fail.</span></div>
            <div className="flex gap-2 items-start"><span className="text-red-400 flex-shrink-0">•</span><span>A <span className="text-foreground font-medium">pig-tail</span> connection (flexible lead) is used on high-power resistors to allow for thermal expansion.</span></div>
          </div>
        </div>
      </div>

      {/* ── Series and Parallel ── */}
      <div className="bg-card border border-border rounded-2xl p-5 space-y-5">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-cyan-400" />
          <h2 className="font-semibold text-foreground">Resistors in Series and Parallel</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-cyan-400/5 border border-cyan-400/25 rounded-xl p-4 space-y-3">
            <h3 className="font-semibold text-sm text-cyan-300">Series Circuit</h3>
            <div className="bg-black/20 rounded-xl p-3">
              <svg viewBox="0 0 260 80" className="w-full" aria-label="Resistors in series">
                <line x1="10" y1="40" x2="40" y2="40" stroke="#67e8f9" strokeWidth="2"/>
                <rect x="40" y="28" width="40" height="24" rx="3" fill="none" stroke="#67e8f9" strokeWidth="2"/>
                <text x="60" y="44" textAnchor="middle" fill="#67e8f9" fontSize="11" fontWeight="bold">R₁</text>
                <line x1="80" y1="40" x2="110" y2="40" stroke="#67e8f9" strokeWidth="2"/>
                <rect x="110" y="28" width="40" height="24" rx="3" fill="none" stroke="#67e8f9" strokeWidth="2"/>
                <text x="130" y="44" textAnchor="middle" fill="#67e8f9" fontSize="11" fontWeight="bold">R₂</text>
                <line x1="150" y1="40" x2="180" y2="40" stroke="#67e8f9" strokeWidth="2"/>
                <rect x="180" y="28" width="40" height="24" rx="3" fill="none" stroke="#67e8f9" strokeWidth="2"/>
                <text x="200" y="44" textAnchor="middle" fill="#67e8f9" fontSize="11" fontWeight="bold">R₃</text>
                <line x1="220" y1="40" x2="250" y2="40" stroke="#67e8f9" strokeWidth="2"/>
              </svg>
            </div>
            <div className="font-mono text-sm text-cyan-300 bg-background/40 border border-white/8 rounded-lg p-2.5 text-center">R<sub>total</sub> = R₁ + R₂ + R₃</div>
            <ul className="space-y-1 text-xs text-muted-foreground">
              <li className="flex gap-2"><span className="text-cyan-400">•</span>Total R always <span className="text-foreground font-medium ml-1">greater than any individual resistor</span></li>
              <li className="flex gap-2"><span className="text-cyan-400">•</span>Same current flows through each resistor</li>
              <li className="flex gap-2"><span className="text-cyan-400">•</span>Voltage divides across each resistor</li>
            </ul>
            <div className="text-xs bg-background/40 border border-white/8 rounded-lg p-2.5">
              <span className="text-green-400 font-semibold">Example — </span>
              <span className="text-muted-foreground">10 Ω + 20 Ω + 30 Ω = <span className="text-foreground font-mono font-bold">60 Ω</span></span>
            </div>
          </div>
          <div className="bg-violet-400/5 border border-violet-400/25 rounded-xl p-4 space-y-3">
            <h3 className="font-semibold text-sm text-violet-300">Parallel Circuit</h3>
            <div className="bg-black/20 rounded-xl p-3">
              <svg viewBox="0 0 260 110" className="w-full" aria-label="Resistors in parallel">
                <line x1="10" y1="55" x2="50" y2="55" stroke="#a78bfa" strokeWidth="2"/>
                <line x1="50" y1="20" x2="50" y2="90" stroke="#a78bfa" strokeWidth="2"/>
                <line x1="210" y1="20" x2="210" y2="90" stroke="#a78bfa" strokeWidth="2"/>
                <line x1="210" y1="55" x2="250" y2="55" stroke="#a78bfa" strokeWidth="2"/>
                <line x1="50" y1="20" x2="80" y2="20" stroke="#a78bfa" strokeWidth="1.5"/>
                <rect x="80" y="10" width="100" height="20" rx="3" fill="none" stroke="#a78bfa" strokeWidth="1.5"/>
                <text x="130" y="24" textAnchor="middle" fill="#a78bfa" fontSize="11" fontWeight="bold">R₁</text>
                <line x1="180" y1="20" x2="210" y2="20" stroke="#a78bfa" strokeWidth="1.5"/>
                <line x1="50" y1="55" x2="80" y2="55" stroke="#a78bfa" strokeWidth="1.5"/>
                <rect x="80" y="45" width="100" height="20" rx="3" fill="none" stroke="#a78bfa" strokeWidth="1.5"/>
                <text x="130" y="59" textAnchor="middle" fill="#a78bfa" fontSize="11" fontWeight="bold">R₂</text>
                <line x1="180" y1="55" x2="210" y2="55" stroke="#a78bfa" strokeWidth="1.5"/>
                <line x1="50" y1="90" x2="80" y2="90" stroke="#a78bfa" strokeWidth="1.5"/>
                <rect x="80" y="80" width="100" height="20" rx="3" fill="none" stroke="#a78bfa" strokeWidth="1.5"/>
                <text x="130" y="94" textAnchor="middle" fill="#a78bfa" fontSize="11" fontWeight="bold">R₃</text>
                <line x1="180" y1="90" x2="210" y2="90" stroke="#a78bfa" strokeWidth="1.5"/>
              </svg>
            </div>
            <div className="font-mono text-sm text-violet-300 bg-background/40 border border-white/8 rounded-lg p-2.5 text-center">1/R<sub>total</sub> = 1/R₁ + 1/R₂ + 1/R₃</div>
            <ul className="space-y-1 text-xs text-muted-foreground">
              <li className="flex gap-2"><span className="text-violet-400">•</span>Total R always <span className="text-foreground font-medium ml-1">less than the smallest resistor</span></li>
              <li className="flex gap-2"><span className="text-violet-400">•</span>Same voltage across each branch</li>
              <li className="flex gap-2"><span className="text-violet-400">•</span>Current divides between branches</li>
            </ul>
            <div className="text-xs bg-background/40 border border-white/8 rounded-lg p-2.5">
              <span className="text-green-400 font-semibold">Example — </span>
              <span className="text-muted-foreground">Two 10 Ω in parallel = <span className="text-foreground font-mono font-bold">5 Ω</span></span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Summary ── */}
      <div className="bg-card border border-border rounded-2xl p-5 space-y-3">
        <h2 className="font-semibold text-foreground">Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
          {[
            "A complete circuit requires a source, a complete conductive path, and a load.",
            "Resistance (R) is the opposition to electron flow — measured in Ohms (Ω).",
            "R = V ÷ I — always measure resistance with the circuit de-energised.",
            "Four factors affect resistance: material (ρ), length (L), cross-sectional area (A), and temperature (T).",
            "For pure metals, resistance increases with temperature. For semiconductors (NTC thermistors), it decreases.",
            "The resistivity comparison table shows carbon has >200,000× the resistance of silver for the same conductor size.",
            "Fixed resistors: carbon film on ceramic. Variable: potentiometer/rheostat. Thermistor: NTC or PTC. LDR: light-sensitive. VDR: voltage surge protection.",
            "Resistor colour code: first two bands = digits, third = multiplier (zeros), fourth = tolerance.",
            "Power resistors use resistance wire on a ceramic former — rated in Ohms and Watts.",
            "Resistors in series add directly; parallel always produces a total less than the smallest branch.",
          ].map((point, i) => (
            <div key={i} className="flex gap-2.5 items-start bg-background/40 border border-white/8 rounded-lg p-2.5">
              <span className="font-mono text-orange-400/60 text-xs w-4 flex-shrink-0">{i + 1}.</span>
              <span className="text-muted-foreground">{point}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
