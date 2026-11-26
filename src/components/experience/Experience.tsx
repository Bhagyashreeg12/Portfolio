import { useState } from 'react';
import type { ReactNode } from 'react';
import { FaBookOpen, FaChartLine, FaHandsHelping } from 'react-icons/fa';
import SectionTitle from '../sectionTitle/SectionTitle';
import ExperienceCard from './ExperienceCard';
import type { ExperienceStatus } from './ExperienceCard';
import './Experience.css';

interface ExperienceEntry {
  company: string;
  role: string;
  dates: string;
  status: ExperienceStatus;
  location: string;
  logo: ReactNode;
  description: string[];
}

const experienceEntries: ExperienceEntry[] = [
  {
    company: 'Post Graduate in Analytics (PGA)',
    role: 'Specialization in Data Science, ML & BI',
    dates: '2024 – Present',
    status: 'present',
    location: 'Pune, India',
    logo: <FaChartLine />,
    description: [
      'Built end-to-end analytics pipelines, predictive models, SQL workflows, Power BI dashboards, and time-series forecasts.',
      'Capstone 1: Chicago Crime Spatial Analysis — predictive hotspot modeling and interactive Power BI reporting.',
      'Capstone 2: EV Demand Forecasting — spatial-temporal modeling across 4 grid zones comparing SARIMA, Random Forest, XGBoost, and LSTM.',
    ],
  },
  {
    company: 'Educator & Community Mentor',
    role: 'Educational NGO Collaboration',
    dates: '2023 – 2024',
    status: 'past',
    location: 'India',
    logo: <FaHandsHelping />,
    description: [
      'Facilitated structured learning modules, breaking complex conceptual frameworks into clear, intuitive lessons.',
      'Developed stakeholder presentation fluency and empathetic communication — skills that directly elevate BI delivery.',
    ],
  },
  {
    company: 'Bachelor of Arts (Honors) in English',
    role: 'Foundational Academic Degree',
    dates: '2020 – 2023',
    status: 'past',
    location: 'India',
    logo: <FaBookOpen />,
    description: [
      'Mastered critical thinking, argument structure, and rhetorical analysis across complex texts.',
      'Provides an uncommon advantage in translating quantitative models and statistical variance into persuasive executive narratives.',
    ],
  },
];

/**
 * Education and experience timeline with expandable accordion cards.
 */
export default function Experience() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(0);

  const handleToggle = (idx: number) => {
    setExpandedIdx((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="experience" className="section-block">
      <SectionTitle subtitle="Click an entry to toggle details">Experience &amp; Education</SectionTitle>
      <div className="exp-timeline">
        {experienceEntries.map((entry, idx) => (
          <ExperienceCard
            key={entry.company}
            logo={entry.logo}
            company={entry.company}
            role={entry.role}
            dates={entry.dates}
            status={entry.status}
            location={entry.location}
            description={entry.description}
            isExpanded={expandedIdx === idx}
            onToggle={() => handleToggle(idx)}
          />
        ))}
      </div>
    </section>
  );
}
