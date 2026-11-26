import { HiArrowLeft } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import './PageNotFound.css';

/**
 * Fallback 404 page styled with manixh dark typography and glow animation.
 */
export default function PageNotFound() {
  return (
    <>
      <section className="not-found-section">
        <div className="not-found-card">
          <span className="not-found-code">404</span>
          <h1 className="not-found-heading">Query returned 0 rows</h1>
          <p className="not-found-desc">
            The route you requested does not exist in this portfolio workspace.
          </p>
          <Link to="/" className="mx-btn">
            <HiArrowLeft aria-hidden="true" />
            <span>Back to Home</span>
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
