// ============================================================
// SUPABASE CONFIG
// ============================================================
const SUPABASE_URL = 'https://uvqjswdfcixwktgvnzbq.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV2cWpzd2RmY2l4d2t0Z3ZuemJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk3NjQ4MDAsImV4cCI6MjAyNTM0MDgwMH0.Qlf9NFTH2xGMoJbSR8hSGhKf2xyYK7NhU0_YBuJnKDE';
const ROW_UUID = '46ff1227-8bce-4138-9993-3b9f6f2508ef';
const COL = 'roadmap_data';

const { createClient } = supabase;
const db = createClient(SUPABASE_URL, SUPABASE_KEY);

// ============================================================
// TRACKS DEFINITION
// Phase 1 = 2026 (active now)
// Phase 2 = 2027
// Later   = 2028+
// ============================================================
const TRACKS = [

  // ──────────────────────────────────────────────────────────
  // PHASE 1 — Active 2026
  // ──────────────────────────────────────────────────────────
  {
    id: 'python', phase: 1, icon: '🐍', label: 'Python',
    color: '#3b82f6',
    desc: 'Proficient by August 8, 2026 · 12 hrs/wk · 120 hr goal',
    targetHours: 120,
    weeklyHours: 12,
    startDate: '2026-06-08',
    endDate: '2026-08-08',
    weeks: [
      {
        label: 'Week 1–2 — Core Syntax',
        dates: 'Jun 8–21',
        tasks: [
          'Set up Python environment (VS Code + Python 3.12)',
          'Data types, variables, operators, f-strings',
          'Conditionals (if/elif/else)',
          'Loops: for, while, range()',
          'Functions: def, return, default args',
          'Lists, tuples, sets, dicts — all operations',
          'List comprehensions',
          'String methods + slicing',
        ]
      },
      {
        label: 'Week 3–4 — OOP + File Handling',
        dates: 'Jun 22–Jul 5',
        tasks: [
          'Classes, objects, __init__, self',
          'Inheritance + method overriding',
          'Exception handling: try/except/finally',
          'File I/O: open(), read, write, CSV',
          'Modules + imports (os, sys, json, datetime)',
          'Virtual environments + pip',
          'Project: Build a personal expense logger (CSV)',
        ]
      },
      {
        label: 'Week 5–6 — Data Libraries',
        dates: 'Jul 6–19',
        tasks: [
          'NumPy: arrays, reshape, broadcasting, math ops',
          'Pandas: DataFrames, read_csv, filtering, groupby',
          'Data cleaning: dropna, fillna, dtype conversion',
          'Matplotlib: line, bar, scatter, histogram',
          'Project: Analyze a real dataset (Kaggle CSV of choice)',
        ]
      },
      {
        label: 'Week 7–8 — APIs + Web',
        dates: 'Jul 20–Aug 2',
        tasks: [
          'requests library: GET, POST, headers, JSON response',
          'Parse and store API data in Pandas',
          'BeautifulSoup: scraping basics',
          'Build a script that fetches + saves live data',
          'Intro to Flask: routes, templates, form handling',
        ]
      },
      {
        label: 'Week 9–10 — ML + Capstone',
        dates: 'Aug 3–8',
        tasks: [
          'scikit-learn: train/test split, fit, predict',
          'Logistic Regression + Random Forest basics',
          'Evaluate: accuracy, precision, recall, F1',
          'CAPSTONE: Build one full project from scratch',
          'CAPSTONE: Clean dataset → train model → evaluate → document',
          'Push capstone to GitHub with README',
        ]
      },
    ]
  },

  {
    id: 'french', phase: 1, icon: '🇫🇷', label: 'French',
    color: '#8b5cf6',
    desc: 'A2 / touching B1 by Dec 31 · 3.5 hrs/wk · 30 min/day',
    targetHours: 108,
    weeklyHours: 3.5,
    startDate: '2026-06-08',
    endDate: '2026-12-31',
    weeks: [
      {
        label: 'Month 1 — Foundations',
        dates: 'Jun 8–30',
        tasks: [
          'Language Transfer French: Complete tracks 1–20',
          'Duolingo: Complete Unit 1 (greetings, basics, food)',
          'Learn numbers 1–100 + days/months',
          'Pronunciation: nasal vowels, silent letters, liaison',
          'Present tense: être, avoir, -er verbs',
          'Book first iTalki community tutor session',
        ]
      },
      {
        label: 'Month 2 — Building Sentences',
        dates: 'Jul 1–31',
        tasks: [
          'Language Transfer: Complete tracks 21–40',
          'Duolingo: Complete Unit 2',
          'Irregular verbs: aller, faire, pouvoir, vouloir, venir',
          'Articles: le/la/les, un/une, du/de la/des',
          'Negation: ne...pas, ne...jamais, ne...rien',
          'Questions: est-ce que, inversion, question words',
          'iTalki session #2: introduce yourself, daily routine',
        ]
      },
      {
        label: 'Month 3 — Past + Future',
        dates: 'Aug 1–31',
        tasks: [
          'Language Transfer: Complete tracks 41–52 (finish)',
          'Passé composé: avoir/être auxiliaries + agreement',
          'Imparfait: formation + when to use vs passé composé',
          'Futur simple: formation + irregular stems',
          'Duolingo: Complete Unit 3',
          'iTalki session #3: describe past events',
        ]
      },
      {
        label: 'Month 4–5 — Intermediate Structures',
        dates: 'Sep 1–Oct 31',
        tasks: [
          'Subjunctif: when to use, common triggers',
          'Conditionnel: would/could structures',
          'Object pronouns: me/te/lui/les/y/en placement',
          'Relative clauses: qui, que, dont, où',
          'Listening: 15 min/day of French YouTube (Easy French)',
          'iTalki session #4 + #5: free conversation topics',
          'Duolingo: Complete Unit 4',
        ]
      },
      {
        label: 'Month 6–7 — Consolidation + A2 Target',
        dates: 'Nov 1–Dec 31',
        tasks: [
          'Review all grammar with Kwiziq.com French assessment',
          'Reading: Simple French articles (1 per week)',
          'Writing: Short journal entries in French (3x/week)',
          'iTalki session #6 + beyond: topic-based conversation',
          'A2 self-assessment using DELF sample questions',
          'Duolingo: Maintain daily streak to year end',
        ]
      },
    ]
  },

  {
    id: 'hair', phase: 1, icon: '💇🏾', label: 'Hair Braiding',
    color: '#ec4899',
    desc: '5 styles by Dec 31 · 30 min, 3x/week · Knotless + Box concurrent from Jun 8',
    targetHours: 46,
    weeklyHours: 1.5,
    startDate: '2026-06-08',
    endDate: '2026-12-31',
    weeks: [
      {
        label: 'Phase A — Knotless + Box Braids (Concurrent)',
        dates: 'Jun 8 – Aug 31',
        tasks: [
          'Get mannequin head + practice hair (knotless + box)',
          'KNOTLESS: Watch 3 tutorials before first attempt',
          'KNOTLESS: Practice feed-in technique on mannequin (Session 1–3)',
          'BOX BRAIDS: Practice parting + sectioning (clean grid)',
          'KNOTLESS: First full head attempt — note pain points',
          'BOX BRAIDS: First full head attempt on mannequin',
          'KNOTLESS: Second attempt — focus on tension consistency',
          'BOX BRAIDS: Second attempt — focus on sizing uniformity',
          'Both: Practice on real hair (volunteer/self) — knotless first',
          'Both: Achieve clean consistent result on real hair',
        ]
      },
      {
        label: 'Phase B — Cornrows',
        dates: 'Sep 1–30',
        tasks: [
          'Watch cornrow tutorials: parting, feeding, tension',
          'Practice straight-back cornrows on mannequin (Session 1)',
          'Practice curved/creative parts',
          'Add feed-in (extensions) to cornrows',
          'Full cornrow style on mannequin: clean + even',
          'Cornrows on real hair — confident result',
        ]
      },
      {
        label: 'Phase C — Stitch Braids',
        dates: 'Oct 1–31',
        tasks: [
          'Watch stitch braid tutorials: the stitch technique',
          'Practice the stitch motion slowly on mannequin',
          'Full set of stitch braids on mannequin',
          'Stitch braids with feed-in extensions',
          'Stitch braids on real hair — confident result',
        ]
      },
      {
        label: 'Phase D — Senegalese Twists',
        dates: 'Nov 1–Dec 31',
        tasks: [
          'Watch tutorials: rope twist vs Senegalese twist difference',
          'Practice twist tension + extension attachment',
          'Full set of Senegalese twists on mannequin',
          'Work on sizing consistency across the head',
          'Senegalese twists on real hair — confident result',
          'Review all 5 styles — identify weakest for extra practice',
        ]
      },
    ]
  },

  {
    id: 'gamedev', phase: 1, icon: '🎮', label: 'Game Dev (Unity)',
    color: '#f59e0b',
    desc: 'Working city sim prototype by Dec 31 · 8 hrs/wk (14 hrs after Aug 8)',
    targetHours: 200,
    weeklyHours: 8,
    startDate: '2026-06-08',
    endDate: '2026-12-31',
    weeks: [
      {
        label: 'Phase A — Unity Fundamentals',
        dates: 'Jun 8 – Jul 31',
        tasks: [
          'Install Unity Hub + Unity 2022 LTS',
          'Unity Junior Programmer Pathway: Unit 1 (Player Control)',
          'Unity Junior Programmer Pathway: Unit 2 (Basic Gameplay)',
          'Unity Junior Programmer Pathway: Unit 3 (Sound + Effects)',
          'Unity Junior Programmer Pathway: Unit 4 (Gameplay Mechanics)',
          'C# basics: variables, if/else, loops, methods',
          'C#: classes, objects, MonoBehaviour lifecycle',
          'Tutorial project: Build a simple clicker game from scratch',
          'Tutorial project: Idle resource generator (coins over time)',
        ]
      },
      {
        label: 'Phase B — Core Loop Prototype',
        dates: 'Aug 9 – Sep 30',
        tasks: [
          'Design economy: Farm → Market → Restaurant chain on paper',
          'Build: One building (Farm) with time-based production',
          'Build: Player taps to collect resource',
          'Build: Resource converts to coins automatically',
          'Build: Coins unlock one upgrade (production speed)',
          'Implement: PlayerPrefs save/load system',
          'Test: Close + reopen app, verify progress saved',
          'Core loop feel test: Is collecting satisfying? Adjust timers.',
        ]
      },
      {
        label: 'Phase C — 3 Production Chains',
        dates: 'Oct 1 – Nov 15',
        tasks: [
          'Build: Building #2 — Market (buys Farm output, sells to coins)',
          'Build: Building #3 — Restaurant (needs Farm + Market supply)',
          'Each building: 3 upgrade tiers with escalating costs',
          'Add: Offline earnings (cap at 4 hours of production)',
          'Add: Daily login reward system',
          'Add: Basic city grid — buildings placed as tiles on grid',
          'Art: Replace placeholder cubes with Kenney.nl city assets',
        ]
      },
      {
        label: 'Phase D — Polish + First Ad',
        dates: 'Nov 16 – Dec 31',
        tasks: [
          'Add: Population counter + city name header',
          'Add: Coin/resource float-up animation on collect',
          'Add: Quest system — 3 starter quests with rewards',
          'Integrate: Google AdMob plugin for Unity',
          'Implement: Rewarded video ad ("2x offline earnings")',
          'Tutorial: First 5 minutes guided experience for new player',
          'Build: Android APK, test on real phone',
          'Playtest: Give to 3 people, note confusion points, fix top 2',
        ]
      },
    ]
  },

  {
    id: 'htmljs', phase: 1, icon: '💻', label: 'HTML / JavaScript',
    color: '#10b981',
    desc: 'Confident by Sep 30 · 3 hrs/wk · Formalizing your existing PWA knowledge',
    targetHours: 52,
    weeklyHours: 3,
    startDate: '2026-06-08',
    endDate: '2026-09-30',
    weeks: [
      {
        label: 'Month 1 — HTML + CSS Deep Dive',
        dates: 'Jun 8–30',
        tasks: [
          'Semantic HTML: header, main, section, article, aside, footer',
          'Forms: input types, labels, validation attributes',
          'CSS: box model, flexbox, grid — all properties practiced',
          'CSS: variables, calc(), clamp(), responsive units',
          'CSS: animations, transitions, transforms',
          'CSS: media queries + mobile-first design',
          'Build: Responsive landing page from scratch (no framework)',
        ]
      },
      {
        label: 'Month 2 — JavaScript Depth',
        dates: 'Jul 1–31',
        tasks: [
          'DOM: querySelector, event listeners, classList, dataset',
          'Events: click, input, submit, keydown, custom events',
          'Arrays: map, filter, reduce, find, sort — all practiced',
          'Objects: destructuring, spread, Object.keys/values/entries',
          'async/await + fetch + error handling',
          'Promises: then/catch chain, Promise.all',
          'LocalStorage + JSON.parse/stringify',
          'Build: A working todo app with local persistence',
        ]
      },
      {
        label: 'Month 3 — PWA + Advanced Patterns',
        dates: 'Aug 1–31',
        tasks: [
          'Service workers: install, fetch, cache strategies',
          'Web App Manifest: all fields, icon sizes',
          'IndexedDB basics (beyond localStorage for larger data)',
          'Modules: import/export, dynamic import()',
          'Canvas API: drawing, animation loop, requestAnimationFrame',
          'Build: PWA from scratch with offline support + install prompt',
        ]
      },
      {
        label: 'Month 4 — Applied + Wrap-up',
        dates: 'Sep 1–30',
        tasks: [
          'WebSockets: connect, send, onmessage basics',
          'Intersection Observer: lazy loading, scroll animations',
          'Web components: customElements, shadow DOM basics',
          'Refactor one of your existing PWA apps using new patterns',
          'Document what you built — write a short README for each app',
        ]
      },
    ]
  },

  {
    id: 'sql', phase: 1, icon: '🗄️', label: 'SQL',
    color: '#06b6d4',
    desc: 'Working proficiency by Sep 30 · 3 hrs/wk · Starts Aug 9',
    targetHours: 24,
    weeklyHours: 3,
    startDate: '2026-08-09',
    endDate: '2026-09-30',
    weeks: [
      {
        label: 'Week 1–2 — Core Queries',
        dates: 'Aug 9–22',
        tasks: [
          'SELECT, FROM, WHERE, ORDER BY, LIMIT',
          'Filtering: AND, OR, NOT, IN, BETWEEN, LIKE',
          'Aggregations: COUNT, SUM, AVG, MIN, MAX',
          'GROUP BY + HAVING',
          'Practice on SQLiteOnline.com with sample datasets',
        ]
      },
      {
        label: 'Week 3–4 — Joins + Subqueries',
        dates: 'Aug 23–Sep 5',
        tasks: [
          'INNER JOIN, LEFT JOIN, RIGHT JOIN — all with examples',
          'Self-joins',
          'Subqueries: in WHERE, in FROM, correlated',
          'CTEs: WITH clause for readable complex queries',
          'Window functions: ROW_NUMBER, RANK, LAG, LEAD',
        ]
      },
      {
        label: 'Week 5–7 — Schema + Project',
        dates: 'Sep 6–30',
        tasks: [
          'CREATE TABLE, data types, constraints (PK, FK, UNIQUE, NOT NULL)',
          'INSERT, UPDATE, DELETE with WHERE safety',
          'Indexes: when and why to use them',
          'Supabase: create tables via SQL editor',
          'PROJECT: Design game economy DB (Buildings, Resources, Players, Transactions)',
          'PROJECT: Write 10 meaningful queries against your game DB',
        ]
      },
    ]
  },

  {
    id: 'c', phase: 1, icon: '⚙️', label: 'C Language',
    color: '#f97316',
    desc: 'Functional by Dec 31 · 4 hrs/wk · Starts Sep 1',
    targetHours: 56,
    weeklyHours: 4,
    startDate: '2026-09-01',
    endDate: '2026-12-31',
    weeks: [
      {
        label: 'Month 1 — Foundations',
        dates: 'Sep 1–30',
        tasks: [
          'Setup: gcc + VS Code, compile + run first program',
          'Data types: int, float, char, long, unsigned',
          'Operators, printf formatting, scanf input',
          'Conditionals: if/else, switch',
          'Loops: for, while, do-while, break, continue',
          'Functions: declaration, definition, pass by value',
          'Arrays: 1D, 2D, passing to functions',
        ]
      },
      {
        label: 'Month 2 — Pointers + Memory',
        dates: 'Oct 1–31',
        tasks: [
          'Pointers: declaration, dereferencing, pointer arithmetic',
          'Pass by pointer (simulating pass by reference)',
          'Dynamic memory: malloc, calloc, realloc, free',
          'Strings in C: char arrays, strlen, strcpy, strcmp, strcat',
          'Structs: definition, dot notation, pointers to structs',
          'File I/O: fopen, fprintf, fscanf, fclose',
        ]
      },
      {
        label: 'Month 3 — Data Structures',
        dates: 'Nov 1–30',
        tasks: [
          'Linked list: node struct, insert, delete, traverse',
          'Stack in C: array-based + linked list-based',
          'Queue in C: array-based + linked list-based',
          'Binary search tree: insert, search, traversal',
          'Sorting algorithms: bubble, insertion, merge, quick',
        ]
      },
      {
        label: 'Month 4 — Project + Wrap-up',
        dates: 'Dec 1–31',
        tasks: [
          'Build: Command-line student grade tracker in C',
          'Build: Simple file encryption tool (XOR cipher)',
          'Makefile: write a Makefile for your project',
          'Valgrind: run memory leak check on your project',
          'Review: write a cheat sheet of all C concepts you now know',
        ]
      },
    ]
  },

  {
    id: 'driving', phase: 1, icon: '🚗', label: 'Driving',
    color: '#84cc16',
    desc: 'Licensed by October 2026 · Ongoing practice',
    targetHours: 40,
    weeklyHours: 2,
    startDate: '2026-06-08',
    endDate: '2026-10-31',
    weeks: [
      {
        label: 'Stage 1 — Permit + Basics',
        dates: 'Jun 8 – Jul 31',
        tasks: [
          'Study FL Driver Handbook (full read through)',
          'Pass FL knowledge test → get learner permit',
          'Practice: parking lot maneuvers (parking, reversing)',
          'Practice: residential streets, low traffic',
          'Practice: basic turns, lane changes, mirrors',
        ]
      },
      {
        label: 'Stage 2 — Building Confidence',
        dates: 'Aug 1 – Sep 30',
        tasks: [
          'Practice: highway on-ramp + merging',
          'Practice: multi-lane road driving',
          'Practice: parallel parking',
          'Practice: driving in light rain',
          'Practice: night driving (at least 3 sessions)',
        ]
      },
      {
        label: 'Stage 3 — Road Test',
        dates: 'Oct 1–31',
        tasks: [
          'Mock road test with instructor or experienced driver',
          'Practice: 3-point turn + all test maneuvers',
          'Book official road test',
          'PASS ROAD TEST ✅ — Get license',
        ]
      },
    ]
  },

  // ──────────────────────────────────────────────────────────
  // PHASE 2 — 2027
  // ──────────────────────────────────────────────────────────
  {
    id: 'cpp', phase: 2, icon: '⚡', label: 'C++',
    color: '#6366f1',
    desc: '2027 · Builds directly on C foundations',
    targetHours: 80,
    weeklyHours: 0,
    startDate: '2027-01-01',
    endDate: '2027-06-30',
    weeks: []
  },
  {
    id: 'java', phase: 2, icon: '☕', label: 'Java',
    color: '#ef4444',
    desc: '2027 · OOP depth, enterprise patterns, Android basics',
    targetHours: 60,
    weeklyHours: 0,
    startDate: '2027-01-01',
    endDate: '2027-06-30',
    weeks: []
  },
  {
    id: 'csharp', phase: 2, icon: '#️⃣', label: 'C#',
    color: '#8b5cf6',
    desc: '2027 · Full Unity game build with C# depth',
    targetHours: 80,
    weeklyHours: 0,
    startDate: '2027-01-01',
    endDate: '2027-12-31',
    weeks: []
  },
  {
    id: 'spanish', phase: 2, icon: '🇪🇸', label: 'Spanish',
    color: '#f59e0b',
    desc: '2027 · After French reaches B1 — transfer knowledge will speed this up',
    targetHours: 100,
    weeklyHours: 0,
    startDate: '2027-01-01',
    endDate: '2027-12-31',
    weeks: []
  },
  {
    id: 'violin', phase: 2, icon: '🎻', label: 'Violin',
    color: '#ec4899',
    desc: '2027 · Start from scratch — expect 2–3 years for genuine sound',
    targetHours: 150,
    weeklyHours: 0,
    startDate: '2027-01-01',
    endDate: '2027-12-31',
    weeks: []
  },
  {
    id: 'cyber', phase: 2, icon: '🔐', label: 'Cybersecurity / Ethical Hacking',
    color: '#10b981',
    desc: '2027 · Cryptography depth + ethical hacking labs (TryHackMe, HackTheBox)',
    targetHours: 200,
    weeklyHours: 0,
    startDate: '2027-01-01',
    endDate: '2027-12-31',
    weeks: []
  },
  {
    id: 'aiml', phase: 2, icon: '🤖', label: 'AI/ML (PhD Focus)',
    color: '#06b6d4',
    desc: '2027 · Advanced via PhD — deep learning, transformers, research projects',
    targetHours: 0,
    weeklyHours: 0,
    startDate: '2027-01-01',
    endDate: '2027-12-31',
    weeks: []
  },

  // ──────────────────────────────────────────────────────────
  // LATER YEARS — 2028+
  // ──────────────────────────────────────────────────────────
  {
    id: 'mandarin', phase: 3, icon: '🇨🇳', label: 'Mandarin',
    color: '#ef4444',
    desc: '2028–2030 · Hardest language on the list — 3+ years to conversational',
    targetHours: 0, weeklyHours: 0, startDate: '2028-01-01', endDate: '2030-12-31', weeks: []
  },
  {
    id: 'german', phase: 3, icon: '🇩🇪', label: 'German',
    color: '#f59e0b',
    desc: '2028+ · Germanic structure — easier after English, harder than Romance langs',
    targetHours: 0, weeklyHours: 0, startDate: '2028-01-01', endDate: '2029-12-31', weeks: []
  },
  {
    id: 'asl', phase: 1, icon: '🤟', label: 'Sign Language (ASL)',
    color: '#a78bfa',
    desc: 'Daily habit · 15 min/day from Jun 8 · ~1.75 hrs/wk · Foundation by Dec 31',
    targetHours: 54,
    weeklyHours: 1.75,
    startDate: '2026-06-08',
    endDate: '2026-12-31',
    weeks: [
      {
        label: 'Month 1 — Alphabet + Core Signs',
        dates: 'Jun 8–30 · 15 min/day',
        tasks: [
          'Learn ASL alphabet (fingerspelling) — practice daily until automatic',
          'Fingerspell your name, common words, cities fluently',
          'Learn numbers 1–30',
          'Core signs: hello, goodbye, please, thank you, sorry, yes, no, help',
          'Signs: eat, drink, water, food, good, bad, more, stop',
          'Start SigningSavvy.com account — use as your daily dictionary',
          'Watch 1 Dr. Bill Vicars YouTube lesson per week (lifeprint.com)',
        ]
      },
      {
        label: 'Month 2 — Introductions + Daily Life',
        dates: 'Jul 1–31 · 15 min/day',
        tasks: [
          'Signs: my name is, where are you from, nice to meet you',
          'Signs: family members (mother, father, sister, brother, friend)',
          'Signs: days of the week + time concepts (morning, night, today, tomorrow)',
          'Signs: colors (all basic colors)',
          'Signs: feelings (happy, sad, tired, excited, sick, fine)',
          'Practice: Introduce yourself fully in ASL (name, where from, feeling)',
          'Watch one signed story on ASL that! YouTube channel',
        ]
      },
      {
        label: 'Month 3 — Questions + Sentences',
        dates: 'Aug 1–31 · 15 min/day',
        tasks: [
          'ASL grammar: Topic-Comment structure (different from English)',
          'WH-questions: who, what, where, when, why, how — facial grammar',
          'Yes/No questions: eyebrow raise facial expression',
          'Negation: shake head + NOT, NEVER, NOTHING',
          'Signs: work, school, live, want, need, like, know, think, understand',
          'Practice: Ask and answer 5 simple questions in ASL',
          'Complete Lifeprint Unit 1 (all lessons)',
        ]
      },
      {
        label: 'Month 4–5 — Building Vocabulary',
        dates: 'Sep 1–Oct 31 · 15 min/day',
        tasks: [
          'Signs: 10 new signs per week (use Anki or SigningSavvy flashcards)',
          'Signs: verbs — go, come, give, take, buy, sell, open, close, start, finish',
          'Classifiers: introduction to what they are + 3 common ones',
          'Directional verbs: how verbs move in space (give ME vs give YOU)',
          'Signs: technology (phone, computer, internet, video, app)',
          'Watch Signed With Heart or ASL Nook YouTube — 10 min/day',
          'Complete Lifeprint Unit 2',
        ]
      },
      {
        label: 'Month 6–7 — Conversational Foundation',
        dates: 'Nov 1–Dec 31 · 15 min/day',
        tasks: [
          'Signs: 10 new signs per week — continue flashcard habit',
          'Practice: describe your daily routine fully in ASL',
          'Classifiers: 5 more common ones practiced',
          'Roleplay: shopping scenario, asking for directions, making plans',
          'Find one Deaf content creator to follow and watch regularly',
          'Self-assessment: Can you hold a basic 2-minute conversation?',
          'Complete Lifeprint Unit 3',
          'Review all signs learned — identify gaps, drill weakest ones',
        ]
      },
    ]
  },
  {
    id: 'swift', phase: 3, icon: '🍎', label: 'Swift',
    color: '#f97316',
    desc: '2028+ · iOS development — after C# and Java give strong OOP base',
    targetHours: 0, weeklyHours: 0, startDate: '2028-01-01', endDate: '2029-12-31', weeks: []
  },
  {
    id: 'r', phase: 3, icon: '📊', label: 'R',
    color: '#3b82f6',
    desc: '2028+ · Statistical computing — complements Python/ML work',
    targetHours: 0, weeklyHours: 0, startDate: '2028-01-01', endDate: '2029-12-31', weeks: []
  },
  {
    id: 'otherlang', phase: 3, icon: '💾', label: 'Remaining Languages',
    color: '#6b7280',
    desc: '2028+ · Additional programming languages as projects require them',
    targetHours: 0, weeklyHours: 0, startDate: '2028-01-01', endDate: '2031-12-31', weeks: []
  },
];

// ============================================================
// APP STATE
// ============================================================
let state = {
  sessions: [],         // { id, trackId, date, hours, note }
  tasksDone: {},        // { 'python-0-3': true } = track-weekIdx-taskIdx
};
let currentView = 'dashboard';
let currentTrack = null;

// ============================================================
// SUPABASE
// ============================================================
async function loadData() {
  try {
    const { data, error } = await db
      .from('user_data')
      .select(COL)
      .eq('id', ROW_UUID)
      .single();
    if (error) throw error;
    const saved = data?.[COL];
    if (saved) {
      state.sessions = saved.sessions || [];
      state.tasksDone = saved.tasksDone || {};
    }
  } catch (e) {
    console.warn('Load error:', e.message);
  }
  renderAll();
}

async function saveData() {
  try {
    await db.from('user_data')
      .update({ [COL]: { sessions: state.sessions, tasksDone: state.tasksDone } })
      .eq('id', ROW_UUID);
  } catch (e) {
    console.warn('Save error:', e.message);
  }
}

// ============================================================
// HELPERS
// ============================================================
function todayStr() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}

function fmt(h) {
  if (h === 0) return '0h';
  if (h < 1) return `${Math.round(h*60)}m`;
  return `${h.toFixed(1)}h`;
}

function hoursFor(trackId) {
  return state.sessions.filter(s => s.trackId === trackId).reduce((sum, s) => sum + s.hours, 0);
}

function totalHoursToday() {
  const t = todayStr();
  return state.sessions.filter(s => s.date === t).reduce((sum, s) => sum + s.hours, 0);
}

function allTasksDone(track) {
  let total = 0, done = 0;
  track.weeks.forEach((w, wi) => {
    w.tasks.forEach((_, ti) => {
      total++;
      if (state.tasksDone[`${track.id}-${wi}-${ti}`]) done++;
    });
  });
  return { total, done, pct: total ? Math.round((done/total)*100) : 0 };
}

function calcStreak() {
  if (!state.sessions.length) return 0;
  const dates = [...new Set(state.sessions.map(s => s.date))].sort().reverse();
  let count = 0, cur = new Date();
  for (const d of dates) {
    const dd = new Date(d + 'T12:00:00');
    const diff = Math.round((cur - dd) / (24*3600*1000));
    if (diff <= 1) { count++; cur = dd; } else break;
  }
  return count;
}

function greeting() {
  const h = new Date().getHours();
  return h < 12 ? 'Good morning, Melissa 👋' : h < 17 ? 'Good afternoon, Melissa 👋' : 'Good evening, Melissa 👋';
}

// ============================================================
// NAVIGATION
// ============================================================
function navigateTo(view, trackId = null) {
  currentView = view;
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById(`view-${view}`).classList.add('active');
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(`nav-${view === 'dashboard' ? 'dash' : view}`)?.classList.add('active');

  if (view === 'tasks') {
    if (trackId) currentTrack = trackId;
    renderTasksView();
  }
}

// ============================================================
// RENDER — DASHBOARD
// ============================================================
function renderAll() {
  // Greeting
  const g = document.getElementById('greeting');
  if (g) g.textContent = greeting();

  // Stats
  const totalH = state.sessions.reduce((s, x) => s + x.hours, 0);
  document.getElementById('stat-total-h').textContent = fmt(totalH);
  document.getElementById('stat-today-h').textContent = fmt(totalHoursToday());
  document.getElementById('stat-streak').textContent = calcStreak();

  // Overall task % across phase 1
  const phase1 = TRACKS.filter(t => t.phase === 1);
  let totalT = 0, doneT = 0;
  phase1.forEach(t => { const r = allTasksDone(t); totalT += r.total; doneT += r.done; });
  document.getElementById('stat-tasks').textContent = totalT ? `${Math.round((doneT/totalT)*100)}%` : '0%';

  // Cards
  renderPhaseCards('phase1-cards', 1);
  renderPhaseCards('phase2-cards', 2);
  renderPhaseCards('later-cards', 3);

  // Recent
  renderRecent();
}

function renderPhaseCards(containerId, phase) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const tracks = TRACKS.filter(t => t.phase === phase);
  el.innerHTML = tracks.map(t => {
    const logged = hoursFor(t.id);
    const pct = t.targetHours ? Math.min(100, Math.round((logged / t.targetHours) * 100)) : 0;
    const { done, total } = allTasksDone(t);
    const isActive = phase === 1;
    return `
      <div class="progress-card ${isActive ? 'clickable' : 'muted-card'}"
           ${isActive ? `onclick="navigateTo('tasks','${t.id}')"` : ''}>
        <div class="card-top">
          <div class="card-icon" style="background:${t.color}22;color:${t.color}">${t.icon}</div>
          <div class="card-info">
            <div class="card-label">${t.label}</div>
            <div class="card-desc">${t.desc}</div>
          </div>
          ${isActive ? `<div class="card-hours">${fmt(logged)}</div>` : ''}
        </div>
        ${isActive && t.targetHours ? `
          <div class="prog-bar-bg">
            <div class="prog-bar-fill" style="width:${pct}%;background:${t.color}"></div>
          </div>
          <div class="prog-labels">
            <span>${pct}% of ${fmt(t.targetHours)}</span>
            <span>${done}/${total} tasks</span>
          </div>
        ` : `<div class="card-future-note">${t.desc}</div>`}
      </div>
    `;
  }).join('');
}

function renderRecent() {
  const el = document.getElementById('recent-list');
  if (!el) return;
  const recent = [...state.sessions].sort((a,b) => b.id - a.id).slice(0, 6);
  if (!recent.length) {
    el.innerHTML = '<div class="empty-msg">No sessions yet. Start logging!</div>';
    return;
  }
  el.innerHTML = recent.map(s => {
    const t = TRACKS.find(tr => tr.id === s.trackId);
    return `
      <div class="session-row">
        <span class="session-icon" style="color:${t?.color}">${t?.icon || '📚'}</span>
        <div class="session-body">
          <span class="session-name">${t?.label || s.trackId}</span>
          ${s.note ? `<span class="session-note">${s.note}</span>` : ''}
        </div>
        <div class="session-right">
          <span class="session-h">${fmt(s.hours)}</span>
          <span class="session-date">${s.date}</span>
        </div>
      </div>
    `;
  }).join('');
}

// ============================================================
// RENDER — TASKS VIEW
// ============================================================
function renderTasksView() {
  const phase1Tracks = TRACKS.filter(t => t.phase === 1);

  // Track tabs
  const tabsEl = document.getElementById('track-tabs');
  tabsEl.innerHTML = phase1Tracks.map(t => `
    <button class="track-tab ${currentTrack === t.id ? 'active' : ''}"
            onclick="switchTrack('${t.id}')"
            style="${currentTrack === t.id ? `border-color:${t.color};color:${t.color}` : ''}">
      ${t.icon} ${t.label}
    </button>
  `).join('');

  // Default to first if none selected
  if (!currentTrack) currentTrack = phase1Tracks[0].id;

  renderTrackTasks(currentTrack);
}

function switchTrack(trackId) {
  currentTrack = trackId;
  renderTasksView();
}

function renderTrackTasks(trackId) {
  const track = TRACKS.find(t => t.id === trackId);
  const el = document.getElementById('tasks-content');
  const title = document.getElementById('tasks-track-title');
  if (!track || !el) return;

  title.textContent = `${track.icon} ${track.label}`;

  const { done, total, pct } = allTasksDone(track);
  const logged = hoursFor(track.id);

  let html = `
    <div class="track-header" style="border-color:${track.color}40">
      <div class="track-header-info">
        <div class="track-header-title" style="color:${track.color}">${track.icon} ${track.label}</div>
        <div class="track-header-desc">${track.desc}</div>
      </div>
      <div class="track-header-stats">
        <div class="th-stat"><span class="th-val">${fmt(logged)}</span><span class="th-lbl">Logged</span></div>
        <div class="th-stat"><span class="th-val">${pct}%</span><span class="th-lbl">Tasks</span></div>
      </div>
      <div class="prog-bar-bg" style="margin-top:10px">
        <div class="prog-bar-fill" style="width:${pct}%;background:${track.color}"></div>
      </div>
      <button class="log-btn" style="border-color:${track.color};color:${track.color}"
              onclick="openLog('${track.id}')">+ Log Session</button>
    </div>
  `;

  if (track.weeks.length === 0) {
    html += `<div class="future-placeholder">
      <div class="future-icon">${track.icon}</div>
      <div class="future-title">Starts ${track.startDate}</div>
      <div class="future-msg">Detailed tasks will be added when this phase begins.</div>
    </div>`;
  } else {
    track.weeks.forEach((week, wi) => {
      const weekDone = week.tasks.filter((_, ti) => state.tasksDone[`${track.id}-${wi}-${ti}`]).length;
      html += `
        <div class="week-block">
          <div class="week-header">
            <div>
              <div class="week-label">${week.label}</div>
              <div class="week-dates">${week.dates}</div>
            </div>
            <div class="week-count" style="color:${track.color}">${weekDone}/${week.tasks.length}</div>
          </div>
          <div class="task-list">
            ${week.tasks.map((task, ti) => {
              const key = `${track.id}-${wi}-${ti}`;
              const done = !!state.tasksDone[key];
              return `
                <label class="task-item ${done ? 'task-done' : ''}">
                  <input type="checkbox" ${done ? 'checked' : ''}
                         onchange="toggleTask('${key}', this.checked)" />
                  <span class="task-text">${task}</span>
                </label>
              `;
            }).join('')}
          </div>
        </div>
      `;
    });
  }

  el.innerHTML = html;
}

// ============================================================
// TASK TOGGLE
// ============================================================
async function toggleTask(key, checked) {
  if (checked) state.tasksDone[key] = true;
  else delete state.tasksDone[key];
  renderAll();
  await saveData();
}

// ============================================================
// LOG SESSION
// ============================================================
function openLog(trackId) {
  const track = TRACKS.find(t => t.id === trackId);
  document.getElementById('modal-log-title').textContent = `Log — ${track?.label || trackId}`;
  document.getElementById('log-track-id').value = trackId;
  document.getElementById('log-hours').value = '';
  document.getElementById('log-note').value = '';
  document.getElementById('modal-log').classList.add('open');
  document.getElementById('log-hours').focus();
}

function openLogFromNav() {
  // Log for current track if on tasks, else first phase1 track
  const trackId = currentTrack || TRACKS.find(t => t.phase === 1).id;
  openLog(trackId);
}

function closeModal(id) {
  document.getElementById(id).classList.remove('open');
}

async function submitSession() {
  const trackId = document.getElementById('log-track-id').value;
  const hours = parseFloat(document.getElementById('log-hours').value);
  const note = document.getElementById('log-note').value.trim();
  if (!hours || hours <= 0 || hours > 16) {
    alert('Enter valid hours (0.25 – 16)');
    return;
  }
  state.sessions.push({ id: Date.now(), trackId, date: todayStr(), hours, note });
  closeModal('modal-log');
  renderAll();
  if (currentView === 'tasks') renderTrackTasks(currentTrack);
  await saveData();
}

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  loadData();

  document.getElementById('modal-log').addEventListener('click', e => {
    if (e.target === document.getElementById('modal-log')) closeModal('modal-log');
  });

  document.getElementById('sync-btn')?.addEventListener('click', async () => {
    await loadData();
    showToast('☁️ Synced!');
  });
});

function showToast(msg) {
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.classList.add('show'), 10);
  setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 300); }, 2500);
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js').catch(() => {});
}
