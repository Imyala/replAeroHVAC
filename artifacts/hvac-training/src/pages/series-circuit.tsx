import { Layers, Info, Zap } from "lucide-react";

/* ─── Colour-banded resistor SVG component ─────────────────────────────────── */
function Resistor({ x, y, bands }: { x: number; y: number; bands: string[] }) {
  const w = 52, h = 18, rx = 3;
  return (
    <g>
      {/* body */}
      <rect x={x} y={y - h / 2} width={w} height={h} rx={rx} fill="#d1c9b0" stroke="#8a8070" strokeWidth="0.8"/>
      {/* colour bands */}
      {bands.map((c, i) => (
        <rect key={i} x={x + 8 + i * 10} y={y - h / 2 + 1} width={7} height={h - 2} fill={c} rx="1"/>
      ))}
    </g>
  );
}

/* ─── Main series circuit diagram (100 V, R1=10Ω R2=15Ω R3=25Ω) ─────────── */
function SeriesCircuitDiagram() {
  // R1 10Ω: brown-black-black-gold; R2 15Ω: brown-green-black-gold; R3 25Ω: red-green-black-gold
  return (
    <svg viewBox="0 0 620 230" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-2xl mx-auto">

      {/* ── Supply (bottom centre) ── */}
      <circle cx="310" cy="195" r="22" fill="#fffde7" stroke="#b45309" strokeWidth="1.5"/>
      <text x="310" y="199" textAnchor="middle" fill="#78350f" fontSize="11" fontWeight="bold">100V</text>

      {/* ── Wires ── */}
      {/* bottom-left */}
      <line x1="60"  y1="195" x2="288" y2="195" stroke="#1e293b" strokeWidth="3"/>
      {/* bottom-right */}
      <line x1="332" y1="195" x2="560" y2="195" stroke="#1e293b" strokeWidth="3"/>
      {/* left vertical */}
      <line x1="60"  y1="60"  x2="60"  y2="195" stroke="#1e293b" strokeWidth="3"/>
      {/* right vertical */}
      <line x1="560" y1="60"  x2="560" y2="195" stroke="#1e293b" strokeWidth="3"/>
      {/* top wire left-to-R1 */}
      <line x1="60"  y1="60"  x2="120" y2="60"  stroke="#ef4444" strokeWidth="3"/>
      {/* top between R1-R2 */}
      <line x1="172" y1="60"  x2="242" y2="60"  stroke="#ef4444" strokeWidth="3"/>
      {/* top between R2-R3 */}
      <line x1="294" y1="60"  x2="368" y2="60"  stroke="#ef4444" strokeWidth="3"/>
      {/* top R3-right */}
      <line x1="420" y1="60"  x2="560" y2="60"  stroke="#ef4444" strokeWidth="3"/>

      {/* current arrows */}
      <polygon points="95,55 108,60 95,65"  fill="#ef4444"/>
      <polygon points="217,55 230,60 217,65" fill="#ef4444"/>
      <polygon points="343,55 356,60 343,65" fill="#ef4444"/>
      <polygon points="495,55 508,60 495,65" fill="#ef4444"/>
      {/* return arrow */}
      <polygon points="210,190 197,195 210,200" fill="#1e293b"/>

      {/* ── Short wire stubs ── */}
      <line x1="120" y1="60" x2="122" y2="60" stroke="#ef4444" strokeWidth="3"/>
      <line x1="172" y1="60" x2="174" y2="60" stroke="#ef4444" strokeWidth="3"/>
      <line x1="242" y1="60" x2="244" y2="60" stroke="#ef4444" strokeWidth="3"/>
      <line x1="294" y1="60" x2="296" y2="60" stroke="#ef4444" strokeWidth="3"/>
      <line x1="368" y1="60" x2="370" y2="60" stroke="#ef4444" strokeWidth="3"/>
      <line x1="420" y1="60" x2="422" y2="60" stroke="#ef4444" strokeWidth="3"/>

      {/* ── Resistors ── */}
      <Resistor x={120} y={60} bands={["#795548","#212121","#212121","#ffd700"]}/>
      <Resistor x={242} y={60} bands={["#795548","#4caf50","#212121","#ffd700"]}/>
      <Resistor x={368} y={60} bands={["#f44336","#4caf50","#212121","#ffd700"]}/>

      {/* ── Resistor labels ── */}
      <text x="146" y="46" textAnchor="middle" fill="#a78bfa" fontSize="10" fontWeight="bold">R1 = 10 Ω</text>
      <text x="268" y="46" textAnchor="middle" fill="#a78bfa" fontSize="10" fontWeight="bold">R2 = 15 Ω</text>
      <text x="394" y="46" textAnchor="middle" fill="#a78bfa" fontSize="10" fontWeight="bold">R3 = 25 Ω</text>
      <text x="146" y="89"  textAnchor="middle" fill="#a78bfa" fontSize="9">R1</text>
      <text x="268" y="89"  textAnchor="middle" fill="#a78bfa" fontSize="9">R2</text>
      <text x="394" y="89"  textAnchor="middle" fill="#a78bfa" fontSize="9">R3</text>

      {/* ── Voltmeter circles above each resistor ── */}
      {[{cx:146,cy:28,v:"20V"},{cx:268,cy:28,v:"30V"},{cx:394,cy:28,v:"50V"}].map(({cx,cy,v})=>(
        <g key={cx}>
          <circle cx={cx} cy={cy} r={14} fill="#fffde7" stroke="#b45309" strokeWidth="1.5"/>
          <text x={cx} y={cy+4} textAnchor="middle" fill="#78350f" fontSize="9" fontWeight="bold">{v}</text>
          <line x1={cx-14} y1={cy+7} x2={cx-14} y2={51} stroke="#86efac" strokeWidth="1" strokeDasharray="3,2"/>
          <line x1={cx+14} y1={cy+7} x2={cx+14} y2={51} stroke="#86efac" strokeWidth="1" strokeDasharray="3,2"/>
        </g>
      ))}

      {/* ── Current label ── */}
      <text x="310" y="215" textAnchor="middle" fill="#ef4444" fontSize="10" fontWeight="bold">
        IT = Vt/Rt = 100/50 = 2A  (same everywhere)
      </text>

      {/* ── Total current labels ── */}
      <text x="160" y="212" textAnchor="middle" fontSize="9" fill="#94a3b8">Total current = 2A</text>
      <text x="460" y="212" textAnchor="middle" fill="#94a3b8" fontSize="9">Return current = 2A</text>
    </svg>
  );
}

/* ─── Voltage diagram showing Vt = V1+V2+V3 ────────────────────────────────── */
function VoltageAddDiagram() {
  return (
    <svg viewBox="0 0 520 120" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-xl mx-auto">
      {/* Total bar */}
      <rect x="10" y="10" width="500" height="28" rx="4" fill="#1e3a5f" stroke="#38bdf8" strokeWidth="1.5"/>
      <text x="260" y="29" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold">VT = 100 V (total supply)</text>
      {/* V1 */}
      <rect x="10" y="50" width="100" height="28" rx="4" fill="#166534" stroke="#86efac" strokeWidth="1.5"/>
      <text x="60" y="69" textAnchor="middle" fill="#86efac" fontSize="10" fontWeight="bold">V1 = 20 V</text>
      {/* V2 */}
      <rect x="115" y="50" width="150" height="28" rx="4" fill="#1d4ed8" stroke="#93c5fd" strokeWidth="1.5"/>
      <text x="190" y="69" textAnchor="middle" fill="#93c5fd" fontSize="10" fontWeight="bold">V2 = 30 V</text>
      {/* V3 */}
      <rect x="270" y="50" width="240" height="28" rx="4" fill="#7c3aed" stroke="#c4b5fd" strokeWidth="1.5"/>
      <text x="390" y="69" textAnchor="middle" fill="#c4b5fd" fontSize="10" fontWeight="bold">V3 = 50 V</text>
      {/* formula */}
      <text x="260" y="108" textAnchor="middle" fill="#fbbf24" fontSize="10" fontWeight="bold">
        VT = V1 + V2 + V3 = 20 + 30 + 50 = 100 V ✓
      </text>
    </svg>
  );
}

/* ─── Power diagram ─────────────────────────────────────────────────────────── */
function PowerDiagram() {
  return (
    <svg viewBox="0 0 520 110" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-xl mx-auto">
      <rect x="10" y="10" width="500" height="28" rx="4" fill="#451a03" stroke="#f97316" strokeWidth="1.5"/>
      <text x="260" y="29" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="bold">PT = 200 W (total power = IT × VT = 2 × 100)</text>
      <rect x="10"  y="50" width="100" height="28" rx="4" fill="#1c1917" stroke="#fbbf24" strokeWidth="1.5"/>
      <text x="60"  y="69" textAnchor="middle" fill="#fbbf24" fontSize="10" fontWeight="bold">P1 = 40 W</text>
      <rect x="115" y="50" width="150" height="28" rx="4" fill="#1c1917" stroke="#fbbf24" strokeWidth="1.5"/>
      <text x="190" y="69" textAnchor="middle" fill="#fbbf24" fontSize="10" fontWeight="bold">P2 = 60 W</text>
      <rect x="270" y="50" width="240" height="28" rx="4" fill="#1c1917" stroke="#fbbf24" strokeWidth="1.5"/>
      <text x="390" y="69" textAnchor="middle" fill="#fbbf24" fontSize="10" fontWeight="bold">P3 = 100 W</text>
      <text x="260" y="105" textAnchor="middle" fill="#fbbf24" fontSize="10" fontWeight="bold">
        PT = P1 + P2 + P3 = 40 + 60 + 100 = 200 W ✓
      </text>
    </svg>
  );
}

/* ─── Page ─────────────────────────────────────────────────────────────────── */

export default function SeriesCircuit() {
  return (
    <div className="max-w-4xl mx-auto space-y-10 pb-16 p-6 md:p-8">

      {/* ── Header ── */}
      <div>
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
            <Layers className="w-6 h-6 text-primary" />
          </div>
          <span className="text-sm font-medium text-primary uppercase tracking-widest">1B — Electrical Theory</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground tracking-tight mb-3">Series Circuit</h1>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
          In a series circuit, components are connected end-to-end in a single continuous path.
          There is only one route for current — it must flow through every component in turn.
        </p>
      </div>

      {/* ── Four bullet rules ── */}
      <div className="bg-card border border-white/8 rounded-2xl p-5 space-y-3">
        <h2 className="font-semibold text-foreground">Series Circuit Rules</h2>
        <ul className="space-y-2">
          {[
            "There is only one current path in a series circuit.",
            "The current in a series circuit is the same through all components.",
            "The total resistance is the sum of all individual resistances.",
            "The total voltage is the sum of all the voltage drops in the circuit.",
          ].map((rule, i) => (
            <li key={i} className="flex gap-3 text-sm text-muted-foreground">
              <span className="text-primary font-bold flex-shrink-0">•</span>{rule}
            </li>
          ))}
        </ul>
      </div>

      {/* ── Main circuit diagram ── */}
      <div className="bg-card border border-white/8 rounded-2xl p-6 space-y-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground text-center">
          Series Circuit — R1 = 10 Ω, R2 = 15 Ω, R3 = 25 Ω, Supply = 100 V
        </p>
        <SeriesCircuitDiagram />
      </div>

      {/* ── Three formula cards ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          {
            num:"1", rule:"Resistance adds directly",
            formula:"RT = R1 + R2 + R3", calc:"= 10 + 15 + 25 = 50 Ω",
            detail:"The total resistance of the circuit is the sum of the individual resistors. Adding more components always increases total resistance.",
            colour:"text-orange-300", border:"border-orange-400/25", bg:"bg-orange-400/5",
          },
          {
            num:"2", rule:"Current is the same everywhere",
            formula:"IT = Vt ÷ Rt", calc:"= 100 ÷ 50 = 2 A",
            detail:"There is only one path. The same 2 A flows through R1, R2 and R3. Total current = return current.",
            colour:"text-blue-300", border:"border-blue-400/25", bg:"bg-blue-400/5",
          },
          {
            num:"3", rule:"Voltage drops add to supply",
            formula:"Vt = V1 + V2 + V3", calc:"= 20 + 30 + 50 = 100 V",
            detail:"Each resistor 'drops' a portion of the supply voltage proportional to its resistance. The sum always equals Vt.",
            colour:"text-green-300", border:"border-green-400/25", bg:"bg-green-400/5",
          },
        ].map(({ num, rule, formula, calc, detail, colour, border, bg }) => (
          <div key={num} className={`${bg} border ${border} rounded-2xl p-5 space-y-3`}>
            <div className="flex items-center gap-2">
              <span className={`text-2xl font-black ${colour}`}>{num}</span>
              <p className={`text-sm font-semibold ${colour}`}>{rule}</p>
            </div>
            <div className="bg-background/40 border border-white/10 rounded-xl px-3 py-2">
              <p className={`font-mono text-sm font-bold ${colour}`}>{formula}</p>
              <p className={`font-mono text-xs ${colour}`}>{calc}</p>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">{detail}</p>
          </div>
        ))}
      </div>

      {/* ── Calculating individual voltages ── */}
      <div className="bg-card border border-white/8 rounded-2xl overflow-hidden">
        <div className="px-6 py-4 border-b border-white/8 flex items-center gap-3">
          <Zap className="w-4 h-4 text-primary" />
          <h2 className="font-semibold text-foreground">Calculating Individual Voltages</h2>
        </div>
        <div className="p-6 space-y-5">
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 flex gap-3">
            <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"/>
            <p className="text-sm text-muted-foreground leading-relaxed">
              To calculate the individual voltages, use Ohm's Law and keep the values local to each resistor.
              First find the total current using <span className="font-mono text-foreground">IT = VT / RT</span>, then apply
              <span className="font-mono text-foreground"> Vn = IT × Rn</span> to each component.
            </p>
          </div>

          {/* Ohm triangle + steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-start">
            {/* Ohm triangle SVG */}
            <div className="bg-background/30 border border-white/8 rounded-xl p-4">
              <svg viewBox="0 0 180 130" className="w-full max-w-[180px] mx-auto">
                <polygon points="90,8 10,105 170,105" fill="none" stroke="#94a3b8" strokeWidth="1.5"/>
                <line x1="10" y1="55" x2="170" y2="55" stroke="#94a3b8" strokeWidth="1.5"/>
                <line x1="90" y1="55" x2="90" y2="105" stroke="#94a3b8" strokeWidth="1.5"/>
                <text x="90"  y="42" textAnchor="middle" fill="#38bdf8" fontSize="20" fontWeight="bold">V</text>
                <text x="45"  y="90" textAnchor="middle" fill="#f97316" fontSize="18" fontWeight="bold">I</text>
                <text x="135" y="90" textAnchor="middle" fill="#a78bfa" fontSize="18" fontWeight="bold">R</text>
                <text x="90" y="120" textAnchor="middle" fill="#94a3b8" fontSize="9">V = I × R</text>
              </svg>
            </div>
            {/* Steps */}
            <div className="space-y-3">
              <div className="bg-background/30 border border-white/8 rounded-xl p-3 space-y-1">
                <p className="text-xs font-semibold text-orange-300">Step 1 — Total Resistance</p>
                <p className="font-mono text-xs text-muted-foreground">RT = R1 + R2 + R3 = 10 + 15 + 25</p>
                <p className="font-mono text-xs text-orange-300 font-bold">RT = 50 Ω</p>
              </div>
              <div className="bg-background/30 border border-white/8 rounded-xl p-3 space-y-1">
                <p className="text-xs font-semibold text-blue-300">Step 2 — Total Current</p>
                <p className="font-mono text-xs text-muted-foreground">IT = VT / RT = 100 / 50</p>
                <p className="font-mono text-xs text-blue-300 font-bold">IT = 2 A</p>
              </div>
              <div className="bg-background/30 border border-white/8 rounded-xl p-3 space-y-1">
                <p className="text-xs font-semibold text-green-300">Step 3 — Individual Voltages</p>
                <p className="font-mono text-xs text-muted-foreground">V1 = I1 × R1 = 2 × 10 = <span className="text-green-300">20 V</span></p>
                <p className="font-mono text-xs text-muted-foreground">V2 = I2 × R2 = 2 × 15 = <span className="text-green-300">30 V</span></p>
                <p className="font-mono text-xs text-muted-foreground">V3 = I3 × R3 = 2 × 25 = <span className="text-green-300">50 V</span></p>
              </div>
            </div>
          </div>

          {/* Voltage bar diagram */}
          <VoltageAddDiagram />
        </div>
      </div>

      {/* ── Kirchhoff's Voltage Law ── */}
      <div className="bg-yellow-400/5 border border-yellow-400/30 rounded-2xl p-6 space-y-2 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-yellow-300">Kirchhoff's Voltage Law (KVL)</p>
        <p className="text-xl md:text-2xl font-bold text-foreground italic">
          "The algebraic sum of the voltage drops in a series circuit equals the applied voltage."
        </p>
        <p className="font-mono text-lg font-bold text-yellow-300">VT = V1 + V2 + V3  →  20 + 30 + 50 = 100 V ✓</p>
      </div>

      {/* ── Power in a series circuit ── */}
      <div className="bg-card border border-white/8 rounded-2xl overflow-hidden">
        <div className="px-6 py-4 border-b border-white/8">
          <h2 className="font-semibold text-foreground">Power in a Series Circuit</h2>
          <p className="text-xs text-muted-foreground mt-1">Power dissipated in each component adds to give total power</p>
        </div>
        <div className="p-6 space-y-5">
          <div className="bg-background/40 border border-white/10 rounded-xl px-4 py-3 space-y-1">
            <p className="font-mono text-base font-bold text-orange-300">Pn = In × Vn</p>
            <p className="text-xs text-muted-foreground">Power in each component. Since IT is the same: Pn = IT × Vn = IT² × Rn</p>
          </div>

          <div className="grid grid-cols-3 gap-3 text-center">
            {[
              { label:"P1", calc:"I1 × V1", nums:"2 × 20", result:"40 W" },
              { label:"P2", calc:"I2 × V2", nums:"2 × 30", result:"60 W" },
              { label:"P3", calc:"I3 × V3", nums:"2 × 50", result:"100 W" },
            ].map(({ label, calc, nums, result }) => (
              <div key={label} className="bg-background/30 border border-white/8 rounded-xl p-3 space-y-1">
                <p className="text-sm font-bold text-orange-300">{label} = {calc}</p>
                <p className="font-mono text-xs text-muted-foreground">= {nums}</p>
                <p className="font-mono text-sm font-bold text-orange-300">{result}</p>
              </div>
            ))}
          </div>

          <PowerDiagram />

          <div className="bg-background/40 border border-white/10 rounded-xl p-4 space-y-1">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Two ways to find total power</p>
            <p className="font-mono text-sm text-muted-foreground">PT = P1 + P2 + P3 = 40 + 60 + 100 = <span className="text-orange-300 font-bold">200 W</span></p>
            <p className="font-mono text-sm text-muted-foreground">Also:  PT = IT × VT = 2 × 100 = <span className="text-orange-300 font-bold">200 W ✓</span></p>
          </div>
        </div>
      </div>

      {/* ── Full worked example table (240 V, R1=20 R2=10 R3=50) ── */}
      <div className="bg-card border border-white/8 rounded-2xl overflow-hidden">
        <div className="px-6 py-4 border-b border-white/8">
          <h2 className="font-semibold text-foreground">Full Worked Example — 240 V Supply</h2>
          <p className="text-xs text-muted-foreground mt-1">R1 = 20 Ω, R2 = 10 Ω, R3 = 50 Ω</p>
        </div>

        {/* Resistors in series simple SVG */}
        <div className="px-6 pt-4">
          <svg viewBox="0 0 420 40" className="w-full max-w-sm mx-auto">
            <line x1="0"   y1="20" x2="60"  y2="20" stroke="#94a3b8" strokeWidth="2"/>
            <rect x="60"  y="8"  width="80" height="24" rx="3" fill="none" stroke="#94a3b8" strokeWidth="1.5"/>
            <text x="100" y="23" textAnchor="middle" fill="#a78bfa" fontSize="11">R1</text>
            <line x1="140" y1="20" x2="170" y2="20" stroke="#94a3b8" strokeWidth="2"/>
            <rect x="170" y="8"  width="80" height="24" rx="3" fill="none" stroke="#94a3b8" strokeWidth="1.5"/>
            <text x="210" y="23" textAnchor="middle" fill="#a78bfa" fontSize="11">R2</text>
            <line x1="250" y1="20" x2="280" y2="20" stroke="#94a3b8" strokeWidth="2"/>
            <rect x="280" y="8"  width="80" height="24" rx="3" fill="none" stroke="#94a3b8" strokeWidth="1.5"/>
            <text x="320" y="23" textAnchor="middle" fill="#a78bfa" fontSize="11">R3</text>
            <line x1="360" y1="20" x2="420" y2="20" stroke="#94a3b8" strokeWidth="2"/>
          </svg>
          <p className="text-xs text-muted-foreground text-center mt-1 mb-4">Resistances in series</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-teal-700/60">
                <th className="px-4 py-3 text-left text-white font-semibold"> </th>
                <th className="px-4 py-3 text-center text-white font-semibold">R₁</th>
                <th className="px-4 py-3 text-center text-white font-semibold">R₂</th>
                <th className="px-4 py-3 text-center text-white font-semibold">R₃</th>
                <th className="px-4 py-3 text-center text-white font-semibold">Totals</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <tr className="bg-teal-900/30 hover:bg-teal-900/50 transition-colors">
                <td className="px-4 py-3 font-semibold text-muted-foreground">Resistance</td>
                <td className="px-4 py-3 text-center font-mono text-lg font-bold text-foreground">20 Ω</td>
                <td className="px-4 py-3 text-center font-mono text-lg font-bold text-foreground">10 Ω</td>
                <td className="px-4 py-3 text-center font-mono text-lg font-bold text-foreground">50 Ω</td>
                <td className="px-4 py-3 text-center">
                  <p className="font-mono text-xs text-muted-foreground">RT = R1+R2+R3</p>
                  <p className="font-mono text-xs text-muted-foreground">= 20+10+50</p>
                  <p className="font-mono font-bold text-orange-300">= 80 Ω</p>
                </td>
              </tr>
              <tr className="bg-teal-900/20 hover:bg-teal-900/40 transition-colors">
                <td className="px-4 py-3 font-semibold text-muted-foreground">Current</td>
                <td className="px-4 py-3 text-center font-mono text-lg font-bold text-blue-300">3 A</td>
                <td className="px-4 py-3 text-center font-mono text-lg font-bold text-blue-300">3 A</td>
                <td className="px-4 py-3 text-center font-mono text-lg font-bold text-blue-300">3 A</td>
                <td className="px-4 py-3 text-center">
                  <p className="font-mono text-xs text-muted-foreground">IT = I1 = I2 = I3</p>
                  <p className="font-mono text-xs text-muted-foreground">IT = VT/RT = 240/80</p>
                  <p className="font-mono font-bold text-blue-300">= 3 A</p>
                </td>
              </tr>
              <tr className="bg-teal-900/30 hover:bg-teal-900/50 transition-colors">
                <td className="px-4 py-3 font-semibold text-muted-foreground">Voltage</td>
                <td className="px-4 py-3 text-center">
                  <p className="font-mono text-xs text-muted-foreground">V1 = I1 × R1</p>
                  <p className="font-mono text-xs text-muted-foreground">= 3 × 20</p>
                  <p className="font-mono font-bold text-green-300">= 60 V</p>
                </td>
                <td className="px-4 py-3 text-center">
                  <p className="font-mono text-xs text-muted-foreground">V2 = I2 × R2</p>
                  <p className="font-mono text-xs text-muted-foreground">= 3 × 10</p>
                  <p className="font-mono font-bold text-green-300">= 30 V</p>
                </td>
                <td className="px-4 py-3 text-center">
                  <p className="font-mono text-xs text-muted-foreground">V3 = I3 × R3</p>
                  <p className="font-mono text-xs text-muted-foreground">= 3 × 50</p>
                  <p className="font-mono font-bold text-green-300">= 150 V</p>
                </td>
                <td className="px-4 py-3 text-center">
                  <p className="font-mono text-xs text-muted-foreground">VT = V1+V2+V3</p>
                  <p className="font-mono font-bold text-2xl text-green-300">240 V</p>
                </td>
              </tr>
              <tr className="bg-teal-900/20 hover:bg-teal-900/40 transition-colors">
                <td className="px-4 py-3 font-semibold text-muted-foreground">Power</td>
                <td className="px-4 py-3 text-center">
                  <p className="font-mono text-xs text-muted-foreground">P1 = V1 × I1</p>
                  <p className="font-mono text-xs text-muted-foreground">= 60 × 3</p>
                  <p className="font-mono font-bold text-orange-300">180 W</p>
                </td>
                <td className="px-4 py-3 text-center">
                  <p className="font-mono text-xs text-muted-foreground">P2 = V2 × I2</p>
                  <p className="font-mono text-xs text-muted-foreground">= 30 × 3</p>
                  <p className="font-mono font-bold text-orange-300">90 W</p>
                </td>
                <td className="px-4 py-3 text-center">
                  <p className="font-mono text-xs text-muted-foreground">P3 = V3 × I3</p>
                  <p className="font-mono text-xs text-muted-foreground">= 150 × 3</p>
                  <p className="font-mono font-bold text-orange-300">450 W</p>
                </td>
                <td className="px-4 py-3 text-center">
                  <p className="font-mono text-xs text-muted-foreground">PT = P1+P2+P3</p>
                  <p className="font-mono text-xs text-muted-foreground">= 180+90+450</p>
                  <p className="font-mono font-bold text-orange-300">= 720 W</p>
                  <p className="font-mono text-xs text-muted-foreground mt-1">or PT = VT × IT</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ── Effect of an open circuit ── */}
      <div className="bg-red-400/5 border border-red-400/25 rounded-2xl p-5 space-y-3">
        <h2 className="font-semibold text-red-300">Effect of an Open Circuit</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          If any component in a series circuit fails open (breaks), <strong className="text-foreground">current stops flowing through the entire circuit</strong>.
          All components go off simultaneously.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-background/30 border border-white/8 rounded-xl p-3 space-y-1">
            <p className="text-sm font-semibold text-red-300">Diagnosis</p>
            <p className="text-xs text-muted-foreground">If current = 0 A, test each component in turn. The full supply voltage appears across the open fault — all other components read 0 V.</p>
          </div>
          <div className="bg-background/30 border border-white/8 rounded-xl p-3 space-y-1">
            <p className="text-sm font-semibold text-red-300">Practical Example</p>
            <p className="text-xs text-muted-foreground">Old-style series-wired Christmas lights: one blown bulb causes all lights to go out. Modern strings use parallel wiring to avoid this.</p>
          </div>
        </div>
      </div>

      {/* ── Controls / Applications ── */}
      <div className="bg-card border border-white/8 rounded-2xl p-5 space-y-4">
        <h2 className="font-semibold text-foreground">Controls Applications — Series Wiring</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Series circuit wiring is used extensively in <strong className="text-foreground">control circuits</strong>.
          Switches, contacts and protective devices wired in series mean <em>all</em> must be closed for the circuit to operate.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            {
              cat: "General Stop/Start",
              items: ["Temperature controller (thermostat)", "Pressure switches", "On/Off push buttons"],
              colour: "text-blue-300", border: "border-blue-400/20", bg: "bg-blue-400/5",
            },
            {
              cat: "Equipment Protection",
              items: ["Low oil pressure switch", "High/Low Pressure (HPLP) cutout", "Motor overload relay"],
              colour: "text-orange-300", border: "border-orange-400/20", bg: "bg-orange-400/5",
            },
            {
              cat: "Safety Interlocks",
              items: ["Overload contacts (F2)", "Voltage-level protection", "Personal safety door switches"],
              colour: "text-red-300", border: "border-red-400/20", bg: "bg-red-400/5",
            },
          ].map(({ cat, items, colour, border, bg }) => (
            <div key={cat} className={`${bg} border ${border} rounded-xl p-4 space-y-2`}>
              <p className={`text-sm font-semibold ${colour}`}>{cat}</p>
              <ul className="space-y-1">
                {items.map((it, i) => (
                  <li key={i} className="flex gap-2 text-xs text-muted-foreground">
                    <span className={`font-bold ${colour} flex-shrink-0`}>–</span>{it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Star-delta control circuit schematic SVG */}
        <div className="bg-background/30 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground text-center mb-4">
            Star-Delta Motor Starter — Control Circuit (Series Safety Interlocks)
          </p>
          <svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-lg mx-auto">
            {/* L1 supply rails */}
            <line x1="20" y1="20" x2="460" y2="20" stroke="#94a3b8" strokeWidth="1.5"/>
            <line x1="20" y1="185" x2="460" y2="185" stroke="#94a3b8" strokeWidth="1.5"/>
            <text x="10" y="24"  fill="#94a3b8" fontSize="8">L1</text>
            <text x="10" y="190" fill="#94a3b8" fontSize="8">L2</text>
            {/* Fuse F3 */}
            <rect x="30" y="10" width="14" height="20" rx="2" fill="none" stroke="#fbbf24" strokeWidth="1.5"/>
            <text x="37" y="8" textAnchor="middle" fill="#fbbf24" fontSize="7">F3</text>
            <line x1="37" y1="30" x2="37" y2="45" stroke="#94a3b8" strokeWidth="1.5"/>
            {/* S0 (OFF) push button — NC */}
            <text x="37" y="54" textAnchor="middle" fill="#94a3b8" fontSize="7">S0</text>
            <line x1="27" y1="60" x2="47" y2="60" stroke="#94a3b8" strokeWidth="1.5"/>
            <line x1="29" y1="65" x2="45" y2="65" stroke="#ef4444" strokeWidth="1.5"/>
            <line x1="37" y1="65" x2="37" y2="80" stroke="#94a3b8" strokeWidth="1.5"/>
            {/* S1 (ON) push button — NO */}
            <text x="37" y="89" textAnchor="middle" fill="#94a3b8" fontSize="7">S1</text>
            <line x1="27" y1="92" x2="47" y2="92" stroke="#94a3b8" strokeWidth="1.5"/>
            <line x1="29" y1="100" x2="45" y2="100" stroke="#86efac" strokeWidth="1.5"/>
            <line x1="37" y1="100" x2="37" y2="115" stroke="#94a3b8" strokeWidth="1.5"/>
            {/* K1 coil */}
            <rect x="25" y="115" width="24" height="16" rx="2" fill="none" stroke="#a78bfa" strokeWidth="1.5"/>
            <text x="37" y="126" textAnchor="middle" fill="#a78bfa" fontSize="8">K1</text>
            <line x1="37" y1="131" x2="37" y2="185" stroke="#94a3b8" strokeWidth="1.5"/>
            {/* K4 timer */}
            <line x1="100" y1="20" x2="100" y2="50" stroke="#94a3b8" strokeWidth="1.5"/>
            <rect x="87" y="50" width="26" height="16" rx="2" fill="none" stroke="#fbbf24" strokeWidth="1.5"/>
            <text x="100" y="61" textAnchor="middle" fill="#fbbf24" fontSize="8">K4</text>
            <line x1="100" y1="66" x2="100" y2="185" stroke="#94a3b8" strokeWidth="1.5"/>
            {/* K1 aux contact */}
            <line x1="160" y1="20" x2="160" y2="55" stroke="#94a3b8" strokeWidth="1.5"/>
            <line x1="150" y1="62" x2="170" y2="62" stroke="#94a3b8" strokeWidth="1.5"/>
            <line x1="152" y1="68" x2="168" y2="68" stroke="#86efac" strokeWidth="1.5"/>
            <text x="172" y="65" fill="#a78bfa" fontSize="7">K1</text>
            <line x1="160" y1="68" x2="160" y2="185" stroke="#94a3b8" strokeWidth="1.5"/>
            {/* K2 contact */}
            <line x1="220" y1="20" x2="220" y2="55" stroke="#94a3b8" strokeWidth="1.5"/>
            <line x1="210" y1="62" x2="230" y2="62" stroke="#94a3b8" strokeWidth="1.5"/>
            <line x1="212" y1="68" x2="228" y2="68" stroke="#94a3b8" strokeWidth="1.5"/>
            <text x="232" y="65" fill="#a78bfa" fontSize="7">K2</text>
            <line x1="220" y1="68" x2="220" y2="90" stroke="#94a3b8" strokeWidth="1.5"/>
            {/* K3 coil (delta) */}
            <rect x="208" y="90" width="24" height="16" rx="2" fill="none" stroke="#38bdf8" strokeWidth="1.5"/>
            <text x="220" y="101" textAnchor="middle" fill="#38bdf8" fontSize="8">K3</text>
            <line x1="220" y1="106" x2="220" y2="185" stroke="#94a3b8" strokeWidth="1.5"/>
            {/* K2 coil (star) */}
            <line x1="310" y1="20" x2="310" y2="70" stroke="#94a3b8" strokeWidth="1.5"/>
            <rect x="298" y="70" width="24" height="16" rx="2" fill="none" stroke="#86efac" strokeWidth="1.5"/>
            <text x="310" y="81" textAnchor="middle" fill="#86efac" fontSize="8">K2</text>
            <line x1="310" y1="86" x2="310" y2="185" stroke="#94a3b8" strokeWidth="1.5"/>
            {/* Legend */}
            <rect x="340" y="30" width="118" height="100" rx="3" fill="#0f172a" stroke="#334155" strokeWidth="1"/>
            <text x="348" y="43"  fill="#94a3b8" fontSize="6.5">S0 = 'OFF' push button</text>
            <text x="348" y="54"  fill="#94a3b8" fontSize="6.5">S1 = 'ON' push button</text>
            <text x="348" y="65"  fill="#a78bfa" fontSize="6.5">K1 = Line contactor</text>
            <text x="348" y="76"  fill="#86efac" fontSize="6.5">K2 = Star contactor</text>
            <text x="348" y="87"  fill="#38bdf8" fontSize="6.5">K3 = Delta contactor</text>
            <text x="348" y="98"  fill="#fbbf24" fontSize="6.5">K4 = Star-delta timer</text>
            <text x="348" y="109" fill="#ef4444" fontSize="6.5">F2 = Overload relay</text>
            <text x="348" y="120" fill="#fbbf24" fontSize="6.5">F1 = Backup fuse</text>
          </svg>
          <p className="text-xs text-muted-foreground text-center mt-2">
            All control contacts (S0, S1, K1, K2, K3, K4, F2) are wired in series — all must be satisfied for the motor to run.
          </p>
        </div>
      </div>

      {/* ── Advantages & Disadvantages ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-green-400/5 border border-green-400/25 rounded-2xl p-5 space-y-3">
          <h2 className="font-semibold text-green-300">Advantages</h2>
          <ul className="space-y-2">
            {[
              "Simple to construct — only one wire loop required.",
              "Total resistance is easy to calculate by addition.",
              "Current-limiting — more components reduces current, protecting equipment.",
              "Useful as a voltage divider to derive reference voltages.",
              "Safety interlocks — all must close for circuit to energise.",
            ].map((pt, i) => (
              <li key={i} className="flex gap-2 text-xs text-muted-foreground">
                <span className="text-green-300 font-bold flex-shrink-0">+</span>{pt}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-red-400/5 border border-red-400/25 rounded-2xl p-5 space-y-3">
          <h2 className="font-semibold text-red-300">Disadvantages</h2>
          <ul className="space-y-2">
            {[
              "One open fault kills the entire circuit — all loads go off.",
              "Voltage is shared, so each load receives less than supply voltage.",
              "Each additional load increases resistance and reduces current.",
              "Not suitable for mains power distribution — parallel circuits are used instead.",
            ].map((pt, i) => (
              <li key={i} className="flex gap-2 text-xs text-muted-foreground">
                <span className="text-red-300 font-bold flex-shrink-0">−</span>{pt}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Summary ── */}
      <div className="bg-card border border-border rounded-2xl p-5 space-y-3">
        <h2 className="font-semibold text-foreground">Summary</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {[
            { label:"Current",    value:"IT = I₁ = I₂ = I₃",  colour:"text-blue-300",   note:"Same everywhere" },
            { label:"Voltage",    value:"VT = V₁ + V₂ + V₃",  colour:"text-green-300",  note:"Drops add to supply (KVL)" },
            { label:"Resistance", value:"RT = R₁ + R₂ + R₃",  colour:"text-orange-300", note:"Simply add all values" },
            { label:"Power",      value:"PT = P₁ + P₂ + P₃",  colour:"text-yellow-300", note:"= IT × VT" },
          ].map(({ label, value, colour, note }) => (
            <div key={label} className="bg-muted/20 rounded-xl p-3 space-y-1 text-center">
              <p className={`text-xs font-bold uppercase tracking-widest ${colour}`}>{label}</p>
              <p className={`font-mono text-xs font-bold ${colour}`}>{value}</p>
              <p className="text-xs text-muted-foreground">{note}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
