// Telangana Edition - Data Configurations for TSSPDCL Outage Predictor

const SECTORS_INIT = [
  {
    id: "siddipet",
    name: "Siddipet Agritech (సిద్దిపేట వ్యవసాయం)",
    baseRisk: 0.05,
    capacity: 55, // MW
    load: 38, // MW
    treeCover: 0.35, // Low/Medium tree cover
    componentAge: 6, // Years
    remoteness: 1.1,
    vegetationTrimmed: false,
    componentUpgraded: false,
    loadSheddingActive: false,
    status: "healthy",
    outageProbability: 0.0,
    activeOutage: null
  },
  {
    id: "medak",
    name: "Medak Substation (మెదక్ గ్రిడ్)",
    baseRisk: 0.07,
    capacity: 60,
    load: 45,
    treeCover: 0.55, // Medium vegetation
    componentAge: 11,
    remoteness: 1.3,
    vegetationTrimmed: false,
    componentUpgraded: false,
    loadSheddingActive: false,
    status: "healthy",
    outageProbability: 0.0,
    activeOutage: null
  },
  {
    id: "nalgonda",
    name: "Nalgonda Feeder (నల్గొండ ఫీడర్)",
    baseRisk: 0.06,
    capacity: 75,
    load: 54,
    treeCover: 0.25, // Dry, low canopy
    componentAge: 8,
    remoteness: 1.0,
    vegetationTrimmed: false,
    componentUpgraded: false,
    loadSheddingActive: false,
    status: "healthy",
    outageProbability: 0.0,
    activeOutage: null
  },
  {
    id: "bhadrachalam",
    name: "Bhadrachalam Forest (భద్రాచలం అడవి)",
    baseRisk: 0.14,
    capacity: 40,
    load: 22,
    treeCover: 0.85, // Very high tree canopy density
    componentAge: 14, // Aged infrastructure in forest area
    remoteness: 1.9, // Remote forest terrain
    vegetationTrimmed: false,
    componentUpgraded: false,
    loadSheddingActive: false,
    status: "healthy",
    outageProbability: 0.0,
    activeOutage: null
  },
  {
    id: "sircilla",
    name: "Sircilla Power-loom (సిరిసిల్ల పరిశ్రమ)",
    baseRisk: 0.04,
    capacity: 85,
    load: 68,
    treeCover: 0.3, // Urban/Industrial zone
    componentAge: 5,
    remoteness: 0.9,
    vegetationTrimmed: false,
    componentUpgraded: false,
    loadSheddingActive: false,
    status: "healthy",
    outageProbability: 0.0,
    activeOutage: null
  }
];

const OUTAGE_CAUSES = {
  line_snap: {
    name: "Feeder Line Snapped (ఫీడర్ తీగ తెగడం)",
    baseMinutes: 150,
    severity: "High",
    icon: "zap-off"
  },
  transformer_blown: {
    name: "Distribution Transformer Blown (ట్రాన్స్‌ఫార్మర్ పేలిపోవడం)",
    baseMinutes: 300,
    severity: "Critical",
    icon: "activity"
  },
  insulator_flashover: {
    name: "Insulator Leakage Fault (ఇన్సులేటర్ ఫ్లాష్ఓవర్)",
    baseMinutes: 100,
    severity: "Medium",
    icon: "alert-triangle"
  },
  lightning_damage: {
    name: "Lightning Arrester Failure (పిడుగుపాటు వైఫల్యం)",
    baseMinutes: 200,
    severity: "High",
    icon: "cloud-lightning"
  },
  scheduled_shedding: {
    name: "TSSPDCL Load Management (వ్యవసాయ లోడ్ నియంత్రణ)",
    baseMinutes: 90,
    severity: "Low",
    icon: "shuffle"
  }
};

const CREWS_INIT = [
  {
    id: "crew_1",
    name: "TSSPDCL Kakatiya Warriors",
    skills: "High Voltage Line Crew",
    experience: 0.95,
    fatigue: 0,
    status: "available",
    assignedSector: null,
    restTimer: 0
  },
  {
    id: "crew_2",
    name: "Singareni Grid Division",
    skills: "Heavy Transformers & Breakers",
    experience: 0.85,
    fatigue: 0,
    status: "available",
    assignedSector: null,
    restTimer: 0
  },
  {
    id: "crew_3",
    name: "Charminar Rapid Linemen",
    skills: "Urban Outage Recovery Team",
    experience: 0.90,
    fatigue: 0,
    status: "available",
    assignedSector: null,
    restTimer: 0
  }
];

const HISTORICAL_OUTAGES = [
  { date: "2026-05-02", sector: "Siddipet Agritech", cause: "Distribution Transformer Blown", duration: 280, temp: 43, wind: 10, rain: 0, load: 52 },
  { date: "2026-05-14", sector: "Bhadrachalam Forest", cause: "Feeder Line Snapped", duration: 240, temp: 33, wind: 52, rain: 35, load: 20 },
  { date: "2026-05-20", sector: "Medak Substation", cause: "Lightning Arrester Failure", duration: 180, temp: 31, wind: 60, rain: 75, load: 40 },
  { date: "2026-06-01", sector: "Nalgonda Feeder", cause: "Insulator Leakage Fault", duration: 90, temp: 45, wind: 15, rain: 10, load: 70 },
  { date: "2026-06-05", sector: "Sircilla Power-loom", cause: "Distribution Transformer Blown", duration: 320, temp: 40, wind: 12, rain: 0, load: 82 },
  { date: "2026-06-12", sector: "Bhadrachalam Forest", cause: "Feeder Line Snapped", duration: 290, temp: 29, wind: 48, rain: 55, load: 23 },
  { date: "2026-06-16", sector: "Medak Substation", cause: "Feeder Line Snapped", duration: 140, temp: 34, wind: 35, rain: 20, load: 46 },
  { date: "2026-06-19", sector: "Siddipet Agritech", cause: "Insulator Leakage Fault", duration: 110, temp: 38, wind: 18, rain: 5, load: 48 }
];

window.SECTORS_INIT = SECTORS_INIT;
window.OUTAGE_CAUSES = OUTAGE_CAUSES;
window.CREWS_INIT = CREWS_INIT;
window.HISTORICAL_OUTAGES = HISTORICAL_OUTAGES;
