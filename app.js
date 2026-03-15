// ============================================================
// SUPABASE CONFIG
// ============================================================
const SUPABASE_URL = 'https://czfhhdlxzrolpbogkqkz.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN6ZmhoZGx4enJvbHBib2drcWt6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI3MjcyMzksImV4cCI6MjA4ODMwMzIzOX0.uKGi1REdy0E-_WQNcWddN2fzwbOgg29YZoBnzxjAbgw';
const { createClient } = supabase;
const db = createClient(SUPABASE_URL, SUPABASE_ANON);

// ============================================================
// SCHEDULE INFO
// ============================================================
// Available days: Mon, Tue, Wed, Thu ONLY (Fri–Sun off)
// School days: Tue & Thu → max 1 hour skill-building
// Heavy days: Mon & Wed → up to 6 hours skill-building
// Spring semester ends: Apr 30, 2026
//
// PHASE 1 (Mar 16 – Apr 30): Python + Security+ + Braiding
//   Python is the #1 priority (project due Apr 23)
//   Security+ wraps up Apr 21
//   Braiding: light 30-min practice on Mon or Wed
//
// PHASE 2 (May 1+): Add JARVIS, Hacking, Languages, more Braiding
// ============================================================

const TASKS = {
  python: [
    { phase: "Week 1 — Setup + Data Generation (Mar 19–23)", dates: "Mar 19–23 · Thu 03/19 + Mon 03/23", items: [
      "THU 03/19 8am–12pm: Set up Python venv, install all libraries (openai, anthropic, groq, scikit-learn, spacy, pandas, numpy, nltk, torch, matplotlib)",
      "THU 03/19 8am–12pm: Sign up for OpenAI, Anthropic, Groq, Google AI Studio, Kaggle — save all API keys in .env file",
      "THU 03/19 2pm–5pm: Download PERSUADE dataset from Kaggle, test one API call with Groq to verify setup works",
      "THU 03/19 2pm–5pm: python -m spacy download en_core_web_sm · download NLTK punkt + averaged_perceptron_tagger",
      "MON 03/23 8am–12pm: Write data generation script, randomly sample 1,000 essays from PERSUADE",
      "MON 03/23 8am–12pm: Generate 800 samples from Gemini-1.5-Pro (FREE) + LLaMA-3.1-70B (Groq FREE)",
    ] },
    { phase: "Week 2 — Finish Data + Start Features (Mar 26 – Apr 1)", dates: "Mar 26, 30–31, Apr 1", items: [
      "THU 03/26 10am–2:30pm: Generate 800 samples from Mixtral-8x7B + GPT-4o + Claude-3.5-Sonnet · save all CSVs",
      "THU 03/26 10am–2:30pm: Start data cleaning — remove failed generations and AI refusals",
      "MON 03/30 8am–12pm: Complete data cleaning, combine all data into master_dataset.csv (5,000 rows: 1,000 human + 4,000 AI)",
      "MON 03/30 2pm–5pm: Learn spaCy basics (Doc, Token, .pos_, .dep_) · write extract_features() skeleton",
      "MON 03/30 2pm–5pm: Implement passive/active voice detection + verb tense features (past/present/future)",
      "TUE 03/31 10am–2:30pm: Implement pronoun frequencies, sentence length stats, Type-Token Ratio, Yule's K, POS tag distributions",
    ] },
    { phase: "Week 3 — Full Feature Extraction + Folds (Apr 1–9)", dates: "Apr 1–2, 6–9", items: [
      "WED 04/01 10am–12pm: Implement burstiness, entropy, repetition metrics, dependency tree depth",
      "WED 04/01 2pm–5pm: Run full feature extraction on ALL 5,000 samples (add tqdm progress bar) · save features.csv",
      "THU 04/02 10am–2:30pm: Normalize with StandardScaler · create all 5 LOMO cross-validation folds · save fold CSVs",
      "MON 04/06 8am–12pm: Train Logistic Regression on all 5 folds · save results + models (logistic_fold1.pkl–fold5.pkl)",
      "MON 04/06 2pm–5pm: Train Random Forest on all 5 folds · extract feature importance · save rf_results.csv",
      "TUE 04/07 10am–2:30pm: Train XGBoost on all 5 folds · extract feature importance · save xgboost_results.csv",
    ] },
    { phase: "Week 4 — DetectGPT + Analysis (Apr 8–16)", dates: "Apr 8–9, 13–16", items: [
      "WED 04/08 8am–12pm: Clone DetectGPT repo · install dependencies · prepare data in expected format · run on Folds 1–3",
      "WED 04/08 2pm–5pm: Run DetectGPT on Folds 4–5 · compile all results into master_results.csv ✅",
      "THU 04/09 10am–12pm: Optional RoBERTa (Google Colab GPU only) — skip if tight on time",
      "MON 04/13 8am–12pm: Performance analysis — F1, AUC, generalization gaps for each model × fold",
      "MON 04/13 2pm–5pm: Feature importance analysis — top 20 features, compare to Xia et al. findings",
      "TUE 04/14 10am–2:30pm: Error analysis — confusion matrices, misclassified samples, failure patterns",
    ] },
    { phase: "Week 5 — Visualizations + Write Report (Apr 15–22)", dates: "Apr 15–16, 20–22", items: [
      "WED 04/15 8am–12pm: Create all visualizations (bar charts, heatmaps, feature importance plots, confusion matrices)",
      "WED 04/15 2pm–5pm: Write Introduction + Related Work + Methodology sections",
      "THU 04/16 10am–2:30pm: Write Results + Analysis + Discussion sections",
      "MON 04/20 8am–12pm: Write Conclusion + Abstract (do LAST) · proofread entire report",
      "MON 04/20 2pm–5pm: Build presentation slides · practice 8-minute run-through · time yourself",
      "TUE 04/21 10am–2:30pm: Submit final report PDF · 2 more timed practice runs of presentation",
    ] },
    { phase: "Presentation Day — Apr 23 🎯", dates: "Thu Apr 23", items: [
      "WED 04/22 8am–12pm: 3 final practice runs — must hit 7:30–8:00 min every time",
      "WED 04/22: Back up slides online (email + Google Drive)",
      "THU 04/23: Final calm run-through in the morning",
      "THU 04/23: PRESENT PROJECT — 8 minutes 🎯",
      "THU 04/23: Answer Q&A confidently",
      "🎉 DONE! You built a machine learning research project in Python from scratch!",
    ] }
  ],
  security: [
    { phase: "Week 1 — Domain 1: General Security Concepts (Mar 23–29)", dates: "Mar 23–29 · 12% of exam", items: [
      "MON 03/23 2pm–5pm: 📺 Prof. Messer 1.1 — Security Controls (technical, managerial, operational, physical)",
      "MON 03/23 2pm–5pm: 📺 Prof. Messer 1.2 — CIA Triad, AAA framework, Zero Trust, Gap Analysis",
      "WED 03/25 gaps: 📺 Prof. Messer 1.3–1.4 — Change Management + Cryptography basics",
      "WED 03/25 gaps: Take notes: symmetric (AES) vs asymmetric (RSA), hashing (SHA/MD5), PKI, TLS/SSL, digital signatures",
      "SAT 03/28 late night: 🃏 Quizlet port numbers — https://quizlet.com/2209806/security-port-numbers-flash-cards/ · run deck until 90%+",
      "SUN 03/29 late night: 📺 CyberKraft + The Networking Guru (YouTube) — PBQ walkthroughs · ExamCompass Domain 1 practice test",
    ] },
    { phase: "Week 2 — Domain 2: Threats, Vulnerabilities & Mitigations (Mar 30 – Apr 5)", dates: "Mar 30 – Apr 5 · 22% of exam", items: [
      "MON 03/30 8pm–11:30pm: 📺 Prof. Messer 2.1–2.2 — Threat actors + Threat vectors · note: nation-state, insider, phishing, vishing, smishing, spear phishing",
      "MON 03/30 8pm–11:30pm: Take notes: malware types — ransomware, trojan, worm, spyware, rootkit, keylogger, logic bomb",
      "WED 04/01 8pm–11:30pm: 📺 Prof. Messer 2.3–2.4 — Vulnerability types + Indicators of malicious activity",
      "WED 04/01 8pm–11:30pm: Take notes: SQL injection, XSS, buffer overflow, race conditions, zero-day, supply chain attacks",
      "THU 04/02 8pm–11:30pm: 📺 Prof. Messer 2.5 — Mitigation techniques: network segmentation, patching, least privilege, IDS vs IPS",
      "SAT 04/04 late night: 🃏 Quizlet ports + 📺 CyberKraft PBQs (network/firewall) + ExamCompass Domain 2 full test — record score",
    ] },
    { phase: "Week 3 — Domain 3: Security Architecture (Apr 6–12)", dates: "Apr 6–12 · 18% of exam", items: [
      "MON 04/06 8pm–11:30pm: 📺 Prof. Messer 3.1–3.2 — Cloud models (IaaS/PaaS/SaaS), shared responsibility, Zero Trust, SASE, SD-WAN",
      "MON 04/06 8pm–11:30pm: Take notes: network devices (firewall, proxy, load balancer, WAF), microsegmentation, VLANs",
      "WED 04/08 8pm–11:30pm: 📺 Prof. Messer 3.3 — Data protection: DLP, data classification, redundancy (RAID, hot/warm/cold site)",
      "WED 04/08 8pm–11:30pm: Take notes: honeypot, honeynet, DNS sinkhole, deception technologies",
      "SAT 04/11 late night: 🃏 Quizlet ports (aim 95%+) + 📺 CyberKraft cloud/architecture PBQs + ExamCompass mixed Domain 1+2+3 test",
      "SUN 04/12 late night: Review ALL wrong answers from ExamCompass — understand WHY each was wrong (not just the answer)",
    ] },
    { phase: "Week 4 — Domains 4 + 5: Operations & Governance (Apr 13–20)", dates: "Apr 13–20 · Domain 4=28%, Domain 5=20% — MOST IMPORTANT", items: [
      "MON 04/13 8pm–11:30pm: 📺 Prof. Messer 4.1–4.2 — IAM (MFA, SSO, PAM, LDAP/AD) + Vulnerability scanning (Nessus, OpenVAS)",
      "TUE 04/14 8pm–11:30pm: 📺 Prof. Messer 4.3–4.4 — SIEM, log analysis, Incident Response lifecycle (Prepare→Identify→Contain→Eradicate→Recover→Lessons Learned)",
      "WED 04/15 8pm–11:30pm: 📺 Prof. Messer 4.5–4.6 — Endpoint security (EDR, MDM, MAM, BYOD) + Automation (SOAR) + Digital forensics",
      "THU 04/16 8pm–11:30pm: 📺 Prof. Messer 5.1–5.6 — Risk management, compliance frameworks (NIST, ISO 27001, PCI-DSS, HIPAA, GDPR), data privacy laws",
      "SAT 04/18 late night: 🃏 Quizlet ports (must be 100%) + 📺 CyberKraft Domain 4/5 PBQs + ExamCompass full mixed test all domains",
      "SUN 04/19 late night: ⏱️ FULL timed practice exam — 90 questions, 90 min (ExamCompass) · review every wrong answer · re-watch Messer on 2 weakest areas",
    ] },
    { phase: "Exam Week (Apr 20–22) + EXAM DAY", dates: "Apr 20–21", items: [
      "MON 04/20 8pm–11:30pm: Light cram only — Quizlet ports (15 min) + review summary notes per domain",
      "MON 04/20: Focus on key concepts: Incident Response steps, cryptography types, Zero Trust, risk management, port numbers",
      "MON 04/20: Confirm exam booking details and test center location",
      "✅ TAKE SECURITY+ EXAM — Target Apr 21 or Apr 22",
      "Exam format: 90 questions · 90 minutes · Need 750/900 to pass",
      "Tip: PBQs appear first — flag and come back after all MCQs · read for 'BEST' and 'MOST' in questions",
    ] }
  ],
  braiding: [
    {
      phase: "Knotless Braids (Mar 16 – Apr 2)",
      dates: "Mar 16 – Apr 2 · 30 min on Mon or Wed only",
      items: [
        "Watch 3 knotless braid tutorials before your first practice session",
        "Gather supplies: braiding hair, rat-tail comb, edge control, clips",
        "Practice session 1 — learn feed-in technique, section hair (30 min)",
        "Practice session 2 — first attempt at knotless braids (30 min)",
        "Practice session 3 — second attempt, focus on neat parts (30 min)",
        "Practice session 4 — work on even tension throughout (30 min)",
        "✅ Knotless braids: comfortable enough to do on someone else",
      ]
    },
    {
      phase: "Box Braids (Apr 6–30)",
      dates: "Apr 6–30 · 30 min on Mon or Wed only",
      items: [
        "Watch 2 box braid tutorials — understand knot vs knotless method",
        "Practice session 1 — clean box-shaped sectioning (30 min)",
        "Practice session 2 — first full set of box braids (30 min)",
        "Practice session 3 — jumbo box braids for speed (30 min)",
        "Practice session 4 — medium box braids for precision (30 min)",
        "✅ Box braids: consistent size and tension",
      ]
    },
    // Phase 2 styles — unlocked May 1
    {
      phase: "🔒 Cornrows (May 2026) — Unlocks Phase 2",
      dates: "May 2026+",
      items: [
        "Watch 3 cornrow tutorials — straight back and patterns",
        "Practice session 1 — flat-to-scalp tension (30 min)",
        "Practice session 2 — first straight-back cornrows (30 min)",
        "Practice session 3 — curved or diagonal pattern (30 min)",
        "Practice session 4 — cornrows combined with loose braids (30 min)",
        "✅ Cornrows: clean straight-back cornrows",
      ]
    },
    {
      phase: "🔒 Stitch Braids (Jun 2026) — Unlocks Phase 2",
      dates: "Jun 2026+",
      items: [
        "Watch 3 stitch braid tutorials — focus on horizontal parting",
        "Practice session 1 — clean even horizontal parts (30 min)",
        "Practice session 2 — first set of stitch braids (30 min)",
        "Practice session 3 — stitch braids going to the side (30 min)",
        "Practice session 4 — combine with bun or ponytail finish (30 min)",
        "✅ Stitch braids: clean lines and consistent pattern",
      ]
    },
    {
      phase: "🔒 Rope Twists (Jul 2026) — Unlocks Phase 2",
      dates: "Jul 2026+",
      items: [
        "Watch 2 rope twist tutorials — 2-strand technique",
        "Practice session 1 — consistent twist direction (30 min)",
        "Practice session 2 — first full set of rope twists (30 min)",
        "Practice session 3 — twists with extensions (30 min)",
        "Practice session 4 — half-up rope twist style (30 min)",
        "✅ Rope twists: neat, even, hold without unraveling",
      ]
    },
    {
      phase: "🔒 More Styles (Aug 2026+) — Unlocks Phase 2",
      dates: "Aug 2026+",
      items: [
        "Learn passion twists",
        "Learn goddess braids (chunky cornrows with curly ends)",
        "Learn lemonade braids (side-swept cornrows)",
        "Learn Fulani braids (cornrows + loose braids + beads)",
        "Learn triangle box braids",
        "✅ Can confidently do 6+ braid styles from memory",
      ]
    }
  ],

  // ── PHASE 2 TRACKS (all unlock May 1, 2026) ──────────────

  jarvis: [
    {
      phase: "🔒 Unlocks May 1, 2026",
      dates: "May 2026+",
      items: [
        "Install and test speech_recognition library",
        "Get microphone input working — print transcribed text",
        "Install pyttsx3 and get text-to-speech working",
        "JARVIS speaks back hardcoded responses",
        "Integrate Claude or OpenAI API as the brain",
        "JARVIS answers any question using LLM backend",
        "Add conversation history within a session",
      ]
    },
    {
      phase: "v0.2 — Computer Control (Jun 2026)",
      dates: "Jun 2026",
      items: [
        "Install pyautogui and test basic mouse/keyboard control",
        "Voice command: open/close applications",
        "Voice command: run a Python script",
        "Voice command: search Google",
        "Implement wake word detection (\"Hey JARVIS\")",
        "Test reliability in different environments",
      ]
    },
    {
      phase: "v0.3 — API Integrations (Jul 2026)",
      dates: "Jul 2026",
      items: [
        "Connect OpenWeatherMap API — weather by voice",
        "Connect Google Calendar API — read schedule",
        "Add a news API for daily briefing",
        "Test all integrations together",
      ]
    },
    {
      phase: "v0.4 — Memory System (Aug 2026)",
      dates: "Aug 2026",
      items: [
        "Set up SQLite database for persistent memory",
        "JARVIS stores and recalls facts you tell it",
        "Add voice note-taking and reminders",
      ]
    },
    {
      phase: "v0.5–1.0 — Polish + Local LLM (Oct–Dec 2026)",
      dates: "Oct–Dec 2026",
      items: [
        "Refactor codebase and improve voice reliability",
        "Install Ollama + run LLaMA locally (offline mode)",
        "JARVIS summarizes academic papers from URL",
        "Voice-controlled reading list + notes query",
        "JARVIS is a daily-use tool 🎉",
      ]
    }
  ],

  hacking: [
    {
      phase: "🔒 Unlocks May 1, 2026",
      dates: "May 2026+",
      items: [
        "Create TryHackMe account",
        "Complete Pre-Security path intro rooms",
        "Understand how the web works (HTTP, DNS, TCP/IP)",
        "Basic Linux command line practice",
        "Complete TryHackMe Pre-Security path fully",
      ]
    },
    {
      phase: "Foundations (Jun–Jul 2026)",
      dates: "Jun–Jul 2026",
      items: [
        "TryHackMe: Intro to Cybersecurity path",
        "TryHackMe: Introduction to Web Hacking",
        "Set up VirtualBox with Kali Linux",
        "Practice basic network scanning with Nmap",
        "Learn Burp Suite basics",
      ]
    },
    {
      phase: "Jr Pentester Path (Aug–Sep 2026)",
      dates: "Aug–Sep 2026",
      items: [
        "TryHackMe: Jr Penetration Tester path",
        "Learn SQL injection, XSS, IDOR",
        "Set up DVWA locally and practice attacks",
        "Complete OWASP Top 10 TryHackMe room",
      ]
    },
    {
      phase: "HackTheBox + eJPT (Oct–Nov 2026)",
      dates: "Oct–Nov 2026",
      items: [
        "Create HackTheBox account, root first easy machine",
        "Complete INE eJPT free course + labs",
        "✅ PASS eJPT EXAM",
        "Create HackerOne + Bugcrowd accounts",
      ]
    },
    {
      phase: "Bug Bounty + OSCP Prep (Dec 2026–Mar 2027)",
      dates: "Dec 2026–Mar 2027",
      items: [
        "Submit first 5 bug bounty reports",
        "Complete 10 OSCP-prep HTB machines",
        "Write custom Python hacking tools",
        "OSCP exam booked (2027 target)",
      ]
    }
  ],

  languages: [
    {
      phase: "🔒 French — Unlocks May 1, 2026",
      dates: "May 2026+  · 30 min/day, 6 days/week",
      items: [
        "Download Duolingo and start French course",
        "Learn French alphabet and pronunciation basics",
        "Master greetings: bonjour, merci, s'il vous plaît, au revoir",
        "Learn numbers 1–100 + days of the week",
        "Learn basic pronouns and present tense of être + avoir",
        "Build 50-word vocabulary: colors, food, family",
        "Complete Duolingo first 10 lessons",
        "Maintain 6-day/week streak 🔥",
      ]
    },
    {
      phase: "🇫🇷 French — Building Up (Jun–Jul 2026)",
      dates: "Jun–Jul 2026",
      items: [
        "Learn regular -er, -ir, -re verb conjugations",
        "Learn irregular verbs: aller, faire, pouvoir, vouloir",
        "Master articles and negation",
        "Watch a French YouTube video with subtitles 3x/week",
        "Build vocabulary to 150+ words",
        "Hold a 2-minute spoken conversation in French 🎉",
      ]
    },
    {
      phase: "🇪🇸 Spanish — Foundations (Aug–Sep 2026)",
      dates: "Aug–Sep 2026",
      items: [
        "Start Duolingo Spanish course",
        "Master greetings and basic pronouns",
        "Learn ser vs estar and common irregular verbs",
        "Use French cognates to accelerate Spanish learning",
        "Build vocabulary to 150+ words",
        "Hold a 2-minute spoken conversation in Spanish 🎉",
      ]
    },
    {
      phase: "🇪🇸 Spanish — Conversational (Oct–Nov 2026)",
      dates: "Oct–Nov 2026",
      items: [
        "Learn past and imperfect tenses",
        "Watch Money Heist with subtitles",
        "Journal 3x per week in Spanish",
        "Hold a 5-minute conversation in Spanish 🎉",
      ]
    },
    {
      phase: "🤟 ASL — Foundations (Dec 2026 – Jan 2027)",
      dates: "Dec 2026–Jan 2027",
      items: [
        "Learn ASL alphabet and fingerspell your name",
        "Learn numbers 1–20 and basic greetings",
        "Start Bill Vicars ASL course on YouTube",
        "Learn signs for family, colors, common foods",
        "Fingerspell 10 words fluently without a chart",
      ]
    },
    {
      phase: "🤟 ASL — Conversational (Feb–Mar 2027)",
      dates: "Feb–Mar 2027",
      items: [
        "Learn question signs: who, what, where, when, why, how",
        "Study non-manual markers and classifiers",
        "Learn 100+ signs total",
        "Hold a basic 2-minute conversation in ASL 🎉",
      ]
    }
  ]
};

const TRACK_META = {
  python:    { label: "Python",      icon: "🐍", color: "#2E75B6", phase: 1 },
  security:  { label: "Security+",   icon: "🛡️", color: "#7030A0", phase: 1 },
  braiding:  { label: "Braiding",    icon: "💇🏾", color: "#be185d", phase: 1 },
  jarvis:    { label: "JARVIS",      icon: "🤖", color: "#C55A11", phase: 2 },
  hacking:   { label: "Hacking",     icon: "💻", color: "#375623", phase: 2 },
  languages: { label: "Languages",   icon: "🌍", color: "#0891b2", phase: 2 }
};

const PHASE2_START = new Date('2026-05-01');
const isPhase2 = () => new Date() >= PHASE2_START;

// ============================================================
// STATE
// ============================================================
let deferredInstallPrompt = null;
let currentUser   = null;
let tasksDone     = {};
let sessions      = [];
let notes         = [];
let streak        = { count: 0, best: 0, lastDate: null };
let currentPage   = 'dashboard';
let currentTrack  = 'python';
let editingNoteId = null;
let selectedHours = null;
let selectedMood  = null;

// ============================================================
// LOCAL STORAGE
// ============================================================
function loadLocal(key, fallback) {
  try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; } catch { return fallback; }
}
function saveLocal(key, val) {
  try { localStorage.setItem(key, JSON.stringify(val)); } catch {}
}

// ============================================================
// AUTH UI
// ============================================================
function showTab(tab) {
  ['login','signup','forgot'].forEach(t => {
    document.getElementById('form-' + t).style.display = t === tab ? 'flex' : 'none';
  });
  document.getElementById('tab-login')?.classList.toggle('active', tab === 'login');
  document.getElementById('tab-signup')?.classList.toggle('active', tab === 'signup');
  setAuthMessage('', '');
}

function setAuthMessage(msg, type) {
  const el = document.getElementById('auth-message');
  if (!el) return;
  el.textContent = msg;
  el.className = 'auth-message' + (type ? ' ' + type : '');
}

async function handleSignUp() {
  const email    = document.getElementById('signup-email').value.trim();
  const password = document.getElementById('signup-password').value;
  if (!email || !password) return setAuthMessage('Please fill in all fields.', 'error');
  if (password.length < 6) return setAuthMessage('Password must be at least 6 characters.', 'error');
  setAuthMessage('Creating account...', '');
  const { error } = await db.auth.signUp({ email, password });
  if (error) return setAuthMessage(error.message, 'error');
  setAuthMessage('✅ Account created! Check your email to confirm, then sign in.', 'success');
}

async function handleSignIn() {
  const email    = document.getElementById('login-email').value.trim();
  const password = document.getElementById('login-password').value;
  if (!email || !password) return setAuthMessage('Please fill in all fields.', 'error');
  setAuthMessage('Signing in...', '');
  const { error } = await db.auth.signInWithPassword({ email, password });
  if (error) return setAuthMessage(error.message, 'error');
}

async function handleForgotPassword() {
  const email = document.getElementById('forgot-email').value.trim();
  if (!email) return setAuthMessage('Enter your email address.', 'error');
  setAuthMessage('Sending reset link...', '');
  const { error } = await db.auth.resetPasswordForEmail(email);
  if (error) return setAuthMessage(error.message, 'error');
  setAuthMessage('✅ Reset link sent! Check your email.', 'success');
}

async function signOut() {
  await db.auth.signOut();
  currentUser = null;
  tasksDone = {}; sessions = []; notes = [];
  streak = { count: 0, best: 0, lastDate: null };
  localStorage.clear();
  document.getElementById('auth-wall').style.display = 'flex';
  document.getElementById('app-shell').style.display = 'none';
  showTab('login');
}

function renderAppShell() {
  document.getElementById('auth-wall').style.display = 'none';
  document.getElementById('app-shell').style.display = 'block';
}

// ============================================================
// CLOUD SYNC
// ============================================================
async function syncFromCloud() {
  if (!currentUser) return;
  showSyncStatus('syncing');
  try {
    const uid = currentUser.id;
    const [tdRes, sessRes, notesRes, streakRes] = await Promise.all([
      db.from('tasks_done').select('task_key').eq('user_id', uid),
      db.from('sessions').select('*').eq('user_id', uid).order('ts', { ascending: true }),
      db.from('notes').select('*').eq('user_id', uid).order('ts', { ascending: true }),
      db.from('streaks').select('*').eq('user_id', uid).single()
    ]);
    if (tdRes.data) { tasksDone = {}; tdRes.data.forEach(r => { tasksDone[r.task_key] = true; }); }
    if (sessRes.data) sessions = sessRes.data.map(r => ({ id: r.id, date: r.date, track: r.track, hours: parseFloat(r.hours), notes: r.notes, mood: r.mood, ts: r.ts }));
    if (notesRes.data) notes = notesRes.data.map(r => ({ id: r.id, title: r.title, body: r.body, track: r.track, ts: r.ts }));
    if (streakRes.data) streak = { count: streakRes.data.count, best: streakRes.data.best, lastDate: streakRes.data.last_date };
    saveLocal('tasksDone', tasksDone); saveLocal('sessions', sessions); saveLocal('notes', notes); saveLocal('streak', streak);
    showSyncStatus('synced');
    renderCurrentPage();
  } catch(e) { console.error(e); showSyncStatus('offline'); }
}

async function pushTaskDone(key, isDone) {
  if (!currentUser) return;
  if (isDone) await db.from('tasks_done').upsert({ user_id: currentUser.id, task_key: key }, { onConflict: 'user_id,task_key' });
  else await db.from('tasks_done').delete().eq('user_id', currentUser.id).eq('task_key', key);
}
async function pushSession(session) {
  if (!currentUser) return null;
  const { data, error } = await db.from('sessions').insert({ user_id: currentUser.id, date: session.date, track: session.track, hours: session.hours, notes: session.notes, mood: session.mood, ts: session.ts }).select().single();
  if (error) { console.error(error); return null; }
  return data.id;
}
async function deleteSessionCloud(id) {
  if (!currentUser || !id) return;
  await db.from('sessions').delete().eq('id', id).eq('user_id', currentUser.id);
}
async function pushNote(note) {
  if (!currentUser) return null;
  const { data, error } = await db.from('notes').insert({ user_id: currentUser.id, title: note.title, body: note.body, track: note.track, ts: note.ts }).select().single();
  if (error) { console.error(error); return null; }
  return data.id;
}
async function updateNoteCloud(note) {
  if (!currentUser || !note.id) return;
  await db.from('notes').update({ title: note.title, body: note.body, track: note.track }).eq('id', note.id).eq('user_id', currentUser.id);
}
async function deleteNoteCloud(id) {
  if (!currentUser || !id) return;
  await db.from('notes').delete().eq('id', id).eq('user_id', currentUser.id);
}
async function pushStreak() {
  if (!currentUser) return;
  await db.from('streaks').upsert({ user_id: currentUser.id, count: streak.count, best: streak.best, last_date: streak.lastDate }, { onConflict: 'user_id' });
}
function showSyncStatus(status) {
  const el = document.getElementById('sync-status');
  if (!el) return;
  if (status === 'syncing') { el.textContent = '🔄'; el.title = 'Syncing...'; }
  else if (status === 'synced') { el.textContent = '☁️'; el.title = 'Synced'; }
  else { el.textContent = '⚠️'; el.title = 'Offline'; }
}

// ============================================================
// STREAK
// ============================================================
function updateStreak() {
  const today = new Date().toDateString();
  const yesterday = new Date(Date.now() - 86400000).toDateString();
  const hasToday = sessions.some(s => new Date(s.date).toDateString() === today);
  if (!hasToday || streak.lastDate === today) return;
  streak.count = streak.lastDate === yesterday ? streak.count + 1 : 1;
  streak.lastDate = today;
  if (streak.count > streak.best) streak.best = streak.count;
  saveLocal('streak', streak);
  pushStreak();
}

// ============================================================
// PROGRESS
// ============================================================
function calcProgress(track) {
  const phases = TASKS[track];
  let total = 0, done = 0;
  phases.forEach((phase, pi) => { phase.items.forEach((_, ti) => { total++; if (tasksDone[`${track}-${pi}-${ti}`]) done++; }); });
  return total === 0 ? 0 : Math.round((done / total) * 100);
}

// ============================================================
// RENDER DASHBOARD
// ============================================================
function renderDashboard() {
  const hour = new Date().getHours();
  const greet = hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";
  document.getElementById('greeting').textContent = `${greet}! Let's make today count. 💪`;

  // Phase banner
  const phase2Banner = document.getElementById('phase-banner');
  if (!isPhase2()) {
    const daysLeft = Math.ceil((PHASE2_START - new Date()) / 86400000);
    phase2Banner.innerHTML = `📅 <strong>Phase 1 active</strong> — Python, Security+ & Braiding. Phase 2 unlocks in <strong>${daysLeft} days</strong> (May 1).`;
    phase2Banner.style.display = 'block';
  } else {
    phase2Banner.innerHTML = `🚀 <strong>Phase 2 unlocked!</strong> All tracks are now active.`;
    phase2Banner.style.display = 'block';
  }

  // Deadline banners
  const secDays = Math.ceil((new Date('2026-04-21') - new Date()) / 86400000);
  const projDays = Math.ceil((new Date('2026-04-23') - new Date()) / 86400000);
  const deadlineEl = document.getElementById('deadline-banner');
  if (secDays > 0 && secDays <= 45 && projDays > 0) {
    deadlineEl.innerHTML = `⏰ Security+ in <strong>${secDays} days</strong> (Apr 21) · Pattern Recognition project in <strong>${projDays} days</strong> (Apr 23)`;
    deadlineEl.style.display = 'block';
  } else if (projDays > 0 && projDays <= 45) {
    deadlineEl.innerHTML = `⏰ Pattern Recognition project due in <strong>${projDays} days</strong> (Apr 23)`;
    deadlineEl.style.display = 'block';
  } else {
    deadlineEl.style.display = 'none';
  }

  // Progress cards — show phase 2 tracks as locked if not yet
  Object.keys(TRACK_META).forEach(t => {
    const pct = calcProgress(t);
    const bar = document.getElementById(`dash-${t}-bar`);
    const pctEl = document.getElementById(`dash-${t}-pct`);
    const card = document.getElementById(`card-${t}`);
    if (bar) bar.style.width = pct + '%';
    if (pctEl) pctEl.textContent = TRACK_META[t].phase === 2 && !isPhase2() ? '🔒 May 1' : pct + '%';
    if (card) card.style.opacity = TRACK_META[t].phase === 2 && !isPhase2() ? '0.45' : '1';
  });

  // Today's sessions
  const today = new Date().toDateString();
  const todaySessions = sessions.filter(s => new Date(s.date).toDateString() === today);
  const focusEl = document.getElementById('today-focus');
  if (todaySessions.length === 0) {
    focusEl.innerHTML = '<div class="focus-empty">No sessions logged today. Keep the streak alive!</div>';
  } else {
    const totalH = todaySessions.reduce((a, s) => a + s.hours, 0);
    const tracks = [...new Set(todaySessions.map(s => TRACK_META[s.track].icon + ' ' + TRACK_META[s.track].label))].join(' · ');
    focusEl.innerHTML = `<div class="focus-item">Today's sessions</div><div class="focus-hours">${totalH}h logged</div><div class="focus-track">${tracks}</div>`;
  }

  const recentEl = document.getElementById('recent-list');
  if (sessions.length === 0) {
    recentEl.innerHTML = '<div class="empty-state">No sessions logged yet. Hit the + button to start!</div>';
  } else {
    recentEl.innerHTML = [...sessions].reverse().slice(0, 5).map(s => renderLogItem(s, true)).join('');
  }

  updateStreak();
  const totalHours = sessions.reduce((a, s) => a + s.hours, 0);
  document.getElementById('stat-total-hours').textContent = totalHours % 1 === 0 ? totalHours + 'h' : totalHours.toFixed(1) + 'h';
  document.getElementById('stat-sessions').textContent = sessions.length;
  document.getElementById('stat-streak').textContent = streak.count;
  document.getElementById('stat-best-streak').textContent = streak.best;
  document.getElementById('streak-badge').textContent = `🔥 ${streak.count}`;
}

// ============================================================
// RENDER TASKS
// ============================================================
function renderTasks(track) {
  const container = document.getElementById('tasks-content');
  const phases = TASKS[track];
  const meta = TRACK_META[track];

  if (meta.phase === 2 && !isPhase2()) {
    container.innerHTML = `<div class="empty-state" style="padding:40px 20px;text-align:center">
      🔒 <strong>${meta.icon} ${meta.label}</strong> unlocks on <strong>May 1, 2026</strong>.<br><br>
      Focus on Python, Security+ and Braiding for now. You've got this! 💪
    </div>`;
    return;
  }

  let html = `<div style="color:var(--text2);font-size:13px;margin-bottom:12px">Progress: <strong style="color:${meta.color}">${calcProgress(track)}% complete</strong></div>`;
  phases.forEach((phase, pi) => {
    const phaseDone = phase.items.filter((_, ti) => tasksDone[`${track}-${pi}-${ti}`]).length;
    const phasePct = Math.round((phaseDone / phase.items.length) * 100);
    const isLocked = phase.phase.startsWith('🔒');
    html += `<div class="phase-group ${isLocked ? 'phase-locked' : ''}">
      <div class="phase-header">
        <div>
          <div class="phase-title">${phase.phase}</div>
          <div class="phase-dates">${phaseDone}/${phase.items.length} tasks · ${phase.dates}</div>
        </div>
        <div class="phase-pct" style="color:${meta.color}">${phasePct}%</div>
      </div>`;
    phase.items.forEach((item, ti) => {
      const key = `${track}-${pi}-${ti}`;
      const done = !!tasksDone[key];
      html += `<div class="task-item ${done ? 'done' : ''} ${isLocked ? 'task-locked' : ''}" onclick="${isLocked ? '' : `toggleTask('${key}')`}">
        <div class="task-check"></div>
        <div><div class="task-text">${item}</div></div>
      </div>`;
    });
    html += `</div>`;
  });
  container.innerHTML = html;
}

async function toggleTask(key) {
  tasksDone[key] = !tasksDone[key];
  saveLocal('tasksDone', tasksDone);
  renderTasks(currentTrack);
  renderDashboard();
  showToast(tasksDone[key] ? '✅ Task completed!' : 'Task unmarked');
  await pushTaskDone(key, tasksDone[key]);
}

// ============================================================
// RENDER LOG
// ============================================================
function renderLogHistory() {
  const container = document.getElementById('log-history');
  if (sessions.length === 0) { container.innerHTML = '<div class="empty-state">No sessions logged yet.</div>'; return; }
  container.innerHTML = [...sessions].reverse().map(s => renderLogItem(s, false)).join('');
}

function renderLogItem(s, compact) {
  const meta = TRACK_META[s.track] || { icon: '📌', label: s.track, color: '#888' };
  const dateStr = new Date(s.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  return `<div class="log-item">
    <div class="log-item-icon">${meta.icon}</div>
    <div class="log-item-info">
      <div class="log-item-track" style="color:${meta.color}">${meta.label}</div>
      <div class="log-item-date">${dateStr} ${s.mood || ''}</div>
      ${s.notes ? `<div class="log-item-notes">${s.notes}</div>` : ''}
    </div>
    <div style="display:flex;flex-direction:column;align-items:flex-end;gap:4px">
      <div class="log-item-hours">${s.hours}h</div>
      ${!compact ? `<button class="log-item-delete" onclick="deleteSession('${s.id}')">🗑</button>` : ''}
    </div>
  </div>`;
}

async function deleteSession(id) {
  if (!confirm('Delete this session?')) return;
  sessions = sessions.filter(s => s.id !== id);
  saveLocal('sessions', sessions);
  await deleteSessionCloud(id);
  renderLogHistory(); renderDashboard();
  showToast('Session deleted');
}

async function saveLog() {
  const date     = document.getElementById('log-date').value;
  const track    = document.getElementById('log-track').value;
  const hours    = parseFloat(document.getElementById('log-hours').value);
  const notesVal = document.getElementById('log-notes').value.trim();
  if (!date) return showToast('⚠️ Pick a date');
  if (!hours || hours <= 0) return showToast('⚠️ Enter hours spent');
  const newSession = { date, track, hours, notes: notesVal, mood: selectedMood || '', ts: Date.now() };
  const cloudId = await pushSession(newSession);
  newSession.id = cloudId || ('local-' + Date.now());
  sessions.push(newSession);
  saveLocal('sessions', sessions);
  updateStreak();
  document.getElementById('log-notes').value = '';
  document.getElementById('log-hours').value = '';
  document.querySelectorAll('.hour-btn').forEach(b => b.classList.remove('selected'));
  document.querySelectorAll('.mood-btn').forEach(b => b.classList.remove('selected'));
  selectedHours = null; selectedMood = null;
  renderLogHistory(); renderDashboard();
  showToast('🎉 Session saved!');
}

// ============================================================
// RENDER NOTES
// ============================================================
function renderNotes() {
  const filter = document.getElementById('notes-filter').value;
  const filtered = filter === 'all' ? notes : notes.filter(n => n.track === filter);
  const container = document.getElementById('notes-list');
  if (filtered.length === 0) { container.innerHTML = '<div class="empty-state">No notes yet. Tap "+ New Note" to start.</div>'; return; }
  container.innerHTML = [...filtered].reverse().map(note => {
    const dateStr = new Date(note.ts || Date.now()).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    const meta = TRACK_META[note.track];
    return `<div class="note-card" onclick="editNote('${note.id}')">
      <div class="note-card-header"><div class="note-card-title">${note.title || 'Untitled'}</div><button class="note-delete-btn" onclick="event.stopPropagation();deleteNote('${note.id}')">🗑</button></div>
      <div class="note-card-meta"><span class="note-card-track">${meta ? meta.icon + ' ' + meta.label : '📝 General'}</span><span class="note-card-date">${dateStr}</span></div>
      ${note.body ? `<div class="note-card-preview">${note.body}</div>` : ''}
    </div>`;
  }).join('');
}

function openNoteModal(noteId = null) {
  editingNoteId = noteId;
  document.getElementById('modal-title').textContent = noteId ? 'Edit Note' : 'New Note';
  if (noteId) {
    const n = notes.find(n => n.id === noteId);
    if (n) { document.getElementById('note-title-input').value = n.title || ''; document.getElementById('note-body-input').value = n.body || ''; document.getElementById('note-track-input').value = n.track || 'general'; }
  } else {
    document.getElementById('note-title-input').value = '';
    document.getElementById('note-body-input').value = '';
    document.getElementById('note-track-input').value = 'general';
  }
  document.getElementById('note-modal').classList.add('open');
}

async function saveNote() {
  const title = document.getElementById('note-title-input').value.trim();
  const body  = document.getElementById('note-body-input').value.trim();
  const track = document.getElementById('note-track-input').value;
  if (!title && !body) return showToast('⚠️ Write something first');
  if (editingNoteId) {
    const idx = notes.findIndex(n => n.id === editingNoteId);
    if (idx !== -1) { notes[idx] = { ...notes[idx], title, body, track }; await updateNoteCloud(notes[idx]); }
    showToast('📝 Note updated');
  } else {
    const newNote = { title, body, track, ts: Date.now() };
    const cloudId = await pushNote(newNote);
    newNote.id = cloudId || ('local-' + Date.now());
    notes.push(newNote);
    showToast('📝 Note saved!');
  }
  saveLocal('notes', notes);
  document.getElementById('note-modal').classList.remove('open');
  renderNotes();
}

function editNote(id) { openNoteModal(id); }

async function deleteNote(id) {
  if (!confirm('Delete this note?')) return;
  notes = notes.filter(n => n.id !== id);
  saveLocal('notes', notes);
  await deleteNoteCloud(id);
  renderNotes();
  showToast('Note deleted');
}

// ============================================================
// NAVIGATION
// ============================================================
function renderCurrentPage() {
  if (currentPage === 'dashboard') renderDashboard();
  else if (currentPage === 'tasks') renderTasks(currentTrack);
  else if (currentPage === 'log') { renderLogHistory(); initLogForm(); }
  else if (currentPage === 'notes') renderNotes();
}

function navigateTo(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(`page-${page}`).classList.add('active');
  document.querySelector(`.nav-btn[data-page="${page}"]`)?.classList.add('active');
  currentPage = page;
  const titles = { dashboard: 'Dashboard', tasks: 'My Tasks', log: 'Log Session', notes: 'Notes' };
  document.getElementById('page-title').textContent = titles[page] || 'Roadmap';
  renderCurrentPage();
}

function initLogForm() {
  const dateEl = document.getElementById('log-date');
  if (!dateEl.value) dateEl.value = new Date().toISOString().split('T')[0];
}

function showToast(msg) {
  document.querySelectorAll('.toast').forEach(t => t.remove());
  const t = document.createElement('div');
  t.className = 'toast'; t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 2200);
}

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', async () => {
  const { data: { session } } = await db.auth.getSession();
  if (session?.user) {
    currentUser = session.user;
    renderAppShell();
    await syncFromCloud();
    navigateTo('dashboard');
  } else {
    document.getElementById('auth-wall').style.display = 'flex';
  }

  db.auth.onAuthStateChange(async (event, session) => {
    if (event === 'SIGNED_IN' && session?.user) {
      currentUser = session.user;
      renderAppShell();
      await syncFromCloud();
      navigateTo('dashboard');
    } else if (event === 'SIGNED_OUT') {
      document.getElementById('auth-wall').style.display = 'flex';
      document.getElementById('app-shell').style.display = 'none';
    }
  });

  document.getElementById('login-btn').addEventListener('click', handleSignIn);
  document.getElementById('signup-btn').addEventListener('click', handleSignUp);
  document.getElementById('forgot-btn').addEventListener('click', handleForgotPassword);
  document.getElementById('signout-btn').addEventListener('click', () => { if (confirm('Sign out?')) signOut(); });

  ['login-email','login-password'].forEach(id => {
    document.getElementById(id)?.addEventListener('keydown', e => { if (e.key === 'Enter') handleSignIn(); });
  });
  ['signup-email','signup-password'].forEach(id => {
    document.getElementById(id)?.addEventListener('keydown', e => { if (e.key === 'Enter') handleSignUp(); });
  });

  document.getElementById('sync-btn')?.addEventListener('click', async () => { await syncFromCloud(); showToast('☁️ Synced!'); });

  document.querySelectorAll('.nav-btn[data-page]').forEach(btn => {
    btn.addEventListener('click', () => navigateTo(btn.dataset.page));
  });

  document.querySelectorAll('.track-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.track-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentTrack = tab.dataset.track;
      renderTasks(currentTrack);
    });
  });

  document.querySelectorAll('.hour-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.hour-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedHours = parseFloat(btn.dataset.val);
      document.getElementById('log-hours').value = selectedHours;
    });
  });

  document.querySelectorAll('.mood-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.mood-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedMood = btn.dataset.mood;
    });
  });

  document.getElementById('save-log-btn').addEventListener('click', saveLog);
  document.getElementById('new-note-btn').addEventListener('click', () => openNoteModal(null));
  document.getElementById('save-note-btn').addEventListener('click', saveNote);
  document.getElementById('close-note-modal').addEventListener('click', () => { document.getElementById('note-modal').classList.remove('open'); });
  document.getElementById('note-modal').addEventListener('click', e => { if (e.target === document.getElementById('note-modal')) document.getElementById('note-modal').classList.remove('open'); });
  document.getElementById('notes-filter').addEventListener('change', renderNotes);

  document.getElementById('settings-btn').addEventListener('click', () => {
    if (confirm('Reset ALL local data? Cloud data will remain.')) {
      localStorage.clear();
      tasksDone = {}; sessions = []; notes = [];
      streak = { count: 0, best: 0, lastDate: null };
      navigateTo('dashboard');
      showToast('Local data reset');
    }
  });

  document.querySelectorAll('.progress-card[data-track]').forEach(card => {
    card.addEventListener('click', () => {
      const track = card.dataset.track;
      navigateTo('tasks');
      setTimeout(() => {
        const tab = document.querySelector(`[data-track="${track}"]`);
        if (tab) { document.querySelectorAll('.track-tab').forEach(t => t.classList.remove('active')); tab.classList.add('active'); currentTrack = track; renderTasks(track); }
      }, 50);
    });
  });

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/Roadmap/sw.js', { scope: '/Roadmap/' })
      .then(reg => console.log('SW registered:', reg.scope))
      .catch(err => console.error('SW failed:', err));
  }
  initLogForm();

  // Capture install prompt
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredInstallPrompt = e;
    // Show install banner
    const banner = document.getElementById('install-banner');
    if (banner) banner.style.display = 'flex';
  });

  // Install button clicked
  document.getElementById('install-btn')?.addEventListener('click', async () => {
    if (!deferredInstallPrompt) return;
    deferredInstallPrompt.prompt();
    const { outcome } = await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    document.getElementById('install-banner').style.display = 'none';
    if (outcome === 'accepted') showToast('🎉 App installed!');
  });

  document.getElementById('install-dismiss')?.addEventListener('click', () => {
    document.getElementById('install-banner').style.display = 'none';
  });

  // Already installed
  window.addEventListener('appinstalled', () => {
    const banner = document.getElementById('install-banner');
    if (banner) banner.style.display = 'none';
    showToast('✅ App installed successfully!');
  });
});
