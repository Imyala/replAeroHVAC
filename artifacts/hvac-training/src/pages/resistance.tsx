import { Zap, Info, BookOpen, Thermometer, Activity } from "lucide-react";

const resistivityData = [
  { material: "Silver (Ag)", rho: "1.59 × 10⁻⁸", category: "conductor", use: "High-end contacts" },
  { material: "Copper (Cu)", rho: "1.72 × 10⁻⁸", category: "conductor", use: "Wiring, bus bars, motor windings" },
  { material: "Gold (Au)", rho: "2.44 × 10⁻⁸", category: "conductor", use: "Corrosion-resistant contacts" },
  { material: "Aluminium (Al)", rho: "2.82 × 10⁻⁸", category: "conductor", use: "Power cables, heat exchangers" },
  { material: "Nichrome (Ni–Cr)", rho: "1.10 × 10⁻⁶", category: "resistive", use: "Heating elements, electric strip heaters" },
  { material: "Carbon (graphite)", rho: "3–60 × 10⁻⁵", category: "resistive", use: "Motor brushes, resistors" },
  { material: "Silicon (Si)", rho: "6.40 × 10²", category: "semiconductor", use: "Thermistors, transistors, solar cells" },
  { material: "Glass", rho: "10¹⁰ – 10¹⁴", category: "insulator", use: "Insulating standoffs" },
  { material: "Rubber", rho: "10¹³", category: "insulator", use: "Cable insulation, gaskets" },
  { material: "PTFE (Teflon)", rho: "10²³", category: "insulator", use: "High-temp wire insulation" },
];

const categoryStyle: Record<string, { dot: string; badge: string; label: string }> = {
  conductor:    { dot: "bg-blue-400",   badge: "bg-blue-400/10 border-blue-400/25 text-blue-300",   label: "Conductor" },
  resistive:    { dot: "bg-orange-400", badge: "bg-orange-400/10 border-orange-400/25 text-orange-300", label: "Resistive alloy" },
  semiconductor:{ dot: "bg-purple-400", badge: "bg-purple-400/10 border-purple-400/25 text-purple-300", label: "Semiconductor" },
  insulator:    { dot: "bg-red-400",    badge: "bg-red-400/10 border-red-400/25 text-red-300",     label: "Insulator" },
};

const factors = [
  {
    symbol: "ρ",
    name: "Material (Resistivity)",
    colour: "text-blue-400",
    border: "border-blue-400/30",
    bg: "bg-blue-400/5",
    rule: "Different materials oppose current flow to different degrees. This property is called resistivity (ρ), measured in Ω·m. Copper has very low resistivity; rubber has extremely high resistivity.",
    hvac: "Copper conductors are used throughout HVAC/R wiring for their low resistance. Nichrome wire is used in electric reheat coils and strip heaters because its high resistivity generates heat efficiently.",
  },
  {
    symbol: "L",
    name: "Length",
    colour: "text-yellow-400",
    border: "border-yellow-400/30",
    bg: "bg-yellow-400/5",
    rule: "The longer the conductor, the greater the resistance. Doubling the length doubles the resistance. R ∝ L",
    hvac: "Long cable runs to remote condensing units or air handlers cause voltage drop. Undersized or overly long cables raise resistance, causing excessive heat and motor underperformance.",
  },
  {
    symbol: "A",
    name: "Cross-sectional Area",
    colour: "text-green-400",
    border: "border-green-400/30",
    bg: "bg-green-400/5",
    rule: "A thicker conductor provides more paths for electrons, reducing resistance. Doubling the cross-sectional area halves the resistance. R ∝ 1/A",
    hvac: "Higher-current loads (compressors, large fans) require larger cable cross-sections to keep resistance — and therefore voltage drop and heat — within safe limits.",
  },
  {
    symbol: "T",
    name: "Temperature",
    colour: "text-red-400",
    border: "border-red-400/30",
    bg: "bg-red-400/5",
    rule: "For most metallic conductors, resistance increases with temperature (positive temperature coefficient). For semiconductors and carbon, resistance decreases with temperature (negative temperature coefficient).",
    hvac: "Motor windings heat up under load, increasing winding resistance. Thermistors exploit the temperature–resistance relationship to measure refrigerant and air temperatures in control circuits.",
  },
];

const thermistorTypes = [
  {
    type: "NTC",
    full: "Negative Temperature Coefficient",
    colour: "text-blue-400",
    border: "border-blue-400/30",
    bg: "bg-blue-400/5",
    behaviour: "Resistance decreases as temperature rises",
    hvac: "Most common in HVAC/R — used as air, pipe, and outdoor ambient temperature sensors. As temperature increases, resistance falls and the control board reads the change.",
    example: "10 kΩ at 25 °C → ~1 kΩ at 85 °C (typical)",
  },
  {
    type: "PTC",
    full: "Positive Temperature Coefficient",
    colour: "text-red-400",
    border: "border-red-400/30",
    bg: "bg-red-400/5",
    behaviour: "Resistance increases rapidly above a threshold temperature",
    hvac: "Used in compressor motor protection and crankcase heaters. If a compressor overheats, the PTC resistance spikes — effectively cutting current and protecting the motor.",
    example: "Low resistance until ~120 °C, then spikes to MΩ range",
  },
];

export default function Resistance() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12">
      {/* Page header */}
      <div>
        <div className="w-10 h-10 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center mb-4">
          <Activity className="w-5 h-5 text-orange-400" />
        </div>
        <h1 className="text-4xl font-display font-bold text-foreground tracking-tight mb-3">Resistance</h1>
        <p className="text-muted-foreground leading-relaxed max-w-2xl">
          Resistance is the opposition a material offers to the flow of electric current. Every conductor, component, and connection in an HVAC/R circuit has resistance — understanding it is essential for fault finding, cable sizing, and interpreting meter readings.
        </p>
      </div>

      {/* What is Resistance */}
      <div className="bg-card border border-border rounded-2xl p-5 space-y-4">
        <div className="flex items-center gap-2">
          <Info className="w-4 h-4 text-orange-400" />
          <h2 className="font-semibold text-foreground">What is Resistance?</h2>
        </div>

        <div className="bg-orange-500/10 border border-orange-400/20 rounded-xl p-4 text-center">
          <p className="text-lg font-bold text-orange-300">Resistance is the opposition to the flow of electric current.</p>
          <p className="text-sm text-muted-foreground mt-1">The greater the resistance, the harder it is for current to flow — and the more energy is converted to heat in the process.</p>
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

        <div className="flex gap-3 text-xs items-start">
          <span className="mt-0.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-orange-400" />
          <p className="text-muted-foreground"><span className="text-foreground font-medium">The Ohm (Ω) </span>is defined as the resistance of a conductor when a potential difference of 1 volt produces a current of 1 ampere through it.</p>
        </div>
        <div className="flex gap-3 text-xs items-start">
          <span className="mt-0.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-orange-400" />
          <p className="text-muted-foreground"><span className="text-foreground font-medium">Resistance is measured with an ohmmeter</span> — always with the circuit de-energised (power off). Measuring resistance on a live circuit will damage the meter and may cause injury.</p>
        </div>
      </div>

      {/* Ohm's Law — R = V / I */}
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

        {/* Ohm's Law triangle SVG */}
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
          <p className="text-xs text-muted-foreground text-center">Cover the unknown value — the remaining two show the calculation. Cover <span className="text-yellow-400 font-medium">V</span> → I × R. Cover <span className="text-blue-400 font-medium">I</span> → V ÷ R. Cover <span className="text-orange-400 font-medium">R</span> → V ÷ I.</p>
        </div>

        {/* Worked example */}
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

      {/* Factors affecting resistance */}
      <div className="bg-card border border-border rounded-2xl p-5 space-y-4">
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-purple-400" />
          <h2 className="font-semibold text-foreground">Factors Affecting Resistance</h2>
        </div>
        <p className="text-xs text-muted-foreground">The resistance of a conductor depends on four factors, summarised by the formula:</p>
        <div className="bg-purple-500/10 border border-purple-400/20 rounded-xl p-4 text-center">
          <p className="font-mono text-lg text-purple-300 font-bold">R = ρ × L / A</p>
          <p className="text-xs text-muted-foreground mt-1">ρ = resistivity (Ω·m) &nbsp;·&nbsp; L = length (m) &nbsp;·&nbsp; A = cross-sectional area (m²)</p>
        </div>

        <div className="space-y-3">
          {factors.map((f) => (
            <div key={f.symbol} className={`${f.bg} border ${f.border} rounded-xl p-4 space-y-2`}>
              <div className="flex items-center gap-3">
                <span className={`font-mono text-2xl font-bold ${f.colour}`}>{f.symbol}</span>
                <h3 className={`font-semibold text-sm ${f.colour}`}>{f.name}</h3>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">{f.rule}</p>
              <div className="flex gap-2 items-start text-xs">
                <span className="text-green-400 flex-shrink-0 font-semibold">HVAC/R</span>
                <span className="text-muted-foreground">{f.hvac}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Series and Parallel */}
      <div className="bg-card border border-border rounded-2xl p-5 space-y-5">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-cyan-400" />
          <h2 className="font-semibold text-foreground">Resistors in Series and Parallel</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Series */}
          <div className="bg-cyan-400/5 border border-cyan-400/25 rounded-xl p-4 space-y-3">
            <h3 className="font-semibold text-sm text-cyan-300">Series Circuit</h3>
            <div className="bg-black/20 rounded-xl p-3">
              <svg viewBox="0 0 260 80" className="w-full" aria-label="Resistors in series">
                <line x1="10" y1="40" x2="40" y2="40" stroke="#67e8f9" strokeWidth="2" />
                <rect x="40" y="28" width="40" height="24" rx="3" fill="none" stroke="#67e8f9" strokeWidth="2" />
                <text x="60" y="44" textAnchor="middle" fill="#67e8f9" fontSize="11" fontWeight="bold">R₁</text>
                <line x1="80" y1="40" x2="110" y2="40" stroke="#67e8f9" strokeWidth="2" />
                <rect x="110" y="28" width="40" height="24" rx="3" fill="none" stroke="#67e8f9" strokeWidth="2" />
                <text x="130" y="44" textAnchor="middle" fill="#67e8f9" fontSize="11" fontWeight="bold">R₂</text>
                <line x1="150" y1="40" x2="180" y2="40" stroke="#67e8f9" strokeWidth="2" />
                <rect x="180" y="28" width="40" height="24" rx="3" fill="none" stroke="#67e8f9" strokeWidth="2" />
                <text x="200" y="44" textAnchor="middle" fill="#67e8f9" fontSize="11" fontWeight="bold">R₃</text>
                <line x1="220" y1="40" x2="250" y2="40" stroke="#67e8f9" strokeWidth="2" />
              </svg>
            </div>
            <div className="font-mono text-sm text-cyan-300 bg-background/40 border border-white/8 rounded-lg p-2.5 text-center">
              R<sub>total</sub> = R₁ + R₂ + R₃
            </div>
            <ul className="space-y-1 text-xs text-muted-foreground">
              <li className="flex gap-2"><span className="text-cyan-400">•</span>Total resistance is always <span className="text-foreground font-medium ml-1">greater than any individual resistor</span></li>
              <li className="flex gap-2"><span className="text-cyan-400">•</span>Same current flows through each resistor</li>
              <li className="flex gap-2"><span className="text-cyan-400">•</span>Voltage divides across each resistor</li>
            </ul>
            <div className="text-xs bg-background/40 border border-white/8 rounded-lg p-2.5">
              <span className="text-green-400 font-semibold">Example — </span>
              <span className="text-muted-foreground">10 Ω + 20 Ω + 30 Ω = <span className="text-foreground font-mono font-bold">60 Ω total</span></span>
            </div>
          </div>

          {/* Parallel */}
          <div className="bg-violet-400/5 border border-violet-400/25 rounded-xl p-4 space-y-3">
            <h3 className="font-semibold text-sm text-violet-300">Parallel Circuit</h3>
            <div className="bg-black/20 rounded-xl p-3">
              <svg viewBox="0 0 260 110" className="w-full" aria-label="Resistors in parallel">
                <line x1="10" y1="55" x2="50" y2="55" stroke="#a78bfa" strokeWidth="2" />
                <line x1="50" y1="20" x2="50" y2="90" stroke="#a78bfa" strokeWidth="2" />
                <line x1="210" y1="20" x2="210" y2="90" stroke="#a78bfa" strokeWidth="2" />
                <line x1="210" y1="55" x2="250" y2="55" stroke="#a78bfa" strokeWidth="2" />
                {/* R1 top */}
                <line x1="50" y1="20" x2="80" y2="20" stroke="#a78bfa" strokeWidth="1.5" />
                <rect x="80" y="10" width="100" height="20" rx="3" fill="none" stroke="#a78bfa" strokeWidth="1.5" />
                <text x="130" y="24" textAnchor="middle" fill="#a78bfa" fontSize="11" fontWeight="bold">R₁</text>
                <line x1="180" y1="20" x2="210" y2="20" stroke="#a78bfa" strokeWidth="1.5" />
                {/* R2 middle */}
                <line x1="50" y1="55" x2="80" y2="55" stroke="#a78bfa" strokeWidth="1.5" />
                <rect x="80" y="45" width="100" height="20" rx="3" fill="none" stroke="#a78bfa" strokeWidth="1.5" />
                <text x="130" y="59" textAnchor="middle" fill="#a78bfa" fontSize="11" fontWeight="bold">R₂</text>
                <line x1="180" y1="55" x2="210" y2="55" stroke="#a78bfa" strokeWidth="1.5" />
                {/* R3 bottom */}
                <line x1="50" y1="90" x2="80" y2="90" stroke="#a78bfa" strokeWidth="1.5" />
                <rect x="80" y="80" width="100" height="20" rx="3" fill="none" stroke="#a78bfa" strokeWidth="1.5" />
                <text x="130" y="94" textAnchor="middle" fill="#a78bfa" fontSize="11" fontWeight="bold">R₃</text>
                <line x1="180" y1="90" x2="210" y2="90" stroke="#a78bfa" strokeWidth="1.5" />
              </svg>
            </div>
            <div className="font-mono text-sm text-violet-300 bg-background/40 border border-white/8 rounded-lg p-2.5 text-center">
              1/R<sub>total</sub> = 1/R₁ + 1/R₂ + 1/R₃
            </div>
            <ul className="space-y-1 text-xs text-muted-foreground">
              <li className="flex gap-2"><span className="text-violet-400">•</span>Total resistance is always <span className="text-foreground font-medium ml-1">less than the smallest resistor</span></li>
              <li className="flex gap-2"><span className="text-violet-400">•</span>Same voltage across each branch</li>
              <li className="flex gap-2"><span className="text-violet-400">•</span>Current divides between branches</li>
            </ul>
            <div className="text-xs bg-background/40 border border-white/8 rounded-lg p-2.5">
              <span className="text-green-400 font-semibold">Example — </span>
              <span className="text-muted-foreground">Two equal 10 Ω in parallel = <span className="text-foreground font-mono font-bold">5 Ω total</span></span>
            </div>
          </div>
        </div>
      </div>

      {/* Thermistors */}
      <div className="bg-card border border-border rounded-2xl p-5 space-y-4">
        <div className="flex items-center gap-2">
          <Thermometer className="w-4 h-4 text-red-400" />
          <h2 className="font-semibold text-foreground">Thermistors — Temperature-Dependent Resistance</h2>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed">
          A <span className="text-foreground font-medium">thermistor</span> is a resistor whose resistance changes significantly and predictably with temperature. They are semiconductor devices — and the most common temperature sensor used in HVAC/R control circuits.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {thermistorTypes.map((t) => (
            <div key={t.type} className={`${t.bg} border ${t.border} rounded-xl p-4 space-y-2`}>
              <div className="flex items-center gap-2">
                <span className={`font-mono text-xl font-bold ${t.colour}`}>{t.type}</span>
                <span className={`text-xs font-medium ${t.colour}`}>{t.full}</span>
              </div>
              <p className={`text-xs font-semibold ${t.colour}`}>{t.behaviour}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{t.hvac}</p>
              <div className="font-mono text-xs bg-background/40 border border-white/8 rounded-lg px-3 py-2 text-muted-foreground">
                {t.example}
              </div>
            </div>
          ))}
        </div>

        {/* Thermistor SVG */}
        <div className="bg-black/20 border border-white/8 rounded-xl p-4">
          <p className="text-xs font-semibold text-muted-foreground mb-3 text-center">NTC Thermistor — Resistance vs Temperature (typical)</p>
          <svg viewBox="0 0 300 140" className="w-full max-w-sm mx-auto" aria-label="NTC thermistor resistance vs temperature curve">
            {/* Axes */}
            <line x1="40" y1="10" x2="40" y2="120" stroke="#475569" strokeWidth="1.5" />
            <line x1="40" y1="120" x2="280" y2="120" stroke="#475569" strokeWidth="1.5" />
            {/* Axis labels */}
            <text x="20" y="15" fill="#94a3b8" fontSize="8" textAnchor="middle">R (kΩ)</text>
            <text x="160" y="135" fill="#94a3b8" fontSize="8" textAnchor="middle">Temperature (°C)</text>
            {/* Y-axis ticks */}
            {[["100",14],["50",47],["10",88],["1",114]].map(([label, y]) => (
              <g key={label}>
                <line x1="36" y1={y} x2="40" y2={y} stroke="#475569" strokeWidth="1" />
                <text x="33" y={Number(y)+3} fill="#94a3b8" fontSize="7" textAnchor="end">{label}</text>
              </g>
            ))}
            {/* X-axis ticks */}
            {[["-20",55],["0",95],["25",141],["50",186],["85",248]].map(([label, x]) => (
              <g key={label}>
                <line x1={x} y1="120" x2={x} y2="124" stroke="#475569" strokeWidth="1" />
                <text x={x} y="132" fill="#94a3b8" fontSize="7" textAnchor="middle">{label}</text>
              </g>
            ))}
            {/* NTC curve — steep exponential drop */}
            <path d="M55,14 C80,14 90,28 105,50 C120,70 135,88 155,100 C175,110 205,116 248,118" fill="none" stroke="#60a5fa" strokeWidth="2.5" strokeLinecap="round" />
            <text x="70" y="42" fill="#60a5fa" fontSize="8" fontWeight="bold">NTC curve</text>
          </svg>
        </div>
      </div>

      {/* Resistivity table */}
      <div className="bg-card border border-border rounded-2xl p-5 space-y-4">
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-amber-400" />
          <h2 className="font-semibold text-foreground">Resistivity of Common Materials</h2>
          <span className="text-xs text-muted-foreground font-normal">(at 20 °C)</span>
        </div>
        <div className="overflow-x-auto rounded-xl border border-white/8">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-white/8 bg-background/40">
                <th className="text-left py-2 px-3 font-semibold text-muted-foreground">Material</th>
                <th className="text-left py-2 px-3 font-semibold text-muted-foreground">Resistivity ρ (Ω·m)</th>
                <th className="text-left py-2 px-3 font-semibold text-muted-foreground">Type</th>
                <th className="text-left py-2 px-3 font-semibold text-muted-foreground">HVAC/R Use</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {resistivityData.map((row) => {
                const s = categoryStyle[row.category];
                return (
                  <tr key={row.material} className="hover:bg-white/2 transition-colors">
                    <td className="py-2 px-3 font-medium text-foreground">{row.material}</td>
                    <td className="py-2 px-3 font-mono text-foreground">{row.rho}</td>
                    <td className="py-2 px-3">
                      <span className={`inline-flex items-center gap-1.5 text-xs px-2 py-0.5 rounded-full border ${s.badge}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
                        {s.label}
                      </span>
                    </td>
                    <td className="py-2 px-3 text-muted-foreground">{row.use}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Summary */}
      <div className="bg-card border border-border rounded-2xl p-5 space-y-3">
        <h2 className="font-semibold text-foreground">Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
          {[
            "Resistance (R) opposes current flow — measured in Ohms (Ω).",
            "R = V ÷ I — always measure with the circuit de-energised.",
            "Resistance increases with length and resistivity; decreases with cross-sectional area.",
            "Most metallic conductors increase in resistance as temperature rises (PTC behaviour).",
            "NTC thermistors decrease in resistance as temperature rises — the most common HVAC/R temperature sensor type.",
            "Resistors in series add directly; resistors in parallel always produce a total less than the smallest branch.",
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
