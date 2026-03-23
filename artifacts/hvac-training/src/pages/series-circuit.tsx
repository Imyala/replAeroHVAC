import { Layers, Info, Zap } from "lucide-react";

/* ─── SVG Diagrams ─────────────────────────────────────────────────────────── */

function SeriesCircuitDiagram() {
  return (
    <svg viewBox="0 0 580 200" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-2xl mx-auto">
      {/* ── Battery (left) ── */}
      <line x1="40" y1="60" x2="40" y2="140" stroke="#94a3b8" strokeWidth="2"/>
      {/* battery plates */}
      <line x1="28" y1="75" x2="52" y2="75" stroke="#fbbf24" strokeWidth="3"/>
      <line x1="33" y1="85" x2="47" y2="85" stroke="#fbbf24" strokeWidth="1.5"/>
      <line x1="28" y1="95" x2="52" y2="95" stroke="#fbbf24" strokeWidth="3"/>
      <line x1="33" y1="105" x2="47" y2="105" stroke="#fbbf24" strokeWidth="1.5"/>
      <line x1="28" y1="115" x2="52" y2="115" stroke="#fbbf24" strokeWidth="3"/>
      <text x="55" y="78" fill="#fbbf24" fontSize="9" fontWeight="bold">+</text>
      <text x="55" y="120" fill="#fbbf24" fontSize="9" fontWeight="bold">−</text>
      <text x="18" y="155" textAnchor="middle" fill="#fbbf24" fontSize="9">12 V</text>

      {/* ── Top wire: battery+ → R1 → R2 → R3 → top-right corner ── */}
      <line x1="40" y1="60" x2="120" y2="60" stroke="#38bdf8" strokeWidth="2"/>
      {/* current arrow on top wire */}
      <polygon points="95,55 110,60 95,65" fill="#38bdf8"/>

      {/* ── R1 ── */}
      <line x1="120" y1="60" x2="130" y2="60" stroke="#38bdf8" strokeWidth="2"/>
      {/* zigzag resistor */}
      <polyline points="130,60 136,48 143,72 150,48 157,72 164,48 171,72 178,60"
        fill="none" stroke="#e2e8f0" strokeWidth="2"/>
      <line x1="178" y1="60" x2="188" y2="60" stroke="#38bdf8" strokeWidth="2"/>
      <text x="154" y="42" textAnchor="middle" fill="#a78bfa" fontSize="10" fontWeight="bold">R1</text>
      <text x="154" y="35" textAnchor="middle" fill="#94a3b8" fontSize="8">20 Ω</text>
      {/* V1 label below R1 */}
      <line x1="130" y1="68" x2="130" y2="80" stroke="#86efac" strokeWidth="1" strokeDasharray="3,2"/>
      <line x1="178" y1="68" x2="178" y2="80" stroke="#86efac" strokeWidth="1" strokeDasharray="3,2"/>
      <line x1="130" y1="80" x2="178" y2="80" stroke="#86efac" strokeWidth="1"/>
      <text x="154" y="93" textAnchor="middle" fill="#86efac" fontSize="9">V₁ = 4 V</text>

      {/* ── R2 ── */}
      <line x1="230" y1="60" x2="240" y2="60" stroke="#38bdf8" strokeWidth="2"/>
      <polyline points="240,60 246,48 253,72 260,48 267,72 274,48 281,72 288,60"
        fill="none" stroke="#e2e8f0" strokeWidth="2"/>
      <line x1="288" y1="60" x2="298" y2="60" stroke="#38bdf8" strokeWidth="2"/>
      <text x="264" y="42" textAnchor="middle" fill="#a78bfa" fontSize="10" fontWeight="bold">R2</text>
      <text x="264" y="35" textAnchor="middle" fill="#94a3b8" fontSize="8">30 Ω</text>
      {/* gap wire between R1 and R2 */}
      <line x1="188" y1="60" x2="240" y2="60" stroke="#38bdf8" strokeWidth="2"/>
      {/* V2 */}
      <line x1="240" y1="68" x2="240" y2="88" stroke="#86efac" strokeWidth="1" strokeDasharray="3,2"/>
      <line x1="288" y1="68" x2="288" y2="88" stroke="#86efac" strokeWidth="1" strokeDasharray="3,2"/>
      <line x1="240" y1="88" x2="288" y2="88" stroke="#86efac" strokeWidth="1"/>
      <text x="264" y="101" textAnchor="middle" fill="#86efac" fontSize="9">V₂ = 6 V</text>

      {/* ── R3 ── */}
      <line x1="340" y1="60" x2="350" y2="60" stroke="#38bdf8" strokeWidth="2"/>
      <polyline points="350,60 356,48 363,72 370,48 377,72 384,48 391,72 398,60"
        fill="none" stroke="#e2e8f0" strokeWidth="2"/>
      <line x1="398" y1="60" x2="540" y2="60" stroke="#38bdf8" strokeWidth="2"/>
      <text x="374" y="42" textAnchor="middle" fill="#a78bfa" fontSize="10" fontWeight="bold">R3</text>
      <text x="374" y="35" textAnchor="middle" fill="#94a3b8" fontSize="8">10 Ω</text>
      {/* gap wire between R2 and R3 */}
      <line x1="298" y1="60" x2="350" y2="60" stroke="#38bdf8" strokeWidth="2"/>
      {/* V3 */}
      <line x1="350" y1="68" x2="350" y2="80" stroke="#86efac" strokeWidth="1" strokeDasharray="3,2"/>
      <line x1="398" y1="68" x2="398" y2="80" stroke="#86efac" strokeWidth="1" strokeDasharray="3,2"/>
      <line x1="350" y1="80" x2="398" y2="80" stroke="#86efac" strokeWidth="1"/>
      <text x="374" y="93" textAnchor="middle" fill="#86efac" fontSize="9">V₃ = 2 V</text>

      {/* ── Right vertical wire ── */}
      <line x1="540" y1="60" x2="540" y2="140" stroke="#38bdf8" strokeWidth="2"/>

      {/* ── Bottom wire: right-corner back to battery− ── */}
      <line x1="40" y1="140" x2="540" y2="140" stroke="#38bdf8" strokeWidth="2"/>
      {/* return current arrow */}
      <polygon points="200,135 185,140 200,145" fill="#38bdf8"/>

      {/* ── Current label ── */}
      <text x="300" y="158" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">IT = 200 mA (same everywhere)</text>

      {/* ── VT label spanning whole circuit ── */}
      <line x1="40" y1="170" x2="540" y2="170" stroke="#fbbf24" strokeWidth="1"/>
      <line x1="40" y1="165" x2="40" y2="175" stroke="#fbbf24" strokeWidth="1"/>
      <line x1="540" y1="165" x2="540" y2="175" stroke="#fbbf24" strokeWidth="1"/>
      <text x="290" y="185" textAnchor="middle" fill="#fbbf24" fontSize="10" fontWeight="bold">VT = V₁ + V₂ + V₃ = 12 V</text>
    </svg>
  );
}

function VoltDividerDiagram() {
  return (
    <svg viewBox="0 0 300 230" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-xs mx-auto">
      {/* Supply */}
      <text x="18" y="30" fill="#fbbf24" fontSize="9" fontWeight="bold">VT</text>
      {/* Left wire */}
      <line x1="30" y1="20" x2="30" y2="210" stroke="#94a3b8" strokeWidth="2"/>
      {/* Top wire */}
      <line x1="30" y1="20" x2="200" y2="20" stroke="#38bdf8" strokeWidth="2"/>

      {/* R1 */}
      <polyline points="200,20 206,8 213,32 220,8 227,32 234,8 241,32 248,20"
        fill="none" stroke="#e2e8f0" strokeWidth="2"/>
      <text x="224" y="5" textAnchor="middle" fill="#a78bfa" fontSize="9" fontWeight="bold">R1</text>

      {/* Middle wire / tap point */}
      <line x1="248" y1="20" x2="260" y2="20" stroke="#38bdf8" strokeWidth="2"/>
      <line x1="260" y1="20" x2="260" y2="115" stroke="#38bdf8" strokeWidth="2"/>
      {/* Tap output */}
      <line x1="260" y1="67" x2="290" y2="67" stroke="#86efac" strokeWidth="1.5" strokeDasharray="4,2"/>
      <text x="292" y="71" fill="#86efac" fontSize="9">Vout</text>
      <circle cx="260" cy="67" r="3" fill="#86efac"/>

      {/* R2 */}
      <polyline points="200,115 206,103 213,127 220,103 227,127 234,103 241,127 248,115"
        fill="none" stroke="#e2e8f0" strokeWidth="2"/>
      <text x="224" y="100" textAnchor="middle" fill="#a78bfa" fontSize="9" fontWeight="bold">R2</text>
      <line x1="248" y1="115" x2="260" y2="115" stroke="#38bdf8" strokeWidth="2"/>
      <line x1="200" y1="115" x2="200" y2="20" stroke="#38bdf8" strokeWidth="2"/>

      {/* Bottom wire */}
      <line x1="200" y1="115" x2="200" y2="210" stroke="#38bdf8" strokeWidth="2"/>
      <line x1="30" y1="210" x2="260" y2="210" stroke="#38bdf8" strokeWidth="2"/>
      <line x1="260" y1="115" x2="260" y2="210" stroke="#38bdf8" strokeWidth="2"/>

      {/* Formula */}
      <rect x="10" y="155" width="260" height="50" rx="6" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
      <text x="140" y="174" textAnchor="middle" fill="#fbbf24" fontSize="11" fontWeight="bold">Vout = VT × R2 / (R1 + R2)</text>
      <text x="140" y="192" textAnchor="middle" fill="#94a3b8" fontSize="9">Tapping off voltage proportional to R2</text>
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
          In a series circuit, components are connected end-to-end in a single continuous path. Current has only
          one route — it must flow through every component in turn.
        </p>
      </div>

      {/* ── Circuit diagram ── */}
      <div className="bg-card border border-white/8 rounded-2xl p-6 space-y-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground text-center">Series Circuit — Three Resistors</p>
        <SeriesCircuitDiagram />
        <p className="text-xs text-muted-foreground text-center">
          The same current (200 mA) flows through every component. Voltages across each resistor add up to the supply voltage.
        </p>
      </div>

      {/* ── Three Rules ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          {
            num: "1",
            rule: "Current is the same everywhere",
            formula: "IT = I₁ = I₂ = I₃",
            detail: "There is only one path for current to flow. The same number of electrons passes through every component per second.",
            colour: "text-blue-300", border: "border-blue-400/25", bg: "bg-blue-400/5",
          },
          {
            num: "2",
            rule: "Voltages add to the supply",
            formula: "VT = V₁ + V₂ + V₃",
            detail: "The supply voltage is shared among the components. Each component 'drops' a portion of the total voltage proportional to its resistance.",
            colour: "text-green-300", border: "border-green-400/25", bg: "bg-green-400/5",
          },
          {
            num: "3",
            rule: "Resistances add directly",
            formula: "RT = R₁ + R₂ + R₃",
            detail: "Total resistance is the sum of all individual resistances. Adding more components always increases total resistance — current decreases.",
            colour: "text-orange-300", border: "border-orange-400/25", bg: "bg-orange-400/5",
          },
        ].map(({ num, rule, formula, detail, colour, border, bg }) => (
          <div key={num} className={`${bg} border ${border} rounded-2xl p-5 space-y-3`}>
            <div className="flex items-center gap-2">
              <span className={`text-2xl font-black ${colour}`}>{num}</span>
              <p className={`text-sm font-semibold ${colour}`}>{rule}</p>
            </div>
            <div className="bg-background/40 border border-white/10 rounded-xl px-3 py-2">
              <p className={`font-mono text-base font-bold ${colour}`}>{formula}</p>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">{detail}</p>
          </div>
        ))}
      </div>

      {/* ── Worked example ── */}
      <div className="bg-card border border-white/8 rounded-2xl overflow-hidden">
        <div className="px-6 py-4 border-b border-white/8 flex items-center gap-3">
          <Zap className="w-4 h-4 text-primary" />
          <h2 className="font-semibold text-foreground">Worked Example</h2>
        </div>
        <div className="p-6 space-y-4">
          <p className="text-sm text-muted-foreground">
            Three resistors — <span className="text-foreground font-mono">R1 = 20 Ω</span>,{" "}
            <span className="text-foreground font-mono">R2 = 30 Ω</span>,{" "}
            <span className="text-foreground font-mono">R3 = 10 Ω</span> — are connected in series across a
            12 V supply. Find the total resistance, circuit current, and the voltage across each resistor.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                step: "Step 1 — Total Resistance",
                lines: ["RT = R1 + R2 + R3", "RT = 20 + 30 + 10", "RT = 60 Ω"],
                colour: "text-orange-300",
              },
              {
                step: "Step 2 — Circuit Current (Ohm's Law)",
                lines: ["IT = VT ÷ RT", "IT = 12 ÷ 60", "IT = 0.2 A  (200 mA)"],
                colour: "text-blue-300",
              },
              {
                step: "Step 3 — Voltage drops",
                lines: [
                  "V1 = IT × R1 = 0.2 × 20 = 4 V",
                  "V2 = IT × R2 = 0.2 × 30 = 6 V",
                  "V3 = IT × R3 = 0.2 × 10 = 2 V",
                ],
                colour: "text-green-300",
              },
            ].map(({ step, lines, colour }) => (
              <div key={step} className="bg-background/30 border border-white/8 rounded-xl p-4 space-y-2">
                <p className={`text-xs font-semibold ${colour}`}>{step}</p>
                <div className="font-mono text-xs bg-muted/30 rounded-lg p-3 space-y-1">
                  {lines.map((l, i) => (
                    <div key={i} className={i === lines.length - 1 ? colour : "text-muted-foreground"}>{l}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Verification */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 flex gap-3">
            <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div className="text-sm text-muted-foreground">
              <span className="text-foreground font-semibold">Verification: </span>
              V₁ + V₂ + V₃ = 4 + 6 + 2 = <span className="text-primary font-semibold">12 V ✓</span>
              &nbsp; — The voltage drops must always sum to the supply voltage.
            </div>
          </div>
        </div>
      </div>

      {/* ── Voltage Divider ── */}
      <div className="bg-card border border-white/8 rounded-2xl overflow-hidden">
        <div className="px-6 py-4 border-b border-white/8">
          <h2 className="font-semibold text-foreground">Voltage Divider</h2>
          <p className="text-xs text-muted-foreground mt-1">A practical application of the series circuit — tapping off a fraction of the supply voltage</p>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <VoltDividerDiagram />
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              By connecting two resistors in series and measuring the voltage across only one of them,
              you obtain an output voltage that is a proportion of the supply.
              This is the basis of control circuits, sensor signal scaling, and thermostat set-point adjustment.
            </p>
            <div className="bg-background/40 border border-white/10 rounded-xl px-4 py-3">
              <p className="font-mono text-base font-bold text-fuchsia-300">Vout = VT × R2 / (R1 + R2)</p>
              <p className="text-xs text-muted-foreground mt-1">Output voltage is proportional to R2</p>
            </div>
            <div className="bg-background/30 border border-white/8 rounded-xl p-3 space-y-1">
              <p className="text-xs font-semibold text-fuchsia-300">Example</p>
              <p className="text-xs text-muted-foreground">VT = 12 V, R1 = 8 kΩ, R2 = 4 kΩ</p>
              <p className="font-mono text-xs text-muted-foreground">Vout = 12 × 4 000 / (8 000 + 4 000)</p>
              <p className="font-mono text-xs text-fuchsia-300">Vout = 4 V</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Effect of an open circuit ── */}
      <div className="bg-red-400/5 border border-red-400/25 rounded-2xl p-5 space-y-3">
        <h2 className="font-semibold text-red-300">Effect of an Open Circuit</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          If any component in a series circuit fails open (breaks), <strong className="text-foreground">current stops flowing through the entire circuit</strong>.
          All components go off simultaneously. This is why old-style series-wired Christmas lights would all go out when one bulb failed.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-background/30 border border-white/8 rounded-xl p-3 space-y-1">
            <p className="text-sm font-semibold text-red-300">Diagnosis</p>
            <p className="text-xs text-muted-foreground">If current = 0 A, check each component in turn with a multimeter (continuity or voltage test) until the open circuit is located.</p>
          </div>
          <div className="bg-background/30 border border-white/8 rounded-xl p-3 space-y-1">
            <p className="text-sm font-semibold text-red-300">Voltage across the open</p>
            <p className="text-xs text-muted-foreground">With no current flowing, all other resistors drop 0 V. The full supply voltage appears across the open fault — useful for fault finding.</p>
          </div>
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
              "Current limiting — adding resistors reduces current, protecting components.",
              "Useful as a voltage divider to derive multiple reference voltages.",
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
              "Each additional load increases total resistance and reduces current.",
              "Not used for mains power distribution — parallel circuits are preferred.",
            ].map((pt, i) => (
              <li key={i} className="flex gap-2 text-xs text-muted-foreground">
                <span className="text-red-300 font-bold flex-shrink-0">−</span>{pt}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Applications ── */}
      <div className="bg-card border border-white/8 rounded-2xl p-5 space-y-3">
        <h2 className="font-semibold text-foreground">Common Applications</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            { label: "Voltage divider circuits", desc: "Thermostat setpoint circuits, sensor signal scaling, reference voltages." },
            { label: "Current-limiting resistors", desc: "LED driver circuits — a series resistor limits current to safe levels." },
            { label: "Fuse in series", desc: "A fuse is always wired in series with the load so it can break the circuit on overcurrent." },
            { label: "Thermistor sensor",  desc: "NTC thermistor in series with a fixed resistor forms a voltage divider whose output varies with temperature." },
            { label: "Pilot lamps",        desc: "Older indicator lamps wired in series with a resistor to drop voltage to lamp rating." },
            { label: "Control circuit wiring", desc: "Safety interlocks (pressure switches, thermostats, door switches) wired in series so all must close for the circuit to operate." },
          ].map(({ label, desc }) => (
            <div key={label} className="bg-background/30 border border-white/8 rounded-xl p-3 space-y-1">
              <p className="text-sm font-semibold text-primary">{label}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Summary ── */}
      <div className="bg-card border border-border rounded-2xl p-5 space-y-3">
        <h2 className="font-semibold text-foreground">Summary</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {[
            { label: "Current", value: "IT = I₁ = I₂ = I₃", colour: "text-blue-300", note: "Same through every component" },
            { label: "Voltage", value: "VT = V₁ + V₂ + V₃", colour: "text-green-300", note: "Shared — drops add to supply" },
            { label: "Resistance", value: "RT = R₁ + R₂ + R₃", colour: "text-orange-300", note: "Simply add all values" },
          ].map(({ label, value, colour, note }) => (
            <div key={label} className="bg-muted/20 rounded-xl p-3 space-y-1 text-center">
              <p className={`text-xs font-bold uppercase tracking-widest ${colour}`}>{label}</p>
              <p className={`font-mono text-sm font-bold ${colour}`}>{value}</p>
              <p className="text-xs text-muted-foreground">{note}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
