import { Zap, Info, BookOpen } from "lucide-react";

/* ─── Power Triangle SVG ─────────────────────────────────────────────────── */
function PowerTriangle() {
  return (
    <svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[200px] mx-auto">
      <polygon points="100,8 12,148 188,148" fill="none" stroke="#94a3b8" strokeWidth="1.5"/>
      <line x1="12" y1="78" x2="188" y2="78" stroke="#94a3b8" strokeWidth="1.5"/>
      <line x1="100" y1="78" x2="100" y2="148" stroke="#94a3b8" strokeWidth="1.5"/>
      <text x="100" y="58" textAnchor="middle" fill="#facc15" fontSize="26" fontWeight="bold">P</text>
      <text x="52"  y="125" textAnchor="middle" fill="#38bdf8" fontSize="22" fontWeight="bold">V</text>
      <text x="148" y="125" textAnchor="middle" fill="#f97316" fontSize="22" fontWeight="bold">I</text>
      <text x="100" y="156" textAnchor="middle" fill="#64748b" fontSize="8">Cover the unknown — equation is the other two</text>
    </svg>
  );
}

/* ─── Worked example card ─────────────────────────────────────────────────── */
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
export default function Power() {
  return (
    <div className="max-w-4xl mx-auto space-y-10 pb-16 p-6 md:p-8">

      {/* ── Header ── */}
      <div>
        <div className="flex items-center gap-3 mb-3">
          <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-lg p-2">
            <Zap className="w-5 h-5 text-yellow-400" />
          </div>
          <span className="text-sm font-medium text-primary uppercase tracking-widest">1C — Electrical Theory</span>
        </div>
        <h1 className="text-4xl font-display font-bold text-foreground tracking-tight mb-3">Electrical Power</h1>
        <p className="text-muted-foreground leading-relaxed max-w-2xl">
          Power is the <strong className="text-foreground">rate at which energy is used or converted</strong>. In electrical circuits,
          power is the product of voltage and current. The unit is the <strong className="text-foreground">watt (W)</strong>,
          named after Scottish engineer James Watt (1736–1819). Understanding power is essential for selecting
          cables, fuses, components and calculating running costs.
        </p>
      </div>

      {/* ── Definition ── */}
      <div className="bg-card border border-white/8 rounded-2xl overflow-hidden">
        <div className="px-6 py-4 border-b border-white/8 flex items-center gap-3">
          <BookOpen className="w-4 h-4 text-primary" />
          <h2 className="font-semibold text-foreground">What is Power?</h2>
        </div>
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-yellow-400/5 border border-yellow-400/20 rounded-xl p-4 space-y-2 sm:col-span-2">
              <p className="text-sm font-semibold text-yellow-300">Power — P</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Power is the rate at which work is done, or energy is transferred. In electrical terms it is
                the product of voltage (electrical pressure) and current (flow of electrons).
              </p>
              <div className="font-mono text-xl font-bold text-yellow-300 mt-2">P = V × I</div>
              <p className="font-mono text-sm text-muted-foreground">Unit: watt (W)&nbsp;&nbsp;Symbol: P</p>
              <p className="text-xs text-muted-foreground">1 watt = 1 volt × 1 ampere&nbsp;&nbsp;→&nbsp;&nbsp;1 W = 1 V·A</p>
            </div>
            <div className="bg-background/30 border border-white/8 rounded-xl p-4 space-y-2">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Also expressed as</p>
              <p className="font-mono text-sm text-muted-foreground">Work (joules)</p>
              <div className="font-mono text-lg font-bold text-primary">P = W / t</div>
              <p className="font-mono text-xs text-muted-foreground">W = work in joules</p>
              <p className="font-mono text-xs text-muted-foreground">t = time in seconds</p>
              <p className="text-xs text-muted-foreground mt-2">1 joule per second = 1 watt</p>
            </div>
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 flex gap-3">
            <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-foreground mb-1">Watt's Law</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Watt's Law states that power equals voltage multiplied by current: <span className="font-mono text-foreground">P = V × I</span>.
                Combined with Ohm's Law (<span className="font-mono text-foreground">V = IR</span>), two additional power formulas can be derived
                so that power can always be calculated when any two of V, I, or R are known.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Three Power Equations ── */}
      <div className="bg-card border border-white/8 rounded-2xl overflow-hidden">
        <div className="px-6 py-4 border-b border-white/8 flex items-center gap-3">
          <Zap className="w-4 h-4 text-yellow-400" />
          <h2 className="font-semibold text-foreground">The Three Power Equations</h2>
        </div>
        <div className="p-6 space-y-6">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {/* Equations */}
            <div className="space-y-3">
              {[
                {
                  label: "Voltage and current known",
                  eq: "P = V × I",
                  derivation: "Direct from Watt's Law",
                  note: "Most common — voltage and current are easiest to measure",
                  colour: "text-yellow-300", border: "border-yellow-400/25", bg: "bg-yellow-400/5",
                },
                {
                  label: "Current and resistance known",
                  eq: "P = I² × R",
                  derivation: "Substitute V = IR into P = VI → P = (IR)·I",
                  note: "Useful when voltage is unknown — e.g. cable heating",
                  colour: "text-orange-300", border: "border-orange-400/25", bg: "bg-orange-400/5",
                },
                {
                  label: "Voltage and resistance known",
                  eq: "P = V² / R",
                  derivation: "Substitute I = V/R into P = VI → P = V·(V/R)",
                  note: "Useful when current is not measured directly",
                  colour: "text-blue-300", border: "border-blue-400/25", bg: "bg-blue-400/5",
                },
              ].map(({ label, eq, derivation, note, colour, border, bg }) => (
                <div key={eq} className={`${bg} border ${border} rounded-xl px-4 py-3 space-y-1`}>
                  <p className={`text-xs font-semibold ${colour}`}>{label}</p>
                  <p className={`font-mono text-xl font-bold ${colour}`}>{eq}</p>
                  <p className="text-xs text-muted-foreground italic">{derivation}</p>
                  <p className="text-xs text-muted-foreground">{note}</p>
                </div>
              ))}
            </div>

            {/* Triangle */}
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Memory Triangle</p>
              <div className="bg-background/30 border border-white/8 rounded-xl p-4">
                <PowerTriangle />
              </div>
              <p className="text-xs text-muted-foreground text-center">Cover the value you want to find — equation is the other two</p>

              {/* Rearrangements */}
              <div className="bg-background/30 border border-white/8 rounded-xl p-4 space-y-2">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Rearranging P = VI</p>
                {[
                  { find:"Find P", eq:"P = V × I" },
                  { find:"Find V", eq:"V = P / I" },
                  { find:"Find I", eq:"I = P / V" },
                ].map(({ find, eq }) => (
                  <div key={find} className="flex justify-between items-center font-mono text-sm">
                    <span className="text-muted-foreground">{find}</span>
                    <span className="text-foreground font-semibold">{eq}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Worked Examples */}
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Worked Examples</p>
            <ExampleCard
              num="1" title="Electric kettle"
              given={["V = 230 V", "I = 8.7 A"]} find="P"
              steps={["P = V × I", "P = 230 × 8.7"]}
              answer="P = 2001 W ≈ 2 kW" colour="yellow"
            />
            <ExampleCard
              num="2" title="Cable heating — current and resistance known"
              given={["I = 10 A", "R = 0.5 Ω"]} find="P (heat dissipated)"
              steps={["P = I² × R", "P = 10² × 0.5", "P = 100 × 0.5"]}
              answer="P = 50 W" colour="orange"
            />
            <ExampleCard
              num="3" title="Resistor — voltage and resistance known"
              given={["V = 12 V", "R = 100 Ω"]} find="P"
              steps={["P = V² / R", "P = 12² / 100", "P = 144 / 100"]}
              answer="P = 1.44 W" colour="blue"
            />
            <ExampleCard
              num="4" title="Find current from power and voltage"
              given={["P = 1500 W", "V = 230 V"]} find="I"
              steps={["I = P / V", "I = 1500 / 230"]}
              answer="I = 6.52 A" colour="purple"
            />
          </div>

          {/* Practice questions */}
          <div className="bg-background/30 border border-white/8 rounded-xl p-5 space-y-3">
            <p className="text-sm font-semibold text-foreground">Practice Questions</p>
            <ol className="space-y-2 list-decimal list-inside">
              {[
                "A 230 V heater draws 4 A. Calculate the power consumed.",
                "A 60 W lamp is connected to 230 V. What current does it draw?",
                "A resistor of 470 Ω has 12 V across it. Calculate the power it dissipates.",
                "A cable has a resistance of 0.2 Ω and carries 15 A. How much power is lost as heat?",
                "An air conditioner draws 5 A at 230 V. Calculate its wattage.",
                "A 2.4 kW oven draws current from 230 V. Find the resistance of its element.",
              ].map((q, i) => (
                <li key={i} className="text-xs text-muted-foreground leading-relaxed">{q}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      {/* ── Energy ── */}
      <div className="bg-card border border-white/8 rounded-2xl overflow-hidden">
        <div className="px-6 py-4 border-b border-white/8 flex items-center gap-3">
          <BookOpen className="w-4 h-4 text-primary" />
          <h2 className="font-semibold text-foreground">Energy and the Kilowatt-Hour</h2>
        </div>
        <div className="p-6 space-y-5">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Power is a <em>rate</em> — it tells you how fast energy is being used. To find the total
            <strong className="text-foreground"> energy</strong> consumed you multiply power by time.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-background/30 border border-white/8 rounded-xl p-4 space-y-2">
              <p className="text-sm font-semibold text-foreground">Energy in Joules (SI unit)</p>
              <p className="font-mono text-xl font-bold text-primary">W = P × t</p>
              <p className="font-mono text-xs text-muted-foreground">W = energy in joules (J)</p>
              <p className="font-mono text-xs text-muted-foreground">P = power in watts (W)</p>
              <p className="font-mono text-xs text-muted-foreground">t = time in seconds (s)</p>
            </div>
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 space-y-2">
              <p className="text-sm font-semibold text-primary">Energy in Kilowatt-Hours (kWh)</p>
              <p className="font-mono text-xl font-bold text-primary">E = P(kW) × t(h)</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                The kilowatt-hour is the unit used by electricity meters and on power bills.
                1 kWh = 1000 W used for 1 hour = 3 600 000 J.
              </p>
              <div className="bg-background/30 rounded-lg px-3 py-2 font-mono text-xs text-muted-foreground">
                2 kW heater × 3 hours = <span className="text-primary font-bold">6 kWh</span>
              </div>
            </div>
          </div>

          <ExampleCard
            num="5" title="Energy consumed by an air conditioner"
            given={["P = 1.8 kW", "t = 8 hours"]} find="Energy (kWh)"
            steps={["E = P × t", "E = 1.8 × 8"]}
            answer="E = 14.4 kWh" colour="teal"
          />
        </div>
      </div>

      {/* ── Efficiency ── */}
      <div className="bg-card border border-white/8 rounded-2xl overflow-hidden">
        <div className="px-6 py-4 border-b border-white/8 flex items-center gap-3">
          <BookOpen className="w-4 h-4 text-primary" />
          <h2 className="font-semibold text-foreground">Efficiency</h2>
        </div>
        <div className="p-6 space-y-5">
          <p className="text-sm text-muted-foreground leading-relaxed">
            No machine or electrical device converts energy with 100% efficiency. Some energy is always lost —
            usually as heat. Efficiency compares the <strong className="text-foreground">useful output power</strong> to
            the <strong className="text-foreground">total input power</strong>.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-green-400/5 border border-green-400/25 rounded-xl p-4 space-y-2">
              <p className="text-sm font-semibold text-green-300">Efficiency Formula</p>
              <p className="font-mono text-xl font-bold text-green-300">η = (P_out / P_in) × 100%</p>
              <p className="font-mono text-xs text-muted-foreground">η (eta) = efficiency as a percentage</p>
              <p className="font-mono text-xs text-muted-foreground">P_out = useful output power (W)</p>
              <p className="font-mono text-xs text-muted-foreground">P_in  = total input power (W)</p>
            </div>
            <div className="bg-background/30 border border-white/8 rounded-xl p-4 space-y-3">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Key Points</p>
              {[
                "Efficiency is always less than 100% for real devices.",
                "Lost power = P_in − P_out (usually heat).",
                "Higher efficiency → lower running costs and less heat generated.",
                "Motors, transformers and compressors all have efficiency ratings.",
              ].map((pt, i) => (
                <div key={i} className="flex gap-2">
                  <span className="text-green-400 flex-shrink-0">•</span>
                  <p className="text-xs text-muted-foreground leading-relaxed">{pt}</p>
                </div>
              ))}
            </div>
          </div>

          <ExampleCard
            num="6" title="Motor efficiency"
            given={["P_in = 500 W", "P_out = 420 W (mechanical)"]} find="η"
            steps={["η = (P_out / P_in) × 100%", "η = (420 / 500) × 100%"]}
            answer="η = 84%" colour="green"
          />

          <div className="bg-background/30 border border-white/8 rounded-xl p-5 space-y-3">
            <p className="text-sm font-semibold text-foreground">Practice Questions</p>
            <ol className="space-y-2 list-decimal list-inside">
              {[
                "A motor takes 800 W from the supply and delivers 640 W of mechanical power. Calculate its efficiency.",
                "A transformer has an input of 5 kW and an efficiency of 95%. What is its output power?",
                "A pump takes 3.5 kW of electrical power. Its efficiency is 70%. How much mechanical power does it deliver?",
                "Two identical 1.5 kW compressors run for 6 hours each. One has an efficiency of 90%, the other 75%. Calculate the energy wasted as heat in each compressor.",
              ].map((q, i) => (
                <li key={i} className="text-xs text-muted-foreground leading-relaxed">{q}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      {/* ── Power ratings & heat in resistors ── */}
      <div className="bg-card border border-white/8 rounded-2xl overflow-hidden">
        <div className="px-6 py-4 border-b border-white/8 flex items-center gap-3">
          <Zap className="w-4 h-4 text-yellow-400" />
          <h2 className="font-semibold text-foreground">Power Ratings and Heat Dissipation</h2>
        </div>
        <div className="p-6 space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Every electrical component has a <strong className="text-foreground">power rating</strong> — the maximum power it can
            continuously handle without overheating and failing. Exceeding this rating damages or destroys the component.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title:"Resistors", body:"Rated in watts (e.g. ¼ W, ½ W, 1 W, 2 W). A resistor must be chosen with a higher watt rating than the calculated power it will dissipate.", colour:"orange" },
              { title:"Cables & Conductors", body:"Current-carrying capacity (ampacity) is based on heat — P = I²R. Undersized cables overheat, degrading insulation and creating fire risk.", colour:"red" },
              { title:"Fuses & Breakers", body:"Rated to interrupt at a current that would cause excessive power loss (heat) in the circuit — P = I²R again. Correct sizing is critical.", colour:"blue" },
            ].map(({ title, body, colour }) => (
              <div key={title} className={`bg-${colour}-400/5 border border-${colour}-400/20 rounded-xl p-4 space-y-2`}>
                <p className={`text-sm font-semibold text-${colour}-300`}>{title}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          <div className="bg-yellow-400/5 border border-yellow-400/25 rounded-xl p-4 flex gap-3">
            <Info className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-foreground mb-1">The I²R Heating Effect</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                The formula <span className="font-mono text-foreground">P = I²R</span> shows that power lost as heat increases with the
                <em> square</em> of the current. Doubling the current quadruples the heat produced. This is why
                high-current circuits require large-diameter conductors with low resistance.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Chapter Summary ── */}
      <div className="bg-card border border-border rounded-2xl p-5 space-y-4">
        <h2 className="font-semibold text-foreground">Chapter Summary</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {[
            "Power is the rate of energy conversion — symbol P, unit watt (W).",
            "Watt's Law: P = V × I  (1 watt = 1 volt × 1 ampere).",
            "When I and R are known: P = I² × R.",
            "When V and R are known: P = V² / R.",
            "Rearranging: V = P / I  and  I = P / V.",
            "Energy = Power × Time. Unit: joule (J) or kilowatt-hour (kWh).",
            "1 kWh = 1000 W used for 1 hour = 3 600 000 J.",
            "Efficiency η = (P_out / P_in) × 100%. Always less than 100% for real devices.",
            "Lost power = P_in − P_out, usually dissipated as heat.",
            "The I²R heating effect: doubling current quadruples heat produced in a conductor.",
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
