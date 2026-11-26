import { useMemo, useState } from 'react';
import { HiArrowLeft } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import { allProjects } from '../../data/projects';
import SectionTitle from '../sectionTitle/SectionTitle';
import ProjectCard from './ProjectCard';
import './Projects.css';

type FilterOption = 'All' | 'Machine Learning' | 'BI & Analytics' | 'Automation & MIS' | 'Time Series';

const filterOptions: FilterOption[] = [
  'All',
  'Machine Learning',
  'BI & Analytics',
  'Automation & MIS',
  'Time Series',
];

/**
 * Full projects directory page displaying all 6 portfolio case studies with category filtering.
 */
export default function AllProjects() {
  const [activeFilter, setActiveFilter] = useState<FilterOption>('All');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return allProjects;
    }
    return allProjects.filter((project) => {
      switch (activeFilter) {
        case 'Machine Learning':
          return (
            project.category === 'Machine Learning' ||
            project.category === 'Healthcare ML' ||
            project.category === 'Clustering & Analytics'
          );
        case 'BI & Analytics':
          return (
            project.category === 'BI & Spatial Analytics' ||
            project.category === 'Clustering & Analytics' ||
            project.category === 'Automation & MIS'
          );
        case 'Automation & MIS':
          return project.category === 'Automation & MIS';
        case 'Time Series':
          return project.category === 'Time Series & DL';
        default:
          return true;
      }
    });
  }, [activeFilter]);

  return (
    <section className="all-projects-section">
      <div className="all-projects-top-nav">
        <Link to="/" className="mx-btn-secondary">
          <HiArrowLeft aria-hidden="true" />
          <span>Back to Home</span>
        </Link>
      </div>

      <SectionTitle subtitle={`${filteredProjects.length} of ${allProjects.length} case studies`}>
        All Projects
      </SectionTitle>

      <div className="projects-filter-row" role="tablist" aria-label="Filter projects by category">
        {filterOptions.map((option) => (
          <button
            key={option}
            type="button"
            role="tab"
            aria-selected={activeFilter === option}
            className={`projects-filter-pill${activeFilter === option ? ' active' : ''}`}
            onClick={() => setActiveFilter(option)}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="projects-list">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
