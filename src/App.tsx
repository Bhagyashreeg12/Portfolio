import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import ClickSpark from './components/ClickSpark';
import Loading from './components/loading/Loading';
import Navbar from './components/navbar/Navbar';

const Home = lazy(() => import('./pages/home/Home'));
const ProjectsLayout = lazy(() => import('./pages/projects/ProjectsLayout'));
const AnalyticsLayout = lazy(() => import('./pages/analytics/AnalyticsLayout'));
const ResumeLayout = lazy(() => import('./pages/resume/ResumeLayout'));
const PageNotFound = lazy(() => import('./pages/notFound/PageNotFound'));

function ScrollManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}

/**
 * Root application component with React Router and global ClickSpark wrapper.
 */
export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <ClickSpark sparkColor="#ffffff" sparkSize={10} sparkRadius={16} sparkCount={8} duration={400}>
        <div className="app-shell">
          <Navbar />
          <main className="main-content">
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/projects" element={<ProjectsLayout />} />
                <Route path="/analytics" element={<AnalyticsLayout />} />
                <Route path="/resume" element={<ResumeLayout />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </Suspense>
          </main>
        </div>
      </ClickSpark>
    </BrowserRouter>
  );
}
