import './Loading.css';

/**
 * Full-screen SVG trace loader shown during lazy route transitions.
 */
export default function Loading() {
  return (
    <div className="loading-screen" role="status" aria-live="polite">
      <div className="loading-inner">
        <svg className="loading-svg" viewBox="0 0 120 40" width="120" height="40" aria-hidden="true">
          <path
            className="loading-track"
            d="M4 20 H26 L34 8 L46 32 L58 14 L68 26 L76 20 H116"
            fill="none"
          />
          <path
            className="loading-trace"
            d="M4 20 H26 L34 8 L46 32 L58 14 L68 26 L76 20 H116"
            fill="none"
          />
        </svg>
        <p className="loading-caption">Loading analytics workspace...</p>
      </div>
    </div>
  );
}
