import type { IconType } from 'react-icons';
import { BsBarChartFill } from 'react-icons/bs';
import { FaGitAlt, FaGithub, FaProjectDiagram, FaTree } from 'react-icons/fa';
import { IoLogoTableau } from 'react-icons/io5';
import {
  LuBrainCircuit,
  LuDatabase,
  LuFileSpreadsheet,
  LuFilter,
  LuLayers,
  LuTrendingUp,
} from 'react-icons/lu';
import { RiFileExcel2Fill } from 'react-icons/ri';
import {
  SiJupyter,
  SiKeras,
  SiMysql,
  SiNumpy,
  SiPandas,
  SiPostgresql,
  SiPython,
  SiScikitlearn,
  SiSqlite,
  SiTensorflow,
} from 'react-icons/si';
import {
  TbBinaryTree,
  TbChartAreaLineFilled,
  TbChartBubbleFilled,
  TbChartDots3,
  TbChartHistogram,
  TbMathFunction,
} from 'react-icons/tb';
import { VscVscode } from 'react-icons/vsc';
import SectionTitle from '../sectionTitle/SectionTitle';
import './SkillSection.css';

interface SkillItem {
  name: string;
  icon: IconType;
  color: string;
}

const technologies: SkillItem[] = [
  { name: 'Python', icon: SiPython, color: '#3776ab' },
  { name: 'SQL', icon: LuDatabase, color: '#f59e0b' },
  { name: 'Power BI', icon: BsBarChartFill, color: '#f2c811' },
  { name: 'Pandas', icon: SiPandas, color: '#8b5cf6' },
  { name: 'NumPy', icon: SiNumpy, color: '#4dabcf' },
  { name: 'Scikit-Learn', icon: SiScikitlearn, color: '#f7931e' },
  { name: 'XGBoost', icon: TbBinaryTree, color: '#22c55e' },
  { name: 'Matplotlib', icon: TbChartHistogram, color: '#3b82f6' },
  { name: 'Seaborn', icon: TbChartDots3, color: '#60a5fa' },
  { name: 'Tableau', icon: IoLogoTableau, color: '#e97627' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4f8cc9' },
  { name: 'MySQL', icon: SiMysql, color: '#4479a1' },
  { name: 'SQLite', icon: SiSqlite, color: '#38bdf8' },
  { name: 'SARIMA', icon: TbChartAreaLineFilled, color: '#a78bfa' },
  { name: 'LSTM', icon: LuBrainCircuit, color: '#06b6d4' },
];

const tools: SkillItem[] = [
  { name: 'Jupyter', icon: SiJupyter, color: '#f37626' },
  { name: 'VS Code', icon: VscVscode, color: '#007acc' },
  { name: 'Git', icon: FaGitAlt, color: '#f05032' },
  { name: 'GitHub', icon: FaGithub, color: '#ffffff' },
  { name: 'Advanced Excel', icon: RiFileExcel2Fill, color: '#217346' },
  { name: 'Openpyxl', icon: LuFileSpreadsheet, color: '#4ade80' },
  { name: 'Power Query', icon: LuFilter, color: '#fbbf24' },
  { name: 'DAX', icon: TbMathFunction, color: '#f59e0b' },
  { name: 'SMOTE', icon: LuLayers, color: '#ec4899' },
  { name: 'PCA', icon: TbChartBubbleFilled, color: '#3b82f6' },
  { name: 'K-Means', icon: FaProjectDiagram, color: '#22c55e' },
  { name: 'Random Forest', icon: FaTree, color: '#10b981' },
  { name: 'Gradient Boosting', icon: LuTrendingUp, color: '#f97316' },
  { name: 'Keras', icon: SiKeras, color: '#d00000' },
  { name: 'TensorFlow', icon: SiTensorflow, color: '#ff6f00' },
];

interface MarqueeRowProps {
  items: SkillItem[];
  reverse?: boolean;
  label: string;
}

function MarqueeRow({ items, reverse = false, label }: MarqueeRowProps) {
  const repeated = [...items, ...items];

  return (
    <div className="marquee-viewport" aria-label={label}>
      <div className={`marquee-track${reverse ? ' marquee-reverse' : ''}`}>
        {repeated.map((skill, idx) => {
          const IconComponent = skill.icon;
          return (
            <div key={`${skill.name}-${idx}`} className="skill-pill">
              <IconComponent
                className="skill-pill-icon"
                style={{ color: skill.color }}
                aria-hidden="true"
              />
              <span className="skill-pill-name">{skill.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/**
 * Dual-row infinite horizontal marquee showcasing data & ML technologies and tools.
 */
export default function SkillSection() {
  return (
    <section id="skills" className="section-block">
      <SectionTitle subtitle="30 technologies &amp; ML workflows">Skills &amp; Tools</SectionTitle>
      <div className="skills-marquee-card">
        <div className="skills-row-group">
          <span className="skills-row-label">Core Stack &amp; Analytics</span>
          <MarqueeRow items={technologies} label="Core technologies marquee" />
        </div>
        <div className="skills-row-group">
          <span className="skills-row-label">ML Methods &amp; Tooling</span>
          <MarqueeRow items={tools} reverse label="Tools and methods marquee" />
        </div>
      </div>
    </section>
  );
}
