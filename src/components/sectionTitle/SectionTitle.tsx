import type { ReactNode } from 'react';
import './SectionTitle.css';

interface SectionTitleProps {
  children: ReactNode;
  subtitle?: string;
}

/**
 * Decorated section heading with manixh corner-bracket framing.
 */
export default function SectionTitle({ children, subtitle }: SectionTitleProps) {
  return (
    <div className="section-title-row">
      <h2 className="section-title-box">
        <span className="corner corner-tl" aria-hidden="true" />
        <span className="corner corner-tr" aria-hidden="true" />
        <span className="corner corner-bl" aria-hidden="true" />
        <span className="corner corner-br" aria-hidden="true" />
        <span className="section-title-text">{children}</span>
      </h2>
      {subtitle && <span className="section-title-subtitle">{subtitle}</span>}
    </div>
  );
}
