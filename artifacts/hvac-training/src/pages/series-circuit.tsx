import { Layers, Info, Zap, BookOpen, Calculator, AlertTriangle } from "lucide-react";

/* ─── Inline SVG helpers ────────────────────────────────────────────────────── */

function Resistor({ x, y, label, val, colour = "#60a5fa" }: {
  x: number; y: number; label: string; val: string; colour?: string;
}) {
  return (
    <g>
      <line x1={x} y1={y} x2={x + 14} y2={y} stroke="#94a3b8" strokeWidth="2"/>
      <rect x={x + 14} y={y - 8} width={44} height={16} rx="3" fill="#1e293b" stroke={colour} strokeWidth="1.5"/>
      <text x={x + 36} y={y + 4} textAnchor="middle" fill={colour} fontSize="9" fontWeight="bold">{label}</text>
      <line x1={x + 58} y1={y} x2={x + 72} y2={y} stroke="#94a3b8" strokeWidth="2"/>
      <text x={x + 36} y={y - 13} textAnchor="middle" fill="#64748b" fontSize="8">{val}</text>
    </g>
  );
}

function Battery({ x, y }: { x: number; y: number }) {
  return (
    <g>
      <line x1={x} y1={y} x2={x + 10} y2={y} stroke="#94a3b8" strokeWidth="2"/>
      <line x1={x + 10} y1={y - 12} x2={x + 10} y2={y + 12} stroke="#fbbf24" strokeWidth="3"/>
      <line x1={x + 15} y1={y - 7} x2={x + 15} y2={y + 7} stroke="#fbbf24" strokeWidth="1.5"/>
      <line x1={x + 20} y1={y - 12} x2={x + 20} y2={y + 12} stroke="#fbbf24" strokeWidth="3"/>
      <line x1={x + 25} y1={y - 7} x2={x + 25} y2={y + 7} stroke="#fbbf24" strokeWidth="1.5"/>
      <line x1={x + 30} y1={y} x2={x + 40} y2={y} stroke="#94a3b8" strokeWidth="2"/>
      <text x={x + 20} y={y - 18} textAnchor="middle" fill="#fbbf24" fontSize="8">VT</text>
    </g>
  );
}

/* ─── Main series circuit diagram ─────────────────────────────────────────── */
function SeriesCircuitDiagram() {
  return (
    <svg viewBox="0 0 460 160" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-xl mx-auto">
      {/* wires */}
      <line x1="30"  y1="40"  x2="460" y2="40"  stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="none"/>
      {/* left vertical */}
      <line x1="30"  y1="40"  x2="30"  y2="130" stroke="#94a3b8" strokeWidth="1.5"/>
      {/* right vertical */}
      <line x1="430" y1="40"  x2="430" y2="130" stroke="#94a3b8" strokeWidth="1.5"/>
      {/* bottom */}
      <line x1="30"  y1="130" x2="185" y2="130" stroke="#94a3b8" strokeWidth="1.5"/>
      <line x1="265" y1="130" x2="430" y2="130" stroke="#94a3b8" strokeWidth="1.5"/>

      {/* Resistors */}
      <Resistor x={30}  y={40} label="R₁" val="R₁" colour="#60a5fa"/>
      <Resistor x={170} y={40} label="R₂" val="R₂" colour="#a78bfa"/>
      <Resistor x={310} y={40} label="R₃" val="R₃" colour="#f97316"/>

      {/* Battery bottom */}
      <Battery x={185} y={130}/>

      {/* Current arrow */}
      <path d="M 100 28 L 110 22 L 120 28" fill="none" stroke="#ef4444" strokeWidth="1.5"/>
      <text x="110" y="20" textAnchor="middle" fill="#ef4444" fontSize="8">I (same everywhere)</text>

      {/* Labels */}
      <text x="66"  y="72" textAnchor="middle" fill="#60a5fa" fontSize="8">V₁ = I·R₁</text>
      <text x="206" y="72" textAnchor="middle" fill="#a78bfa" fontSize="8">V₂ = I·R₂</text>
      <text x="346" y="72" textAnchor="middle" fill="#f97316" fontSize="8">V₃ = I·R₃</text>
    </svg>
  );
}

/* ─── Fault SVG — open circuit ────────────────────────────────────────────── */
function OpenCircuitSVG() {
  return (
    <svg viewBox="0 0 280 110" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-xs mx-auto">
      <line x1="15" y1="25" x2="265" y2="25" stroke="#94a3b8" strokeWidth="1.5"/>
      <line x1="15" y1="25" x2="15"  y2="90" stroke="#94a3b8" strokeWidth="1.5"/>
      <line x1="15" y1="90" x2="120" y2="90" stroke="#94a3b8" strokeWidth="1.5"/>
      {/* Battery */}
      <line x1="120" y1="80" x2="120" y2="100" stroke="#fbbf24" strokeWidth="3"/>
      <line x1="128" y1="84" x2="128" y2="96" stroke="#fbbf24" strokeWidth="1.5"/>
      <line x1="136" y1="80" x2="136" y2="100" stroke="#fbbf24" strokeWidth="3"/>
      <text x="128" y="108" textAnchor="middle" fill="#fbbf24" fontSize="8">VT = 12V</text>
      <line x1="136" y1="90" x2="265" y2="90" stroke="#94a3b8" strokeWidth="1.5"/>
      <line x1="265" y1="25" x2="265" y2="90" stroke="#94a3b8" strokeWidth="1.5"/>
      {/* Lamp 1 OK */}
      <circle cx="55"  cy="25" r="10" fill="none" stroke="#60a5fa" strokeWidth="1.5"/>
      <line x1="49" y1="19" x2="61" y2="31" stroke="#60a5fa" strokeWidth="1.5"/>
      <line x1="61" y1="19" x2="49" y2="31" stroke="#60a5fa" strokeWidth="1.5"/>
      <text x="55" y="15" textAnchor="middle" fill="#64748b" fontSize="7">0V</text>
      {/* Lamp 2 OPEN */}
      <circle cx="140" cy="25" r="10" fill="none" stroke="#ef4444" strokeWidth="1.5"/>
      <line x1="134" y1="19" x2="138" y2="23" stroke="#ef4444" strokeWidth="1.5"/>
      <line x1="142" y1="27" x2="146" y2="31" stroke="#ef4444" strokeWidth="1.5"/>
      <text x="140" y="13" textAnchor="middle" fill="#ef4444" fontSize="7">12V ← full VT here</text>
      <text x="140" y="42"  textAnchor="middle" fill="#ef4444" fontSize="7">BLOWN</text>
      {/* Lamp 3 OK */}
      <circle cx="225" cy="25" r="10" fill="none" stroke="#60a5fa" strokeWidth="1.5"/>
      <line x1="219" y1="19" x2="231" y2="31" stroke="#60a5fa" strokeWidth="1.5"/>
      <line x1="231" y1="19" x2="219" y2="31" stroke="#60a5fa" strokeWidth="1.5"/>
      <text x="225" y="15" textAnchor="middle" fill="#64748b" fontSize="7">0V</text>
      <text x="140" y="75" textAnchor="middle" fill="#ef4444" fontSize="8">I = 0 A — all lamps off</text>
    </svg>
  );
}

/* ─── Fault SVG — short circuit ──────────────────────────────────────────── */
function ShortCircuitSVG() {
  return (
    <svg viewBox="0 0 280 110" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-xs mx-auto">
      <line x1="15" y1="25" x2="265" y2="25" stroke="#94a3b8" strokeWidth="1.5"/>
      <line x1="15" y1="25" x2="15"  y2="90" stroke="#94a3b8" strokeWidth="1.5"/>
      <line x1="15" y1="90" x2="120" y2="90" stroke="#94a3b8" strokeWidth="1.5"/>
      <line x1="120" y1="80" x2="120" y2="100" stroke="#fbbf24" strokeWidth="3"/>
      <line x1="128" y1="84" x2="128" y2="96" stroke="#fbbf24" strokeWidth="1.5"/>
      <line x1="136" y1="80" x2="136" y2="100" stroke="#fbbf24" strokeWidth="3"/>
      <text x="128" y="108" textAnchor="middle" fill="#fbbf24" fontSize="8">VT = 12V</text>
      <line x1="136" y1="90" x2="265" y2="90" stroke="#94a3b8" strokeWidth="1.5"/>
      <line x1="265" y1="25" x2="265" y2="90" stroke="#94a3b8" strokeWidth="1.5"/>
      {/* Lamp 1 OK but brighter */}
      <circle cx="55" cy="25" r="10" fill="none" stroke="#fbbf24" strokeWidth="2"/>
      <line x1="49" y1="19" x2="61" y2="31" stroke="#fbbf24" strokeWidth="2"/>
      <line x1="61" y1="19" x2="49" y2="31" stroke="#fbbf24" strokeWidth="2"/>
      <text x="55" y="14" textAnchor="middle" fill="#fbbf24" fontSize="7">4V (↑ brighter)</text>
      {/* Lamp 2 SHORT */}
      <circle cx="140" cy="25" r="10" fill="#ef4444" fillOpacity="0.15" stroke="#ef4444" strokeWidth="2"/>
      <line x1="130" y1="25" x2="150" y2="25" stroke="#ef4444" strokeWidth="2.5"/>
      <text x="140" y="13" textAnchor="middle" fill="#ef4444" fontSize="7">0V</text>
      <text x="140" y="42" textAnchor="middle" fill="#ef4444" fontSize="7">SHORT</text>
      {/* Lamp 3 OK but brighter */}
      <circle cx="225" cy="25" r="10" fill="none" stroke="#fbbf24" strokeWidth="2"/>
      <line x1="219" y1="19" x2="231" y2="31" stroke="#fbbf24" strokeWidth="2"/>
      <line x1="231" y1="19" x2="219" y2="31" stroke="#fbbf24" strokeWidth="2"/>
      <text x="225" y="14" textAnchor="middle" fill="#fbbf24" fontSize="7">4V (↑ brighter)</text>
      <text x="140" y="75" textAnchor="middle" fill="#ef4444" fontSize="8">I↑ (1.33A) — others glow brighter</text>
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
export default function SeriesCircuit() {
  return (
    <div className="max-w-4xl mx-auto space-y-10 pb-16 p-6 md:p-8">

      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-3">
          <div className="bg-blue-400/10 border border-blue-400/20 rounded-lg p-2">
            <Layers className="w-5 h-5 text-blue-400" />
          </div>
          <span className="text-sm font-medium text-primary uppercase tracking-widest">1C — Electrical Theory</span>
        </div>
        <h1 className="text-4xl font-display font-bold text-foreground tracking-tight mb-3">The Series Circuit</h1>
        <p className="text-muted-foreground leading-relaxed max-w-2xl">
          Chapter 6 — explains the series circuit in which each component is connected one after the other.
          Covers how to apply Ohm's law and Kirchhoff's voltage law to find current, voltage, resistance and power
          values, and what happens when open-circuit, short-circuit or changed-resistance faults occur.
        </p>
      </div>

      {/* ── 6.1 What is a Series Circuit ── */}
      <div className="bg-card border border-white/8 rounded-2xl overflow-hidden">
        <div className="px-6 py-4 border-b border-white/8 flex items-center gap-3">
          <BookOpen className="w-4 h-4 text-primary" />
          <h2 className="font-semibold text-foreground">6.1 — The Series Circuit</h2>
        </div>
        <div className="p-6 space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-blue-400/5 border border-blue-400/25 rounded-xl p-4 space-y-2">
              <p className="text-sm font-semibold text-blue-300">Definition</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                A series circuit is one in which there is <strong className="text-foreground">only one path for the current</strong>.
                Components are connected one after the other — the current must pass through each component in turn.
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Each component has only one conductor connected to each of its terminals.
                Because each component needs two terminals (in and out), there can only ever be two conductors per component.
              </p>
            </div>
            <div className="bg-background/30 border border-white/8 rounded-xl p-4 space-y-2">
              <p className="text-sm font-semibold text-foreground">Everyday Examples</p>
              <div className="space-y-1.5">
                {[
                  { ex:"Old-style series Christmas lights", note:"One blown bulb — all go out." },
                  { ex:"Motor control circuits", note:"All safety contacts wired in series — all must close." },
                  { ex:"Battery cells in series", note:"Each cell's + connects to next cell's −, voltages add." },
                  { ex:"Fuse in series with a load", note:"Fuse opens → circuit breaks → load protected." },
                ].map(({ ex, note }) => (
                  <div key={ex} className="flex gap-2 text-xs">
                    <span className="text-primary flex-shrink-0">•</span>
                    <span><span className="text-foreground font-medium">{ex}</span> — {note}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-background/30 border border-white/8 rounded-xl p-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground text-center mb-3">Series Circuit — One Path for Current</p>
            <SeriesCircuitDiagram />
          </div>
        </div>
      </div>

      {/* ── 6.2 Current ── */}
      <div className="bg-card border border-white/8 rounded-2xl overflow-hidden">
        <div className="px-6 py-4 border-b border-white/8 flex items-center gap-3">
          <Zap className="w-4 h-4 text-blue-400" />
          <h2 className="font-semibold text-foreground">6.2 — Current in the Series Circuit</h2>
        </div>
        <div className="p-6 space-y-4">
          <div className="bg-blue-400/5 border border-blue-400/25 rounded-xl p-4">
            <p className="font-mono text-2xl font-bold text-blue-300 mb-1">I = I₁ = I₂ = I₃ …</p>
            <p className="text-sm text-muted-foreground">Current is the <strong className="text-foreground">same in all parts</strong> of a series circuit.</p>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Because there is only one path, the same electrons flow through every component. An ammeter connected
            anywhere in a series circuit reads the same value. Ammeters are always connected in series.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { point:"One path only", detail:"Electrons have nowhere else to go — all current must pass through every component." },
              { point:"Same value everywhere", detail:"Connect an ammeter before R₁, between R₁ and R₂, or after R₃ — same reading each time." },
              { point:"Ammeter in series", detail:"An ammeter must be wired in series to measure current. It has a very low resistance so it doesn't affect the circuit." },
            ].map(({ point, detail }) => (
              <div key={point} className="bg-background/30 border border-white/8 rounded-xl p-3">
                <p className="text-xs font-semibold text-blue-300 mb-1">{point}</p>
                <p className="text-xs text-muted-foreground">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 6.3 Resistance ── */}
      <div className="bg-card border border-white/8 rounded-2xl overflow-hidden">
        <div className="px-6 py-4 border-b border-white/8 flex items-center gap-3">
          <Calculator className="w-4 h-4 text-orange-400" />
          <h2 className="font-semibold text-foreground">6.3 — Resistance in the Series Circuit</h2>
        </div>
        <div className="p-6 space-y-5">
          <div className="bg-orange-400/5 border border-orange-400/25 rounded-xl p-4 space-y-2">
            <p className="text-sm font-semibold text-orange-300">Total Resistance</p>
            <p className="font-mono text-2xl font-bold text-orange-300">RT = R₁ + R₂ + R₃ …</p>
            <p className="text-xs text-muted-foreground">
              Connecting resistors in series always <strong className="text-foreground">increases</strong> the total resistance.
              If all resistors are equal: <span className="font-mono text-foreground">RT = R × n</span> (n = number of resistors).
            </p>
          </div>

          <Ex num="6.1" title="Three resistors in series — find RT between A and B"
            given={["R₁ = 120 Ω", "R₂ = 330 Ω", "R₃ = 820 Ω"]} find="RT"
            steps={["RT = R₁ + R₂ + R₃", "RT = 120 + 330 + 820"]}
            answer="RT = 1270 Ω" colour="orange"
          />

          <Ex num="6.2" title="Three identical lamps — find RT"
            given={["R₁ = R₂ = R₃ = 50 Ω"]} find="RT"
            steps={["RT = R₁ + R₂ + R₃ = 50 + 50 + 50", "Or: RT = R × n = 50 × 3"]}
            answer="RT = 150 Ω" colour="orange"
          />

          <div className="bg-background/30 border border-white/8 rounded-xl p-4 space-y-2">
            <p className="text-sm font-semibold text-foreground">Finding current with Ohm's law</p>
            <p className="text-xs text-muted-foreground">Once RT is known, apply Ohm's law to find the circuit current:</p>
            <p className="font-mono text-lg font-bold text-primary">I = VT / RT</p>
          </div>

          <Ex num="6.3" title="Current in Example 6.1 circuit with 230 V supply"
            given={["RT = 1270 Ω (from Ex 6.1)", "VT = 230 V"]} find="I"
            steps={["I = VT / RT", "I = 230 / 1270"]}
            answer="I = 0.18 A" colour="blue"
          />

          <ExQ items={[
            "A circuit has three resistances of 50 Ω each connected in series. What is the total resistance?",
            "In the above circuit, the voltage across one resistor is 15 V. Find the total supply voltage.",
            "A series circuit with four components has a total resistance of 800 Ω. If R₁ = 25 Ω, R₂ = 75 Ω and R₃ = 500 Ω, what is R₄?",
          ]} />
        </div>
      </div>

      {/* ── 6.4 Voltage ── */}
      <div className="bg-card border border-white/8 rounded-2xl overflow-hidden">
        <div className="px-6 py-4 border-b border-white/8 flex items-center gap-3">
          <Zap className="w-4 h-4 text-green-400" />
          <h2 className="font-semibold text-foreground">6.4 — Voltage in the Series Circuit</h2>
        </div>
        <div className="p-6 space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-green-400/5 border border-green-400/25 rounded-xl p-4 space-y-2">
              <p className="text-sm font-semibold text-green-300">Voltage Drops</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Current flowing through a resistance causes a <strong className="text-foreground">voltage drop</strong>.
                Each resistor in the circuit has a voltage drop directly proportional to its resistance
                (the higher the resistance, the higher the voltage drop — for the same current).
              </p>
              <p className="font-mono text-sm text-green-300">V₁ = I × R₁</p>
              <p className="font-mono text-sm text-green-300">V₂ = I × R₂</p>
              <p className="font-mono text-sm text-green-300">V₃ = I × R₃</p>
            </div>
            <div className="bg-yellow-400/5 border border-yellow-400/25 rounded-xl p-4 space-y-2">
              <p className="text-sm font-semibold text-yellow-300">Kirchhoff's Voltage Law (KVL)</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Gustav Kirchhoff</strong> (German physicist) stated that the algebraic sum of
                all voltage drops in a series circuit equals the applied voltage. This law is as important as Ohm's law —
                it can <em>never</em> be wrong.
              </p>
              <p className="font-mono text-xl font-bold text-yellow-300">VT = V₁ + V₂ + V₃ …</p>
              <p className="text-xs text-muted-foreground mt-1">
                The voltage drops around the circuit can never total more, or less, than the applied voltage.
              </p>
            </div>
          </div>

          <Ex num="6.4" title="Voltage drops across R₁, R₂, R₃ — VT = 20 V"
            given={["VT = 20 V", "R₁ = 20 Ω · R₂ = 30 Ω · R₃ = 50 Ω"]} find="V₁, V₂, V₃"
            steps={[
              "RT = 20 + 30 + 50 = 100 Ω",
              "I = VT / RT = 20 / 100 = 0.2 A",
              "V₁ = I × R₁ = 0.2 × 20 = 4 V",
              "V₂ = I × R₂ = 0.2 × 30 = 6 V",
              "V₃ = I × R₃ = 0.2 × 50 = 10 V",
              "Check: 4 + 6 + 10 = 20 V = VT ✓",
            ]}
            answer={["V₁ = 4 V · V₂ = 6 V · V₃ = 10 V"]}
            colour="green"
          />

          <Ex num="6.5" title="Find supply voltage when individual drops are known"
            given={["V₁ = 11 V", "V₂ = 23 V", "V₃ = 6 V"]} find="VT"
            steps={["VT = V₁ + V₂ + V₃", "VT = 11 + 23 + 6"]}
            answer="VT = 40 V" colour="yellow"
          />

          <Ex num="6.6" title="Find unknown voltage drop V₂"
            given={["VT = 42 V", "V₁ = 9 V", "V₃ = 14 V"]} find="V₂"
            steps={["VT = V₁ + V₂ + V₃", "V₂ = VT − (V₁ + V₃)", "V₂ = 42 − (9 + 14)"]}
            answer="V₂ = 19 V" colour="yellow"
          />

          <Ex num="6.7" title="Find RT from a known voltage drop and resistance"
            given={["VT = 50 V", "R₁ = 40 Ω", "V₁ = 10 V"]} find="RT"
            steps={[
              "Find I from V₁ and R₁:",
              "I = V₁ / R₁ = 10 / 40 = 0.25 A",
              "RT = VT / I = 50 / 0.25",
            ]}
            answer="RT = 200 Ω" colour="blue"
          />

          <Ex num="6.8" title="Find R₂, R₃ and V₂ — continuing from Ex 6.7"
            given={["RT = 200 Ω · R₁ = 40 Ω · I = 0.25 A", "VT = 50 V · V₁ = 10 V · V₃ = 25 V"]} find="R₃ · R₂ · V₂"
            steps={[
              "R₃ = V₃ / I = 25 / 0.25 = 100 Ω",
              "R₂ = RT − (R₁ + R₃) = 200 − (40 + 100) = 60 Ω",
              "V₂ = VT − (V₁ + V₃) = 50 − (10 + 25) = 15 V",
              "Check: V₂ = I × R₂ = 0.25 × 60 = 15 V ✓",
            ]}
            answer={["R₃ = 100 Ω · R₂ = 60 Ω · V₂ = 15 V"]}
            colour="blue"
          />

          {/* Voltage sources in series */}
          <div className="bg-background/30 border border-white/8 rounded-xl p-4 space-y-3">
            <p className="text-sm font-semibold text-foreground">Voltage Sources in Series — Algebraic Addition</p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              KVL says voltages are added <strong className="text-foreground">algebraically</strong> — polarity matters.
              Cells connected in series with matching polarity (+ to −) add together. A reversed cell <em>subtracts</em>.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-green-400/5 border border-green-400/20 rounded-lg p-3">
                <p className="text-xs font-semibold text-green-300 mb-1">Correct polarity</p>
                <p className="font-mono text-sm text-green-300">1.5V + 1.5V + 1.5V = 4.5V</p>
                <p className="text-xs text-muted-foreground">Each + to next − → voltages add.</p>
              </div>
              <div className="bg-red-400/5 border border-red-400/20 rounded-lg p-3">
                <p className="text-xs font-semibold text-red-300 mb-1">One cell reversed</p>
                <p className="font-mono text-sm text-red-300">1.5V + 1.5V − 1.5V = 1.5V</p>
                <p className="text-xs text-muted-foreground">Reversed cell subtracts its voltage from the total.</p>
              </div>
            </div>
          </div>

          <ExQ items={[
            "In a series circuit: R₁ = 100 Ω, R₂ = 20 Ω, R₃ = 60 Ω and V₁ = 20 V. Find I, RT, and VT.",
            "A series circuit has V₁ = 12 V, V₂ = ?, V₃ = 18 V, VT = 45 V. Find V₂.",
            "A 230 V series circuit has R₁ = 1.5 kΩ and I = 100 mA. Find R₂.",
          ]} />
        </div>
      </div>

      {/* ── 6.5 Summary — 11 equations ── */}
      <div className="bg-card border border-white/8 rounded-2xl overflow-hidden">
        <div className="px-6 py-4 border-b border-white/8 flex items-center gap-3">
          <BookOpen className="w-4 h-4 text-primary" />
          <h2 className="font-semibold text-foreground">6.5 — Series Circuit Equation Reference</h2>
        </div>
        <div className="p-6 space-y-5">
          <p className="text-sm text-muted-foreground leading-relaxed">
            The following eleven equations cover all calculations in a series circuit. If any two quantities are known,
            the rest can be found.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Resistance */}
            <div className="bg-orange-400/5 border border-orange-400/25 rounded-2xl p-4 space-y-2">
              <p className="text-sm font-semibold text-orange-300 mb-2">Resistance</p>
              {[
                { n:"1", eq:"RT = R₁ + R₂ + R₃…",       note:"Sum of all values" },
                { n:"2", eq:"RT = R × n",                 note:"All same value (n = count)" },
                { n:"3", eq:"RT = VT / I",                note:"Ohm's law" },
                { n:"4", eq:"R? = RT − (sum of others)",  note:"Find one unknown R" },
                { n:"5", eq:"R₁ = V₁/I   R₂ = V₂/I",    note:"Ohm's law per component" },
              ].map(({ n, eq, note }) => (
                <div key={n} className="flex gap-2 text-xs">
                  <span className="text-orange-400 font-mono font-bold flex-shrink-0 w-4">{n}.</span>
                  <div>
                    <p className="font-mono text-foreground">{eq}</p>
                    <p className="text-muted-foreground">{note}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Current */}
            <div className="bg-blue-400/5 border border-blue-400/25 rounded-2xl p-4 space-y-2">
              <p className="text-sm font-semibold text-blue-300 mb-2">Current</p>
              {[
                { n:"6", eq:"I = VT / RT",               note:"Ohm's law — total values" },
                { n:"7", eq:"I = V₁/R₁ = V₂/R₂…",       note:"Same in all parts" },
              ].map(({ n, eq, note }) => (
                <div key={n} className="flex gap-2 text-xs">
                  <span className="text-blue-400 font-mono font-bold flex-shrink-0 w-4">{n}.</span>
                  <div>
                    <p className="font-mono text-foreground">{eq}</p>
                    <p className="text-muted-foreground">{note}</p>
                  </div>
                </div>
              ))}
              <div className="bg-blue-400/10 rounded-lg px-3 py-2 mt-1">
                <p className="text-xs text-blue-200 font-semibold">Key rule</p>
                <p className="text-xs text-muted-foreground">The highest voltage drop is always across the highest resistance (V ∝ R for constant I).</p>
              </div>
            </div>
            {/* Voltage */}
            <div className="bg-green-400/5 border border-green-400/25 rounded-2xl p-4 space-y-2">
              <p className="text-sm font-semibold text-green-300 mb-2">Voltage</p>
              {[
                { n:"8",  eq:"VT = V₁ + V₂ + V₃…",       note:"KVL — sum of drops" },
                { n:"9",  eq:"VT = I × RT",                note:"Ohm's law" },
                { n:"10", eq:"V? = VT − (sum of others)", note:"Find one unknown V" },
                { n:"11", eq:"V₁ = I·R₁  V₂ = I·R₂",    note:"Ohm's law per component" },
              ].map(({ n, eq, note }) => (
                <div key={n} className="flex gap-2 text-xs">
                  <span className="text-green-400 font-mono font-bold flex-shrink-0 w-4">{n}.</span>
                  <div>
                    <p className="font-mono text-foreground">{eq}</p>
                    <p className="text-muted-foreground">{note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── 6.6 Power ── */}
      <div className="bg-card border border-white/8 rounded-2xl overflow-hidden">
        <div className="px-6 py-4 border-b border-white/8 flex items-center gap-3">
          <Zap className="w-4 h-4 text-yellow-400" />
          <h2 className="font-semibold text-foreground">6.6 — Power in the Series Circuit</h2>
        </div>
        <div className="p-6 space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { label:"Total power", eq:"PT = VT × I", note:"If total V and I are known", colour:"yellow" },
              { label:"From I and RT", eq:"PT = I² × RT", note:"Current and total resistance known", colour:"yellow" },
              { label:"Power adds up", eq:"PT = P₁ + P₂ + P₃…", note:"Sum of individual powers", colour:"yellow" },
            ].map(({ label, eq, note, colour }) => (
              <div key={label} className={`bg-${colour}-400/5 border border-${colour}-400/25 rounded-xl p-4 space-y-1 text-center`}>
                <p className={`text-xs font-semibold text-${colour}-300`}>{label}</p>
                <p className={`font-mono text-lg font-bold text-${colour}-300`}>{eq}</p>
                <p className="text-xs text-muted-foreground">{note}</p>
              </div>
            ))}
          </div>

          <Ex num="6.9" title="Total power — V₁ across R₁ is given"
            given={["V₁ = 20 V · R₁ = 100 Ω", "R₂ = 20 Ω · R₃ = 60 Ω"]} find="PT"
            steps={[
              "I = V₁ / R₁ = 20 / 100 = 0.2 A",
              "RT = R₁ + R₂ + R₃ = 100 + 20 + 60 = 180 Ω",
              "PT = I² × RT = 0.2² × 180 = 0.04 × 180",
            ]}
            answer="PT = 7.2 W" colour="yellow"
          />

          <Ex num="6.10" title="Individual power consumed by each resistor (same circuit)"
            given={["I = 0.2 A · R₁ = 100 Ω · R₂ = 20 Ω · R₃ = 60 Ω", "V₁ = 20 V"]} find="P₁ · P₂ · P₃"
            steps={[
              "P₁ = V₁² / R₁ = 20² / 100 = 400 / 100 = 4 W",
              "  (or P₁ = I² × R₁ = 0.04 × 100 = 4 W — same result)",
              "P₂ = I² × R₂ = 0.04 × 20 = 0.8 W",
              "P₃ = I² × R₃ = 0.04 × 60 = 2.4 W",
              "Check: 4 + 0.8 + 2.4 = 7.2 W = PT ✓",
            ]}
            answer={["P₁ = 4 W · P₂ = 0.8 W · P₃ = 2.4 W"]}
            colour="orange"
          />

          <Ex num="6.11" title="String of 8 lamps (2 W each) on 24 V — find all values"
            given={["VT = 24 V · n = 8 lamps", "P per lamp = 2 W"]} find="PT · I · RT · Rlamp · Vlamp"
            steps={[
              "1. PT = P × n = 2 × 8 = 16 W",
              "2. I = PT / VT = 16 / 24 = 0.67 A",
              "3. RT = VT / I = 24 / 0.67 = 36 Ω",
              "4. Rlamp = RT / n = 36 / 8 = 4.5 Ω",
              "5. Vlamp = VT / n = 24 / 8 = 3 V",
              "   (or Vlamp = I × Rlamp = 0.67 × 4.5 = 3 V ✓)",
            ]}
            answer={["PT = 16 W · I = 0.67 A · RT = 36 Ω · Rlamp = 4.5 Ω · Vlamp = 3 V"]}
            colour="blue"
          />

          <ExQ items={[
            "A 230 V series circuit has R₁ = 1 kΩ, R₂ = 500 Ω and R₃ = 1.5 kΩ. Find RT, I, all voltage drops and PT.",
            "Three identical lamps, each rated 150 W, are connected in series to 240 V. Find: voltage across each lamp, resistance of each lamp, total resistance, circuit current.",
            "If one lamp in the above circuit is short-circuited, what happens to the current and the voltage across the other two lamps?",
          ]} />
        </div>
      </div>

      {/* ── 6.7 Faults ── */}
      <div className="bg-card border border-white/8 rounded-2xl overflow-hidden">
        <div className="px-6 py-4 border-b border-white/8 flex items-center gap-3">
          <AlertTriangle className="w-4 h-4 text-red-400" />
          <h2 className="font-semibold text-foreground">6.7 — Faults in the Series Circuit</h2>
        </div>
        <div className="p-6 space-y-6">
          <p className="text-sm text-muted-foreground leading-relaxed">
            There are three types of faults to consider: open-circuit, short-circuit, and changed resistance.
            Understanding each is essential for fault-finding.
          </p>

          {/* Open Circuit */}
          <div className="bg-red-400/5 border border-red-400/25 rounded-2xl p-5 space-y-4">
            <h3 className="font-semibold text-red-300">1. Open-Circuit</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              An open-circuit is a complete break in the circuit (e.g. blown lamp filament, broken wire, open switch).
              Because there is only one path for current, <strong className="text-foreground">current stops everywhere</strong>.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-background/30 border border-white/8 rounded-xl p-4">
                <OpenCircuitSVG />
              </div>
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-widest text-red-300">Effects</p>
                {[
                  { e:"Resistance", v:"Infinity (∞)" },
                  { e:"Current", v:"0 A — circuit broken" },
                  { e:"Voltage across fault", v:"Equals full VT (useful diagnostic!)" },
                  { e:"Voltage across others", v:"0 V — no current, no drop" },
                  { e:"Components", v:"All stop working" },
                ].map(({ e, v }) => (
                  <div key={e} className="flex gap-2 text-xs">
                    <span className="text-red-400 w-36 flex-shrink-0">{e}:</span>
                    <span className="text-muted-foreground">{v}</span>
                  </div>
                ))}
                <div className="bg-red-400/10 border border-red-400/20 rounded-lg px-3 py-2 mt-2">
                  <p className="text-xs font-semibold text-red-300">Fault-finding tip</p>
                  <p className="text-xs text-muted-foreground">With power on, measure voltage across each component. The open-circuit component will show full supply voltage — all others show 0 V.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Short Circuit */}
          <div className="bg-orange-400/5 border border-orange-400/25 rounded-2xl p-5 space-y-4">
            <h3 className="font-semibold text-orange-300">2. Short-Circuit</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A short-circuit is an unintended low-resistance path across a component. This removes that component's
              resistance from the circuit, so total resistance drops and current increases.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-background/30 border border-white/8 rounded-xl p-4">
                <ShortCircuitSVG />
                <p className="text-xs text-muted-foreground text-center mt-2">
                  4 × 3 Ω lamps on 12 V → normal: I = 1 A, V per lamp = 3 V<br/>
                  After short: I = 1.33 A, V per lamp = 4 V (brighter — may burn out)
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-widest text-orange-300">Effects</p>
                {[
                  { e:"Circuit resistance", v:"Drops (short removes R from circuit)" },
                  { e:"Current", v:"Increases — may blow fuse" },
                  { e:"Voltage across short", v:"0 V (resistance = 0)" },
                  { e:"Voltage across others", v:"Increases — they work harder" },
                  { e:"Other components", v:"Receive more power — may burn out" },
                ].map(({ e, v }) => (
                  <div key={e} className="flex gap-2 text-xs">
                    <span className="text-orange-400 w-36 flex-shrink-0">{e}:</span>
                    <span className="text-muted-foreground">{v}</span>
                  </div>
                ))}
                <div className="bg-orange-400/10 border border-orange-400/20 rounded-lg px-3 py-2 mt-2">
                  <p className="text-xs font-semibold text-orange-300">Fault-finding tip</p>
                  <p className="text-xs text-muted-foreground">Short-circuit shows 0 V across the faulty component. The remaining components will measure a higher-than-normal voltage drop. Current will be higher than normal.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Changed Resistance */}
          <div className="bg-yellow-400/5 border border-yellow-400/25 rounded-2xl p-5 space-y-4">
            <h3 className="font-semibold text-yellow-300">3. Changed Resistance</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A fault that causes a change in resistance (not a complete open or short) has an intermediate effect.
              A common example is a <strong className="text-foreground">switch or connection with oxidised/dirty contacts</strong>.
            </p>
            <div className="bg-background/30 border border-white/8 rounded-xl p-4 space-y-3">
              <p className="text-xs font-semibold text-foreground">Textbook example — faulty switch in 12 V DC circuit with two lamps</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="space-y-1">
                  <p className="text-yellow-300 font-semibold">Normal operation</p>
                  <p className="text-muted-foreground">Switch contacts: ~0 Ω</p>
                  <p className="text-muted-foreground">Current: <span className="font-mono text-foreground">16 A</span></p>
                  <p className="text-muted-foreground">V across each lamp: <span className="font-mono text-foreground">6 V</span></p>
                </div>
                <div className="space-y-1">
                  <p className="text-red-300 font-semibold">Faulty switch (oxidised contacts)</p>
                  <p className="text-muted-foreground">Switch contacts: measurable R</p>
                  <p className="text-muted-foreground">Current falls to: <span className="font-mono text-foreground">11.4 A</span></p>
                  <p className="text-muted-foreground">V across lamps falls to: <span className="font-mono text-foreground">4.5 V</span> (dimmer)</p>
                  <p className="text-muted-foreground">Switch heats up from I²R losses</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-background/30 border border-white/8 rounded-xl p-3 space-y-1">
                <p className="text-xs font-semibold text-red-300">Increased resistance fault</p>
                {["Circuit R increases", "I decreases", "Voltage across other components decreases", "Voltage across fault increases", "Components receive less power"].map((pt, i) => (
                  <p key={i} className="text-xs text-muted-foreground flex gap-2"><span className="text-red-400">↑R</span>{pt}</p>
                ))}
              </div>
              <div className="bg-background/30 border border-white/8 rounded-xl p-3 space-y-1">
                <p className="text-xs font-semibold text-green-300">Decreased resistance fault</p>
                {["Circuit R decreases", "I increases", "Voltage across other components increases", "Voltage across fault decreases", "Components receive more power"].map((pt, i) => (
                  <p key={i} className="text-xs text-muted-foreground flex gap-2"><span className="text-green-400">↓R</span>{pt}</p>
                ))}
              </div>
            </div>
          </div>

          <ExQ items={[
            "In a 3-lamp series circuit, all lamps go off simultaneously. What is the most likely fault and how would you test for it?",
            "In a 4-lamp series circuit on 12 V (each lamp 3 Ω), one lamp develops an internal short. Calculate: (a) new circuit current, (b) new voltage across each remaining lamp.",
            "A switch in a 230 V series circuit normally shows 0 V across it. A tech measures 40 V across the switch while the circuit is running. What does this indicate?",
            "A series circuit has normal I = 5 A. After a fault, I drops to 3 A. Has resistance increased or decreased? Is there more or less voltage across the healthy components?",
          ]} />
        </div>
      </div>

      {/* ── Summary ── */}
      <div className="bg-card border border-border rounded-2xl p-5 space-y-4">
        <h2 className="font-semibold text-foreground">Chapter Summary</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {[
            "A series circuit has only one path for the current — all components in the single loop.",
            "Current (I) is the same in all parts of a series circuit.",
            "Total resistance: RT = R₁ + R₂ + R₃… Adding more components always increases RT.",
            "Kirchhoff's Voltage Law (KVL): The algebraic sum of voltage drops = applied voltage (VT).",
            "The highest voltage drop in a series circuit is across the highest resistance.",
            "Total power: PT = VT × I = I² × RT. Sum of individual powers = PT.",
            "Open-circuit → I = 0, full VT appears across the fault, all components stop.",
            "Short-circuit → RT drops, I rises, voltage across remaining components rises.",
            "Changed resistance → intermediate effect; increased R causes I to fall, decreased R causes I to rise.",
            "Voltage sources in series add (or subtract if reversed) algebraically.",
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
