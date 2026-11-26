import { HiArrowRight } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import { allProjects, featuredProjects } from '../../data/projects';
import SectionTitle from '../sectionTitle/SectionTitle';
import ProjectCard from './ProjectCard';
import './Projects.css';

/**
 * Featured projects section displayed on the Home page with link to all projects.
 */
export default function Projects() {
  return (
    <section id="projects" className="section-block">
      <SectionTitle>My Projects</SectionTitle>

      <div className="projects-list">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="projects-more-row">
        <Link to="/projects" className="mx-btn-secondary">
          <span>View All Projects ({allProjects.length})</span>
          <HiArrowRight className="arrow-icon" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
