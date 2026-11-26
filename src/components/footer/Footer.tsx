import { useEffect, useState } from 'react';
import { BsFillArrowThroughHeartFill } from 'react-icons/bs';
import './Footer.css';

function getISTTime(): string {
  return new Intl.DateTimeFormat('en-IN', {
    timeZone: 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  }).format(new Date());
}

/**
 * Portfolio footer with data craft quote, attribution, and live IST clock.
 */
export default function Footer() {
  const [istTime, setIstTime] = useState<string>(() => getISTTime());

  useEffect(() => {
    const timerId = window.setInterval(() => {
      setIstTime(getISTTime());
    }, 1000);
    return () => window.clearInterval(timerId);
  }, []);

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <blockquote className="footer-quote">
          &ldquo;Numbers have an important story to tell. They rely on you to give them a clear and
          convincing voice.&rdquo;
          <cite className="footer-quote-author"> — Stephen Few</cite>
        </blockquote>

        <div className="footer-divider" aria-hidden="true" />

        <div className="footer-bottom">
          <div className="footer-credits">
            <span className="footer-made-by">
              Made with{' '}
              <BsFillArrowThroughHeartFill className="footer-heart-icon" aria-label="love" /> by{' '}
              <strong>Bhagyashree Ghosh</strong>
            </span>
            <span className="footer-copyright">&copy; 2026 All rights reserved.</span>
          </div>

          <div className="footer-clock" aria-label="Current India Standard Time">
            <span className="footer-clock-dot" aria-hidden="true" />
            <span>Pune, IN &bull; {istTime} IST</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
