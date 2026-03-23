import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wrench, ChevronDown, ChevronUp, Info } from "lucide-react";
import { ZoomableImage } from "@/components/zoomable-image";

const boltParts = [
  {
    name: "Head",
    description:
      "The top of the bolt, designed for gripping with a wrench or driver. Hex heads are the most common in HVAC/R work, allowing a spanner or socket to apply torque. The shape determines what tool is needed.",
  },
  {
    name: "Radius",
    description:
      "The curved transition zone between the head and the shank. This fillet radius strengthens the bolt at the point of highest stress concentration, reducing the risk of fatigue failure under load.",
  },
  {
    name: "Shank (Grip Length)",
    description:
      "The smooth, unthreaded cylindrical body of the bolt that passes through the clamped material. The grip length is the measurement of this unthreaded section. It bears the shear load and keeps components aligned.",
  },
  {
    name: "Runout",
    description:
      "The transition zone between the threaded section and the unthreaded shank. Thread runout is an incomplete thread and should not be within the clamped joint — only full threads should engage the nut.",
  },
  {
    name: "Thread",
    description:
      "The helical ridges that wind along the end of the bolt shaft. When engaged with a nut or tapped hole, the thread converts rotational torque into axial clamping force. Thread pitch (threads per mm/inch) determines the rate of advance per revolution.",
  },
  {
    name: "Nut",
    description:
      "A hexagonal fastener with an internal thread that screws onto the bolt. Together, the bolt and nut clamp components between the bolt head and the nut face. A washer is often used under the nut to spread the load.",
  },
];

const measurements = [
  {
    name: "Thread Length",
    description:
      "The length of the threaded portion from the tip of the bolt to where the thread runs out. Must be long enough to allow full nut engagement — typically at least 1× the bolt diameter for steel.",
  },
  {
    name: "Grip Length",
    description:
      "The length of the unthreaded shank. This should match the total thickness of the materials being clamped so that threads do not end up within the joint.",
  },
  {
    name: "Nominal Length",
    description:
      "The total measured length of the bolt from under the head to the tip — thread length plus grip length. This is the number you specify when ordering a bolt (e.g. M10 × 50mm).",
  },
];

const screwTypes = [
  {
    name: "Machine Screw",
    use: "General panel and bracket fastening. Requires a tapped hole or nut.",
    tip: "Use thread-locking compound on vibrating equipment.",
  },
  {
    name: "Self-Tapping Screw",
    use: "Sheet metal ductwork and casing assembly. Cuts its own thread as it's driven in.",
    tip: "Always pre-drill a pilot hole in thicker gauge steel.",
  },
  {
    name: "Hex Head Bolt",
    use: "Compressor mounting, condenser fan motor, and heavy structural connections.",
    tip: "Always use a calibrated torque wrench to reach the manufacturer's specified torque value.",
  },
  {
    name: "Stud Bolt",
    use: "Flange connections on chillers and large valves. Threaded on both ends.",
    tip: "Never reuse stud bolts on pressure flanges — replace as a set.",
  },
  {
    name: "Allen / Socket Head Cap Screw",
    use: "Access panels, motor terminal covers, and tight-space fastening.",
    tip: "Use the correct hex key size — a worn key can round out the socket.",
  },
];

const gradeTabs = [
  { id: "inch-bolts", label: "Inch Bolts", img: "/images/inch-fastener-grades.png", alt: "Fastener head markings and grades table for inch bolts" },
  { id: "inch-nuts", label: "Inch Nuts", img: "/images/nut-grades.png", alt: "Fastener head markings and grades table for inch nuts" },
  { id: "metric", label: "Metric", img: "/images/metric-fastener-grades.png", alt: "Fastener head markings and grades table for metric fasteners" },
];

function GradeTables() {
  const [active, setActive] = useState("inch-bolts");
  const current = gradeTabs.find((t) => t.id === active)!;
  return (
    <div className="bg-card border border-white/8 rounded-2xl overflow-hidden">
      <div className="px-6 py-4 border-b border-white/8">
        <h3 className="font-semibold text-foreground mb-3">Fastener Head Markings &amp; Grade Tables</h3>
        <div className="flex gap-2 flex-wrap">
          {gradeTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
                active === tab.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="p-6"
        >
          <ZoomableImage src={current.img} alt={current.alt} containerClassName="bg-white rounded-xl p-4" />
          {active === "inch-bolts" && (
            <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
              SAE Grade 5 (3 head marks) and Grade 8 (6 head marks) are the grades most commonly encountered in HVAC/R equipment. Proof load is the maximum stress a bolt can withstand without permanent deformation. Tensile strength is the load at which the bolt fractures.
            </p>
          )}
          {active === "inch-nuts" && (
            <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
              Always match the nut grade to the bolt grade. A Grade 5 nut on a Grade 8 bolt is a common field error that creates a weak point at the nut. Nut grades are identified by circumferential marks on the face.
            </p>
          )}
          {active === "metric" && (
            <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
              Metric property class numbers are stamped directly onto the bolt head (e.g. "10.9"). Class 8.8 is equivalent in application to imperial Grade 5; Class 10.9 equates roughly to Grade 8. Class 12.9 has no common imperial equivalent and is used in the most demanding structural applications.
            </p>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function AccordionItem({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-white/8 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-white/5 transition-colors"
      >
        <span className="font-semibold text-foreground">{title}</span>
        {open ? <ChevronUp className="w-4 h-4 text-primary" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-white/5 pt-4">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function BasicTools() {
  const [selectedPart, setSelectedPart] = useState<string | null>(null);

  return (
    <div className="min-h-screen p-6 md:p-10 max-w-5xl mx-auto">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
            <Wrench className="w-6 h-6 text-primary" />
          </div>
          <span className="text-sm font-medium text-primary uppercase tracking-widest">1B — Bolts &amp; Screws</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Bolts &amp; Screws</h1>
        <p className="text-muted-foreground text-lg">
          Understanding fasteners is fundamental to HVAC/R work. Correct selection, installation, and torque
          prevent leaks, vibration failures, and costly callbacks.
        </p>
      </motion.div>

      {/* Diagram Section */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-10 bg-card border border-white/8 rounded-2xl overflow-hidden"
      >
        <div className="px-6 py-4 border-b border-white/8 flex items-center gap-2">
          <Info className="w-4 h-4 text-primary" />
          <h2 className="font-semibold text-foreground">Bolt Anatomy Diagram</h2>
        </div>
        <div className="p-6 flex flex-col md:flex-row gap-8 items-start">
          {/* Diagram image */}
          <div className="flex-shrink-0 w-full md:w-1/2">
            <ZoomableImage
              src="/images/bolt-diagram.png"
              alt="Bolt anatomy diagram showing Thread, Nut, Runout, Shank, Radius, Head and their measurements"
              containerClassName="bg-white rounded-xl p-4"
            />
          </div>

          {/* Parts list */}
          <div className="flex-1 space-y-2">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-semibold">
              Click a part to learn more
            </p>
            {boltParts.map((part) => (
              <button
                key={part.name}
                onClick={() => setSelectedPart(selectedPart === part.name ? null : part.name)}
                className={`w-full text-left px-4 py-3 rounded-xl border transition-all duration-200 ${
                  selectedPart === part.name
                    ? "bg-primary/10 border-primary/30 text-primary"
                    : "border-white/8 hover:bg-white/5 text-foreground"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-sm">{part.name}</span>
                  {selectedPart === part.name ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-muted-foreground" />
                  )}
                </div>
                <AnimatePresence>
                  {selectedPart === part.name && (
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden text-xs text-muted-foreground mt-2 leading-relaxed"
                    >
                      {part.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </button>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Measurements */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-10"
      >
        <h2 className="text-xl font-bold text-foreground mb-4">Key Measurements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {measurements.map((m, i) => (
            <div
              key={m.name}
              className="bg-card border border-white/8 rounded-xl p-5"
            >
              <div className="text-primary font-bold text-sm uppercase tracking-widest mb-2">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-semibold text-foreground mb-2">{m.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{m.description}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Common Types */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-10"
      >
        <h2 className="text-xl font-bold text-foreground mb-4">Common Types in HVAC/R</h2>
        <div className="space-y-3">
          {screwTypes.map((s) => (
            <AccordionItem key={s.name} title={s.name}>
              <p className="mb-2">
                <span className="font-semibold text-foreground">Common Use: </span>
                {s.use}
              </p>
              <p className="flex items-start gap-2">
                <span className="text-primary font-semibold flex-shrink-0">Tip:</span>
                {s.tip}
              </p>
            </AccordionItem>
          ))}
        </div>
      </motion.section>

      {/* Fastener Types Visual */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="mb-10 bg-card border border-white/8 rounded-2xl overflow-hidden"
      >
        <div className="px-6 py-4 border-b border-white/8 flex items-center gap-2">
          <Info className="w-4 h-4 text-primary" />
          <h2 className="font-semibold text-foreground">Fastener Types at a Glance</h2>
        </div>
        <div className="p-6 flex flex-col lg:flex-row gap-8 items-start">
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <ZoomableImage
              src="/images/fastener-types.png"
              alt="Comparison of Bolt, Machine Screw, and Self Tapping Screw with cross-section showing how bolt and screw engage with material"
              containerClassName="bg-white rounded-xl p-4"
            />
          </div>

          {/* Explanation */}
          <div className="flex-1 space-y-5">
            <div>
              <h3 className="font-semibold text-foreground mb-1">Bolt</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A bolt passes completely through the material and is secured with a <span className="text-foreground font-medium">nut</span> on the other side.
                This through-fixing method spreads clamping load across both faces and is ideal for high-strength connections such as compressor mounting feet and fan motor flanges.
                A washer under both the head and the nut is best practice.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Machine Screw</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A machine screw has a uniform thread and is driven into a <span className="text-foreground font-medium">pre-tapped hole</span> or used with a nut.
                The flat or pan head sits flush or proud of the surface. Common for panel covers, electrical enclosures, and control board brackets.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Self Tapping Screw</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A self tapping screw cuts its own thread as it is driven in — no pre-tapped hole required.
                The sharp, tapered tip pierces and forms threads in sheet metal. Widely used on ductwork, casing panels, and condenser housings.
                <span className="text-primary font-medium"> Always pre-drill a pilot hole</span> in material thicker than 1.5 mm to prevent splitting or stripping.
              </p>
            </div>

            {/* Bolt vs Screw difference callout */}
            <div className="mt-4 bg-primary/5 border border-primary/15 rounded-xl p-4">
              <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">Key Difference</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A <span className="text-foreground font-medium">bolt</span> relies on a nut — the fastener itself does not thread into the material.
                A <span className="text-foreground font-medium">screw</span> threads directly into the material (tapped hole or self-cut), so no nut is needed.
                The cross-section diagram illustrates this clearly: the bolt's thread engages a separate nut beneath the joint, while the screw's tip cuts into the base material itself.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ── GRADES & STANDARDS ─────────────────────────────────── */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-10"
      >
        <h2 className="text-xl font-bold text-foreground mb-1">Bolt Grades &amp; Standards</h2>
        <p className="text-sm text-muted-foreground mb-6">
          The markings on a bolt head tell you its strength grade. Using the wrong grade can result in failure under load — always match the grade to the manufacturer's specification.
        </p>

        {/* Imperial vs Metric overview */}
        <div className="bg-card border border-white/8 rounded-2xl overflow-hidden mb-6">
          <div className="px-6 py-4 border-b border-white/8 flex items-center gap-2">
            <Info className="w-4 h-4 text-primary" />
            <h3 className="font-semibold text-foreground">Imperial vs Metric — Head Markings at a Glance</h3>
          </div>
          <div className="p-6 flex flex-col lg:flex-row gap-6 items-start">
            <div className="w-full lg:w-1/2">
              <ZoomableImage src="/images/bolt-grades-overview.png" alt="Imperial Grade 2, 5, 8 and Metric Class 8.8, 10.9, 12.9 bolt head markings" containerClassName="bg-white rounded-xl p-4" />
            </div>
            <div className="flex-1 space-y-4 text-sm text-muted-foreground">
              <div>
                <p className="font-semibold text-foreground mb-1">Imperial Grades (SAE)</p>
                <ul className="space-y-1">
                  <li><span className="text-foreground font-medium">Grade 2</span> — Low carbon steel, no head markings. Minimum strength, general purpose only.</li>
                  <li><span className="text-foreground font-medium">Grade 5</span> — Medium carbon steel, 3 radial lines on head. Common general-purpose engineering grade.</li>
                  <li><span className="text-foreground font-medium">Grade 8</span> — Medium carbon alloy steel (quenched &amp; tempered), 6 radial lines. High-strength critical applications.</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">Metric Property Classes</p>
                <ul className="space-y-1">
                  <li><span className="text-foreground font-medium">Class 8.8</span> — The number 8.8 is stamped on the head. First digit = approx. tensile strength (×100 MPa). Second digit = yield ratio. Medium strength.</li>
                  <li><span className="text-foreground font-medium">Class 10.9</span> — High strength, alloy steel. Common in compressor and motor fixings.</li>
                  <li><span className="text-foreground font-medium">Class 12.9</span> — Highest commercial grade. Alloy steel, fully hardened. Used in critical structural joints.</li>
                </ul>
              </div>
              <div className="bg-primary/5 border border-primary/15 rounded-xl p-3">
                <p className="text-xs text-primary font-semibold uppercase tracking-widest mb-1">Stainless Steel Marking</p>
                <p>Stainless fasteners are marked with their alloy designation, e.g. <span className="text-foreground font-medium">A2-70</span> on the head. A2 = 304 stainless (austenitic 18-8), 70 = 700 MPa tensile strength. A4-80 = 316 marine grade, preferred in coastal HVAC/R installations.</p>
              </div>
            </div>
          </div>
        </div>

        {/* SAE Standards background */}
        <div className="bg-card border border-white/8 rounded-2xl overflow-hidden mb-6">
          <div className="px-6 py-4 border-b border-white/8 flex items-center gap-2">
            <Info className="w-4 h-4 text-primary" />
            <h3 className="font-semibold text-foreground">SAE International — The Standards Body</h3>
          </div>
          <div className="p-6 flex flex-col lg:flex-row gap-6 items-start">
            <div className="w-full lg:w-96 flex-shrink-0">
              <ZoomableImage src="/images/sae-standards.png" alt="SAE International history and standards" containerClassName="bg-white rounded-xl p-4" />
            </div>
            <div className="flex-1 text-sm text-muted-foreground space-y-3">
              <p>The <span className="text-foreground font-medium">Society of Automotive Engineers (SAE International)</span> was formed in the early 1900s when dozens of US automobile manufacturers joined trade groups to standardise engineering components — including fasteners, screw threads, lock washers, and fittings.</p>
              <p>SAE fastener grades are now the dominant imperial standard in North America and are widely used in HVAC/R equipment manufactured in or for the US market. When working on American-made chillers, rooftop units, or condensing units, you will routinely encounter SAE-grade bolts.</p>
              <p>In contrast, most European and Australian-manufactured equipment uses <span className="text-foreground font-medium">ISO metric property classes</span> as standardised by the International Organization for Standardization (ISO).</p>
              <p className="text-primary font-medium">Always identify the fastener standard before selecting a replacement — mixing SAE and metric grades on the same joint is a common field error.</p>
            </div>
          </div>
        </div>

        {/* Grade Tables — tabbed */}
        <GradeTables />

      </motion.section>

      {/* ── THREAD PITCH ─────────────────────────────────────────── */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45 }}
        className="mb-10 bg-card border border-white/8 rounded-2xl overflow-hidden"
      >
        <div className="px-6 py-4 border-b border-white/8 flex items-center gap-2">
          <Info className="w-4 h-4 text-primary" />
          <h2 className="font-semibold text-foreground">Thread Pitch &amp; How to Measure It</h2>
        </div>
        <div className="p-6 flex flex-col lg:flex-row gap-6 items-start">
          <div className="w-full lg:w-1/2">
            <ZoomableImage src="/images/screw-pitch-gauge.png" alt="Screw pitch measurement using a pitch gauge" containerClassName="bg-white rounded-xl p-4" />
          </div>
          <div className="flex-1 text-sm text-muted-foreground space-y-3">
            <p><span className="text-foreground font-medium">Thread pitch</span> is the distance between adjacent thread crests, measured in:</p>
            <ul className="space-y-1 ml-4 list-disc">
              <li><span className="text-foreground font-medium">Metric</span> — millimetres per thread (e.g. M10 × 1.5 means 1.5 mm between threads)</li>
              <li><span className="text-foreground font-medium">Imperial</span> — threads per inch (TPI), e.g. "22G" shown in the diagram</li>
            </ul>
            <p>A <span className="text-foreground font-medium">screw pitch gauge</span> (also called a thread gauge) is a set of bladed combs with known pitches. You press each blade against the thread until one fits perfectly — that blade's marking is the pitch.</p>
            <div className="bg-primary/5 border border-primary/15 rounded-xl p-3 space-y-2">
              <p className="text-primary font-semibold text-xs uppercase tracking-widest">Why It Matters in HVAC/R</p>
              <p>Cross-threading a service port, flare fitting, or valve packing nut by using the wrong pitch is one of the most costly field mistakes. Always verify pitch before running a fastener in — especially on refrigerant line fittings and high-pressure valve connections.</p>
            </div>
            <p>Common pitches you'll encounter: <span className="text-foreground font-medium">M6×1.0, M8×1.25, M10×1.5</span> on metric equipment; <span className="text-foreground font-medium">1/4"-20, 5/16"-18, 3/8"-16</span> (UNC) on imperial equipment.</p>
          </div>
        </div>
      </motion.section>

      {/* ── HEAD MARKINGS REFERENCE ───────────────────────────────── */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mb-10"
      >
        <h2 className="text-xl font-bold text-foreground mb-4">Specialised Head Markings Reference</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-card border border-white/8 rounded-2xl overflow-hidden">
            <div className="px-5 py-3 border-b border-white/8">
              <h3 className="font-semibold text-foreground text-sm">Aircraft Bolt Head Markings (AN / NAS)</h3>
            </div>
            <div className="p-4 bg-white rounded-b-2xl">
              <ZoomableImage src="/images/aircraft-bolt-markings.png" alt="Aircraft bolt head markings including AN standard, NAS close tolerance, aluminum alloy, drilled head, clevis, and reworked bolt markings" />
            </div>
            <div className="px-5 py-4 text-xs text-muted-foreground leading-relaxed">
              Aircraft bolts follow Army-Navy (AN) and National Aerospace Standards (NAS). You may encounter these on specialist HVAC/R plant for aviation hangars or military facilities. The head markings identify the manufacturer, material (steel/aluminium alloy), and any special treatment (drilled for safety wire, corrosion resistant, close tolerance). Never substitute a standard bolt for an AN/NAS bolt in certified equipment.
            </div>
          </div>
          <div className="bg-card border border-white/8 rounded-2xl overflow-hidden">
            <div className="px-5 py-3 border-b border-white/8">
              <h3 className="font-semibold text-foreground text-sm">Manufacturer &amp; Arsenal Markings</h3>
            </div>
            <div className="p-4 bg-white rounded-b-2xl">
              <ZoomableImage src="/images/manufacturer-markings.png" alt="Auto and arsenal manufacturer bolt head markings including Tokyo Arsenal, Mopar Motors examples" />
            </div>
            <div className="px-5 py-4 text-xs text-muted-foreground leading-relaxed">
              Manufacturer markings identify who produced the fastener. Modern HVAC/R OEM equipment often features proprietary head markings to indicate factory-spec fasteners. On older plant or heritage equipment, markings can help trace the origin of a component. Always replace with an equivalent grade and material specification — never go by markings alone when ordering replacements.
            </div>
          </div>
        </div>
      </motion.section>

      {/* Key Rules */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-primary/5 border border-primary/20 rounded-2xl p-6"
      >
        <h2 className="text-lg font-bold text-foreground mb-4">Golden Rules for Fasteners</h2>
        <ul className="space-y-3 text-sm text-muted-foreground">
          {[
            "Always use a torque wrench for compressor, motor, and pressure flange bolts — over-torquing strips threads and under-torquing causes leaks.",
            "Match material: use stainless steel fasteners in coastal/humid environments to prevent galvanic corrosion.",
            "Never mix metric and imperial fasteners — thread pitch differences cause cross-threading and failure.",
            "Apply thread sealant (not PTFE tape) on tapered NPT fittings. Use thread-locking compound on machine screws subject to vibration.",
            "Replace any fastener that shows signs of corrosion, stretching, or thread damage — do not reuse critical fasteners.",
          ].map((rule, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center font-bold mt-0.5">
                {i + 1}
              </span>
              {rule}
            </li>
          ))}
        </ul>
      </motion.section>
    </div>
  );
}
