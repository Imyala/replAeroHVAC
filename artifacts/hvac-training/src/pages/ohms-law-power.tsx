import { Calculator, Info, BookOpen, Zap } from "lucide-react";

/* ─── Ohm's Law Triangle SVG ───────────────────────────────────────────────── */
function OhmTriangle() {
  return (
    <svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[200px] mx-auto">
      <polygon points="100,8 12,148 188,148" fill="none" stroke="#94a3b8" strokeWidth="1.5"/>
      <line x1="12" y1="78" x2="188" y2="78" stroke="#94a3b8" strokeWidth="1.5"/>
      <line x1="100" y1="78" x2="100" y2="148" stroke="#94a3b8" strokeWidth="1.5"/>
      {/* V */}
      <text x="100" y="58" textAnchor="middle" fill="#38bdf8" fontSize="28" fontWeight="bold">V</text>
      {/* I */}
      <text x="52"  y="125" textAnchor="middle" fill="#f97316" fontSize="24" fontWeight="bold">I</text>
      {/* R */}
      <text x="148" y="125" textAnchor="middle" fill="#a78bfa" fontSize="24" fontWeight="bold">R</text>
      {/* hint */}
      <text x="100" y="156" textAnchor="middle" fill="#64748b" fontSize="8">Cover the unknown — equation is the other two</text>
    </svg>
  );
}

/* ─── Water analogy SVG ─────────────────────────────────────────────────────── */
function WaterAnalogy() {
  return (
    <svg viewBox="0 0 480 160" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-xl mx-auto">
      {/* ── Left: pump pressure / voltage ── */}
      <rect x="10" y="20" width="210" height="120" rx="8" fill="#0f172a" stroke="#334155" strokeWidth="1"/>
      <text x="115" y="40" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">VOLTAGE = Water Pressure</text>
      {/* pump */}
      <circle cx="50" cy="90" r="22" fill="#1e3a5f" stroke="#38bdf8" strokeWidth="1.5"/>
      <text x="50" y="94" textAnchor="middle" fill="#38bdf8" fontSize="9" fontWeight="bold">PUMP</text>
      {/* pipe */}
      <rect x="72" y="82" width="60" height="16" rx="4" fill="#1e40af" stroke="#38bdf8" strokeWidth="1"/>
      {/* flow arrows */}
      <polygon points="118,87 132,90 118,93" fill="#38bdf8"/>
      <polygon points="130,87 144,90 130,93" fill="#38bdf8"/>
      {/* labels */}
      <text x="115" y="120" textAnchor="middle" fill="#94a3b8" fontSize="8">More pressure → more flow</text>
      <text x="115" y="132" textAnchor="middle" fill="#94a3b8" fontSize="8">Higher V → higher I</text>
      {/* ── Right: resistance / pipe restriction ── */}
      <rect x="260" y="20" width="210" height="120" rx="8" fill="#0f172a" stroke="#334155" strokeWidth="1"/>
      <text x="365" y="40" textAnchor="middle" fill="#a78bfa" fontSize="10" fontWeight="bold">RESISTANCE = Pipe Restriction</text>
      <circle cx="290" cy="90" r="22" fill="#1e3a5f" stroke="#38bdf8" strokeWidth="1.5"/>
      <text x="290" y="94" textAnchor="middle" fill="#38bdf8" fontSize="9" fontWeight="bold">PUMP</text>
      {/* wide pipe then narrow restriction */}
      <rect x="312" y="82" width="30" height="16" rx="3" fill="#1e40af" stroke="#38bdf8" strokeWidth="1"/>
      <rect x="342" y="87" width="25" height="6" rx="2" fill="#7c3aed" stroke="#a78bfa" strokeWidth="1"/>
      <rect x="367" y="82" width="30" height="16" rx="3" fill="#1e40af" stroke="#38bdf8" strokeWidth="1"/>
      {/* single slow arrow */}
      <polygon points="385,87 395,90 385,93" fill="#38bdf8"/>
      <text x="354" y="76" textAnchor="middle" fill="#a78bfa" fontSize="7">restriction</text>
      <text x="365" y="120" textAnchor="middle" fill="#94a3b8" fontSize="8">More restriction → less flow</text>
      <text x="365" y="132" textAnchor="middle" fill="#94a3b8" fontSize="8">Higher R → lower I</text>
    </svg>
  );
}

/* ─── Worked example card ────────────────────────────────────────────────────── */
function ExampleCard({ num, title, given, find, steps, answer, colour }: {
  num: string; title: string; given: string[]; find: string;
  steps: string[]; answer: string; colour: string;
}) {
  return (
    <div className={`bg-${colour}-400/5 border border-${colour}-400/25 rounded-2xl overflow-hidden`}>
      <div className={`px-5 py-3 border-b border-${colour}-400/20 flex items-center gap-3`}>
        <span className={`text-xs font-bold uppercase tracking-widest text-${colour}-300`}>Example {num}</span>
        <span className="text-sm text-muted-foreground">{title}</span>
      </div>
      <div className="p-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Given</p>
          {given.map((g, i) => <p key={i} className="font-mono text-sm text-foreground">{g}</p>)}
          <p className="font-mono text-sm text-muted-foreground">Find: <span className={`text-${colour}-300`}>{find}</span></p>
        </div>
        <div className="space-y-2">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Solution</p>
          {steps.map((s, i) => <p key={i} className="font-mono text-xs text-muted-foreground">{s}</p>)}
          <div className={`mt-2 bg-background/40 border border-${colour}-400/30 rounded-lg px-3 py-2`}>
            <p className={`font-mono text-sm font-bold text-${colour}-300`}>Answer: {answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Page ─────────────────────────────────────────────────────────────────── */
export default function OhmsLawPower() {
  return (
    <div className="max-w-4xl mx-auto space-y-10 pb-16 p-6 md:p-8">

      {/* ── Header ── */}
      <div>
        <div className="flex items-center gap-3 mb-3">
          <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-lg p-2">
            <Calculator className="w-5 h-5 text-yellow-400" />
          </div>
          <span className="text-sm font-medium text-primary uppercase tracking-widest">1C — Electrical Theory</span>
        </div>
        <h1 className="text-4xl font-display font-bold text-foreground tracking-tight mb-3">Ohm's Law</h1>
        <p className="text-muted-foreground leading-relaxed max-w-2xl">
          In 1827, Georg Simon Ohm (German physicist, 1787–1854) presented his laws on resistance, voltage and current.
          Despite initial criticism, his work was accepted and in 1881 the International Electrical Congress named the
          unit of resistance the <strong className="text-foreground">ohm</strong> in his honour.
          Ohm's law is the most important mathematical law in the electrotechnology industry.
        </p>
      </div>

      {/* ── 3.1 Resistance & Conductance ── */}
      <div className="bg-card border border-white/8 rounded-2xl overflow-hidden">
        <div className="px-6 py-4 border-b border-white/8 flex items-center gap-3">
          <BookOpen className="w-4 h-4 text-primary" />
          <h2 className="font-semibold text-foreground">3.1 — Resistance and Conductance</h2>
        </div>
        <div className="p-6 space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Resistance is opposition to the flow of current. It is a fundamental property of every electrical circuit.
            Resistance is measured in <strong className="text-foreground">ohms</strong>, symbol <strong className="text-foreground">Ω</strong> (omega).
            A resistance of 100 ohms is written as <span className="font-mono text-foreground">100 Ω</span>.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-orange-400/5 border border-orange-400/20 rounded-xl p-4 space-y-2">
              <p className="text-sm font-semibold text-orange-300">Resistance — R</p>
              <p className="text-xs text-muted-foreground leading-relaxed">Opposition to the flow of current. The higher the resistance, the lower the current for a given voltage.</p>
              <p className="font-mono text-sm text-orange-300">Unit: ohm (Ω)</p>
              <p className="font-mono text-sm text-muted-foreground">Symbol: R</p>
            </div>
            <div className="bg-teal-400/5 border border-teal-400/20 rounded-xl p-4 space-y-2">
              <p className="text-sm font-semibold text-teal-300">Conductance — G</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                The ability of a conductor to carry current. Conductance is the <em>reciprocal</em> of resistance.
                As resistance goes down, conductance increases.
              </p>
              <p className="font-mono text-sm text-teal-300">G = 1 / R</p>
              <p className="font-mono text-sm text-muted-foreground">Unit: siemens (S)</p>
              <div className="bg-background/30 rounded-lg px-3 py-1.5 mt-1">
                <p className="font-mono text-xs text-muted-foreground">10 Ω → G = 1/10 = <span className="text-teal-300">0.1 S</span></p>
                <p className="font-mono text-xs text-muted-foreground">0.1 Ω → G = 1/0.1 = <span className="text-teal-300">10 S</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── 3.2 Ohm's Law ── */}
      <div className="bg-card border border-white/8 rounded-2xl overflow-hidden">
        <div className="px-6 py-4 border-b border-white/8 flex items-center gap-3">
          <Zap className="w-4 h-4 text-yellow-400" />
          <h2 className="font-semibold text-foreground">3.2 — Ohm's Law</h2>
        </div>
        <div className="p-6 space-y-6">

          {/* Definition box */}
          <div className="bg-yellow-400/5 border border-yellow-400/30 rounded-xl p-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-yellow-300 mb-2">Ohm's Law — Definition</p>
            <p className="text-sm text-muted-foreground italic leading-relaxed">
              "The current flowing between any two points in an electric circuit is <strong className="text-foreground">directly proportional to the voltage</strong> between
              the two points, and <strong className="text-foreground">inversely proportional to the resistance</strong> of the circuit between the two points."
            </p>
          </div>

          {/* Water analogy */}
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Water Analogy</p>
            <WaterAnalogy />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-muted-foreground">
              <p><span className="text-foreground font-semibold">1.</span> Current is <em>directly</em> proportional to voltage — if R is constant, increasing V increases I.</p>
              <p><span className="text-foreground font-semibold">2.</span> Current is <em>inversely</em> proportional to resistance — if V is constant, increasing R decreases I.</p>
            </div>
          </div>

          {/* Three equations + triangle */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">The Three Equations</p>
              {[
                { label: "Find current",     eq: "I = V / R", note: "I in amperes, V in volts, R in ohms",     colour: "text-orange-300", border: "border-orange-400/25", bg: "bg-orange-400/5" },
                { label: "Find voltage",     eq: "V = I × R", note: "Rearranged — multiply current by resistance", colour: "text-blue-300",   border: "border-blue-400/25",   bg: "bg-blue-400/5" },
                { label: "Find resistance",  eq: "R = V / I", note: "Rearranged — divide voltage by current",    colour: "text-purple-300", border: "border-purple-400/25", bg: "bg-purple-400/5" },
              ].map(({ label, eq, note, colour, border, bg }) => (
                <div key={label} className={`${bg} border ${border} rounded-xl px-4 py-3 space-y-1`}>
                  <p className={`text-xs font-semibold ${colour}`}>{label}</p>
                  <p className={`font-mono text-xl font-bold ${colour}`}>{eq}</p>
                  <p className="text-xs text-muted-foreground">{note}</p>
                </div>
              ))}
              <p className="text-xs text-muted-foreground leading-relaxed">
                Note: Sometimes <span className="font-mono text-foreground">E</span> (EMF) is given instead of <span className="font-mono text-foreground">V</span>.
                They are interchangeable in these equations — substitute E wherever V appears.
              </p>
            </div>
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Memory Triangle</p>
              <div className="bg-background/30 border border-white/8 rounded-xl p-4">
                <OhmTriangle />
              </div>
              <p className="text-xs text-muted-foreground text-center">Cover the value you want to find — the equation is the remaining two terms</p>
            </div>
          </div>

          {/* Examples */}
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Worked Examples</p>
            <ExampleCard
              num="3.1" title="Find current"
              given={["V = 25 V", "R = 15 Ω"]} find="I"
              steps={["I = V / R", "I = 25 / 15"]}
              answer="I = 1.67 A" colour="orange"
            />
            <ExampleCard
              num="3.2" title="Find voltage"
              given={["I = 1.5 A", "R = 50 Ω"]} find="V"
              steps={["V = I × R", "V = 1.5 × 50"]}
              answer="V = 75 V" colour="blue"
            />
            <ExampleCard
              num="3.3" title="Find resistance — electric heater at 230 V"
              given={["V = 230 V", "I = 2.3 A"]} find="R"
              steps={["R = V / I", "R = 230 / 2.3"]}
              answer="R = 100 Ω" colour="purple"
            />
          </div>

          {/* Exercise 3.1 */}
          <div className="bg-background/30 border border-white/8 rounded-xl p-5 space-y-3">
            <p className="text-sm font-semibold text-foreground">Exercise 3.1</p>
            <ol className="space-y-2 list-decimal list-inside">
              {[
                "A resistor has 20 V across it when a current of 0.5 A is flowing. Find the resistance.",
                "What is the voltage across a 120 Ω resistor when 0.25 A flows?",
                "A cable has a resistance of 0.5 Ω. What is the voltage across it when 20 A flows?",
                "What resistance is needed to give 35 V when the current is 2.5 A?",
                "A faulty switch has a resistance of 2.5 Ω. When 8 A flows, calculate the voltage across it.",
                "A circuit has R = 460 Ω. How much current flows when connected to 230 V?",
              ].map((q, i) => (
                <li key={i} className="text-xs text-muted-foreground leading-relaxed">{q}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      {/* ── 3.3 Metric Prefixes ── */}
      <div className="bg-card border border-white/8 rounded-2xl overflow-hidden">
        <div className="px-6 py-4 border-b border-white/8 flex items-center gap-3">
          <BookOpen className="w-4 h-4 text-primary" />
          <h2 className="font-semibold text-foreground">3.3 — Metric Prefixes</h2>
        </div>
        <div className="p-6 space-y-5">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Resistor values can range from 0.0001 Ω to 82 million ohms. Current can be from millionths of an ampere
            up to thousands of amperes. Metric prefixes are used to write these large and small values concisely.
            The four most used in electrotechnology are <strong className="text-foreground">mega, kilo, milli</strong> and <strong className="text-foreground">micro</strong>.
          </p>

          {/* Prefix table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary/10 border-b border-white/10">
                  <th className="px-4 py-3 text-left text-primary font-semibold">Term</th>
                  <th className="px-4 py-3 text-center text-primary font-semibold">Symbol</th>
                  <th className="px-4 py-3 text-center text-primary font-semibold">Multiply by</th>
                  <th className="px-4 py-3 text-center text-primary font-semibold">Power of 10</th>
                  <th className="px-4 py-3 text-left text-primary font-semibold">Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  { term:"tera",  sym:"T", mult:"1 000 000 000 000", exp:"10¹²", ex:"2 THz = 2 000 000 000 000 Hz", hi:false },
                  { term:"giga",  sym:"G", mult:"1 000 000 000",     exp:"10⁹",  ex:"4 GW = 4 000 000 000 W",      hi:false },
                  { term:"mega",  sym:"M", mult:"1 000 000",         exp:"10⁶",  ex:"39 MΩ = 39 000 000 Ω",        hi:true  },
                  { term:"kilo",  sym:"k", mult:"1 000",             exp:"10³",  ex:"33 kV = 33 000 V",            hi:true  },
                  { term:"milli", sym:"m", mult:"0.001",             exp:"10⁻³", ex:"2 mA = 0.002 A",             hi:true  },
                  { term:"micro", sym:"µ", mult:"0.000 001",         exp:"10⁻⁶", ex:"4 µF = 0.000 004 F",         hi:true  },
                  { term:"nano",  sym:"n", mult:"0.000 000 001",     exp:"10⁻⁹", ex:"9 nA = 0.000 000 009 A",     hi:false },
                  { term:"pico",  sym:"p", mult:"0.000 000 000 001", exp:"10⁻¹²",ex:"3 pA = 0.000 000 000 003 A", hi:false },
                ].map(({ term, sym, mult, exp, ex, hi }) => (
                  <tr key={term} className={hi ? "bg-primary/5" : ""}>
                    <td className={`px-4 py-3 font-medium ${hi ? "text-foreground" : "text-muted-foreground"}`}>{term}</td>
                    <td className="px-4 py-3 text-center font-mono font-bold text-yellow-300">{sym}</td>
                    <td className="px-4 py-3 text-center font-mono text-xs text-muted-foreground">{mult}</td>
                    <td className="px-4 py-3 text-center font-mono text-sm text-primary">{exp}</td>
                    <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{ex}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-xs text-muted-foreground mt-2 px-1">Highlighted rows are most commonly used in electrotechnology.</p>
          </div>

          {/* Two rules */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-background/30 border border-white/8 rounded-xl p-4 space-y-2">
              <p className="text-sm font-semibold text-foreground">Rule 1 — Remove a prefix</p>
              <p className="text-xs text-muted-foreground leading-relaxed">Replace the prefix symbol with its numerical value before using it in an equation. You cannot divide 2 V by 2 kΩ — replace k with 1000 first to get 2000 Ω.</p>
            </div>
            <div className="bg-background/30 border border-white/8 rounded-xl p-4 space-y-2">
              <p className="text-sm font-semibold text-foreground">Rule 2 — Add a prefix</p>
              <p className="text-xs text-muted-foreground leading-relaxed">Use a prefix to make a large or small number easier to read. e.g. rewrite 800 000 m as 800 km.</p>
            </div>
          </div>

          {/* Conversion table */}
          <div className="overflow-x-auto">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">How to Convert — Decimal Point Method</p>
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-muted/30 border-b border-white/10">
                  <th className="px-4 py-2 text-left text-muted-foreground font-semibold">Prefix</th>
                  <th className="px-4 py-2 text-left text-muted-foreground font-semibold">To ADD the prefix</th>
                  <th className="px-4 py-2 text-left text-muted-foreground font-semibold">To REMOVE the prefix</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  { p:"mega (M)", add:"Move decimal 6 places LEFT (÷ 1 000 000)   e.g. 1 000 000 Ω = 1 MΩ", rem:"Move decimal 6 places RIGHT (× 1 000 000)   e.g. 1 MΩ = 1 000 000 Ω" },
                  { p:"kilo (k)", add:"Move decimal 3 places LEFT (÷ 1000)   e.g. 1000 V = 1 kV", rem:"Move decimal 3 places RIGHT (× 1000)   e.g. 1 kV = 1000 V" },
                  { p:"milli (m)", add:"Move decimal 3 places RIGHT (× 1000)   e.g. 0.001 A = 1 mA", rem:"Move decimal 3 places LEFT (÷ 1000)   e.g. 1 mA = 0.001 A" },
                  { p:"micro (µ)", add:"Move decimal 6 places RIGHT (× 1 000 000)   e.g. 0.000 001 A = 1 µA", rem:"Move decimal 6 places LEFT (÷ 1 000 000)   e.g. 1 µA = 0.000 001 A" },
                ].map(({ p, add, rem }) => (
                  <tr key={p} className="hover:bg-white/3 transition-colors">
                    <td className="px-4 py-2 font-mono font-semibold text-yellow-300">{p}</td>
                    <td className="px-4 py-2 text-muted-foreground">{add}</td>
                    <td className="px-4 py-2 text-muted-foreground">{rem}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Decimal-point notation */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 flex gap-3">
            <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"/>
            <div className="space-y-1">
              <p className="text-sm font-semibold text-foreground">Decimal Point Notation</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                On circuit diagrams and components the decimal point can be hard to read. To avoid confusion, the prefix symbol
                is sometimes placed <em>where</em> the decimal point would be:
              </p>
              <div className="font-mono text-xs text-muted-foreground grid grid-cols-2 sm:grid-cols-4 gap-2 mt-2">
                {[["6.8 MΩ","6M8Ω"],["2.7 kΩ","2k7Ω"],["25.6 µA","25µ6A"],["30.5 mV","30m5V"]].map(([a,b])=>(
                  <div key={a} className="bg-background/30 rounded-lg px-2 py-1 text-center">
                    <span className="text-foreground">{a}</span><span className="text-muted-foreground"> = </span><span className="text-primary">{b}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-1">Always write a leading zero: write <span className="font-mono text-foreground">0.005</span> not <span className="font-mono text-foreground">.005</span></p>
            </div>
          </div>

          {/* Examples 3.4–3.9 */}
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Worked Examples</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { num:"3.4", q:"How many volts in 3.9 MV?",        sol:"M = × 1 000 000", ans:"3 900 000 V" },
                { num:"3.5", q:"Convert 2.75 kV to volts.",         sol:"k = × 1000",      ans:"2750 V" },
                { num:"3.6", q:"Convert 25.8 µA to amperes.",       sol:"µ = ÷ 1 000 000", ans:"0.0000258 A" },
                { num:"3.7", q:"Write 4.76 mA in amperes.",         sol:"m = ÷ 1000",      ans:"0.00476 A" },
                { num:"3.8", q:"Convert 2 560 000 Ω to MΩ.",        sol:"÷ 1 000 000",     ans:"2.56 MΩ" },
                { num:"3.9", q:"Rewrite 0.0056 A in milliamperes.", sol:"× 1000",          ans:"5.6 mA" },
              ].map(({ num, q, sol, ans }) => (
                <div key={num} className="bg-background/30 border border-white/8 rounded-xl p-3 space-y-1">
                  <p className="text-xs font-bold text-primary">Example {num}</p>
                  <p className="text-xs text-muted-foreground">{q}</p>
                  <p className="font-mono text-xs text-muted-foreground">{sol}</p>
                  <p className="font-mono text-sm font-bold text-yellow-300">{ans}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Exercise 3.2 */}
          <div className="bg-background/30 border border-white/8 rounded-xl p-5 space-y-3">
            <p className="text-sm font-semibold text-foreground">Exercise 3.2</p>
            <ol className="space-y-1.5 list-decimal list-inside">
              {[
                "Use a prefix to write 1 200 000 ohms in a simpler way.",
                "Simplify 0.000056 A by expressing it with a prefix.",
                "How many volts does 3.45 kV represent?",
                "Convert 6530 millivolts to volts.",
                "A thermocouple produces 30 mV. Express in volts.",
                "A resistance is given as 0.000003 Ω. Express in micro ohms.",
                "Express 0.04 V in millivolts (mV).",
                "Power is transmitted at 330 kV. How many volts is that?",
                "Express 0.00568 W in milliwatts (mW) and microwatts (µW).",
                "Convert the resistance value of 27k6 ohms to ohms.",
              ].map((q, i) => (
                <li key={i} className="text-xs text-muted-foreground leading-relaxed">{q}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      {/* ── 3.4 Scientific & Engineering Notation ── */}
      <div className="bg-card border border-white/8 rounded-2xl overflow-hidden">
        <div className="px-6 py-4 border-b border-white/8 flex items-center gap-3">
          <Calculator className="w-4 h-4 text-primary" />
          <h2 className="font-semibold text-foreground">3.4 — Scientific &amp; Engineering Notation</h2>
        </div>
        <div className="p-6 space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-background/30 border border-white/8 rounded-xl p-4 space-y-2">
              <p className="text-sm font-semibold text-foreground">Scientific Notation</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Expresses any number as a coefficient multiplied by a power of 10.
                The exponent can be any integer.
              </p>
              <p className="font-mono text-xs text-muted-foreground">e.g. 40 A = 4 × 10¹, 4000 A = 4 × 10³</p>
              <p className="font-mono text-xs text-muted-foreground">A change from 40 → 4000 A = 2 orders of magnitude</p>
            </div>
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 space-y-2">
              <p className="text-sm font-semibold text-primary">Engineering Notation</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                A subset of scientific notation where the exponent is always a <strong className="text-foreground">multiple of 3</strong> (3, 6, 9, 12…).
                This matches the metric prefixes used in electrical work.
                Some calculators have an <span className="font-mono text-foreground">ENG</span> key to convert results to this format.
              </p>
              <p className="font-mono text-xs text-muted-foreground">e.g. 2 340 000 → <span className="text-primary font-bold">2.34 × 10⁶</span></p>
            </div>
          </div>

          {/* Prefix ↔ notation table */}
          <div className="overflow-x-auto">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Prefix ↔ Engineering Notation</p>
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/30 border-b border-white/10">
                  <th className="px-4 py-2 text-left text-muted-foreground font-semibold">Term</th>
                  <th className="px-4 py-2 text-center text-muted-foreground font-semibold">Symbol</th>
                  <th className="px-4 py-2 text-center text-muted-foreground font-semibold">Notation</th>
                  <th className="px-4 py-2 text-left text-muted-foreground font-semibold">Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  { t:"tera",  s:"T",  n:"10¹²",  ex:"1.6 THz = 1.6 × 10¹² Hz" },
                  { t:"giga",  s:"G",  n:"10⁹",   ex:"4 GW = 4 × 10⁹ W" },
                  { t:"mega",  s:"M",  n:"10⁶",   ex:"3 MΩ = 3 × 10⁶ Ω" },
                  { t:"kilo",  s:"k",  n:"10³",   ex:"2.2 kV = 2.2 × 10³ V" },
                  { t:"milli", s:"m",  n:"10⁻³",  ex:"5.6 mA = 5.6 × 10⁻³ A" },
                  { t:"micro", s:"µ",  n:"10⁻⁶",  ex:"89 µA = 89 × 10⁻⁶ A" },
                  { t:"nano",  s:"n",  n:"10⁻⁹",  ex:"6 nA = 6 × 10⁻⁹ A" },
                  { t:"pico",  s:"p",  n:"10⁻¹²", ex:"5 pA = 5 × 10⁻¹² A" },
                ].map(({ t, s, n, ex }) => (
                  <tr key={t} className="hover:bg-white/3 transition-colors">
                    <td className="px-4 py-2 text-muted-foreground">{t}</td>
                    <td className="px-4 py-2 text-center font-mono font-bold text-yellow-300">{s}</td>
                    <td className="px-4 py-2 text-center font-mono text-primary">{n}</td>
                    <td className="px-4 py-2 font-mono text-xs text-muted-foreground">{ex}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ── 3.5 Using Engineering Notation ── */}
      <div className="bg-card border border-white/8 rounded-2xl overflow-hidden">
        <div className="px-6 py-4 border-b border-white/8 flex items-center gap-3">
          <Calculator className="w-4 h-4 text-primary" />
          <h2 className="font-semibold text-foreground">3.5 — Using Engineering Notation</h2>
        </div>
        <div className="p-6 space-y-6">
          <p className="text-sm text-muted-foreground leading-relaxed">
            When values are given with prefixes (e.g. 33 kV), replace the prefix with its engineering notation
            equivalent (33 × 10³) before solving the equation.
          </p>

          {/* Three operation rules */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title:"Multiplication",
                rule:"Multiply the coefficients — Algebraically add the exponents",
                colour:"text-blue-300", border:"border-blue-400/25", bg:"bg-blue-400/5",
                examples:[
                  "(3×10³) × (4×10⁶) = 12×10⁹",
                  "(15×10⁶) × (5×10⁻³) = 75×10³",
                  "(2.2×10⁻⁶) × (1.5×10⁻³) = 3.3×10⁻⁹",
                ],
              },
              {
                title:"Division",
                rule:"Divide the coefficients — Algebraically subtract the bottom exponent from the top",
                colour:"text-green-300", border:"border-green-400/25", bg:"bg-green-400/5",
                examples:[
                  "6.6×10⁶ ÷ 2×10³ = 3.3×10³",
                  "8×10³ ÷ 4×10⁶ = 2×10⁻³",
                  "15×10⁶ ÷ 3×10⁻³ = 0.5×10⁹",
                ],
              },
              {
                title:"Addition / Subtraction",
                rule:"Values must have the SAME exponent first. Add/subtract the coefficients only.",
                colour:"text-orange-300", border:"border-orange-400/25", bg:"bg-orange-400/5",
                examples:[
                  "(3.5×10³) + (4.1×10³) = 7.6×10³",
                  "(45.6×10⁻³) + (6.2×10⁻³) = 51.8×10⁻³",
                  "(21.6×10⁻⁶) − (5×10⁻⁶) = 16.6×10⁻⁶",
                ],
              },
            ].map(({ title, rule, colour, border, bg, examples }) => (
              <div key={title} className={`${bg} border ${border} rounded-2xl p-4 space-y-3`}>
                <p className={`text-sm font-semibold ${colour}`}>{title}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{rule}</p>
                <div className="space-y-1">
                  {examples.map((ex, i) => (
                    <p key={i} className={`font-mono text-xs ${colour}`}>{ex}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Changing exponent rules */}
          <div className="bg-background/30 border border-white/8 rounded-xl p-5 space-y-3">
            <p className="text-sm font-semibold text-foreground">Rules for Changing Between Exponents</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { n:"1", rule:"To REDUCE a positive exponent — move decimal RIGHT", ex:"12 MV → 12 000 kV (12×10⁶ → 12000×10³)" },
                { n:"2", rule:"To INCREASE a positive exponent — move decimal LEFT", ex:"1234 kΩ → 1.234 MΩ (1234×10³ → 1.234×10⁶)" },
                { n:"3", rule:"To INCREASE a negative exponent — move decimal RIGHT", ex:"0.12 mA → 120 µA (0.12×10⁻³ → 120×10⁻⁶)" },
                { n:"4", rule:"To REDUCE a negative exponent — move decimal LEFT", ex:"1234 µA → 1.234 mA (1234×10⁻⁶ → 1.234×10⁻³)" },
              ].map(({ n, rule, ex }) => (
                <div key={n} className="flex gap-3">
                  <span className="text-primary font-bold text-sm flex-shrink-0">{n}.</span>
                  <div>
                    <p className="text-sm text-foreground">{rule}</p>
                    <p className="font-mono text-xs text-muted-foreground mt-1">{ex}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Examples 3.10–3.13 */}
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Worked Examples</p>
            <ExampleCard
              num="3.10" title="Voltage with prefixes (multiplication)"
              given={["I = 5 mA = 5 × 10⁻³ A", "R = 1.5 MΩ = 1.5 × 10⁶ Ω"]} find="V"
              steps={["V = I × R", "V = (1.5×10⁶) × (5×10⁻³)", "V = 7.5 × 10³ volts"]}
              answer="V = 7.5 kV" colour="blue"
            />
            <ExampleCard
              num="3.11" title="Resistance with prefixes (division)"
              given={["V = 1.5 MV = 1.5 × 10⁶ V", "I = 3 mA = 3 × 10⁻³ A"]} find="R"
              steps={["R = V / I = (1.5×10⁶) / (3×10⁻³)", "R = 0.5 × 10⁹ Ω", "R = 500 × 10⁶ Ω"]}
              answer="R = 500 MΩ" colour="purple"
            />
            <ExampleCard
              num="3.12" title="Addition — different prefixes"
              given={["876 µA", "4.6 mA"]} find="Total current"
              steps={["Convert µA to mA: 876 µA = 0.876 mA", "4.6 mA + 0.876 mA"]}
              answer="5.476 mA" colour="green"
            />
            <ExampleCard
              num="3.13" title="Subtraction — different prefixes"
              given={["3.9 MΩ", "120 kΩ"]} find="Difference"
              steps={["Convert MΩ to kΩ: 3.9 MΩ = 3900 kΩ", "3900 kΩ − 120 kΩ"]}
              answer="3780 kΩ" colour="orange"
            />
          </div>

          {/* Exercise 3.3 */}
          <div className="bg-background/30 border border-white/8 rounded-xl p-5 space-y-3">
            <p className="text-sm font-semibold text-foreground">Exercise 3.3</p>
            <ol className="space-y-1.5 list-decimal list-inside">
              {[
                "Convert 200 µA to milliamps.",
                "Express 0.4 GW in megawatts.",
                "An ammeter reads 0.24 mA. Express in microamperes (µA).",
                "Convert 660 kV to megavolts (MV).",
                "Convert 0.059 mA to microamps (µA).",
                "Express 330 kΩ in megohms.",
                "Find the voltage across a 2.2 kΩ resistor with 3 mA flowing through it.",
                "Calculate the current in an 8.2 kΩ resistor with 10 V across it.",
                "Add: 330 Ω + 33 kΩ + 3.3 MΩ.",
                "Subtract 250 MW from 4.5 GW.",
              ].map((q, i) => (
                <li key={i} className="text-xs text-muted-foreground leading-relaxed">{q}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      {/* ── Chapter Summary ── */}
      <div className="bg-card border border-border rounded-2xl p-5 space-y-4">
        <h2 className="font-semibold text-foreground">Chapter Summary</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {[
            "Resistance is opposition to current flow — symbol R, unit ohm (Ω).",
            "Conductance is the reciprocal of resistance — symbol G, unit siemens (S). G = 1/R.",
            "Ohm's law: I = V/R  ·  V = IR  ·  R = V/I",
            "Current is directly proportional to voltage, inversely proportional to resistance.",
            "The four most used prefixes: mega (M), kilo (k), milli (m), micro (µ).",
            "Remove a prefix before using a value in an equation — replace with base units.",
            "Engineering notation uses only powers of 10 that are multiples of 3.",
            "Multiplication: multiply coefficients, algebraically add exponents.",
            "Division: divide coefficients, algebraically subtract bottom exponent from top.",
            "Addition/subtraction: convert to the same exponent first, then operate on coefficients.",
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
