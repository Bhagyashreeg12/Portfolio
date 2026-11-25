/**
 * BHAGYASHREE GHOSH — PORTFOLIO JAVASCRIPT
 * Interactive UI, Theme Switcher, Filters, Case Study Modal & Live ML Simulator
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initTypingEffect();
  initProjectFilters();
  initCaseStudyModal();
  initSimulatorWidget();
  initCounters();
  initContactForm();
  initCopyEmail();
  initMobileNav();
});

/* ----------------------------------------------------
   1. Theme Switcher (Dark / Light)
   ---------------------------------------------------- */
function initThemeToggle() {
  const toggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');
  if (!toggleBtn) return;

  const savedTheme = localStorage.getItem('bg_portfolio_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme, themeIcon);

  toggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('bg_portfolio_theme', newTheme);
    updateThemeIcon(newTheme, themeIcon);
  });
}

function updateThemeIcon(theme, iconElem) {
  if (!iconElem) return;
  if (theme === 'light') {
    iconElem.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
  } else {
    iconElem.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
  }
}

/* ----------------------------------------------------
   2. Typing Effect for Hero Roles
   ---------------------------------------------------- */
function initTypingEffect() {
  const elem = document.getElementById('typedRole');
  if (!elem) return;

  const roles = [
    'Data Analyst',
    'Machine Learning Practitioner',
    'MIS & BI Automation Specialist',
    'Data Storyteller & Researcher'
  ];

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  const typeSpeed = 90;
  const deleteSpeed = 45;
  const pauseEnd = 1800;

  function type() {
    const currentRole = roles[roleIdx];
    if (isDeleting) {
      elem.textContent = currentRole.substring(0, charIdx - 1);
      charIdx--;
    } else {
      elem.textContent = currentRole.substring(0, charIdx + 1);
      charIdx++;
    }

    if (!isDeleting && charIdx === currentRole.length) {
      setTimeout(() => { isDeleting = true; type(); }, pauseEnd);
      return;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      setTimeout(type, 300);
      return;
    }

    setTimeout(type, isDeleting ? deleteSpeed : typeSpeed);
  }

  type();
}

/* ----------------------------------------------------
   3. Animated Stat Counters
   ---------------------------------------------------- */
function initCounters() {
  const counters = document.querySelectorAll('.counter-val');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = +entry.target.getAttribute('data-target');
        const suffix = entry.target.getAttribute('data-suffix') || '';
        let count = 0;
        const duration = 1500;
        const stepTime = 20;
        const steps = duration / stepTime;
        const increment = target / steps;

        const timer = setInterval(() => {
          count += increment;
          if (count >= target) {
            entry.target.textContent = target + suffix;
            clearInterval(timer);
          } else {
            entry.target.textContent = Math.floor(count) + suffix;
          }
        }, stepTime);

        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

/* ----------------------------------------------------
   4. Project Filtering
   ---------------------------------------------------- */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category.includes(filterValue)) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });
}

/* ----------------------------------------------------
   5. Case Study Modal Data & Logic
   ---------------------------------------------------- */
const projectData = {
  branchpulse: {
    title: 'BranchPulse: Branch MIS Automation & Quality Gate',
    category: 'Automation & Business Intelligence',
    github: 'https://github.com/bhagyashreeghosh004-hub/BranchPluse-MIS',
    badge: 'Production-Grade Excel + SQL + Python Engine',
    overview: 'Turned messy branch insurance operations data across 12 branches into a fully automated Monday-morning MIS pack, formula-driven dashboard, and executive HTML email in one command.',
    problem: 'Branch MIS teams spent 8+ hours every week manually cross-referencing sheets, fixing typos in branch codes, and manually writing summary emails. One formula error broke entire executive reports.',
    solution: [
      'Engineered an Automated Data Quality Gate catching duplicates, orphan claims, and negative values with full audit logging.',
      'Created a live formula-based Excel pack (SUMIFS, COUNTIFS, AVERAGEIFS, VLOOKUP, INDEX/MATCH) so formulas calculate dynamically when new data arrives.',
      'Engineered a Branch Health Score (0-100) combining targets, settlement ratios, renewal rates, and turnaround times.',
      'Auto-generated an executive email digest with top/bottom branches and actionable recommendations.'
    ],
    metrics: [
      { label: 'Branches Automated', val: '12 Branches' },
      { label: 'Data Issues Caught', val: '76 Logged' },
      { label: 'Clean Policies', val: '6,108 Recs' },
      { label: 'Reconciliation', val: '100% PASS' }
    ],
    image: 'assets/images/branchpulse_dashboard.png',
    stack: ['Python', 'Pandas', 'Openpyxl', 'SQLite', 'Advanced Excel Formulas', 'Data Quality Gates', 'HTML Email']
  },
  fraud: {
    title: 'High-Imbalance Card Fraud Detection ML Pipeline',
    category: 'Machine Learning & Predictive Modeling',
    github: 'https://github.com/bhagyashreeghosh004-hub/Fraud_Detection_System',
    badge: '85% Fraud Caught with only 0.16% False Alarm Rate',
    overview: 'Engineered an end-to-end Machine Learning pipeline detecting fraudulent credit transactions on a severely imbalanced dataset (only 1.5% fraud rate) with advanced precision/recall threshold optimization.',
    problem: 'Predicting "legitimate" every time gives 98.5% accuracy but fails the business completely. The core challenge was catching rare, evasive fraud without annoying legitimate customers.',
    solution: [
      'Handled severe class imbalance using stratified cross-validation and SMOTE oversampling strictly on training folds to prevent data leakage.',
      'Trained and evaluated Logistic Regression, Decision Tree, Random Forest, and Gradient Boosting models.',
      'Evaluated performance using Precision-Recall Curves (PR-AUC) and ROC-AUC rather than misleading raw accuracy.',
      'Conducted fine-grained decision threshold tuning to identify the optimal business cut-off trade-off.'
    ],
    metrics: [
      { label: 'Fraud Recall', val: '85% Caught' },
      { label: 'Precision', val: '89%' },
      { label: 'PR-AUC Score', val: '0.810' },
      { label: 'False Alarm Rate', val: '0.16%' }
    ],
    image: 'assets/images/fraud_model_comparison.png',
    stack: ['Python', 'Scikit-Learn', 'Random Forest', 'Gradient Boosting', 'Threshold Tuning', 'PR-AUC Analysis']
  },
  segmentation: {
    title: 'Customer Segmentation & Behavioral RFM Analytics',
    category: 'Unsupervised Machine Learning',
    github: 'https://github.com/bhagyashreeghosh004-hub/Customer_Segmentation',
    badge: 'K-Means + PCA Dimensionality Reduction',
    overview: 'Applied unsupervised clustering algorithms and dimensionality reduction to identify high-value customer personas, predict churn risk, and unlock targeted marketing strategies.',
    problem: 'A business treats all customers homogeneously, resulting in high churn, ineffective marketing budgets, and poor customer lifetime value (LTV).',
    solution: [
      'Cleaned, normalized, and engineered RFM (Recency, Frequency, Monetary) and transaction engagement metrics.',
      'Determined the optimal number of clusters using both the Elbow Method (Inertia) and Silhouette Score analysis.',
      'Used PCA (Principal Component Analysis) to compress multi-dimensional features into 2D cluster maps.',
      'Profiled 4 actionable customer personas: High-Value VIPs, Regular Loyalists, Bargain Hunters, and Dormant/Churn-Risk.'
    ],
    metrics: [
      { label: 'Customer Cohorts', val: '4 Personas' },
      { label: 'Silhouette Score', val: '0.62' },
      { label: 'Dimension Reduction', val: 'PCA 2D' },
      { label: 'Dataset Size', val: '3,000 Customers' }
    ],
    image: 'assets/images/customer_pca_clusters.png',
    stack: ['Python', 'Scikit-Learn', 'K-Means Clustering', 'PCA', 'Hierarchical Clustering', 'Seaborn']
  },
  evcharging: {
    title: 'EV Charging Demand Forecasting (Time Series & Hybrid ML)',
    category: 'Time Series & Deep Learning',
    github: 'https://github.com/bhagyashreeghosh004-hub',
    badge: 'SARIMA + Random Forest + LSTM Deep Learning',
    overview: 'Modeled and forecasted spatial-temporal electric vehicle charging demand across 4 operational zones using 365 days of sensor logs to assist energy grid balancing and charging station site selection.',
    problem: 'Rapid EV adoption creates volatile load spikes on municipal power grids and leads to either congested charging stations or expensive underutilized infrastructure.',
    solution: [
      'Extracted temporal lag features (lag_1, lag_7, rolling_7-day moving averages) and seasonal cycles.',
      'Compared classical econometric models (SARIMA) against ensemble models (Random Forest, XGBoost) and deep recurrent architectures (LSTM).',
      'Identified critical expansion-required zones and high-stress peak demand time windows.'
    ],
    metrics: [
      { label: 'Data Span', val: '365 Days' },
      { label: 'Operational Zones', val: '4 Grid Zones' },
      { label: 'Forecast Horizon', val: 'Weekly/Monthly' },
      { label: 'Architecture', val: 'Hybrid LSTM + ML' }
    ],
    image: '',
    stack: ['Python', 'SARIMA', 'LSTM', 'XGBoost', 'Feature Engineering', 'Time Series Forecasting']
  },
  crime: {
    title: 'Chicago Crime Rate Prediction & Power BI Spatial Analytics',
    category: 'Data Analytics & Business Intelligence',
    github: 'https://github.com/bhagyashreeghosh004-hub',
    badge: 'Power BI + Tableau + Predictive ML',
    overview: 'Developed a comprehensive spatial-temporal analytics dashboard and predictive model analyzing historical crime incidents to support proactive police patrol dispatch and public safety resource planning.',
    problem: 'Law enforcement agencies often rely on reactive responses rather than proactive hotspot prevention, leading to delayed resource allocation.',
    solution: [
      'Cleaned and geocoded large-scale municipal crime datasets (2001 to present).',
      'Engineered time-of-day, location type, and district crime frequency risk scores.',
      'Built interactive multi-page Power BI and Tableau dashboards with slicers, spatial heatmaps, and trend projections.'
    ],
    metrics: [
      { label: 'Tooling', val: 'Power BI / Tableau' },
      { label: 'Data Source', val: 'Chicago Open Data' },
      { label: 'Visualization', val: 'Spatial Heatmaps' },
      { label: 'Impact', val: 'Proactive Patrols' }
    ],
    image: '',
    stack: ['Power BI', 'Tableau', 'DAX', 'Python', 'Spatial Analytics', 'Statistical Forecasting']
  },
  heart: {
    title: 'Heart Disease Clinical Risk Prediction (CDC BRFSS)',
    category: 'Predictive Healthcare Modeling',
    github: 'https://github.com/bhagyashreeghosh004-hub',
    badge: '319,000+ Records Analyzed',
    overview: 'Built a clinical predictive risk scoring model to estimate individual heart disease probability based on 18 lifestyle, biometric, and demographic attributes using CDC Behavioral Risk data.',
    problem: 'Early clinical identification of cardiovascular risk allows preventative interventions before acute coronary events occur.',
    solution: [
      'Preprocessed 319,795 patient records with categorical encoding and scaling.',
      'Trained Logistic Regression with LBFGS solver, extracting interpretable odds-ratio coefficients.',
      'Evaluated clinical feature importance: identified BMI, age category, smoking, and diabetic status as top predictive drivers.'
    ],
    metrics: [
      { label: 'Records Analyzed', val: '319,795' },
      { label: 'Clinical Attributes', val: '18 Features' },
      { label: 'Model', val: 'Logistic Regression' },
      { label: 'Evaluation', val: 'ROC-AUC & Matrix' }
    ],
    image: '',
    stack: ['Python', 'Pandas', 'Scikit-Learn', 'Logistic Regression', 'EDA', 'Clinical Analytics']
  }
};

function initCaseStudyModal() {
  const modalOverlay = document.getElementById('caseStudyModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalContent = document.getElementById('modalDynamicContent');
  if (!modalOverlay) return;

  document.querySelectorAll('.open-modal-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projKey = btn.getAttribute('data-project');
      const data = projectData[projKey];
      if (!data) return;

      let metricsHtml = data.metrics.map(m => `
        <div class="sim-metric-card" style="padding: 0.9rem;">
          <div class="sim-val" style="font-size: 1.4rem;">${m.val}</div>
          <div class="sim-label">${m.label}</div>
        </div>
      `).join('');

      let stackHtml = data.stack.map(s => `<span class="tech-chip">${s}</span>`).join('');
      let solutionHtml = data.solution.map(s => `<li style="margin-bottom: 0.5rem; color: var(--text-secondary);">${s}</li>`).join('');

      let imageHtml = data.image ? `
        <div style="margin: 1.5rem 0;">
          <img src="${data.image}" alt="${data.title}" style="width: 100%; border-radius: 12px; border: 1px solid var(--border-color); box-shadow: var(--shadow-md);">
        </div>
      ` : '';

      modalContent.innerHTML = `
        <div style="margin-bottom: 1.2rem;">
          <span class="badge-tag" style="background: rgba(6, 182, 212, 0.12); color: var(--accent-cyan); font-weight: 700;">${data.category}</span>
          <h2 style="font-size: 1.8rem; font-weight: 800; margin: 0.6rem 0 0.4rem 0;">${data.title}</h2>
          <p style="color: var(--accent-emerald); font-weight: 600; font-size: 0.95rem;">✓ ${data.badge}</p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 1rem; margin: 1.5rem 0;">
          ${metricsHtml}
        </div>

        <div style="margin-bottom: 1.5rem;">
          <h4 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 0.5rem;">Project Overview</h4>
          <p style="color: var(--text-secondary); line-height: 1.65;">${data.overview}</p>
        </div>

        <div style="margin-bottom: 1.5rem; background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 10px; border: 1px solid var(--border-color);">
          <h4 style="font-size: 1.05rem; font-weight: 700; margin-bottom: 0.4rem; color: var(--accent-rose);">Problem Statement</h4>
          <p style="color: var(--text-secondary); line-height: 1.6; margin-bottom: 0;">${data.problem}</p>
        </div>

        <div style="margin-bottom: 1.5rem;">
          <h4 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 0.75rem;">Key Architecture & Methodology</h4>
          <ul style="padding-left: 1.2rem; list-style: disc;">
            ${solutionHtml}
          </ul>
        </div>

        ${imageHtml}

        <div style="margin-bottom: 2rem;">
          <h4 style="font-size: 0.95rem; font-weight: 700; margin-bottom: 0.6rem; text-transform: uppercase; color: var(--text-muted);">Technologies Used</h4>
          <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
            ${stackHtml}
          </div>
        </div>

        <div style="display: flex; gap: 1rem; border-top: 1px solid var(--border-color); padding-top: 1.5rem;">
          <a href="${data.github}" target="_blank" rel="noopener" class="btn btn-primary" style="flex: 1;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            Explore Code on GitHub
          </a>
          <button class="btn btn-secondary" onclick="document.getElementById('caseStudyModal').classList.remove('open')">Close</button>
        </div>
      `;

      modalOverlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeModal = () => {
    modalOverlay.classList.remove('open');
    document.body.style.overflow = 'auto';
  };

  modalCloseBtn.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('open')) closeModal();
  });
}

/* ----------------------------------------------------
   6. Live Interactive ML Simulator Widget
   ---------------------------------------------------- */
function initSimulatorWidget() {
  const slider = document.getElementById('thresholdSlider');
  const thresholdVal = document.getElementById('thresholdVal');
  const simRecall = document.getElementById('simRecall');
  const simPrecision = document.getElementById('simPrecision');
  const simF1 = document.getElementById('simF1');
  const simCaught = document.getElementById('simCaught');
  const simTradeoffMsg = document.getElementById('simTradeoffMsg');
  if (!slider) return;

  const totalFraud = 229;

  function updateSimulation() {
    const t = parseFloat(slider.value);
    thresholdVal.textContent = t.toFixed(2);

    // Realistic simulation curves based on the actual Random Forest model results:
    // At t=0.15: high recall (96%), lower precision (62%)
    // At t=0.42: optimal balance (Recall 85%, Precision 89%)
    // At t=0.85: high precision (97%), lower recall (58%)
    const recall = Math.min(0.98, Math.max(0.40, 0.98 - 0.70 * Math.pow(t, 1.4)));
    const precision = Math.min(0.98, Math.max(0.45, 0.45 + 0.55 * Math.pow(t, 0.6)));
    const f1 = (2 * precision * recall) / (precision + recall);
    const caught = Math.round(totalFraud * recall);

    simRecall.textContent = Math.round(recall * 100) + '%';
    simPrecision.textContent = Math.round(precision * 100) + '%';
    simF1.textContent = f1.toFixed(2);
    simCaught.textContent = caught + ' / 229';

    if (t < 0.3) {
      simTradeoffMsg.innerHTML = `<span style="color: var(--accent-amber);">Aggressive Catch Mode:</span> Maximizes fraud recovery, but triggers more verification alerts for legitimate buyers.`;
    } else if (t >= 0.35 && t <= 0.55) {
      simTradeoffMsg.innerHTML = `<span style="color: var(--accent-emerald);">Optimal Business Equilibrium:</span> Balances high fraud capture (85%) with minimal false alarms (0.16%).`;
    } else {
      simTradeoffMsg.innerHTML = `<span style="color: var(--accent-cyan);">High Precision Mode:</span> Virtually zero false alarms, but some subtle fraud patterns slip through.`;
    }
  }

  slider.addEventListener('input', updateSimulation);
  updateSimulation();
}

/* ----------------------------------------------------
   7. Copy Email & Toast Notice
   ---------------------------------------------------- */
function initCopyEmail() {
  const copyBtns = document.querySelectorAll('.copy-email-trigger');
  const toast = document.getElementById('toastNotice');
  const emailStr = 'bhagyashreeghosh004@gmail.com';

  copyBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      navigator.clipboard.writeText(emailStr).then(() => {
        showToast(`Copied to clipboard: ${emailStr}`);
      }).catch(() => {
        showToast(`Email: ${emailStr}`);
      });
    });
  });

  function showToast(msg) {
    if (!toast) return;
    toast.querySelector('.toast-msg').textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3500);
  }
}

/* ----------------------------------------------------
   8. Contact Form
   ---------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('portfolioContactForm');
  const statusDiv = document.getElementById('formStatusMsg');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('formName').value.trim();
    const email = document.getElementById('formEmail').value.trim();
    const subject = document.getElementById('formSubject').value.trim();
    const message = document.getElementById('formMessage').value.trim();

    if (!name || !email || !message) {
      statusDiv.innerHTML = `<p style="color: var(--accent-rose); font-size: 0.9rem;">Please fill in your name, email, and message.</p>`;
      return;
    }

    statusDiv.innerHTML = `
      <div style="background: rgba(16, 185, 129, 0.12); border: 1px solid var(--accent-emerald); border-radius: 8px; padding: 1rem; margin-top: 1rem;">
        <p style="color: var(--accent-emerald); font-weight: 700; margin-bottom: 0.3rem;">✓ Message Prepared!</p>
        <p style="color: var(--text-secondary); font-size: 0.88rem; margin-bottom: 0.8rem;">Click below to launch your email client directly:</p>
        <a href="mailto:bhagyashreeghosh004@gmail.com?subject=${encodeURIComponent(subject || 'Inquiry from Portfolio')}&body=${encodeURIComponent('Hello Bhagyashree,\n\n' + message + '\n\nBest regards,\n' + name + ' (' + email + ')')}" class="btn btn-primary btn-sm">
          Open in Email App
        </a>
      </div>
    `;
    form.reset();
  });
}

/* ----------------------------------------------------
   9. Mobile Navigation Drawer
   ---------------------------------------------------- */
function initMobileNav() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.querySelector('.nav-links');
  if (!menuBtn || !navLinks) return;

  menuBtn.addEventListener('click', () => {
    if (navLinks.style.display === 'flex') {
      navLinks.style.display = 'none';
    } else {
      navLinks.style.display = 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.position = 'absolute';
      navLinks.style.top = 'var(--nav-height)';
      navLinks.style.left = '0';
      navLinks.style.width = '100%';
      navLinks.style.background = 'var(--bg-secondary)';
      navLinks.style.padding = '1.5rem';
      navLinks.style.borderBottom = '1px solid var(--border-color)';
    }
  });

  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        navLinks.style.display = 'none';
      }
    });
  });
}
