import { FaBolt, FaGithub } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import { RiLockFill } from 'react-icons/ri';
import type { ProjectData } from '../../data/projects';

interface ProjectCardProps {
  project: ProjectData;
}

/**
 * Project showcase card styled identically to the manixh template reference:
 * - Dashed outer card border
 * - Metallic reflective mockup frame on the left with stats pill badge and icon badge
 * - Inner browser window with 3 dots and dark preview
 * - Title row with green lock icon and [Live] [GitHub] buttons
 * - Description text
 * - "Technologies Used:" heading followed by crisp rounded-rectangle tech tags
 */
export default function ProjectCard({ project }: ProjectCardProps) {
  const isWidePlot = project.id === 'fraud-detection';

  return (
    <article className="project-card">
      {/* Left Column: Metallic Mockup Frame */}
      <div className="project-mockup-frame">
        {project.stats && (
          <div className="project-mockup-badge-left">
            <span>{project.stats}</span>
          </div>
        )}

        <div className="project-mockup-badge-right" aria-hidden="true">
          <FaBolt />
        </div>

        <div className="project-browser-window">
          <div className="project-browser-header">
            <div className="project-browser-dots">
              <span className="dot dot-1" />
              <span className="dot dot-2" />
              <span className="dot dot-3" />
            </div>
            <div className="project-browser-bar">
              <span className="project-browser-url">{project.id}.analytics</span>
            </div>
          </div>

          <div className="project-browser-viewport">
            {project.banner ? (
              <img
                src={project.banner}
                alt={project.name}
                className={`project-browser-img${isWidePlot ? ' contain-plot' : ''}`}
                loading="lazy"
              />
            ) : (
              <div className="project-browser-placeholder">
                <div className="placeholder-terminal-header">
                  <span className="placeholder-text-muted">&gt; Model:</span>
                  <span className="placeholder-text-highlight">{project.category}</span>
                </div>
                <div className="placeholder-stats-row">
                  <div className="placeholder-stat-pill">
                    <span className="placeholder-stat-label">STATUS</span>
                    <span className="placeholder-stat-val">OPTIMIZED</span>
                  </div>
                  <div className="placeholder-stat-pill">
                    <span className="placeholder-stat-label">PIPELINE</span>
                    <span className="placeholder-stat-val">ACTIVE</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Right Column: Project Info */}
      <div className="project-info-col">
        <div className="project-header-row">
          <div className="project-title-group">
            <h3 className="project-name">{project.name}</h3>
            {project.isProtected && (
              <RiLockFill className="project-lock-icon" aria-label="Protected / Enterprise" />
            )}
          </div>

          <div className="project-action-links">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="project-action-btn"
              >
                <FiArrowUpRight className="project-btn-icon" aria-hidden="true" />
                <span>Live</span>
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-action-btn"
              >
                <FaGithub className="project-btn-icon" aria-hidden="true" />
                <span>GitHub</span>
              </a>
            )}
          </div>
        </div>

        <p className="project-desc">{project.desc}</p>

        <div className="project-tech-block">
          <h4 className="project-tech-heading">Technologies Used:</h4>
          <div className="project-tech-pills">
            {project.tech.map((tech) => (
              <span key={tech} className="project-tech-pill">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
