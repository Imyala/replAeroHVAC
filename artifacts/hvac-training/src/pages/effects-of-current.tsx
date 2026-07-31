import { Zap, Flame, Magnet, FlaskConical, AlertTriangle, Info, ShieldAlert } from "lucide-react";

/* ─── Inline SVG Diagrams ─────────────────────────────────────────────────── */

function ElectroplatingDiagram() {
  return (
    <svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-md mx-auto">
      {/* Battery at top */}
      <text x="180" y="16" textAnchor="middle" fill="#e2e8f0" fontSize="11" fontWeight="bold">BATTERY</text>
      <line x1="155" y1="22" x2="163" y2="22" stroke="#e2e8f0" strokeWidth="2.5"/>
      <line x1="163" y1="18" x2="163" y2="26" stroke="#e2e8f0" strokeWidth="1"/>
      <line x1="167" y1="22" x2="175" y2="22" stroke="#e2e8f0" strokeWidth="2.5"/>
      <line x1="175" y1="16" x2="175" y2="28" stroke="#e2e8f0" strokeWidth="2"/>
      <line x1="179" y1="22" x2="187" y2="22" stroke="#e2e8f0" strokeWidth="2.5"/>
      <line x1="187" y1="18" x2="187" y2="26" stroke="#e2e8f0" strokeWidth="1"/>
      <line x1="191" y1="22" x2="200" y2="22" stroke="#e2e8f0" strokeWidth="2.5"/>
      {/* Wires to electrodes */}
      <line x1="155" y1="22" x2="100" y2="22" stroke="#94a3b8" strokeWidth="1.5"/>
      <line x1="100" y1="22" x2="100" y2="60" stroke="#ef4444" strokeWidth="2"/>
      <line x1="200" y1="22" x2="260" y2="22" stroke="#94a3b8" strokeWidth="1.5"/>
      <line x1="260" y1="22" x2="260" y2="60" stroke="#3b82f6" strokeWidth="2"/>
      {/* Labels on wires */}
      <text x="80" y="20" fill="#fca5a5" fontSize="9" fontWeight="bold">ANODE (+)</text>
      <text x="213" y="20" fill="#93c5fd" fontSize="9" fontWeight="bold">CATHODE (−)</text>
      {/* Tank outline */}
      <rect x="55" y="70" width="250" height="155" rx="5" fill="none" stroke="#38bdf8" strokeWidth="1.5"/>
      {/* Electrolyte (teal) */}
      <rect x="57" y="115" width="246" height="108" rx="3" fill="#083344" opacity="0.8"/>
      {/* Anode electrode - red */}
      <rect x="86" y="60" width="22" height="110" rx="2" fill="#dc2626"/>
      <text x="97" y="185" textAnchor="middle" fill="#fca5a5" fontSize="9">Anode</text>
      {/* Cathode electrode - blue */}
      <rect x="252" y="60" width="22" height="110" rx="2" fill="#2563eb"/>
      <text x="263" y="185" textAnchor="middle" fill="#93c5fd" fontSize="9">Cathode</text>
      {/* Anion arrows (A−) moving toward anode (right to left) */}
      <text x="175" y="138" textAnchor="middle" fill="#86efac" fontSize="8.5" fontWeight="bold">A(−) ANIONS</text>
      <line x1="220" y1="133" x2="135" y2="133" stroke="#86efac" strokeWidth="1" markerEnd="url(#arrowG)"/>
      {/* Cation arrows (C+) moving toward cathode (left to right) */}
      <text x="175" y="158" textAnchor="middle" fill="#fbbf24" fontSize="8.5" fontWeight="bold">C(+) CATIONS</text>
      <line x1="135" y1="165" x2="220" y2="165" stroke="#fbbf24" strokeWidth="1" markerEnd="url(#arrowY)"/>
      {/* Electrolyte label */}
      <text x="180" y="205" textAnchor="middle" fill="#7dd3fc" fontSize="9">Electrolyte Solution (CuSO₄)</text>
      {/* Arrow defs */}
      <defs>
        <marker id="arrowG" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#86efac"/>
        </marker>
        <marker id="arrowY" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#fbbf24"/>
        </marker>
      </defs>
    </svg>
  );
}

function LeadAcidCellDiagram() {
  return (
    <svg viewBox="0 0 420 270" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-lg mx-auto">
      {/* Title row */}
      <text x="80" y="18" textAnchor="middle" fill="#fca5a5" fontSize="10" fontWeight="bold">Anode +</text>
      <text x="210" y="18" textAnchor="middle" fill="#e2e8f0" fontSize="10" fontWeight="bold">Charging</text>
      <text x="340" y="18" textAnchor="middle" fill="#93c5fd" fontSize="10" fontWeight="bold">− Cathode</text>
      {/* Supply dots */}
      <circle cx="185" cy="28" r="4" fill="#e2e8f0"/>
      <circle cx="235" cy="28" r="4" fill="#e2e8f0"/>
      <text x="210" y="42" textAnchor="middle" fill="#94a3b8" fontSize="9">Supply</text>
      {/* Wire top */}
      <line x1="80" y1="28" x2="185" y2="28" stroke="#ef4444" strokeWidth="1.5"/>
      <line x1="235" y1="28" x2="340" y2="28" stroke="#3b82f6" strokeWidth="1.5"/>
      {/* 2e labels */}
      <text x="120" y="24" fill="#fca5a5" fontSize="9">2e</text>
      <line x1="120" y1="26" x2="80" y2="26" stroke="#fca5a5" strokeWidth="1" markerEnd="url(#arrowR)"/>
      <text x="295" y="24" fill="#93c5fd" fontSize="9">2e</text>
      <line x1="295" y1="26" x2="340" y2="26" stroke="#93c5fd" strokeWidth="1" markerEnd="url(#arrowB)"/>
      {/* Left electrode box */}
      <rect x="30" y="50" width="100" height="170" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="1.5"/>
      <text x="80" y="80" textAnchor="middle" fill="#fca5a5" fontSize="9">PbSO₄</text>
      <text x="55" y="115" textAnchor="middle" fill="#fca5a5" fontSize="9">Pb²⁺</text>
      <text x="55" y="175" textAnchor="middle" fill="#c4b5fd" fontSize="9">PbO₂</text>
      {/* Left electrode wire down */}
      <line x1="80" y1="50" x2="80" y2="28" stroke="#ef4444" strokeWidth="1.5"/>
      {/* Centre dashed box */}
      <rect x="155" y="65" width="110" height="130" rx="4" fill="none" stroke="#475569" strokeWidth="1" strokeDasharray="5,3"/>
      <text x="210" y="85" textAnchor="middle" fill="#7dd3fc" fontSize="9">H₂SO₄</text>
      <line x1="210" y1="90" x2="210" y2="115" stroke="#7dd3fc" strokeWidth="1" markerEnd="url(#arrowC)"/>
      <text x="210" y="125" textAnchor="middle" fill="#a5b4fc" fontSize="9">SO₄²⁻</text>
      <line x1="185" y1="133" x2="160" y2="133" stroke="#a5b4fc" strokeWidth="1" markerEnd="url(#arrowLP)"/>
      <text x="210" y="148" textAnchor="middle" fill="#a5b4fc" fontSize="9">SO₄²⁻</text>
      <text x="210" y="165" textAnchor="middle" fill="#fbbf24" fontSize="9">4H⁺</text>
      <line x1="235" y1="165" x2="260" y2="165" stroke="#fbbf24" strokeWidth="1" markerEnd="url(#arrowRP)"/>
      <text x="210" y="185" textAnchor="middle" fill="#86efac" fontSize="9">2H₂O</text>
      <line x1="210" y1="175" x2="210" y2="190" stroke="#86efac" strokeWidth="1" markerEnd="url(#arrowC)"/>
      {/* Right electrode box */}
      <rect x="290" y="50" width="100" height="170" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="1.5"/>
      <text x="340" y="80" textAnchor="middle" fill="#93c5fd" fontSize="9">PbSO₄</text>
      <text x="340" y="115" textAnchor="middle" fill="#93c5fd" fontSize="9">Pb²⁺</text>
      <text x="340" y="175" textAnchor="middle" fill="#7dd3fc" fontSize="9">Pb</text>
      {/* Right electrode wire */}
      <line x1="340" y1="50" x2="340" y2="28" stroke="#3b82f6" strokeWidth="1.5"/>
      {/* Charge/Discharge labels */}
      <text x="80" y="240" textAnchor="middle" fill="#c4b5fd" fontSize="8">Anode (charging)</text>
      <text x="210" y="240" textAnchor="middle" fill="#94a3b8" fontSize="8">Electrolyte</text>
      <text x="340" y="240" textAnchor="middle" fill="#7dd3fc" fontSize="8">Cathode (charging)</text>
      {/* Arrow defs */}
      <defs>
        <marker id="arrowR" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto"><path d="M0,0 L5,2.5 L0,5 Z" fill="#fca5a5"/></marker>
        <marker id="arrowB" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto"><path d="M0,0 L5,2.5 L0,5 Z" fill="#93c5fd"/></marker>
        <marker id="arrowC" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto"><path d="M0,0 L5,2.5 L0,5 Z" fill="#7dd3fc"/></marker>
        <marker id="arrowLP" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto"><path d="M0,0 L5,2.5 L0,5 Z" fill="#a5b4fc"/></marker>
        <marker id="arrowRP" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto"><path d="M0,0 L5,2.5 L0,5 Z" fill="#fbbf24"/></marker>
      </defs>
    </svg>
  );
}

function CurrentThresholdChart() {
  const zones = [
    { mA: "500+", label: "Cardiac Arrest", colour: "#1e1e1e", textCol: "#fca5a5", height: 48 },
    { mA: "100–500", label: "Ventricular Fibrillation", colour: "#7f1d1d", textCol: "#fca5a5", height: 44 },
    { mA: "25–100", label: "Irregular Heart Rhythm / Loss of Muscular Control", colour: "#991b1b", textCol: "#fecaca", height: 48 },
    { mA: "10–25", label: "Let-go Threshold (muscles 'frozen')", colour: "#b45309", textCol: "#fde68a", height: 44 },
    { mA: "5–10", label: "Muscular Contraction / Pain", colour: "#92400e", textCol: "#fde68a", height: 40 },
    { mA: "0.5–5", label: "Threshold of Perception (tingle)", colour: "#1c3d5a", textCol: "#7dd3fc", height: 36 },
  ];
  let y = 12;
  return (
    <svg viewBox="0 0 420 290" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-md mx-auto">
      <text x="210" y="10" textAnchor="middle" fill="#e2e8f0" fontSize="11" fontWeight="bold">Current Threshold Effects (Milliamperes)</text>
      {zones.map(({ mA, label, colour, textCol, height }) => {
        const block = (
          <g key={mA}>
            <rect x="0" y={y + 14} width="140" height={height} fill={colour} rx="2"/>
            <text x="70" y={y + 14 + height / 2 + 4} textAnchor="middle" fill={textCol} fontSize="9" fontWeight="bold">{mA} mA</text>
            <line x1="140" y1={y + 14 + height / 2} x2="155" y2={y + 14 + height / 2} stroke="#475569" strokeWidth="1"/>
            <foreignObject x="158" y={y + 12} width="260" height={height}>
              <div style={{ fontSize: "9px", color: textCol, lineHeight: "1.3", paddingTop: "4px" }}>{label}</div>
            </foreignObject>
          </g>
        );
        y += height;
        return block;
      })}
    </svg>
  );
}

function HealthyCircuitDiagram() {
  return (
    <svg viewBox="0 0 520 300" xmlns="http://www.w3.org/2000/svg" className="w-full">
      {/* Title */}
      <text x="200" y="16" fill="#e2e8f0" fontSize="11" fontWeight="bold">1. HEALTHY CIRCUIT</text>

      {/* Active conductor (red/brown) — left to right */}
      <text x="8" y="90" fill="#fca5a5" fontSize="10" fontWeight="bold">A</text>
      <circle cx="22" cy="87" r="5" fill="#fca5a5"/>
      <line x1="27" y1="87" x2="72" y2="87" stroke="#ef4444" strokeWidth="3"/>
      {/* switch X symbol */}
      <text x="74" y="91" fill="#94a3b8" fontSize="10">✕</text>
      <line x1="88" y1="87" x2="158" y2="87" stroke="#ef4444" strokeWidth="3"/>
      {/* through toroid */}
      <line x1="240" y1="87" x2="330" y2="87" stroke="#ef4444" strokeWidth="3"/>
      {/* arrow direction */}
      <polygon points="308,83 320,87 308,91" fill="#ef4444"/>
      <text x="322" y="82" fill="#fca5a5" fontSize="9">Iₐ</text>
      <line x1="330" y1="87" x2="390" y2="87" stroke="#ef4444" strokeWidth="3"/>
      {/* Appliance box */}
      <rect x="390" y="70" width="70" height="100" rx="6" fill="#1e3a5f" stroke="#38bdf8" strokeWidth="1.5"/>
      <text x="425" y="118" textAnchor="middle" fill="#7dd3fc" fontSize="9">APPLIANCE</text>
      <rect x="406" y="100" width="16" height="12" rx="1" fill="#38bdf8" opacity="0.5"/>
      <rect x="406" y="115" width="16" height="12" rx="1" fill="#38bdf8" opacity="0.5"/>

      {/* Neutral conductor (blue) — right to left */}
      <text x="8" y="165" fill="#93c5fd" fontSize="10" fontWeight="bold">N</text>
      <circle cx="22" cy="162" r="5" fill="#3b82f6"/>
      <line x1="27" y1="162" x2="72" y2="162" stroke="#3b82f6" strokeWidth="3"/>
      <text x="74" y="166" fill="#94a3b8" fontSize="10">✕</text>
      <line x1="88" y1="162" x2="158" y2="162" stroke="#3b82f6" strokeWidth="3"/>
      <line x1="240" y1="162" x2="330" y2="162" stroke="#3b82f6" strokeWidth="3"/>
      {/* arrow direction (going right toward appliance, but returning current is actually going right as well in neutral) */}
      <polygon points="308,158 320,162 308,166" fill="#3b82f6"/>
      <text x="322" y="178" fill="#93c5fd" fontSize="9">Iₙ</text>
      <line x1="330" y1="162" x2="390" y2="162" stroke="#3b82f6" strokeWidth="3"/>

      {/* Earth conductor (green/yellow) */}
      <text x="8" y="205" fill="#86efac" fontSize="10" fontWeight="bold">E</text>
      <line x1="22" y1="200" x2="22" y2="230" stroke="#65a30d" strokeWidth="3" strokeDasharray="4,2"/>
      <line x1="10" y1="230" x2="35" y2="230" stroke="#65a30d" strokeWidth="2"/>
      <line x1="13" y1="236" x2="32" y2="236" stroke="#65a30d" strokeWidth="1.5"/>
      <line x1="16" y1="242" x2="29" y2="242" stroke="#65a30d" strokeWidth="1"/>

      {/* Toroid core — large oval */}
      <ellipse cx="200" cy="125" rx="42" ry="52" fill="none" stroke="#b45309" strokeWidth="12" opacity="0.85"/>
      <text x="200" y="34" textAnchor="middle" fill="#fbbf24" fontSize="9">MAGNETIC FIELD FROM Iₐ (Mₐ)</text>
      <line x1="200" y1="38" x2="200" y2="70" stroke="#fbbf24" strokeWidth="1" markerEnd="url(#arrowFY)"/>
      <text x="200" y="225" textAnchor="middle" fill="#7dd3fc" fontSize="9">MAGNETIC FIELD FROM Iₙ (Mₙ)</text>
      <line x1="200" y1="218" x2="200" y2="182" stroke="#7dd3fc" strokeWidth="1" markerEnd="url(#arrowFB)"/>
      {/* MAGNETIC CORE label */}
      <text x="108" y="115" fill="#fbbf24" fontSize="8.5">MAGNETIC</text>
      <text x="112" y="126" fill="#fbbf24" fontSize="8.5">CORE</text>
      <line x1="155" y1="120" x2="165" y2="120" stroke="#fbbf24" strokeWidth="1"/>

      {/* Trip coil box (left, inside toroid region) */}
      <rect x="57" y="108" width="60" height="34" rx="3" fill="#1e293b" stroke="#94a3b8" strokeWidth="1"/>
      <text x="87" y="122" textAnchor="middle" fill="#e2e8f0" fontSize="8">TRIP</text>
      <text x="87" y="133" textAnchor="middle" fill="#e2e8f0" fontSize="8">COIL</text>
      <line x1="57" y1="125" x2="27" y2="125" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,2"/>
      <line x1="27" y1="162" x2="27" y2="125" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,2"/>

      {/* Pickup winding label at bottom */}
      <text x="147" y="258" textAnchor="middle" fill="#a5b4fc" fontSize="8.5">PICKUP</text>
      <text x="147" y="269" textAnchor="middle" fill="#a5b4fc" fontSize="8.5">WINDING</text>
      <line x1="170" y1="258" x2="195" y2="178" stroke="#a5b4fc" strokeWidth="1" strokeDasharray="3,2"/>

      {/* Vector legend box */}
      <rect x="432" y="22" width="82" height="60" rx="4" fill="#0f172a" stroke="#334155" strokeWidth="1"/>
      <text x="473" y="36" textAnchor="middle" fill="#94a3b8" fontSize="8">Iₙ  │  Iₐ</text>
      <line x1="444" y1="40" x2="502" y2="40" stroke="#334155" strokeWidth="0.5"/>
      <text x="473" y="52" textAnchor="middle" fill="#94a3b8" fontSize="8">Iₐ = Iₙ</text>
      <text x="473" y="63" textAnchor="middle" fill="#94a3b8" fontSize="8">Mₐ = Mₙ</text>
      {/* Three bullet points */}
      <circle cx="437" cy="96" r="4" fill="#ef4444"/>
      <text x="445" y="99" fill="#94a3b8" fontSize="7.5">Residual field = ZERO</text>
      <circle cx="437" cy="110" r="4" fill="#ef4444"/>
      <text x="445" y="113" fill="#94a3b8" fontSize="7.5">No output from pickup winding</text>
      <circle cx="437" cy="124" r="4" fill="#ef4444"/>
      <text x="445" y="127" fill="#94a3b8" fontSize="7.5">No power to trip coil</text>

      <defs>
        <marker id="arrowFY" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#fbbf24"/></marker>
        <marker id="arrowFB" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#7dd3fc"/></marker>
      </defs>
    </svg>
  );
}

/* ─── Page ────────────────────────────────────────────────────────────────── */

const navItems = [
  { id: "heating",      label: "Heating",       colour: "text-orange-300", border: "border-orange-400/30" },
  { id: "magnetic",     label: "Magnetic",      colour: "text-blue-300",   border: "border-blue-400/30" },
  { id: "chemical",     label: "Chemical",      colour: "text-green-300",  border: "border-green-400/30" },
  { id: "physiological",label: "Physiological", colour: "text-red-300",    border: "border-red-400/30" },
  { id: "protection",   label: "Protection",    colour: "text-purple-300", border: "border-purple-400/30" },
];

export default function EffectsOfCurrent() {
  return (
    <div className="max-w-4xl mx-auto space-y-10 pb-16 p-6 md:p-8">

      {/* ── Header ── */}
      <div className="space-y-2">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
            <Zap className="w-6 h-6 text-primary" />
          </div>
          <span className="text-sm font-medium text-primary uppercase tracking-widest">1C — Electrical Theory</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground">Effects of Electric Current</h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Electric current produces four principal effects: heating, magnetic, chemical, and physiological.
          Understanding these effects explains how almost every electrical device works — and why electricity demands respect.
        </p>
      </div>

      {/* ── Quick-jump ── */}
      <div className="grid grid-cols-5 gap-2">
        {navItems.map(({ id, label, colour, border }) => (
          <a key={id} href={`#${id}`}
            className={`bg-card/60 border ${border} rounded-xl p-2 text-center hover:opacity-80 transition-opacity`}>
            <p className={`text-xs font-semibold ${colour}`}>{label}</p>
          </a>
        ))}
      </div>

      {/* ── Key principle ── */}
      <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 flex gap-3">
        <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
        <p className="text-sm text-muted-foreground leading-relaxed">
          All four effects occur simultaneously whenever current flows. The <span className="text-foreground font-semibold">dominant</span> effect
          depends on the circuit design — a motor exploits the magnetic effect, a heater exploits the heating effect, and a battery charger
          exploits the chemical effect.
        </p>
      </div>

      {/* ══════════════════════════════════════════════════════════
          1. HEATING EFFECT
      ══════════════════════════════════════════════════════════ */}
      <section id="heating" className="bg-orange-400/5 border border-orange-400/25 rounded-2xl overflow-hidden space-y-0">
        <div className="flex items-center gap-3 px-6 py-4 border-b border-orange-400/25">
          <div className="bg-orange-400/10 rounded-lg p-1.5"><Flame className="w-4 h-4 text-orange-300"/></div>
          <h2 className="font-semibold text-orange-300">Heating Effect</h2>
        </div>
        <div className="p-6 space-y-5">
          <p className="text-sm text-muted-foreground leading-relaxed">
            When the opposition to current flow in a conductor (its resistance) is overcome by an applied voltage and current flows,
            <strong className="text-foreground"> work is done and energy is converted to heat</strong>. The greater the current and resistance, the more heat is produced.
          </p>

          <div className="bg-background/40 border border-white/10 rounded-xl px-4 py-3">
            <p className="font-mono text-lg font-bold text-orange-300">P = I² × R</p>
            <p className="text-xs text-muted-foreground">Heat power dissipated (watts) — increases with the square of current</p>
          </div>

          {/* 4 application cards */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Practical Applications</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: "Electric Fuse", desc: "Fuse wire melts when current exceeds rating, breaking the circuit and protecting equipment.", svg:
                  <svg viewBox="0 0 80 50" className="w-full h-12"><rect x="10" y="18" width="60" height="14" rx="3" fill="#374151" stroke="#6b7280" strokeWidth="1"/><rect x="2" y="20" width="10" height="10" rx="1" fill="#9ca3af"/><rect x="68" y="20" width="10" height="10" rx="1" fill="#9ca3af"/><line x1="10" y1="25" x2="70" y2="25" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="3,2"/><text x="40" y="45" textAnchor="middle" fill="#fbbf24" fontSize="7">FUSE ELEMENT</text></svg>
                },
                { label: "Iron", desc: "Resistive element generates heat transferred through the soleplate to fabric.", svg:
                  <svg viewBox="0 0 80 50" className="w-full h-12"><path d="M10,35 L15,20 Q40,12 65,20 L70,35 Q55,38 25,38 Z" fill="#374151" stroke="#6b7280" strokeWidth="1"/><rect x="30" y="14" width="20" height="10" rx="2" fill="#4b5563"/><text x="40" y="47" textAnchor="middle" fill="#f97316" fontSize="7">RESISTIVE ELEMENT</text></svg>
                },
                { label: "Electric Bulb", desc: "Tungsten filament heats to ~2700 K, emitting light — and mostly heat.", svg:
                  <svg viewBox="0 0 80 54" className="w-full h-12"><path d="M40,8 Q58,8 62,26 Q64,36 56,40 L52,46 L28,46 L24,40 Q16,36 18,26 Q22,8 40,8 Z" fill="none" stroke="#fbbf24" strokeWidth="1.5"/><line x1="30" y1="46" x2="50" y2="46" stroke="#6b7280" strokeWidth="2"/><line x1="32" y1="50" x2="48" y2="50" stroke="#6b7280" strokeWidth="2"/><path d="M36,30 Q40,22 44,30" fill="none" stroke="#fbbf24" strokeWidth="1.5"/><text x="40" y="54" textAnchor="middle" fill="#fbbf24" fontSize="6">FILAMENT</text></svg>
                },
                { label: "Room Heater", desc: "Nichrome wire element converts electrical energy directly to radiant heat.", svg:
                  <svg viewBox="0 0 80 50" className="w-full h-12"><rect x="12" y="10" width="56" height="35" rx="4" fill="#374151" stroke="#f97316" strokeWidth="1.5"/><line x1="20" y1="22" x2="60" y2="22" stroke="#ef4444" strokeWidth="1.5"/><line x1="20" y1="28" x2="60" y2="28" stroke="#ef4444" strokeWidth="1.5"/><line x1="20" y1="34" x2="60" y2="34" stroke="#ef4444" strokeWidth="1.5"/><line x1="35" y1="45" x2="35" y2="50" stroke="#6b7280" strokeWidth="2"/><line x1="45" y1="45" x2="45" y2="50" stroke="#6b7280" strokeWidth="2"/><text x="40" y="8" textAnchor="middle" fill="#f97316" fontSize="6">NICHROME ELEMENTS</text></svg>
                },
              ].map(({ label, desc, svg }) => (
                <div key={label} className="bg-background/30 border border-white/8 rounded-xl p-3 space-y-2">
                  {svg}
                  <p className="text-xs font-semibold text-orange-300 text-center">{label}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Worked example */}
          <div className="bg-background/40 border border-white/10 rounded-xl p-4 space-y-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Worked Example</p>
            <p className="text-sm text-muted-foreground">A 10 Ω resistor carries 2 A. How much heat power is dissipated?</p>
            <div className="font-mono text-xs bg-muted/30 rounded-lg p-3 space-y-1">
              <div className="text-muted-foreground">P = I² × R</div>
              <div className="text-muted-foreground">P = 2² × 10</div>
              <div className="text-orange-300">P = 40 W</div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          2. MAGNETIC EFFECT
      ══════════════════════════════════════════════════════════ */}
      <section id="magnetic" className="bg-blue-400/5 border border-blue-400/25 rounded-2xl overflow-hidden">
        <div className="flex items-center gap-3 px-6 py-4 border-b border-blue-400/25">
          <div className="bg-blue-400/10 rounded-lg p-1.5"><Magnet className="w-4 h-4 text-blue-300"/></div>
          <h2 className="font-semibold text-blue-300">Magnetic Effect</h2>
        </div>
        <div className="p-6 space-y-5">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Magnetism is created around a conductor when an electric current flows through it. This is the principle behind
            <strong className="text-foreground"> motors, relays, transformers, solenoids, generators and ballasts</strong>.
            The right-hand rule determines the direction of the magnetic field.
          </p>

          <div className="bg-background/40 border border-white/10 rounded-xl px-4 py-3">
            <p className="font-mono text-lg font-bold text-blue-300">F = B × I × L</p>
            <p className="text-xs text-muted-foreground">Force on a current-carrying conductor in a magnetic field</p>
          </div>

          {/* Simple motor cross-section SVG */}
          <div className="bg-background/30 border border-white/10 rounded-xl p-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3 text-center">DC Motor — Principle of Operation</p>
            <svg viewBox="0 0 340 200" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-sm mx-auto">
              {/* Stator */}
              <ellipse cx="170" cy="100" rx="90" ry="85" fill="none" stroke="#3b82f6" strokeWidth="10" opacity="0.4"/>
              {/* N and S poles */}
              <text x="82" y="104" fill="#3b82f6" fontSize="16" fontWeight="bold">N</text>
              <text x="246" y="104" fill="#ef4444" fontSize="16" fontWeight="bold">S</text>
              {/* Rotor */}
              <ellipse cx="170" cy="100" rx="35" ry="35" fill="#1e293b" stroke="#94a3b8" strokeWidth="1.5"/>
              {/* Coil in rotor */}
              <line x1="155" y1="78" x2="185" y2="78" stroke="#fbbf24" strokeWidth="2"/>
              <line x1="155" y1="122" x2="185" y2="122" stroke="#fbbf24" strokeWidth="2"/>
              <line x1="155" y1="78" x2="155" y2="122" stroke="#fbbf24" strokeWidth="2"/>
              <line x1="185" y1="78" x2="185" y2="122" stroke="#fbbf24" strokeWidth="2"/>
              {/* Shaft */}
              <line x1="170" y1="15" x2="170" y2="185" stroke="#94a3b8" strokeWidth="3"/>
              {/* Rotation arrow */}
              <path d="M 138,70 A 40 40 0 0 1 202,70" fill="none" stroke="#86efac" strokeWidth="2" markerEnd="url(#arrowGreen)"/>
              <text x="152" y="60" fill="#86efac" fontSize="9">ROTATION</text>
              {/* Force arrows on coil sides */}
              <line x1="155" y1="100" x2="120" y2="100" stroke="#ef4444" strokeWidth="1.5" markerEnd="url(#arrowRed)"/>
              <line x1="185" y1="100" x2="220" y2="100" stroke="#ef4444" strokeWidth="1.5" markerEnd="url(#arrowRed2)"/>
              <text x="100" y="96" fill="#ef4444" fontSize="8">F</text>
              <text x="224" y="96" fill="#ef4444" fontSize="8">F</text>
              {/* Field arrow */}
              <line x1="90" y1="100" x2="250" y2="100" stroke="#93c5fd" strokeWidth="1" strokeDasharray="4,3"/>
              <text x="160" y="155" fill="#94a3b8" fontSize="8" textAnchor="middle">Field B →</text>
              <defs>
                <marker id="arrowGreen" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#86efac"/></marker>
                <marker id="arrowRed" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#ef4444"/></marker>
                <marker id="arrowRed2" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#ef4444"/></marker>
              </defs>
            </svg>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: "Electric Motor",  desc: "Current-carrying coil in a magnetic field experiences a force, creating rotation. Used in compressors, fans, and pumps." },
              { label: "Relay / Solenoid",desc: "Small control current energises an electromagnet to mechanically operate a larger switch or valve." },
              { label: "Transformer",     desc: "Alternating current in the primary creates a changing magnetic flux that induces voltage in the secondary coil." },
              { label: "Generator",       desc: "Rotating a coil inside a magnetic field induces an EMF — the reverse of the motor principle." },
              { label: "Ballast",         desc: "An inductor (choke) limits current in fluorescent and discharge lamp circuits using its magnetic reactance." },
              { label: "Solenoid Valve",  desc: "Energising the coil creates a magnetic field that pulls a plunger, opening or closing a refrigerant valve." },
            ].map(({ label, desc }) => (
              <div key={label} className="bg-background/30 border border-white/8 rounded-xl p-3 space-y-1">
                <p className="text-sm font-semibold text-blue-300">{label}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-background/40 border border-white/10 rounded-xl p-4 space-y-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Worked Example</p>
            <p className="text-sm text-muted-foreground">A conductor 0.5 m long carries 4 A in a field of 0.3 T. What is the force?</p>
            <div className="font-mono text-xs bg-muted/30 rounded-lg p-3 space-y-1">
              <div className="text-muted-foreground">F = B × I × L</div>
              <div className="text-muted-foreground">F = 0.3 × 4 × 0.5</div>
              <div className="text-blue-300">F = 0.6 N</div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          3. CHEMICAL EFFECT
      ══════════════════════════════════════════════════════════ */}
      <section id="chemical" className="bg-green-400/5 border border-green-400/25 rounded-2xl overflow-hidden">
        <div className="flex items-center gap-3 px-6 py-4 border-b border-green-400/25">
          <div className="bg-green-400/10 rounded-lg p-1.5"><FlaskConical className="w-4 h-4 text-green-300"/></div>
          <h2 className="font-semibold text-green-300">Chemical Effect</h2>
        </div>
        <div className="p-6 space-y-5">
          <p className="text-sm text-muted-foreground leading-relaxed">
            The operation of batteries depends on this effect. <strong className="text-foreground">Electroplating</strong> and the
            production and refinement of metals utilise it, while the corrosion of metals (such as rusting of iron) is an
            instance where the effect is less welcome. DC passing through an electrolyte causes chemical reactions — called
            <strong className="text-foreground"> electrolysis</strong>.
          </p>

          <div className="bg-background/40 border border-white/10 rounded-xl px-4 py-3">
            <p className="font-mono text-lg font-bold text-green-300">m = Z × I × t</p>
            <p className="text-xs text-muted-foreground">Faraday's Law — mass deposited (g), Z = electrochemical equivalent, I = current (A), t = time (s)</p>
          </div>

          {/* Electroplating diagram */}
          <div className="bg-background/30 border border-white/10 rounded-xl p-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3 text-center">Electroplating Bath</p>
            <ElectroplatingDiagram />
            <p className="text-xs text-muted-foreground text-center mt-2">
              Metal ions dissolve from the anode and deposit onto the cathode — coating the workpiece.
            </p>
          </div>

          {/* Lead-acid cell diagram */}
          <div className="bg-background/30 border border-white/10 rounded-xl p-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3 text-center">Lead-Acid Cell (Car Battery) — Charging Chemistry</p>
            <LeadAcidCellDiagram />
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-background/40 rounded-xl p-3 space-y-1">
                <p className="text-xs font-semibold text-red-300">Discharging</p>
                <p className="text-xs text-muted-foreground">Pb (anode) reacts with H₂SO₄ → PbSO₄. PbO₂ (cathode) + H₂SO₄ → PbSO₄ + H₂O. Electrons flow as current.</p>
              </div>
              <div className="bg-background/40 rounded-xl p-3 space-y-1">
                <p className="text-xs font-semibold text-blue-300">Charging</p>
                <p className="text-xs text-muted-foreground">Applied current reverses the reaction, restoring Pb at cathode and PbO₂ at anode. H₂SO₄ is regenerated.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: "Electroplating",        desc: "Metal ions from the anode deposit onto the cathode — used to plate components in nickel, chrome, or gold." },
              { label: "Electrolytic Refining",  desc: "Pure copper deposited from an impure anode onto a pure cathode in a copper-sulphate bath." },
              { label: "RedOx / Hydrogen",       desc: "Electrolysis of water splits H₂O → H₂ (cathode) + O₂ (anode). Used in metal smelting and fuel cells." },
              { label: "Corrosion",              desc: "Electrochemical cell between dissimilar metals in an electrolyte causes galvanic corrosion — e.g. rusting iron." },
            ].map(({ label, desc }) => (
              <div key={label} className="bg-background/30 border border-white/8 rounded-xl p-3 space-y-1">
                <p className="text-sm font-semibold text-green-300">{label}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          4. PHYSIOLOGICAL EFFECT
      ══════════════════════════════════════════════════════════ */}
      <section id="physiological" className="bg-red-400/5 border border-red-400/25 rounded-2xl overflow-hidden">
        <div className="flex items-center gap-3 px-6 py-4 border-b border-red-400/25">
          <div className="bg-red-400/10 rounded-lg p-1.5"><AlertTriangle className="w-4 h-4 text-red-300"/></div>
          <h2 className="font-semibold text-red-300">Physiological Effect</h2>
        </div>
        <div className="p-6 space-y-5">
          <p className="text-sm text-muted-foreground leading-relaxed">
            The human nervous system is electrically based — therefore an external electrical source will have an effect on the body.
            <strong className="text-foreground"> Current — not voltage — causes injury</strong>, though voltage drives the current.
            Dangerous voltages can be as low as <strong className="text-red-300">15 V AC</strong>; even 5 V AC in a pool can be fatal.
          </p>

          <div className="bg-background/40 border border-white/10 rounded-xl px-4 py-3">
            <p className="font-mono text-lg font-bold text-red-300">I = V / R<sub>body</sub></p>
            <p className="text-xs text-muted-foreground">Body resistance: ~1 kΩ (wet skin) to ~100 kΩ (dry skin) — wet conditions are far more dangerous</p>
          </div>

          {/* Current threshold chart */}
          <div className="bg-background/30 border border-white/10 rounded-xl p-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4 text-center">Effect of Current Magnitude on the Body</p>
            <CurrentThresholdChart />
          </div>

          {/* Four fatal ways */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Four Ways Electric Shock May Be Directly Fatal</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                {
                  num: "1", title: "Respiratory Arrest",
                  body: "Uncommon in that it generally requires current to pass through the head in the region of the respiratory centre at the back of the skull. Disturbance of brain function causes immediate cessation of breathing.",
                  colour: "text-red-300", bg: "bg-red-400/5",
                },
                {
                  num: "2", title: "Asphyxia",
                  body: "Body muscles contract at about 10 mA. Currents passing through the chest area contract the diaphragm muscles, restricting the inflation and deflation of the lungs, preventing breathing.",
                  colour: "text-orange-300", bg: "bg-orange-400/5",
                },
                {
                  num: "3", title: "Ventricular Fibrillation",
                  body: "Fibrillation of the heart is the major cause of electrical fatalities. From 50–200 mA there is high risk of ventricular fibrillation — the heart ceases to function in a coordinated way. A critical factor is the time of current flow.",
                  colour: "text-rose-300", bg: "bg-rose-400/5",
                },
                {
                  num: "4", title: "High Voltage Burns & Cuts",
                  body: "High voltage accidents normally result in severe burns and loss of limbs due to the extreme pressure of the arc. Internal burns along the current path are also common.",
                  colour: "text-amber-300", bg: "bg-amber-400/5",
                },
              ].map(({ num, title, body, colour, bg }) => (
                <div key={num} className={`${bg} border border-white/10 rounded-xl p-4 space-y-2`}>
                  <div className="flex items-center gap-2">
                    <span className={`text-lg font-bold ${colour}`}>{num}.</span>
                    <span className={`text-sm font-semibold ${colour}`}>{title}</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Zones table */}
          <div className="bg-background/30 border border-white/10 rounded-xl overflow-hidden">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-muted/30">
                  <th className="px-3 py-2 text-left text-muted-foreground font-semibold">Zone</th>
                  <th className="px-3 py-2 text-left text-muted-foreground font-semibold">Current Range</th>
                  <th className="px-3 py-2 text-left text-muted-foreground font-semibold">Physiological Effect</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  { zone:"1", range:"0 – 0.5 mA",    effect:"Usually no reaction effects.", col:"text-green-300" },
                  { zone:"2", range:"0.5 – 10 mA",   effect:"Usually no harmful physiological effects.", col:"text-yellow-300" },
                  { zone:"3", range:"10 – 25 mA",    effect:"Muscular contractions, difficulty breathing, reversible disturbances; cardiac fibrillation unlikely.", col:"text-orange-300" },
                  { zone:"4", range:"25 mA – 500 mA",effect:"Increasing probability of ventricular fibrillation, cardiac arrest, breathing arrest and severe burns.", col:"text-red-300" },
                ].map(({ zone, range, effect, col }) => (
                  <tr key={zone} className="hover:bg-white/3 transition-colors">
                    <td className={`px-3 py-2 font-bold ${col}`}>Zone {zone}</td>
                    <td className="px-3 py-2 font-mono text-muted-foreground">{range}</td>
                    <td className="px-3 py-2 text-muted-foreground leading-relaxed">{effect}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Worked example */}
          <div className="bg-background/40 border border-white/10 rounded-xl p-4 space-y-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Worked Example</p>
            <p className="text-sm text-muted-foreground">A person with wet skin (R = 1 000 Ω) touches 230 V. What current flows?</p>
            <div className="font-mono text-xs bg-muted/30 rounded-lg p-3 space-y-1">
              <div className="text-muted-foreground">I = V / R</div>
              <div className="text-muted-foreground">I = 230 / 1000</div>
              <div className="text-red-300">I = 0.23 A = 230 mA — well above the lethal 100 mA threshold</div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          5. OVERCURRENT PROTECTION
      ══════════════════════════════════════════════════════════ */}
      <section id="protection" className="bg-purple-400/5 border border-purple-400/25 rounded-2xl overflow-hidden">
        <div className="flex items-center gap-3 px-6 py-4 border-b border-purple-400/25">
          <div className="bg-purple-400/10 rounded-lg p-1.5"><ShieldAlert className="w-4 h-4 text-purple-300"/></div>
          <h2 className="font-semibold text-purple-300">Overcurrent Protection Devices</h2>
        </div>
        <div className="p-6 space-y-6">

          {/* AS/NZS 3000 callout */}
          <div className="bg-background/40 border border-purple-400/30 rounded-xl p-4 space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-xs font-bold text-purple-300 uppercase tracking-widest">AS/NZS 3000:2007 — Clause 2.5</p>
              <span className="text-xs bg-purple-400/10 text-purple-300 px-2 py-0.5 rounded-full border border-purple-400/20">Protection against Overcurrent</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Active conductors shall be protected by one or more devices that <span className="text-foreground font-semibold">automatically disconnect the supply in the event of overcurrent</span>, before such overcurrent attains a magnitude or duration that could cause injury to persons or livestock, or damage due to excessive temperatures or electromechanical stresses.
            </p>
            <ul className="text-xs text-muted-foreground space-y-1 mt-2">
              <li className="flex gap-2"><span className="text-purple-300 font-bold">(a)</span>Protection against <span className="text-foreground">overload current</span> — Clause 2.5.2 and 2.5.3</li>
              <li className="flex gap-2"><span className="text-purple-300 font-bold">(b)</span>Protection against <span className="text-foreground">short-circuit current</span> — Clause 2.5.2 and 2.5.4</li>
              <li className="flex gap-2"><span className="text-red-300 font-bold">!</span><span className="text-foreground font-semibold">No fuse shall be inserted in a neutral conductor.</span></li>
            </ul>
          </div>

          {/* Fuse types */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Fuse Types</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                {
                  title: "Semi Enclosed Rewireable Fuse (SERF)",
                  points: [
                    "Designed to melt in the centre of the fuse element.",
                    "Fuse element can be replaced with a larger element — a safety hazard.",
                    "No longer used: more expensive than an MCB and has a limited kA interrupting rating.",
                  ],
                  colour: "text-amber-300", bg: "bg-amber-400/5", border: "border-amber-400/20",
                },
                {
                  title: "High Rupturing Capacity (HRC) Fuse",
                  points: [
                    "Filled with silica sand to quench the arc and interrupt high fault currents on short circuit.",
                    "Silver element with special design to withstand short-term overloads of motor starting.",
                    "Commonly known as motor-start or slow-blow fuses.",
                  ],
                  colour: "text-blue-300", bg: "bg-blue-400/5", border: "border-blue-400/20",
                },
              ].map(({ title, points, colour, bg, border }) => (
                <div key={title} className={`${bg} border ${border} rounded-xl p-4 space-y-2`}>
                  <p className={`text-sm font-semibold ${colour}`}>{title}</p>
                  <ul className="space-y-1">
                    {points.map((pt, i) => (
                      <li key={i} className="flex gap-2 text-xs text-muted-foreground">
                        <span className={`${colour} font-bold flex-shrink-0`}>•</span>{pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Circuit breakers */}
          <div className="bg-background/30 border border-white/10 rounded-xl p-4 space-y-3">
            <p className="text-sm font-semibold text-purple-300">Miniature Circuit Breakers (MCBs)</p>
            <p className="text-xs text-muted-foreground">Circuit breakers use two mechanisms — <strong className="text-foreground">thermal</strong> (bimetallic strip reacts to sustained overload) and <strong className="text-foreground">magnetic</strong> (electromagnet trips very quickly on short circuit).</p>
            <div className="grid grid-cols-3 gap-2">
              {[
                { curve: "B", range: "3–5 × In", use: "Lighting, domestic, general purpose." },
                { curve: "C", range: "5–10 × In", use: "Commercial, fluorescent lighting with high inrush." },
                { curve: "D", range: "10–20 × In", use: "Motors, transformers, high inrush loads." },
              ].map(({ curve, range, use }) => (
                <div key={curve} className="bg-background/40 rounded-xl p-3 text-center space-y-1">
                  <p className="text-lg font-bold text-purple-300">{curve}</p>
                  <p className="text-xs font-mono text-muted-foreground">{range}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{use}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground">Role: protect wiring against overheating (overload or short circuit), indirect contact with live parts, and can also be used for <strong className="text-foreground">isolation</strong> during maintenance.</p>
          </div>

          {/* RCD section */}
          <div className="space-y-3">
            <p className="text-sm font-semibold text-purple-300">Residual Current Device (RCD) / ELCB / Safety Switch</p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              An RCD is a <strong className="text-foreground">personal protection device</strong> — it will <em>not</em> protect against overload or an active-neutral short circuit. It operates on an <strong className="text-foreground">out-of-balance current</strong> (not excessive current) and must always be used in conjunction with a circuit breaker for complete protection.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Standard RCD (30 mA)", desc: "Trips within 30 ms at 30 mA imbalance. Required for all socket outlets, bathroom circuits and outdoor areas per AS/NZS 3000." },
                { label: "How it works", desc: "Active and neutral conductors pass through a toroid. In a healthy circuit their magnetic fields cancel — residual field is zero. An earth fault creates an imbalance, inducing voltage in the pickup winding that energises the trip coil." },
              ].map(({ label, desc }) => (
                <div key={label} className="bg-background/30 border border-white/8 rounded-xl p-3 space-y-1">
                  <p className="text-sm font-semibold text-purple-300">{label}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

            {/* Healthy circuit SVG */}
            <div className="bg-background/30 border border-white/10 rounded-xl p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4 text-center">RCD — Healthy Circuit Operation</p>
              <HealthyCircuitDiagram />
              <p className="text-xs text-muted-foreground text-center mt-3">
                In a healthy circuit Iₐ = Iₙ, so Mₐ = Mₙ. The residual magnetic field is zero → no pickup winding output → trip coil stays de-energised.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Summary ── */}
      <div className="bg-card border border-border rounded-2xl p-5 space-y-3">
        <h2 className="font-semibold text-foreground">Summary</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {[
            { effect: "Heating",       rule: "P = I²R — current overcomes resistance, converting electrical energy to heat. Basis of fuses, heaters and bulbs.", colour: "text-orange-300" },
            { effect: "Magnetic",      rule: "Current creates a magnetic field. Basis of motors, relays, generators, transformers and solenoid valves.", colour: "text-blue-300" },
            { effect: "Chemical",      rule: "DC through an electrolyte causes electrolysis — used in electroplating, refining and batteries.", colour: "text-green-300" },
            { effect: "Physiological", rule: "Current (not voltage) kills. 30 mA can cause respiratory arrest. Dangerous voltages can be as low as 15 V AC.", colour: "text-red-300" },
            { effect: "Protection",    rule: "Fuses, MCBs and RCDs protect against overcurrent and earth faults per AS/NZS 3000. RCDs are personal protection devices.", colour: "text-purple-300" },
          ].map(({ effect, rule, colour }) => (
            <div key={effect} className="flex gap-3 items-start bg-muted/20 rounded-xl p-3">
              <span className={`mt-1.5 w-2 h-2 rounded-full flex-shrink-0 ${colour.replace("text-","bg-")}`}/>
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
