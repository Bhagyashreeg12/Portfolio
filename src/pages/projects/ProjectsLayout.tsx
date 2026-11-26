import Footer from '../../components/footer/Footer';
import AllProjects from '../../components/projects/AllProjects';

/**
 * Projects archive route page displaying all 6 case studies with category filtering.
 */
export default function ProjectsLayout() {
  return (
    <>
      <AllProjects />
      <Footer />
    </>
  );
}
