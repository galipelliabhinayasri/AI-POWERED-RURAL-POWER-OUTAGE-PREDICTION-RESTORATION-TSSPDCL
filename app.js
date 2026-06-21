// TSSPDCL Telangana Edition - Logic Engine

// Language Translations Dictionary
const LANG_DICT = {
  en: {
    title: "TSSPDCL Rural Power Outage Predictor",
    subtitle: "Real-Time Predictive Risk Dashboard & Restoration Management Engine (Telangana State)",
    budget_lbl: "Budget",
    lakhs_lbl: "Lakhs",
    env_controls: "Environmental Controls",
    env_controls_sub: "Adjust sensors to simulate stress and trigger real-time predictions.",
    temp_label: "Ambient Temperature",
    wind_label: "Wind Velocity",
    rain_label: "Rainfall Intensity",
    demand_label: "Overall Grid Demand",
    weather_presets: "Simulation Weather Presets",
    preset_clear: "Clear",
    preset_heat: "Heatwave",
    preset_rain: "Monsoon",
    preset_gale: "Cyclone",
    manual_triggers: "Manual Event Generators",
    lightning_btn: "Lightning Strike",
    grid_layout: "Live Rural Grid Layout",
    healthy_legend: "Healthy",
    risk_legend: "Risk",
    outage_legend: "Outage",
    select_sector: "Select a sector to inspect details",
    status_label: "STATUS",
    outage_prob_lbl: "Outage Probability",
    active_load_lbl: "Active Load",
    tree_cover_lbl: "Tree Canopy Density",
    comp_age_lbl: "Component Age",
    trim_btn: "Trim Vegetation (₹25k)",
    upgrade_btn: "Upgrade Grid (₹1.5L)",
    force_outage_btn: "Force Outage",
    active_outages: "Active Outages & Restoration Monitor",
    crew_mgmt: "Restoration Crew Management",
    ai_recs: "AI Assistant Recommendations",
    load_shedding: "Smart Load Shedding Planner",
    load_shedding_sub: "Shed agricultural/non-essential load to protect high-risk transformer systems.",
    analytics: "Predictive Analytics & Historical Correlation",
    ops_logs: "Real-Time System Operations Logs",
    // Alerts & Messages
    msg_normal: "Grid Status: Healthy. Monitoring environmental sensors.",
    msg_normal_tel: "(గ్రిడ్ స్థితి: సాధారణం. వాతావరణ సెన్సార్ల పర్యవేక్షణ జరుగుతోంది.)",
    msg_outage: "ALERT: Outage active in",
    msg_outage_tel: "(హెచ్చరిక: గ్రిడ్‌లో లోపం. మరమ్మతు బృందాలు బయలుదేరాయి.)",
    msg_thermal: "THERMAL ALERT: Severe heatwave risk. Transformer overload imminent.",
    msg_thermal_tel: "(థర్మల్ హెచ్చరిక: తీవ్రమైన వేడి. ట్రాన్స్ఫార్మర్ లోడ్ అధికం.)",
    msg_wind: "WIND DANGER: Severe wind velocity. Risk of lines snapping.",
    msg_wind_tel: "(గాలి తీవ్రత హెచ్చరిక: బలమైన గాలులు. ప్రసార తీగ తెగిపోయే ప్రమాదం.)",
    msg_general_danger: "GRID RISK: Multiple systems under stress. Recommend load shedding.",
    msg_general_danger_tel: "(గ్రిడ్ ప్రమాదం: బహుళ వ్యవస్థల వైఫల్య ముప్పు.)"
  },
  te: {
    title: "TSSPDCL గ్రామీణ విద్యుత్ నిలుపుదల అంచనా",
    subtitle: "నిజ-సమయ రిస్క్ డాష్‌బోర్డ్ & పునరుద్ధరణ నిర్వహణ ఇంజన్ (తెలంగాణ రాష్ట్రం)",
    budget_lbl: "బడ్జెట్",
    lakhs_lbl: "లక్షలు",
    env_controls: "వాతావరణ నియంత్రణలు",
    env_controls_sub: "నిజ-సమయ అంచనాలను తెలుసుకోవడానికి సెన్సార్లను సర్దుబాటు చేయండి.",
    temp_label: "పరిసర ఉష్ణోగ్రత",
    wind_label: "గాలి వేగం",
    rain_label: "వర్షపాతం తీవ్రత",
    demand_label: "మొత్తం గ్రిడ్ డిమాండ్",
    weather_presets: "వాతావరణ అనుకరణలు",
    preset_clear: "సాధారణం",
    preset_heat: "వడగాల్పులు",
    preset_rain: "వర్షాలు",
    preset_gale: "తుఫాను",
    manual_triggers: "ఈవెంట్ జనరేటర్లు",
    lightning_btn: "పిడుగుపాటు",
    grid_layout: "లైవ్ గ్రామీణ గ్రిడ్ లేఅవుట్",
    healthy_legend: "సాధారణం",
    risk_legend: "ప్రమాదం",
    outage_legend: "నిలుపుదల",
    select_sector: "వివరాల కోసం ఒక సెక్టార్ క్లిక్ చేయండి",
    status_label: "స్థితి",
    outage_prob_lbl: "నిలుపుదల సంభావ్యత",
    active_load_lbl: "యాక్టివ్ లోడ్",
    tree_cover_lbl: "చెట్ల సాంద్రత",
    comp_age_lbl: "పరికరాల వయస్సు",
    trim_btn: "చెట్లు నరకడం (₹25వేలు)",
    upgrade_btn: "గ్రిడ్ ఆధునీకరణ (₹1.5లక్షలు)",
    force_outage_btn: "విద్యుత్ నిలిపివేయి",
    active_outages: "విద్యుత్ నిలుపుదలలు & పునరుద్ధరణ పర్యవేక్షణ",
    crew_mgmt: "పునరుద్ధరణ బృందాల నిర్వహణ",
    ai_recs: "AI సహాయక సిఫార్సులు",
    load_shedding: "స్మార్ట్ లోడ్ షెడ్డింగ్ ప్లానర్",
    load_shedding_sub: "ట్రాన్స్‌ఫార్మర్‌ రక్షణ కోసం వ్యవసాయ లోడ్‌ను నిలిపివేయండి.",
    analytics: "అంచనా విశ్లేషణలు & చారిత్రక డేటా",
    ops_logs: "ఆపరేషన్స్ లాగ్స్",
    // Alerts & Messages
    msg_normal: "గ్రిడ్ స్థితి: సాధారణం. వాతావరణ సెన్సార్ల పర్యవేక్షణ జరుగుతోంది.",
    msg_normal_tel: "",
    msg_outage: "అలర్ట్: విద్యుత్ సరఫరా నిలిచింది: ",
    msg_outage_tel: "(మరమ్మతు సిబ్బందిని కేటాయించండి)",
    msg_thermal: "థర్మల్ అలర్ట్: విపరీతమైన ఎండ. ట్రాన్స్ఫార్మర్ ఓవర్లోడ్ ముప్పు.",
    msg_thermal_tel: "",
    msg_wind: "గాలి తీవ్రత హెచ్చరిక: బలమైన ఈదురు గాలులు. ప్రసార తీగ తెగిపోయే ప్రమాదం.",
    msg_wind_tel: "",
    msg_general_danger: "గ్రిడ్ ముప్పు: బహుళ వ్యవస్థల వైఫల్య ముప్పు. లోడ్ తగ్గించండి.",
    msg_general_danger_tel: ""
  },
  hi: {
    title: "TSSPDCL ग्रामीण बिजली कटौती पूर्वानुमान",
    subtitle: "वास्तविक समय जोखिम डैशबोर्ड और बहाली प्रबंधन प्रणाली (तेलंगाना राज्य)",
    budget_lbl: "बजट",
    lakhs_lbl: "लाख",
    env_controls: "पर्यावरण नियंत्रण",
    env_controls_sub: "पूर्वानुमानों को ट्रिगर करने के लिए सेंसर समायोजित करें।",
    temp_label: "तापमान",
    wind_label: "हवा की गति",
    rain_label: "वर्षा की तीव्रता",
    demand_label: "कुल ग्रिड मांग",
    weather_presets: "मौसम प्रीसेट",
    preset_clear: "सामान्य",
    preset_heat: "लू (गर्मी)",
    preset_rain: "मानसून",
    preset_gale: "चक्रवात",
    manual_triggers: "घटनाक्रम जनक",
    lightning_btn: "बिजली गिरना",
    grid_layout: "लाइव ग्रामीण ग्रिड लेआउट",
    healthy_legend: "सामान्य",
    risk_legend: "जोखिम",
    outage_legend: "कटौती",
    select_sector: "विवरण देखने के लिए किसी क्षेत्र को चुनें",
    status_label: "स्थिति",
    outage_prob_lbl: "कटौती की संभावना",
    active_load_lbl: "सक्रिय लोड",
    tree_cover_lbl: "पेड़ों का घनत्व",
    comp_age_lbl: "उपकरण की आयु",
    trim_btn: "पेड़ छंटाई (₹25k)",
    upgrade_btn: "ग्रिड नवीनीकरण (₹1.5L)",
    force_outage_btn: "कटौती करें",
    active_outages: "सक्रिय कटौती और बहाली मॉनिटर",
    crew_mgmt: "बहाली दल प्रबंधन",
    ai_recs: "AI सहायक अनुशंसाएँ",
    load_shedding: "स्मार्ट लोड शेडिंग नियोजक",
    load_shedding_sub: "ट्रांसफार्मर की सुरक्षा के लिए कृषि लोड शेडिंग करें।",
    analytics: "पूर्वानुमानित विश्लेषण और डेटा",
    ops_logs: "सिस्टम संचालन लॉग",
    // Alerts & Messages
    msg_normal: "ग्रिड स्थिति: सामान्य। मौसम सेंसर की निगरानी हो रही है।",
    msg_normal_tel: "",
    msg_outage: "अलर्ट: ग्रिड बंद है: ",
    msg_outage_tel: "(बहाली कार्य प्रगति पर)",
    msg_thermal: "थर्मल अलर्ट: भयंकर लू का प्रकोप। ट्रांसफार्मर ओवरलोड खतरा।",
    msg_thermal_tel: "",
    msg_wind: "हवा का खतरा: अत्यधिक तेज आंधी। तार टूटने की आशंका।",
    msg_wind_tel: "",
    msg_general_danger: "ग्रिड संकट: कई सब-स्टेशनों पर लोड बढ़ा। बिजली कटौती करें।"
  }
};

// Initialize State
let sectors = JSON.parse(JSON.stringify(window.SECTORS_INIT));
let crews = JSON.parse(JSON.stringify(window.CREWS_INIT));
let selectedSectorId = null;
let currentPreset = 'clear';
let currentLanguage = 'en';
let budget = 5.0; // ₹5.00 Lakhs starting operations budget

let weather = {
  temp: 32,
  wind: 15,
  rain: 0,
  demand: 100
};

let activeOutages = [];
let logs = [];
let charts = {};
let riskHistory = [];
const maxHistoryPoints = 12;

// Map Coordinates for Telangana sectors (percentage offsets)
const SECTOR_COORDS = {
  siddipet: { x: 45, y: 18 },
  medak: { x: 18, y: 35 },
  nalgonda: { x: 48, y: 72 },
  bhadrachalam: { x: 80, y: 45 },
  sircilla: { x: 15, y: 65 }
};

// Grid lines connecting sub-stations
const GRID_LINKS = [
  { from: 'medak', to: 'siddipet' },
  { from: 'siddipet', to: 'bhadrachalam' },
  { from: 'medak', to: 'sircilla' },
  { from: 'sircilla', to: 'nalgonda' },
  { from: 'bhadrachalam', to: 'nalgonda' }
];

// DOM Elements
const dom = {
  tempInput: document.getElementById('input-temp'),
  tempVal: document.getElementById('val-temp'),
  windInput: document.getElementById('input-wind'),
  windVal: document.getElementById('val-wind'),
  rainInput: document.getElementById('input-rain'),
  rainVal: document.getElementById('val-rain'),
  demandInput: document.getElementById('input-demand'),
  demandVal: document.getElementById('val-demand'),
  
  weatherTicker: document.getElementById('weather-ticker'),
  tickerBadge: document.getElementById('ticker-badge'),
  tickerMessage: document.getElementById('ticker-message'),
  clock: document.getElementById('live-timestamp'),
  
  mapCanvas: document.getElementById('map-canvas'),
  svgConnectors: document.getElementById('svg-connectors'),
  
  inspectName: document.getElementById('inspect-name'),
  inspectStatusBadge: document.getElementById('inspect-status-badge'),
  inspectProb: document.getElementById('inspect-prob'),
  inspectLoad: document.getElementById('inspect-load'),
  inspectTree: document.getElementById('inspect-tree'),
  inspectAge: document.getElementById('inspect-age'),
  
  btnTrim: document.getElementById('btn-trim'),
  btnUpgrade: document.getElementById('btn-upgrade'),
  btnForceOutage: document.getElementById('btn-force-outage'),
  
  activeOutagesList: document.getElementById('active-outages-list'),
  crewsContainer: document.getElementById('crews-container'),
  aiRecommendations: document.getElementById('ai-recommendations'),
  sheddingList: document.getElementById('shedding-list'),
  systemLogs: document.getElementById('system-logs'),
  budgetAmount: document.getElementById('budget-amount')
};

// Start System
window.addEventListener('DOMContentLoaded', () => {
  setupEventListeners();
  addLog("TSSPDCL Grid Management System Online. Budget loaded.", "info");
  addLog("Region: Northern-Southern Telangana Interconnected Feeders.", "info");
  
  // Render initial panels
  renderMap();
  renderSheddingControls();
  renderCrews();
  
  // Predict initial risks
  recalculatePredictiveRisk();
  
  // Setup Charts
  initCharts();
  
  // Draw connectors after coordinates are set and rendered
  setTimeout(drawMapConnections, 100);
  window.addEventListener('resize', drawMapConnections);
  
  // Run live ticker loop
  setInterval(tickSystem, 1500);
});

// Event Listeners for Controls
function setupEventListeners() {
  dom.tempInput.addEventListener('input', (e) => {
    weather.temp = parseInt(e.target.value);
    dom.tempVal.textContent = `${weather.temp}°C`;
    clearPresetHighlight();
    recalculatePredictiveRisk();
  });
  
  dom.windInput.addEventListener('input', (e) => {
    weather.wind = parseInt(e.target.value);
    dom.windVal.textContent = `${weather.wind} km/h`;
    clearPresetHighlight();
    recalculatePredictiveRisk();
  });
  
  dom.rainInput.addEventListener('input', (e) => {
    weather.rain = parseInt(e.target.value);
    dom.rainVal.textContent = `${weather.rain} mm/h`;
    clearPresetHighlight();
    recalculatePredictiveRisk();
  });
  
  dom.demandInput.addEventListener('input', (e) => {
    weather.demand = parseInt(e.target.value);
    dom.demandVal.textContent = `${weather.demand}%`;
    recalculatePredictiveRisk();
  });
}

// Language Selector Logic
function setLanguage(lang) {
  currentLanguage = lang;
  
  // Highlight active button
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
  document.getElementById(`lang-${lang}`).classList.add('active');
  
  // Update translation text nodes
  document.querySelectorAll('[data-tr]').forEach(el => {
    const key = el.getAttribute('data-tr');
    if (LANG_DICT[lang] && LANG_DICT[lang][key]) {
      el.textContent = LANG_DICT[lang][key];
    }
  });
  
  // Force update dynamic panels
  recalculatePredictiveRisk();
  renderActiveOutages();
  renderCrews();
  renderSheddingControls();
}

// Custom Presets
function setPreset(preset) {
  currentPreset = preset;
  
  document.querySelectorAll('.btn-preset').forEach(btn => btn.classList.remove('active'));
  document.getElementById(`preset-${preset}`).classList.add('active');
  
  if (preset === 'clear') {
    weather.temp = 32;
    weather.wind = 12;
    weather.rain = 0;
    addLog("Preset Loaded: Clear Sky (సాధారణ వాతావరణం).", "info");
  } else if (preset === 'heatwave') {
    weather.temp = 48;
    weather.wind = 10;
    weather.rain = 0;
    addLog("Preset Loaded: Severe Heatwave (తీవ్ర ఎండ - ఎండదెబ్బ).", "warning");
  } else if (preset === 'monsoon') {
    weather.temp = 26;
    weather.wind = 42;
    weather.rain = 70;
    addLog("Preset Loaded: Monsoon Storm (వర్షపు గాలులు - పిడుగులు).", "warning");
  } else if (preset === 'cyclonic') {
    weather.temp = 24;
    weather.wind = 80;
    weather.rain = 50;
    addLog("Preset Loaded: Cyclonic Wind (తీవ్ర తుఫాను గాలి).", "danger");
  }
  
  // Sync sliders
  dom.tempInput.value = weather.temp;
  dom.tempVal.textContent = `${weather.temp}°C`;
  
  dom.windInput.value = weather.wind;
  dom.windVal.textContent = `${weather.wind} km/h`;
  
  dom.rainInput.value = weather.rain;
  dom.rainVal.textContent = `${weather.rain} mm/h`;
  
  recalculatePredictiveRisk();
}

function clearPresetHighlight() {
  document.querySelectorAll('.btn-preset').forEach(btn => btn.classList.remove('active'));
}

// LOGGING
function addLog(msg, type = "info") {
  const timestamp = new Date().toLocaleTimeString();
  const log = { timestamp, msg, type };
  logs.unshift(log);
  
  if (logs.length > 50) logs.pop();
  
  const div = document.createElement('div');
  div.className = `log-entry`;
  div.innerHTML = `
    <span class="log-time">[${timestamp}]</span>
    <span class="log-msg ${type}">${msg}</span>
  `;
  
  dom.systemLogs.insertBefore(div, dom.systemLogs.firstChild);
}

// Update Budget Display
function updateBudgetDisplay() {
  dom.budgetAmount.textContent = `₹${budget.toFixed(2)}`;
}

// Prediction Model AI Engine
function recalculatePredictiveRisk() {
  let averageRisk = 0;
  
  sectors.forEach(s => {
    if (s.status === 'outage') {
      s.outageProbability = 1.0;
      return;
    }
    
    // 1. Wind Drag
    const maxWindSpeed = 90;
    const trimMultiplier = s.vegetationTrimmed ? 0.25 : 1.0;
    const windStress = Math.pow(weather.wind / maxWindSpeed, 2.2) * s.treeCover * trimMultiplier * 0.65;
    
    // 2. Thermal Overload
    const baseHeatLimit = 35;
    const heatStress = weather.temp > baseHeatLimit ? Math.min(1, (weather.temp - baseHeatLimit) / 15) * 0.15 : 0;
    
    const effectiveDemandMultiplier = s.loadSheddingActive ? 0.55 : (weather.demand / 100);
    const activeLoad = s.load * effectiveDemandMultiplier;
    const overloadRatio = activeLoad / s.capacity;
    
    const ageMultiplier = s.componentUpgraded ? 0.5 : (s.componentAge / 15);
    const thermalStress = Math.pow(overloadRatio, 3.5) * 0.45 * ageMultiplier + heatStress;
    
    // 3. Rain Leakage
    const maxRainfall = 100;
    const rainLeakage = (weather.rain / maxRainfall) * (s.componentAge / 15) * 0.18;
    
    let probability = s.baseRisk + windStress + thermalStress + rainLeakage;
    probability = Math.max(0.02, Math.min(0.99, probability));
    s.outageProbability = probability;
    
    if (probability > 0.70) {
      s.status = 'warning';
    } else {
      s.status = 'healthy';
    }
    
    averageRisk += probability;
  });
  
  averageRisk /= sectors.length;
  updateRiskTrendChart(averageRisk);
  
  updateMapNodes();
  updateAlertTicker();
  updateRecommendations();
  
  if (selectedSectorId) {
    inspectSector(selectedSectorId);
  }
}

// Alert Ticker Bilingual Logic
function updateAlertTicker() {
  let highestRisk = 0;
  sectors.forEach(s => {
    if (s.outageProbability > highestRisk) highestRisk = s.outageProbability;
  });
  
  dom.weatherTicker.className = "weather-alert-ticker";
  
  const dict = LANG_DICT[currentLanguage];
  
  if (activeOutages.length > 0) {
    dom.weatherTicker.classList.add("danger");
    dom.tickerBadge.textContent = currentLanguage === 'en' ? "OUTAGE" : (currentLanguage === 'te' ? "విద్యుత్ నిలుపుదల" : "बिजली कटौती");
    
    const outNames = activeOutages.map(o => getSectorName(o.sectorId).split(' ')[0]).join(', ');
    dom.tickerMessage.innerHTML = `<strong>ALERT:</strong> ${dict.msg_outage} ${outNames}. ${dict.msg_outage_tel}`;
  } else if (highestRisk > 0.75) {
    dom.weatherTicker.classList.add("danger");
    dom.tickerBadge.textContent = currentLanguage === 'en' ? "CRITICAL" : (currentLanguage === 'te' ? "తీవ్ర ముప్పు" : "गंभीर खतरा");
    
    if (weather.wind > 55) {
      dom.tickerMessage.innerHTML = `<strong>${dict.msg_wind}</strong> ${dict.msg_wind_tel}`;
    } else if (weather.temp > 45) {
      dom.tickerMessage.innerHTML = `<strong>${dict.msg_thermal}</strong> ${dict.msg_thermal_tel}`;
    } else {
      dom.tickerMessage.innerHTML = `<strong>${dict.msg_general_danger}</strong> ${dict.msg_general_danger_tel}`;
    }
  } else if (highestRisk > 0.45) {
    dom.weatherTicker.classList.add("warning");
    dom.tickerBadge.textContent = currentLanguage === 'en' ? "WARNING" : (currentLanguage === 'te' ? "హెచ్చరిక" : "चेतावनी");
    dom.tickerMessage.textContent = currentLanguage === 'en' 
      ? "Warning: Unfavorable environmental sensors. Substation loads rising."
      : (currentLanguage === 'te' ? "హెచ్చరిక: అనుకూలించని వాతావరణ పరిస్థితులు. లోడ్ పెరుగుతోంది." : "चेतावनी: प्रतिकूल मौसम की स्थिति। सब-स्टेशन लोड बढ़ रहा है।");
  } else {
    dom.weatherTicker.classList.add("healthy");
    dom.tickerBadge.textContent = currentLanguage === 'en' ? "NORMAL" : (currentLanguage === 'te' ? "సాధారణం" : "सामान्य");
    dom.tickerMessage.textContent = dict.msg_normal + " " + dict.msg_normal_tel;
  }
}

// AI Recommendations Generator
function updateRecommendations() {
  const recommendationsList = [];
  
  sectors.forEach(s => {
    if (s.status === 'outage') {
      recommendationsList.push({
        type: 'danger',
        text: `<strong>[${s.name.split(' ')[0]}] Outage active:</strong> Assign team immediately to save estimated restoration time.`
      });
      return;
    }
    
    const windHazard = Math.pow(weather.wind / 90, 2.2) * s.treeCover * 0.65;
    if (windHazard > 0.15 && !s.vegetationTrimmed) {
      recommendationsList.push({
        type: 'warning',
        text: `<strong>[${s.name.split(' ')[0]}] Trim Trees:</strong> Storm risk elevated. Trim vegetation (₹25k) to shield lines.`
      });
    }
    
    const effectiveDemandMultiplier = s.loadSheddingActive ? 0.55 : (weather.demand / 100);
    const activeLoad = s.load * effectiveDemandMultiplier;
    const loadStress = activeLoad / s.capacity;
    if (loadStress > 0.88 && !s.loadSheddingActive) {
      recommendationsList.push({
        type: 'warning',
        text: `<strong>[${s.name.split(' ')[0]}] Overload:</strong> Transformer load at ${(loadStress*100).toFixed(0)}%. Shed non-essential feeders.`
      });
    }
    
    if (s.componentAge > 10 && !s.componentUpgraded && s.outageProbability > 0.4) {
      recommendationsList.push({
        type: 'info',
        text: `<strong>[${s.name.split(' ')[0]}] Modernize Grid:</strong> Substation age is ${s.componentAge} yrs. Upgrade component (₹1.5L) to halve risk.`
      });
    }
  });
  
  if (recommendationsList.length === 0) {
    recommendationsList.push({
      type: 'healthy',
      text: `<strong>Grid Operations Stable:</strong> No warnings. Substation performance within normal thresholds.`
    });
  }
  
  dom.aiRecommendations.innerHTML = recommendationsList.map(rec => {
    let icon = "info";
    let cssClass = "rec-item";
    if (rec.type === 'danger') {
      icon = "alert-octagon";
      cssClass += " high-risk";
    } else if (rec.type === 'warning') {
      icon = "alert-triangle";
      cssClass += " high-risk";
    } else if (rec.type === 'healthy') {
      icon = "shield-check";
    }
    return `
      <div class="${cssClass}">
        <i data-lucide="${icon}"></i>
        <div>${rec.text}</div>
      </div>
    `;
  }).join('');
  
  lucide.createIcons();
}

// Render Grid Map Nodes
function renderMap() {
  dom.mapCanvas.innerHTML = '';
  
  sectors.forEach(s => {
    const coords = SECTOR_COORDS[s.id];
    const node = document.createElement('div');
    node.id = `node-${s.id}`;
    node.className = `grid-sector-node`;
    node.style.left = `${coords.x}%`;
    node.style.top = `${coords.y}%`;
    
    node.addEventListener('click', () => {
      selectSector(s.id);
    });
    
    dom.mapCanvas.appendChild(node);
  });
}

function updateMapNodes() {
  sectors.forEach(s => {
    const node = document.getElementById(`node-${s.id}`);
    if (!node) return;
    
    node.className = 'grid-sector-node';
    let statusText = currentLanguage === 'en' ? 'HEALTHY' : (currentLanguage === 'te' ? 'సాధారణం' : 'सामान्य');
    
    if (s.status === 'outage') {
      node.classList.add('status-outage');
      statusText = currentLanguage === 'en' ? 'FAULT' : (currentLanguage === 'te' ? 'నిలుపుదల' : 'कटौती');
    } else if (s.outageProbability > 0.70) {
      node.classList.add('status-warning');
      statusText = currentLanguage === 'en' ? 'CRITICAL' : (currentLanguage === 'te' ? 'తీవ్ర ముప్పు' : 'अति गंभीर');
    } else if (s.outageProbability > 0.40) {
      node.classList.add('status-warning');
      statusText = currentLanguage === 'en' ? 'RISK' : (currentLanguage === 'te' ? 'ముప్పు' : 'जोखिम');
    }
    
    // Display Sector Name in Selected Language
    let displayShortName = s.name.split(' ')[0];
    if (currentLanguage === 'te') {
      displayShortName = s.name.match(/\((.*?)\)/)[1]; // Extract Telugu from parenthesis
    } else if (currentLanguage === 'hi') {
      // Simple Hindi transliterations for the display node
      const hindiNames = { siddipet: 'सिद्दीपेट', medak: 'मेडक', nalgonda: 'नलगोंडा', bhadrachalam: 'भद्राचलम', sircilla: 'सिरसिल्ला' };
      displayShortName = hindiNames[s.id];
    }
    
    node.innerHTML = `
      <div class="sector-node-name">${displayShortName}</div>
      <div class="sector-node-val">${s.status === 'outage' ? 'OFF' : (s.outageProbability * 100).toFixed(0) + '%'}</div>
      <div class="sector-node-status">${statusText}</div>
      ${s.loadSheddingActive ? `<div class="shedding-badge">${currentLanguage === 'en' ? 'SHEDDING' : (currentLanguage === 'te' ? 'నియంత్రణ' : 'कटौती')}</div>` : ''}
    `;
  });
}

// Draw Connections SVG
function drawMapConnections() {
  dom.svgConnectors.innerHTML = '';
  const canvasRect = dom.mapCanvas.getBoundingClientRect();
  
  GRID_LINKS.forEach(link => {
    const fromNode = document.getElementById(`node-${link.from}`);
    const toNode = document.getElementById(`node-${link.to}`);
    
    if (!fromNode || !toNode) return;
    
    const fromRect = fromNode.getBoundingClientRect();
    const toRect = toNode.getBoundingClientRect();
    
    const x1 = (fromRect.left + fromRect.width / 2) - canvasRect.left;
    const y1 = (fromRect.top + fromRect.height / 2) - canvasRect.top;
    
    const x2 = (toRect.left + toRect.width / 2) - canvasRect.left;
    const y2 = (toRect.top + toRect.height / 2) - canvasRect.top;
    
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', x1);
    line.setAttribute('y1', y1);
    line.setAttribute('x2', x2);
    line.setAttribute('y2', y2);
    
    const s1 = getSector(link.from);
    const s2 = getSector(link.to);
    
    if (s1.status === 'outage' || s2.status === 'outage') {
      line.setAttribute('class', 'grid-connection-line outage');
    } else if (s1.status === 'warning' || s2.status === 'warning') {
      line.setAttribute('class', 'grid-connection-line warning');
    } else {
      line.setAttribute('class', 'grid-connection-line');
    }
    
    dom.svgConnectors.appendChild(line);
  });
}

// Selector Helpers
function getSector(id) {
  return sectors.find(s => s.id === id);
}

function getSectorName(id) {
  const s = getSector(id);
  if (!s) return id;
  if (currentLanguage === 'te') {
    return s.name.match(/\((.*?)\)/)[1];
  }
  return s.name.split(' ')[0];
}

// Select Sector for Details Inspector
function selectSector(id) {
  selectedSectorId = id;
  
  document.querySelectorAll('.grid-sector-node').forEach(node => {
    node.style.boxShadow = '';
    node.style.transform = '';
  });
  
  const activeNode = document.getElementById(`node-${id}`);
  if (activeNode) {
    activeNode.style.boxShadow = '0 0 0 3px var(--primary), 0 0 20px var(--primary-glow)';
    activeNode.style.transform = 'scale(1.05)';
  }
  
  dom.btnTrim.disabled = false;
  dom.btnUpgrade.disabled = false;
  dom.btnForceOutage.disabled = false;
  
  inspectSector(id);
}

// Inspect panel updating
function inspectSector(id) {
  const s = getSector(id);
  if (!s) return;
  
  let displayName = s.name;
  if (currentLanguage === 'te') {
    displayName = s.name; // Keep full name showing Telugu
  } else if (currentLanguage === 'hi') {
    const hindiFullNames = {
      siddipet: "सिद्दीपेट कृषि क्षेत्र",
      medak: "मेडक ग्रिड सब-स्टेशन",
      nalgonda: "नलगोंडा फीडर",
      bhadrachalam: "भद्राचलम वन क्षेत्र",
      sircilla: "सिरसिल्ला पावर-लूम क्षेत्र"
    };
    displayName = hindiFullNames[s.id];
  }
  dom.inspectName.textContent = displayName;
  
  dom.inspectStatusBadge.className = 'crew-status-badge';
  if (s.status === 'outage') {
    dom.inspectStatusBadge.textContent = currentLanguage === 'en' ? 'GRID FAULT' : (currentLanguage === 'te' ? 'వైఫల్యం' : 'ग्रिड फॉल्ट');
    dom.inspectStatusBadge.classList.add('resting');
    dom.btnForceOutage.disabled = true;
  } else if (s.outageProbability > 0.70) {
    dom.inspectStatusBadge.textContent = currentLanguage === 'en' ? 'HIGH RISK' : (currentLanguage === 'te' ? 'తీవ్ర ముప్పు' : 'उच्च जोखिम');
    dom.inspectStatusBadge.classList.add('resting');
    dom.btnForceOutage.disabled = false;
  } else {
    dom.inspectStatusBadge.textContent = currentLanguage === 'en' ? 'OPERATIONAL' : (currentLanguage === 'te' ? 'క్రియాశీలం' : 'सक्रिय');
    dom.inspectStatusBadge.classList.add('available');
    dom.btnForceOutage.disabled = false;
  }
  
  dom.inspectProb.textContent = `${(s.outageProbability * 100).toFixed(0)}%`;
  
  const effectiveDemandMultiplier = s.loadSheddingActive ? 0.55 : (weather.demand / 100);
  const activeLoadVal = (s.load * effectiveDemandMultiplier).toFixed(1);
  dom.inspectLoad.textContent = `${activeLoadVal} / ${s.capacity} MW`;
  
  dom.inspectTree.textContent = `${(s.treeCover * 100).toFixed(0)}%`;
  dom.inspectAge.textContent = `${s.componentAge} ${currentLanguage === 'en' ? 'Years' : (currentLanguage === 'te' ? 'సంవత్సరాలు' : 'वर्ष')}`;
  
  // Buttons
  if (s.vegetationTrimmed) {
    dom.btnTrim.innerHTML = `<i data-lucide="check"></i> ${currentLanguage === 'en' ? 'Trimmed' : (currentLanguage === 'te' ? 'నరకబడింది' : 'छंटाई पूर्ण')}`;
    dom.btnTrim.disabled = true;
  } else {
    const lbl = currentLanguage === 'en' ? 'Trim Vegetation (₹25k)' : (currentLanguage === 'te' ? 'చెట్లు నరకడం (₹25వేలు)' : 'पेड़ छंटाई (₹25k)');
    dom.btnTrim.innerHTML = `<i data-lucide="scissors"></i> ${lbl}`;
    dom.btnTrim.disabled = false;
  }
  
  if (s.componentUpgraded) {
    dom.btnUpgrade.innerHTML = `<i data-lucide="check"></i> ${currentLanguage === 'en' ? 'Upgraded' : (currentLanguage === 'te' ? 'నవీకరించబడింది' : 'अपग्रेड पूर्ण')}`;
    dom.btnUpgrade.disabled = true;
  } else {
    const lbl = currentLanguage === 'en' ? 'Upgrade Grid (₹1.5L)' : (currentLanguage === 'te' ? 'గ్రిడ్ ఆధునీకరణ (₹1.5లక్షలు)' : 'ग्रिड अपग्रेड (₹1.5L)');
    dom.btnUpgrade.innerHTML = `<i data-lucide="trending-up"></i> ${lbl}`;
    dom.btnUpgrade.disabled = false;
  }
  
  const outageLbl = currentLanguage === 'en' ? 'Force Outage' : (currentLanguage === 'te' ? 'విద్యుత్ నిలుపుదల చేయి' : 'बिजली कटौती करें');
  dom.btnForceOutage.innerHTML = `<i data-lucide="zap-off"></i> ${outageLbl}`;
  
  lucide.createIcons();
}

// SMART LOAD SHEDDING PANEL RENDER
function renderSheddingControls() {
  dom.sheddingList.innerHTML = '';
  
  sectors.forEach(s => {
    let displayName = s.name.split(' ')[0];
    if (currentLanguage === 'te') {
      displayName = s.name.match(/\((.*?)\)/)[1];
    } else if (currentLanguage === 'hi') {
      const names = { siddipet: 'सिद्दीपेट', medak: 'मेडक', nalgonda: 'नलगोंडा', bhadrachalam: 'भद्राचलम', sircilla: 'सिरसिल्ला' };
      displayName = names[s.id];
    }
    
    const div = document.createElement('div');
    div.className = 'switch-container';
    div.innerHTML = `
      <div>
        <span style="font-weight:600; font-size:0.85rem;">${displayName} Substation</span>
        <div style="font-size:0.7rem; color:var(--text-muted);">Capacity: ${s.capacity} MW</div>
      </div>
      <label class="switch">
        <input type="checkbox" id="shed-${s.id}" ${s.loadSheddingActive ? 'checked' : ''} onchange="toggleLoadShedding('${s.id}')">
        <span class="toggle-slider"></span>
      </label>
    `;
    dom.sheddingList.appendChild(div);
  });
}

function toggleLoadShedding(id) {
  const s = getSector(id);
  if (!s) return;
  
  s.loadSheddingActive = !s.loadSheddingActive;
  
  if (s.loadSheddingActive) {
    addLog(`Emergency Load Shedding ACTIVATED for ${getSectorName(s.id)}. Secondary feeders cut off to protect substation transformer.`, "warning");
  } else {
    addLog(`Emergency Load Shedding DEACTIVATED for ${getSectorName(s.id)}. Restored standard rural distribution.`, "info");
  }
  
  recalculatePredictiveRisk();
  renderSheddingControls();
}

// BUDGET & OPERATIONS ACTIONS
function performVegetationTrimming() {
  if (!selectedSectorId) return;
  const s = getSector(selectedSectorId);
  
  if (budget < 0.25) {
    alert("TSSPDCL Warning: Insufficient operational maintenance funds. Require ₹0.25 Lakhs.");
    return;
  }
  
  budget -= 0.25;
  s.vegetationTrimmed = true;
  updateBudgetDisplay();
  
  addLog(`Vegetation trimmed in ${getSectorName(s.id)} sector. Debited ₹0.25L from state grid maintenance budget.`, "accent");
  recalculatePredictiveRisk();
}

function performComponentUpgrade() {
  if (!selectedSectorId) return;
  const s = getSector(selectedSectorId);
  
  if (budget < 1.5) {
    alert("TSSPDCL Warning: Insufficient modernization budget. Require ₹1.50 Lakhs.");
    return;
  }
  
  budget -= 1.5;
  s.componentUpgraded = true;
  s.componentAge = 1;
  updateBudgetDisplay();
  
  addLog(`Modernized transformer units in ${getSectorName(s.id)} substation. Debited ₹1.50L. Component age reset.`, "accent");
  recalculatePredictiveRisk();
}

// CREW DISPATCH SECTION
function renderCrews() {
  dom.crewsContainer.innerHTML = '';
  
  crews.forEach(c => {
    const div = document.createElement('div');
    div.className = 'crew-card';
    
    let fatigueClass = '';
    if (c.fatigue > 75) fatigueClass = 'exhausted';
    else if (c.fatigue > 35) fatigueClass = 'fatigued';
    
    // Status text in selected language
    let statusTxt = currentLanguage === 'en' ? 'Standby' : (currentLanguage === 'te' ? 'స్టాండ్‌బై' : 'स्टैंडबाय');
    let badgeClass = 'available';
    
    if (c.status === 'dispatched') {
      statusTxt = currentLanguage === 'en' ? 'Active' : (currentLanguage === 'te' ? 'సజీవం' : 'सक्रिय');
      badgeClass = 'dispatched';
    } else if (c.status === 'resting') {
      statusTxt = currentLanguage === 'en' ? 'Resting' : (currentLanguage === 'te' ? 'విశ్రాంతి' : 'विश्राम');
      badgeClass = 'resting';
    }
    
    let actionBtnHtml = '';
    if (c.status === 'available') {
      const uncoveredOutage = activeOutages.find(o => !o.assignedCrewId);
      if (uncoveredOutage) {
        const btnLbl = currentLanguage === 'en' ? 'Dispatch' : (currentLanguage === 'te' ? 'పంపించు' : 'भेजें');
        actionBtnHtml = `<button class="btn" style="padding: 4px 8px; font-size: 0.75rem;" onclick="assignCrewToOutage('${c.id}', '${uncoveredOutage.sectorId}')"><i data-lucide="send" style="width: 12px; height:12px;"></i> ${btnLbl}</button>`;
      } else {
        actionBtnHtml = `<span class="crew-status-badge ${badgeClass}">${statusTxt}</span>`;
      }
    } else if (c.status === 'dispatched') {
      const sect = getSectorName(c.assignedSector);
      const recallLbl = currentLanguage === 'en' ? 'Recall' : (currentLanguage === 'te' ? 'తిరిగి పిలు' : 'वापस बुलाएं');
      actionBtnHtml = `
        <div style="display:flex; flex-direction:column; align-items:flex-end; gap:2px;">
          <span style="font-size:0.7rem; color:var(--primary); font-weight:600;">${sect}</span>
          <button class="btn btn-danger" style="padding: 3px 6px; font-size: 0.65rem;" onclick="recallCrew('${c.id}')">${recallLbl}</button>
        </div>
      `;
    } else if (c.status === 'resting') {
      actionBtnHtml = `<span class="crew-status-badge ${badgeClass}">${statusTxt}</span>`;
    }
    
    // Skills localization
    let skillTxt = c.skills;
    if (currentLanguage === 'te') {
      if (c.id === 'crew_1') skillTxt = "అధిక వోల్టేజ్ లైన్ రిపేర్";
      else if (c.id === 'crew_2') skillTxt = "భారీ ట్రాన్స్‌ఫార్మర్స్ & బ్రేకర్స్";
      else skillTxt = "వేగవంతమైన లైన్‌మెన్ బృందం";
    } else if (currentLanguage === 'hi') {
      if (c.id === 'crew_1') skillTxt = "हाई वोल्टेज लाइन मरम्मत";
      else if (c.id === 'crew_2') skillTxt = "भारी ट्रांसफार्मर विशेषज्ञ";
      else skillTxt = "त्वरित प्रतिक्रिया लाइनमैन";
    }
    
    div.innerHTML = `
      <div class="crew-info">
        <span class="crew-name">${c.name}</span>
        <span class="crew-skill">${skillTxt} (${((1 - (c.experience - 0.8)) * 100).toFixed(0)}% eff)</span>
        <div style="display: flex; align-items: center; gap: 8px;">
          <div class="crew-fatigue-bar-wrapper">
            <div class="crew-fatigue-bar ${fatigueClass}" style="width: ${c.fatigue}%"></div>
          </div>
          <span style="font-size:0.65rem; color:var(--text-muted);">${c.fatigue}% Fatigue</span>
        </div>
      </div>
      <div class="crew-actions">
        ${actionBtnHtml}
      </div>
    `;
    dom.crewsContainer.appendChild(div);
  });
  
  lucide.createIcons();
}

function assignCrewToOutage(crewId, sectorId) {
  const crew = crews.find(c => c.id === crewId);
  const outage = activeOutages.find(o => o.sectorId === sectorId);
  
  if (!crew || !outage) return;
  
  crew.status = 'dispatched';
  crew.assignedSector = sectorId;
  outage.assignedCrewId = crewId;
  
  addLog(`Dispatched team [${crew.name}] to ${getSectorName(sectorId)} substation fault site.`, "info");
  
  renderCrews();
  renderActiveOutages();
}

function recallCrew(crewId) {
  const crew = crews.find(c => c.id === crewId);
  if (!crew) return;
  
  const outage = activeOutages.find(o => o.assignedCrewId === crewId);
  if (outage) {
    outage.assignedCrewId = null;
  }
  
  crew.status = 'resting';
  crew.assignedSector = null;
  
  addLog(`Recalled team [${crew.name}]. Shift logged out; team ordered for mandatory rest.`, "accent");
  
  renderCrews();
  renderActiveOutages();
}

// OUTAGE TRIGGERS & SIMULATORS
function simulateManualOutage() {
  if (!selectedSectorId) return;
  triggerOutage(selectedSectorId);
}

function triggerLightningStrike() {
  const randomIndex = Math.floor(Math.random() * sectors.length);
  const target = sectors[randomIndex];
  
  addLog(`CRITICAL: Thunderstorm lightning bolt strike grounded in Telangana grid sector!`, "danger");
  
  if (target.status === 'outage') {
    addLog(`Lightning hit down transformer substation [${getSectorName(target.id)}]. Auxiliary systems damaged.`, "danger");
  } else {
    triggerOutage(target.id, 'lightning_damage');
  }
}

function triggerOutage(sectorId, forcedCause = null) {
  const s = getSector(sectorId);
  if (!s || s.status === 'outage') return;
  
  s.status = 'outage';
  s.outageProbability = 1.0;
  
  let causeKey = 'scheduled_shedding';
  if (forcedCause) {
    causeKey = forcedCause;
  } else {
    if (weather.wind > 55) causeKey = 'line_snap';
    else if (weather.rain > 50) causeKey = 'insulator_flashover';
    else if (weather.temp > 44 && (s.load * (weather.demand/100) > s.capacity)) causeKey = 'transformer_blown';
    else {
      const causes = ['line_snap', 'transformer_blown', 'insulator_flashover'];
      causeKey = causes[Math.floor(Math.random() * causes.length)];
    }
  }
  
  const cause = OUTAGE_CAUSES[causeKey];
  const baseMinutes = cause.baseMinutes;
  
  let weatherMultiplier = 1.0;
  if (weather.wind > 60) weatherMultiplier += 0.45;
  else if (weather.wind > 35) weatherMultiplier += 0.20;
  
  if (weather.rain > 70) weatherMultiplier += 0.35;
  else if (weather.rain > 30) weatherMultiplier += 0.15;
  
  const finalMinutes = Math.round(baseMinutes * weatherMultiplier * s.remoteness);
  
  const newOutage = {
    sectorId: sectorId,
    cause: cause.name,
    causeKey: causeKey,
    initialMinutes: finalMinutes,
    remainingMinutes: finalMinutes,
    assignedCrewId: null,
    startedAt: Date.now()
  };
  
  activeOutages.push(newOutage);
  
  addLog(`OUTAGE DETECTION: ${getSectorName(s.id)} substation failed. Cause: ${cause.name}. Initial ERT: ${finalMinutes} minutes.`, "danger");
  
  recalculatePredictiveRisk();
  renderActiveOutages();
  renderCrews();
  drawMapConnections();
}

// RENDER ACTIVE OUTAGES
function renderActiveOutages() {
  dom.activeOutagesList.innerHTML = '';
  
  if (activeOutages.length === 0) {
    const defaultMsg = currentLanguage === 'en' 
      ? 'No active outages detected. Grid operations stable.'
      : (currentLanguage === 'te' ? 'క్రియాశీల విద్యుత్ నిలుపుదలలు లేవు. గ్రిడ్ స్థిరంగా ఉంది.' : 'कोई सक्रिय बिजली कटौती नहीं है। ग्रिड संचालन स्थिर है।');
      
    dom.activeOutagesList.innerHTML = `
      <div style="text-align: center; color: var(--text-muted); padding: 20px; font-size: 0.9rem;">
        <i data-lucide="shield-check" style="width: 40px; height: 40px; color: var(--color-healthy); margin-bottom: 8px; display: block; margin-left: auto; margin-right: auto;"></i>
        ${defaultMsg}
      </div>
    `;
    lucide.createIcons();
    return;
  }
  
  activeOutages.forEach(o => {
    const s = getSector(o.sectorId);
    
    // Cause translation matching
    let displayName = o.cause;
    if (currentLanguage === 'te') {
      displayName = OUTAGE_CAUSES[o.causeKey].name;
    } else if (currentLanguage === 'hi') {
      const hiCauses = {
        line_snap: "फीडर लाइन टूटी",
        transformer_blown: "वितरण ट्रांसफार्मर धमाका",
        insulator_flashover: "इंसुलेटर फ्लैशओवर दोष",
        lightning_damage: "लाइटनिंग अरेस्टर विफलता",
        scheduled_shedding: "TSSPDCL आपातकालीन कृषि कटौती"
      };
      displayName = hiCauses[o.causeKey];
    }
    
    let crewAssignmentHtml = '';
    if (o.assignedCrewId) {
      const crewName = crews.find(c => c.id === o.assignedCrewId).name;
      const assignedLbl = currentLanguage === 'en' ? 'Assigned' : (currentLanguage === 'te' ? 'కేటాయించబడింది' : 'आवंटित');
      crewAssignmentHtml = `<div style="font-size: 0.75rem; color: var(--primary); display: flex; align-items:center; gap:4px; margin-top:5px;"><i data-lucide="users" style="width:12px;"></i> ${assignedLbl}: ${crewName}</div>`;
    } else {
      const warningLbl = currentLanguage === 'en' ? 'No crew allocated' : (currentLanguage === 'te' ? 'సిబ్బంది కేటాయింపు లేదు' : 'कोई दल आवंटित नहीं');
      crewAssignmentHtml = `<div style="font-size: 0.75rem; color: var(--color-warning); display: flex; align-items:center; gap:4px; margin-top:5px;"><i data-lucide="alert-circle" style="width:12px;"></i> ${warningLbl}</div>`;
    }
    
    div = document.createElement('div');
    div.className = 'outage-item';
    div.innerHTML = `
      <div class="outage-item-header">
        <div>
          <span class="outage-sector-name">${getSectorName(s.id)}</span>
          <div class="outage-cause">${displayName}</div>
          ${crewAssignmentHtml}
        </div>
        <div class="ert-display">
          <span class="ert-countdown">${o.remainingMinutes}m</span>
          <span class="ert-label">${currentLanguage === 'en' ? 'Restoration' : (currentLanguage === 'te' ? 'పునరుద్ధరణ సమయం' : 'बहाली समय')}</span>
        </div>
      </div>
    `;
    dom.activeOutagesList.appendChild(div);
  });
  
  lucide.createIcons();
}

// SYSTEM TICK
function tickSystem() {
  const now = new Date();
  dom.clock.textContent = now.toISOString().replace('T', ' ').slice(0, 19);
  
  let statusChanged = false;
  
  for (let i = activeOutages.length - 1; i >= 0; i--) {
    const o = activeOutages[i];
    
    if (o.assignedCrewId) {
      const crew = crews.find(c => c.id === o.assignedCrewId);
      let fatiguePenalty = 1.0;
      if (crew.fatigue > 80) fatiguePenalty = 0.5;
      else if (crew.fatigue > 50) fatiguePenalty = 0.8;
      
      const decrement = Math.round(5 * (2 - crew.experience) * fatiguePenalty);
      o.remainingMinutes -= decrement;
      
      crew.fatigue = Math.min(100, crew.fatigue + 3);
    } else {
      let weatherPenalty = 1;
      if (weather.wind > 60 || weather.rain > 50) {
        weatherPenalty = 0;
      }
      o.remainingMinutes -= weatherPenalty;
    }
    
    // Restoration complete
    if (o.remainingMinutes <= 0) {
      const s = getSector(o.sectorId);
      s.status = 'healthy';
      s.outageProbability = 0.05;
      
      // Free crew
      if (o.assignedCrewId) {
        const crew = crews.find(c => c.id === o.assignedCrewId);
        crew.status = 'resting';
        crew.assignedSector = null;
      }
      
      // Earn budget incentive for successful restoration!
      let revenue = 0.5; // default ₹0.50 Lakhs
      if (o.causeKey === 'transformer_blown') revenue = 1.2;
      else if (o.causeKey === 'lightning_damage') revenue = 0.8;
      
      budget += revenue;
      updateBudgetDisplay();
      
      addLog(`GRID SUCCESS: ${getSectorName(s.id)} online. Operations credited +₹${revenue}L incentive. Budget: ₹${budget.toFixed(2)}L.`, "healthy");
      
      activeOutages.splice(i, 1);
      statusChanged = true;
    }
  }
  
  // Crews rest
  crews.forEach(c => {
    if (c.status === 'resting') {
      c.fatigue = Math.max(0, c.fatigue - 10);
      if (c.fatigue === 0) {
        c.status = 'available';
        addLog(`Crew [${c.name}] fully rested and on alert.`, "info");
      }
    } else if (c.status === 'available') {
      c.fatigue = Math.max(0, c.fatigue - 2);
    }
  });
  
  // Dynamic Monte Carlo outage checks
  if (activeOutages.length < 3) {
    sectors.forEach(s => {
      if (s.status !== 'outage' && s.outageProbability > 0.3) {
        const diceRoll = Math.random();
        const threshold = 1 - (s.outageProbability * 0.035);
        if (diceRoll > threshold) {
          triggerOutage(s.id);
          statusChanged = true;
        }
      }
    });
  }
  
  if (statusChanged || activeOutages.length > 0) {
    recalculatePredictiveRisk();
    renderActiveOutages();
    renderCrews();
    drawMapConnections();
  } else {
    renderCrews();
  }
}

// CHARTS ENGINE (CHART.JS)
function initCharts() {
  const ctxCauses = document.getElementById('historical-outages-chart').getContext('2d');
  
  const causeCounts = {};
  window.HISTORICAL_OUTAGES.forEach(o => {
    causeCounts[o.cause] = (causeCounts[o.cause] || 0) + 1;
  });
  
  charts.historicalCauses = new Chart(ctxCauses, {
    type: 'doughnut',
    data: {
      labels: Object.keys(causeCounts),
      datasets: [{
        data: Object.values(causeCounts),
        backgroundColor: [
          '#ef4444',
          '#f59e0b',
          '#3b82f6',
          '#8b5cf6',
          '#10b981'
        ],
        borderWidth: 1,
        borderColor: '#111827'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'right',
          labels: {
            color: '#f3f4f6',
            boxWidth: 12,
            font: { size: 9 }
          }
        },
        title: {
          display: true,
          text: 'Historical Failure Analytics',
          color: '#f3f4f6',
          font: { family: 'Outfit', size: 12, weight: 'bold' }
        }
      }
    }
  });
  
  const ctxRisk = document.getElementById('risk-trend-chart').getContext('2d');
  for (let i = 0; i < maxHistoryPoints; i++) {
    riskHistory.push(10 + Math.random() * 15);
  }
  
  charts.riskTrend = new Chart(ctxRisk, {
    type: 'line',
    data: {
      labels: Array(maxHistoryPoints).fill(''),
      datasets: [{
        label: 'TSSPDCL Risk Factor (%)',
        data: riskHistory,
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        fill: true,
        tension: 0.4,
        borderWidth: 2,
        pointRadius: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        title: {
          display: true,
          text: 'Grid Outage Probability Trend',
          color: '#f3f4f6',
          font: { family: 'Outfit', size: 12, weight: 'bold' }
        }
      },
      scales: {
        x: { grid: { display: false } },
        y: {
          min: 0,
          max: 100,
          grid: { color: 'rgba(255, 255, 255, 0.05)' },
          ticks: { color: '#9ca3af', font: { size: 8 } }
        }
      }
    }
  });
}

function updateRiskTrendChart(averageRiskVal) {
  if (!charts.riskTrend) return;
  
  const percentage = averageRiskVal * 100;
  riskHistory.push(percentage);
  if (riskHistory.length > maxHistoryPoints) {
    riskHistory.shift();
  }
  
  charts.riskTrend.data.datasets[0].data = riskHistory;
  
  if (percentage > 65) {
    charts.riskTrend.data.datasets[0].borderColor = '#ef4444';
    charts.riskTrend.data.datasets[0].backgroundColor = 'rgba(239, 68, 68, 0.1)';
  } else if (percentage > 35) {
    charts.riskTrend.data.datasets[0].borderColor = '#f59e0b';
    charts.riskTrend.data.datasets[0].backgroundColor = 'rgba(245, 158, 11, 0.1)';
  } else {
    charts.riskTrend.data.datasets[0].borderColor = '#3b82f6';
    charts.riskTrend.data.datasets[0].backgroundColor = 'rgba(59, 130, 246, 0.1)';
  }
  
  charts.riskTrend.update('none');
}

// Global scope binds
window.setLanguage = setLanguage;
window.setPreset = setPreset;
window.triggerLightningStrike = triggerLightningStrike;
window.toggleLoadShedding = toggleLoadShedding;
window.performVegetationTrimming = performVegetationTrimming;
window.performComponentUpgrade = performComponentUpgrade;
window.simulateManualOutage = simulateManualOutage;
window.assignCrewToOutage = assignCrewToOutage;
window.recallCrew = recallCrew;
