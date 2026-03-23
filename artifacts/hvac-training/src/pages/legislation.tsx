import { Scale, Shield, FileText, AlertTriangle, ClipboardList, BookOpen } from "lucide-react";

/* ─── Queensland Laws hierarchy SVG ────────────────────────────────────────── */
function QLawsHierarchy() {
  return (
    <svg viewBox="0 0 640 340" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-2xl mx-auto">
      {/* ── Principal Law box ── */}
      <rect x="210" y="10" width="220" height="56" rx="6" fill="#1e3a5f" stroke="#38bdf8" strokeWidth="1.5"/>
      <text x="320" y="32" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">PRINCIPAL LAW</text>
      <text x="320" y="46" textAnchor="middle" fill="#e2e8f0" fontSize="11" fontWeight="bold">Electrical Safety Act 2002</text>
      <text x="320" y="59" textAnchor="middle" fill="#94a3b8" fontSize="9">(Queensland)</text>

      {/* ── Arrow down ── */}
      <line x1="320" y1="66" x2="320" y2="96" stroke="#38bdf8" strokeWidth="1.5"/>
      <polygon points="315,93 320,103 325,93" fill="#38bdf8"/>

      {/* ── Subordinate legislation box ── */}
      <rect x="190" y="103" width="260" height="56" rx="6" fill="#1e3a5f" stroke="#60a5fa" strokeWidth="1.5"/>
      <text x="320" y="124" textAnchor="middle" fill="#60a5fa" fontSize="10" fontWeight="bold">SUBORDINATE LEGISLATION</text>
      <text x="320" y="138" textAnchor="middle" fill="#e2e8f0" fontSize="11" fontWeight="bold">Electrical Safety Regulation 2002</text>
      <text x="320" y="152" textAnchor="middle" fill="#94a3b8" fontSize="9">(Queensland)</text>

      {/* ── Branch lines from regulation box ── */}
      {/* horizontal spine */}
      <line x1="100" y1="193" x2="540" y2="193" stroke="#60a5fa" strokeWidth="1.2"/>
      {/* vertical up to box */}
      <line x1="320" y1="159" x2="320" y2="193" stroke="#60a5fa" strokeWidth="1.5"/>

      {/* Codes of Practice */}
      <line x1="110" y1="193" x2="110" y2="210" stroke="#60a5fa" strokeWidth="1.2"/>
      <rect x="40" y="210" width="142" height="36" rx="5" fill="#164e63" stroke="#22d3ee" strokeWidth="1"/>
      <text x="111" y="228" textAnchor="middle" fill="#22d3ee" fontSize="10" fontWeight="bold">Codes of Practice</text>
      <text x="111" y="240" textAnchor="middle" fill="#94a3b8" fontSize="8">WHS, Refrigerant, etc.</text>

      {/* Mandated Standards */}
      <line x1="230" y1="193" x2="230" y2="210" stroke="#60a5fa" strokeWidth="1.2"/>
      <rect x="160" y="210" width="140" height="36" rx="5" fill="#1e3a5f" stroke="#818cf8" strokeWidth="1"/>
      <text x="230" y="228" textAnchor="middle" fill="#818cf8" fontSize="10" fontWeight="bold">Mandated Standards</text>
      <text x="230" y="240" textAnchor="middle" fill="#94a3b8" fontSize="8">AS/NZS Wiring Rules etc.</text>

      {/* Ministerial */}
      <line x1="320" y1="193" x2="320" y2="210" stroke="#60a5fa" strokeWidth="1.2"/>
      <rect x="275" y="210" width="90" height="36" rx="5" fill="#1e3a5f" stroke="#a78bfa" strokeWidth="1"/>
      <text x="320" y="228" textAnchor="middle" fill="#a78bfa" fontSize="10" fontWeight="bold">Ministerial</text>
      <text x="320" y="240" textAnchor="middle" fill="#94a3b8" fontSize="8">Directions &amp; Orders</text>

      {/* Council By Laws */}
      <line x1="410" y1="193" x2="410" y2="210" stroke="#60a5fa" strokeWidth="1.2"/>
      <rect x="340" y="210" width="140" height="36" rx="5" fill="#1e3a5f" stroke="#34d399" strokeWidth="1"/>
      <text x="410" y="228" textAnchor="middle" fill="#34d399" fontSize="10" fontWeight="bold">Council By Laws</text>
      <text x="410" y="240" textAnchor="middle" fill="#94a3b8" fontSize="8">Local gov. requirements</text>

      {/* Authority Rulings */}
      <line x1="530" y1="193" x2="530" y2="210" stroke="#60a5fa" strokeWidth="1.2"/>
      <rect x="460" y="210" width="150" height="36" rx="5" fill="#1e3a5f" stroke="#fbbf24" strokeWidth="1"/>
      <text x="535" y="228" textAnchor="middle" fill="#fbbf24" fontSize="10" fontWeight="bold">Authority Rulings</text>
      <text x="535" y="240" textAnchor="middle" fill="#94a3b8" fontSize="8">Energex, Ergon, Councils</text>

      {/* ── Normative standards below codes ── */}
      <line x1="110" y1="246" x2="110" y2="265" stroke="#22d3ee" strokeWidth="1"/>
      <rect x="40" y="265" width="142" height="32" rx="5" fill="#083344" stroke="#22d3ee" strokeWidth="0.8" strokeDasharray="4,2"/>
      <text x="111" y="281" textAnchor="middle" fill="#94a3b8" fontSize="9">Normative references</text>
      <text x="111" y="292" textAnchor="middle" fill="#64748b" fontSize="8">Called up as mandatory</text>
    </svg>
  );
}

/* ─── Page ─────────────────────────────────────────────────────────────────── */
export default function Legislation() {
  return (
    <div className="max-w-4xl mx-auto space-y-10 pb-16 p-6 md:p-8">

      {/* ── Header ── */}
      <div>
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
            <Scale className="w-6 h-6 text-primary" />
          </div>
          <span className="text-sm font-medium text-primary uppercase tracking-widest">1A — Legislation</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground tracking-tight mb-3">Legislation</h1>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
          All HVAC/R work is governed by a hierarchy of laws, regulations, codes and standards.
          Understanding how these interrelate ensures safe, compliant work on every job.
        </p>
      </div>

      {/* ── Queensland Laws hierarchy ── */}
      <div className="bg-card border border-white/8 rounded-2xl p-6 space-y-4">
        <div className="flex items-center gap-3">
          <BookOpen className="w-4 h-4 text-primary" />
          <h2 className="font-semibold text-foreground">Queensland Laws — Legislative Hierarchy</h2>
        </div>
        <QLawsHierarchy />
        <p className="text-xs text-muted-foreground text-center">
          The <span className="text-foreground font-medium">Electrical Safety Act 2002</span> is the principal law.
          The <span className="text-foreground font-medium">Electrical Safety Regulation 2002</span> is the subordinate legislation that gives effect to it.
          All standards, codes, ministerial directions and authority rulings flow from there.
        </p>
      </div>

      {/* ── Three-column law type cards ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          {
            title: "Principal Law",
            colour: "text-blue-300", border: "border-blue-400/25", bg: "bg-blue-400/5",
            items: [
              { name: "Electrical Safety Act 2002", detail: "Queensland's primary electrical safety legislation. Sets the overarching framework, duties and penalties." },
            ],
          },
          {
            title: "Subordinate Legislation",
            colour: "text-indigo-300", border: "border-indigo-400/25", bg: "bg-indigo-400/5",
            items: [
              { name: "Electrical Safety Regulation 2002", detail: "Contains the detailed technical and procedural requirements that support the Act." },
            ],
          },
          {
            title: "Authority Rulings",
            colour: "text-yellow-300", border: "border-yellow-400/25", bg: "bg-yellow-400/5",
            items: [
              { name: "Energex", detail: "Distribution authority — South-East Queensland connection and metering rules." },
              { name: "Ergon Energy", detail: "Distribution authority — Regional Queensland grid requirements." },
              { name: "Council By Laws", detail: "Local government regulations (e.g. Gold Coast City Council) covering local installation requirements." },
            ],
          },
        ].map(({ title, colour, border, bg, items }) => (
          <div key={title} className={`${bg} border ${border} rounded-2xl p-5 space-y-3`}>
            <p className={`text-sm font-semibold ${colour}`}>{title}</p>
            {items.map(({ name, detail }) => (
              <div key={name} className="space-y-1">
                <p className="text-sm font-medium text-foreground">{name}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* ── WHS / OHS ── */}
      <div className="bg-card border border-white/8 rounded-2xl overflow-hidden">
        <div className="px-6 py-4 border-b border-white/8 flex items-center gap-3">
          <Shield className="w-4 h-4 text-primary" />
          <h2 className="font-semibold text-foreground">WHS / OHS — Work Health &amp; Safety</h2>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              q: "Principle",
              a: "While working, everyone in the work zone is safe.",
              colour: "text-green-300", border: "border-green-400/20", bg: "bg-green-400/5",
            },
            {
              q: "Who is 'everyone'?",
              a: "You, other workers, visitors, members of the public, and any person who may be affected by your work.",
              colour: "text-blue-300", border: "border-blue-400/20", bg: "bg-blue-400/5",
            },
            {
              q: "Who is responsible?",
              a: "Everyone. Every person in the workplace shares the duty of care to maintain a safe working environment.",
              colour: "text-orange-300", border: "border-orange-400/20", bg: "bg-orange-400/5",
            },
          ].map(({ q, a, colour, border, bg }) => (
            <div key={q} className={`${bg} border ${border} rounded-xl p-4 space-y-2`}>
              <p className={`text-sm font-semibold ${colour}`}>{q}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Codes of Practice ── */}
      <div className="bg-card border border-white/8 rounded-2xl overflow-hidden">
        <div className="px-6 py-4 border-b border-white/8 flex items-center gap-3">
          <FileText className="w-4 h-4 text-primary" />
          <h2 className="font-semibold text-foreground">Codes of Practice</h2>
        </div>
        <div className="p-6 space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Codes of Practice provide practical guidance on how to meet legal obligations. They are called up as mandatory requirements by the Electrical Safety Regulation.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                name: "WHS Code of Practice — Manual Handling",
                detail: "Sets out requirements for identifying and controlling manual handling risks in the workplace. Applies when lifting, carrying, installing and handling equipment.",
                tag: "Workplace Safety",
                colour: "text-emerald-300", border: "border-emerald-400/20", bg: "bg-emerald-400/5",
              },
              {
                name: "Refrigerant Handling Code of Practice 2007 — Part 1",
                detail: "Self-contained low charge systems. Covers safe handling, recovery, storage and disposal of refrigerants in split and window AC systems.",
                tag: "Refrigerants",
                colour: "text-cyan-300", border: "border-cyan-400/20", bg: "bg-cyan-400/5",
              },
              {
                name: "Refrigerant Handling Code of Practice 2007 — Part 2",
                detail: "Systems other than self-contained low charge systems. Covers larger commercial and industrial refrigeration equipment.",
                tag: "Refrigerants",
                colour: "text-cyan-300", border: "border-cyan-400/20", bg: "bg-cyan-400/5",
              },
              {
                name: "Guide to Safety in Metal Fabrication",
                detail: "Covers safe work practices in fabrication and metalworking environments — relevant when fabricating ductwork, brackets and equipment supports.",
                tag: "Fabrication Safety",
                colour: "text-amber-300", border: "border-amber-400/20", bg: "bg-amber-400/5",
              },
            ].map(({ name, detail, tag, colour, border, bg }) => (
              <div key={name} className={`${bg} border ${border} rounded-xl p-4 space-y-2`}>
                <div className="flex items-start justify-between gap-2">
                  <p className="text-sm font-semibold text-foreground leading-snug">{name}</p>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full bg-background/50 ${colour} flex-shrink-0`}>{tag}</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Legislation at work ── */}
      <div className="bg-card border border-white/8 rounded-2xl overflow-hidden">
        <div className="px-6 py-4 border-b border-white/8 flex items-center gap-3">
          <AlertTriangle className="w-4 h-4 text-amber-400" />
          <h2 className="font-semibold text-foreground">Legislation at Work — When It Applies</h2>
        </div>
        <div className="p-6 space-y-3">
          <p className="text-sm text-muted-foreground">Legislation applies across all aspects of HVAC/R work — not just on the tools. You must comply in every one of these situations:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {[
              "When installing air conditioning",
              "When travelling between jobs",
              "When repairing refrigeration equipment",
              "When working in a public area",
              "When working on transport refrigeration",
              "When working on fixed wired electrical equipment",
              "When working on plug-in electrical equipment",
              "When working in a prison",
              "When working at the airport",
            ].map((scenario) => (
              <div key={scenario} className="flex items-center gap-3 bg-amber-400/5 border border-amber-400/20 rounded-xl px-4 py-3">
                <span className="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0"/>
                <p className="text-sm text-muted-foreground">{scenario}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Analysing Work Activity ── */}
      <div className="bg-card border border-white/8 rounded-2xl overflow-hidden">
        <div className="px-6 py-4 border-b border-white/8 flex items-center gap-3">
          <ClipboardList className="w-4 h-4 text-primary" />
          <h2 className="font-semibold text-foreground">Analysing Work Activity</h2>
        </div>
        <div className="p-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              acronym: "RA",
              name: "Risk Assessment",
              detail: "A systematic process of identifying hazards, evaluating the likelihood and consequence of harm, and deciding on control measures before work begins.",
              colour: "text-red-300", border: "border-red-400/25", bg: "bg-red-400/5",
            },
            {
              acronym: "JSEA",
              name: "Job Safety & Environment Analysis",
              detail: "A step-by-step analysis of each task in a job, identifying specific hazards and the controls required for each step before and during the work.",
              colour: "text-orange-300", border: "border-orange-400/25", bg: "bg-orange-400/5",
            },
            {
              acronym: "SWMS",
              name: "Safe Work Method Statement",
              detail: "A document required for high risk construction work. Lists each activity, the associated hazards, and the control measures that will be applied. Must be followed on site.",
              colour: "text-yellow-300", border: "border-yellow-400/25", bg: "bg-yellow-400/5",
            },
          ].map(({ acronym, name, detail, colour, border, bg }) => (
            <div key={acronym} className={`${bg} border ${border} rounded-2xl p-5 space-y-3`}>
              <div>
                <p className={`text-3xl font-black ${colour}`}>{acronym}</p>
                <p className={`text-sm font-semibold ${colour}`}>{name}</p>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Other Workplace Documentation ── */}
      <div className="bg-card border border-white/8 rounded-2xl overflow-hidden">
        <div className="px-6 py-4 border-b border-white/8 flex items-center gap-3">
          <FileText className="w-4 h-4 text-muted-foreground" />
          <h2 className="font-semibold text-foreground">Other Workplace Documentation</h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Safety Documents</p>
              {[
                { name: "Manufacture Specifications", detail: "Equipment-specific technical data, installation requirements, refrigerant charges and clearance dimensions provided by the manufacturer." },
                { name: "MSDS / SDS", detail: "Material Safety Data Sheet (now Safety Data Sheet). Required for every hazardous chemical on site — refrigerants, lubricants, flux, cleaning agents. Provides handling, storage and emergency response information." },
              ].map(({ name, detail }) => (
                <div key={name} className="bg-background/30 border border-white/8 rounded-xl p-4 space-y-1">
                  <p className="text-sm font-semibold text-foreground">{name}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Business Documents</p>
              {[
                { name: "Job Card", detail: "Records details of the work performed on a specific job — equipment, fault found, parts used, time on site. Becomes part of the service history." },
                { name: "Service Reports", detail: "Formal record of service visit findings, maintenance completed and recommendations. Provided to the customer and retained for compliance." },
                { name: "Invoices", detail: "Billing documents listing parts, labour and any other charges. Must accurately reflect the work performed." },
                { name: "Time Sheets", detail: "Record of hours worked by each technician. Used for payroll, job costing and labour tracking." },
              ].map(({ name, detail }) => (
                <div key={name} className="bg-background/30 border border-white/8 rounded-xl p-3 space-y-1">
                  <p className="text-sm font-semibold text-foreground">{name}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Summary ── */}
      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 space-y-2">
        <p className="text-sm font-semibold text-primary">Key Takeaway</p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Legislation is not just paperwork — it defines the minimum safe standard for every job.
          The hierarchy flows from the <strong className="text-foreground">Electrical Safety Act 2002</strong> down through
          regulations, codes, standards and authority rulings. As an HVAC/R technician you must be familiar with
          the documents that apply to your work and comply with them at all times, both on-site and travelling between jobs.
        </p>
      </div>

    </div>
  );
}
