import { Zap, Flame, Magnet, FlaskConical, AlertTriangle, Info } from "lucide-react";

const effects = [
  {
    id: "heating",
    title: "Heating Effect",
    icon: Flame,
    colour: "text-orange-300",
    bg: "bg-orange-400/5",
    border: "border-orange-400/25",
    iconBg: "bg-orange-400/10",
    summary: "When current flows through a resistance, electrical energy is converted to heat energy. The power dissipated is given by P = I²R.",
    formula: "P = I² × R",
    formulaLabel: "Heat dissipated (watts)",
    details: [
      { label: "Heating element", desc: "Resistive wire (nichrome) converts electrical energy directly to heat — used in heaters, ovens, and kettles." },
      { label: "Fuse / circuit breaker", desc: "Excess current generates heat that melts a fuse wire or trips a breaker, protecting the circuit." },
      { label: "Incandescent lamp", desc: "Tungsten filament is heated to ~2700 K by current, producing both light and (mostly) heat." },
      { label: "Eddy current losses", desc: "Unwanted induced currents in iron cores of transformers/motors produce heat — minimised by lamination." },
    ],
    example: {
      scenario: "A 10 Ω resistor carries 2 A. How much heat power is dissipated?",
      steps: ["P = I² × R", "P = 2² × 10", "P = 4 × 10", "P = 40 W"],
      answer: "40 W",
      colour: "text-orange-300",
    },
  },
  {
    id: "magnetic",
    title: "Magnetic Effect",
    icon: Magnet,
    colour: "text-blue-300",
    bg: "bg-blue-400/5",
    border: "border-blue-400/25",
    iconBg: "bg-blue-400/10",
    summary: "Every current-carrying conductor produces a magnetic field around it. The strength of the field is proportional to the current.",
    formula: "F = BIL",
    formulaLabel: "Force on a conductor in a magnetic field",
    details: [
      { label: "Electromagnet", desc: "Coil of wire carrying current behaves as a magnet — field collapses instantly when current is removed." },
      { label: "Electric motor", desc: "Current-carrying coil in a magnetic field experiences a force (torque), converting electrical to mechanical energy." },
      { label: "Relay / solenoid", desc: "Small control current energises an electromagnet that mechanically operates a larger switch or valve." },
      { label: "Transformer", desc: "Alternating current in the primary coil creates a changing magnetic flux that induces a voltage in the secondary coil." },
    ],
    example: {
      scenario: "A conductor 0.5 m long carries 4 A in a field of 0.3 T. What is the force on it?",
      steps: ["F = B × I × L", "F = 0.3 × 4 × 0.5", "F = 0.6 N"],
      answer: "0.6 N",
      colour: "text-blue-300",
    },
  },
  {
    id: "chemical",
    title: "Chemical Effect",
    icon: FlaskConical,
    colour: "text-green-300",
    bg: "bg-green-400/5",
    border: "border-green-400/25",
    iconBg: "bg-green-400/10",
    summary: "When direct current passes through an electrolyte (a liquid that conducts electricity), it causes chemical reactions — this is called electrolysis.",
    formula: "m = Z × I × t",
    formulaLabel: "Mass deposited (Faraday's Law) — Z = electrochemical equivalent",
    details: [
      { label: "Electroplating", desc: "Metal ions from the anode are deposited on the cathode — used to coat components in nickel, chrome, or gold." },
      { label: "Electrolytic refining", desc: "Pure copper is deposited from an impure anode onto a pure cathode in a copper-sulphate bath." },
      { label: "Lead-acid battery", desc: "Chemical reaction is reversible — charging converts electrical energy to chemical energy, discharging reverses it." },
      { label: "Hydrogen production", desc: "Electrolysis of water splits H₂O into hydrogen gas (cathode) and oxygen gas (anode)." },
    ],
    example: {
      scenario: "How does a lead-acid battery use the chemical effect?",
      steps: [
        "Discharging: Pb (anode) reacts with H₂SO₄ → PbSO₄ + 2e⁻ (electrons flow as current)",
        "Charging: Applied current reverses the reaction, restoring Pb and PbO₂",
        "Result: Electrical ↔ Chemical energy conversion",
      ],
      answer: "Reversible chemical reaction stores and releases energy",
      colour: "text-green-300",
    },
  },
  {
    id: "physiological",
    title: "Physiological Effect",
    icon: AlertTriangle,
    colour: "text-red-300",
    bg: "bg-red-400/5",
    border: "border-red-400/25",
    iconBg: "bg-red-400/10",
    summary: "Electric current passing through the human body causes physiological effects that range from a mild tingle to cardiac arrest. Current — not voltage — causes injury.",
    formula: "I = V / R_body",
    formulaLabel: "Body resistance varies: ~1 kΩ (wet) to ~100 kΩ (dry skin)",
    details: [
      { label: "1 mA", desc: "Threshold of perception — slight tingle." },
      { label: "5–10 mA", desc: "Painful shock; muscle contraction may prevent release (let-go threshold ≈ 10–16 mA)." },
      { label: "30–50 mA", desc: "Respiratory paralysis — potentially fatal without immediate aid." },
      { label: "100 mA+", desc: "Ventricular fibrillation — likely fatal. Time of exposure also critical." },
    ],
    example: {
      scenario: "A person with wet-skin resistance of 1 000 Ω touches 230 V. What current flows?",
      steps: ["I = V / R", "I = 230 / 1000", "I = 0.23 A = 230 mA"],
      answer: "230 mA — well above the lethal 100 mA threshold",
      colour: "text-red-300",
    },
  },
];

export default function EffectsOfCurrent() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12 p-6 md:p-8">

      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
            <Zap className="w-6 h-6 text-primary" />
          </div>
          <span className="text-sm font-medium text-primary uppercase tracking-widest">1B — Electrical Theory</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground">Effects of Electric Current</h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Electric current produces four principal effects: heating, magnetic, chemical, and physiological.
          Understanding these effects explains how almost every electrical device works — and why electricity demands respect.
        </p>
      </div>

      {/* Overview cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {effects.map(({ id, title, icon: Icon, colour, bg, border, iconBg }) => (
          <a key={id} href={`#${id}`} className={`${bg} border ${border} rounded-xl p-3 text-center space-y-2 hover:opacity-80 transition-opacity`}>
            <div className={`${iconBg} rounded-lg p-2 w-fit mx-auto`}>
              <Icon className={`w-5 h-5 ${colour}`} />
            </div>
            <p className={`text-xs font-semibold ${colour}`}>{title}</p>
          </a>
        ))}
      </div>

      {/* Key principle */}
      <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 flex gap-3">
        <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
        <p className="text-sm text-muted-foreground leading-relaxed">
          All four effects occur simultaneously whenever current flows. The <span className="text-foreground font-semibold">dominant</span> effect
          depends on the circuit design — a motor exploits the magnetic effect, a heater exploits the heating effect, and a battery charger
          exploits the chemical effect.
        </p>
      </div>

      {/* Effect sections */}
      {effects.map(({ id, title, icon: Icon, colour, bg, border, iconBg, summary, formula, formulaLabel, details, example }) => (
        <section key={id} id={id} className={`${bg} border ${border} rounded-2xl overflow-hidden`}>
          <div className={`flex items-center gap-3 px-6 py-4 border-b ${border}`}>
            <div className={`${iconBg} rounded-lg p-1.5`}>
              <Icon className={`w-4 h-4 ${colour}`} />
            </div>
            <h2 className={`font-semibold ${colour}`}>{title}</h2>
          </div>
          <div className="p-6 space-y-5">
            <p className="text-sm text-muted-foreground leading-relaxed">{summary}</p>

            {/* Formula */}
            <div className="bg-background/40 border border-white/10 rounded-xl px-4 py-3 space-y-0.5">
              <p className={`font-mono text-lg font-bold ${colour}`}>{formula}</p>
              <p className="text-xs text-muted-foreground">{formulaLabel}</p>
            </div>

            {/* Applications */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Applications / Examples</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {details.map(({ label, desc }) => (
                  <div key={label} className="bg-background/30 border border-white/8 rounded-xl p-3 space-y-1">
                    <p className={`text-sm font-semibold ${colour}`}>{label}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Worked example */}
            <div className="bg-background/40 border border-white/10 rounded-xl p-4 space-y-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Worked Example</p>
              <p className="text-sm text-muted-foreground">{example.scenario}</p>
              <div className="font-mono text-xs bg-muted/30 rounded-lg p-3 space-y-1">
                {example.steps.map((s, i) => (
                  <div key={i} className={i === example.steps.length - 1 ? example.colour : "text-muted-foreground"}>{s}</div>
                ))}
              </div>
              <p className={`text-sm font-bold ${example.colour}`}>Answer: {example.answer}</p>
            </div>
          </div>
        </section>
      ))}

      {/* Summary */}
      <div className="bg-card border border-border rounded-2xl p-5 space-y-3">
        <h2 className="font-semibold text-foreground">Summary</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {[
            { effect: "Heating", rule: "P = I²R — power lost as heat in any resistance.", colour: "text-orange-300" },
            { effect: "Magnetic", rule: "Current-carrying conductors produce magnetic fields — the basis of motors, relays and transformers.", colour: "text-blue-300" },
            { effect: "Chemical", rule: "DC through an electrolyte causes electrolysis — used in plating, refining and batteries.", colour: "text-green-300" },
            { effect: "Physiological", rule: "Current (not voltage) kills. 30 mA AC can cause respiratory arrest.", colour: "text-red-300" },
          ].map(({ effect, rule, colour }) => (
            <div key={effect} className="flex gap-3 items-start bg-muted/20 rounded-xl p-3">
              <span className={`mt-1 w-2 h-2 rounded-full bg-current ${colour} flex-shrink-0`} />
              <div>
                <span className={`text-sm font-semibold ${colour}`}>{effect}: </span>
                <span className="text-xs text-muted-foreground">{rule}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
