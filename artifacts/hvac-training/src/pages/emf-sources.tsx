import { Battery, Zap, Flame, Sun, Wind, Info, Atom } from "lucide-react";
import { cn } from "@/lib/utils";

/* ─── Inline SVG diagrams ──────────────────────────────────────────────── */

function GalvanicCellSVG() {
  return (
    <svg viewBox="0 0 480 300" className="w-full max-w-xl mx-auto" aria-label="Zinc-Copper galvanic cell diagram">
      {/* ─ Voltmeter ─ */}
      <circle cx="240" cy="40" r="30" fill="none" stroke="#f59e0b" strokeWidth="2" />
      <text x="240" y="35" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="bold">1.10 V</text>
      <text x="240" y="48" textAnchor="middle" fill="#94a3b8" fontSize="9">Voltmeter</text>
      {/* ─ Wires from voltmeter ─ */}
      <line x1="210" y1="40" x2="110" y2="40" stroke="#94a3b8" strokeWidth="1.5" />
      <line x1="270" y1="40" x2="370" y2="40" stroke="#94a3b8" strokeWidth="1.5" />
      <line x1="110" y1="40" x2="110" y2="90" stroke="#94a3b8" strokeWidth="1.5" />
      <line x1="370" y1="40" x2="370" y2="90" stroke="#94a3b8" strokeWidth="1.5" />
      {/* ─ Left beaker (Zn / ZnSO₄) ─ */}
      <rect x="40" y="110" width="160" height="150" rx="4" fill="none" stroke="#64748b" strokeWidth="1.5" />
      <rect x="40" y="200" width="160" height="60" rx="4" fill="#0f172a" opacity="0.6" />
      <text x="120" y="235" textAnchor="middle" fill="#94a3b8" fontSize="10">ZnSO₄ solution</text>
      {/* Zn electrode */}
      <rect x="100" y="90" width="12" height="130" rx="2" fill="#6b7280" />
      <text x="106" y="88" textAnchor="middle" fill="#d1d5db" fontSize="11" fontWeight="bold">Zn</text>
      {/* Anode label */}
      <text x="120" y="165" textAnchor="middle" fill="#f87171" fontSize="10" fontWeight="bold">ANODE (−)</text>
      <text x="120" y="180" textAnchor="middle" fill="#f87171" fontSize="8">Oxidation</text>
      <text x="120" y="193" textAnchor="middle" fill="#94a3b8" fontSize="8">Zn → Zn²⁺ + 2e⁻</text>
      {/* ─ Right beaker (Cu / CuSO₄) ─ */}
      <rect x="280" y="110" width="160" height="150" rx="4" fill="none" stroke="#64748b" strokeWidth="1.5" />
      <rect x="280" y="200" width="160" height="60" rx="4" fill="#0f172a" opacity="0.6" />
      <text x="360" y="235" textAnchor="middle" fill="#94a3b8" fontSize="10">CuSO₄ solution</text>
      {/* Cu electrode */}
      <rect x="368" y="90" width="12" height="130" rx="2" fill="#b45309" />
      <text x="374" y="88" textAnchor="middle" fill="#d1d5db" fontSize="11" fontWeight="bold">Cu</text>
      {/* Cathode label */}
      <text x="360" y="165" textAnchor="middle" fill="#34d399" fontSize="10" fontWeight="bold">CATHODE (+)</text>
      <text x="360" y="180" textAnchor="middle" fill="#34d399" fontSize="8">Reduction</text>
      <text x="360" y="193" textAnchor="middle" fill="#94a3b8" fontSize="8">Cu²⁺ + 2e⁻ → Cu</text>
      {/* ─ Salt bridge ─ */}
      <path d="M200 130 Q240 100 280 130" fill="none" stroke="#818cf8" strokeWidth="3" strokeLinecap="round" />
      <text x="240" y="108" textAnchor="middle" fill="#818cf8" fontSize="9">KNO₃ Salt Bridge</text>
      {/* ─ Electron flow arrow on wire ─ */}
      <text x="178" y="35" textAnchor="middle" fill="#60a5fa" fontSize="8">e⁻ →</text>
      <text x="302" y="35" textAnchor="middle" fill="#60a5fa" fontSize="8">→ e⁻</text>
      {/* ─ Cell EMF label ─ */}
      <text x="240" y="290" textAnchor="middle" fill="#94a3b8" fontSize="9">Cell EMF = 0.34V − (−0.76V) = 1.10 V</text>
    </svg>
  );
}

function FaradayCoilSVG() {
  return (
    <svg viewBox="0 0 460 200" className="w-full max-w-xl mx-auto" aria-label="Faraday electromagnetic induction diagram">
      {/* ─ Coil (series of ellipses) ─ */}
      {[0, 18, 36, 54, 72, 90].map((x) => (
        <ellipse key={x} cx={80 + x} cy={100} rx={10} ry={30} fill="none" stroke="#60a5fa" strokeWidth="2" />
      ))}
      <text x="95" y="160" textAnchor="middle" fill="#94a3b8" fontSize="10">Coil (N turns)</text>
      {/* ─ Galvanometer ─ */}
      <circle cx="180" cy="100" r="22" fill="none" stroke="#f59e0b" strokeWidth="2" />
      <text x="180" y="96" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="bold">G</text>
      <text x="180" y="109" textAnchor="middle" fill="#94a3b8" fontSize="8">galvanometer</text>
      {/* Wires from coil to galvanometer */}
      <line x1="162" y1="70" x2="180" y2="78" stroke="#94a3b8" strokeWidth="1.5" />
      <line x1="162" y1="130" x2="180" y2="122" stroke="#94a3b8" strokeWidth="1.5" />
      {/* ─ Bar magnet ─ */}
      <rect x="290" y="72" width="120" height="56" rx="6" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
      <rect x="290" y="72" width="60" height="56" rx="6" fill="#3b1a1a" />
      <rect x="350" y="72" width="60" height="56" rx="6" fill="#1a2d3b" />
      <text x="320" y="105" textAnchor="middle" fill="#f87171" fontSize="16" fontWeight="bold">S</text>
      <text x="380" y="105" textAnchor="middle" fill="#60a5fa" fontSize="16" fontWeight="bold">N</text>
      {/* ─ Motion arrow (magnet moving left toward coil) ─ */}
      <line x1="285" y1="100" x2="240" y2="100" stroke="#34d399" strokeWidth="2" markerEnd="url(#arrowGreen)" />
      <defs>
        <marker id="arrowGreen" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#34d399" />
        </marker>
      </defs>
      <text x="262" y="90" textAnchor="middle" fill="#34d399" fontSize="9">motion</text>
      {/* ─ Induced EMF label ─ */}
      <text x="230" y="175" textAnchor="middle" fill="#94a3b8" fontSize="10">Induced EMF = −N × ΔΦ/Δt</text>
      {/* ─ Flux lines through coil ─ */}
      <line x1="230" y1="80" x2="155" y2="80" stroke="#818cf8" strokeWidth="1" strokeDasharray="4 3" />
      <line x1="230" y1="100" x2="155" y2="100" stroke="#818cf8" strokeWidth="1" strokeDasharray="4 3" />
      <line x1="230" y1="120" x2="155" y2="120" stroke="#818cf8" strokeWidth="1" strokeDasharray="4 3" />
      <text x="430" y="145" textAnchor="middle" fill="#818cf8" fontSize="8">Φ = B·A</text>
    </svg>
  );
}

function SolarCellSVG() {
  return (
    <svg viewBox="0 0 320 220" className="w-full max-w-sm mx-auto" aria-label="Solar cell cross-section diagram">
      {/* ─ Metal contact top ─ */}
      <rect x="60" y="20" width="200" height="10" rx="2" fill="#94a3b8" />
      <text x="160" y="17" textAnchor="middle" fill="#94a3b8" fontSize="9">Metal contact (−)</text>
      {/* ─ n-type layer ─ */}
      <rect x="60" y="30" width="200" height="45" rx="0" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1" />
      <text x="160" y="57" textAnchor="middle" fill="#93c5fd" fontSize="11" fontWeight="bold">n-type silicon</text>
      <text x="160" y="69" textAnchor="middle" fill="#60a5fa" fontSize="8">(excess electrons)</text>
      {/* ─ p-n junction ─ */}
      <rect x="60" y="75" width="200" height="5" fill="#f59e0b" />
      <text x="270" y="80" fill="#f59e0b" fontSize="8">p-n junction</text>
      {/* ─ p-type layer ─ */}
      <rect x="60" y="80" width="200" height="45" rx="0" fill="#3b1a1a" stroke="#ef4444" strokeWidth="1" />
      <text x="160" y="107" textAnchor="middle" fill="#fca5a5" fontSize="11" fontWeight="bold">p-type silicon</text>
      <text x="160" y="119" textAnchor="middle" fill="#f87171" fontSize="8">(electron holes)</text>
      {/* ─ Metal contact bottom ─ */}
      <rect x="60" y="125" width="200" height="10" rx="2" fill="#94a3b8" />
      <text x="160" y="148" textAnchor="middle" fill="#94a3b8" fontSize="9">Metal contact (+)</text>
      {/* ─ External load ─ */}
      <line x1="60" y1="25" x2="30" y2="25" stroke="#94a3b8" strokeWidth="1.5" />
      <line x1="30" y1="25" x2="30" y2="130" stroke="#94a3b8" strokeWidth="1.5" />
      <line x1="60" y1="130" x2="30" y2="130" stroke="#94a3b8" strokeWidth="1.5" />
      <circle cx="30" cy="77" r="10" fill="none" stroke="#f59e0b" strokeWidth="2" />
      <text x="30" y="81" textAnchor="middle" fill="#f59e0b" fontSize="9">R</text>
      {/* ─ Photon arrows ─ */}
      {[80, 120, 160, 200, 240].map((x) => (
        <g key={x}>
          <line x1={x} y1={1} x2={x} y2={22} stroke="#fde68a" strokeWidth="1.5" markerEnd="url(#arrowPhoton)" />
          <text x={x} y={12} textAnchor="middle" fill="#fde68a" fontSize="7">hν</text>
        </g>
      ))}
      <defs>
        <marker id="arrowPhoton" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L0,6 L6,3 z" fill="#fde68a" />
        </marker>
      </defs>
      {/* ─ Electron flow ─ */}
      <text x="8" y="60" fill="#60a5fa" fontSize="8">e⁻</text>
      <text x="8" y="70" fill="#60a5fa" fontSize="7">↑ flow</text>
      {/* ─ Hole flow ─ */}
      <text x="8" y="100" fill="#f87171" fontSize="8">h⁺</text>
      <text x="8" y="110" fill="#f87171" fontSize="7">↓ flow</text>
      <text x="160" y="170" textAnchor="middle" fill="#94a3b8" fontSize="9">Photons dislodge electrons → current flows</text>
    </svg>
  );
}

/* ─── Main Component ───────────────────────────────────────────────────── */

export default function EmfSources() {
  return (
    <div className="min-h-full p-6 md:p-10 space-y-10 max-w-5xl mx-auto">

      {/* ── Header ── */}
      <div>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-orange-400/10 border border-orange-400/20 flex items-center justify-center">
            <Battery className="w-5 h-5 text-orange-400" />
          </div>
        </div>
        <h1 className="text-4xl font-display font-bold text-foreground tracking-tight mb-3">EMF Sources</h1>
        <p className="text-muted-foreground text-base leading-relaxed max-w-2xl">
          Electromotive Force (EMF) is the energy per unit charge supplied by a source to drive current around a circuit.
          Every electrical system requires an EMF source — the means by which electrical energy is created from another form of energy.
        </p>
      </div>

      {/* ── What is EMF ── */}
      <section className="bg-card border border-white/8 rounded-2xl overflow-hidden">
        <div className="flex items-center gap-2 px-6 py-4 border-b border-white/8">
          <Info className="w-4 h-4 text-primary" />
          <h2 className="font-semibold text-foreground">What is EMF?</h2>
        </div>
        <div className="p-6 space-y-5">
          <div className="rounded-xl border border-orange-400/20 bg-orange-400/5 p-5 text-center">
            <p className="text-xl font-display font-bold text-foreground mb-2">
              EMF puts the pressure behind the electrons to make them move.
            </p>
            <p className="text-sm text-muted-foreground">
              EMF is <span className="text-foreground font-medium">electrical pressure</span>, measured in <span className="text-foreground font-medium">Volts (V)</span>. It is not a mechanical force — it is the energy supplied per coulomb of charge by the source.
            </p>
          </div>

          {/* Synonyms */}
          <div className="bg-background/40 border border-white/8 rounded-xl p-4">
            <p className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wider">EMF is also referred to as:</p>
            <div className="flex flex-wrap gap-2">
              {["Voltage", "Electromotive Force", "Driving Force", "Locomotion", "Prime Mover", "Propulsion", "Kinetic Energy", "Means of Propulsion", "Motivity"].map((t) => (
                <span key={t} className="bg-orange-400/10 border border-orange-400/20 text-orange-300 text-xs px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-background/40 border border-white/8 rounded-xl p-4 space-y-2 text-center">
              <div className="font-mono text-primary font-bold text-lg">EMF = ε</div>
              <div className="text-xs text-muted-foreground">Symbol: Greek letter epsilon (ε), unit: <span className="text-foreground font-medium">Volts (V)</span></div>
            </div>
            <div className="bg-background/40 border border-white/8 rounded-xl p-4 space-y-2 text-center">
              <div className="font-mono text-primary font-bold text-lg">ε = W ÷ Q</div>
              <div className="text-xs text-muted-foreground">EMF = Work done (J) ÷ Charge moved (C)</div>
            </div>
            <div className="bg-background/40 border border-white/8 rounded-xl p-4 space-y-2 text-center">
              <div className="font-mono text-primary font-bold text-lg">ε = V + Ir</div>
              <div className="text-xs text-muted-foreground">EMF = Terminal voltage + drop across internal resistance</div>
            </div>
          </div>

          <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 text-sm">
            <p className="font-semibold text-blue-300 text-xs mb-1">EMF vs Terminal Voltage</p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              EMF is the total energy a source can supply per coulomb. <span className="text-foreground font-medium">Terminal voltage</span> is always slightly less than EMF because every real source has internal resistance — some energy is lost within the source itself before reaching the external circuit.
            </p>
          </div>
        </div>
      </section>

      {/* ── Sources of EMF ── */}
      <section className="bg-card border border-white/8 rounded-2xl overflow-hidden">
        <div className="flex items-center gap-2 px-6 py-4 border-b border-white/8">
          <Zap className="w-4 h-4 text-yellow-400" />
          <h2 className="font-semibold text-foreground">Sources of EMF</h2>
        </div>
        <div className="p-6 space-y-6">
          <p className="text-sm text-muted-foreground leading-relaxed">
            EMF can be produced by six different methods — each converts a different form of energy into electrical energy.
          </p>

          {/* ── 01 CHEMICAL ── */}
          <div className="rounded-xl border border-yellow-400/20 bg-yellow-400/5 p-5 space-y-5">
            <div className="flex items-start gap-3">
              <Battery className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
              <div>
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="font-mono text-xs font-bold opacity-50 text-yellow-400">01</span>
                  <h3 className="font-semibold text-sm text-yellow-400">Chemical (Electrochemical) — 1800</h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Chemical reactions between dissimilar metals and an electrolyte cause electrons to accumulate on one electrode (−) and deplete on the other (+), creating a potential difference. Named after Luigi Galvani and Alessandro Volta, a <span className="text-foreground font-medium">galvanic (voltaic) cell</span> derives electrical energy from spontaneous redox reactions. A <span className="text-foreground font-medium">battery</span> is a collective noun for one or more cells connected together.
                </p>
              </div>
            </div>

            {/* Galvanic cell SVG */}
            <div className="bg-background/40 border border-white/8 rounded-xl p-4">
              <p className="text-xs font-semibold text-muted-foreground mb-3 text-center">Zinc–Copper Galvanic Cell</p>
              <GalvanicCellSVG />
            </div>

            {/* Redox reactions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 text-center">
                <p className="text-xs font-semibold text-red-400 mb-2">Anode — Oxidation (−)</p>
                <p className="font-mono text-sm text-foreground">Zn(s) → Zn²⁺(aq) + 2e⁻</p>
                <p className="text-xs text-muted-foreground mt-1">Zinc gives up electrons → electrode dissolves</p>
                <p className="font-mono text-xs text-red-400 mt-1">E° = −0.76 V</p>
              </div>
              <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 text-center">
                <p className="text-xs font-semibold text-green-400 mb-2">Cathode — Reduction (+)</p>
                <p className="font-mono text-sm text-foreground">Cu²⁺(aq) + 2e⁻ → Cu(s)</p>
                <p className="text-xs text-muted-foreground mt-1">Copper ions gain electrons → copper deposits</p>
                <p className="font-mono text-xs text-green-400 mt-1">E° = +0.34 V</p>
              </div>
            </div>

            <div className="bg-background/40 border border-yellow-400/20 rounded-xl p-4 text-center">
              <p className="text-xs text-muted-foreground mb-1">Cell EMF</p>
              <p className="font-mono text-lg text-yellow-300 font-bold">E_cell = E°(cathode) − E°(anode) = 0.34 − (−0.76) = <span className="text-white">1.10 V</span></p>
            </div>

            {/* Copper in silver nitrate — displacement reaction */}
            <div className="bg-background/40 border border-white/8 rounded-xl p-4">
              <p className="text-xs font-semibold text-muted-foreground mb-2">Displacement Reaction Example</p>
              <p className="text-xs text-muted-foreground mb-2">When a copper strip is placed in silver nitrate solution, copper displaces silver — demonstrating the reactivity series in action:</p>
              <div className="font-mono text-sm text-center bg-black/30 rounded-lg p-3 text-foreground">
                Cu(s) + 2Ag⁺(aq) → Cu²⁺(aq) + Ag(s)
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-center">Copper oxidises; silver ions are reduced and deposit as solid silver metal.</p>
            </div>

            {/* Primary vs Secondary */}
            <div>
              <p className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wider">Primary vs Secondary Cells</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-background/40 border border-white/8 rounded-xl p-4 space-y-2">
                  <p className="text-sm font-semibold text-foreground">Primary Cell</p>
                  <p className="text-xs text-muted-foreground">Designed to be used once and discarded. The electrochemical reaction is <span className="text-foreground font-medium">not reversible</span> — the cell cannot be recharged.</p>
                  <div className="space-y-1">
                    {[
                      { type: "Carbon-Zinc", detail: "~1.5 V. Electrochemical reaction between zinc and manganese dioxide. Standard torches and remotes." },
                      { type: "Alkaline", detail: "~1.5 V. Alkaline electrolyte (KOH). Higher energy density and longer shelf life than carbon-zinc." },
                      { type: "Lithium", detail: "1.5 V – 3.7 V. Metallic lithium anode. Highest charge density, longest shelf life. Used in cameras, medical devices, EVs." },
                    ].map((c) => (
                      <div key={c.type} className="flex gap-2 text-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0 mt-1.5" />
                        <div><span className="text-foreground font-medium">{c.type} — </span><span className="text-muted-foreground">{c.detail}</span></div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-background/40 border border-white/8 rounded-xl p-4 space-y-2">
                  <p className="text-sm font-semibold text-foreground">Secondary Cell</p>
                  <p className="text-xs text-muted-foreground">Can be charged, discharged into a load, and <span className="text-foreground font-medium">recharged many times</span>. An external current reverses the chemical reaction.</p>
                  <div className="space-y-1">
                    {[
                      { type: "Lead-Acid", detail: "12 V (6 cells × 2V). Car batteries, UPS systems, control boards. High current capability." },
                      { type: "Lithium-Ion / LiFePO₄", detail: "3.2 – 3.7 V per cell. Portable tools, EVs, solar storage. High energy density, light weight." },
                      { type: "Nickel-Metal Hydride (NiMH)", detail: "~1.2 V per cell. Hybrid vehicles, older cordless tools, rechargeable household batteries." },
                    ].map((c) => (
                      <div key={c.type} className="flex gap-2 text-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0 mt-1.5" />
                        <div><span className="text-foreground font-medium">{c.type} — </span><span className="text-muted-foreground">{c.detail}</span></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ── Lead-Acid Battery — Detail ── */}
            <div className="space-y-4">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Secondary Cell Deep Dive — Lead-Acid Battery</p>

              {/* Internal structure */}
              <div className="bg-background/40 border border-white/8 rounded-xl p-4">
                <p className="text-xs font-semibold text-muted-foreground mb-3 text-center">Automotive Lead-Acid Battery — Internal Structure</p>
                <svg viewBox="0 0 500 260" className="w-full max-w-lg mx-auto" aria-label="Lead-acid battery internal structure">
                  {/* Battery case */}
                  <rect x="30" y="50" width="440" height="190" rx="6" fill="#1e293b" stroke="#64748b" strokeWidth="2" />
                  {/* Battery top / lid */}
                  <rect x="30" y="30" width="440" height="25" rx="4" fill="#334155" stroke="#64748b" strokeWidth="1.5" />
                  {/* 6 cell partitions */}
                  {[103, 176, 249, 322, 395].map((x) => (
                    <line key={x} x1={x} y1="75" x2={x} y2="230" stroke="#475569" strokeWidth="1.5" />
                  ))}
                  {/* Cell plates — alternating PbO₂ (amber) and Pb (grey) with separators */}
                  {[0, 1, 2, 3, 4, 5].map((cell) => {
                    const cx = 30 + cell * 73 + 10;
                    return (
                      <g key={cell}>
                        {/* PbO₂ positive plate */}
                        <rect x={cx + 5} y="85" width="14" height="120" rx="2" fill="#92400e" />
                        {/* Separator */}
                        <rect x={cx + 21} y="85" width="6" height="120" rx="1" fill="#1e3a5f" />
                        {/* Pb negative plate */}
                        <rect x={cx + 29} y="85" width="14" height="120" rx="2" fill="#475569" />
                        {/* Separator */}
                        <rect x={cx + 45} y="85" width="6" height="120" rx="1" fill="#1e3a5f" />
                        {/* Electrolyte fill */}
                        <rect x={cx} y="200" width="62" height="28" rx="2" fill="#0f172a" opacity="0.7" />
                        <text x={cx + 31} y="218" textAnchor="middle" fill="#38bdf8" fontSize="7">H₂SO₄(aq)</text>
                      </g>
                    );
                  })}
                  {/* Positive strap (top, amber) */}
                  <rect x="35" y="30" width="215" height="8" rx="2" fill="#b45309" />
                  {/* Negative strap (top, grey) */}
                  <rect x="255" y="30" width="210" height="8" rx="2" fill="#475569" />
                  {/* Intercell connectors */}
                  {[103, 249, 395].map((x) => (
                    <circle key={x} cx={x} cy="34" r="5" fill="#94a3b8" />
                  ))}
                  {/* Posts */}
                  <rect x="55" y="10" width="18" height="25" rx="4" fill="#b45309" />
                  <rect x="427" y="10" width="18" height="25" rx="4" fill="#475569" />
                  <text x="64" y="8" textAnchor="middle" fill="#fbbf24" fontSize="9" fontWeight="bold">+</text>
                  <text x="436" y="8" textAnchor="middle" fill="#94a3b8" fontSize="9" fontWeight="bold">−</text>
                  {/* Labels */}
                  <text x="64" y="242" textAnchor="middle" fill="#fbbf24" fontSize="8">+ve Post</text>
                  <text x="436" y="242" textAnchor="middle" fill="#94a3b8" fontSize="8">−ve Post</text>
                  <text x="67" y="254" textAnchor="middle" fill="#f59e0b" fontSize="7">+ve Strap</text>
                  <text x="390" y="254" textAnchor="middle" fill="#64748b" fontSize="7">−ve Strap</text>
                  <text x="250" y="254" textAnchor="middle" fill="#818cf8" fontSize="7">6 cells × ~2 V = 12 V nominal</text>
                  {/* Legend */}
                  <rect x="350" y="80" width="10" height="10" rx="1" fill="#92400e" />
                  <text x="364" y="89" fill="#f59e0b" fontSize="8">PbO₂ (+ve plate)</text>
                  <rect x="350" y="96" width="10" height="10" rx="1" fill="#475569" />
                  <text x="364" y="105" fill="#94a3b8" fontSize="8">Pb (−ve plate)</text>
                  <rect x="350" y="112" width="10" height="10" rx="1" fill="#1e3a5f" />
                  <text x="364" y="121" fill="#60a5fa" fontSize="8">Separator</text>
                </svg>
                <div className="mt-3 grid grid-cols-2 md:grid-cols-3 gap-2 text-xs">
                  {[
                    { part: "Positive plate", material: "Lead dioxide (PbO₂)" },
                    { part: "Negative plate", material: "Sponge lead (Pb)" },
                    { part: "Separator", material: "Porous insulator between plates" },
                    { part: "Partition", material: "Hard wall between cells" },
                    { part: "Intercell connector", material: "Links cells in series" },
                    { part: "Electrolyte", material: "Dilute sulphuric acid (H₂SO₄)" },
                  ].map((r) => (
                    <div key={r.part} className="bg-black/20 rounded-lg p-2">
                      <p className="font-semibold text-foreground">{r.part}</p>
                      <p className="text-muted-foreground">{r.material}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Discharging */}
              <div className="bg-background/40 border border-red-500/20 rounded-xl p-4 space-y-3">
                <p className="text-xs font-semibold text-red-400 uppercase tracking-wider">Discharging — Chemical Reactions</p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  During discharge, both electrodes react with the sulphate ions from the electrolyte to form lead sulphate (PbSO₄). The electrolyte becomes weaker (specific gravity falls) as sulphuric acid is consumed and water is produced.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-3 text-center">
                    <p className="text-xs font-semibold text-red-400 mb-2">Negative plate — Anode (oxidation)</p>
                    <p className="font-mono text-xs text-foreground bg-black/30 rounded-lg p-2">Pb + SO₄²⁻ → PbSO₄ + 2e⁻</p>
                    <p className="text-xs text-muted-foreground mt-2">Sponge lead is oxidised to lead sulphate</p>
                  </div>
                  <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-3 text-center">
                    <p className="text-xs font-semibold text-green-400 mb-2">Positive plate — Cathode (reduction)</p>
                    <p className="font-mono text-xs text-foreground bg-black/30 rounded-lg p-2">PbO₂ + 4H⁺ + SO₄²⁻ + 2e⁻ → PbSO₄ + 2H₂O</p>
                    <p className="text-xs text-muted-foreground mt-2">Lead dioxide is reduced to lead sulphate; water is produced</p>
                  </div>
                </div>
                <div className="overflow-x-auto rounded-xl border border-white/8">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-white/8 bg-background/40">
                        <th className="text-left py-2 px-3 font-semibold text-muted-foreground">State</th>
                        <th className="text-left py-2 px-3 font-semibold text-muted-foreground">Negative plate</th>
                        <th className="text-left py-2 px-3 font-semibold text-muted-foreground">Positive plate</th>
                        <th className="text-left py-2 px-3 font-semibold text-muted-foreground">Electrolyte SG</th>
                        <th className="text-right py-2 px-3 font-semibold text-muted-foreground">Volts/cell</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      <tr className="bg-green-500/5">
                        <td className="py-2 px-3 text-green-400 font-semibold">Charged</td>
                        <td className="py-2 px-3 text-muted-foreground">Sponge Lead (Pb)</td>
                        <td className="py-2 px-3 text-muted-foreground">Lead Dioxide (PbO₂)</td>
                        <td className="py-2 px-3 font-mono text-foreground">1.300</td>
                        <td className="py-2 px-3 font-mono text-green-400 text-right">2.14 V</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 text-yellow-400 font-semibold">Discharging</td>
                        <td className="py-2 px-3 text-muted-foreground">↓ Lead Sulphate forming</td>
                        <td className="py-2 px-3 text-muted-foreground">↓ Lead Sulphate forming</td>
                        <td className="py-2 px-3 font-mono text-foreground">1.210</td>
                        <td className="py-2 px-3 font-mono text-yellow-400 text-right">1.84 V</td>
                      </tr>
                      <tr className="bg-red-500/5">
                        <td className="py-2 px-3 text-red-400 font-semibold">Discharged</td>
                        <td className="py-2 px-3 text-muted-foreground">Lead Sulphate (PbSO₄)</td>
                        <td className="py-2 px-3 text-muted-foreground">Lead Sulphate (PbSO₄)</td>
                        <td className="py-2 px-3 font-mono text-foreground">1.120</td>
                        <td className="py-2 px-3 font-mono text-red-400 text-right">1.75 V</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Charging */}
              <div className="bg-background/40 border border-blue-500/20 rounded-xl p-4 space-y-3">
                <p className="text-xs font-semibold text-blue-400 uppercase tracking-wider">Charging — Chemical Reactions (reversed)</p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  An external charger (2.30 V DC per cell minimum) forces current in the reverse direction, reversing the discharge reactions. Lead sulphate is converted back to sponge lead and lead dioxide. The electrolyte regains H₂SO₄ and loses water — specific gravity rises as the battery charges.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-3 text-center">
                    <p className="text-xs font-semibold text-red-400 mb-2">Negative plate (charging)</p>
                    <p className="font-mono text-xs text-foreground bg-black/30 rounded-lg p-2">PbSO₄ + 2e⁻ → Pb + SO₄²⁻</p>
                    <p className="text-xs text-muted-foreground mt-2">Lead sulphate is reduced back to sponge lead</p>
                  </div>
                  <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-3 text-center">
                    <p className="text-xs font-semibold text-green-400 mb-2">Positive plate (charging)</p>
                    <p className="font-mono text-xs text-foreground bg-black/30 rounded-lg p-2">PbSO₄ + 2H₂O → PbO₂ + 4H⁺ + SO₄²⁻ + 2e⁻</p>
                    <p className="text-xs text-muted-foreground mt-2">Lead sulphate is oxidised back to lead dioxide</p>
                  </div>
                </div>
                <div className="overflow-x-auto rounded-xl border border-white/8">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-white/8 bg-background/40">
                        <th className="text-left py-2 px-3 font-semibold text-muted-foreground">State</th>
                        <th className="text-left py-2 px-3 font-semibold text-muted-foreground">Negative plate</th>
                        <th className="text-left py-2 px-3 font-semibold text-muted-foreground">Positive plate</th>
                        <th className="text-left py-2 px-3 font-semibold text-muted-foreground">Electrolyte SG</th>
                        <th className="text-right py-2 px-3 font-semibold text-muted-foreground">Volts/cell</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      <tr className="bg-red-500/5">
                        <td className="py-2 px-3 text-red-400 font-semibold">Discharged</td>
                        <td className="py-2 px-3 text-muted-foreground">Lead Sulphate (PbSO₄)</td>
                        <td className="py-2 px-3 text-muted-foreground">Lead Sulphate (PbSO₄)</td>
                        <td className="py-2 px-3 font-mono text-foreground">1.120</td>
                        <td className="py-2 px-3 font-mono text-red-400 text-right">1.96 V</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 text-yellow-400 font-semibold">Charging</td>
                        <td className="py-2 px-3 text-muted-foreground">↑ Sponge Lead forming</td>
                        <td className="py-2 px-3 text-muted-foreground">↑ Lead Dioxide forming</td>
                        <td className="py-2 px-3 font-mono text-foreground">1.210</td>
                        <td className="py-2 px-3 font-mono text-yellow-400 text-right">2.01 V</td>
                      </tr>
                      <tr className="bg-green-500/5">
                        <td className="py-2 px-3 text-green-400 font-semibold">Charged</td>
                        <td className="py-2 px-3 text-muted-foreground">Sponge Lead (Pb)</td>
                        <td className="py-2 px-3 text-muted-foreground">Lead Dioxide (PbO₂)</td>
                        <td className="py-2 px-3 font-mono text-foreground">1.300</td>
                        <td className="py-2 px-3 font-mono text-green-400 text-right">2.05 V</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3 text-xs">
                  <span className="font-semibold text-blue-300">Charger voltage: </span>
                  <span className="text-muted-foreground">A minimum of 2.30 V DC per cell is required to overcome the back-EMF and force the charging reaction. For a standard 12 V (6-cell) battery, the charger output must exceed ~13.8 V. Gassing (hydrogen/oxygen release) occurs near full charge — ensure adequate ventilation.</span>
                </div>
              </div>
            </div>

            {/* Electrode potential table */}
            <div>
              <p className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wider">Standard Electrode Potential (E°) — Selected Elements</p>
              <div className="overflow-x-auto rounded-xl border border-white/8">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-white/8 bg-background/40">
                      <th className="text-left py-2 px-4 font-semibold text-muted-foreground">Element / Half-reaction</th>
                      <th className="text-right py-2 px-4 font-semibold text-muted-foreground">E° (Volts)</th>
                      <th className="text-left py-2 px-4 font-semibold text-muted-foreground">Tendency</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {[
                      { el: "Lithium (Li⁺/Li)", e: "−3.04", t: "Strong reducing agent" },
                      { el: "Potassium (K⁺/K)", e: "−2.92", t: "" },
                      { el: "Calcium (Ca²⁺/Ca)", e: "−2.87", t: "" },
                      { el: "Sodium (Na⁺/Na)", e: "−2.71", t: "" },
                      { el: "Magnesium (Mg²⁺/Mg)", e: "−2.37", t: "" },
                      { el: "Aluminium (Al³⁺/Al)", e: "−1.67", t: "" },
                      { el: "Zinc (Zn²⁺/Zn)", e: "−0.76", t: "Common anode", highlight: "anode" },
                      { el: "Iron (Fe²⁺/Fe)", e: "−0.44", t: "" },
                      { el: "Nickel (Ni²⁺/Ni)", e: "−0.24", t: "" },
                      { el: "Lead (Pb²⁺/Pb)", e: "−0.13", t: "" },
                      { el: "Hydrogen (H⁺/H₂)", e: "0.00", t: "Reference electrode", highlight: "ref" },
                      { el: "Copper (Cu²⁺/Cu)", e: "+0.34", t: "Common cathode", highlight: "cathode" },
                      { el: "Silver (Ag⁺/Ag)", e: "+0.80", t: "" },
                      { el: "Gold (Au³⁺/Au)", e: "+1.50", t: "" },
                      { el: "Chlorine (Cl₂/Cl⁻)", e: "+1.36", t: "" },
                      { el: "Fluorine (F₂/F⁻)", e: "+2.87", t: "Strong oxidising agent" },
                    ].map((row) => (
                      <tr
                        key={row.el}
                        className={cn(
                          row.highlight === "anode" && "bg-red-500/10",
                          row.highlight === "cathode" && "bg-green-500/10",
                          row.highlight === "ref" && "bg-blue-500/10",
                        )}
                      >
                        <td className="py-2 px-4 text-foreground">{row.el}</td>
                        <td className={cn(
                          "py-2 px-4 font-mono text-right",
                          parseFloat(row.e) < 0 ? "text-red-400" : parseFloat(row.e) > 0 ? "text-green-400" : "text-blue-400"
                        )}>{row.e}</td>
                        <td className="py-2 px-4 text-muted-foreground">{row.t}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                The further apart two elements are in this table, the greater the cell EMF when combined. The element with the lower (more negative) E° acts as the <span className="text-red-400 font-medium">anode</span>; the higher E° acts as the <span className="text-green-400 font-medium">cathode</span>.
              </p>
            </div>

            <div className="ml-0 rounded-lg p-3 border border-yellow-400/20 bg-yellow-400/5 text-xs">
              <span className="font-semibold text-yellow-400">Industry application: </span>
              <span className="text-muted-foreground">12 V lead-acid batteries power HVAC/R control boards during mains failure. Lithium-ion batteries back up BMS (Building Management Systems) and security panels. Thermocouples in gas appliances use millivolt-level chemical EMF principles to identify flame presence.</span>
            </div>
          </div>

          {/* ── 02 ELECTROMAGNETIC INDUCTION ── */}
          <div className="rounded-xl border border-blue-400/20 bg-blue-400/5 p-5 space-y-5">
            <div className="flex items-start gap-3">
              <Wind className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
              <div>
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="font-mono text-xs font-bold opacity-50 text-blue-400">02</span>
                  <h3 className="font-semibold text-sm text-blue-400">Electromagnetic Induction — 1831 (Michael Faraday)</h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  When a conductor moves through a magnetic field — or a magnetic field changes around a stationary conductor — an EMF is induced in the conductor. This is <span className="text-foreground font-medium">Faraday's Law of Electromagnetic Induction</span>, discovered in 1831. Generators and transformers are both applications of this law.
                </p>
              </div>
            </div>

            {/* Faraday's Law equations */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-background/40 border border-white/8 rounded-xl p-4 space-y-3">
                <p className="text-xs font-semibold text-blue-300">Faraday's Law</p>
                <div className="font-mono text-lg text-center text-foreground font-bold bg-black/30 rounded-lg p-3">
                  EMF = −N × ΔΦ/Δt
                </div>
                <div className="space-y-1 text-xs text-muted-foreground">
                  <div><span className="text-foreground font-mono">N</span> = number of turns in the coil</div>
                  <div><span className="text-foreground font-mono">Φ</span> = magnetic flux (Weber, Wb) = B × A</div>
                  <div><span className="text-foreground font-mono">B</span> = magnetic field strength (Tesla, T)</div>
                  <div><span className="text-foreground font-mono">A</span> = area of coil (m²)</div>
                  <div><span className="text-foreground font-mono">t</span> = time (s)</div>
                  <div><span className="text-foreground font-mono">−</span> = Lenz's Law (induced EMF opposes the change)</div>
                </div>
              </div>
              <div className="bg-background/40 border border-white/8 rounded-xl p-4 space-y-3">
                <p className="text-xs font-semibold text-blue-300">Lenz's Law</p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  The induced EMF always acts in a direction that <span className="text-foreground font-medium">opposes the change in flux</span> that caused it (hence the negative sign in Faraday's Law). This is a consequence of the conservation of energy — the induced current creates a magnetic force that resists the motion of the conductor.
                </p>
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3 text-xs text-center text-blue-300 font-medium">
                  "The induced current opposes the cause that produced it."
                </div>
              </div>
            </div>

            {/* Faraday coil SVG */}
            <div className="bg-background/40 border border-white/8 rounded-xl p-4">
              <p className="text-xs font-semibold text-muted-foreground mb-3 text-center">Faraday's Induction Experiment — Moving Magnet in a Coil</p>
              <FaradayCoilSVG />
              <p className="text-xs text-muted-foreground text-center mt-2">As the magnet moves toward the coil, the changing magnetic flux induces an EMF — the galvanometer deflects.</p>
            </div>

            {/* Generator types */}
            <div>
              <p className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wider">Generators — Two Types</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-background/40 border border-blue-400/20 rounded-xl p-4">
                  <p className="text-sm font-semibold text-blue-300 mb-1">Alternator (AC Generator)</p>
                  <p className="text-xs text-muted-foreground">A rotating coil in a fixed magnetic field produces a continuously alternating EMF. The output alternates direction with each half-revolution. All grid electricity in Australia (50 Hz) is generated by large alternators.</p>
                </div>
                <div className="bg-background/40 border border-blue-400/20 rounded-xl p-4">
                  <p className="text-sm font-semibold text-blue-300 mb-1">Dynamo (DC Generator)</p>
                  <p className="text-xs text-muted-foreground">Similar to an alternator but uses a <span className="text-foreground font-medium">commutator</span> (split-ring) to convert the alternating output to unidirectional DC. Used in older vehicles and some specialist DC power applications.</p>
                </div>
              </div>
            </div>

            {/* Prime movers */}
            <div>
              <p className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wider">Prime Movers — What Spins the Generator</p>
              <p className="text-xs text-muted-foreground mb-3">A prime mover converts a primary energy source into the mechanical rotation needed to drive a generator. The four main types used in large-scale power generation are:</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  {
                    name: "Steam", colour: "text-slate-300", border: "border-slate-400/20", bg: "bg-slate-400/5",
                    detail: "Coal, gas, or nuclear fuel heats water → steam drives a turbine → turbine spins an alternator. Used in most fossil fuel and nuclear power stations.",
                    components: ["Boiler / reactor", "Steam turbine", "Alternator", "Cooling tower", "Transmission lines"],
                  },
                  {
                    name: "Wind", colour: "text-sky-300", border: "border-sky-400/20", bg: "bg-sky-400/5",
                    detail: "Wind drives a rotor with aerodynamic blades → gearbox increases rotational speed → generator produces AC. Modern turbines use variable-pitch blades and yaw drive to track wind direction.",
                    components: ["Rotor blades (pitch-controlled)", "Gearbox", "Generator", "Nacelle + yaw drive", "Tower + controller"],
                  },
                  {
                    name: "Diesel", colour: "text-yellow-300", border: "border-yellow-400/20", bg: "bg-yellow-400/5",
                    detail: "Internal combustion engine runs on diesel fuel → directly coupled or belt-driven to an alternator. Used in standby generators, remote areas, and marine applications.",
                    components: ["Diesel engine", "Alternator (coupled)", "Fuel system", "AVR (voltage regulator)", "Control panel"],
                  },
                  {
                    name: "Hydro", colour: "text-teal-300", border: "border-teal-400/20", bg: "bg-teal-400/5",
                    detail: "Water falling from a height (headpond) flows through a penstock → drives a water turbine → spins an alternator. Highly efficient with negligible fuel cost. Used in Snowy Hydro and Tasmania's network.",
                    components: ["Headpond / dam", "Intake + penstock", "Water turbine", "Alternator", "Powerhouse + transmission"],
                  },
                ].map((pm) => (
                  <div key={pm.name} className={cn("rounded-xl border p-4 space-y-3", pm.border, pm.bg)}>
                    <p className={cn("font-semibold text-sm", pm.colour)}>{pm.name}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{pm.detail}</p>
                    <div className="space-y-1">
                      <p className="text-xs font-semibold text-muted-foreground">Key components:</p>
                      {pm.components.map((c) => (
                        <div key={c} className="flex gap-2 text-xs">
                          <span className={cn("w-1 h-1 rounded-full flex-shrink-0 mt-1.5", pm.colour.replace("text-", "bg-"))} />
                          <span className="text-muted-foreground">{c}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg p-3 border border-blue-400/20 bg-blue-400/5 text-xs">
              <span className="font-semibold text-blue-400">Industry application: </span>
              <span className="text-muted-foreground">The Australian grid (240 V / 415 V) is produced by electromagnetic induction in large-scale alternators. Transformers step voltages down for distribution and again for 24 V control circuits in HVAC equipment. Single-phase induction motors inside compressors, fans, and pumps reverse this principle — using an AC magnetic field to produce mechanical rotation.</span>
            </div>
          </div>

          {/* ── 03 THERMOELECTRIC ── */}
          <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-5 space-y-5">
            <div className="flex items-start gap-3">
              <Flame className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
              <div>
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="font-mono text-xs font-bold opacity-50 text-red-400">03</span>
                  <h3 className="font-semibold text-sm text-red-400">Thermoelectric (Seebeck Effect) — 1834</h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  When two dissimilar metals (or semiconductors) are joined at two junctions and those junctions are held at <span className="text-foreground font-medium">different temperatures</span>, an EMF is produced. The magnitude is proportional to the temperature difference. This is the <span className="text-foreground font-medium">Seebeck Effect</span>, discovered by Thomas Johann Seebeck in 1821 and further developed into practical thermoelectric devices by the 1834 period.
                </p>
              </div>
            </div>

            {/* Seebeck detail */}
            <div className="bg-background/40 border border-white/8 rounded-xl p-4 space-y-3">
              <p className="text-xs font-semibold text-red-300">Seebeck Effect — How it Works</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Similar to a thermocouple: two dissimilar metals or semiconductors are joined, but each end is held at a different temperature. Charge carriers (electrons or holes) in the material diffuse from the <span className="text-foreground font-medium">hot side to the cold side</span>, creating a charge imbalance. This charge separation produces a measurable voltage. The voltage produced is determined by the <span className="text-foreground font-medium">difference in temperature</span> and the Seebeck coefficient of the material pair.
              </p>
              <div className="font-mono text-sm text-center bg-black/30 rounded-lg p-3 text-foreground">
                V = S × (T_hot − T_cold)
              </div>
              <p className="text-xs text-muted-foreground text-center">where S = Seebeck coefficient (µV/°C), T = temperature (°C or K)</p>
            </div>

            <div className="space-y-2 pl-0">
              {[
                { item: "Thermocouple", detail: "Two dissimilar wires produce a millivolt-range EMF proportional to temperature. Used as a temperature sensor (types J, K, T, E, N, S, R, B)." },
                { item: "Thermoelectric generator (TEG)", detail: "Uses waste heat to generate usable DC electricity. Used in remote power supplies, spacecraft (RTG), and some industrial waste heat recovery systems." },
                { item: "Peltier device (reverse Seebeck)", detail: "Applying a current across a thermoelectric junction pumps heat from one side to the other — used for small cooling applications (cool boxes, CPU coolers, some instrument chambers)." },
              ].map((ex) => (
                <div key={ex.item} className="flex gap-3 text-xs">
                  <span className="mt-0.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-red-400" />
                  <div>
                    <span className="text-foreground font-medium">{ex.item} — </span>
                    <span className="text-muted-foreground">{ex.detail}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Thermocouple colour codes */}
            <div>
              <p className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wider">International Thermocouple Colour Codes</p>
              <div className="overflow-x-auto rounded-xl border border-white/8">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-white/8 bg-background/40">
                      <th className="text-left py-2 px-3 font-semibold text-muted-foreground">Type</th>
                      <th className="text-left py-2 px-3 font-semibold text-muted-foreground">Materials</th>
                      <th className="text-left py-2 px-3 font-semibold text-muted-foreground">ANSI (US)</th>
                      <th className="text-left py-2 px-3 font-semibold text-muted-foreground">BS (UK)</th>
                      <th className="text-left py-2 px-3 font-semibold text-muted-foreground">IEC (Europe)</th>
                      <th className="text-left py-2 px-3 font-semibold text-muted-foreground">Range (°C)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {[
                      { type: "J", materials: "Iron / Constantan", ansi: "Black overall; White(+), Red(−)", bs: "Black overall; Yellow(+), Blue(−)", iec: "Black overall; White(+), Blue(−)", range: "−40 to +750" },
                      { type: "K", materials: "Chromel / Alumel", ansi: "Yellow overall; Yellow(+), Red(−)", bs: "Red overall; Brown(+), Blue(−)", iec: "Green overall; Green(+), White(−)", range: "−200 to +1260" },
                      { type: "T", materials: "Copper / Constantan", ansi: "Blue overall; Blue(+), Red(−)", bs: "Blue overall; White(+), Blue(−)", iec: "Brown overall; Brown(+), White(−)", range: "−200 to +350" },
                      { type: "E", materials: "Chromel / Constantan", ansi: "Purple overall; Purple(+), Red(−)", bs: "Brown overall; Brown(+), Blue(−)", iec: "Purple overall; Violet(+), White(−)", range: "−40 to +900" },
                      { type: "N", materials: "Nicrosil / Nisil", ansi: "Orange overall; Orange(+), Red(−)", bs: "—", iec: "Pink overall; Pink(+), White(−)", range: "−200 to +1300" },
                      { type: "S / R", materials: "Pt-Rh / Platinum", ansi: "Green overall; Black(+), Red(−)", bs: "Orange overall; Orange(+), Blue(−)", iec: "Orange overall; Orange(+), White(−)", range: "0 to +1450" },
                      { type: "B", materials: "Pt-30%Rh / Pt-6%Rh", ansi: "Grey overall; Grey(+), Red(−)", bs: "—", iec: "Grey overall; Grey(+), Grey(−)", range: "+200 to +1700" },
                    ].map((row) => (
                      <tr key={row.type}>
                        <td className="py-2 px-3 font-mono font-bold text-red-300">Type {row.type}</td>
                        <td className="py-2 px-3 text-foreground">{row.materials}</td>
                        <td className="py-2 px-3 text-muted-foreground">{row.ansi}</td>
                        <td className="py-2 px-3 text-muted-foreground">{row.bs}</td>
                        <td className="py-2 px-3 text-muted-foreground">{row.iec}</td>
                        <td className="py-2 px-3 font-mono text-primary">{row.range}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Type K is the most commonly used thermocouple in HVAC/R — wide range, reliable, and low cost. Always check the applicable standard (ANSI, IEC, or AS/NZS) before selecting extension cables.
              </p>
            </div>

            <div className="rounded-lg p-3 border border-red-400/20 bg-red-400/5 text-xs">
              <span className="font-semibold text-red-400">Industry application: </span>
              <span className="text-muted-foreground">Thermocouples are used as flame sensors in gas heaters and furnaces — the EMF produced by the pilot flame holds open a gas safety valve (millivolt valve). If the flame fails, the EMF drops and the valve closes automatically, preventing unburned gas release.</span>
            </div>
          </div>

          {/* ── 04 PHOTOELECTRIC ── */}
          <div className="rounded-xl border border-amber-400/20 bg-amber-400/5 p-5 space-y-5">
            <div className="flex items-start gap-3">
              <Sun className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
              <div>
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="font-mono text-xs font-bold opacity-50 text-amber-400">04</span>
                  <h3 className="font-semibold text-sm text-amber-400">Photoelectric (Photovoltaic) — 1954</h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Photons (light particles) striking a semiconductor material — typically silicon — dislodge electrons, creating electron-hole pairs. The built-in electric field at the <span className="text-foreground font-medium">p-n junction</span> separates the charges, producing an EMF. The first practical silicon solar cell was demonstrated in 1954.
                </p>
              </div>
            </div>

            {/* Solar cell SVG */}
            <div className="bg-background/40 border border-white/8 rounded-xl p-4">
              <p className="text-xs font-semibold text-muted-foreground mb-3 text-center">Solar Cell (Photovoltaic Cell) — Cross Section</p>
              <SolarCellSVG />
            </div>

            <div className="space-y-2">
              {[
                { item: "Solar cell (PV cell)", detail: "A single photovoltaic cell produces approx. 0.5–0.6 V DC. Cells wired in series form modules (panels); panels in series/parallel form arrays." },
                { item: "Solar panel array", detail: "Residential: typically 5–13 kW. Commercial: hundreds of kW to MW-scale. Output varies with solar irradiance (W/m²), temperature, and panel angle." },
                { item: "Photodiode / phototransistor", detail: "Small-scale photoelectric devices used as sensors — light level detection, optical encoders, flame detectors." },
              ].map((ex) => (
                <div key={ex.item} className="flex gap-3 text-xs">
                  <span className="mt-0.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-amber-400" />
                  <div><span className="text-foreground font-medium">{ex.item} — </span><span className="text-muted-foreground">{ex.detail}</span></div>
                </div>
              ))}
            </div>

            {/* EM Spectrum */}
            <div>
              <p className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wider">Electromagnetic Spectrum</p>
              <p className="text-xs text-muted-foreground mb-3">Photovoltaic cells respond to the visible and near-infrared portion of the electromagnetic spectrum. The spectrum spans from low-energy, long-wavelength non-ionising radiation through to high-energy, short-wavelength ionising radiation:</p>
              <div className="overflow-x-auto">
                <div className="flex rounded-xl overflow-hidden border border-white/8 min-w-max">
                  {[
                    { name: "Radio Waves", colour: "bg-purple-900", text: "text-purple-300", range: "km–mm", ion: false },
                    { name: "Microwave", colour: "bg-indigo-900", text: "text-indigo-300", range: "mm–cm", ion: false },
                    { name: "Infrared", colour: "bg-red-900", text: "text-red-300", range: "700nm–1mm", ion: false },
                    { name: "Visible", colour: "bg-gradient-to-r from-red-800 via-green-800 to-blue-800", text: "text-white", range: "380–700nm", ion: false },
                    { name: "Ultraviolet", colour: "bg-blue-900", text: "text-blue-300", range: "10–380nm", ion: true },
                    { name: "X-Ray", colour: "bg-cyan-900", text: "text-cyan-300", range: "0.01–10nm", ion: true },
                    { name: "Gamma Rays", colour: "bg-green-900", text: "text-green-300", range: "< 0.01nm", ion: true },
                  ].map((band) => (
                    <div key={band.name} className={cn("px-3 py-3 text-center flex-1", band.colour)}>
                      <p className={cn("text-xs font-semibold", band.text)}>{band.name}</p>
                      <p className="text-xs text-white/60 mt-1">{band.range}</p>
                      {band.ion && <p className="text-xs text-yellow-300 mt-1">⚠ ionising</p>}
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-xs text-muted-foreground mt-1 px-1">
                  <span>← longer wavelength, lower energy</span>
                  <span>shorter wavelength, higher energy →</span>
                </div>
              </div>
            </div>

            <div className="rounded-lg p-3 border border-amber-400/20 bg-amber-400/5 text-xs">
              <span className="font-semibold text-amber-400">Industry application: </span>
              <span className="text-muted-foreground">Solar PV is increasingly used to offset electrical consumption of HVAC systems, which are often the largest energy load in commercial buildings. Some split systems are marketed with DC-coupled solar compatibility. PV output must be converted from DC to AC by an inverter before use in standard AC circuits.</span>
            </div>
          </div>

          {/* ── 05 PIEZOELECTRIC ── */}
          <div className="rounded-xl border border-purple-400/20 bg-purple-400/5 p-5 space-y-5">
            <div className="flex items-start gap-3">
              <Zap className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
              <div>
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="font-mono text-xs font-bold opacity-50 text-purple-400">05</span>
                  <h3 className="font-semibold text-sm text-purple-400">Piezoelectric — 1880</h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Certain crystalline materials produce an EMF when mechanically stressed. The <span className="text-foreground font-medium">piezoelectric effect</span> results from the linear electromechanical interaction between the mechanical and electrical states in crystalline materials — pressure applied to opposite faces of the crystal produces a voltage. The effect is <span className="text-foreground font-medium">reversible</span>: applying a voltage causes mechanical deformation; applying mechanical stress produces a voltage.
                </p>
              </div>
            </div>

            {/* Three stress modes */}
            <div>
              <p className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wider">Stress Modes — Three Types</p>
              <div className="grid grid-cols-3 gap-3">
                {[
                  {
                    mode: "Compression", colour: "text-purple-300", border: "border-purple-400/20",
                    desc: "Force applied perpendicular to the electrode surfaces — squeezing or stretching the crystal through its thickness. Most common configuration.",
                    svg: (
                      <svg viewBox="0 0 80 80" className="w-16 h-16 mx-auto">
                        <rect x="20" y="25" width="40" height="30" rx="3" fill="#581c87" stroke="#a855f7" strokeWidth="1.5" />
                        <line x1="40" y1="5" x2="40" y2="22" stroke="#a855f7" strokeWidth="2" markerEnd="url(#arrowDown)" />
                        <line x1="40" y1="75" x2="40" y2="58" stroke="#a855f7" strokeWidth="2" markerEnd="url(#arrowUp)" />
                        <defs>
                          <marker id="arrowDown" markerWidth="6" markerHeight="6" refX="3" refY="6" orient="auto"><path d="M0,0 L6,0 L3,6 z" fill="#a855f7" /></marker>
                          <marker id="arrowUp" markerWidth="6" markerHeight="6" refX="3" refY="0" orient="auto"><path d="M0,6 L6,6 L3,0 z" fill="#a855f7" /></marker>
                        </defs>
                        <text x="40" y="44" textAnchor="middle" fill="#d8b4fe" fontSize="8">Crystal</text>
                      </svg>
                    ),
                  },
                  {
                    mode: "Flexural", colour: "text-purple-300", border: "border-purple-400/20",
                    desc: "Force applied to bend or flex the crystal. Used in bending actuators, vibration sensors, and buzzers. Produces larger deflection at lower force.",
                    svg: (
                      <svg viewBox="0 0 80 80" className="w-16 h-16 mx-auto">
                        <path d="M10 40 Q40 20 70 40" fill="none" stroke="#a855f7" strokeWidth="3" strokeLinecap="round" />
                        <line x1="40" y1="5" x2="40" y2="19" stroke="#a855f7" strokeWidth="2" markerEnd="url(#arrowDown2)" />
                        <defs>
                          <marker id="arrowDown2" markerWidth="6" markerHeight="6" refX="3" refY="6" orient="auto"><path d="M0,0 L6,0 L3,6 z" fill="#a855f7" /></marker>
                        </defs>
                        <text x="40" y="58" textAnchor="middle" fill="#d8b4fe" fontSize="8">Bending</text>
                      </svg>
                    ),
                  },
                  {
                    mode: "Shear", colour: "text-purple-300", border: "border-purple-400/20",
                    desc: "Force applied parallel to the electrode surfaces, causing the crystal layers to slide past each other. Used in high-frequency applications and accelerometers.",
                    svg: (
                      <svg viewBox="0 0 80 80" className="w-16 h-16 mx-auto">
                        <rect x="20" y="30" width="40" height="20" rx="3" fill="#581c87" stroke="#a855f7" strokeWidth="1.5" />
                        <line x1="40" y1="30" x2="55" y2="15" stroke="#a855f7" strokeWidth="2" markerEnd="url(#arrowShear)" />
                        <line x1="40" y1="50" x2="25" y2="65" stroke="#a855f7" strokeWidth="2" markerEnd="url(#arrowShear2)" />
                        <defs>
                          <marker id="arrowShear" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L6,3 z" fill="#a855f7" /></marker>
                          <marker id="arrowShear2" markerWidth="6" markerHeight="6" refX="0" refY="3" orient="auto"><path d="M6,0 L6,6 L0,3 z" fill="#a855f7" /></marker>
                        </defs>
                        <text x="40" y="75" textAnchor="middle" fill="#d8b4fe" fontSize="8">Shear</text>
                      </svg>
                    ),
                  },
                ].map((m) => (
                  <div key={m.mode} className={cn("bg-background/40 border rounded-xl p-4 text-center space-y-2", m.border)}>
                    {m.svg}
                    <p className={cn("text-xs font-semibold", m.colour)}>{m.mode}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{m.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* PZT material */}
            <div className="bg-background/40 border border-white/8 rounded-xl p-4">
              <p className="text-xs font-semibold text-purple-300 mb-2">Key Piezoelectric Materials</p>
              <div className="space-y-2 text-xs text-muted-foreground">
                <div className="flex gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0 mt-1.5" /><div><span className="text-foreground font-medium">Quartz (SiO₂)</span> — Natural piezoelectric crystal. Very stable and precise. Used in oscillators and frequency standards (watches, clocks, radio equipment).</div></div>
                <div className="flex gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0 mt-1.5" /><div><span className="text-foreground font-medium">PZT — Lead Zirconate Titanate (Pb[Zr,Ti]O₃)</span> — The most widely used synthetic piezoelectric ceramic. Much stronger piezoelectric effect than quartz. Used in igniters, actuators, sensors, and ultrasonic transducers.</div></div>
                <div className="flex gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0 mt-1.5" /><div><span className="text-foreground font-medium">PVDF — Polyvinylidene Fluoride</span> — Flexible piezoelectric polymer film. Used in pressure sensors, hydrophones, and medical imaging.</div></div>
              </div>
            </div>

            {/* Gas lighter example */}
            <div className="bg-background/40 border border-white/8 rounded-xl p-4">
              <p className="text-xs font-semibold text-purple-300 mb-2">Example: Piezoelectric Gas Lighter / Igniter</p>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                A sharp mechanical strike on a PZT crystal produces a high-voltage pulse (up to 15,000–20,000 V) sufficient to create a spark across a small air gap. The entire energy conversion from mechanical shock to electrical spark happens in milliseconds — no battery or external power source is required.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <p className="text-xs font-semibold text-muted-foreground mb-2">How it works:</p>
                  <ol className="space-y-1">
                    {[
                      "Button depressed → compresses spring",
                      "Spring releases → hammer strikes PZT crystal",
                      "Compression of crystal → high-voltage pulse generated",
                      "Voltage jumps across spark gap near gas nozzle",
                      "Spark ignites the gas-air mixture",
                    ].map((s, i) => (
                      <li key={i} className="flex gap-2 text-xs text-muted-foreground">
                        <span className="text-purple-400 font-bold flex-shrink-0">{i + 1}.</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ol>
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground mb-2">Other applications:</p>
                  <div className="space-y-1">
                    {[
                      { app: "Microphones", detail: "Sound waves flex a piezo disc → millivolt output" },
                      { app: "Ultrasonic flow meters", detail: "Piezo transducers measure flow via transit time" },
                      { app: "Vibration sensors (accelerometers)", detail: "Detect machine vibration and imbalance" },
                      { app: "Inkjet print heads", detail: "Precise piezo actuation ejects ink droplets" },
                    ].map((a) => (
                      <div key={a.app} className="flex gap-2 text-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0 mt-1.5" />
                        <div><span className="text-foreground font-medium">{a.app} — </span><span className="text-muted-foreground">{a.detail}</span></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg p-3 border border-purple-400/20 bg-purple-400/5 text-xs">
              <span className="font-semibold text-purple-400">Industry application: </span>
              <span className="text-muted-foreground">Piezoelectric igniters are used in gas ducted heaters and hot water systems to ignite the burner without a standing pilot flame, improving efficiency and eliminating the need for a thermocouple pilot valve. Ultrasonic piezoelectric transducers are used in clamp-on flow meters for refrigerant and chilled water measurement.</span>
            </div>
          </div>

          {/* ── 06 FRICTION / TRIBOELECTRIC ── */}
          <div className="rounded-xl border border-green-400/20 bg-green-400/5 p-5 space-y-4">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <div>
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="font-mono text-xs font-bold opacity-50 text-green-400">06</span>
                  <h3 className="font-semibold text-sm text-green-400">Friction (Triboelectric)</h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  When two different materials are rubbed together, electrons are transferred from one surface to the other, leaving one surface positively charged and the other negatively charged. This creates a static EMF. The triboelectric series ranks materials by their tendency to gain or lose electrons on contact.
                </p>
              </div>
            </div>

            {/* Static electricity example */}
            <div className="flex gap-3 text-xs">
              <span className="mt-0.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-green-400" />
              <div><span className="text-foreground font-medium">Static electricity buildup — </span><span className="text-muted-foreground">Produced by friction between dissimilar materials — walking on carpet, belts running on pulleys, plastic components rubbing together.</span></div>
            </div>

            {/* ── Van de Graaff biography + generator ── */}
            <div className="bg-background/40 border border-white/8 rounded-xl overflow-hidden">
              {/* Header */}
              <div className="flex items-start gap-4 p-4 border-b border-white/8">
                {/* Portrait placeholder */}
                <div className="w-14 h-14 rounded-xl bg-green-400/10 border border-green-400/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-green-400 text-xl font-bold font-display">VdG</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">Robert Jemison Van de Graaff</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">1901 – 1967 &nbsp;·&nbsp; American physicist &amp; inventor</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {["MIT", "Rhodes Scholar — Oxford", "University of Alabama", "Sorbonne, Paris"].map((t) => (
                      <span key={t} className="bg-green-400/10 border border-green-400/20 text-green-300 text-xs px-2 py-0.5 rounded-full">{t}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-4 space-y-4">
                {/* Biography */}
                <div className="space-y-2 text-xs text-muted-foreground leading-relaxed">
                  <p>
                    Robert Jemison Van de Graaff was born on <span className="text-foreground font-medium">20 December 1901</span> in Tuscumbia, Alabama, USA. He completed a Bachelor of Science and Master of Science in Mechanical Engineering at the University of Alabama (1922–1923) before winning a <span className="text-foreground font-medium">Rhodes Scholarship to Oxford University</span>, where he studied physics and completed his PhD in 1928. He also spent time at the Sorbonne in Paris during this period.
                  </p>
                  <p>
                    At Oxford he attended lectures by the physicist <span className="text-foreground font-medium">Ernest Rutherford</span>, who had recently split the atom. Rutherford's work convinced Van de Graaff of the need for a machine capable of producing very high voltages to accelerate charged particles — a tool that would allow physicists to probe the atomic nucleus.
                  </p>
                  <p>
                    He conceived the generator that bears his name while at <span className="text-foreground font-medium">Princeton in 1929</span>, first demonstrated it at MIT in 1931, and then developed progressively more powerful versions throughout his career. He went on to found the <span className="text-foreground font-medium">High Voltage Engineering Corporation (HVEC)</span> in 1946, which built Van de Graaff accelerators used worldwide in nuclear physics, cancer radiotherapy, and materials analysis. Van de Graaff died on <span className="text-foreground font-medium">16 January 1967</span> in Boston, Massachusetts.
                  </p>
                </div>

                {/* Generator — how it works + SVG side by side */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* SVG diagram */}
                  <div className="bg-black/20 rounded-xl p-4">
                    <p className="text-xs font-semibold text-muted-foreground mb-3 text-center">Van de Graaff Generator</p>
                    <svg viewBox="0 0 200 320" className="w-full max-w-xs mx-auto" aria-label="Van de Graaff generator diagram">
                      {/* Ground line */}
                      <line x1="40" y1="300" x2="160" y2="300" stroke="#64748b" strokeWidth="2" />
                      <line x1="55" y1="306" x2="145" y2="306" stroke="#64748b" strokeWidth="1.5" />
                      <line x1="70" y1="312" x2="130" y2="312" stroke="#64748b" strokeWidth="1" />
                      <text x="100" y="326" textAnchor="middle" fill="#64748b" fontSize="8">Earth / Ground</text>

                      {/* Insulating column */}
                      <rect x="88" y="120" width="24" height="170" rx="4" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1" />
                      <text x="100" y="290" textAnchor="middle" fill="#60a5fa" fontSize="7">Insulating</text>
                      <text x="100" y="298" textAnchor="middle" fill="#60a5fa" fontSize="7">column</text>

                      {/* Belt — left and right sides going up */}
                      <line x1="94" y1="115" x2="94" y2="270" stroke="#a3e635" strokeWidth="3" strokeLinecap="round" />
                      <line x1="106" y1="115" x2="106" y2="270" stroke="#84cc16" strokeWidth="3" strokeLinecap="round" />

                      {/* Lower roller */}
                      <ellipse cx="100" cy="272" rx="16" ry="8" fill="#334155" stroke="#94a3b8" strokeWidth="1.5" />
                      <text x="100" y="275" textAnchor="middle" fill="#94a3b8" fontSize="7">Motor roller</text>

                      {/* Belt charge arrows going up (left side) */}
                      {[240, 210, 180, 150].map((y) => (
                        <line key={y} x1="90" y1={y + 10} x2="90" y2={y} stroke="#f59e0b" strokeWidth="1" markerEnd="url(#arrowUp2)" />
                      ))}
                      <defs>
                        <marker id="arrowUp2" markerWidth="5" markerHeight="5" refX="2.5" refY="0" orient="auto">
                          <path d="M0,5 L5,5 L2.5,0 z" fill="#f59e0b" />
                        </marker>
                        <marker id="arrowDown2" markerWidth="5" markerHeight="5" refX="2.5" refY="5" orient="auto">
                          <path d="M0,0 L5,0 L2.5,5 z" fill="#94a3b8" />
                        </marker>
                      </defs>

                      {/* Upper roller inside dome */}
                      <ellipse cx="100" cy="128" rx="12" ry="6" fill="#475569" stroke="#94a3b8" strokeWidth="1" />

                      {/* Metal dome (hollow sphere) */}
                      <circle cx="100" cy="75" r="55" fill="#1e293b" stroke="#34d399" strokeWidth="2" />
                      <circle cx="100" cy="75" r="52" fill="none" stroke="#34d399" strokeWidth="0.5" opacity="0.4" />
                      <text x="100" y="68" textAnchor="middle" fill="#34d399" fontSize="9" fontWeight="bold">Metal</text>
                      <text x="100" y="80" textAnchor="middle" fill="#34d399" fontSize="9" fontWeight="bold">Dome</text>

                      {/* Charge accumulation — + signs on dome surface */}
                      {[
                        [100, 22], [138, 38], [152, 75], [138, 112],
                        [62, 38], [48, 75], [62, 112],
                      ].map(([x, y]) => (
                        <text key={`${x}-${y}`} x={x} y={y} textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="bold">+</text>
                      ))}

                      {/* Comb of points inside dome */}
                      {[90, 95, 100, 105, 110].map((x) => (
                        <line key={x} x1={x} y1="120" x2={x} y2="100" stroke="#f59e0b" strokeWidth="1" />
                      ))}
                      <text x="130" y="112" fill="#f59e0b" fontSize="7">charge</text>
                      <text x="130" y="120" fill="#f59e0b" fontSize="7">comb</text>

                      {/* Spark discharge */}
                      <path d="M155 75 L168 68 L162 75 L175 65" fill="none" stroke="#fbbf24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <text x="178" y="72" fill="#fbbf24" fontSize="7">spark</text>

                      {/* Voltage label */}
                      <text x="100" y="165" textAnchor="middle" fill="#94a3b8" fontSize="7">Belt carries</text>
                      <text x="100" y="174" textAnchor="middle" fill="#f59e0b" fontSize="7">+ charge up</text>
                    </svg>
                  </div>

                  {/* How it works — steps */}
                  <div className="space-y-3">
                    <p className="text-xs font-semibold text-green-300">How the generator works</p>
                    <ol className="space-y-2">
                      {[
                        { n: "1", step: "A motor drives an insulating belt (originally silk, later rubber or nylon) between a lower metal roller and an upper roller inside the dome." },
                        { n: "2", step: "The lower roller rubs against the belt — the triboelectric effect transfers electrons from the belt to the roller, leaving the belt positively charged." },
                        { n: "3", step: "The moving belt carries the positive charge upward through the insulating column into the interior of the hollow metal dome." },
                        { n: "4", step: "A comb of sharp metal points inside the dome strips the charge off the belt and deposits it onto the inner surface of the dome." },
                        { n: "5", step: "By Gauss's Law, charge on a conductor migrates to the outer surface. The charge accumulates there, building an increasingly high electric potential." },
                        { n: "6", step: "When the electric field strength is sufficient, corona discharge or sparks occur — the accumulated charge is released. Laboratory machines reach millions of volts." },
                      ].map((s) => (
                        <li key={s.n} className="flex gap-3 text-xs">
                          <span className="w-5 h-5 rounded-full bg-green-400/20 border border-green-400/30 text-green-300 text-xs font-bold flex items-center justify-center flex-shrink-0">{s.n}</span>
                          <span className="text-muted-foreground leading-relaxed">{s.step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>

                {/* Applications */}
                <div>
                  <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wider">Applications &amp; Legacy</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {[
                      {
                        app: "Nuclear Physics Research",
                        colour: "text-blue-400", border: "border-blue-400/20", bg: "bg-blue-400/5",
                        detail: "The generator's original purpose — accelerating protons and other charged particles to bombard atomic nuclei, enabling the first systematic studies of nuclear structure in the 1930s–40s.",
                      },
                      {
                        app: "Particle Accelerators",
                        colour: "text-purple-400", border: "border-purple-400/20", bg: "bg-purple-400/5",
                        detail: "The Tandem Van de Graaff accelerator (developed at MIT) uses two stages to reach higher energies. Many universities worldwide operated Van de Graaff accelerators for nuclear and materials research.",
                      },
                      {
                        app: "Medical &amp; Industrial",
                        colour: "text-green-400", border: "border-green-400/20", bg: "bg-green-400/5",
                        detail: "High-energy X-ray therapy for cancer treatment; sterilisation of medical equipment; semiconductor materials testing; and the classic science museum demonstration of static electricity.",
                      },
                    ].map((a) => (
                      <div key={a.app} className={cn("rounded-xl border p-3 space-y-1.5", a.border, a.bg)}>
                        <p className={cn("text-xs font-semibold", a.colour)} dangerouslySetInnerHTML={{ __html: a.app }} />
                        <p className="text-xs text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: a.detail }} />
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            <div className="rounded-lg p-3 border border-green-400/20 bg-green-400/5 text-xs">
              <span className="font-semibold text-green-400">Industry application: </span>
              <span className="text-muted-foreground">Triboelectric static is a hazard when handling refrigerant cylinders and flammable gases. Bonding and earthing procedures are used to dissipate static charges safely before transfer operations. Dust accumulation on belts in air handling units can also generate static. AS/NZS 60079 covers electrostatic hazard management in flammable atmospheres.</span>
            </div>
          </div>

        </div>
      </section>

      {/* ── Summary table ── */}
      <section className="bg-card border border-white/8 rounded-2xl overflow-hidden">
        <div className="flex items-center gap-2 px-6 py-4 border-b border-white/8">
          <Atom className="w-4 h-4 text-primary" />
          <h2 className="font-semibold text-foreground">Summary — EMF Sources at a Glance</h2>
        </div>
        <div className="p-6 overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-white/8">
                <th className="text-left py-2 pr-4 font-semibold text-muted-foreground">Source</th>
                <th className="text-left py-2 pr-4 font-semibold text-muted-foreground">Year</th>
                <th className="text-left py-2 pr-4 font-semibold text-muted-foreground">Energy Converted</th>
                <th className="text-left py-2 pr-4 font-semibold text-muted-foreground">Output</th>
                <th className="text-left py-2 font-semibold text-muted-foreground">Typical Application</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                { source: "Chemical", year: "1800", energy: "Chemical → Electrical", output: "DC", app: "Batteries, accumulators, UPS" },
                { source: "Electromagnetic Induction", year: "1831", energy: "Mechanical → Electrical", output: "AC (or DC via commutator)", app: "Power grid generators, transformers" },
                { source: "Thermoelectric (Seebeck)", year: "1834", energy: "Heat → Electrical", output: "DC (µV–mV range)", app: "Thermocouples, TEGs, flame sensors" },
                { source: "Photoelectric (Photovoltaic)", year: "1954", energy: "Light → Electrical", output: "DC", app: "Solar panels, PV systems, sensors" },
                { source: "Piezoelectric", year: "1880", energy: "Mechanical pressure → Electrical", output: "DC pulse (high voltage)", app: "Gas igniters, vibration sensors, flow meters" },
                { source: "Friction (Triboelectric)", year: "Ancient", energy: "Mechanical friction → Electrical", output: "DC static (very high V, low I)", app: "Static electricity — mostly a hazard" },
              ].map((row) => (
                <tr key={row.source}>
                  <td className="py-2 pr-4 text-foreground font-medium">{row.source}</td>
                  <td className="py-2 pr-4 font-mono text-muted-foreground">{row.year}</td>
                  <td className="py-2 pr-4 text-muted-foreground">{row.energy}</td>
                  <td className="py-2 pr-4 font-mono text-primary">{row.output}</td>
                  <td className="py-2 text-muted-foreground">{row.app}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

    </div>
  );
}
