import { forwardRef } from 'react';
import type { ReactNode } from 'react';
import './Tooltip.css';

interface TooltipProps {
  text: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  children: ReactNode;
  className?: string;
}

/**
 * Lightweight hover tooltip with spring easing.
 */
const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(function Tooltip(
  { text, position = 'top', children, className = '' },
  ref,
) {
  return (
    <div ref={ref} className={`tooltip-wrapper ${className}`.trim()}>
      {children}
      <span className={`tooltip-bubble tooltip-${position}`} role="tooltip">
        {text}
      </span>
    </div>
  );
});

export default Tooltip;
