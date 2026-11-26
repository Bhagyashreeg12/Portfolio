import type { ReactNode } from 'react';
import { FaChevronDown } from 'react-icons/fa';

export type ExperienceStatus = 'present' | 'past' | 'future';

export interface ExperienceCardProps {
  logo: ReactNode;
  company: string;
  role: string;
  dates: string;
  status: ExperienceStatus;
  location?: string;
  description: string[];
  isExpanded: boolean;
  onToggle: () => void;
}

const statusLabelMap: Record<ExperienceStatus, string> = {
  present: 'Present',
  past: 'Completed',
  future: 'Upcoming',
};

/**
 * Expandable timeline card for education and professional experience entries.
 */
export default function ExperienceCard({
  logo,
  company,
  role,
  dates,
  status,
  location,
  description,
  isExpanded,
  onToggle,
}: ExperienceCardProps) {
  return (
    <article className={`exp-item exp-status-${status}`}>
      <span className={`exp-dot exp-dot-${status}`} aria-hidden="true" />

      <div className={`exp-card${isExpanded ? ' expanded' : ''}`}>
        <button
          type="button"
          className="exp-card-header"
          onClick={onToggle}
          aria-expanded={isExpanded}
        >
          <div className="exp-header-left">
            <div className="exp-logo-box" aria-hidden="true">
              {logo}
            </div>
            <div className="exp-title-group">
              <div className="exp-company-row">
                <h3 className="exp-company">{company}</h3>
                <span className={`exp-status-badge exp-badge-${status}`}>
                  {statusLabelMap[status]}
                </span>
              </div>
              <p className="exp-role">{role}</p>
            </div>
          </div>

          <div className="exp-header-right">
            <div className="exp-meta">
              <span className="exp-dates">{dates}</span>
              {location && <span className="exp-location">{location}</span>}
            </div>
            <FaChevronDown
              className={`exp-chevron${isExpanded ? ' rotated' : ''}`}
              aria-hidden="true"
            />
          </div>
        </button>

        <div className={`exp-body-collapse${isExpanded ? ' open' : ''}`}>
          <div className="exp-body-inner">
            <ul className="exp-bullets">
              {description.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}
