import { Calculator, Zap, Info, BookOpen, FlameKindling, ArrowLeftRight, AlertTriangle } from "lucide-react";

export default function OhmsLawPower() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12">

      {/* ── Page Header ── */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-lg p-2">
            <Calculator className="w-5 h-5 text-yellow-400" />
          </div>
        </div>
        <h1 className="text-4xl font-display font-bold text-foreground tracking-tight mb-3">Ohm's Law &amp; Power</h1>
        <p className="text-muted-foreground leading-relaxed max-w-2xl">
          Ohm's Law describes the relationship between voltage, current, and resistance in an electrical circuit.
          Watt's Law extends this to electrical power. Together, these two laws underpin every calculation in electrical work.
        </p>
      </div>

      {/* ── Proportional To ── */}
      <div className="bg-card border border-border rounded-2xl p-5 space-y-4">
        <div className="flex items-center gap-2">
          <ArrowLeftRight className="w-4 h-4 text-cyan-400" />
          <h2 className="font-semibold text-foreground">Proportional To</h2>
        </div>
        <div className="bg-cyan-500/10 border border-cyan-400/20 rounded-xl p-4 space-y-2">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Values that are <span className="text-foreground font-semibold">directly opposite</span> to each other in a formula are <span className="text-cyan-300 font-semibold">proportional</span> to each other.
          </p>
          <p className="text-sm font-bold text-foreground">If one value increases, so does the other.</p>
        </div>
        <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
          <svg viewBox="0 0 340 130" className="w-80 h-auto" aria-label="Direct proportionality — hexagon proportional to square, star proportional to circle">
            {/* Row 1: Hexagon ↔ Square */}
            <polygon points="48,15 72,2 96,15 96,41 72,54 48,41" fill="#ec4899" stroke="#f472b6" strokeWidth="1.5"/>
            <rect x="118" y="4" width="50" height="48" rx="3" fill="#4ade80" stroke="#86efac" strokeWidth="1.5"/>
            {/* Arrow row 1 */}
            <line x1="100" y1="28" x2="116" y2="28" stroke="#93c5fd" strokeWidth="1.5" markerEnd="url(#arrowR)" markerStart="url(#arrowL)"/>
            <defs>
              <marker id="arrowR" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="#93c5fd"/>
              </marker>
              <marker id="arrowL" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto-start-reverse">
                <path d="M0,0 L6,3 L0,6 Z" fill="#93c5fd"/>
              </marker>
            </defs>
            <text x="180" y="22" fill="#d1d5db" fontSize="9">Hexagon is proportional</text>
            <text x="180" y="34" fill="#d1d5db" fontSize="9">to the square.</text>
            {/* Divider */}
            <line x1="20" y1="64" x2="100" y2="64" stroke="#6b7280" strokeWidth="2"/>
            <text x="105" y="69" fill="#9ca3af" fontSize="12" fontWeight="bold">=</text>
            <line x1="118" y1="64" x2="175" y2="64" stroke="#6b7280" strokeWidth="2"/>
            {/* Row 2: Star ↔ Circle */}
            <polygon points="55,120 60,100 72,115 85,100 90,120 75,108 58,120" fill="#60a5fa" stroke="#93c5fd" strokeWidth="1.5"/>
            <circle cx="143" cy="105" r="22" fill="#fde047" stroke="#facc15" strokeWidth="1.5"/>
            <line x1="100" y1="105" x2="116" y2="105" stroke="#93c5fd" strokeWidth="1.5" markerEnd="url(#arrowR)" markerStart="url(#arrowL)"/>
            <text x="180" y="99" fill="#d1d5db" fontSize="9">Star is proportional to</text>
            <text x="180" y="111" fill="#d1d5db" fontSize="9">the circle.</text>
          </svg>
          <div className="max-w-xs space-y-3 text-sm text-muted-foreground">
            <p>In the formula <span className="font-mono text-foreground">V = I × R</span>, voltage (V) and current (I) are directly opposite each other — they are <span className="text-cyan-300 font-medium">proportional</span>.</p>
            <p>If resistance stays constant and voltage doubles, current doubles.</p>
            <div className="font-mono text-xs bg-muted/30 rounded-xl p-3 space-y-1">
              <div className="text-foreground">Example: R = 10 Ω (fixed)</div>
              <div>V = 10 V → I = 1 A</div>
              <div>V = 20 V → I = 2 A</div>
              <div className="text-cyan-300">↑ V doubled, I doubled</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Inversely Proportional To ── */}
      <div className="bg-card border border-border rounded-2xl p-5 space-y-4">
        <div className="flex items-center gap-2">
          <ArrowLeftRight className="w-4 h-4 text-orange-400" />
          <h2 className="font-semibold text-foreground">Inversely Proportional To</h2>
        </div>
        <div className="bg-orange-500/10 border border-orange-400/20 rounded-xl p-4 space-y-2">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Values that are <span className="text-foreground font-semibold">diagonal</span> to each other in a formula are <span className="text-orange-300 font-semibold">inversely proportional</span> to each other.
          </p>
          <p className="text-sm font-bold text-foreground">If one value increases, the other decreases.</p>
        </div>
        <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
          <svg viewBox="0 0 370 140" className="w-[22rem] h-auto" aria-label="Inverse proportionality — diagonal crossing arrows between shapes">
            {/* Row 1 top-left: Hexagon */}
            <polygon points="48,15 72,2 96,15 96,41 72,54 48,41" fill="#ec4899" stroke="#f472b6" strokeWidth="1.5"/>
            {/* Row 1 top-right: Square */}
            <rect x="118" y="4" width="50" height="48" rx="3" fill="#4ade80" stroke="#86efac" strokeWidth="1.5"/>
            {/* Row 2 bottom-left: Star */}
            <polygon points="55,128 60,108 72,123 85,108 90,128 75,116 58,128" fill="#60a5fa" stroke="#93c5fd" strokeWidth="1.5"/>
            {/* Row 2 bottom-right: Circle */}
            <circle cx="143" cy="113" r="22" fill="#fde047" stroke="#facc15" strokeWidth="1.5"/>
            {/* Dividers */}
            <line x1="20" y1="68" x2="100" y2="68" stroke="#6b7280" strokeWidth="2"/>
            <text x="105" y="73" fill="#9ca3af" fontSize="12" fontWeight="bold">=</text>
            <line x1="118" y1="68" x2="175" y2="68" stroke="#6b7280" strokeWidth="2"/>
            {/* Diagonal arrows (cross pattern) */}
            <line x1="100" y1="20" x2="120" y2="100" stroke="#fb923c" strokeWidth="1.5" markerEnd="url(#arrowO)"/>
            <line x1="118" y1="20" x2="98" y2="100" stroke="#93c5fd" strokeWidth="1.5" markerEnd="url(#arrowB)"/>
            <defs>
              <marker id="arrowO" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="#fb923c"/>
              </marker>
              <marker id="arrowB" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="#93c5fd"/>
              </marker>
            </defs>
            <text x="180" y="32" fill="#d1d5db" fontSize="9">The star is inversely</text>
            <text x="180" y="44" fill="#d1d5db" fontSize="9">proportional to the square.</text>
            <text x="180" y="110" fill="#d1d5db" fontSize="9">The hexagon is inversely</text>
            <text x="180" y="122" fill="#d1d5db" fontSize="9">proportional to the circle.</text>
          </svg>
          <div className="max-w-xs space-y-3 text-sm text-muted-foreground">
            <p>In the formula <span className="font-mono text-foreground">I = V ÷ R</span>, current (I) and resistance (R) are diagonal — they are <span className="text-orange-300 font-medium">inversely proportional</span>.</p>
            <p>If voltage stays constant and resistance doubles, current halves.</p>
            <div className="font-mono text-xs bg-muted/30 rounded-xl p-3 space-y-1">
              <div className="text-foreground">Example: V = 12 V (fixed)</div>
              <div>R = 4 Ω → I = 3 A</div>
              <div>R = 8 Ω → I = 1.5 A</div>
              <div className="text-orange-300">↑ R doubled, I halved</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── The Load ── */}
      <div className="bg-card border border-border rounded-2xl p-5 space-y-4">
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-yellow-400" />
          <h2 className="font-semibold text-foreground">The Load</h2>
        </div>
        <div className="bg-yellow-500/10 border border-yellow-400/20 rounded-xl p-4 space-y-1">
          <p className="text-sm font-bold text-foreground">A device in the circuit which does some type of work.</p>
          <p className="text-sm text-muted-foreground">It converts electrical energy to another energy form — e.g. light, heat, rotation, sound.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { form: "Light", icon: "💡", example: "Lamp, LED", colour: "text-yellow-300", bg: "bg-yellow-400/5", border: "border-yellow-400/25" },
            { form: "Heat", icon: "🔥", example: "Heater, element", colour: "text-orange-300", bg: "bg-orange-400/5", border: "border-orange-400/25" },
            { form: "Rotation", icon: "⚙️", example: "Motor, fan", colour: "text-blue-300", bg: "bg-blue-400/5", border: "border-blue-400/25" },
            { form: "Sound", icon: "🔊", example: "Speaker, buzzer", colour: "text-green-300", bg: "bg-green-400/5", border: "border-green-400/25" },
          ].map(({ form, icon, example, colour, bg, border }) => (
            <div key={form} className={`${bg} border ${border} rounded-xl p-3 text-center space-y-1`}>
              <div className="text-2xl">{icon}</div>
              <div className={`text-xs font-bold ${colour}`}>{form}</div>
              <div className="text-xs text-muted-foreground">{example}</div>
            </div>
          ))}
        </div>
        {/* Flashlight anatomy SVG */}
        <div className="bg-black/20 rounded-xl p-4">
          <p className="text-xs text-muted-foreground text-center mb-3">Flashlight — a complete circuit with load (lamp filament) as the energy converter</p>
          <svg viewBox="0 0 500 130" className="w-full max-w-lg mx-auto block" aria-label="Flashlight cross-section showing circuit components">
            {/* Body outline */}
            <rect x="80" y="45" width="320" height="50" rx="8" fill="none" stroke="#4b5563" strokeWidth="2"/>
            {/* Head cone */}
            <polygon points="30,30 80,45 80,95 30,110" fill="none" stroke="#4b5563" strokeWidth="2"/>
            {/* Reflector */}
            <ellipse cx="80" cy="70" rx="10" ry="22" fill="none" stroke="#60a5fa" strokeWidth="1.5"/>
            {/* Lamp */}
            <circle cx="65" cy="70" r="6" fill="none" stroke="#fbbf24" strokeWidth="1.5"/>
            <line x1="62" y1="73" x2="68" y2="73" stroke="#fbbf24" strokeWidth="1"/>
            {/* 2 batteries */}
            <rect x="160" y="55" width="35" height="30" rx="2" fill="#374151" stroke="#6b7280" strokeWidth="1"/>
            <rect x="165" y="52" width="6" height="4" rx="1" fill="#9ca3af"/>
            <text x="177" y="74" fill="#9ca3af" fontSize="7" textAnchor="middle">+</text>
            <rect x="215" y="55" width="35" height="30" rx="2" fill="#374151" stroke="#6b7280" strokeWidth="1"/>
            <rect x="220" y="52" width="6" height="4" rx="1" fill="#9ca3af"/>
            <text x="232" y="74" fill="#9ca3af" fontSize="7" textAnchor="middle">+</text>
            {/* Slide switch */}
            <rect x="310" y="40" width="30" height="14" rx="3" fill="#374151" stroke="#6b7280" strokeWidth="1"/>
            <rect x="316" y="43" width="8" height="8" rx="1" fill="#6b7280"/>
            {/* Spring */}
            <path d="M395,58 Q400,65 395,72 Q400,79 395,86" fill="none" stroke="#9ca3af" strokeWidth="1.5"/>
            {/* Labels */}
            <text x="56" y="112" fill="#60a5fa" fontSize="7" textAnchor="middle">reflector</text>
            <text x="65" y="105" fill="#fbbf24" fontSize="7" textAnchor="middle">lamp filament</text>
            <text x="177" y="100" fill="#9ca3af" fontSize="7" textAnchor="middle">cell</text>
            <text x="232" y="100" fill="#9ca3af" fontSize="7" textAnchor="middle">cell</text>
            <text x="325" y="35" fill="#9ca3af" fontSize="7" textAnchor="middle">slide switch</text>
            <text x="395" y="100" fill="#9ca3af" fontSize="7" textAnchor="middle">spring</text>
            <text x="177" y="112" fill="#6b7280" fontSize="7" textAnchor="middle">C-size cells in series</text>
            {/* Plastic casing label */}
            <text x="200" y="22" fill="#6b7280" fontSize="7" textAnchor="middle">plastic casing</text>
            <line x1="200" y1="25" x2="200" y2="45" stroke="#374151" strokeWidth="0.5" strokeDasharray="2 2"/>
          </svg>
        </div>
      </div>

      {/* ── Ohm's Law Introduction ── */}
      <div className="bg-card border border-border rounded-2xl p-5 space-y-4">
        <div className="flex items-center gap-2">
          <Info className="w-4 h-4 text-yellow-400" />
          <h2 className="font-semibold text-foreground">What is Ohm's Law?</h2>
        </div>
        <div className="bg-yellow-500/10 border border-yellow-400/20 rounded-xl p-4 text-center">
          <p className="text-lg font-bold text-yellow-300">
            The current flowing in a circuit is proportional to the voltage and inversely proportional to the resistance of the circuit.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Stated by Georg Simon Ohm in 1827. Valid for all linear (ohmic) conductors at a constant temperature.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[
            { symbol: "V", name: "Voltage", unit: "Volts (V)", colour: "text-yellow-400", bg: "bg-yellow-400/5", border: "border-yellow-400/25", desc: "The electromotive force (EMF) or potential difference that drives current around the circuit." },
            { symbol: "I", name: "Current", unit: "Amperes (A)", colour: "text-blue-400", bg: "bg-blue-400/5", border: "border-blue-400/25", desc: "The rate of flow of electric charge through a conductor. Measured in Amperes (amps)." },
            { symbol: "R", name: "Resistance", unit: "Ohms (Ω)", colour: "text-orange-400", bg: "bg-orange-400/5", border: "border-orange-400/25", desc: "The opposition to the flow of current offered by a component or conductor." },
          ].map(({ symbol, name, unit, colour, bg, border, desc }) => (
            <div key={symbol} className={`${bg} border ${border} rounded-xl p-3 space-y-1`}>
              <div className={`text-3xl font-display font-bold ${colour}`}>{symbol}</div>
              <div className="font-semibold text-xs text-foreground">{name}</div>
              <div className={`text-xs font-mono ${colour}`}>{unit}</div>
              <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Ohm's Law Triangle & Thumb Technique ── */}
      <div className="bg-card border border-border rounded-2xl p-5 space-y-5">
        <div className="flex items-center gap-2">
          <Calculator className="w-4 h-4 text-yellow-400" />
          <h2 className="font-semibold text-foreground">The Triangle &amp; Thumb Technique</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground leading-relaxed">
              To transpose the formula, draw the triangle as shown. <span className="text-foreground font-medium">Cover the quantity you want to find</span> with your thumb — the remaining symbols show how to calculate it.
            </p>
            <div className="bg-yellow-400/5 border border-yellow-400/20 rounded-xl p-3 text-xs text-muted-foreground space-y-1">
              <div className="text-foreground font-semibold mb-1">How to use it:</div>
              <div className="flex gap-2 items-start"><span className="text-yellow-400">1.</span><span>Draw the triangle with <span className="font-mono text-yellow-300">V</span> at top, <span className="font-mono text-blue-300">I</span> and <span className="font-mono text-orange-300">R</span> side by side at the bottom.</span></div>
              <div className="flex gap-2 items-start"><span className="text-yellow-400">2.</span><span>Decide which quantity you want to find.</span></div>
              <div className="flex gap-2 items-start"><span className="text-yellow-400">3.</span><span>Cover that letter with your thumb.</span></div>
              <div className="flex gap-2 items-start"><span className="text-yellow-400">4.</span><span>The remaining two symbols show the formula: side by side = multiply; one above the other = divide.</span></div>
            </div>
          </div>
          {/* Coloured triangle SVG */}
          <div className="flex justify-center">
            <svg viewBox="0 0 160 140" className="w-40 h-auto" aria-label="Ohm's Law triangle with V top (teal), I bottom-left (orange), R bottom-right (purple)">
              {/* Top triangle — V */}
              <polygon points="80,5 120,70 40,70" fill="#0d9488" fillOpacity="0.7" stroke="#14b8a6" strokeWidth="2"/>
              <text x="80" y="47" textAnchor="middle" fill="#f0fdfa" fontSize="28" fontWeight="bold" fontFamily="monospace">V</text>
              {/* Divider line */}
              <line x1="38" y1="70" x2="122" y2="70" stroke="#f8fafc" strokeWidth="2"/>
              {/* Bottom-left — I */}
              <polygon points="40,70 80,70 60,105" fill="#fbbf24" fillOpacity="0.7" stroke="#f59e0b" strokeWidth="2"/>
              <text x="60" y="94" textAnchor="middle" fill="#1c1917" fontSize="22" fontWeight="bold" fontFamily="monospace">I</text>
              {/* Bottom-right — R */}
              <polygon points="80,70 120,70 100,105" fill="#a855f7" fillOpacity="0.7" stroke="#9333ea" strokeWidth="2"/>
              <text x="100" y="94" textAnchor="middle" fill="#faf5ff" fontSize="22" fontWeight="bold" fontFamily="monospace">R</text>
              {/* Outer border */}
              <polygon points="80,5 120,105 40,105" fill="none" stroke="#e2e8f0" strokeWidth="2.5" strokeLinejoin="round"/>
              {/* Thumb hint */}
              <ellipse cx="80" cy="47" rx="14" ry="14" fill="none" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.6"/>
              <text x="80" y="128" textAnchor="middle" fill="#6b7280" fontSize="7">Cover the unknown</text>
            </svg>
          </div>
        </div>
      </div>

      {/* ── Transposing Formula ── */}
      <div className="bg-card border border-border rounded-2xl p-5 space-y-4">
        <div className="flex items-center gap-2">
          <Calculator className="w-4 h-4 text-yellow-400" />
          <h2 className="font-semibold text-foreground">Transposing the Formula</h2>
        </div>
        <p className="text-sm text-muted-foreground">Each position produces a different transposition. The circled symbol is what is being solved for.</p>
        <div className="grid grid-cols-3 gap-4">
          {/* V = I × R */}
          <div className="flex flex-col items-center gap-3">
            <svg viewBox="0 0 120 100" className="w-28 h-auto" aria-label="Triangle showing V = I × R — V is circled">
              <polygon points="60,4 112,96 8,96" fill="none" stroke="#e2e8f0" strokeWidth="2.5" strokeLinejoin="round"/>
              <line x1="8" y1="66" x2="112" y2="66" stroke="#e2e8f0" strokeWidth="1.5"/>
              {/* Top yellow — V covered */}
              <polygon points="60,4 90,66 30,66" fill="#fbbf24" fillOpacity="0.5"/>
              {/* Bottom left pink — I */}
              <polygon points="8,96 60,96 34,66" fill="#f9a8d4" fillOpacity="0.5"/>
              {/* Bottom right purple — R */}
              <polygon points="60,96 112,96 86,66" fill="#c4b5fd" fillOpacity="0.5"/>
              {/* Labels */}
              <text x="60" y="44" textAnchor="middle" fill="#fef3c7" fontSize="18" fontWeight="bold" fontFamily="monospace">V</text>
              <text x="38" y="88" textAnchor="middle" fill="#1c1917" fontSize="16" fontWeight="bold" fontFamily="monospace">I</text>
              <text x="82" y="88" textAnchor="middle" fill="#1c1917" fontSize="16" fontWeight="bold" fontFamily="monospace">R</text>
              {/* Circle around V */}
              <circle cx="60" cy="40" r="13" fill="none" stroke="#fbbf24" strokeWidth="2"/>
            </svg>
            <div className="text-center space-y-1">
              <div className="flex items-center justify-center gap-1">
                <span className="w-5 h-5 rounded-full border-2 border-yellow-400 text-yellow-300 text-xs flex items-center justify-center font-bold">V</span>
                <span className="text-foreground font-mono text-sm font-bold">= I × R</span>
              </div>
            </div>
          </div>
          {/* I = V ÷ R */}
          <div className="flex flex-col items-center gap-3">
            <svg viewBox="0 0 120 100" className="w-28 h-auto" aria-label="Triangle showing I = V / R — I is circled">
              <polygon points="60,4 112,96 8,96" fill="none" stroke="#e2e8f0" strokeWidth="2.5" strokeLinejoin="round"/>
              <line x1="8" y1="66" x2="112" y2="66" stroke="#e2e8f0" strokeWidth="1.5"/>
              <polygon points="60,4 90,66 30,66" fill="#fbbf24" fillOpacity="0.5"/>
              <polygon points="8,96 60,96 34,66" fill="#f9a8d4" fillOpacity="0.5"/>
              <polygon points="60,96 112,96 86,66" fill="#c4b5fd" fillOpacity="0.5"/>
              <text x="60" y="44" textAnchor="middle" fill="#fef3c7" fontSize="18" fontWeight="bold" fontFamily="monospace">V</text>
              <text x="38" y="88" textAnchor="middle" fill="#1c1917" fontSize="16" fontWeight="bold" fontFamily="monospace">I</text>
              <text x="82" y="88" textAnchor="middle" fill="#1c1917" fontSize="16" fontWeight="bold" fontFamily="monospace">R</text>
              {/* Circle around I */}
              <circle cx="38" cy="84" r="13" fill="none" stroke="#f9a8d4" strokeWidth="2"/>
            </svg>
            <div className="text-center space-y-1">
              <div className="flex items-center justify-center gap-1">
                <span className="w-5 h-5 rounded-full border-2 border-pink-300 text-pink-300 text-xs flex items-center justify-center font-bold">I</span>
                <span className="text-foreground font-mono text-sm font-bold">= V / R</span>
              </div>
            </div>
          </div>
          {/* R = V ÷ I */}
          <div className="flex flex-col items-center gap-3">
            <svg viewBox="0 0 120 100" className="w-28 h-auto" aria-label="Triangle showing R = V / I — R is circled">
              <polygon points="60,4 112,96 8,96" fill="none" stroke="#e2e8f0" strokeWidth="2.5" strokeLinejoin="round"/>
              <line x1="8" y1="66" x2="112" y2="66" stroke="#e2e8f0" strokeWidth="1.5"/>
              <polygon points="60,4 90,66 30,66" fill="#fbbf24" fillOpacity="0.5"/>
              <polygon points="8,96 60,96 34,66" fill="#f9a8d4" fillOpacity="0.5"/>
              <polygon points="60,96 112,96 86,66" fill="#c4b5fd" fillOpacity="0.5"/>
              <text x="60" y="44" textAnchor="middle" fill="#fef3c7" fontSize="18" fontWeight="bold" fontFamily="monospace">V</text>
              <text x="38" y="88" textAnchor="middle" fill="#1c1917" fontSize="16" fontWeight="bold" fontFamily="monospace">I</text>
              <text x="82" y="88" textAnchor="middle" fill="#1c1917" fontSize="16" fontWeight="bold" fontFamily="monospace">R</text>
              {/* Circle around R */}
              <circle cx="82" cy="84" r="13" fill="none" stroke="#c4b5fd" strokeWidth="2"/>
            </svg>
            <div className="text-center space-y-1">
              <div className="flex items-center justify-center gap-1">
                <span className="w-5 h-5 rounded-full border-2 border-violet-300 text-violet-300 text-xs flex items-center justify-center font-bold">R</span>
                <span className="text-foreground font-mono text-sm font-bold">= V / I</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Quantities, Symbols & Units ── */}
      <div className="bg-card border border-border rounded-2xl p-5 space-y-4">
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-yellow-400" />
          <h2 className="font-semibold text-foreground">Quantities, Symbols &amp; Units</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-4 text-muted-foreground font-medium">Quantity</th>
                <th className="text-left py-2 pr-4 text-muted-foreground font-medium">Symbol</th>
                <th className="text-left py-2 pr-4 text-muted-foreground font-medium">Unit</th>
                <th className="text-left py-2 pr-4 text-muted-foreground font-medium">Unit Symbol</th>
                <th className="text-left py-2 text-muted-foreground font-medium">Named after</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              {[
                { q: "Voltage / EMF", s: "V or E", u: "Volt", us: "V", n: "Alessandro Volta (1745–1827)" },
                { q: "Current", s: "I", u: "Ampere", us: "A", n: "André-Marie Ampère (1775–1836)" },
                { q: "Resistance", s: "R", u: "Ohm", us: "Ω", n: "Georg Simon Ohm (1789–1854)" },
                { q: "Power", s: "P", u: "Watt", us: "W", n: "James Watt (1736–1819)" },
              ].map(({ q, s, u, us, n }) => (
                <tr key={q}>
                  <td className="py-2 pr-4 text-foreground font-medium">{q}</td>
                  <td className="py-2 pr-4 font-mono text-yellow-300">{s}</td>
                  <td className="py-2 pr-4 text-muted-foreground">{u}</td>
                  <td className="py-2 pr-4 font-mono text-blue-300">{us}</td>
                  <td className="py-2 text-muted-foreground">{n}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ── Applying Ohm's Law — Circuit Examples ── */}
      <div className="bg-card border border-border rounded-2xl p-5 space-y-5">
        <div className="flex items-center gap-2">
          <Calculator className="w-4 h-4 text-yellow-400" />
          <h2 className="font-semibold text-foreground">Applying Ohm's Law — Circuit Examples</h2>
        </div>

        {/* Example 1 — Find Current */}
        <div className="bg-blue-400/5 border border-blue-400/25 rounded-xl p-4 space-y-3">
          <div className="text-sm font-semibold text-foreground">Example 1 — Determine the current flow</div>
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Circuit SVG */}
            <svg viewBox="0 0 240 140" className="w-56 h-auto flex-shrink-0" aria-label="Circuit: 12V battery connected to 3 ohm lamp, find I">
              {/* Wires */}
              <rect x="40" y="20" width="160" height="100" rx="4" fill="none" stroke="#6b7280" strokeWidth="2"/>
              {/* Battery — left side */}
              <line x1="40" y1="50" x2="40" y2="90" stroke="#fbbf24" strokeWidth="3"/>
              <line x1="32" y1="58" x2="48" y2="58" stroke="#fbbf24" strokeWidth="2.5"/>
              <line x1="35" y1="66" x2="45" y2="66" stroke="#fbbf24" strokeWidth="1.5"/>
              <line x1="32" y1="74" x2="48" y2="74" stroke="#fbbf24" strokeWidth="2.5"/>
              <line x1="35" y1="82" x2="45" y2="82" stroke="#fbbf24" strokeWidth="1.5"/>
              <text x="28" y="52" fill="#fbbf24" fontSize="7" textAnchor="end">+</text>
              <text x="28" y="88" fill="#fbbf24" fontSize="7" textAnchor="end">–</text>
              <text x="18" y="72" fill="#fbbf24" fontSize="7" textAnchor="middle">E=12V</text>
              {/* Lamp — right side */}
              <circle cx="200" cy="70" r="14" fill="none" stroke="#fde047" strokeWidth="1.5"/>
              <line x1="194" y1="64" x2="206" y2="76" stroke="#fde047" strokeWidth="1.2"/>
              <line x1="206" y1="64" x2="194" y2="76" stroke="#fde047" strokeWidth="1.2"/>
              <text x="222" y="62" fill="#fde047" fontSize="7">Lamp</text>
              <text x="222" y="72" fill="#fde047" fontSize="7">R = 3Ω</text>
              {/* Current arrows */}
              <text x="120" y="14" fill="#60a5fa" fontSize="7" textAnchor="middle">I = ???</text>
              <text x="120" y="132" fill="#60a5fa" fontSize="7" textAnchor="middle">I = ???</text>
              {/* Arrow on top wire */}
              <polygon points="115,20 121,16 121,24" fill="#60a5fa"/>
              <polygon points="125,120 119,124 119,116" fill="#60a5fa"/>
            </svg>
            {/* Working */}
            <div className="space-y-2 flex-1">
              <div className="font-mono text-blue-300 text-lg font-bold">I = V / R</div>
              <div className="font-mono text-sm text-muted-foreground">I = 12 / 3</div>
              <div className="font-mono text-2xl font-bold text-blue-300">= 4 A</div>
              <div className="text-xs text-muted-foreground">Battery 12 V, lamp resistance 3 Ω → current = 4 A</div>
            </div>
          </div>
        </div>

        {/* Example 2 — Find Resistance */}
        <div className="bg-orange-400/5 border border-orange-400/25 rounded-xl p-4 space-y-3">
          <div className="text-sm font-semibold text-foreground">Example 2 — Determine the resistance</div>
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Circuit SVG */}
            <svg viewBox="0 0 240 140" className="w-56 h-auto flex-shrink-0" aria-label="Circuit: 12V battery, I=250mA, find lamp resistance">
              <rect x="40" y="20" width="160" height="100" rx="4" fill="none" stroke="#6b7280" strokeWidth="2"/>
              {/* Battery */}
              <line x1="40" y1="50" x2="40" y2="90" stroke="#fbbf24" strokeWidth="3"/>
              <line x1="32" y1="58" x2="48" y2="58" stroke="#fbbf24" strokeWidth="2.5"/>
              <line x1="35" y1="66" x2="45" y2="66" stroke="#fbbf24" strokeWidth="1.5"/>
              <line x1="32" y1="74" x2="48" y2="74" stroke="#fbbf24" strokeWidth="2.5"/>
              <line x1="35" y1="82" x2="45" y2="82" stroke="#fbbf24" strokeWidth="1.5"/>
              <text x="28" y="52" fill="#fbbf24" fontSize="7" textAnchor="end">+</text>
              <text x="28" y="88" fill="#fbbf24" fontSize="7" textAnchor="end">–</text>
              <text x="18" y="72" fill="#fbbf24" fontSize="7" textAnchor="middle">E=12V</text>
              {/* Lamp */}
              <circle cx="200" cy="70" r="14" fill="none" stroke="#fb923c" strokeWidth="1.5"/>
              <line x1="194" y1="64" x2="206" y2="76" stroke="#fb923c" strokeWidth="1.2"/>
              <line x1="206" y1="64" x2="194" y2="76" stroke="#fb923c" strokeWidth="1.2"/>
              <text x="222" y="62" fill="#fb923c" fontSize="7">Lamp</text>
              <text x="222" y="72" fill="#fb923c" fontSize="7">R = ?</text>
              {/* Current labels */}
              <text x="120" y="14" fill="#60a5fa" fontSize="7" textAnchor="middle">I = 250 mA</text>
              <text x="120" y="132" fill="#60a5fa" fontSize="7" textAnchor="middle">I = 250 mA</text>
              <polygon points="115,20 121,16 121,24" fill="#60a5fa"/>
              <polygon points="125,120 119,124 119,116" fill="#60a5fa"/>
            </svg>
            {/* Working */}
            <div className="space-y-2 flex-1">
              <div className="text-xs text-muted-foreground">Convert: 250 mA = 0.25 A</div>
              <div className="font-mono text-orange-300 text-lg font-bold">R = V / I</div>
              <div className="font-mono text-sm text-muted-foreground">R = 12 / 0.25</div>
              <div className="font-mono text-2xl font-bold text-orange-300">= 48 Ω</div>
            </div>
          </div>
        </div>

        {/* Example 3 — Table exercise */}
        <div className="bg-muted/20 border border-border rounded-xl p-4 space-y-3">
          <div className="text-sm font-semibold text-foreground">Practice — Find the missing values</div>
          <div className="overflow-x-auto">
            <table className="text-sm w-full max-w-xs">
              <thead>
                <tr>
                  <th className="bg-teal-500/20 text-teal-300 font-bold px-4 py-2 text-center border border-border">Voltage</th>
                  <th className="bg-orange-400/20 text-orange-300 font-bold px-4 py-2 text-center border border-border">Current</th>
                  <th className="bg-violet-500/20 text-violet-300 font-bold px-4 py-2 text-center border border-border">Resistance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="bg-teal-500/10 font-bold text-teal-200 px-4 py-2 text-center border border-border">50 V</td>
                  <td className="bg-orange-400/10 font-bold text-orange-200 px-4 py-2 text-center border border-border">5 A</td>
                  <td className="bg-violet-500/10 text-violet-400 px-4 py-2 text-center border border-border italic">?</td>
                </tr>
                <tr>
                  <td className="bg-teal-500/10 font-bold text-teal-200 px-4 py-2 text-center border border-border">240 V</td>
                  <td className="bg-orange-400/10 text-orange-400 px-4 py-2 text-center border border-border italic">?</td>
                  <td className="bg-violet-500/10 font-bold text-violet-200 px-4 py-2 text-center border border-border">16 Ω</td>
                </tr>
                <tr>
                  <td className="bg-teal-500/10 text-teal-400 px-4 py-2 text-center border border-border italic">?</td>
                  <td className="bg-orange-400/10 font-bold text-orange-200 px-4 py-2 text-center border border-border">200 A</td>
                  <td className="bg-violet-500/10 font-bold text-violet-200 px-4 py-2 text-center border border-border">2 Ω</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* Answers reveal */}
          <div className="bg-muted/30 rounded-xl p-3 text-xs space-y-1 text-muted-foreground">
            <div className="text-foreground font-semibold mb-1">Answers:</div>
            <div className="font-mono">Row 1: R = V/I = 50/5 = <span className="text-violet-300 font-bold">10 Ω</span></div>
            <div className="font-mono">Row 2: I = V/R = 240/16 = <span className="text-orange-300 font-bold">15 A</span></div>
            <div className="font-mono">Row 3: V = I×R = 200×2 = <span className="text-teal-300 font-bold">400 V</span></div>
          </div>
        </div>
      </div>

      {/* ── Conservation of Energy ── */}
      <div className="bg-card border border-border rounded-2xl p-5 space-y-4">
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-green-400" />
          <h2 className="font-semibold text-foreground">The Conservation of Energy</h2>
        </div>
        <div className="bg-green-500/10 border border-green-400/20 rounded-xl p-4 text-center space-y-2">
          <p className="text-lg font-bold text-green-300">Energy Cannot Be Created or Destroyed</p>
          <p className="text-sm text-muted-foreground font-medium">It just changes forms.</p>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Electricity is the most convenient form of energy. Energy can take many different forms — kinetic, potential, heat, sound, light, chemical, and electrical. They are all interchangeable. During these transformations the total amount of energy after the change is the same as the energy before the change.
        </p>
        {/* Energy forms grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
          {[
            { label: "Kinetic", icon: "🏃", colour: "text-blue-300", bg: "bg-blue-400/5", border: "border-blue-400/20" },
            { label: "Potential", icon: "⬆️", colour: "text-yellow-300", bg: "bg-yellow-400/5", border: "border-yellow-400/20" },
            { label: "Heat", icon: "🌡️", colour: "text-orange-300", bg: "bg-orange-400/5", border: "border-orange-400/20" },
            { label: "Sound", icon: "🔊", colour: "text-green-300", bg: "bg-green-400/5", border: "border-green-400/20" },
            { label: "Light", icon: "💡", colour: "text-yellow-300", bg: "bg-yellow-400/5", border: "border-yellow-400/20" },
            { label: "Chemical", icon: "⚗️", colour: "text-violet-300", bg: "bg-violet-400/5", border: "border-violet-400/20" },
          ].map(({ label, icon, colour, bg, border }) => (
            <div key={label} className={`${bg} border ${border} rounded-xl p-2 text-center space-y-1`}>
              <div className="text-xl">{icon}</div>
              <div className={`text-xs font-medium ${colour}`}>{label}</div>
            </div>
          ))}
        </div>
        {/* Cannonball arc SVG — illustrating kinetic/potential/heat chain */}
        <div className="bg-black/20 rounded-xl p-4">
          <p className="text-xs text-muted-foreground text-center mb-2">Energy transformations during a cannonball's flight</p>
          <svg viewBox="0 0 400 90" className="w-full" aria-label="Energy transformation arc from chemical through kinetic+potential to heat">
            {/* Ground */}
            <line x1="10" y1="80" x2="390" y2="80" stroke="#6b7280" strokeWidth="1.5"/>
            {/* Arc path */}
            <path d="M30,78 Q200,5 370,78" fill="none" stroke="#4b5563" strokeWidth="1.5" strokeDasharray="5 3"/>
            {/* Labels along arc */}
            <text x="30" y="70" fill="#a78bfa" fontSize="8" textAnchor="middle">CHEMICAL</text>
            <text x="30" y="79" fill="#a78bfa" fontSize="8" textAnchor="middle">ENERGY</text>
            <text x="110" y="42" fill="#d1d5db" fontSize="7" textAnchor="middle">KINETIC ENERGY</text>
            <text x="110" y="51" fill="#d1d5db" fontSize="7" textAnchor="middle">+ POTENTIAL ENERGY</text>
            <text x="200" y="20" fill="#d1d5db" fontSize="7" textAnchor="middle">LESS KINETIC ENERGY</text>
            <text x="200" y="29" fill="#d1d5db" fontSize="7" textAnchor="middle">+ MORE POTENTIAL ENERGY</text>
            <text x="370" y="66" fill="#fb923c" fontSize="7" textAnchor="middle">→ HEAT</text>
            <text x="370" y="75" fill="#fb923c" fontSize="7" textAnchor="middle">(kinetic energy</text>
            <text x="370" y="84" fill="#fb923c" fontSize="7" textAnchor="middle">of molecules)</text>
            {/* Cannon */}
            <rect x="10" y="68" width="20" height="10" rx="2" fill="#6b7280"/>
            <rect x="8" y="66" width="8" height="14" rx="2" fill="#4b5563"/>
          </svg>
        </div>
      </div>

      {/* ── Energy Conversion ── */}
      <div className="bg-card border border-border rounded-2xl p-5 space-y-4">
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-yellow-400" />
          <h2 className="font-semibold text-foreground">Energy Conversion</h2>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Electrical energy can be converted to and from other energy forms. The device that performs this conversion is the load in the circuit.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* To electrical */}
          <div className="bg-yellow-400/5 border border-yellow-400/20 rounded-xl p-4 space-y-2">
            <div className="text-xs font-semibold text-yellow-300 uppercase tracking-widest">→ Electrical Energy (from)</div>
            <div className="space-y-1.5 text-xs text-muted-foreground">
              {[
                { from: "Chemical", via: "Battery / cell", icon: "⚗️" },
                { from: "Mechanical", via: "Generator / dynamo", icon: "⚙️" },
                { from: "Thermal", via: "Thermocouple", icon: "🌡️" },
                { from: "Radiant (light)", via: "Solar cell / photovoltaic", icon: "☀️" },
                { from: "Sound", via: "Microphone", icon: "🎤" },
              ].map(({ from, via, icon }) => (
                <div key={from} className="flex items-center gap-2">
                  <span>{icon}</span>
                  <span className="text-foreground font-medium">{from}</span>
                  <span className="text-muted-foreground">→</span>
                  <span>{via}</span>
                </div>
              ))}
            </div>
          </div>
          {/* From electrical */}
          <div className="bg-green-400/5 border border-green-400/20 rounded-xl p-4 space-y-2">
            <div className="text-xs font-semibold text-green-300 uppercase tracking-widest">Electrical Energy → (to)</div>
            <div className="space-y-1.5 text-xs text-muted-foreground">
              {[
                { to: "Mechanical", via: "Motor / fan", icon: "⚙️" },
                { to: "Thermal (heat)", via: "Heater / element", icon: "🔥" },
                { to: "Light", via: "Lamp / LED / bulb", icon: "💡" },
                { to: "Sound", via: "Speaker / buzzer", icon: "🔊" },
                { to: "Chemical", via: "Electrolysis / charging", icon: "⚗️" },
              ].map(({ to, via, icon }) => (
                <div key={to} className="flex items-center gap-2">
                  <span>{icon}</span>
                  <span className="text-foreground font-medium">{to}</span>
                  <span className="text-muted-foreground">→</span>
                  <span>{via}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Energy & Work — James Prescott Joule ── */}
      <div className="bg-card border border-border rounded-2xl p-5 space-y-4">
        <div className="flex items-center gap-2">
          <FlameKindling className="w-4 h-4 text-amber-400" />
          <h2 className="font-semibold text-foreground">Energy &amp; Work</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            { label: "Energy", text: "The ability to do work.", colour: "text-yellow-300", bg: "bg-yellow-400/5", border: "border-yellow-400/20" },
            { label: "Work", text: "Work is done when energy is transformed from one form to another.", colour: "text-green-300", bg: "bg-green-400/5", border: "border-green-400/20" },
            { label: "Unit", text: "The unit of energy and work is the Joule (J). Named after James Prescott Joule.", colour: "text-amber-300", bg: "bg-amber-400/5", border: "border-amber-400/20" },
          ].map(({ label, text, colour, bg, border }) => (
            <div key={label} className={`${bg} border ${border} rounded-xl p-3 space-y-1`}>
              <div className={`text-sm font-bold ${colour}`}>{label}</div>
              <p className="text-xs text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
        <div className="bg-amber-400/5 border border-amber-400/20 rounded-xl p-4 space-y-3">
          <div className="text-xs font-semibold text-amber-300 uppercase tracking-widest">James Prescott Joule (1818–1889)</div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            English physicist who studied the relationship between heat and mechanical work. His experiments established that heat is a form of energy, directly leading to the Law of Conservation of Energy. The SI unit of energy, the joule, is named in his honour.
          </p>
          <div className="font-mono text-xs bg-background/40 rounded-xl px-3 py-2 space-y-1">
            <div className="text-foreground font-semibold">Work formula:</div>
            <div className="text-amber-300 text-sm font-bold">E = F × d</div>
            <div className="text-muted-foreground">Energy (J) = Force (N) × distance (m)</div>
            <div className="text-muted-foreground">where Force = Mass × gravity = m × 9.8 N/kg</div>
          </div>
          {/* Steam turbine → generator schematic */}
          <svg viewBox="0 0 380 85" className="w-full" aria-label="Energy chain: fuel burns → boiler → steam → turbine → generator → electrical energy">
            {/* Boxes */}
            {[
              { x: 5, label: "Fuel", sub: "burns", colour: "#fb923c" },
              { x: 75, label: "Boiler", sub: "water boils", colour: "#fbbf24" },
              { x: 150, label: "Turbine", sub: "steam drives", colour: "#4ade80" },
              { x: 230, label: "Generator", sub: "coils + magnet", colour: "#60a5fa" },
              { x: 310, label: "Electrical", sub: "Energy (J)", colour: "#f0abfc" },
            ].map(({ x, label, sub, colour }) => (
              <g key={label}>
                <rect x={x} y="20" width="60" height="36" rx="4" fill="none" stroke={colour} strokeWidth="1.5"/>
                <text x={x + 30} y="35" textAnchor="middle" fill={colour} fontSize="8" fontWeight="bold">{label}</text>
                <text x={x + 30} y="47" textAnchor="middle" fill="#94a3b8" fontSize="7">{sub}</text>
              </g>
            ))}
            {/* Arrows between boxes */}
            {[65, 140, 215, 295].map((x) => (
              <g key={x}>
                <line x1={x} y1="38" x2={x + 8} y2="38" stroke="#6b7280" strokeWidth="1.5" markerEnd="url(#arrGrey)"/>
              </g>
            ))}
            <defs>
              <marker id="arrGrey" markerWidth="5" markerHeight="5" refX="3" refY="2.5" orient="auto">
                <path d="M0,0 L5,2.5 L0,5 Z" fill="#6b7280"/>
              </marker>
            </defs>
            <text x="190" y="78" textAnchor="middle" fill="#6b7280" fontSize="7">Chemical → Thermal → Mechanical → Electrical</text>
          </svg>
        </div>
      </div>

      {/* ── Forklift Example — Work Calculation ── */}
      <div className="bg-card border border-border rounded-2xl p-5 space-y-4">
        <div className="flex items-center gap-2">
          <Calculator className="w-4 h-4 text-green-400" />
          <h2 className="font-semibold text-foreground">Worked Example — Calculating Work Done</h2>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          An electric forklift raises a 200 kg load through a distance of 2 metres against the force of gravity (9.8 m/s²).
        </p>
        {/* Forklift SVG */}
        <div className="bg-black/20 rounded-xl p-4">
          <svg viewBox="0 0 360 130" className="w-full max-w-md mx-auto block" aria-label="Forklift raising a 200kg load 2 metres">
            {/* Ground */}
            <line x1="10" y1="120" x2="350" y2="120" stroke="#6b7280" strokeWidth="1.5"/>
            {/* Left forklift — load at bottom */}
            <rect x="20" y="80" width="60" height="38" rx="4" fill="#4b5563" stroke="#6b7280" strokeWidth="1.5"/>
            <rect x="50" y="60" width="4" height="60" fill="#6b7280"/>
            <rect x="30" y="75" width="28" height="20" rx="2" fill="#92400e"/>
            <text x="44" y="88" textAnchor="middle" fill="#fef3c7" fontSize="7" fontWeight="bold">200 KG</text>
            {/* Wheels */}
            <circle cx="33" cy="120" r="7" fill="#374151" stroke="#6b7280" strokeWidth="1"/>
            <circle cx="67" cy="120" r="7" fill="#374151" stroke="#6b7280" strokeWidth="1"/>
            {/* Right forklift — load raised */}
            <rect x="220" y="80" width="60" height="38" rx="4" fill="#4b5563" stroke="#6b7280" strokeWidth="1.5"/>
            <rect x="250" y="20" width="4" height="100" fill="#6b7280"/>
            <rect x="230" y="18" width="28" height="20" rx="2" fill="#92400e"/>
            <text x="244" y="31" textAnchor="middle" fill="#fef3c7" fontSize="7" fontWeight="bold">200 KG</text>
            <circle cx="233" cy="120" r="7" fill="#374151" stroke="#6b7280" strokeWidth="1"/>
            <circle cx="267" cy="120" r="7" fill="#374151" stroke="#6b7280" strokeWidth="1"/>
            {/* Height arrow */}
            <line x1="300" y1="37" x2="300" y2="120" stroke="#4ade80" strokeWidth="1.5" markerEnd="url(#arrUpD)" markerStart="url(#arrUpU)"/>
            <defs>
              <marker id="arrUpD" markerWidth="5" markerHeight="5" refX="2.5" refY="5" orient="auto">
                <path d="M0,0 L5,0 L2.5,5 Z" fill="#4ade80"/>
              </marker>
              <marker id="arrUpU" markerWidth="5" markerHeight="5" refX="2.5" refY="0" orient="auto">
                <path d="M0,5 L5,5 L2.5,0 Z" fill="#4ade80"/>
              </marker>
            </defs>
            <text x="316" y="82" fill="#4ade80" fontSize="9">2 metres</text>
          </svg>
        </div>
        {/* Calculation */}
        <div className="bg-green-400/5 border border-green-400/20 rounded-xl p-4 space-y-2 font-mono text-sm">
          <div className="text-muted-foreground">Step 1 — Calculate force:</div>
          <div className="text-foreground">F = M × g = 200 × 9.8 = <span className="text-green-300 font-bold">1,960 N (1.96 kN)</span></div>
          <div className="text-muted-foreground mt-2">Step 2 — Calculate work done (energy):</div>
          <div className="text-foreground">E = F × d = 1,960 × 2 = <span className="text-green-300 font-bold">3,920 J (3.92 kJ)</span></div>
        </div>
      </div>

      {/* ── Potential & Kinetic Energy ── */}
      <div className="bg-card border border-border rounded-2xl p-5 space-y-4">
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-yellow-400" />
          <h2 className="font-semibold text-foreground">Potential &amp; Kinetic Energy</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-yellow-400/5 border border-yellow-400/20 rounded-xl p-4 space-y-3">
            <div className="text-sm font-bold text-yellow-300">Potential Energy</div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Energy stored due to position or condition. The 200 kg load raised to a height of 2 m stores <span className="text-foreground font-medium">3.92 kJ</span> of potential energy (gravitational). It has the <em>potential</em> to do work if released.
            </p>
            <div className="font-mono text-xs bg-background/40 rounded px-2 py-1 text-yellow-300">EP = m × g × h</div>
          </div>
          <div className="bg-blue-400/5 border border-blue-400/20 rounded-xl p-4 space-y-3">
            <div className="text-sm font-bold text-blue-300">Kinetic Energy</div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Energy of motion. When the raised load falls, all 3.92 kJ of potential energy converts to kinetic energy (plus a small amount of heat from air resistance). At the instant of impact, kinetic energy = original potential energy.
            </p>
            <div className="font-mono text-xs bg-background/40 rounded px-2 py-1 text-blue-300">EK = ½ × m × v²</div>
          </div>
        </div>
        <div className="bg-muted/20 border border-border rounded-xl p-3 text-xs text-muted-foreground text-center">
          Both forms are interchangeable — this is the Law of Conservation of Energy in action.
          <span className="text-foreground font-medium block mt-1">Potential energy raised + Kinetic energy at impact = same total (3.92 kJ)</span>
        </div>
      </div>

      {/* ── Rate of Doing Work ── */}
      <div className="bg-card border border-border rounded-2xl p-5 space-y-4">
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-green-400" />
          <h2 className="font-semibold text-foreground">Rate of Doing Work</h2>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Two people can do the same amount of work (move the same load the same distance) yet use different amounts of <span className="text-foreground font-medium">power</span> depending on how quickly they do it.
        </p>
        <div className="bg-muted/20 border border-border rounded-xl p-4 space-y-3">
          <div className="text-sm font-semibold text-foreground">Scenario</div>
          <p className="text-xs text-muted-foreground">Two people of equal weight are exercising:</p>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-blue-400/5 border border-blue-400/20 rounded-xl p-3 space-y-1 text-center">
              <div className="text-2xl">🚶</div>
              <div className="text-xs font-bold text-blue-300">Person 1 — Walks</div>
              <div className="text-xs text-muted-foreground">1 km in <span className="text-foreground font-medium">20 minutes</span></div>
            </div>
            <div className="bg-orange-400/5 border border-orange-400/20 rounded-xl p-3 space-y-1 text-center">
              <div className="text-2xl">🏃</div>
              <div className="text-xs font-bold text-orange-300">Person 2 — Runs</div>
              <div className="text-xs text-muted-foreground">1 km in <span className="text-foreground font-medium">5 minutes</span></div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-green-400/5 border border-green-400/20 rounded-xl p-3 space-y-1">
            <div className="text-xs font-bold text-green-300">Q. Who did the most work?</div>
            <div className="text-xs text-muted-foreground">Both did the <span className="text-foreground font-medium">same amount of work</span> — they moved the same mass the same distance against gravity.</div>
          </div>
          <div className="bg-green-400/5 border border-green-400/20 rounded-xl p-3 space-y-1">
            <div className="text-xs font-bold text-green-300">Q. Who used the most energy?</div>
            <div className="text-xs text-muted-foreground">Both used the <span className="text-foreground font-medium">same amount of energy</span>.</div>
          </div>
        </div>
        <div className="bg-green-500/10 border border-green-400/20 rounded-xl p-4 space-y-1">
          <p className="text-sm text-muted-foreground">
            The runner took less <span className="text-green-300 font-semibold">time</span> to do so, and therefore applied more <span className="text-green-300 font-semibold">power</span>.
          </p>
          <div className="font-mono text-sm text-foreground font-bold mt-2">Power = Energy ÷ Time</div>
          <div className="font-mono text-xs text-muted-foreground">P = E / t &nbsp;|&nbsp; Unit: Watts (W) = Joules per second (J/s)</div>
        </div>
      </div>

      {/* ── Electrical Power ── */}
      <div className="bg-card border border-border rounded-2xl p-5 space-y-4">
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-green-400" />
          <h2 className="font-semibold text-foreground">Electrical Power</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            { label: "Energy", text: "The ability to do work.", colour: "text-yellow-300", bg: "bg-yellow-400/5", border: "border-yellow-400/20" },
            { label: "Work", text: "Work is done when energy is transformed.", colour: "text-blue-300", bg: "bg-blue-400/5", border: "border-blue-400/20" },
            { label: "Power", text: "Power is the rate at which work is done. Unit = Watt (W).", colour: "text-green-300", bg: "bg-green-400/5", border: "border-green-400/20" },
          ].map(({ label, text, colour, bg, border }) => (
            <div key={label} className={`${bg} border ${border} rounded-xl p-3 space-y-1 text-center`}>
              <div className={`text-sm font-bold ${colour}`}>{label}</div>
              <p className="text-xs text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
          <div className="flex gap-3 items-start bg-green-400/5 border border-green-400/20 rounded-xl p-3">
            <span className="mt-0.5 w-2 h-2 rounded-full flex-shrink-0 bg-green-400" />
            <p><span className="text-green-300 font-semibold">Resistive load</span> — converts electrical energy entirely into heat (e.g. a heating element, incandescent lamp).</p>
          </div>
          <div className="flex gap-3 items-start bg-blue-400/5 border border-blue-400/20 rounded-xl p-3">
            <span className="mt-0.5 w-2 h-2 rounded-full flex-shrink-0 bg-blue-400" />
            <p><span className="text-blue-300 font-semibold">Motor load</span> — converts electrical energy into mechanical work (rotation), with some energy lost as heat due to winding resistance.</p>
          </div>
        </div>
      </div>

      {/* ── Power Triangle ── */}
      <div className="bg-card border border-border rounded-2xl p-5 space-y-5">
        <div className="flex items-center gap-2">
          <Calculator className="w-4 h-4 text-green-400" />
          <h2 className="font-semibold text-foreground">Watt's Law — The Power Triangle</h2>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Watt's Law states that Power equals Current multiplied by Voltage. The power triangle works the same way as the Ohm's Law triangle — cover the quantity you need to find.
        </p>
        <div className="flex flex-col md:flex-row gap-6 items-center">
          {/* Coloured power triangle */}
          <div className="flex-shrink-0">
            <svg viewBox="0 0 160 140" className="w-40 h-auto" aria-label="Power triangle — P top (green), I bottom-left (red), V bottom-right (yellow)">
              <polygon points="80,5 120,105 40,105" fill="none" stroke="#e2e8f0" strokeWidth="2.5" strokeLinejoin="round"/>
              <line x1="38" y1="72" x2="122" y2="72" stroke="#e2e8f0" strokeWidth="1.5"/>
              {/* Top — P */}
              <polygon points="80,5 108,72 52,72" fill="#4ade80" fillOpacity="0.6"/>
              {/* Bottom left — I */}
              <polygon points="40,105 80,105 60,72" fill="#f87171" fillOpacity="0.6"/>
              {/* Bottom right — V */}
              <polygon points="80,105 120,105 100,72" fill="#fbbf24" fillOpacity="0.6"/>
              <text x="80" y="48" textAnchor="middle" fill="#f0fdf4" fontSize="28" fontWeight="bold" fontFamily="monospace">P</text>
              <text x="60" y="96" textAnchor="middle" fill="#1c1917" fontSize="22" fontWeight="bold" fontFamily="monospace">I</text>
              <text x="100" y="96" textAnchor="middle" fill="#1c1917" fontSize="22" fontWeight="bold" fontFamily="monospace">V</text>
              <text x="80" y="128" textAnchor="middle" fill="#6b7280" fontSize="7">Cover the unknown to find the formula</text>
            </svg>
          </div>
          {/* Three transpositions as triangles */}
          <div className="flex-1 grid grid-cols-3 gap-2">
            {[
              { title: "Find Power", formula: "P = I × V", covered: "P", circleColour: "#4ade80", textColour: "text-green-300", bg: "bg-green-400/5", border: "border-green-400/25" },
              { title: "Find Current", formula: "I = P / V", covered: "I", circleColour: "#f87171", textColour: "text-red-300", bg: "bg-red-400/5", border: "border-red-400/25" },
              { title: "Find Voltage", formula: "V = P / I", covered: "V", circleColour: "#fbbf24", textColour: "text-yellow-300", bg: "bg-yellow-400/5", border: "border-yellow-400/25" },
            ].map(({ title, formula, textColour, bg, border }) => (
              <div key={title} className={`${bg} border ${border} rounded-xl p-2 text-center space-y-1`}>
                <div className="text-xs text-muted-foreground">{title}</div>
                <div className={`font-mono text-xs font-bold ${textColour}`}>{formula}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Combined Power Formulas ── */}
      <div className="bg-card border border-border rounded-2xl p-5 space-y-4">
        <div className="flex items-center gap-2">
          <FlameKindling className="w-4 h-4 text-orange-400" />
          <h2 className="font-semibold text-foreground">Combined Power Formulas</h2>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Substituting Ohm's Law (V = I × R) into Watt's Law (P = I × V) produces two additional formulas for power. These are useful when voltage is not directly known.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-orange-400/5 border border-orange-400/25 rounded-xl p-4 space-y-3">
            <div className="font-mono text-xl font-bold text-orange-300">P = I² × R</div>
            <div className="text-sm font-semibold text-foreground">Power from Current and Resistance</div>
            <div className="text-xs text-muted-foreground space-y-1">
              <div>Derivation: substitute V = I × R into P = I × V</div>
              <div className="font-mono bg-background/40 rounded px-2 py-1">P = I × (I × R) = I² × R</div>
            </div>
            <div className="bg-background/40 rounded-xl p-3 space-y-1 text-xs">
              <div className="text-foreground font-semibold mb-1">Example</div>
              <div className="text-muted-foreground">A 10 Ω resistor carries 2 A. What power does it dissipate?</div>
              <div className="font-mono text-orange-300">P = 2² × 10 = 4 × 10 = 40 W</div>
            </div>
          </div>
          <div className="bg-violet-400/5 border border-violet-400/25 rounded-xl p-4 space-y-3">
            <div className="font-mono text-xl font-bold text-violet-300">P = V² ÷ R</div>
            <div className="text-sm font-semibold text-foreground">Power from Voltage and Resistance</div>
            <div className="text-xs text-muted-foreground space-y-1">
              <div>Derivation: substitute I = V ÷ R into P = I × V</div>
              <div className="font-mono bg-background/40 rounded px-2 py-1">P = (V ÷ R) × V = V² ÷ R</div>
            </div>
            <div className="bg-background/40 rounded-xl p-3 space-y-1 text-xs">
              <div className="text-foreground font-semibold mb-1">Example</div>
              <div className="text-muted-foreground">A 240 V element has a resistance of 57.6 Ω. What is its wattage?</div>
              <div className="font-mono text-violet-300">P = 240² ÷ 57.6 = 57,600 ÷ 57.6 = 1,000 W</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Power Worked Examples ── */}
      <div className="bg-card border border-border rounded-2xl p-5 space-y-4">
        <div className="flex items-center gap-2">
          <Calculator className="w-4 h-4 text-green-400" />
          <h2 className="font-semibold text-foreground">Power — Worked Examples</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              title: "Lamp Power Rating",
              scenario: "A lamp connected to 240 V draws 0.5 A. What is its power rating?",
              formula: "P = I × V",
              steps: ["P = 0.5 × 240", "P = 120 W"],
              answer: "120 W",
              colour: "text-green-300", bg: "bg-green-400/5", border: "border-green-400/25",
            },
            {
              title: "Current from Power Rating",
              scenario: "A 2,400 W electric heater operates at 240 V. What current does it draw?",
              formula: "I = P / V",
              steps: ["I = 2,400 / 240", "I = 10 A"],
              answer: "10 A",
              colour: "text-blue-300", bg: "bg-blue-400/5", border: "border-blue-400/25",
            },
            {
              title: "Resistor Heat Dissipation",
              scenario: "A 47 Ω resistor carries 0.3 A. How much power does it dissipate?",
              formula: "P = I² × R",
              steps: ["P = 0.3² × 47", "P = 0.09 × 47", "P = 4.23 W"],
              answer: "4.23 W",
              colour: "text-orange-300", bg: "bg-orange-400/5", border: "border-orange-400/25",
            },
            {
              title: "Element Resistance from Wattage",
              scenario: "A 1,000 W element is rated at 240 V. What is its resistance?",
              formula: "R = V² / P",
              steps: ["R = 240² / 1,000", "R = 57,600 / 1,000", "R = 57.6 Ω"],
              answer: "57.6 Ω",
              colour: "text-violet-300", bg: "bg-violet-400/5", border: "border-violet-400/25",
            },
          ].map(({ title, scenario, formula, steps, answer, colour, bg, border }) => (
            <div key={title} className={`${bg} border ${border} rounded-xl p-4 space-y-3`}>
              <div className="text-sm font-semibold text-foreground">{title}</div>
              <div className="text-xs text-muted-foreground leading-relaxed">{scenario}</div>
              <div className={`font-mono text-sm font-bold ${colour}`}>{formula}</div>
              <div className="space-y-0.5">
                {steps.map((s) => (
                  <div key={s} className="font-mono text-xs text-muted-foreground">{s}</div>
                ))}
              </div>
              <div className={`text-lg font-display font-bold ${colour}`}>{answer}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Wattmeter ── */}
      <div className="bg-card border border-border rounded-2xl overflow-hidden">
        <div className="flex items-center gap-2 px-6 py-4 border-b border-border">
          <Zap className="w-4 h-4 text-yellow-400" />
          <h2 className="font-semibold text-foreground">Wattmeter</h2>
        </div>
        <div className="p-6 space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            A wattmeter measures electrical power directly. It consists of <span className="text-foreground font-medium">two coils</span>:
            a <span className="text-blue-300 font-medium">current coil</span> (connected in series with the load) and a{" "}
            <span className="text-yellow-300 font-medium">voltage coil</span> (connected in parallel). Because P = V × I, the interaction of
            the two magnetic fields deflects a pointer proportional to power.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {/* Schematic symbol */}
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Schematic Connection</p>
              <svg viewBox="0 0 280 160" className="w-full max-w-xs mx-auto" aria-label="Wattmeter schematic">
                {/* supply rails */}
                <line x1="20" y1="30" x2="100" y2="30" stroke="#9ca3af" strokeWidth="1.5"/>
                <line x1="20" y1="130" x2="260" y2="130" stroke="#9ca3af" strokeWidth="1.5"/>
                {/* current coil (series, top rail) */}
                <rect x="100" y="20" width="60" height="20" rx="3" fill="#1e40af" fillOpacity="0.3" stroke="#60a5fa" strokeWidth="1.5"/>
                <text x="130" y="33" textAnchor="middle" fill="#60a5fa" fontSize="8" fontFamily="monospace">current coil</text>
                <line x1="160" y1="30" x2="200" y2="30" stroke="#9ca3af" strokeWidth="1.5"/>
                {/* voltage coil (shunt, vertical) */}
                <rect x="190" y="30" width="20" height="60" rx="3" fill="#92400e" fillOpacity="0.3" stroke="#fbbf24" strokeWidth="1.5"/>
                <text x="200" y="98" textAnchor="middle" fill="#fbbf24" fontSize="8" fontFamily="monospace">voltage</text>
                <text x="200" y="108" textAnchor="middle" fill="#fbbf24" fontSize="8" fontFamily="monospace">coil</text>
                <line x1="200" y1="90" x2="200" y2="130" stroke="#9ca3af" strokeWidth="1.5"/>
                {/* load */}
                <line x1="200" y1="30" x2="260" y2="30" stroke="#9ca3af" strokeWidth="1.5"/>
                <rect x="240" y="20" width="20" height="20" rx="3" fill="#374151" stroke="#6b7280" strokeWidth="1.5"/>
                <text x="250" y="33" textAnchor="middle" fill="#d1d5db" fontSize="7">LOAD</text>
                <line x1="260" y1="30" x2="260" y2="130" stroke="#9ca3af" strokeWidth="1.5"/>
                {/* supply label */}
                <text x="10" y="82" fill="#6b7280" fontSize="8">supply</text>
                <line x1="20" y1="30" x2="20" y2="130" stroke="#9ca3af" strokeWidth="1.5"/>
              </svg>
            </div>
            {/* Electrodynamometer wattmeter */}
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Electrodynamometer Wattmeter</p>
              <svg viewBox="0 0 260 180" className="w-full max-w-xs mx-auto" aria-label="Electrodynamometer wattmeter internals">
                {/* scale arc */}
                <path d="M 50,140 A 80,80 0 0,1 210,140" fill="none" stroke="#4ade80" strokeWidth="8" strokeLinecap="round" opacity="0.5"/>
                <text x="130" y="60" textAnchor="middle" fill="#d1d5db" fontSize="9">Scale</text>
                <text x="210" y="75" textAnchor="middle" fill="#d1d5db" fontSize="9">Watts</text>
                {/* pointer */}
                <line x1="130" y1="140" x2="155" y2="80" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round"/>
                <text x="175" y="82" fill="#ef4444" fontSize="9">Pointer</text>
                {/* fixed coils */}
                <ellipse cx="55" cy="138" rx="22" ry="12" fill="none" stroke="#60a5fa" strokeWidth="1.5"/>
                <text x="40" y="164" fill="#60a5fa" fontSize="8">Fixed Coil</text>
                <ellipse cx="205" cy="138" rx="22" ry="12" fill="none" stroke="#60a5fa" strokeWidth="1.5"/>
                <text x="192" y="164" fill="#60a5fa" fontSize="8">Fixed Coil</text>
                {/* moving coil */}
                <ellipse cx="130" cy="138" rx="15" ry="8" fill="none" stroke="#fbbf24" strokeWidth="1.5"/>
                <text x="105" y="164" fill="#fbbf24" fontSize="8">Moving Coil</text>
                {/* series resistor */}
                <rect x="148" y="134" width="20" height="8" rx="2" fill="none" stroke="#a78bfa" strokeWidth="1.5"/>
                <text x="148" y="178" fill="#a78bfa" fontSize="8">Series Resistor</text>
                {/* supply/load lines */}
                <line x1="10" y1="120" x2="33" y2="138" stroke="#9ca3af" strokeWidth="1"/>
                <line x1="10" y1="155" x2="33" y2="148" stroke="#9ca3af" strokeWidth="1"/>
                <text x="5" y="118" fill="#6b7280" fontSize="7">Supply</text>
                <text x="5" y="128" fill="#6b7280" fontSize="7">Voltage</text>
                <line x1="227" y1="138" x2="252" y2="120" stroke="#9ca3af" strokeWidth="1"/>
                <text x="240" y="118" fill="#6b7280" fontSize="7">LOAD</text>
              </svg>
            </div>
          </div>
          <div className="bg-yellow-400/5 border border-yellow-400/20 rounded-xl px-4 py-3 text-sm text-yellow-200">
            <span className="font-mono font-bold text-yellow-300">P = V × I</span> — the wattmeter measures both quantities simultaneously and displays their product directly in watts.
          </div>
        </div>
      </div>

      {/* ── Kilowatt Hour Meter ── */}
      <div className="bg-card border border-border rounded-2xl overflow-hidden">
        <div className="flex items-center gap-2 px-6 py-4 border-b border-border">
          <Zap className="w-4 h-4 text-green-400" />
          <h2 className="font-semibold text-foreground">Kilowatt Hour Meter — kWh</h2>
        </div>
        <div className="p-6 space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Supply companies use a <span className="text-foreground font-medium">kWh meter</span> to measure the quantity of electrical energy consumed.
            Like the wattmeter it uses a current coil and a voltage coil (P = V × I), but the meter integrates power over time to register energy in kilowatt-hours.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {/* Part labels */}
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Key Components</p>
              {[
                { name: "Current Coil", colour: "text-blue-300", desc: "Carries the full load current — in series with the load." },
                { name: "Potential Coil", colour: "text-yellow-300", desc: "Connected in parallel with the supply — senses voltage." },
                { name: "Rotor (Disk)", colour: "text-green-300", desc: "Aluminium disc that spins at a rate proportional to power." },
                { name: "Permanent Magnet", colour: "text-red-300", desc: "Provides braking torque to prevent over-spin — ensures accuracy." },
                { name: "Stator", colour: "text-purple-300", desc: "Iron core carrying both coils and guiding the magnetic flux." },
              ].map(({ name, colour, desc }) => (
                <div key={name} className="flex gap-3">
                  <span className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 bg-current ${colour}`} />
                  <div>
                    <span className={`text-sm font-semibold ${colour}`}>{name}</span>
                    <p className="text-xs text-muted-foreground">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* SVG schematic */}
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Internal Diagram</p>
              <svg viewBox="0 0 220 200" className="w-full max-w-xs mx-auto" aria-label="kWh meter internals">
                {/* stator box */}
                <rect x="60" y="50" width="100" height="90" rx="4" fill="#1e293b" stroke="#4b5563" strokeWidth="1.5"/>
                <text x="110" y="43" textAnchor="middle" fill="#9ca3af" fontSize="9">Stator</text>
                {/* potential coil windings */}
                {[0,1,2,3,4].map(i => (
                  <rect key={i} x="70" y={58 + i*8} width="36" height="6" rx="1" fill="none" stroke="#fbbf24" strokeWidth="1" opacity="0.8"/>
                ))}
                <text x="88" y="108" textAnchor="middle" fill="#fbbf24" fontSize="7">Potential</text>
                <text x="88" y="117" textAnchor="middle" fill="#fbbf24" fontSize="7">Coil</text>
                {/* rotor disk */}
                <ellipse cx="130" cy="120" rx="18" ry="24" fill="#374151" stroke="#4ade80" strokeWidth="1.5"/>
                <text x="130" y="122" textAnchor="middle" fill="#4ade80" fontSize="7">Rotor</text>
                <text x="130" y="132" textAnchor="middle" fill="#4ade80" fontSize="7">(Disk)</text>
                {/* current coil */}
                {[0,1,2].map(i => (
                  <rect key={i} x="80" y={126 + i*8} width="22" height="6" rx="1" fill="none" stroke="#60a5fa" strokeWidth="1" opacity="0.8"/>
                ))}
                <text x="91" y="158" textAnchor="middle" fill="#60a5fa" fontSize="7">Current</text>
                <text x="91" y="167" textAnchor="middle" fill="#60a5fa" fontSize="7">Coil</text>
                {/* permanent magnet */}
                <rect x="150" y="105" width="16" height="30" rx="2" fill="#7f1d1d" stroke="#ef4444" strokeWidth="1.5"/>
                <text x="175" y="118" fill="#ef4444" fontSize="7">Perm.</text>
                <text x="175" y="127" fill="#ef4444" fontSize="7">Magnet</text>
                <text x="175" y="136" fill="#ef4444" fontSize="7">(brake)</text>
                {/* Line/Load connectors */}
                <line x1="60" y1="65" x2="20" y2="65" stroke="#9ca3af" strokeWidth="1"/>
                <line x1="60" y1="135" x2="20" y2="135" stroke="#9ca3af" strokeWidth="1"/>
                <text x="5" y="68" fill="#6b7280" fontSize="7">Line</text>
                <text x="5" y="138" fill="#6b7280" fontSize="7">Load</text>
              </svg>
            </div>
          </div>
          <div className="bg-green-400/5 border border-green-400/20 rounded-xl px-4 py-3 space-y-1">
            <p className="text-sm font-semibold text-green-300">Reading your electricity meter</p>
            <p className="text-sm text-muted-foreground">
              Each unit on the dial = 1 kWh. A 2 kW heater running for 3 hours consumes <span className="font-mono font-bold text-green-300">6 kWh</span> of electrical energy.
            </p>
          </div>
        </div>
      </div>

      {/* ── Effect on Power if Voltage Changes ── */}
      <div className="bg-card border border-border rounded-2xl overflow-hidden">
        <div className="flex items-center gap-2 px-6 py-4 border-b border-border">
          <Zap className="w-4 h-4 text-orange-400" />
          <h2 className="font-semibold text-foreground">Effect on Power When Voltage Changes</h2>
        </div>
        <div className="p-6 space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Because <span className="font-mono font-bold text-orange-300">P = V² / R</span>, power changes by the <span className="font-semibold text-foreground">square</span> of the voltage change:
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><span className="mt-1.5 w-2 h-2 rounded-full bg-orange-400 flex-shrink-0"/><span>If voltage doubles, power increases <span className="text-orange-300 font-bold">four times</span> (2² = 4).</span></li>
            <li className="flex items-start gap-2"><span className="mt-1.5 w-2 h-2 rounded-full bg-orange-400 flex-shrink-0"/><span>If voltage halves, power falls to <span className="text-orange-300 font-bold">one quarter</span> (½² = ¼).</span></li>
          </ul>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {[
              { label: "(a)", v: 5, r: 10, p: "2.5", colour: "border-blue-400/40 bg-blue-400/5" },
              { label: "(b)", v: 10, r: 10, p: "10", colour: "border-orange-400/40 bg-orange-400/5" },
            ].map(({ label, v, r, p, colour }) => (
              <div key={label} className={`border rounded-xl p-4 ${colour} space-y-3`}>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{label} R = {r} Ω, V = {v} V</p>
                {/* mini meter SVG */}
                <svg viewBox="0 0 120 70" className="w-full max-w-[140px] mx-auto" aria-label={`Voltmeter at ${v}V`}>
                  <rect x="5" y="5" width="110" height="55" rx="6" fill="#1e293b" stroke="#4b5563" strokeWidth="1.5"/>
                  <path d={`M 15,50 A 45,45 0 0,1 105,50`} fill="none" stroke="#4b5563" strokeWidth="4" strokeLinecap="round"/>
                  <path d={`M 15,50 A 45,45 0 0,1 ${v === 5 ? "55,14" : "85,18"}`} fill="none" stroke="#4ade80" strokeWidth="4" strokeLinecap="round"/>
                  <line x1="60" y1="50" x2={v === 5 ? "42" : "76"} y2={v === 5 ? "18" : "15"} stroke="#ef4444" strokeWidth="2" strokeLinecap="round"/>
                  <text x="60" y="63" textAnchor="middle" fill="#9ca3af" fontSize="8">VOLTS</text>
                  <text x="18" y="48" fill="#9ca3af" fontSize="7">0</text>
                  <text x="95" y="48" fill="#9ca3af" fontSize="7">20</text>
                </svg>
                <div className="text-center space-y-1">
                  <p className="font-mono text-sm text-muted-foreground">P = V² / R = {v}² / {r}</p>
                  <p className="font-mono text-2xl font-bold text-foreground">P = {p} W</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-orange-400/5 border border-orange-400/20 rounded-xl px-4 py-3 text-sm text-orange-200">
            Voltage doubled from 5 V → 10 V, and power quadrupled: 2.5 W → 10 W. This is why voltage variations have a disproportionate effect on appliance power consumption.
          </div>
        </div>
      </div>

      {/* ── Power and Energy Rating ── */}
      <div className="bg-card border border-border rounded-2xl overflow-hidden">
        <div className="flex items-center gap-2 px-6 py-4 border-b border-border">
          <BookOpen className="w-4 h-4 text-teal-400" />
          <h2 className="font-semibold text-foreground">Power and Energy Rating</h2>
        </div>
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-teal-400/5 border border-teal-400/20 rounded-xl p-4 text-center space-y-1">
              <p className="text-xs text-muted-foreground uppercase tracking-widest">In Joules (SI)</p>
              <p className="font-mono text-lg font-bold text-teal-300">E = P × t</p>
              <p className="text-xs text-muted-foreground">energy (J) = power (W) × time (s)</p>
            </div>
            <div className="bg-teal-400/5 border border-teal-400/20 rounded-xl p-4 text-center space-y-1">
              <p className="text-xs text-muted-foreground uppercase tracking-widest">In kWh (commercial)</p>
              <p className="font-mono text-lg font-bold text-teal-300">E = kW × hours</p>
              <p className="text-xs text-muted-foreground">energy (kWh) = kilowatts × hours run</p>
            </div>
          </div>
          {/* Nameplate */}
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground pt-2">Appliance Nameplate Example</p>
          <div className="bg-zinc-800 border border-zinc-600 rounded-2xl overflow-hidden max-w-xs mx-auto text-xs font-mono">
            <div className="bg-zinc-700 text-center py-1 text-zinc-100 tracking-widest text-sm font-bold">SUNBEAM</div>
            <div className="grid grid-cols-3 gap-px bg-zinc-600">
              {[
                { label: "V", value: "230" },
                { label: "~50Hz", value: "" },
                { label: "W", value: "2300" },
                { label: "MODEL", value: "RA-D" },
                { label: "SER", value: "0410E" },
                { label: "", value: "" },
                { label: "APP. No.", value: "N/17/47" },
                { label: "", value: "MADE IN ENGLAND" },
                { label: "", value: "" },
              ].map((cell, i) => (
                <div key={i} className="bg-zinc-800 px-2 py-1 flex items-center gap-1">
                  {cell.label && <span className="text-zinc-400">{cell.label}</span>}
                  {cell.value && <span className="bg-zinc-700 text-zinc-100 px-1 rounded">{cell.value}</span>}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-teal-400/5 border border-teal-400/20 rounded-xl px-4 py-3 text-sm text-teal-200 text-center">
            This heater runs at 2300 W (2.3 kW). After one hour: <span className="font-mono font-bold text-teal-300">E = 2.3 kW × 1 h = 2.3 kWh</span>
          </div>
        </div>
      </div>

      {/* ── Losses ── */}
      <div className="bg-card border border-border rounded-2xl overflow-hidden">
        <div className="flex items-center gap-2 px-6 py-4 border-b border-border">
          <AlertTriangle className="w-4 h-4 text-red-400" />
          <h2 className="font-semibold text-foreground">Losses</h2>
        </div>
        <div className="p-6 space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Energy cannot be created or destroyed — but what you put in <span className="font-semibold text-foreground">does not</span> equal what you get out.
            The difference is <span className="text-red-300 font-semibold">losses</span>: unwanted energy forms (usually heat, noise, or vibration) that reduce useful output.
          </p>
          {/* Power station chain */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Power-Station Energy Chain (coal → pump output)</p>
            <div className="overflow-x-auto">
              <div className="flex items-center gap-1 min-w-max pb-2">
                {[
                  { label: "Coal Input", value: "100 units", colour: "bg-yellow-700/30 border-yellow-600/40 text-yellow-200" },
                  { arrow: "70% lost\n(power plant)" },
                  { label: "Transmission", value: "30 units", colour: "bg-orange-700/30 border-orange-600/40 text-orange-200" },
                  { arrow: "9% lost\n(lines)" },
                  { label: "Motor", value: "21 units", colour: "bg-blue-700/30 border-blue-600/40 text-blue-200" },
                  { arrow: "10% lost\n(motor)" },
                  { label: "Drivetrain", value: "11 units", colour: "bg-purple-700/30 border-purple-600/40 text-purple-200" },
                  { arrow: "2% lost\n(friction)" },
                  { label: "Output", value: "9.5 units", colour: "bg-green-700/30 border-green-600/40 text-green-200" },
                ].map((item, i) =>
                  item.arrow ? (
                    <div key={i} className="flex flex-col items-center gap-0.5 px-1">
                      <span className="text-red-400 text-lg">→</span>
                      <span className="text-xs text-red-400/80 text-center whitespace-pre-line leading-tight">{item.arrow}</span>
                    </div>
                  ) : (
                    <div key={i} className={`border rounded-lg px-3 py-2 text-center ${item.colour}`}>
                      <div className="text-xs font-semibold">{item.label}</div>
                      <div className="font-mono font-bold text-sm">{item.value}</div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
          {/* House heat loss */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Typical House Heat Losses</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {[
                { loc: "Roof",        pct: 25, colour: "text-orange-300", bar: "bg-orange-400" },
                { loc: "Walls",       pct: 35, colour: "text-red-300",    bar: "bg-red-400"    },
                { loc: "Floor",       pct: 15, colour: "text-yellow-300", bar: "bg-yellow-400" },
                { loc: "Windows",     pct: 10, colour: "text-blue-300",   bar: "bg-blue-400"   },
                { loc: "Doors/Gaps",  pct: 15, colour: "text-purple-300", bar: "bg-purple-400" },
              ].map(({ loc, pct, colour, bar }) => (
                <div key={loc} className="flex items-center gap-2 text-sm">
                  <div className="w-16 bg-muted rounded-full h-1.5 flex-shrink-0">
                    <div className={`${bar} h-1.5 rounded-full`} style={{ width: `${pct * 2.5}%` }}/>
                  </div>
                  <span className={`font-bold font-mono ${colour}`}>{pct}%</span>
                  <span className="text-muted-foreground">{loc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Efficiency ── */}
      <div className="bg-card border border-border rounded-2xl overflow-hidden">
        <div className="flex items-center gap-2 px-6 py-4 border-b border-border">
          <Zap className="w-4 h-4 text-purple-400" />
          <h2 className="font-semibold text-foreground">Efficiency — η</h2>
        </div>
        <div className="p-6 space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Efficiency is the ratio of <span className="text-foreground font-semibold">useful work output</span> to{" "}
            <span className="text-foreground font-semibold">work input</span>.
            Because some input is always lost, efficiency is always less than 100 %.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <div className="bg-purple-400/5 border border-purple-400/20 rounded-xl p-4 text-center space-y-1">
              <p className="font-mono font-bold text-purple-300 text-lg">η = (P<sub>out</sub> / P<sub>in</sub>) × 100</p>
              <p className="text-xs text-muted-foreground">η (eta) expressed as a percentage</p>
            </div>
            <div className="bg-zinc-800 border border-border rounded-xl p-4 text-center space-y-1">
              <p className="text-xs text-muted-foreground uppercase tracking-widest">Useful output</p>
              <p className="font-mono font-bold text-foreground">= Input − Losses</p>
            </div>
            <div className="bg-zinc-800 border border-border rounded-xl p-4 text-center space-y-1">
              <p className="text-xs text-muted-foreground uppercase tracking-widest">100 % efficient</p>
              <p className="text-sm text-muted-foreground">= no losses — impossible in practice</p>
            </div>
          </div>
          {/* Petrol vs Electric comparison */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Worked Example — Petrol vs Electric Vehicle</p>
            <p className="text-xs text-muted-foreground mb-3">Petrol car: η = 12.6 % &nbsp;|&nbsp; Electric car: η ≈ 88 %</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-muted/30">
                    <th className="text-left px-3 py-2 text-muted-foreground font-semibold">Energy loss</th>
                    <th className="px-3 py-2 text-yellow-300 font-semibold text-center">Petrol</th>
                    <th className="px-3 py-2 text-green-300 font-semibold text-center">Electric</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { loss: "Idling",        petrol: "17%",   elec: "0%" },
                    { loss: "Engine losses", petrol: "62%",   elec: "10%" },
                    { loss: "Accessories",   petrol: "2%",    elec: "2%" },
                    { loss: "Drive train",   petrol: "5.6%",  elec: "0%" },
                    { loss: "Total losses",  petrol: "86.6%", elec: "12%", bold: true },
                    { loss: "Engine size",   petrol: "100 kW",elec: "14 kW" },
                    { loss: "Torque peak",   petrol: "100% @ 3000 RPM", elec: "100% @ 10 RPM" },
                  ].map(({ loss, petrol, elec, bold }) => (
                    <tr key={loss} className={`border-t border-border ${bold ? "bg-red-950/20 font-bold" : ""}`}>
                      <td className="px-3 py-2 text-muted-foreground">{loss}</td>
                      <td className={`px-3 py-2 text-center font-mono ${bold ? "text-red-300" : "text-yellow-300"}`}>{petrol}</td>
                      <td className={`px-3 py-2 text-center font-mono ${bold ? "text-green-300" : "text-green-300"}`}>{elec}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {/* Fan impeller efficiency */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Fan Impeller Efficiency by Type</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {[
                { name: "Radial",          pct: 72 },
                { name: "Radial Tip",      pct: 79 },
                { name: "Forward Curved",  pct: 76 },
                { name: "Backward Flat",   pct: 81 },
                { name: "Backward Curved", pct: 83 },
                { name: "Aerofoil",        pct: 88 },
              ].map(({ name, pct }) => (
                <div key={name} className="bg-muted/20 border border-border rounded-xl p-3 space-y-2">
                  <div className="flex justify-between items-baseline">
                    <span className="text-xs text-muted-foreground">{name}</span>
                    <span className="font-mono font-bold text-green-300 text-sm">{pct}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-1.5">
                    <div className="bg-green-400 h-1.5 rounded-full" style={{ width: `${pct}%` }}/>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Rotational Energy & Torque ── */}
      <div className="bg-card border border-border rounded-2xl overflow-hidden">
        <div className="flex items-center gap-2 px-6 py-4 border-b border-border">
          <Zap className="w-4 h-4 text-blue-400" />
          <h2 className="font-semibold text-foreground">Rotational Energy — Torque</h2>
        </div>
        <div className="p-6 space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Rotational force is called <span className="text-blue-300 font-semibold">torque</span>. When a force is applied at right angles to the radius:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <div className="bg-blue-400/5 border border-blue-400/20 rounded-xl p-4 text-center space-y-1">
              <p className="font-mono font-bold text-blue-300 text-xl">T = F × r</p>
              <p className="text-xs text-muted-foreground">torque = force × radius</p>
            </div>
            <div className="bg-zinc-800 border border-border rounded-xl p-4 space-y-2 text-xs text-muted-foreground">
              <p><span className="font-mono text-blue-300 font-bold">T</span> = torque in newton-metres (Nm)</p>
              <p><span className="font-mono text-blue-300 font-bold">F</span> = applied force in newtons (N)</p>
              <p><span className="font-mono text-blue-300 font-bold">r</span> = distance from fulcrum to force (m)</p>
            </div>
            <div className="bg-zinc-800 border border-border rounded-xl p-4 space-y-2">
              <p className="text-xs text-muted-foreground uppercase tracking-widest">Worked example (F = 1000 N)</p>
              <p className="font-mono text-sm text-blue-200">r = 100 mm (0.1 m):</p>
              <p className="font-mono font-bold text-blue-300">T = 1000 × 0.1 = <span className="text-white">100 Nm</span></p>
              <p className="font-mono text-sm text-blue-200">r = 200 mm (0.2 m):</p>
              <p className="font-mono font-bold text-blue-300">T = 1000 × 0.2 = <span className="text-white">200 Nm</span></p>
            </div>
          </div>
          {/* Torque SVG - wrench */}
          <div className="flex justify-center">
            <svg viewBox="0 0 260 120" className="w-full max-w-sm" aria-label="Torque wrench diagram">
              {/* bolt/fulcrum */}
              <circle cx="80" cy="60" r="12" fill="#374151" stroke="#6b7280" strokeWidth="2"/>
              <text x="80" y="64" textAnchor="middle" fill="#9ca3af" fontSize="8">A</text>
              {/* wrench body */}
              <rect x="78" y="57" width="120" height="6" rx="2" fill="#4b5563" stroke="#6b7280" strokeWidth="1"/>
              {/* r1 = 100mm */}
              <line x1="80" y1="60" x2="80" y2="30" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="3 2"/>
              <text x="65" y="45" fill="#60a5fa" fontSize="8">r=100mm</text>
              {/* r2 = 200mm */}
              <line x1="200" y1="57" x2="200" y2="25" stroke="#8b5cf6" strokeWidth="1.5" strokeDasharray="3 2"/>
              <text x="202" y="35" fill="#a78bfa" fontSize="8">r=200mm</text>
              <text x="185" y="22" fill="#a78bfa" fontSize="7">200Nm</text>
              {/* force arrow */}
              <line x1="200" y1="120" x2="200" y2="68" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arr)"/>
              <text x="207" y="115" fill="#ef4444" fontSize="8">F=1000N</text>
              <defs>
                <marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                  <path d="M0,0 L6,3 L0,6 Z" fill="#ef4444"/>
                </marker>
              </defs>
              {/* T annotations */}
              <text x="72" y="24" fill="#60a5fa" fontSize="7">100Nm</text>
              <text x="80" y="88" textAnchor="middle" fill="#6b7280" fontSize="7">fulcrum (axis)</text>
            </svg>
          </div>
          {/* Bicycle gears */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Torque in Practice — Bicycle Gears</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  gear: "Low Gear", colour: "text-green-300", bg: "bg-green-400/5", border: "border-green-400/25",
                  points: ["Smaller R_front / R_back ratio", "Larger F_out / F_in", "Smaller D_out / D_in", "Larger mechanical advantage (MA)"],
                  dout: "34 cm", fout: "440 N", fin: "1000 N", din: "15 cm",
                },
                {
                  gear: "High Gear", colour: "text-yellow-300", bg: "bg-yellow-400/5", border: "border-yellow-400/25",
                  points: ["Larger R_front / R_back ratio", "Smaller F_out / F_in", "Larger D_out / D_in", "Smaller mechanical advantage (MA)"],
                  dout: "68 cm", fout: "220 N", fin: "1000 N", din: "15 cm",
                },
              ].map(({ gear, colour, bg, border, points, dout, fout, fin, din }) => (
                <div key={gear} className={`${bg} border ${border} rounded-xl p-4 space-y-3`}>
                  <p className={`font-bold ${colour}`}>{gear}</p>
                  <ul className="space-y-1">
                    {points.map(p => (
                      <li key={p} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <span className={`mt-1 w-1.5 h-1.5 rounded-full bg-current ${colour} flex-shrink-0`}/>
                        {p}
                      </li>
                    ))}
                  </ul>
                  <div className="grid grid-cols-2 gap-1 text-xs font-mono">
                    <span className="text-red-300">D_out: {dout}</span>
                    <span className="text-blue-300">D_in: {din}</span>
                    <span className="text-red-300">F_out: {fout}</span>
                    <span className="text-blue-300">F_in: {fin}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Power Ratings & Prefixes ── */}
      <div className="bg-card border border-border rounded-2xl p-5 space-y-4">
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-yellow-400" />
          <h2 className="font-semibold text-foreground">Power Ratings &amp; Metric Prefixes</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-4 text-muted-foreground font-medium">Prefix</th>
                <th className="text-left py-2 pr-4 text-muted-foreground font-medium">Symbol</th>
                <th className="text-left py-2 pr-4 text-muted-foreground font-medium">Multiplier</th>
                <th className="text-left py-2 text-muted-foreground font-medium">Example</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              {[
                { prefix: "Mega", sym: "M", mult: "× 1,000,000 (10⁶)", ex: "1 MΩ = 1,000,000 Ω" },
                { prefix: "Kilo", sym: "k", mult: "× 1,000 (10³)", ex: "2 kW = 2,000 W" },
                { prefix: "(none)", sym: "—", mult: "× 1 (10⁰)", ex: "240 V, 10 A, 5 W" },
                { prefix: "Milli", sym: "m", mult: "÷ 1,000 (10⁻³)", ex: "50 mA = 0.05 A" },
                { prefix: "Micro", sym: "μ", mult: "÷ 1,000,000 (10⁻⁶)", ex: "100 μA = 0.0001 A" },
              ].map(({ prefix, sym, mult, ex }) => (
                <tr key={prefix}>
                  <td className="py-2 pr-4 text-foreground font-medium">{prefix}</td>
                  <td className="py-2 pr-4 font-mono text-yellow-300">{sym}</td>
                  <td className="py-2 pr-4 font-mono text-muted-foreground">{mult}</td>
                  <td className="py-2 text-muted-foreground">{ex}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ── Summary ── */}
      <div className="bg-card border border-border rounded-2xl p-5 space-y-4">
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-yellow-400" />
          <h2 className="font-semibold text-foreground">Summary</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
          {[
            { n: "1", text: "Values directly opposite in a formula are proportional — one increases, so does the other." },
            { n: "2", text: "Values diagonal in a formula are inversely proportional — one increases, the other decreases." },
            { n: "3", text: "A load converts electrical energy into another form: light, heat, rotation, or sound." },
            { n: "4", text: "Ohm's Law: I = V/R. Current is proportional to voltage and inversely proportional to resistance." },
            { n: "5", text: "The triangle (cover the unknown) gives V = IR, I = V/R, R = V/I." },
            { n: "6", text: "Energy cannot be created or destroyed — it only changes form (Law of Conservation of Energy)." },
            { n: "7", text: "Work = Force × distance. Unit = Joule (J). Named after James Prescott Joule." },
            { n: "8", text: "Power is the rate of doing work. P = Energy ÷ Time. More power = same work done faster." },
            { n: "9", text: "Watt's Law: P = I × V. Power = Current × Voltage. Unit = Watt (W) = J/s." },
            { n: "10", text: "P = I²R and P = V²/R are derived by combining Ohm's and Watt's Laws." },
            { n: "11", text: "Always convert prefix units (mA → A, kΩ → Ω) before substituting into formulas." },
          ].map(({ n, text }) => (
            <div key={n} className="flex gap-3 items-start bg-muted/30 rounded-xl p-3">
              <span className="w-5 h-5 rounded-full bg-yellow-400/20 text-yellow-300 text-xs flex items-center justify-center flex-shrink-0 font-bold">{n}</span>
              <p className="text-muted-foreground leading-relaxed text-xs">{text}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
