// Rich mock data to populate the frontend

export const theorySections = [
  {
    id: "refrigeration-cycle",
    title: "The Refrigeration Cycle",
    content: "The basic refrigeration cycle consists of four main stages: Compression, Condensation, Expansion, and Evaporation. Heat is absorbed in the evaporator and rejected in the condenser.",
    details: [
      { step: "Compression", desc: "Low-pressure, low-temperature superheated vapor is compressed into a high-pressure, high-temperature superheated vapor." },
      { step: "Condensation", desc: "The vapor enters the condenser where it rejects heat to the ambient air/water and condenses into a high-pressure subcooled liquid." },
      { step: "Expansion", desc: "The liquid passes through a metering device, experiencing a pressure drop, becoming a low-pressure, low-temperature liquid/vapor mixture." },
      { step: "Evaporation", desc: "The mixture enters the evaporator, absorbs heat from the space, and boils off entirely into a superheated vapor before returning to the compressor." }
    ]
  },
  {
    id: "thermodynamics",
    title: "Thermodynamics in HVAC",
    content: "Understanding sensible heat (changes temperature) and latent heat (changes state) is critical.",
    details: [
      { step: "Sensible Heat", desc: "Heat energy that causes a change in temperature of a substance but does not contribute to a change in state." },
      { step: "Latent Heat", desc: "Heat energy that causes a change of state with no change in temperature (e.g., boiling water at 212°F)." },
      { step: "Superheat", desc: "Temperature of a vapor above its boiling point." },
      { step: "Subcooling", desc: "Temperature of a liquid below its condensing point." }
    ]
  }
];

export const componentsLibrary = [
  {
    id: "compressor",
    name: "Compressor",
    image: "compressor.png",
    function: "The heart of the system. Pumps refrigerant vapor, increasing its pressure and temperature.",
    location: "Outdoor unit / Mechanical room",
    faults: ["Burnt windings", "Locked rotor", "Broken valves", "Oil starvation"]
  },
  {
    id: "condenser",
    name: "Condenser Coil",
    image: "condenser.png",
    function: "Rejects heat from the high-pressure refrigerant vapor, causing it to condense into a liquid.",
    location: "Outdoor unit / Cooling tower",
    faults: ["Dirty coils", "Fan motor failure", "Bent fins"]
  },
  {
    id: "evaporator",
    name: "Evaporator Coil",
    image: "evaporator.png",
    function: "Absorbs heat from the space into the low-pressure refrigerant, causing it to boil into a vapor.",
    location: "Indoor air handler / Ductwork",
    faults: ["Frozen coil", "Dirty filter", "Blower motor failure"]
  },
  {
    id: "txv",
    name: "Thermostatic Expansion Valve (TXV)",
    image: null,
    function: "Meters the flow of liquid refrigerant into the evaporator while maintaining a constant superheat.",
    location: "Just before the evaporator inlet",
    faults: ["Lost bulb charge", "Stuck open/closed", "Clogged screen"]
  }
];

export const buildSteps = [
  { id: 1, title: "Mount Compressor", desc: "Secure the compressor to the base. Ensure rubber vibration isolators are installed to prevent noise." },
  { id: 2, title: "Install Condenser", desc: "Position the condenser coil. Braze the discharge line from the compressor to the top inlet of the condenser." },
  { id: 3, title: "Add Filter Drier", desc: "Install the liquid line filter drier after the condenser to catch moisture and debris." },
  { id: 4, title: "Install Expansion Valve", desc: "Mount the TXV near the evaporator inlet. Secure the sensing bulb to the suction line." },
  { id: 5, title: "Mount Evaporator", desc: "Position the evaporator coil. Connect the liquid line to the TXV and braze the suction line back to the compressor." },
  { id: 6, title: "Pressure Test", desc: "Pressurize the system with dry Nitrogen to 150-300 PSI. Check all brazed joints with soap bubbles." },
  { id: 7, title: "Evacuation", desc: "Connect a vacuum pump and micron gauge. Pull a deep vacuum (below 500 microns) to remove air and moisture." },
  { id: 8, title: "Charge System", desc: "Weigh in the correct factory charge of refrigerant. Verify subcooling and superheat." }
];

export const disassembleSteps = [
  { id: 1, title: "Lockout / Tagout", desc: "Disconnect main electrical power and verify with a multimeter. Secure the breaker." },
  { id: 2, title: "Recover Refrigerant", desc: "Connect a recovery machine and DOT-approved recovery cylinder. Recover all refrigerant until system reaches 0 PSI." },
  { id: 3, title: "Remove Electrical", desc: "Disconnect thermostat wires, high voltage lines to contactor, and compressor leads." },
  { id: 4, title: "Cut Piping", desc: "Using a tubing cutter (never a saw to avoid shavings), cut the suction and liquid lines." },
  { id: 5, title: "Unmount Components", desc: "Unbolt the compressor, remove coils, and safely dispose of system components and oil." }
];

export const faultTree = {
  root: {
    question: "What is the primary symptom?",
    options: [
      { text: "System not cooling at all", next: "q_compressor_running" },
      { text: "System cooling poorly / warm air", next: "q_cooling_poorly" },
      { text: "Ice forming on evaporator coil", next: "q_airflow" },
      { text: "Unusual noise from outdoor unit", next: "q_noise" },
      { text: "Water leak / excess condensate", next: "q_condensate" }
    ]
  },
  q_compressor_running: {
    question: "Is the outdoor compressor running?",
    options: [
      { text: "Yes, compressor running", next: "q_pressures" },
      { text: "No — only fan runs", next: "diag_compressor_electric" },
      { text: "No — nothing runs outside", next: "q_contactor" }
    ]
  },
  q_pressures: {
    question: "What are your gauge pressures?",
    options: [
      { text: "Both High & Low are equal (equalised)", next: "diag_valves" },
      { text: "High is very low, Low is very low", next: "diag_leak" },
      { text: "High is very high, Low is normal or high", next: "diag_dirty_condenser" }
    ]
  },
  q_cooling_poorly: {
    question: "Check subcooling and superheat readings. What do you observe?",
    options: [
      { text: "High superheat, Low subcooling", next: "diag_undercharged" },
      { text: "Low superheat, High subcooling", next: "diag_overcharged" },
      { text: "High superheat, High subcooling", next: "diag_restriction" },
      { text: "Normal superheat & subcooling", next: "q_dirty_filter" }
    ]
  },
  q_dirty_filter: {
    question: "When was the air filter last replaced?",
    options: [
      { text: "Over 3 months ago / unknown", next: "diag_dirty_filter" },
      { text: "Filter is clean and recently replaced", next: "diag_check_ducts" }
    ]
  },
  q_airflow: {
    question: "Is the indoor blower motor running normally with a clean filter?",
    options: [
      { text: "Yes — blower OK, filter clean", next: "diag_low_charge" },
      { text: "No — dirty filter or failed blower", next: "diag_airflow_fix" }
    ]
  },
  q_contactor: {
    question: "Is there 24 V across the contactor coil?",
    options: [
      { text: "Yes — 24 V present at coil", next: "diag_contactor_bad" },
      { text: "No — no control voltage", next: "diag_thermostat" }
    ]
  },
  q_noise: {
    question: "Describe the noise from the outdoor unit:",
    options: [
      { text: "Loud banging or clunking", next: "diag_noise_mechanical" },
      { text: "Rattling or vibration", next: "diag_noise_vibration" },
      { text: "High-pitched squealing", next: "diag_noise_bearing" }
    ]
  },
  q_condensate: {
    question: "Where is the water leak coming from?",
    options: [
      { text: "Indoor unit / ceiling / ductwork", next: "diag_condensate_drain" },
      { text: "Around refrigerant pipework", next: "diag_sweating_pipe" }
    ]
  },
  // Diagnoses (endpoints)
  diag_compressor_electric: { isEndpoint: true, text: "Check the dual run capacitor, hard-start kit, and compressor windings (Common, Start, Run pins). Verify thermal overload hasn't tripped. Replace capacitor if reading is outside ±6% of nameplate." },
  diag_valves: { isEndpoint: true, text: "Internal compressor damage — broken valves or scrolls bypassing. Measure winding resistance; if electrically OK, the mechanical valves are faulty. Compressor replacement required." },
  diag_leak: { isEndpoint: true, text: "Major refrigerant leak. Perform nitrogen pressure test (150–300 PSI) and locate leak with electronic sniffer or soap bubbles. Repair, re-test, evacuate, then recharge to nameplate specifications." },
  diag_dirty_condenser: { isEndpoint: true, text: "Dirty condenser coils or failed condenser fan motor causing high head pressure. Clean coils with fin comb and coil cleaner, check fan blade pitch and motor amp draw." },
  diag_undercharged: { isEndpoint: true, text: "System is undercharged. Find and repair the refrigerant leak, then recharge to target subcooling (typically 10–15 °F) and verify superheat at the evaporator outlet." },
  diag_overcharged: { isEndpoint: true, text: "System is overcharged. Recover excess refrigerant to reach target subcooling. Over-charging causes high head pressure, high amperage, and poor efficiency." },
  diag_restriction: { isEndpoint: true, text: "Liquid-line restriction. Check for a clogged filter drier (feel for temperature drop across it) or a failed/ice-clogged TXV metering device. Replace affected component." },
  diag_dirty_filter: { isEndpoint: true, text: "Restricted airflow from a dirty air filter is reducing heat transfer. Replace the filter, confirm blower motor is running at correct speed, and re-check supply air temperatures." },
  diag_check_ducts: { isEndpoint: true, text: "Check ductwork for leaks, disconnected sections, or blocked registers. Measure supply and return static pressure. Confirm evaporator coil is clean and not partially frozen." },
  diag_low_charge: { isEndpoint: true, text: "Low refrigerant charge is causing evaporator coil temperature to drop below freezing. Check for leaks with electronic sniffer, repair, and recharge to specifications." },
  diag_airflow_fix: { isEndpoint: true, text: "Restore proper airflow. Replace dirty air filters, verify ductwork is unobstructed, and check blower motor capacitor and belt (if applicable). Replace blower motor if failed." },
  diag_contactor_bad: { isEndpoint: true, text: "Failed contactor. Verify high voltage is present on the line side of the contactor, then inspect contact points for pitting or burning. Replace contactor." },
  diag_thermostat: { isEndpoint: true, text: "Control voltage missing. Check thermostat settings, wiring at control board, indoor board fuse (3 A), high-pressure cutout, low-pressure cutout, and float/condensate switches." },
  diag_noise_mechanical: { isEndpoint: true, text: "Loud banging or clunking usually indicates a broken compressor valve, loose compressor mounting bolt, or seized compressor. Shut down immediately to prevent further damage. Inspect mounting hardware; if compressor-internal, replacement is required." },
  diag_noise_vibration: { isEndpoint: true, text: "Rattling/vibration is commonly loose sheet-metal panels, debris inside the unit, or loose fan blade. Inspect and tighten all fasteners, remove debris, and ensure fan blade is secure on motor shaft." },
  diag_noise_bearing: { isEndpoint: true, text: "High-pitched squealing typically indicates a failing fan motor bearing or belt drive (if fitted). Lubricate sealed bearings only if ports are provided; otherwise replace the motor. Check belt tension if belt-driven." },
  diag_condensate_drain: { isEndpoint: true, text: "Blocked condensate drain. Clear the P-trap and drain line with a wet-vac or nitrogen purge. Check that the drain pan is level, the float switch is operational, and consider installing a condensate treatment tablet." },
  diag_sweating_pipe: { isEndpoint: true, text: "Sweating on the suction line is normal in humid conditions if the pipe insulation is intact. If insulation is missing, damaged, or saturated, replace it. Ensure adequate insulation thickness for ambient conditions." },
};

export const quizQuestions = [
  {
    id: 1,
    question: "What state is the refrigerant in as it enters the compressor?",
    options: ["High-pressure liquid", "Low-pressure liquid", "Low-pressure vapor", "High-pressure vapor"],
    correctIndex: 2
  },
  {
    id: 2,
    question: "Which component rejects heat from the system?",
    options: ["Evaporator", "Compressor", "Metering Device", "Condenser"],
    correctIndex: 3
  },
  {
    id: 3,
    question: "What does 'Superheat' indicate?",
    options: ["Vapor temperature above its boiling point", "Liquid temperature below its condensing point", "The amount of oil in the system", "The compression ratio"],
    correctIndex: 0
  },
  {
    id: 4,
    question: "If a TXV sensing bulb loses its charge, what happens to the valve?",
    options: ["It opens wide", "It closes completely", "It chatters", "It bypasses gas"],
    correctIndex: 1
  },
  {
    id: 5,
    question: "What is the primary purpose of pulling a deep vacuum on a system?",
    options: ["To test for pressure", "To remove moisture and non-condensables", "To add oil", "To clean the condenser"],
    correctIndex: 1
  },
  {
    id: 6,
    question: "Using Ohm's Law, if V = 12 V and R = 4 Ω, what is the current (I)?",
    options: ["3 A", "48 A", "0.33 A", "8 A"],
    correctIndex: 0
  },
  {
    id: 7,
    question: "Which Queensland legislation is the principal law governing electrical safety?",
    options: ["Work Health & Safety Act 2011", "Electrical Safety Act 2002", "AS/NZS 3000 Wiring Rules", "Refrigerant Handling Code of Practice"],
    correctIndex: 1
  },
  {
    id: 8,
    question: "In a series circuit, what happens if one component fails open?",
    options: ["Only that branch stops", "Voltage increases across other components", "The entire circuit stops", "Current doubles through remaining components"],
    correctIndex: 2
  },
  {
    id: 9,
    question: "What unit is electrical resistance measured in?",
    options: ["Volts (V)", "Amperes (A)", "Watts (W)", "Ohms (Ω)"],
    correctIndex: 3
  },
  {
    id: 10,
    question: "What does a liquid-line filter drier primarily remove from a refrigeration system?",
    options: ["Oil contamination", "Moisture and debris", "Non-condensable gases", "Excess refrigerant charge"],
    correctIndex: 1
  },
  {
    id: 11,
    question: "Subcooling is measured at which point in the system?",
    options: ["Compressor suction inlet", "Evaporator outlet", "Condenser outlet / liquid line", "TXV inlet bulb location"],
    correctIndex: 2
  },
  {
    id: 12,
    question: "Which gas is used when pressure-testing a refrigeration system for leaks?",
    options: ["Carbon dioxide (CO₂)", "Oxygen (O₂)", "Dry nitrogen (N₂)", "Refrigerant at low pressure"],
    correctIndex: 2
  },
  {
    id: 13,
    question: "In a parallel circuit, what happens if one branch fails open?",
    options: ["All branches stop", "Remaining branches continue operating", "Total resistance decreases to zero", "Current is halved in all branches"],
    correctIndex: 1
  },
  {
    id: 14,
    question: "Using Watt's Law, what is the power drawn by a load at 240 V drawing 10 A?",
    options: ["24 W", "24 kW", "2,400 W", "240 W"],
    correctIndex: 2
  },
  {
    id: 15,
    question: "What is the primary function of the TXV (Thermostatic Expansion Valve)?",
    options: ["Compress refrigerant vapor to high pressure", "Condense refrigerant vapor to liquid", "Meter refrigerant flow to maintain constant superheat", "Filter moisture from the liquid line"],
    correctIndex: 2
  }
];
