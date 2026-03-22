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
      { text: "System cooling poorly", next: "q_cooling_poorly" },
      { text: "Ice on evaporator coil", next: "q_airflow" }
    ]
  },
  q_compressor_running: {
    question: "Is the outdoor compressor running?",
    options: [
      { text: "Yes", next: "q_pressures" },
      { text: "No, only fan runs", next: "diag_compressor_electric" },
      { text: "No, nothing runs outside", next: "q_contactor" }
    ]
  },
  q_pressures: {
    question: "What are your gauge pressures?",
    options: [
      { text: "Both High & Low are equal", next: "diag_valves" },
      { text: "High is very low, Low is very low", next: "diag_leak" }
    ]
  },
  q_cooling_poorly: {
    question: "Check subcooling and superheat. What do you see?",
    options: [
      { text: "High superheat, Low subcooling", next: "diag_undercharged" },
      { text: "Low superheat, High subcooling", next: "diag_overcharged" },
      { text: "High superheat, High subcooling", next: "diag_restriction" }
    ]
  },
  q_airflow: {
    question: "Is the indoor blower motor running normally with a clean filter?",
    options: [
      { text: "Yes", next: "diag_low_charge" },
      { text: "No (Dirty/Dead)", next: "diag_airflow_fix" }
    ]
  },
  q_contactor: {
    question: "Is there 24V across the contactor coil?",
    options: [
      { text: "Yes", next: "diag_contactor_bad" },
      { text: "No", next: "diag_thermostat" }
    ]
  },
  // Diagnoses (endpoints)
  diag_compressor_electric: { isEndpoint: true, text: "Check the dual run capacitor, hard start kit, and compressor windings (Common, Start, Run). Verify thermal overload hasn't tripped." },
  diag_valves: { isEndpoint: true, text: "Internal compressor damage. Broken valves or scroll bypassing. Compressor replacement required." },
  diag_leak: { isEndpoint: true, text: "Major refrigerant leak. Perform nitrogen pressure test and locate leak with electronic sniffer/bubbles." },
  diag_undercharged: { isEndpoint: true, text: "System is undercharged. Find the leak, repair it, and recharge to proper specifications." },
  diag_overcharged: { isEndpoint: true, text: "System is overcharged. Recover excess refrigerant to reach target subcooling." },
  diag_restriction: { isEndpoint: true, text: "Liquid line restriction. Likely a clogged filter drier or failed TXV metering device." },
  diag_low_charge: { isEndpoint: true, text: "Low refrigerant charge causing the coil temperature to drop below freezing. Check for leaks." },
  diag_airflow_fix: { isEndpoint: true, text: "Restore proper airflow. Replace dirty air filters, check ductwork, or replace failed blower motor." },
  diag_contactor_bad: { isEndpoint: true, text: "Failed contactor. Verify high voltage is present on line side, then replace contactor." },
  diag_thermostat: { isEndpoint: true, text: "Control voltage missing. Check thermostat settings, indoor control board fuse, and float switches." },
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
  }
];
