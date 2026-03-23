import { Zap, Info, BookOpen, Calculator } from "lucide-react";

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

/* ─── Equation Wheel SVG ─────────────────────────────────────────────────── */
function EquationWheel() {
  const r = 90, cx = 100, cy = 100;
  const segments = [
    { label: "P", colour: "#facc15", eqs: ["P = VI", "P = I²R", "P = V²/R"], angle: -90 },
    { label: "V", colour: "#38bdf8", eqs: ["V = P/I", "V = IR", "V = √(PR)"], angle: -90 + 120 },
    { label: "I", colour: "#f97316", eqs: ["I = P/V", "I = V/R", "I = √(P/R)"], angle: -90 + 240 },
  ];
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-xs mx-auto">
      <circle cx={cx} cy={cy} r={r} fill="#0f172a" stroke="#334155" strokeWidth="1"/>
      {/* sector dividers */}
      {[0, 120, 240].map(a => {
        const rad = (a - 90) * Math.PI / 180;
        return <line key={a} x1={cx} y1={cy} x2={cx + r * Math.cos(rad)} y2={cy + r * Math.sin(rad)} stroke="#334155" strokeWidth="1"/>;
      })}
      {/* centre circle */}
      <circle cx={cx} cy={cy} r={22} fill="#1e293b" stroke="#475569" strokeWidth="1"/>
      <text x={cx} y={cy - 6} textAnchor="middle" fill="#94a3b8" fontSize="6">V, I, R, P</text>
      <text x={cx} y={cy + 4} textAnchor="middle" fill="#64748b" fontSize="5">if two are known</text>
      <text x={cx} y={cy + 12} textAnchor="middle" fill="#64748b" fontSize="5">find any other</text>
      {/* sectors */}
      {segments.map(({ label, colour, eqs, angle }) => {
        const mid = (angle + 60) * Math.PI / 180;
        const lx = cx + 58 * Math.cos(mid);
        const ly = cy + 58 * Math.sin(mid);
        return (
          <g key={label}>
            <text x={lx} y={ly - 10} textAnchor="middle" fill={colour} fontSize="12" fontWeight="bold">{label}</text>
            {eqs.map((eq, i) => (
              <text key={i} x={lx} y={ly + i * 9} textAnchor="middle" fill="#94a3b8" fontSize="5.5">{eq}</text>
            ))}
          </g>
        );
      })}
    </svg>
  );
}

/* ─── Worked example card ─────────────────────────────────────────────────── */
function Ex({ num, title, given, find, steps, answer, colour }: {
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
        <div className="space-y-1">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">Given</p>
          {given.map((g, i) => <p key={i} className="font-mono text-sm text-foreground">{g}</p>)}
          <p className="font-mono text-sm text-muted-foreground mt-1">Find: <span className={`text-${colour}-300`}>{find}</span></p>
        </div>
        <div className="space-y-1">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">Solution</p>
          {steps.map((s, i) => <p key={i} className="font-mono text-xs text-muted-foreground">{s}</p>)}
          <div className={`mt-2 bg-background/40 border border-${colour}-400/30 rounded-lg px-3 py-2`}>
            <p className={`font-mono text-sm font-bold text-${colour}-300`}>{answer}</p>
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

/* ─── Page ─────────────────────────────────────────────────────────────────── */
export default function Power() {
  return (
    <div className="max-w-4xl mx-auto space-y-10 pb-16 p-6 md:p-8">

      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-3">
          <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-lg p-2">
            <Zap className="w-5 h-5 text-yellow-400" />
          </div>
          <span className="text-sm font-medium text-primary uppercase tracking-widest">1C — Electrical Theory</span>
        </div>
        <h1 className="text-4xl font-display font-bold text-foreground tracking-tight mb-3">Electrical Power</h1>
        <p className="text-muted-foreground leading-relaxed max-w-2xl">
          Chapter 4 — introduces power, energy and work, starting with mechanical energy and its forms, then electrical
          power and how to calculate it. We also look at the effect on power when voltage, current or resistance changes,
          and how efficiency affects the amount of power required to complete a task.
        </p>
      </div>

      {/* ── 4.1 Energy and Work ── */}
      <div className="bg-card border border-white/8 rounded-2xl overflow-hidden">
        <div className="px-6 py-4 border-b border-white/8 flex items-center gap-3">
          <BookOpen className="w-4 h-4 text-primary" />
          <h2 className="font-semibold text-foreground">4.1 — Energy and Work</h2>
        </div>
        <div className="p-6 space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-background/30 border border-white/8 rounded-xl p-4 space-y-2">
              <p className="text-sm font-semibold text-foreground">Energy</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Energy is the <strong className="text-foreground">ability to do work</strong>. It can only exist in a form (heat, light, motion, etc.)
                and cannot be created or destroyed — only transformed from one form to another. The unit of energy is the <strong className="text-foreground">joule (J)</strong>.
              </p>
            </div>
            <div className="bg-background/30 border border-white/8 rounded-xl p-4 space-y-2">
              <p className="text-sm font-semibold text-foreground">Work</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                When energy is transformed, work is done. The amount of work done equals the amount of energy transformed.
                Work is done when a force applied to an object causes it to move — always against some resistance (gravity, friction, etc.).
              </p>
              <p className="font-mono text-lg font-bold text-primary mt-1">W = F × d</p>
              <p className="font-mono text-xs text-muted-foreground">W = work (joules) · F = force (newtons) · d = distance (metres)</p>
            </div>
          </div>

          {/* Force and Newton */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 space-y-3">
            <p className="text-sm font-semibold text-foreground">Force (Newton's Second Law)</p>
            <p className="font-mono text-xl font-bold text-primary">F = m × a</p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              One newton (N) is the force required to accelerate a 1 kg mass at 1 m/s². When lifting, acceleration due to gravity
              <span className="font-mono text-foreground"> g = 9.8 m/s²</span>, so <span className="font-mono text-foreground">F = m × 9.8</span>.
            </p>
          </div>

          <Ex
            num="4.1" title="Electric forklift — lifting 200 kg through 2 m"
            given={["m = 200 kg", "d = 2 m", "a = 9.8 m/s² (gravity)"]} find="F, Work, Energy"
            steps={["F = m × a = 200 × 9.8 = 1960 N", "Work = F × d = 1960 × 2 = 3920 J"]}
            answer="F = 1960 N · Work = Energy = 3920 J = 3.92 kJ" colour="blue"
          />

          {/* Torque */}
          <div className="bg-background/30 border border-white/8 rounded-xl p-4 space-y-2">
            <p className="text-sm font-semibold text-foreground">Torque — Rotational Force</p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Torque is the rotational equivalent of linear force. Motors are rated by torque as well as power. The further the
              applied force from the fulcrum, the greater the torque. Bolted electrical connections are often given a torque specification.
            </p>
            <p className="font-mono text-lg font-bold text-primary">T = F × r</p>
            <p className="font-mono text-xs text-muted-foreground">T = torque (Nm) · F = force (N) · r = distance from fulcrum (m)</p>
          </div>

          <Ex
            num="4.2" title="Torque wrench — tightening 10 M nuts to 40 Nm"
            given={["T = 40 Nm", "(i) r = 100 mm = 0.1 m", "(ii) r = 200 mm = 0.2 m"]} find="F"
            steps={["F = T / r", "(i) F = 40 / 0.1 = 400 N", "(ii) F = 40 / 0.2 = 200 N"]}
            answer="(i) F = 400 N · (ii) F = 200 N — longer handle needs less force" colour="orange"
          />

          {/* Kinetic energy */}
          <div className="bg-background/30 border border-white/8 rounded-xl p-4 space-y-2">
            <p className="text-sm font-semibold text-foreground">Kinetic Energy</p>
            <p className="font-mono text-lg font-bold text-primary">KE = ½ × m × v²</p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Kinetic energy is the energy of motion. If velocity doubles, kinetic energy increases four times (it's squared).
              Potential energy is stored energy — when a raised mass is released, potential energy converts to kinetic energy.
            </p>
          </div>

          {/* Forms of energy */}
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Forms of Energy used to Generate Electricity</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-2">
                <p className="text-xs font-semibold text-blue-300">Potential (Stored)</p>
                {[
                  { t:"Chemical", d:"Energy in atomic bonds — coal, petroleum, gas, batteries." },
                  { t:"Gravitational", d:"Energy of height — hydro-power dams store water above a turbine." },
                  { t:"Nuclear", d:"Energy in the nucleus — fission of uranium produces heat for steam turbines." },
                ].map(({ t, d }) => (
                  <div key={t} className="bg-blue-400/5 border border-blue-400/20 rounded-lg px-3 py-2">
                    <p className="text-xs font-semibold text-blue-300">{t}</p>
                    <p className="text-xs text-muted-foreground">{d}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                <p className="text-xs font-semibold text-green-300">Kinetic (Moving)</p>
                {[
                  { t:"Radiant", d:"Electromagnetic waves — solar panels convert sunlight directly to electricity." },
                  { t:"Thermal", d:"Atomic vibration — geothermal energy; heat from potential energy sources." },
                  { t:"Motion", d:"Wind (moving air), hydro (moving water), steam turbine (rotating force)." },
                ].map(({ t, d }) => (
                  <div key={t} className="bg-green-400/5 border border-green-400/20 rounded-lg px-3 py-2">
                    <p className="text-xs font-semibold text-green-300">{t}</p>
                    <p className="text-xs text-muted-foreground">{d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <ExQ items={[
            "Calculate the force required to lift a toolbox weighing 10 kg.",
            "How much work is done if you lift the 10 kg toolbox through a vertical distance of 2.5 m?",
            "How much potential energy does the toolbox have when resting 2.5 m from the ground?",
            "When tightening a nut, you apply 300 N to a spanner 150 mm from the centre. How much torque?",
            "Find the kinetic energy of a 200 kg mass travelling at 6 m/s.",
            "How many watts does one horsepower represent?",
            "A car engine delivers 220 Nm at 1950 RPM. Calculate the power it produces.",
            "A machine requires 500 W and delivers 450 W of useful output. Calculate losses and efficiency.",
          ]} />
        </div>
      </div>

      {/* ── 4.2 Power ── */}
      <div className="bg-card border border-white/8 rounded-2xl overflow-hidden">
        <div className="px-6 py-4 border-b border-white/8 flex items-center gap-3">
          <Zap className="w-4 h-4 text-yellow-400" />
          <h2 className="font-semibold text-foreground">4.2 — Power</h2>
        </div>
        <div className="p-6 space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-yellow-400/5 border border-yellow-400/20 rounded-xl p-4 space-y-2">
              <p className="text-sm font-semibold text-yellow-300">Power — Definition</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Power is the <strong className="text-foreground">rate at which work is done</strong>, or the rate at which energy is transformed.
                Two people climbing the same ladder do the same work — the one who gets to the top faster uses more power.
              </p>
              <p className="font-mono text-xl font-bold text-yellow-300 mt-1">P = W / t</p>
              <p className="font-mono text-xs text-muted-foreground">P = power (W) · W = work (J) · t = time (s)</p>
              <p className="text-xs text-muted-foreground">1 watt = 1 joule of energy transformed per second</p>
            </div>
            <div className="bg-background/30 border border-white/8 rounded-xl p-4 space-y-3">
              <p className="text-sm font-semibold text-foreground">James Watt &amp; Horsepower</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                The watt is named after James Watt (1736–1819), a Scottish inventor known for his steam engines.
                Watt introduced the term 'horsepower' to rate his engines — still seen on motor nameplates.
              </p>
              <div className="bg-background/50 rounded-lg px-3 py-2">
                <p className="font-mono text-sm text-foreground">1 hp = <span className="text-yellow-300 font-bold">746 W</span></p>
                <p className="text-xs text-muted-foreground mt-1">Domestic refrigerator motor: ¼ hp to ½ hp</p>
              </div>
            </div>
          </div>

          <Ex
            num="4.3" title="Two forklifts lifting 200 kg through 2 m"
            given={["Work = 3920 J (from Ex 4.1)", "(a) time = 2 s", "(b) time = 8 s"]} find="Power of each"
            steps={["P = Work / time", "(a) P = 3920 / 2 = 1960 W", "(b) P = 3920 / 8 = 490 W"]}
            answer="(a) 1960 W · (b) 490 W — same work, less time = more power" colour="yellow"
          />

          {/* Mechanical power */}
          <div className="bg-background/30 border border-white/8 rounded-xl p-4 space-y-3">
            <p className="text-sm font-semibold text-foreground">Mechanical Power of a Motor</p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              A motor's mechanical power depends on its rotational speed and the torque it delivers. Because torque is rotational,
              the equation includes the circular reference 2π.
            </p>
            <p className="font-mono text-xl font-bold text-primary">P = (2π × N × T) / 60</p>
            <p className="font-mono text-xs text-muted-foreground">P = power (W) · N = speed (RPM) · T = torque (Nm) · 2π ≈ 6.28</p>
          </div>

          <Ex
            num="4.4" title="Motor delivering 20 Nm at 1440 RPM"
            given={["T = 20 Nm", "N = 1440 RPM"]} find="P"
            steps={["P = (2π × N × T) / 60", "P = (6.28 × 20 × 1440) / 60"]}
            answer="P = 3014 W ≈ 3 kW" colour="blue"
          />

          {/* Efficiency */}
          <div className="bg-green-400/5 border border-green-400/25 rounded-xl p-4 space-y-2">
            <p className="text-sm font-semibold text-green-300">Efficiency — η (eta)</p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              No machine is 100% efficient — there are always losses (mainly heat). Efficiency compares useful output to total input.
            </p>
            <p className="font-mono text-xl font-bold text-green-300">η = (P_out / P_in) × 100%</p>
            <p className="text-xs text-muted-foreground">A 100% efficient motor would stay cool at full load — this is impossible in practice.</p>
          </div>

          <Ex
            num="4.5" title="Efficiency of the motor in Example 4.4"
            given={["P_out = 3014 W (mechanical)", "P_in = 3500 W (electrical)"]} find="η"
            steps={["η = (P_out / P_in) × 100%", "η = (3014 / 3500) × 100%"]}
            answer="η = 86.1%" colour="green"
          />

          <ExQ items={[
            "How much work is done if you climb a 20 m ladder in two minutes? Assume 60 kg body + 5 kg tools.",
            "A motor takes 750 W of electrical power and delivers 630 W of mechanical power. Calculate its efficiency.",
            "A machine requires 500 W and delivers 450 W of useful output. Calculate losses and efficiency.",
          ]} />
        </div>
      </div>

      {/* ── 4.3 Electrical Power ── */}
      <div className="bg-card border border-white/8 rounded-2xl overflow-hidden">
        <div className="px-6 py-4 border-b border-white/8 flex items-center gap-3">
          <Zap className="w-4 h-4 text-yellow-400" />
          <h2 className="font-semibold text-foreground">4.3 — Electrical Power</h2>
        </div>
        <div className="p-6 space-y-5">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Electrical power is the rate at which electrical energy is transformed into another form (heat, light, motion, etc.).
            One watt of electrical power is dissipated when one volt causes one ampere to flow.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div className="space-y-3">
              <div className="bg-yellow-400/5 border border-yellow-400/25 rounded-xl p-4 space-y-2">
                <p className="text-sm font-semibold text-yellow-300">Watt's Law — Electrical Power</p>
                <p className="font-mono text-2xl font-bold text-yellow-300">P = V × I</p>
                <p className="font-mono text-xs text-muted-foreground">P = power (W) · V = voltage (V) · I = current (A)</p>
                <p className="text-xs text-muted-foreground">1 W = 1 V × 1 A</p>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Rearrangements</p>
                {[
                  { find:"Find P", eq:"P = V × I", c:"text-yellow-300" },
                  { find:"Find V", eq:"V = P / I", c:"text-blue-300" },
                  { find:"Find I", eq:"I = P / V", c:"text-orange-300" },
                ].map(({ find, eq, c }) => (
                  <div key={find} className="flex justify-between font-mono text-sm bg-background/30 rounded-lg px-3 py-2">
                    <span className="text-muted-foreground">{find}</span>
                    <span className={`font-bold ${c}`}>{eq}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Power Triangle</p>
              <div className="bg-background/30 border border-white/8 rounded-xl p-4">
                <PowerTriangle />
              </div>
            </div>
          </div>

          <Ex num="4.6" title="Lamp — voltage and current known"
            given={["V = 24 V", "I = 1.5 A"]} find="P"
            steps={["P = V × I", "P = 24 × 1.5"]}
            answer="P = 36 W" colour="yellow"
          />
          <Ex num="4.7" title="Find voltage across a 40 W lamp"
            given={["P = 40 W", "I = 3.2 A"]} find="V"
            steps={["V = P / I", "V = 40 / 3.2"]}
            answer="V = 12.5 V" colour="blue"
          />
          <Ex num="4.8" title="750 W heater on 230 V"
            given={["P = 750 W", "V = 230 V"]} find="I"
            steps={["I = P / V", "I = 750 / 230"]}
            answer="I = 3.26 A" colour="orange"
          />

          {/* Power metric prefixes */}
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Power — Metric Prefixes</p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Power values in electrotechnology range from gigawatts (power stations) to microwatts (calculator displays).
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary/10 border-b border-white/10">
                    <th className="px-4 py-2 text-left text-primary font-semibold">Term</th>
                    <th className="px-4 py-2 text-center text-primary font-semibold">Symbol</th>
                    <th className="px-4 py-2 text-center text-primary font-semibold">Equals</th>
                    <th className="px-4 py-2 text-center text-primary font-semibold">Notation</th>
                    <th className="px-4 py-2 text-left text-primary font-semibold">Example</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    { t:"gigawatt",  s:"GW", eq:"1 000 000 000 W",   n:"10⁹",   ex:"Large coal stations > 2 GW" },
                    { t:"megawatt",  s:"MW", eq:"1 000 000 W",       n:"10⁶",   ex:"Each alternator up to 600 MW" },
                    { t:"kilowatt",  s:"kW", eq:"1000 W",            n:"10³",   ex:"50 kW concert sound system" },
                    { t:"milliwatt", s:"mW", eq:"0.001 W",           n:"10⁻³",  ex:"Earphones — a few mW" },
                    { t:"microwatt", s:"µW", eq:"0.000 001 W",       n:"10⁻⁶",  ex:"Calculator LCD display" },
                  ].map(({ t, s, eq, n, ex }) => (
                    <tr key={t} className="hover:bg-white/3">
                      <td className="px-4 py-2 text-muted-foreground">{t}</td>
                      <td className="px-4 py-2 text-center font-mono font-bold text-yellow-300">{s}</td>
                      <td className="px-4 py-2 text-center font-mono text-xs text-muted-foreground">{eq}</td>
                      <td className="px-4 py-2 text-center font-mono text-primary">{n}</td>
                      <td className="px-4 py-2 font-mono text-xs text-muted-foreground">{ex}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <Ex num="4.9" title="Solar calculator — find supply voltage"
            given={["P = 210 µW = 210 × 10⁻⁶ W", "I = 70 µA = 70 × 10⁻⁶ A"]} find="V"
            steps={["V = P / I", "V = (210 × 10⁻⁶) / (70 × 10⁻⁶)"]}
            answer="V = 3 V" colour="teal"
          />
          <Ex num="4.10" title="Factory on 3.3 kV supply drawing 1200 A"
            given={["V = 3.3 kV = 3.3 × 10³ V", "I = 1200 A = 1.2 × 10³ A"]} find="P"
            steps={["P = V × I", "P = (3.3 × 10³) × (1.2 × 10³)", "P = 3.96 × 10⁶ W"]}
            answer="P = 3.96 MW" colour="purple"
          />

          {/* Energy */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-background/30 border border-white/8 rounded-xl p-4 space-y-2">
              <p className="text-sm font-semibold text-foreground">Energy in Joules</p>
              <p className="font-mono text-xl font-bold text-primary">E = P × t</p>
              <p className="font-mono text-xs text-muted-foreground">E = energy (J) · P = power (W) · t = time (s)</p>
              <p className="text-xs text-muted-foreground">There are 3600 seconds in one hour.</p>
            </div>
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 space-y-2">
              <p className="text-sm font-semibold text-primary">Energy in Kilowatt-Hours</p>
              <p className="font-mono text-xl font-bold text-primary">E = kW × hours</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                The unit used by electricity meters and power bills. Electrical energy is priced by the kWh.
              </p>
              <p className="font-mono text-xs text-muted-foreground">1 kWh = 3 600 000 J</p>
            </div>
          </div>

          <Ex num="4.11" title="2500 W heater left on for 2 hours"
            given={["P = 2500 W", "t = 2 hours"]} find="Energy (a) in joules, (b) in kWh"
            steps={["(a) t = 2 × 60 × 60 = 7200 s", "    E = 2500 × 7200 = 18 000 000 J", "(b) E = 2.5 kW × 2 h"]}
            answer="(a) 18 MJ · (b) 5 kWh" colour="yellow"
          />

          <ExQ items={[
            "Calculate the power taken by an electrical load if the current is 25 A and the voltage is 250 V.",
            "A 1 kW heating element takes 10 A at its correct voltage. Calculate the voltage.",
            "An electric toaster uses 1100 W at 230 V. Calculate the current.",
            "The current in a circuit is 25 µA when the voltage is 6 V. Calculate the power.",
            "An industrial plant requires 5 MW at 11 kV. Calculate the current.",
          ]} />
        </div>
      </div>

      {/* ── 4.5 Power and Ohm's Law ── */}
      <div className="bg-card border border-white/8 rounded-2xl overflow-hidden">
        <div className="px-6 py-4 border-b border-white/8 flex items-center gap-3">
          <Calculator className="w-4 h-4 text-primary" />
          <h2 className="font-semibold text-foreground">4.5 — Power and Ohm's Law</h2>
        </div>
        <div className="p-6 space-y-6">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Combining Ohm's Law (V = IR, I = V/R, R = V/I) with the power equation (P = VI) gives a total of
            <strong className="text-foreground"> nine power equations</strong>. If any two of V, I, R or P are known, the rest can be found.
          </p>

          {/* Three derived pairs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="bg-orange-400/5 border border-orange-400/25 rounded-xl p-4 space-y-2">
                <p className="text-sm font-semibold text-orange-300">From P = I²R (substitute V = IR into P = VI)</p>
                <p className="font-mono text-xl font-bold text-orange-300">P = I² × R</p>
                <p className="font-mono text-sm text-muted-foreground">I = √(P / R)</p>
                <p className="font-mono text-sm text-muted-foreground">R = P / I²</p>
                <p className="text-xs text-muted-foreground mt-1">Use when voltage is unknown — e.g. cable heating losses.</p>
              </div>
              <div className="bg-blue-400/5 border border-blue-400/25 rounded-xl p-4 space-y-2">
                <p className="text-sm font-semibold text-blue-300">From P = V²/R (substitute I = V/R into P = VI)</p>
                <p className="font-mono text-xl font-bold text-blue-300">P = V² / R</p>
                <p className="font-mono text-sm text-muted-foreground">R = V² / P</p>
                <p className="font-mono text-sm text-muted-foreground">V = √(P × R)</p>
                <p className="text-xs text-muted-foreground mt-1">Use when current is not directly measured.</p>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Equation Wheel — 12 Equations</p>
              <div className="bg-background/30 border border-white/8 rounded-xl p-4">
                <EquationWheel />
              </div>
              <p className="text-xs text-muted-foreground text-center">
                Each section of the wheel gives 3 equations for finding P, V, or I. Remember a few and derive the others.
              </p>
            </div>
          </div>

          {/* Worked examples */}
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Worked Examples — P = I²R</p>
            <Ex num="4.12" title="Power in a 10 Ω resistor with 3 A"
              given={["I = 3 A", "R = 10 Ω"]} find="P"
              steps={["P = I² × R", "P = 3² × 10 = 9 × 10"]}
              answer="P = 90 W" colour="orange"
            />
            <Ex num="4.13" title="220 kΩ resistor with 8 µA — metric prefixes"
              given={["I = 8 µA = 8 × 10⁻⁶ A", "R = 220 kΩ = 220 × 10³ Ω"]} find="P"
              steps={["P = I² × R", "P = (8 × 10⁻⁶)² × (220 × 10³)", "P = 64 × 10⁻¹² × 220 × 10³ = 14 080 × 10⁻⁹"]}
              answer="P = 14.08 mW" colour="orange"
            />
            <Ex num="4.14" title="Current from power and resistance"
              given={["P = 0.5 W", "R = 1 kΩ = 1000 Ω"]} find="I"
              steps={["I = √(P / R)", "I = √(0.5 / 1000) = √(0.5 × 10⁻³)"]}
              answer="I = 22.36 mA" colour="orange"
            />
            <Ex num="4.15" title="Resistance of a 250 W heating element at 3 A"
              given={["P = 250 W", "I = 3 A"]} find="R"
              steps={["R = P / I²", "R = 250 / 3² = 250 / 9"]}
              answer="R = 27.8 Ω" colour="orange"
            />
          </div>

          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Worked Examples — P = V²/R</p>
            <Ex num="4.16" title="120 Ω resistor with 10 V across it"
              given={["V = 10 V", "R = 120 Ω"]} find="P"
              steps={["P = V² / R", "P = 10² / 120 = 100 / 120"]}
              answer="P = 0.833 W" colour="blue"
            />
            <Ex num="4.17" title="Resistance of a 230 V, 100 W lamp (when on)"
              given={["V = 230 V", "P = 100 W"]} find="R"
              steps={["R = V² / P", "R = 230² / 100 = 52 900 / 100"]}
              answer="R = 529 Ω (cold resistance ≈ 50 Ω — much lower)" colour="blue"
            />
            <Ex num="4.18" title="Maximum voltage on a 330 Ω, 0.5 W resistor"
              given={["R = 330 Ω", "P_max = 0.5 W"]} find="V_max"
              steps={["V = √(P × R)", "V = √(0.5 × 330) = √165"]}
              answer="V_max = 12.85 V" colour="blue"
            />
          </div>

          <ExQ items={[
            "Find the power consumed by a circuit with R = 25 Ω taking 5 A.",
            "How much current does a 500 Ω circuit take if it dissipates 3 W?",
            "A commercial espresso machine element is rated at 5.75 kW and takes 20 A. Find its resistance.",
            "How much power is dissipated by a 30 Ω resistor when 12 V is across it?",
            "A heater takes 1500 W at 230 V. What is the resistance of the element?",
            "Calculate the voltage across a 25 Ω load dissipating 1 kW.",
          ]} />
        </div>
      </div>

      {/* ── 4.6 Power Changes ── */}
      <div className="bg-card border border-white/8 rounded-2xl overflow-hidden">
        <div className="px-6 py-4 border-b border-white/8 flex items-center gap-3">
          <Info className="w-4 h-4 text-primary" />
          <h2 className="font-semibold text-foreground">4.6 — Power Change with I, V or R</h2>
        </div>
        <div className="p-6 space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                title:"Voltage changes (R constant)",
                formula:"P = V²/R",
                rule:"Power changes by the SQUARE of the voltage change.",
                examples:["V doubles → P × 4", "V triples → P × 9", "V halves → P ÷ 4"],
                colour:"blue",
              },
              {
                title:"Current changes (R constant)",
                formula:"P = I²R",
                rule:"Power changes by the SQUARE of the current change.",
                examples:["I doubles → P × 4", "I triples → P × 9", "I halves → P ÷ 4"],
                colour:"orange",
              },
              {
                title:"Resistance changes (V constant)",
                formula:"P = V²/R",
                rule:"Power changes INVERSELY with resistance.",
                examples:["R halves → P × 2", "R doubles → P ÷ 2", "Lower R = more heat"],
                colour:"purple",
              },
            ].map(({ title, formula, rule, examples, colour }) => (
              <div key={title} className={`bg-${colour}-400/5 border border-${colour}-400/25 rounded-2xl p-4 space-y-3`}>
                <p className={`text-sm font-semibold text-${colour}-300`}>{title}</p>
                <p className={`font-mono text-lg font-bold text-${colour}-300`}>{formula}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{rule}</p>
                {examples.map((ex, i) => (
                  <p key={i} className={`font-mono text-xs text-${colour}-300`}>{ex}</p>
                ))}
              </div>
            ))}
          </div>

          <Ex num="4.19" title="10 Ω resistor — voltage doubled from 5 V to 10 V"
            given={["R = 10 Ω", "(a) V = 5 V", "(b) V = 10 V"]} find="P in each case"
            steps={["P = V² / R", "(a) P = 5² / 10 = 25/10 = 2.5 W", "(b) P = 10² / 10 = 100/10 = 10 W"]}
            answer="Power increased 4× (2.5 W → 10 W) when voltage doubled" colour="blue"
          />
          <Ex num="4.20" title="Extension lead R = 2 Ω — current doubled from 5 A to 10 A"
            given={["R = 2 Ω", "(a) I = 5 A", "(b) I = 10 A"]} find="P (heat) in each case"
            steps={["P = I² × R", "(a) P = 5² × 2 = 50 W", "(b) P = 10² × 2 = 200 W"]}
            answer="Power increased 4× (50 W → 200 W) when current doubled — coiled leads can overheat!" colour="orange"
          />

          <div className="bg-red-400/5 border border-red-400/25 rounded-xl p-4 flex gap-3">
            <Info className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-red-300 mb-1">I²R Losses — Fire Hazard</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                A bad connection has a higher than normal resistance. Current through that resistance generates heat (P = I²R),
                which causes oxidation and further increases resistance — a vicious cycle that can start a fire.
                Bad connections in roof cavities are responsible for numerous house fires.
                <span className="text-foreground font-semibold"> Always carefully check every connection you make.</span>
              </p>
            </div>
          </div>

          <ExQ items={[
            "The resistance of a heater element when cold equals 20 Ω; when warm it rises to 50 Ω. Connected to 230 V — calculate the current when cold and when warm.",
            "A 230 V electric stove has two 900 W hot plates and one 1500 W hot plate. Calculate the current when (a) one 900 W plate is on, (b) both 900 W plates, (c) all three.",
            "A connection has R = 0.15 Ω. How much power is dissipated as heat when 100 A flows?",
            "A switch dissipates 45 W when passing 15 A. Calculate its resistance.",
            "After cleaning, the switch resistance is 500 µΩ. Calculate the power dissipated at 15 A.",
          ]} />
        </div>
      </div>

      {/* ── Chapter Summary ── */}
      <div className="bg-card border border-border rounded-2xl p-5 space-y-4">
        <h2 className="font-semibold text-foreground">Chapter Summary</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {[
            "Energy is the ability to do work — unit: joule (J). Work = Force × distance.",
            "Force F = m × a. One newton accelerates 1 kg at 1 m/s². Lifting: a = g = 9.8 m/s².",
            "Torque T = F × r (newton-metres). Motors are rated by both power and torque.",
            "Power = Work / time. Unit: watt (W). 1 W = 1 J/s. 1 hp = 746 W.",
            "Motor mechanical power: P = (2π × N × T) / 60 where N is in RPM.",
            "Efficiency η = (P_out / P_in) × 100%. Always less than 100% — losses appear as heat.",
            "Electrical power: P = V × I (Watt's Law).",
            "By transposition: V = P/I and I = P/V.",
            "Combined with Ohm's Law: P = I²R and P = V²/R (9 equations total).",
            "P = V²/R → power changes by the SQUARE of the voltage (V doubles → P × 4).",
            "P = I²R → power changes by the SQUARE of the current (I doubles → P × 4).",
            "I²R losses cause heat — bad connections can start fires. Check all connections carefully.",
            "Energy in joules: E = P × t (seconds). In kWh: E = kW × hours. 1 kWh = 3 600 000 J.",
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
