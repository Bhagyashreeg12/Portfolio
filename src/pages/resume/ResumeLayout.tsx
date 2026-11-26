import { useState } from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FiCheck, FiCopy, FiMail, FiPrinter } from 'react-icons/fi';
import { HiArrowLeft } from 'react-icons/hi2';
import { LuDownload, LuMapPin } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import './ResumeLayout.css';

const EMAIL_ADDRESS = 'bhagyashreeghosh004@gmail.com';

export default function ResumeLayout() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL_ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="resume-page">
      {/* Top action bar (hidden during print) */}
      <div className="resume-top-bar no-print">
        <Link to="/" className="mx-btn-secondary">
          <HiArrowLeft aria-hidden="true" />
          <span>Back to Home</span>
        </Link>

        <div className="resume-action-buttons">
          <button type="button" className="mx-btn" onClick={handleCopyEmail}>
            {copied ? <FiCheck style={{ color: '#22c55e' }} /> : <FiCopy />}
            <span>{copied ? 'Copied Email!' : 'Copy Email'}</span>
          </button>

          <button type="button" className="mx-btn" onClick={handlePrint}>
            <FiPrinter />
            <span>Print / Save PDF</span>
          </button>

          <a
            href={`mailto:${EMAIL_ADDRESS}?subject=Interview%20/%20Opportunity%20-%20Bhagyashree%20Ghosh`}
            className="mx-btn hero-card-join-btn"
            style={{ textDecoration: 'none' }}
          >
            <LuDownload />
            <span>Hire Me</span>
          </a>
        </div>
      </div>

      <div className="resume-section-header no-print">
        <SectionTitle>Curriculum Vitae</SectionTitle>
      </div>

      {/* Printable Resume Sheet Container */}
      <div className="resume-sheet">
        {/* Header */}
        <header className="resume-header">
          <div className="resume-header-main">
            <h1 className="resume-candidate-name">Bhagyashree Ghosh</h1>
            <p className="resume-target-role">Data Analyst &amp; Machine Learning Practitioner</p>
          </div>

          <div className="resume-contact-meta">
            <span className="contact-item">
              <LuMapPin /> Pune, Maharashtra, India (Open to Remote &amp; Hybrid)
            </span>
            <a href={`mailto:${EMAIL_ADDRESS}`} className="contact-item link">
              <FiMail /> {EMAIL_ADDRESS}
            </a>
            <a
              href="https://www.linkedin.com/in/bhagyashreeg4/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item link"
            >
              <FaLinkedinIn /> linkedin.com/in/bhagyashreeg4
            </a>
            <a
              href="https://github.com/Bhagyashreeg12"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item link"
            >
              <FaGithub /> github.com/Bhagyashreeg12
            </a>
          </div>
        </header>

        {/* Executive Summary */}
        <section className="resume-section">
          <h2 className="resume-section-heading">Executive Summary</h2>
          <p className="resume-text">
            Results-driven <strong>Data Analyst &amp; ML Practitioner</strong> blending a foundational degree
            in English Honors (critical analysis, structured logic, and executive narrative delivery) with an
            intensive <strong>Post Graduate in Analytics (PGA)</strong>. Experienced in designing self-operating
            MIS pipelines, training and fine-tuning predictive machine learning models on high-imbalance datasets,
            engineering spatial-temporal forecasts, and deploying interactive Power BI dashboards that translate
            complex statistical variances into decisive business bottom-line decisions.
          </p>
        </section>

        {/* Technical Competencies */}
        <section className="resume-section">
          <h2 className="resume-section-heading">Core Technical Proficiencies</h2>
          <div className="resume-skills-block">
            <div className="skill-row">
              <span className="skill-cat">Programming &amp; Analytics:</span>
              <span className="skill-items">Python (Pandas, NumPy, Scikit-Learn, XGBoost, Openpyxl, Matplotlib, Seaborn)</span>
            </div>
            <div className="skill-row">
              <span className="skill-cat">Databases &amp; Querying:</span>
              <span className="skill-items">SQL (PostgreSQL, MySQL, SQLite, Complex Joins, CTEs, Window Functions, Schema Design)</span>
            </div>
            <div className="skill-row">
              <span className="skill-cat">Business Intelligence:</span>
              <span className="skill-items">Power BI (DAX Measures, Data Modeling, Star Schema, Heatmaps), Tableau</span>
            </div>
            <div className="skill-row">
              <span className="skill-cat">Spreadsheet Automation:</span>
              <span className="skill-items">Advanced MS Excel (Dynamic Formulas, SUMIFS, INDEX/MATCH, XLOOKUP, PivotTables)</span>
            </div>
            <div className="skill-row">
              <span className="skill-cat">Machine Learning &amp; AI:</span>
              <span className="skill-items">Supervised &amp; Unsupervised Learning (Random Forest, Gradient Boosting, SMOTE, PCA, K-Means, SARIMA, LSTM, Threshold Sweep)</span>
            </div>
          </div>
        </section>

        {/* Featured Projects & Enterprise Case Studies */}
        <section className="resume-section">
          <h2 className="resume-section-heading">Featured Enterprise Projects &amp; Case Studies</h2>

          <div className="resume-entry">
            <div className="entry-head">
              <h3 className="entry-title">BranchPulse: Branch MIS Automation System</h3>
              <span className="entry-dates">Python, SQLite, Advanced Excel, Openpyxl</span>
            </div>
            <ul className="entry-bullets">
              <li>
                Engineered an automated end-to-end reporting pack that reconciles weekly operational data across <strong>12 insurance branches</strong> in a single click.
              </li>
              <li>
                Implemented an automated <strong>Data Quality Gate</strong> validating 76 integrity constraints, eliminating manual copy-paste reconciliation errors by 100%.
              </li>
              <li>
                Constructed dynamic formula architectures in Excel and auto-generated executive HTML email digests for branch management.
              </li>
            </ul>
          </div>

          <div className="resume-entry">
            <div className="entry-head">
              <h3 className="entry-title">Credit Card Fraud Detection ML Pipeline</h3>
              <span className="entry-dates">Python, Scikit-Learn, Random Forest, SMOTE</span>
            </div>
            <ul className="entry-bullets">
              <li>
                Trained and optimized Random Forest and Gradient Boosting classifiers on a severe <strong>1.5% class-imbalanced</strong> transaction dataset.
              </li>
              <li>
                Conducted leak-free SMOTE oversampling within cross-validation folds and tuned decision thresholds to achieve <strong>85% recall and 89% precision (0.810 PR-AUC)</strong> with a false positive rate of only 0.16%.
              </li>
            </ul>
          </div>

          <div className="resume-entry">
            <div className="entry-head">
              <h3 className="entry-title">Customer Behavioral Segmentation &amp; RFM Clustering</h3>
              <span className="entry-dates">Python, K-Means, PCA, Hierarchical Clustering</span>
            </div>
            <ul className="entry-bullets">
              <li>
                Processed 3,000 multi-attribute consumer profiles; performed feature scaling and PCA dimensionality reduction to isolate high-variance behavioral drivers.
              </li>
              <li>
                Identified 4 distinct actionable retention personas verified by Elbow method and <strong>Silhouette scoring (0.62)</strong> to steer personalized re-engagement campaigns.
              </li>
            </ul>
          </div>

          <div className="resume-entry">
            <div className="entry-head">
              <h3 className="entry-title">Electric Vehicle (EV) Grid Charging Demand Forecasting</h3>
              <span className="entry-dates">Python, SARIMA, LSTM, XGBoost, Time Series</span>
            </div>
            <ul className="entry-bullets">
              <li>
                Developed a hybrid spatial-temporal forecasting model predicting kilowatt load across 4 metropolitan charging grid zones over 365 days.
              </li>
              <li>
                Engineered cyclical calendar features, 7-day rolling statistics, and temporal lag shifts; benchmarked classical SARIMA against deep recurrent LSTM architectures.
              </li>
            </ul>
          </div>

          <div className="resume-entry">
            <div className="entry-head">
              <h3 className="entry-title">Chicago Municipal Crime Analytics &amp; Power BI Dashboard</h3>
              <span className="entry-dates">Power BI, DAX, Tableau, Spatial Heatmaps</span>
            </div>
            <ul className="entry-bullets">
              <li>
                Built an interactive multi-page Power BI dashboard synthesizing historical municipal incident registries to pinpoint seasonal criminal hotspots.
              </li>
              <li>
                Modeled star-schema data structures with custom DAX calculated measures to enable dynamic cross-filtering by district, crime category, and temporal shifts.
              </li>
            </ul>
          </div>
        </section>

        {/* Education */}
        <section className="resume-section">
          <h2 className="resume-section-heading">Education</h2>

          <div className="resume-entry">
            <div className="entry-head">
              <h3 className="entry-title">Post Graduate in Analytics (PGA)</h3>
              <span className="entry-dates">2024 – Present | Pune, India</span>
            </div>
            <div className="entry-sub">Specialization in Data Science, Machine Learning &amp; Business Intelligence</div>
            <p className="resume-text-small">
              Rigorous curriculum covering statistical modeling, SQL relational architectures, predictive analytics, deep learning forecasting, and dual capstone defenses.
            </p>
          </div>

          <div className="resume-entry">
            <div className="entry-head">
              <h3 className="entry-title">Bachelor of Arts (Honors) in English</h3>
              <span className="entry-dates">2020 – 2023 | India</span>
            </div>
            <div className="entry-sub">Foundational Academic Degree</div>
            <p className="resume-text-small">
              Cultivated advanced textual analysis, logical argumentation, and stakeholder articulation—providing an uncommon edge in executive data communication.
            </p>
          </div>
        </section>

        {/* Experience & Mentorship */}
        <section className="resume-section">
          <h2 className="resume-section-heading">Professional Experience &amp; Mentorship</h2>

          <div className="resume-entry">
            <div className="entry-head">
              <h3 className="entry-title">Educator &amp; Community Mentor</h3>
              <span className="entry-dates">2023 – 2024 | Educational NGO Collaboration</span>
            </div>
            <ul className="entry-bullets">
              <li>
                Designed and facilitated interactive curriculum modules, translating complex conceptual frameworks into accessible, intuitive takeaways.
              </li>
              <li>
                Mentored diverse student cohorts, strengthening empathy, audience-tailored delivery, and active listening skills that directly enhance technical stakeholder management.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
