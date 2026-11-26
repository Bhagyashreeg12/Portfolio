import { useCallback } from 'react';
import { FaGithub, FaStar } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

interface NavItem {
  label: string;
  route?: string;
  sectionId?: string;
}

const navItems: NavItem[] = [
  { label: 'Home', route: '/', sectionId: 'hero' },
  { label: 'Projects', route: '/projects', sectionId: 'projects' },
  { label: 'Analytics', route: '/analytics' },
  { label: 'Resume', route: '/resume' },
  { label: 'Skills', route: '/', sectionId: 'skills' },
  { label: 'Experience', route: '/', sectionId: 'experience' },
  { label: 'Contact', route: '/', sectionId: 'contact' },
];

/**
 * Clean navbar without logo, matching manixh:
 * - Left: Navigation links in a single row without wrapping
 * - Right: Star GitHub button
 */
export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = useCallback(
    (item: NavItem) => {
      // Direct route (e.g. /projects, /analytics, /resume)
      if (item.route && item.route !== '/') {
        navigate(item.route);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      // If already on Home
      if (location.pathname === '/' || location.pathname === '/home') {
        if (!item.sectionId || item.sectionId === 'hero') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
        document.getElementById(item.sectionId)?.scrollIntoView({ behavior: 'smooth' });
        return;
      }

      // If on another route, navigate to Home then scroll
      navigate('/');
      window.setTimeout(() => {
        if (!item.sectionId || item.sectionId === 'hero') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
        document.getElementById(item.sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    },
    [location.pathname, navigate],
  );

  return (
    <header className="navbar-wrapper">
      <nav className="navbar-inner" aria-label="Primary Navigation">
        <ul className="navbar-links">
          {navItems.map((item) => {
            const isDirectRoute = item.route && item.route !== '/';
            const isActive = isDirectRoute
              ? location.pathname === item.route
              : (location.pathname === '/' || location.pathname === '/home') &&
                item.label === 'Home';

            return (
              <li key={item.label}>
                <button
                  type="button"
                  className={`navbar-link${isActive ? ' active' : ''}`}
                  onClick={() => handleNavClick(item)}
                >
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>

        <a
          href="https://github.com/Bhagyashreeg12"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar-star-pill"
          aria-label="Bhagyashree Ghosh on GitHub"
        >
          <FaStar className="navbar-star-icon" aria-hidden="true" />
          <span className="navbar-star-text">GitHub</span>
          <FaGithub className="navbar-github-icon" aria-hidden="true" />
        </a>
      </nav>
    </header>
  );
}
