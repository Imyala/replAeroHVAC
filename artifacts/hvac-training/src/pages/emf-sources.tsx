import { Battery, Zap, Flame, Sun, Wind, Info } from "lucide-react";
import { cn } from "@/lib/utils";

export default function EmfSources() {
  return (
    <div className="min-h-full p-6 md:p-10 space-y-10 max-w-5xl mx-auto">

      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-orange-400/10 border border-orange-400/20 flex items-center justify-center">
            <Battery className="w-5 h-5 text-orange-400" />
          </div>
        </div>
        <h1 className="text-4xl font-display font-bold text-foreground tracking-tight mb-3">EMF Sources</h1>
        <p className="text-muted-foreground text-base leading-relaxed max-w-2xl">
          Electromotive Force (EMF) is the energy per unit charge supplied by a source to drive current around a circuit. Every electrical system requires an EMF source — the means by which electrical energy is created from another form of energy.
        </p>
      </div>

      {/* What is EMF */}
      <section className="bg-card border border-white/8 rounded-2xl overflow-hidden">
        <div className="flex items-center gap-2 px-6 py-4 border-b border-white/8">
          <Info className="w-4 h-4 text-primary" />
          <h2 className="font-semibold text-foreground">What is EMF?</h2>
        </div>
        <div className="p-6 space-y-5">
          <div className="rounded-xl border border-orange-400/20 bg-orange-400/5 p-5 text-center">
            <p className="text-xl font-display font-bold text-foreground mb-2">EMF is the force that drives electrons around a circuit.</p>
            <p className="text-sm text-muted-foreground">It is not a force in the mechanical sense — it is a measure of the <span className="text-foreground font-medium">energy supplied per coulomb of charge</span> by the source.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-background/40 border border-white/8 rounded-xl p-4 space-y-2 text-center">
              <div className="font-mono text-primary font-bold text-lg">EMF = ε</div>
              <div className="text-xs text-muted-foreground">Symbol is the Greek letter epsilon (ε), measured in <span className="text-foreground font-medium">Volts (V)</span></div>
            </div>
            <div className="bg-background/40 border border-white/8 rounded-xl p-4 space-y-2 text-center">
              <div className="font-mono text-primary font-bold text-lg">ε = W ÷ Q</div>
              <div className="text-xs text-muted-foreground">EMF = Work done (J) ÷ Charge moved (C)</div>
            </div>
            <div className="bg-background/40 border border-white/8 rounded-xl p-4 space-y-2 text-center">
              <div className="font-mono text-primary font-bold text-lg">ε = V + Ir</div>
              <div className="text-xs text-muted-foreground">EMF = Terminal voltage + voltage lost across internal resistance</div>
            </div>
          </div>
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 text-sm">
            <p className="font-semibold text-blue-300 text-xs mb-1">EMF vs Voltage</p>
            <p className="text-xs text-muted-foreground leading-relaxed">EMF is the total energy a source can supply per coulomb. <span className="text-foreground font-medium">Terminal voltage</span> is always slightly less than EMF because every real source has internal resistance — some energy is lost within the source itself before it reaches the external circuit.</p>
          </div>
        </div>
      </section>

      {/* Sources of EMF */}
      <section className="bg-card border border-white/8 rounded-2xl overflow-hidden">
        <div className="flex items-center gap-2 px-6 py-4 border-b border-white/8">
          <Zap className="w-4 h-4 text-yellow-400" />
          <h2 className="font-semibold text-foreground">Sources of EMF</h2>
        </div>
        <div className="p-6 space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            EMF can be produced by several different methods — each converts a different form of energy into electrical energy. Understanding the source type is important for selecting the right supply for a given application.
          </p>

          {[
            {
              number: "01",
              name: "Chemical (Electrochemical)",
              icon: <Battery className="w-5 h-5" />,
              colour: "text-yellow-400",
              border: "border-yellow-400/20",
              bg: "bg-yellow-400/5",
              principle: "Chemical reactions between dissimilar metals and an electrolyte cause electrons to accumulate on one electrode (–) and deplete on the other (+), creating a potential difference.",
              examples: [
                { item: "Primary cell (single use)", detail: "Zinc-carbon and alkaline batteries. Chemical reaction is irreversible — cannot be recharged." },
                { item: "Secondary cell (rechargeable)", detail: "Lead-acid (car batteries, UPS), lithium-ion (portable tools, EVs), nickel-metal hydride. Reaction can be reversed by applying an external current." },
                { item: "Fuel cell", detail: "Hydrogen and oxygen react to produce electricity and water. Used in some specialist power generation applications." },
              ],
              hvac: "12 V lead-acid batteries power control boards during mains failure. Lithium-ion batteries back up BMS (Building Management Systems) and security panels.",
            },
            {
              number: "02",
              name: "Electromagnetic Induction",
              icon: <Wind className="w-5 h-5" />,
              colour: "text-blue-400",
              border: "border-blue-400/20",
              bg: "bg-blue-400/5",
              principle: "When a conductor moves through a magnetic field (or a magnetic field changes around a conductor), an EMF is induced in the conductor. This is described by Faraday's Law of Electromagnetic Induction.",
              examples: [
                { item: "AC Generator (Alternator)", detail: "A rotating coil in a magnetic field produces a continuously alternating EMF. This is how all grid electricity is generated — coal, gas, hydro, and wind plants all spin an alternator." },
                { item: "DC Generator (Dynamo)", detail: "Similar to an alternator but uses a commutator to convert AC output to DC. Used in older vehicles and some specialist DC power applications." },
                { item: "Transformer", detail: "A changing AC magnetic field in a primary coil induces an EMF in a secondary coil, stepping voltage up or down. No moving parts. Used everywhere from power poles to plug-in adapters." },
              ],
              hvac: "The Australian grid (240 V / 415 V) is produced by electromagnetic induction in large-scale alternators. Transformers step voltages down for distribution and again for 24 V control circuits in HVAC equipment.",
            },
            {
              number: "03",
              name: "Thermoelectric (Seebeck Effect)",
              icon: <Flame className="w-5 h-5" />,
              colour: "text-red-400",
              border: "border-red-400/20",
              bg: "bg-red-400/5",
              principle: "When two dissimilar metals are joined at two junctions and those junctions are at different temperatures, an EMF is produced. The magnitude is proportional to the temperature difference.",
              examples: [
                { item: "Thermocouple", detail: "Two dissimilar wires (e.g. type K: chromel–alumel) produce a millivolt-range EMF proportional to temperature. Used as a temperature sensor." },
                { item: "Thermoelectric generator (TEG)", detail: "Uses waste heat to generate usable DC electricity. Used in remote power supplies, spacecraft, and some industrial waste heat recovery systems." },
                { item: "Peltier device (reverse)", detail: "Applying a current across a thermoelectric junction pumps heat from one side to the other — used for small cooling applications (cool boxes, CPU coolers, some instrument chambers)." },
              ],
              hvac: "Thermocouples are used as flame sensors in gas heaters and furnaces — the EMF produced by the pilot flame holds open a gas safety valve. If the flame fails, EMF drops and the valve closes automatically.",
            },
            {
              number: "04",
              name: "Photoelectric (Photovoltaic)",
              icon: <Sun className="w-5 h-5" />,
              colour: "text-amber-400",
              border: "border-amber-400/20",
              bg: "bg-amber-400/5",
              principle: "Photons (light particles) striking a semiconductor material (typically silicon) dislodge electrons, creating electron-hole pairs. The built-in electric field at the p-n junction separates the charges, producing an EMF.",
              examples: [
                { item: "Solar cell (PV cell)", detail: "A single photovoltaic cell produces approx. 0.5–0.6 V DC. Cells are wired in series to form modules (panels), and panels in series/parallel to form arrays." },
                { item: "Solar panel array", detail: "Residential: typically 5–13 kW systems. Commercial: hundreds of kW. Output varies with solar irradiance, temperature, and panel angle." },
                { item: "Photodiode / phototransistor", detail: "Small-scale photoelectric devices used as sensors — light level detection, optical encoders, flame detectors." },
              ],
              hvac: "Solar PV is increasingly used to offset electrical consumption of HVAC systems, which are often the largest energy load in commercial buildings. Some split systems are marketed with DC-coupled solar compatibility.",
            },
            {
              number: "05",
              name: "Piezoelectric",
              icon: <Zap className="w-5 h-5" />,
              colour: "text-purple-400",
              border: "border-purple-400/20",
              bg: "bg-purple-400/5",
              principle: "Certain crystalline materials (quartz, lead zirconate titanate — PZT) produce an EMF when mechanically stressed (compressed or bent). The deformation displaces the crystal's internal charge centres, generating a voltage.",
              examples: [
                { item: "Piezoelectric igniter", detail: "A sharp mechanical strike on a piezo crystal produces a high-voltage spark (up to 15–20 kV) sufficient to ignite gas. Used in gas stove igniters, lighters, and furnace spark igniters." },
                { item: "Vibration sensor / accelerometer", detail: "Used to detect mechanical vibration, shock, and pressure fluctuations in industrial monitoring." },
                { item: "Ultrasonic transducer", detail: "Piezo elements vibrate at ultrasonic frequencies — used in flow meters and level sensors." },
              ],
              hvac: "Piezoelectric igniters are used in gas ducted heaters and hot water systems to ignite the burner without a standing pilot flame, improving efficiency and eliminating the need for a thermocouple pilot valve.",
            },
            {
              number: "06",
              name: "Friction (Triboelectric)",
              icon: <Info className="w-5 h-5" />,
              colour: "text-green-400",
              border: "border-green-400/20",
              bg: "bg-green-400/5",
              principle: "When two different materials are rubbed together, electrons are transferred from one surface to the other, leaving one surface positively charged and the other negatively charged. This creates a static EMF.",
              examples: [
                { item: "Static electricity buildup", detail: "Produced by friction between dissimilar materials — walking on carpet, belts running on pulleys, plastic components rubbing together." },
                { item: "Van de Graaff generator", detail: "A belt-driven device that continuously transfers charge to a metal dome, producing very high static voltages (up to hundreds of thousands of volts) at negligible current." },
              ],
              hvac: "Triboelectric static is a hazard when handling refrigerant cylinders and flammable gases. Bonding and earthing procedures are used to dissipate static charges safely before transfer operations. Dust accumulation on belts in air handling units can also generate static.",
            },
          ].map((src) => (
            <div key={src.name} className={cn("rounded-xl border p-5 space-y-4", src.border, src.bg)}>
              <div className="flex items-start gap-3">
                <div className={cn("mt-0.5 flex-shrink-0", src.colour)}>{src.icon}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-3 mb-1">
                    <span className={cn("font-mono text-xs font-bold opacity-50", src.colour)}>{src.number}</span>
                    <h3 className={cn("font-semibold text-sm", src.colour)}>{src.name}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{src.principle}</p>
                </div>
              </div>

              <div className="space-y-2 pl-8">
                {src.examples.map((ex) => (
                  <div key={ex.item} className="flex gap-3 text-xs">
                    <span className={cn("mt-0.5 w-1.5 h-1.5 rounded-full flex-shrink-0", src.colour.replace("text-", "bg-"))} />
                    <div>
                      <span className="text-foreground font-medium">{ex.item} — </span>
                      <span className="text-muted-foreground">{ex.detail}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className={cn("ml-8 rounded-lg p-3 border text-xs", src.bg, src.border)}>
                <span className={cn("font-semibold", src.colour)}>Industry application: </span>
                <span className="text-muted-foreground">{src.hvac}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Summary comparison table */}
      <section className="bg-card border border-white/8 rounded-2xl overflow-hidden">
        <div className="flex items-center gap-2 px-6 py-4 border-b border-white/8">
          <Info className="w-4 h-4 text-primary" />
          <h2 className="font-semibold text-foreground">Summary — EMF Sources at a Glance</h2>
        </div>
        <div className="p-6 overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-white/8">
                <th className="text-left py-2 pr-4 font-semibold text-muted-foreground">Source</th>
                <th className="text-left py-2 pr-4 font-semibold text-muted-foreground">Energy Converted</th>
                <th className="text-left py-2 pr-4 font-semibold text-muted-foreground">Output Type</th>
                <th className="text-left py-2 font-semibold text-muted-foreground">Typical Application</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                { source: "Chemical", energy: "Chemical → Electrical", output: "DC", app: "Batteries, accumulators, UPS" },
                { source: "Electromagnetic Induction", energy: "Mechanical → Electrical", output: "AC (or DC with commutator)", app: "Power grid generators, transformers" },
                { source: "Thermoelectric", energy: "Heat → Electrical", output: "DC (millivolts)", app: "Thermocouples, TEGs, flame sensors" },
                { source: "Photoelectric", energy: "Light → Electrical", output: "DC", app: "Solar panels, PV systems, sensors" },
                { source: "Piezoelectric", energy: "Mechanical pressure → Electrical", output: "DC pulse (high voltage)", app: "Gas igniters, vibration sensors" },
                { source: "Friction (Triboelectric)", energy: "Mechanical friction → Electrical", output: "DC (static, very high V, low I)", app: "Static electricity — usually a hazard" },
              ].map((row) => (
                <tr key={row.source}>
                  <td className="py-2 pr-4 text-foreground font-medium">{row.source}</td>
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
