import { Calculator, Zap, Info, BookOpen, FlameKindling } from "lucide-react";

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

      {/* ── Ohm's Law Introduction ── */}
      <div className="bg-card border border-border rounded-2xl p-5 space-y-4">
        <div className="flex items-center gap-2">
          <Info className="w-4 h-4 text-yellow-400" />
          <h2 className="font-semibold text-foreground">What is Ohm's Law?</h2>
        </div>
        <div className="bg-yellow-500/10 border border-yellow-400/20 rounded-xl p-4 text-center">
          <p className="text-lg font-bold text-yellow-300">
            The current flowing in a circuit is directly proportional to the voltage applied, and inversely proportional to the resistance.
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

      {/* ── Ohm's Law Triangle ── */}
      <div className="bg-card border border-border rounded-2xl p-5 space-y-5">
        <div className="flex items-center gap-2">
          <Calculator className="w-4 h-4 text-yellow-400" />
          <h2 className="font-semibold text-foreground">The Ohm's Law Triangle</h2>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          The triangle is a memory aid. Cover the quantity you want to find — the remaining two show how to calculate it.
          V sits at the top; I and R sit side-by-side at the bottom.
        </p>
        <div className="flex flex-col md:flex-row gap-6 items-center">
          {/* Triangle SVG */}
          <div className="flex-shrink-0">
            <svg viewBox="0 0 200 180" className="w-52 h-auto" aria-label="Ohm's Law triangle — V over I and R">
              {/* Triangle outline */}
              <polygon points="100,10 10,165 190,165" fill="none" stroke="#fbbf24" strokeWidth="2.5" strokeLinejoin="round"/>
              {/* Divider */}
              <line x1="10" y1="122" x2="190" y2="122" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="4 3"/>
              {/* V label */}
              <text x="100" y="100" textAnchor="middle" fill="#fbbf24" fontSize="36" fontWeight="bold" fontFamily="monospace">V</text>
              {/* I label */}
              <text x="65" y="155" textAnchor="middle" fill="#60a5fa" fontSize="28" fontWeight="bold" fontFamily="monospace">I</text>
              {/* × symbol */}
              <text x="102" y="155" textAnchor="middle" fill="#6b7280" fontSize="18" fontFamily="monospace">×</text>
              {/* R label */}
              <text x="140" y="155" textAnchor="middle" fill="#fb923c" fontSize="28" fontWeight="bold" fontFamily="monospace">R</text>
              {/* Cover hint */}
              <text x="100" y="178" textAnchor="middle" fill="#6b7280" fontSize="8">Cover the unknown to find the formula</text>
            </svg>
          </div>
          {/* Three formulas */}
          <div className="flex-1 grid grid-cols-1 gap-3">
            {[
              { title: "Find Voltage", formula: "V = I × R", desc: "Multiply current (A) by resistance (Ω) to get voltage (V).", colour: "text-yellow-300", bg: "bg-yellow-400/5", border: "border-yellow-400/25" },
              { title: "Find Current", formula: "I = V ÷ R", desc: "Divide voltage (V) by resistance (Ω) to get current (A).", colour: "text-blue-300", bg: "bg-blue-400/5", border: "border-blue-400/25" },
              { title: "Find Resistance", formula: "R = V ÷ I", desc: "Divide voltage (V) by current (A) to get resistance (Ω).", colour: "text-orange-300", bg: "bg-orange-400/5", border: "border-orange-400/25" },
            ].map(({ title, formula, desc, colour, bg, border }) => (
              <div key={title} className={`${bg} border ${border} rounded-xl p-3 flex items-center gap-4`}>
                <div className={`font-mono text-xl font-bold ${colour} min-w-[7rem] text-center`}>{formula}</div>
                <div className="space-y-0.5">
                  <div className="text-xs font-semibold text-foreground">{title}</div>
                  <div className="text-xs text-muted-foreground">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Ohm's Law — Units Table ── */}
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

      {/* ── Ohm's Law — Worked Examples ── */}
      <div className="bg-card border border-border rounded-2xl p-5 space-y-4">
        <div className="flex items-center gap-2">
          <Calculator className="w-4 h-4 text-yellow-400" />
          <h2 className="font-semibold text-foreground">Ohm's Law — Worked Examples</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              title: "Find Voltage",
              given: [{ label: "Current (I)", value: "3 A" }, { label: "Resistance (R)", value: "8 Ω" }],
              formula: "V = I × R",
              steps: ["V = 3 × 8", "V = 24 V"],
              answer: "24 V",
              colour: "text-yellow-300",
              bg: "bg-yellow-400/5",
              border: "border-yellow-400/25",
            },
            {
              title: "Find Current",
              given: [{ label: "Voltage (V)", value: "240 V" }, { label: "Resistance (R)", value: "60 Ω" }],
              formula: "I = V ÷ R",
              steps: ["I = 240 ÷ 60", "I = 4 A"],
              answer: "4 A",
              colour: "text-blue-300",
              bg: "bg-blue-400/5",
              border: "border-blue-400/25",
            },
            {
              title: "Find Resistance",
              given: [{ label: "Voltage (V)", value: "12 V" }, { label: "Current (I)", value: "0.5 A" }],
              formula: "R = V ÷ I",
              steps: ["R = 12 ÷ 0.5", "R = 24 Ω"],
              answer: "24 Ω",
              colour: "text-orange-300",
              bg: "bg-orange-400/5",
              border: "border-orange-400/25",
            },
          ].map(({ title, given, formula, steps, answer, colour, bg, border }) => (
            <div key={title} className={`${bg} border ${border} rounded-xl p-4 space-y-3`}>
              <div className="text-sm font-semibold text-foreground">{title}</div>
              <div className="space-y-1">
                <div className="text-xs text-muted-foreground font-medium">Given:</div>
                {given.map(({ label, value }) => (
                  <div key={label} className="flex justify-between text-xs">
                    <span className="text-muted-foreground">{label}</span>
                    <span className="font-mono text-foreground">{value}</span>
                  </div>
                ))}
              </div>
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

      {/* ── Electrical Power ── */}
      <div className="bg-card border border-border rounded-2xl p-5 space-y-4">
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-green-400" />
          <h2 className="font-semibold text-foreground">Electrical Power</h2>
        </div>
        <div className="bg-green-500/10 border border-green-400/20 rounded-xl p-4">
          <p className="text-lg font-bold text-green-300 text-center">
            Power is the rate at which electrical energy is converted into another form of energy.
          </p>
          <p className="text-sm text-muted-foreground mt-2 text-center">
            Measured in <span className="text-foreground font-medium">Watts (W)</span>. One watt = one joule of energy converted per second.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
          <div className="flex gap-3 items-start bg-green-400/5 border border-green-400/20 rounded-xl p-3">
            <span className="mt-0.5 w-2 h-2 rounded-full flex-shrink-0 bg-green-400" />
            <p><span className="text-green-300 font-semibold">Resistive load</span> — converts electrical energy entirely into heat (e.g. an electric heater, heating element, incandescent lamp).</p>
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
          Watt's Law states that Power equals Voltage multiplied by Current. The power triangle works the same way as the Ohm's Law triangle — cover the quantity you need to find.
        </p>
        <div className="flex flex-col md:flex-row gap-6 items-center">
          {/* Triangle SVG */}
          <div className="flex-shrink-0">
            <svg viewBox="0 0 200 180" className="w-52 h-auto" aria-label="Power triangle — P over V and I">
              <polygon points="100,10 10,165 190,165" fill="none" stroke="#4ade80" strokeWidth="2.5" strokeLinejoin="round"/>
              <line x1="10" y1="122" x2="190" y2="122" stroke="#4ade80" strokeWidth="1.5" strokeDasharray="4 3"/>
              <text x="100" y="100" textAnchor="middle" fill="#4ade80" fontSize="36" fontWeight="bold" fontFamily="monospace">P</text>
              <text x="65" y="155" textAnchor="middle" fill="#fbbf24" fontSize="28" fontWeight="bold" fontFamily="monospace">V</text>
              <text x="102" y="155" textAnchor="middle" fill="#6b7280" fontSize="18" fontFamily="monospace">×</text>
              <text x="140" y="155" textAnchor="middle" fill="#60a5fa" fontSize="28" fontWeight="bold" fontFamily="monospace">I</text>
              <text x="100" y="178" textAnchor="middle" fill="#6b7280" fontSize="8">Cover the unknown to find the formula</text>
            </svg>
          </div>
          {/* Three formulas */}
          <div className="flex-1 grid grid-cols-1 gap-3">
            {[
              { title: "Find Power", formula: "P = V × I", desc: "Multiply voltage (V) by current (A) to get power in Watts (W).", colour: "text-green-300", bg: "bg-green-400/5", border: "border-green-400/25" },
              { title: "Find Voltage", formula: "V = P ÷ I", desc: "Divide power (W) by current (A) to get voltage (V).", colour: "text-yellow-300", bg: "bg-yellow-400/5", border: "border-yellow-400/25" },
              { title: "Find Current", formula: "I = P ÷ V", desc: "Divide power (W) by voltage (V) to get current (A).", colour: "text-blue-300", bg: "bg-blue-400/5", border: "border-blue-400/25" },
            ].map(({ title, formula, desc, colour, bg, border }) => (
              <div key={title} className={`${bg} border ${border} rounded-xl p-3 flex items-center gap-4`}>
                <div className={`font-mono text-xl font-bold ${colour} min-w-[7rem] text-center`}>{formula}</div>
                <div className="space-y-0.5">
                  <div className="text-xs font-semibold text-foreground">{title}</div>
                  <div className="text-xs text-muted-foreground">{desc}</div>
                </div>
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
          Substituting Ohm's Law (V = I × R) into Watt's Law (P = V × I) produces two additional formulas for power. These are useful when voltage is not directly known.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-orange-400/5 border border-orange-400/25 rounded-xl p-4 space-y-3">
            <div className="font-mono text-xl font-bold text-orange-300">P = I² × R</div>
            <div className="text-sm font-semibold text-foreground">Power from Current and Resistance</div>
            <div className="text-xs text-muted-foreground space-y-1">
              <div>Derivation: substitute V = I × R into P = V × I</div>
              <div className="font-mono bg-background/40 rounded px-2 py-1">P = (I × R) × I = I² × R</div>
              <div className="pt-1">Use this when voltage is unknown but current and resistance are known. Useful for calculating heat dissipation in a resistor.</div>
            </div>
            {/* Worked example */}
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
              <div>Derivation: substitute I = V ÷ R into P = V × I</div>
              <div className="font-mono bg-background/40 rounded px-2 py-1">P = V × (V ÷ R) = V² ÷ R</div>
              <div className="pt-1">Use this when current is unknown but voltage and resistance are known. Common for calculating the wattage of a heating element.</div>
            </div>
            {/* Worked example */}
            <div className="bg-background/40 rounded-xl p-3 space-y-1 text-xs">
              <div className="text-foreground font-semibold mb-1">Example</div>
              <div className="text-muted-foreground">A 240 V element has a resistance of 57.6 Ω. What is its wattage?</div>
              <div className="font-mono text-violet-300">P = 240² ÷ 57.6 = 57,600 ÷ 57.6 = 1,000 W</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Formula Wheel ── */}
      <div className="bg-card border border-border rounded-2xl p-5 space-y-4">
        <div className="flex items-center gap-2">
          <Calculator className="w-4 h-4 text-yellow-400" />
          <h2 className="font-semibold text-foreground">The Formula Wheel — All 12 Permutations</h2>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Combining Ohm's Law and Watt's Law produces 12 equations — three formulas for each of the four quantities (V, I, R, P).
          Given any two known values, any unknown can be calculated.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              qty: "V", name: "Voltage", unit: "Volts", colour: "text-yellow-300", bg: "bg-yellow-400/5", border: "border-yellow-400/25",
              formulas: [
                { eq: "V = I × R", label: "Ohm's Law" },
                { eq: "V = P ÷ I", label: "Watt's Law" },
                { eq: "V = √(P × R)", label: "Combined" },
              ]
            },
            {
              qty: "I", name: "Current", unit: "Amperes", colour: "text-blue-300", bg: "bg-blue-400/5", border: "border-blue-400/25",
              formulas: [
                { eq: "I = V ÷ R", label: "Ohm's Law" },
                { eq: "I = P ÷ V", label: "Watt's Law" },
                { eq: "I = √(P ÷ R)", label: "Combined" },
              ]
            },
            {
              qty: "R", name: "Resistance", unit: "Ohms", colour: "text-orange-300", bg: "bg-orange-400/5", border: "border-orange-400/25",
              formulas: [
                { eq: "R = V ÷ I", label: "Ohm's Law" },
                { eq: "R = V² ÷ P", label: "Watt's Law" },
                { eq: "R = P ÷ I²", label: "Combined" },
              ]
            },
            {
              qty: "P", name: "Power", unit: "Watts", colour: "text-green-300", bg: "bg-green-400/5", border: "border-green-400/25",
              formulas: [
                { eq: "P = V × I", label: "Watt's Law" },
                { eq: "P = I² × R", label: "Combined" },
                { eq: "P = V² ÷ R", label: "Combined" },
              ]
            },
          ].map(({ qty, name, unit, colour, bg, border, formulas }) => (
            <div key={qty} className={`${bg} border ${border} rounded-xl p-4 space-y-3`}>
              <div className="flex items-baseline gap-2">
                <span className={`text-3xl font-display font-bold ${colour}`}>{qty}</span>
                <span className="text-foreground font-semibold text-sm">{name}</span>
                <span className={`text-xs font-mono ${colour} ml-auto`}>{unit}</span>
              </div>
              <div className="space-y-2">
                {formulas.map(({ eq, label }) => (
                  <div key={eq} className="flex items-center justify-between gap-2">
                    <div className={`font-mono text-sm font-bold ${colour}`}>{eq}</div>
                    <div className="text-xs text-muted-foreground bg-background/40 rounded px-2 py-0.5">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* Formula wheel SVG */}
        <div className="flex justify-center pt-2">
          <svg viewBox="0 0 320 320" className="w-72 h-72" aria-label="Formula wheel showing V, I, R, P relationships">
            {/* Outer ring */}
            <circle cx="160" cy="160" r="148" fill="none" stroke="#374151" strokeWidth="1.5"/>
            {/* Inner ring */}
            <circle cx="160" cy="160" r="95" fill="none" stroke="#374151" strokeWidth="1.5"/>
            {/* Centre ring */}
            <circle cx="160" cy="160" r="42" fill="none" stroke="#374151" strokeWidth="1.5"/>
            {/* Quadrant dividers */}
            <line x1="160" y1="12" x2="160" y2="308" stroke="#374151" strokeWidth="1.5"/>
            <line x1="12" y1="160" x2="308" y2="160" stroke="#374151" strokeWidth="1.5"/>

            {/* Centre labels */}
            <text x="100" y="148" textAnchor="middle" fill="#fbbf24" fontSize="15" fontWeight="bold" fontFamily="monospace">V</text>
            <text x="160" y="148" textAnchor="middle" fill="#60a5fa" fontSize="15" fontWeight="bold" fontFamily="monospace">I</text>
            <text x="100" y="175" textAnchor="middle" fill="#fb923c" fontSize="15" fontWeight="bold" fontFamily="monospace">R</text>
            <text x="160" y="175" textAnchor="middle" fill="#4ade80" fontSize="15" fontWeight="bold" fontFamily="monospace">P</text>

            {/* Quadrant labels (inner ring) — V top-left */}
            <text x="90" y="95" textAnchor="middle" fill="#fbbf24" fontSize="9" fontFamily="monospace">I×R</text>
            <text x="60" y="113" textAnchor="middle" fill="#fbbf24" fontSize="9" fontFamily="monospace">P÷I</text>
            <text x="112" y="113" textAnchor="middle" fill="#fbbf24" fontSize="9" fontFamily="monospace">√(P×R)</text>

            {/* I top-right */}
            <text x="232" y="95" textAnchor="middle" fill="#60a5fa" fontSize="9" fontFamily="monospace">V÷R</text>
            <text x="205" y="113" textAnchor="middle" fill="#60a5fa" fontSize="9" fontFamily="monospace">P÷V</text>
            <text x="255" y="113" textAnchor="middle" fill="#60a5fa" fontSize="9" fontFamily="monospace">√(P÷R)</text>

            {/* R bottom-left */}
            <text x="90" y="215" textAnchor="middle" fill="#fb923c" fontSize="9" fontFamily="monospace">V÷I</text>
            <text x="60" y="233" textAnchor="middle" fill="#fb923c" fontSize="9" fontFamily="monospace">V²÷P</text>
            <text x="112" y="233" textAnchor="middle" fill="#fb923c" fontSize="9" fontFamily="monospace">P÷I²</text>

            {/* P bottom-right */}
            <text x="232" y="215" textAnchor="middle" fill="#4ade80" fontSize="9" fontFamily="monospace">V×I</text>
            <text x="205" y="233" textAnchor="middle" fill="#4ade80" fontSize="9" fontFamily="monospace">I²×R</text>
            <text x="255" y="233" textAnchor="middle" fill="#4ade80" fontSize="9" fontFamily="monospace">V²÷R</text>

            {/* Corner labels */}
            <text x="75" y="40" textAnchor="middle" fill="#fbbf24" fontSize="10" fontWeight="bold">VOLTAGE</text>
            <text x="245" y="40" textAnchor="middle" fill="#60a5fa" fontSize="10" fontWeight="bold">CURRENT</text>
            <text x="75" y="288" textAnchor="middle" fill="#fb923c" fontSize="10" fontWeight="bold">RESISTANCE</text>
            <text x="245" y="288" textAnchor="middle" fill="#4ade80" fontSize="10" fontWeight="bold">POWER</text>
          </svg>
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
              formula: "P = V × I",
              steps: ["P = 240 × 0.5", "P = 120 W"],
              answer: "120 W",
              colour: "text-green-300",
              bg: "bg-green-400/5",
              border: "border-green-400/25",
            },
            {
              title: "Current from Power Rating",
              scenario: "A 2,400 W electric heater operates at 240 V. What current does it draw?",
              formula: "I = P ÷ V",
              steps: ["I = 2,400 ÷ 240", "I = 10 A"],
              answer: "10 A",
              colour: "text-blue-300",
              bg: "bg-blue-400/5",
              border: "border-blue-400/25",
            },
            {
              title: "Resistor Heat Dissipation",
              scenario: "A 47 Ω resistor carries 0.3 A. How much power does it dissipate?",
              formula: "P = I² × R",
              steps: ["P = 0.3² × 47", "P = 0.09 × 47", "P = 4.23 W"],
              answer: "4.23 W",
              colour: "text-orange-300",
              bg: "bg-orange-400/5",
              border: "border-orange-400/25",
            },
            {
              title: "Element Resistance from Wattage",
              scenario: "A 1,000 W element is rated at 240 V. What is its resistance?",
              formula: "R = V² ÷ P",
              steps: ["R = 240² ÷ 1,000", "R = 57,600 ÷ 1,000", "R = 57.6 Ω"],
              answer: "57.6 Ω",
              colour: "text-violet-300",
              bg: "bg-violet-400/5",
              border: "border-violet-400/25",
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

      {/* ── Power Ratings & Prefixes ── */}
      <div className="bg-card border border-border rounded-2xl p-5 space-y-4">
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-yellow-400" />
          <h2 className="font-semibold text-foreground">Power Ratings &amp; Metric Prefixes</h2>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Electrical quantities are often expressed using metric prefixes when values are very large or very small.
          The SI prefix system applies equally to Watts, Volts, Amperes, and Ohms.
        </p>
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

      {/* ── Practical Notes ── */}
      <div className="bg-card border border-border rounded-2xl p-5 space-y-4">
        <div className="flex items-center gap-2">
          <Info className="w-4 h-4 text-blue-400" />
          <h2 className="font-semibold text-foreground">Practical Notes</h2>
        </div>
        <div className="space-y-2 text-sm text-muted-foreground">
          {[
            { dot: "bg-yellow-400", text: "Ohm's Law applies to resistive (ohmic) loads at constant temperature. Devices whose resistance changes significantly with temperature (e.g. motor windings, incandescent lamps at startup) are non-linear and Ohm's Law applies only approximately." },
            { dot: "bg-blue-400", text: "When using Watt's Law (P = V × I) for AC circuits, the result is apparent power (VA) unless the power factor is taken into account. True power (W) = V × I × cos(φ), where φ is the phase angle between voltage and current." },
            { dot: "bg-green-400", text: "Resistors are rated in both Ohms (resistance value) and Watts (maximum power dissipation). Exceeding the wattage rating causes overheating and failure. Always select a resistor with a wattage rating at least twice the calculated power dissipation for a safety margin." },
            { dot: "bg-orange-400", text: "In any circuit calculation, maintain consistent SI units throughout — Volts, Amperes, Ohms, and Watts. Convert prefixes (kΩ → Ω, mA → A) before substituting into formulas." },
            { dot: "bg-violet-400", text: "Power is always dissipated as heat in any real conductor with resistance. This is why cable sizing must consider both current-carrying capacity and voltage drop — both are consequences of cable resistance and Ohm's Law." },
          ].map(({ dot, text }) => (
            <div key={text} className="flex gap-3 items-start">
              <span className={`mt-1.5 w-2 h-2 rounded-full flex-shrink-0 ${dot}`} />
              <p>{text}</p>
            </div>
          ))}
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
            { n: "1", text: "Ohm's Law: V = I × R. Current is proportional to voltage and inversely proportional to resistance." },
            { n: "2", text: "Watt's Law: P = V × I. Power equals voltage multiplied by current." },
            { n: "3", text: "P = I²R and P = V²/R are derived by combining Ohm's and Watt's Laws." },
            { n: "4", text: "The formula wheel gives 12 equations — three ways to find each of V, I, R, and P." },
            { n: "5", text: "Given any two of V, I, R, P the remaining two can always be calculated." },
            { n: "6", text: "Power is measured in Watts (W). 1 W = 1 V × 1 A = 1 J/s." },
            { n: "7", text: "Ohm's Law is only strictly valid for linear (ohmic) resistors at constant temperature." },
            { n: "8", text: "Always convert metric prefixes to base SI units before calculating." },
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
