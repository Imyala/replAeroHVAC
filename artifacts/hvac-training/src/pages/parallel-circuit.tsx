import { GitBranch, Info, Zap, BookOpen, Calculator, AlertTriangle, ArrowLeftRight } from "lucide-react";

/* ─── Parallel circuit SVG ─────────────────────────────────────────────────── */
function ParallelCircuitSVG() {
  return (
    <svg viewBox="0 0 520 210" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-xl mx-auto">
      {/* Supply rails */}
      <line x1="30"  y1="20"  x2="490" y2="20"  stroke="#fbbf24" strokeWidth="2"/>
      <line x1="30"  y1="190" x2="490" y2="190" stroke="#60a5fa" strokeWidth="2"/>
      <text x="14" y="24"  fill="#fbbf24" fontSize="9" fontWeight="bold">+</text>
      <text x="14" y="194" fill="#60a5fa" fontSize="9" fontWeight="bold">−</text>

      {/* Supply symbol */}
      <line x1="30" y1="20"  x2="30"  y2="80"  stroke="#94a3b8" strokeWidth="1.5"/>
      <line x1="20" y1="80"  x2="40"  y2="80"  stroke="#fbbf24" strokeWidth="2.5"/>
      <line x1="22" y1="90"  x2="38"  y2="90"  stroke="#94a3b8" strokeWidth="1.5"/>
      <line x1="20" y1="100" x2="40"  y2="100" stroke="#fbbf24" strokeWidth="2.5"/>
      <line x1="22" y1="110" x2="38"  y2="110" stroke="#94a3b8" strokeWidth="1.5"/>
      <line x1="30" y1="110" x2="30"  y2="190" stroke="#94a3b8" strokeWidth="1.5"/>
      <text x="44" y="97" fill="#fbbf24" fontSize="9">VT</text>

      {/* Branch 1 — R1 */}
      <line x1="140" y1="20"  x2="140" y2="60"  stroke="#94a3b8" strokeWidth="1.5"/>
      <rect  x="118" y="60"  width="44" height="18" rx="3" fill="#1e293b" stroke="#60a5fa" strokeWidth="1.5"/>
      <text  x="140" y="73" textAnchor="middle" fill="#60a5fa" fontSize="10" fontWeight="bold">R₁</text>
      <line x1="140" y1="78"  x2="140" y2="190" stroke="#94a3b8" strokeWidth="1.5"/>
      {/* I1 arrow */}
      <path d="M 133 40 L 140 34 L 147 40" fill="none" stroke="#60a5fa" strokeWidth="1.5"/>
      <text x="155" y="42" fill="#60a5fa" fontSize="8">I₁</text>

      {/* Branch 2 — R2 */}
      <line x1="260" y1="20"  x2="260" y2="60"  stroke="#94a3b8" strokeWidth="1.5"/>
      <rect  x="238" y="60"  width="44" height="18" rx="3" fill="#1e293b" stroke="#a78bfa" strokeWidth="1.5"/>
      <text  x="260" y="73" textAnchor="middle" fill="#a78bfa" fontSize="10" fontWeight="bold">R₂</text>
      <line x1="260" y1="78"  x2="260" y2="190" stroke="#94a3b8" strokeWidth="1.5"/>
      {/* I2 arrow */}
      <path d="M 253 40 L 260 34 L 267 40" fill="none" stroke="#a78bfa" strokeWidth="1.5"/>
      <text x="275" y="42" fill="#a78bfa" fontSize="8">I₂</text>

      {/* Branch 3 — R3 */}
      <line x1="380" y1="20"  x2="380" y2="60"  stroke="#94a3b8" strokeWidth="1.5"/>
      <rect  x="358" y="60"  width="44" height="18" rx="3" fill="#1e293b" stroke="#f97316" strokeWidth="1.5"/>
      <text  x="380" y="73" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="bold">R₃</text>
      <line x1="380" y1="78"  x2="380" y2="190" stroke="#94a3b8" strokeWidth="1.5"/>
      {/* I3 arrow */}
      <path d="M 373 40 L 380 34 L 387 40" fill="none" stroke="#f97316" strokeWidth="1.5"/>
      <text x="395" y="42" fill="#f97316" fontSize="8">I₃</text>

      {/* IT arrow */}
      <path d="M 73 12 L 80 6 L 87 12" fill="none" stroke="#fbbf24" strokeWidth="1.5"/>
      <text x="55" y="15" fill="#fbbf24" fontSize="8">IT→</text>

      {/* Voltmeter labels */}
      <text x="140" y="130" textAnchor="middle" fill="#64748b" fontSize="8">V₁ = VT</text>
      <text x="260" y="130" textAnchor="middle" fill="#64748b" fontSize="8">V₂ = VT</text>
      <text x="380" y="130" textAnchor="middle" fill="#64748b" fontSize="8">V₃ = VT</text>

      {/* IT = I1+I2+I3 label */}
      <text x="490" y="105" textAnchor="end" fill="#fbbf24" fontSize="9">IT = I₁+I₂+I₃</text>
    </svg>
  );
}

/* ─── Junction diagram (KCL) ─────────────────────────────────────────────── */
function JunctionSVG() {
  return (
    <svg viewBox="0 0 300 130" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-xs mx-auto">
      {/* IT incoming */}
      <line x1="10" y1="65" x2="90" y2="65" stroke="#fbbf24" strokeWidth="2"/>
      <path d="M 75 58 L 82 65 L 75 72" fill="none" stroke="#fbbf24" strokeWidth="1.5"/>
      <text x="8"  y="60" fill="#fbbf24" fontSize="9">IT = 1.6A</text>

      {/* Junction dot */}
      <circle cx="90" cy="65" r="4" fill="#94a3b8"/>
      <text x="95" y="58" fill="#94a3b8" fontSize="8">Jn 1</text>

      {/* I1 branch */}
      <line x1="90"  y1="65" x2="230" y2="65" stroke="#60a5fa" strokeWidth="2"/>
      <path d="M 145 58 L 152 65 L 145 72" fill="none" stroke="#60a5fa" strokeWidth="1.5"/>
      <text x="152" y="60" fill="#60a5fa" fontSize="9">I₁ = 0.1A</text>

      {/* Jn 2 dot */}
      <circle cx="90" cy="65" r="0" fill="none"/>
      <line x1="90" y1="65" x2="90" y2="110" stroke="#94a3b8" strokeWidth="1.5"/>
      <circle cx="90" cy="110" r="4" fill="#94a3b8"/>
      <text x="95" y="118" fill="#94a3b8" fontSize="8">Jn 2</text>

      {/* I2 branch from jn2 */}
      <line x1="90"  y1="110" x2="230" y2="110" stroke="#a78bfa" strokeWidth="2"/>
      <path d="M 130 103 L 137 110 L 130 117" fill="none" stroke="#a78bfa" strokeWidth="1.5"/>
      <text x="138" y="105" fill="#a78bfa" fontSize="9">I₂ = 0.5A</text>

      {/* I3 split */}
      <line x1="230" y1="65"  x2="230" y2="110" stroke="#94a3b8" strokeWidth="1.5"/>
      <circle cx="230" cy="65"  r="3" fill="#94a3b8"/>
      <circle cx="230" cy="110" r="3" fill="#94a3b8"/>
      <line x1="230" y1="110" x2="290" y2="110" stroke="#f97316" strokeWidth="1.5"/>
      <text x="234" y="105" fill="#f97316" fontSize="9">I₃=1A</text>
      <line x1="230" y1="65"  x2="290" y2="65"  stroke="#60a5fa" strokeWidth="1"/>

      <text x="148" y="128" fill="#64748b" fontSize="7.5">1.5A in = 0.5A + 1A out (Jn 2)</text>
    </svg>
  );
}

/* ─── Open-circuit fault SVG ─────────────────────────────────────────────── */
function OpenFaultSVG() {
  return (
    <svg viewBox="0 0 320 160" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-xs mx-auto">
      <line x1="20"  y1="20"  x2="300" y2="20"  stroke="#fbbf24" strokeWidth="1.5"/>
      <line x1="20"  y1="145" x2="300" y2="145" stroke="#60a5fa" strokeWidth="1.5"/>
      {/* Battery */}
      <line x1="20" y1="20" x2="20" y2="60" stroke="#94a3b8" strokeWidth="1.5"/>
      <line x1="10" y1="60" x2="30" y2="60" stroke="#fbbf24" strokeWidth="2.5"/>
      <line x1="12" y1="70" x2="28" y2="70" stroke="#94a3b8" strokeWidth="1.5"/>
      <line x1="10" y1="80" x2="30" y2="80" stroke="#fbbf24" strokeWidth="2.5"/>
      <line x1="20" y1="80" x2="20" y2="145" stroke="#94a3b8" strokeWidth="1.5"/>
      <text x="34" y="72" fill="#fbbf24" fontSize="9">12V</text>
      {/* Lamp 1 OK */}
      <line x1="100" y1="20" x2="100" y2="55" stroke="#94a3b8" strokeWidth="1.5"/>
      <circle cx="100" cy="70" r="14" fill="none" stroke="#60a5fa" strokeWidth="1.5"/>
      <line x1="91" y1="61" x2="109" y2="79" stroke="#60a5fa" strokeWidth="1.5"/>
      <line x1="109" y1="61" x2="91" y2="79" stroke="#60a5fa" strokeWidth="1.5"/>
      <line x1="100" y1="84" x2="100" y2="145" stroke="#94a3b8" strokeWidth="1.5"/>
      <text x="118" y="72" fill="#64748b" fontSize="8">V = 12V ✓</text>
      {/* Lamp 2 OPEN */}
      <line x1="200" y1="20" x2="200" y2="50" stroke="#94a3b8" strokeWidth="1.5"/>
      <circle cx="200" cy="68" r="14" fill="none" stroke="#ef4444" strokeWidth="1.5"/>
      <line x1="193" y1="61" x2="198" y2="66" stroke="#ef4444" strokeWidth="1.5"/>
      <line x1="202" y1="70" x2="207" y2="75" stroke="#ef4444" strokeWidth="1.5"/>
      <text x="200" y="95" textAnchor="middle" fill="#ef4444" fontSize="8">OPEN</text>
      <line x1="200" y1="82" x2="200" y2="145" stroke="#94a3b8" strokeWidth="1.5"/>
      <text x="218" y="72" fill="#ef4444" fontSize="8">V = 12V still!</text>
      {/* Lamp 3 OK */}
      <line x1="290" y1="20" x2="290" y2="55" stroke="#94a3b8" strokeWidth="1.5"/>
      <circle cx="290" cy="70" r="14" fill="none" stroke="#60a5fa" strokeWidth="1.5"/>
      <line x1="281" y1="61" x2="299" y2="79" stroke="#60a5fa" strokeWidth="1.5"/>
      <line x1="299" y1="61" x2="281" y2="79" stroke="#60a5fa" strokeWidth="1.5"/>
      <line x1="290" y1="84" x2="290" y2="145" stroke="#94a3b8" strokeWidth="1.5"/>
      {/* IT arrows */}
      <text x="160" y="135" textAnchor="middle" fill="#ef4444" fontSize="8">IT drops (branch 2 contributes 0)</text>
    </svg>
  );
}

/* ─── Short-circuit fault SVG ────────────────────────────────────────────── */
function ShortFaultSVG() {
  return (
    <svg viewBox="0 0 320 160" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-xs mx-auto">
      <line x1="20"  y1="20"  x2="300" y2="20"  stroke="#fbbf24" strokeWidth="1.5"/>
      <line x1="20"  y1="145" x2="300" y2="145" stroke="#60a5fa" strokeWidth="1.5"/>
      {/* Battery */}
      <line x1="20" y1="20" x2="20" y2="60" stroke="#94a3b8" strokeWidth="1.5"/>
      <line x1="10" y1="60" x2="30" y2="60" stroke="#fbbf24" strokeWidth="2.5"/>
      <line x1="12" y1="70" x2="28" y2="70" stroke="#94a3b8" strokeWidth="1.5"/>
      <line x1="10" y1="80" x2="30" y2="80" stroke="#fbbf24" strokeWidth="2.5"/>
      <line x1="20" y1="80" x2="20" y2="145" stroke="#94a3b8" strokeWidth="1.5"/>
      <text x="34" y="72" fill="#fbbf24" fontSize="9">12V</text>
      {/* Lamp 1 */}
      <line x1="100" y1="20" x2="100" y2="55" stroke="#94a3b8" strokeWidth="1.5"/>
      <circle cx="100" cy="70" r="14" fill="none" stroke="#64748b" strokeWidth="1.5"/>
      <line x1="91" y1="61" x2="109" y2="79" stroke="#64748b" strokeWidth="1.5"/>
      <line x1="109" y1="61" x2="91"  y2="79" stroke="#64748b" strokeWidth="1.5"/>
      <line x1="100" y1="84" x2="100" y2="145" stroke="#94a3b8" strokeWidth="1.5"/>
      <text x="116" y="72" fill="#64748b" fontSize="8">V = 0V (off)</text>
      {/* Lamp 2 SHORT */}
      <line x1="200" y1="20"  x2="200" y2="55"  stroke="#94a3b8" strokeWidth="1.5"/>
      <circle cx="200" cy="70" r="14" fill="#ef4444" fillOpacity="0.15" stroke="#ef4444" strokeWidth="2"/>
      <line x1="186" y1="70" x2="214" y2="70" stroke="#ef4444" strokeWidth="3"/>
      <text x="200" y="98" textAnchor="middle" fill="#ef4444" fontSize="8">SHORT</text>
      <line x1="200" y1="84"  x2="200" y2="145" stroke="#94a3b8" strokeWidth="1.5"/>
      <text x="218" y="72" fill="#ef4444" fontSize="8">V = 0V across all</text>
      {/* Lamp 3 off */}
      <line x1="290" y1="20"  x2="290" y2="55"  stroke="#94a3b8" strokeWidth="1.5"/>
      <circle cx="290" cy="70" r="14" fill="none" stroke="#64748b" strokeWidth="1.5"/>
      <line x1="281" y1="61" x2="299" y2="79" stroke="#64748b" strokeWidth="1.5"/>
      <line x1="299" y1="61" x2="281" y2="79" stroke="#64748b" strokeWidth="1.5"/>
      <line x1="290" y1="84"  x2="290" y2="145" stroke="#94a3b8" strokeWidth="1.5"/>
      <text x="160" y="135" textAnchor="middle" fill="#ef4444" fontSize="8">Huge IT → fuse blows → all off</text>
    </svg>
  );
}

/* ─── Worked example card ────────────────────────────────────────────────── */
function Ex({ num, title, given, find, steps, answer, colour = "blue" }: {
  num: string; title: string; given: string[]; find: string;
  steps: string[]; answer: string | string[]; colour?: string;
}) {
  const answers = Array.isArray(answer) ? answer : [answer];
  return (
    <div className={`bg-${colour}-400/5 border border-${colour}-400/25 rounded-2xl overflow-hidden`}>
      <div className={`px-5 py-3 border-b border-${colour}-400/20 flex items-center gap-3`}>
        <span className={`text-xs font-bold uppercase tracking-widest text-${colour}-300`}>Example {num}</span>
        <span className="text-sm text-muted-foreground">{title}</span>
      </div>
      <div className="p-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">Given</p>
          {given.map((g, i) => <p key={i} className="font-mono text-sm text-foreground">{g}</p>)}
          <p className="font-mono text-sm text-muted-foreground mt-1">Find: <span className={`text-${colour}-300`}>{find}</span></p>
        </div>
        <div className="space-y-1">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">Solution</p>
          {steps.map((s, i) => <p key={i} className="font-mono text-xs text-muted-foreground">{s}</p>)}
          <div className={`mt-2 bg-background/40 border border-${colour}-400/30 rounded-lg px-3 py-2 space-y-1`}>
            {answers.map((a, i) => <p key={i} className={`font-mono text-sm font-bold text-${colour}-300`}>{a}</p>)}
          </div>
        </div>
      </div>
    </div>
  );
}

function ExQ({ items }: { items: string[] }) {
  return (
    <div className="bg-background/30 border border-white/8 rounded-xl p-5 space-y-3">
      <p className="text-sm font-semibold text-foreground">Practice Questions</p>
      <ol className="space-y-1.5 list-decimal list-inside">
        {items.map((q, i) => <li key={i} className="text-xs text-muted-foreground leading-relaxed">{q}</li>)}
      </ol>
    </div>
  );
}

/* ─── Page ──────────────────────────────────────────────────────────────── */
export default function ParallelCircuit() {
  return (
    <div className="max-w-4xl mx-auto space-y-10 pb-16 p-6 md:p-8">

      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-3">
          <div className="bg-violet-400/10 border border-violet-400/20 rounded-lg p-2">
            <GitBranch className="w-5 h-5 text-violet-400" />
          </div>
          <span className="text-sm font-medium text-primary uppercase tracking-widest">1C — Electrical Theory</span>
        </div>
        <h1 className="text-4xl font-display font-bold text-foreground tracking-tight mb-3">The Parallel Circuit</h1>
        <p className="text-muted-foreground leading-relaxed max-w-2xl">
          Chapter 7 — In a parallel circuit every component connects directly to the supply voltage.
          This chapter covers how to find total resistance using reciprocal equations, branch currents using Ohm's law
          and Kirchhoff's current law, power, and the effect of open- and short-circuit faults.
        </p>
      </div>

      {/* ── 7.1 What is a Parallel Circuit ── */}
      <div className="bg-card border border-white/8 rounded-2xl overflow-hidden">
        <div className="px-6 py-4 border-b border-white/8 flex items-center gap-3">
          <BookOpen className="w-4 h-4 text-primary" />
          <h2 className="font-semibold text-foreground">7.1 — The Parallel Circuit</h2>
        </div>
        <div className="p-6 space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-violet-400/5 border border-violet-400/25 rounded-xl p-4 space-y-2">
              <p className="text-sm font-semibold text-violet-300">Definition</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                In a parallel circuit, <strong className="text-foreground">all components connect directly to the supply voltage</strong>.
                Each component has its own independent branch. Unlike a series circuit, a parallel circuit
                has <strong className="text-foreground">multiple paths for the current</strong>.
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                A component in a parallel circuit may have more than two conductors connected to its terminals —
                this is what distinguishes parallel from series wiring.
              </p>
            </div>
            <div className="bg-background/30 border border-white/8 rounded-xl p-4 space-y-2">
              <p className="text-sm font-semibold text-foreground">Everyday Examples</p>
              {[
                { ex:"Wall power outlets", note:"Appliances plugged into the same outlet are in parallel." },
                { ex:"Car electrical system", note:"Lights and accessories all run in parallel with the battery." },
                { ex:"House wiring", note:"Every appliance is in parallel with the mains supply." },
                { ex:"Modern Christmas lights", note:"Parallel — one fails, rest stay on." },
                { ex:"Voltmeter connections", note:"A voltmeter is always connected in parallel to measure voltage." },
              ].map(({ ex, note }) => (
                <div key={ex} className="flex gap-2 text-xs">
                  <span className="text-violet-400 flex-shrink-0">•</span>
                  <span><span className="text-foreground font-medium">{ex}</span> — {note}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-background/30 border border-white/8 rounded-xl p-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground text-center mb-3">Parallel Circuit — Multiple Paths for Current</p>
            <ParallelCircuitSVG />
          </div>
        </div>
      </div>

      {/* ── 7.2 Voltage ── */}
      <div className="bg-card border border-white/8 rounded-2xl overflow-hidden">
        <div className="px-6 py-4 border-b border-white/8 flex items-center gap-3">
          <Zap className="w-4 h-4 text-yellow-400" />
          <h2 className="font-semibold text-foreground">7.2 — Voltage in the Parallel Circuit</h2>
        </div>
        <div className="p-6 space-y-4">
          <div className="bg-yellow-400/5 border border-yellow-400/25 rounded-xl p-4 space-y-2">
            <p className="font-mono text-2xl font-bold text-yellow-300">V = V₁ = V₂ = V₃ …</p>
            <p className="text-sm text-muted-foreground">
              The voltage across <strong className="text-foreground">every component</strong> in a parallel circuit is equal
              to the applied (supply) voltage.
            </p>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Because each branch connects directly to the supply terminals, a voltmeter placed across any branch —
            or across the battery — will read the same value. This is the opposite of the series circuit,
            where voltage drops vary with resistance.
          </p>
          <div className="bg-blue-400/5 border border-blue-400/25 rounded-xl p-4">
            <p className="text-xs font-semibold text-blue-300 mb-2">Voltmeter rule</p>
            <p className="text-xs text-muted-foreground">
              A voltmeter must always be connected in <strong className="text-foreground">parallel</strong> with a component to
              measure the voltage across it. A voltmeter has very high resistance so it draws negligible current.
            </p>
          </div>
        </div>
      </div>

      {/* ── 7.3 Current ── */}
      <div className="bg-card border border-white/8 rounded-2xl overflow-hidden">
        <div className="px-6 py-4 border-b border-white/8 flex items-center gap-3">
          <Zap className="w-4 h-4 text-blue-400" />
          <h2 className="font-semibold text-foreground">7.3 — Current in the Parallel Circuit</h2>
        </div>
        <div className="p-6 space-y-5">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Unlike a series circuit, each branch in a parallel circuit carries its own current, which is
            usually different in each branch. Each branch is treated independently with Ohm's law.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-blue-400/5 border border-blue-400/25 rounded-xl p-4 space-y-2">
              <p className="text-sm font-semibold text-blue-300">Branch Currents (Ohm's Law)</p>
              <p className="font-mono text-sm text-foreground">I₁ = V / R₁</p>
              <p className="font-mono text-sm text-foreground">I₂ = V / R₂</p>
              <p className="font-mono text-sm text-foreground">I₃ = V / R₃</p>
              <p className="text-xs text-muted-foreground mt-1">
                Lower branch resistance → higher branch current (I is inversely proportional to R for constant V).
              </p>
            </div>
            <div className="bg-green-400/5 border border-green-400/25 rounded-xl p-4 space-y-2">
              <p className="text-sm font-semibold text-green-300">Total Current (KCL)</p>
              <p className="font-mono text-xl font-bold text-green-300">IT = I₁ + I₂ + I₃ …</p>
              <p className="text-xs text-muted-foreground">
                The total current from the supply is the <strong className="text-foreground">sum of all branch currents</strong>.
                Adding another parallel branch increases IT.
              </p>
            </div>
          </div>

          {/* Kirchhoff's Current Law */}
          <div className="bg-violet-400/5 border border-violet-400/25 rounded-2xl p-5 space-y-3">
            <p className="text-sm font-semibold text-violet-300">Kirchhoff's Current Law (KCL)</p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Kirchhoff also developed a law for current: <strong className="text-foreground">The algebraic sum of all currents
              entering a junction equals the algebraic sum of the currents leaving the junction.</strong>
            </p>
            <div className="bg-background/30 border border-white/8 rounded-xl p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground text-center mb-3">Current at a Junction (10 V supply: R₁=100Ω, R₂=20Ω, R₃=10Ω)</p>
              <JunctionSVG />
              <div className="grid grid-cols-3 gap-2 mt-3">
                {[
                  { label:"I₁", val:"10/100 = 0.1 A", c:"text-blue-300" },
                  { label:"I₂", val:"10/20 = 0.5 A",  c:"text-violet-300" },
                  { label:"I₃", val:"10/10 = 1.0 A",  c:"text-orange-300" },
                ].map(({ label, val, c }) => (
                  <div key={label} className="text-center bg-muted/10 rounded-lg py-2">
                    <p className={`font-mono text-sm font-bold ${c}`}>{label}</p>
                    <p className="font-mono text-xs text-muted-foreground">{val}</p>
                  </div>
                ))}
              </div>
              <p className="font-mono text-sm font-bold text-green-300 text-center mt-2">IT = 0.1 + 0.5 + 1.0 = 1.6 A</p>
            </div>
          </div>

          <Ex num="7.1" title="Find I₁ and I₂ using Ohm's law and KCL"
            given={["R₁ = 50 Ω", "IT = 1.2 A", "V = 25 V"]} find="I₁ · I₂"
            steps={[
              "I₁ = V / R₁ = 25 / 50 = 0.5 A",
              "KCL: IT = I₁ + I₂",
              "I₂ = IT − I₁ = 1.2 − 0.5",
            ]}
            answer={["I₁ = 0.5 A · I₂ = 0.7 A"]}
            colour="blue"
          />

          <ExQ items={[
            "A junction has three wires — one from the supply (IT = 12 A) and two feeding branches. Branch 1 carries 7.5 A. What is branch 2's current?",
            "A parallel circuit (230 V) has three branches. The maximum IT allowed is 10 A. Calculate: (a) total maximum power, (b) minimum total resistance.",
          ]} />
        </div>
      </div>

      {/* ── 7.4 Resistance ── */}
      <div className="bg-card border border-white/8 rounded-2xl overflow-hidden">
        <div className="px-6 py-4 border-b border-white/8 flex items-center gap-3">
          <Calculator className="w-4 h-4 text-orange-400" />
          <h2 className="font-semibold text-foreground">7.4 — Resistance in the Parallel Circuit</h2>
        </div>
        <div className="p-6 space-y-5">

          <div className="bg-orange-400/5 border border-orange-400/25 rounded-xl p-4 space-y-2">
            <p className="text-sm font-semibold text-orange-300">Key rule</p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Adding another resistor in parallel <strong className="text-foreground">always reduces RT</strong> (more paths = more current = lower total resistance).
              Removing a branch always increases RT. The total resistance must always be
              <strong className="text-foreground"> less than the smallest branch resistance</strong>.
            </p>
          </div>

          {/* Three RT equations */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-background/30 border border-white/8 rounded-xl p-4 space-y-2">
              <p className="text-xs font-semibold text-orange-300 uppercase tracking-widest">General (any number)</p>
              <p className="font-mono text-base font-bold text-foreground">1/RT = 1/R₁ + 1/R₂ + …</p>
              <p className="text-xs text-muted-foreground">Sum the reciprocals, then take the reciprocal of the result.</p>
            </div>
            <div className="bg-background/30 border border-white/8 rounded-xl p-4 space-y-2">
              <p className="text-xs font-semibold text-yellow-300 uppercase tracking-widest">Two resistors only</p>
              <p className="font-mono text-base font-bold text-foreground">RT = (R₁ × R₂) / (R₁ + R₂)</p>
              <p className="text-xs text-muted-foreground">Product ÷ Sum — a faster shortcut for exactly two branches.</p>
            </div>
            <div className="bg-background/30 border border-white/8 rounded-xl p-4 space-y-2">
              <p className="text-xs font-semibold text-green-300 uppercase tracking-widest">Equal values</p>
              <p className="font-mono text-base font-bold text-foreground">RT = R / n</p>
              <p className="text-xs text-muted-foreground">Where R = resistance of each and n = number of branches.</p>
            </div>
          </div>

          {/* Calculator tip */}
          <div className="bg-blue-400/5 border border-blue-400/25 rounded-xl p-4 space-y-1">
            <p className="text-xs font-semibold text-blue-300">Calculator tip — same multiplier trick</p>
            <p className="text-xs text-muted-foreground">
              When all resistors share the same multiplier (all kΩ or all MΩ), drop the multiplier, calculate RT,
              then add the multiplier back. E.g., 1.2 kΩ ∥ 1.5 kΩ ∥ 1.8 kΩ → enter 1.2, 1.5, 1.8 → get 0.487 → answer: 0.487 kΩ = 487 Ω.
            </p>
          </div>

          <Ex num="7.2" title="Three resistors in parallel — general equation"
            given={["R₁ = 100 Ω", "R₂ = 220 Ω", "R₃ = 330 Ω"]} find="RT"
            steps={[
              "1/RT = 1/100 + 1/220 + 1/330",
              "1/RT = 0.01 + 0.004545 + 0.003030",
              "1/RT = 0.017576",
              "RT = 1 / 0.017576",
            ]}
            answer="RT = 56.9 Ω" colour="orange"
          />

          <Ex num="7.3" title="Three resistors in kΩ — same-multiplier shortcut"
            given={["R₁ = 8 kΩ", "R₂ = 2 kΩ", "R₃ = 1.6 kΩ"]} find="RT"
            steps={[
              "Drop k: 1/RT = 1/8 + 1/2 + 1/1.6",
              "1/RT = 0.125 + 0.5 + 0.625 = 1.25",
              "RT = 1 / 1.25 = 0.8 (bring back k)",
            ]}
            answer="RT = 800 Ω" colour="orange"
          />

          <Ex num="7.4" title="Two resistors — product ÷ sum shortcut"
            given={["VT = 12 V", "R₁ = 60 Ω", "R₂ = 40 Ω"]} find="RT · IT"
            steps={[
              "RT = (R₁ × R₂) / (R₁ + R₂)",
              "RT = (60 × 40) / (60 + 40) = 2400 / 100",
              "IT = VT / RT = 12 / 24",
            ]}
            answer={["RT = 24 Ω · IT = 0.5 A"]}
            colour="yellow"
          />

          <Ex num="7.5" title="Six identical resistors — equal-value shortcut"
            given={["R = 12 Ω each", "n = 6"]} find="RT"
            steps={["RT = R / n = 12 / 6"]}
            answer="RT = 2 Ω" colour="green"
          />

          <ExQ items={[
            "Find RT for: (a) R₁ = 48 Ω, R₂ = 120 Ω, R₃ = 72 Ω · (b) R₁ = 400 Ω, R₂ = 630 Ω, R₃ = 550 Ω · (c) three 24 Ω resistors.",
            "Two resistors of 240 Ω and 400 Ω are connected in parallel. Find their total resistance.",
            "Eight identical lamps connected in parallel have a total resistance of 240 Ω. What is the resistance of one lamp?",
            "A 120 V circuit has five parallel appliances. When all are on, IT = 5 A. (a) Find RT. (b) Find IT when an 80 Ω appliance is switched off.",
          ]} />
        </div>
      </div>

      {/* ── 7.5 Summary of Equations ── */}
      <div className="bg-card border border-white/8 rounded-2xl overflow-hidden">
        <div className="px-6 py-4 border-b border-white/8 flex items-center gap-3">
          <BookOpen className="w-4 h-4 text-primary" />
          <h2 className="font-semibold text-foreground">7.5 — Equation Reference</h2>
        </div>
        <div className="p-6 space-y-5">
          <p className="text-sm text-muted-foreground">
            Eleven equations cover all calculations in a parallel circuit. Choose based on what is known.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Resistance */}
            <div className="bg-orange-400/5 border border-orange-400/25 rounded-2xl p-4 space-y-2">
              <p className="text-sm font-semibold text-orange-300 mb-2">Resistance</p>
              {[
                { n:"1", eq:"1/RT = 1/R₁ + 1/R₂…", note:"General — any number of branches" },
                { n:"2", eq:"RT = R₁R₂ / (R₁+R₂)",  note:"Two resistors — product ÷ sum" },
                { n:"3", eq:"RT = R / n",             note:"All equal values" },
                { n:"4", eq:"RT = V / IT",            note:"Ohm's law — if V and IT known" },
                { n:"5", eq:"R₁=V/I₁  R₂=V/I₂",    note:"Ohm's law — individual branches" },
              ].map(({ n, eq, note }) => (
                <div key={n} className="flex gap-2 text-xs">
                  <span className="text-orange-400 font-mono font-bold flex-shrink-0 w-4">{n}.</span>
                  <div><p className="font-mono text-foreground">{eq}</p><p className="text-muted-foreground">{note}</p></div>
                </div>
              ))}
            </div>
            {/* Voltage */}
            <div className="bg-yellow-400/5 border border-yellow-400/25 rounded-2xl p-4 space-y-2">
              <p className="text-sm font-semibold text-yellow-300 mb-2">Voltage</p>
              {[
                { n:"6", eq:"V = IT × RT",      note:"Ohm's law with totals" },
                { n:"7", eq:"V = I₁×R₁ = I₂×R₂", note:"Any branch gives same V" },
              ].map(({ n, eq, note }) => (
                <div key={n} className="flex gap-2 text-xs">
                  <span className="text-yellow-400 font-mono font-bold flex-shrink-0 w-4">{n}.</span>
                  <div><p className="font-mono text-foreground">{eq}</p><p className="text-muted-foreground">{note}</p></div>
                </div>
              ))}
              <div className="bg-yellow-400/10 rounded-lg px-3 py-2 mt-1">
                <p className="text-xs text-yellow-200 font-semibold">Key rule</p>
                <p className="text-xs text-muted-foreground">Voltage is the same across every branch — always equals the applied voltage.</p>
              </div>
            </div>
            {/* Current */}
            <div className="bg-blue-400/5 border border-blue-400/25 rounded-2xl p-4 space-y-2">
              <p className="text-sm font-semibold text-blue-300 mb-2">Current</p>
              {[
                { n:"8",  eq:"IT = V / RT",         note:"Ohm's law" },
                { n:"9",  eq:"IT = I₁ + I₂ + I₃…", note:"KCL — sum of branch currents" },
                { n:"10", eq:"I? = IT − (others)",  note:"Find one unknown branch I" },
                { n:"11", eq:"I₁=V/R₁  I₂=V/R₂",  note:"Ohm's law per branch" },
              ].map(({ n, eq, note }) => (
                <div key={n} className="flex gap-2 text-xs">
                  <span className="text-blue-400 font-mono font-bold flex-shrink-0 w-4">{n}.</span>
                  <div><p className="font-mono text-foreground">{eq}</p><p className="text-muted-foreground">{note}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── 7.6 Power ── */}
      <div className="bg-card border border-white/8 rounded-2xl overflow-hidden">
        <div className="px-6 py-4 border-b border-white/8 flex items-center gap-3">
          <Zap className="w-4 h-4 text-yellow-400" />
          <h2 className="font-semibold text-foreground">7.6 — Power in the Parallel Circuit</h2>
        </div>
        <div className="p-6 space-y-5">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Each branch is independent — to find the power in one branch, treat it as a single component
            connected to the supply. The total power is the sum of all branch powers.
            Any of the three power equations (P = VI, P = I²R, P = V²/R) can be used.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { eq:"PT = VT × IT",   note:"Use if total V and IT are known",      c:"yellow" },
              { eq:"PT = IT² × RT",  note:"Use if IT and RT are known",            c:"yellow" },
              { eq:"PT = VT² / RT",  note:"Use if VT and RT are known (simplest)", c:"yellow" },
            ].map(({ eq, note, c }) => (
              <div key={eq} className={`bg-${c}-400/5 border border-${c}-400/25 rounded-xl p-4 space-y-1 text-center`}>
                <p className={`font-mono text-sm font-bold text-${c}-300`}>{eq}</p>
                <p className="text-xs text-muted-foreground">{note}</p>
              </div>
            ))}
          </div>

          <Ex num="7.6" title="Power of each appliance on 230 V supply"
            given={["V = 230 V", "Kettle: I₁ = 4 A", "Heater: I₂ = 7 A", "Toaster: R₃ = 45 Ω"]} find="P₁ · P₂ · P₃ · PT"
            steps={[
              "P₁ (kettle)  = V × I₁ = 230 × 4",
              "P₂ (heater)  = V × I₂ = 230 × 7",
              "P₃ (toaster) = V² / R₃ = 230² / 45 = 52900 / 45",
              "PT = 920 + 1610 + 1178 = 3708 W",
            ]}
            answer={["P₁ = 920 W · P₂ = 1610 W · P₃ ≈ 1178 W · PT ≈ 3.71 kW"]}
            colour="yellow"
          />

          <Ex num="7.7" title="Total power — three resistors, find RT first"
            given={["V = 30 V", "R₁ = 33 Ω", "R₂ = 47 Ω", "R₃ = 56 Ω"]} find="PT"
            steps={[
              "1/RT = 1/33 + 1/47 + 1/56 = 0.06951",
              "RT = 1 / 0.06951 = 14.4 Ω",
              "PT = V² / RT = 30² / 14.4 = 900 / 14.4",
            ]}
            answer="PT = 62.5 W" colour="orange"
          />

          <ExQ items={[
            "A 230 V parallel circuit has three loads with IT = 15 A. Calculate PT and RT.",
            "A 120 V circuit has five parallel appliances drawing IT = 5 A. Find: (a) RT · (b) PT · (c) new IT if an 80 Ω appliance is removed.",
          ]} />
        </div>
      </div>

      {/* ── 7.7 Faults ── */}
      <div className="bg-card border border-white/8 rounded-2xl overflow-hidden">
        <div className="px-6 py-4 border-b border-white/8 flex items-center gap-3">
          <AlertTriangle className="w-4 h-4 text-red-400" />
          <h2 className="font-semibold text-foreground">7.7 — Faults in the Parallel Circuit</h2>
        </div>
        <div className="p-6 space-y-6">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Because each branch is independent (sharing the same supply voltage), the two faults — open-circuit
            and short-circuit — behave very differently from their series-circuit counterparts.
          </p>

          {/* Open circuit */}
          <div className="bg-orange-400/5 border border-orange-400/25 rounded-2xl p-5 space-y-4">
            <h3 className="font-semibold text-orange-300">1. Open-Circuit Fault</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              If one branch of a parallel circuit fails open (e.g. a lamp filament burns out), only that branch
              stops working. All other branches continue to operate normally.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-background/30 border border-white/8 rounded-xl p-4">
                <OpenFaultSVG />
              </div>
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-widest text-orange-300">Effects</p>
                {[
                  { e:"Faulty branch", v:"No current — component off" },
                  { e:"Other branches", v:"Unaffected — still receiving full VT" },
                  { e:"Voltage across fault", v:"Still reads supply voltage VT (connected to rails)" },
                  { e:"Total current IT", v:"Drops by the value the open branch was carrying" },
                  { e:"Total power PT", v:"Drops by the power the open branch was consuming" },
                ].map(({ e, v }) => (
                  <div key={e} className="flex gap-2 text-xs">
                    <span className="text-orange-400 w-36 flex-shrink-0">{e}:</span>
                    <span className="text-muted-foreground">{v}</span>
                  </div>
                ))}
                <div className="bg-orange-400/10 border border-orange-400/20 rounded-lg px-3 py-2 mt-2">
                  <p className="text-xs font-semibold text-orange-300">Open-circuit in a conductor</p>
                  <p className="text-xs text-muted-foreground">If the open-circuit is in a shared conductor (between junctions), all branches after the break are isolated. Their voltage reads zero; the voltage across the open-circuit equals VT.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Short circuit */}
          <div className="bg-red-400/5 border border-red-400/25 rounded-2xl p-5 space-y-4">
            <h3 className="font-semibold text-red-300">2. Short-Circuit Fault</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A short-circuit across a branch is effectively a short-circuit across the supply. The current is
              limited only by the source capacity and conductor resistance — this is extremely dangerous.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-background/30 border border-white/8 rounded-xl p-4">
                <ShortFaultSVG />
              </div>
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-widest text-red-300">Effects</p>
                {[
                  { e:"Total RT", v:"Drops to near zero" },
                  { e:"Total IT", v:"Increases enormously" },
                  { e:"Voltage across all branches", v:"Drops to near zero" },
                  { e:"All components", v:"Stop working — no supply voltage" },
                  { e:"Protection device", v:"Fuse blows or circuit breaker trips" },
                  { e:"Without protection", v:"Conductors may burn out" },
                ].map(({ e, v }) => (
                  <div key={e} className="flex gap-2 text-xs">
                    <span className="text-red-400 w-36 flex-shrink-0">{e}:</span>
                    <span className="text-muted-foreground">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <ExQ items={[
            "A 12 V parallel circuit has three identical lamps (each 12 Ω) operating normally. One lamp goes open-circuit. Find the new IT and PT.",
            "Why is a short-circuit fault in a parallel circuit more dangerous than in a series circuit?",
            "In a parallel circuit, lamp 2 of 3 fails open. An electrician measures the voltage across it — what does she read? Why?",
          ]} />
        </div>
      </div>

      {/* ── 7.8 Comparison ── */}
      <div className="bg-card border border-white/8 rounded-2xl overflow-hidden">
        <div className="px-6 py-4 border-b border-white/8 flex items-center gap-3">
          <ArrowLeftRight className="w-4 h-4 text-violet-400" />
          <h2 className="font-semibold text-foreground">7.8 — Series vs Parallel Comparison</h2>
        </div>
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-muted-foreground font-semibold uppercase tracking-widest">Function</th>
                  <th className="text-center py-3 px-4 text-blue-300 font-semibold uppercase tracking-widest">Series Circuit</th>
                  <th className="text-center py-3 px-4 text-violet-300 font-semibold uppercase tracking-widest">Parallel Circuit</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    fn: "Voltage",
                    s: "Unequal — drops across each component",
                    p: "Equal — same as supply across every branch",
                  },
                  {
                    fn: "Current",
                    s: "Equal — same in all parts",
                    p: "Unequal — different in each branch",
                  },
                  {
                    fn: "Adding resistance",
                    s: "RT increases — I decreases",
                    p: "RT decreases — IT increases",
                  },
                  {
                    fn: "Open-circuit in one branch",
                    s: "I = 0 everywhere — ALL stop",
                    p: "Only that branch stops — others unaffected",
                  },
                  {
                    fn: "Short-circuit in one branch",
                    s: "I rises to a limit set by remaining R",
                    p: "Massive IT — fuse/CB operates — ALL stop",
                  },
                  {
                    fn: "Individual switching",
                    s: "One switch controls all components",
                    p: "Each branch can have its own switch",
                  },
                  {
                    fn: "Number of components",
                    s: "Limited by supply voltage (V shared)",
                    p: "Limited only by supply current capacity",
                  },
                  {
                    fn: "Typical application",
                    s: "Control circuits, safety interlocks",
                    p: "Power distribution, house wiring, car electrics",
                  },
                ].map(({ fn, s, p }, i) => (
                  <tr key={fn} className={`border-b border-white/5 ${i % 2 === 0 ? "bg-muted/5" : ""}`}>
                    <td className="py-3 px-4 text-foreground font-medium">{fn}</td>
                    <td className="py-3 px-4 text-muted-foreground text-center">{s}</td>
                    <td className="py-3 px-4 text-muted-foreground text-center">{p}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ── Chapter Summary ── */}
      <div className="bg-card border border-border rounded-2xl p-5 space-y-4">
        <h2 className="font-semibold text-foreground">Chapter Summary</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {[
            "Voltage is the same across all components in a parallel circuit — equals the applied voltage.",
            "Each branch current is independent: I₁ = V/R₁, I₂ = V/R₂, etc.",
            "Total current (KCL): IT = I₁ + I₂ + I₃ … The lower the branch resistance, the higher its current.",
            "Total resistance is always less than the smallest branch resistance. Adding branches reduces RT.",
            "General RT: 1/RT = 1/R₁ + 1/R₂ + …  Two resistors: RT = R₁R₂/(R₁+R₂)  Equal values: RT = R/n",
            "Total power: PT = VT × IT = IT²RT = VT²/RT. Also PT = P₁ + P₂ + P₃ …",
            "Open-circuit in one branch — only that branch stops; all others continue; IT and PT drop.",
            "Short-circuit in any branch — massive IT, fuse/CB trips, voltage across all branches → 0, all stop.",
            "Kirchhoff's Current Law: Current into a junction = current out of the junction.",
            "Parallel circuits are used for all power distribution (house wiring, car electrics) — each load at full voltage.",
          ].map((pt, i) => (
            <div key={i} className="flex gap-2 bg-muted/10 rounded-xl px-3 py-2">
              <span className="text-primary font-bold flex-shrink-0 text-xs mt-0.5">•</span>
              <p className="text-xs text-muted-foreground leading-relaxed">{pt}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
