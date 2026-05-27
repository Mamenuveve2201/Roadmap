// ============================================================
// ROADMAP APP — Updated May 2026
// Skills: Python, French, Hair Braiding, Game Dev, HTML/JS, SQL, C
// Timeline: June 1 – December 31, 2026
// ============================================================

const SUPABASE_URL = 'https://uvqjswdfcixwktgvnzbq.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV2cWpzd2RmY2l4d2t0Z3ZuemJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk3NjQ4MDAsImV4cCI6MjAyNTM0MDgwMH0.Qlf9NFTH2xGMoJbSR8hSGhKf2xyYK7NhU0_YBuJnKDE';
const ROW_UUID = '46ff1227-8bce-4138-9993-3b9f6f2508ef';
const COL = 'roadmap_data';

const { createClient } = supabase;
const db = createClient(SUPABASE_URL, SUPABASE_KEY);

// ============================================================
// SKILL DEFINITIONS
// ============================================================
const SKILLS = [
  {
    id: 'python',
    icon: '🐍',
    label: 'Python',
    desc: 'Proficient by August 8, 2026',
    phase: 1,
    startDate: '2026-06-01',
    endDate: '2026-08-08',
    targetHours: 120,
    weeklyHours: 12,
    color: '#3b82f6',
    milestones: [
      { label: 'Core syntax + data structures', week: 2 },
      { label: 'NumPy, Pandas, file handling', week: 4 },
      { label: '2 real projects built', week: 6 },
      { label: 'APIs + ML with scikit-learn', week: 8 },
      { label: 'Capstone project complete', week: 10 },
    ]
  },
  {
    id: 'french',
    icon: '🇫🇷',
    label: 'French',
    desc: 'A2 / touching B1 by Dec 31',
    phase: 1,
    startDate: '2026-06-01',
    endDate: '2026-12-31',
    targetHours: 108,
    weeklyHours: 3.5,
    color: '#8b5cf6',
    milestones: [
      { label: 'Language Transfer French complete', week: 8 },
      { label: 'Duolingo Unit 2 complete', week: 16 },
      { label: 'First iTalki session', week: 6 },
      { label: '4+ iTalki sessions done', week: 20 },
      { label: 'A2 assessment passed', week: 30 },
    ]
  },
  {
    id: 'hair_braiding',
    icon: '💇🏾',
    label: 'Hair Braiding',
    desc: '5 styles mastered by Dec 31',
    phase: 1,
    startDate: '2026-06-01',
    endDate: '2026-12-31',
    targetHours: 46,
    weeklyHours: 1.5,
    color: '#ec4899',
    styles: [
      { name: 'Knotless Braids', startMonth: 'June', status: 'active' },
      { name: 'Box Braids', startMonth: 'June', status: 'active' },
      { name: 'Cornrows', startMonth: 'September', status: 'upcoming' },
      { name: 'Stitch Braids', startMonth: 'October', status: 'upcoming' },
      { name: 'Senegalese Twists', startMonth: 'November', status: 'upcoming' },
    ],
    milestones: [
      { label: 'Knotless braids: clean result', week: 8 },
      { label: 'Box braids: clean result', week: 8 },
      { label: 'Cornrows: confident', week: 18 },
      { label: 'Stitch braids: confident', week: 22 },
      { label: 'Senegalese twists: confident', week: 28 },
    ]
  },
  {
    id: 'game_dev',
    icon: '🎮',
    label: 'Game Dev (Unity)',
    desc: 'Working city sim prototype by Dec 31',
    phase: 1,
    startDate: '2026-06-01',
    endDate: '2026-12-31',
    targetHours: 200,
    weeklyHours: 8,
    color: '#f59e0b',
    milestones: [
      { label: 'Unity Junior Programmer pathway done', week: 8 },
      { label: 'Core loop: 1 building + economy working', week: 14 },
      { label: '3 production chains (Farm→Market→Restaurant)', week: 20 },
      { label: 'City grid visible on screen', week: 24 },
      { label: 'Daily login + rewarded ad integrated', week: 30 },
    ]
  },
  {
    id: 'html_js',
    icon: '💻',
    label: 'HTML / JavaScript',
    desc: 'Confident by September 2026',
    phase: 1,
    startDate: '2026-06-01',
    endDate: '2026-09-30',
    targetHours: 52,
    weeklyHours: 3,
    color: '#10b981',
    milestones: [
      { label: 'DOM manipulation solid', week: 4 },
      { label: 'Fetch + async/await comfortable', week: 8 },
      { label: 'PWA build from scratch', week: 14 },
      { label: 'Canvas API basics', week: 16 },
    ]
  },
  {
    id: 'sql',
    icon: '🗄️',
    label: 'SQL',
    desc: 'Working proficiency by September 2026',
    phase: 2,
    startDate: '2026-08-09',
    endDate: '2026-09-30',
    targetHours: 24,
    weeklyHours: 3,
    color: '#06b6d4',
    milestones: [
      { label: 'SELECT, WHERE, JOIN mastered', week: 2 },
      { label: 'Subqueries + aggregations', week: 4 },
      { label: 'Game economy database project done', week: 7 },
    ]
  },
  {
    id: 'c_lang',
    icon: '⚙️',
    label: 'C Language',
    desc: 'Functional by December 2026',
    phase: 2,
    startDate: '2026-09-01',
    endDate: '2026-12-31',
    targetHours: 56,
    weeklyHours: 4,
    color: '#f97316',
    milestones: [
      { label: 'Pointers + memory management', week: 4 },
      { label: 'Data structures in C', week: 8 },
      { label: 'One real project built', week: 14 },
    ]
  },
  {
    id: 'driving',
    icon: '🚗',
    label: 'Driving',
    desc: 'Licensed by October 2026',
    phase: 1,
    startDate: '2026-06-01',
    endDate: '2026-10-31',
    targetHours: 40,
    weeklyHours: 2,
    color: '#84cc16',
    milestones: [
      { label: 'Permit test passed', week: 2 },
      { label: 'Highway driving comfortable', week: 10 },
      { label: 'Road test passed ✅', week: 20 },
    ]
  }
];

// ============================================================
// STATE
// ============================================================
let state = {
  sessions: [],       // { id, skillId, date, hours, note }
  loaded: false,
};

// ============================================================
// SUPABASE SYNC
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
    if (saved && saved.sessions) {
      state.sessions = saved.sessions;
    }
  } catch (e) {
    console.warn('Load error:', e.message);
  }
  state.loaded = true;
  render();
}

async function saveData() {
  try {
    await db
      .from('user_data')
      .update({ [COL]: { sessions: state.sessions } })
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

function formatHours(h) {
  return h === 0 ? '0h' : h < 1 ? `${Math.round(h*60)}m` : `${h.toFixed(1)}h`;
}

function hoursForSkill(skillId) {
  return state.sessions
    .filter(s => s.skillId === skillId)
    .reduce((sum, s) => sum + s.hours, 0);
}

function progressPct(skill) {
  const logged = hoursForSkill(skill.id);
  return Math.min(100, Math.round((logged / skill.targetHours) * 100));
}

function weeksSinceStart(skill) {
  const start = new Date(skill.startDate);
  const now = new Date();
  return Math.max(0, Math.floor((now - start) / (7 * 24 * 3600 * 1000)));
}

function isActive(skill) {
  const now = new Date();
  const start = new Date(skill.startDate);
  const end = new Date(skill.endDate);
  return now >= start && now <= end;
}

function totalHoursToday() {
  const today = todayStr();
  return state.sessions.filter(s => s.date === today).reduce((sum, s) => sum + s.hours, 0);
}

function streak() {
  if (state.sessions.length === 0) return 0;
  const dates = [...new Set(state.sessions.map(s => s.date))].sort().reverse();
  let count = 0;
  let cur = new Date();
  for (const d of dates) {
    const dd = new Date(d + 'T00:00:00');
    const diff = Math.round((cur - dd) / (24*3600*1000));
    if (diff <= 1) { count++; cur = dd; }
    else break;
  }
  return count;
}

function getGreeting() {
  const h = new Date().getHours();
  if (h < 12) return 'Good morning, Melissa 👋';
  if (h < 17) return 'Good afternoon, Melissa 👋';
  return 'Good evening, Melissa 👋';
}

// ============================================================
// MODALS
// ============================================================
function openLogModal(skillId) {
  const skill = SKILLS.find(s => s.id === skillId);
  document.getElementById('modal-overlay').classList.add('open');
  document.getElementById('modal-title').textContent = `Log session — ${skill.label}`;
  document.getElementById('modal-skill-id').value = skillId;
  document.getElementById('modal-hours').value = '';
  document.getElementById('modal-note').value = '';
  document.getElementById('modal-hours').focus();
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
}

async function submitLog() {
  const skillId = document.getElementById('modal-skill-id').value;
  const hours = parseFloat(document.getElementById('modal-hours').value);
  const note = document.getElementById('modal-note').value.trim();
  if (!hours || hours <= 0 || hours > 16) {
    alert('Please enter valid hours (0.1 – 16)');
    return;
  }
  const session = {
    id: Date.now(),
    skillId,
    date: todayStr(),
    hours,
    note
  };
  state.sessions.push(session);
  closeModal();
  render();
  await saveData();
}

// ============================================================
// RENDER
// ============================================================
function render() {
  renderHeader();
  renderStats();
  renderSkills();
  renderRecent();
}

function renderHeader() {
  const el = document.getElementById('greeting');
  if (el) el.textContent = getGreeting();
}

function renderStats() {
  const totalH = state.sessions.reduce((s, x) => s + x.hours, 0);
  const todayH = totalHoursToday();
  const s = streak();

  document.getElementById('stat-total').textContent = formatHours(totalH);
  document.getElementById('stat-today').textContent = formatHours(todayH);
  document.getElementById('stat-streak').textContent = `${s} day${s !== 1 ? 's' : ''}`;
  document.getElementById('stat-sessions').textContent = state.sessions.length;
}

function renderSkills() {
  const container = document.getElementById('skills-container');
  if (!container) return;

  const activeSkills = SKILLS.filter(sk => isActive(sk));
  const upcomingSkills = SKILLS.filter(sk => new Date(sk.startDate) > new Date());

  let html = '';

  // Active skills
  if (activeSkills.length > 0) {
    html += `<div class="section-label">ACTIVE NOW</div>`;
    html += activeSkills.map(sk => renderSkillCard(sk)).join('');
  }

  // Upcoming
  if (upcomingSkills.length > 0) {
    html += `<div class="section-label upcoming-label">STARTING SOON</div>`;
    html += upcomingSkills.map(sk => renderSkillCard(sk, true)).join('');
  }

  container.innerHTML = html;
}

function renderSkillCard(skill, upcoming = false) {
  const logged = hoursForSkill(skill.id);
  const pct = progressPct(skill);
  const weeks = weeksSinceStart(skill);

  // For hair braiding, show styles
  let extraContent = '';
  if (skill.id === 'hair_braiding' && skill.styles) {
    const stylesHtml = skill.styles.map(st => {
      const cls = st.status === 'active' ? 'style-active' : 'style-upcoming';
      return `<span class="style-badge ${cls}">${st.name}</span>`;
    }).join('');
    extraContent = `<div class="styles-row">${stylesHtml}</div>`;
  }

  // Next milestone
  let nextMilestone = '';
  if (skill.milestones) {
    const next = skill.milestones.find(m => m.week > weeks);
    if (next) {
      nextMilestone = `<div class="next-milestone">⟶ Week ${next.week}: ${next.label}</div>`;
    }
  }

  const opacityCls = upcoming ? 'skill-card upcoming-card' : 'skill-card';

  return `
    <div class="${opacityCls}" data-skill="${skill.id}">
      <div class="skill-header">
        <div class="skill-icon" style="background:${skill.color}20;color:${skill.color}">${skill.icon}</div>
        <div class="skill-info">
          <div class="skill-name">${skill.label}</div>
          <div class="skill-desc">${skill.desc}</div>
        </div>
        <div class="skill-hours">${formatHours(logged)}</div>
      </div>
      <div class="progress-bar-bg">
        <div class="progress-bar-fill" style="width:${pct}%;background:${skill.color}"></div>
      </div>
      <div class="progress-label">
        <span>${pct}% of ${formatHours(skill.targetHours)} goal</span>
        <span>${formatHours(skill.weeklyHours)}/wk target</span>
      </div>
      ${extraContent}
      ${nextMilestone}
      ${!upcoming ? `<button class="log-btn" onclick="openLogModal('${skill.id}')" style="border-color:${skill.color};color:${skill.color}">+ Log Session</button>` : ''}
    </div>
  `;
}

function renderRecent() {
  const container = document.getElementById('recent-container');
  if (!container) return;
  const recent = [...state.sessions].sort((a, b) => b.id - a.id).slice(0, 8);
  if (recent.length === 0) {
    container.innerHTML = `<div class="empty-state">No sessions yet. Hit + to start!</div>`;
    return;
  }
  container.innerHTML = recent.map(s => {
    const skill = SKILLS.find(sk => sk.id === s.skillId);
    return `
      <div class="session-row">
        <span class="session-icon" style="color:${skill?.color}">${skill?.icon || '📚'}</span>
        <div class="session-info">
          <span class="session-skill">${skill?.label || s.skillId}</span>
          ${s.note ? `<span class="session-note">${s.note}</span>` : ''}
        </div>
        <div class="session-meta">
          <span class="session-hours">${formatHours(s.hours)}</span>
          <span class="session-date">${s.date}</span>
        </div>
      </div>
    `;
  }).join('');
}

// ============================================================
// WEEKLY PLAN MODAL
// ============================================================
function openPlan() {
  document.getElementById('plan-overlay').classList.add('open');
}

function closePlan() {
  document.getElementById('plan-overlay').classList.remove('open');
}

// ============================================================
// INIT
// ============================================================
window.addEventListener('DOMContentLoaded', () => {
  loadData();

  // Close modals on overlay click
  document.getElementById('modal-overlay').addEventListener('click', (e) => {
    if (e.target === document.getElementById('modal-overlay')) closeModal();
  });
  document.getElementById('plan-overlay')?.addEventListener('click', (e) => {
    if (e.target === document.getElementById('plan-overlay')) closePlan();
  });
});

// Service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js').catch(() => {});
}
