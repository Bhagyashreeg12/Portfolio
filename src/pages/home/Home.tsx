import ContactMe from '../../components/contactMe/ContactMe';
import Experience from '../../components/experience/Experience';
import Footer from '../../components/footer/Footer';
import HeroSection from '../../components/heroSection/HeroSection';
import Projects from '../../components/projects/Projects';
import SkillSection from '../../components/skillSection/SkillSection';

/**
 * Primary landing page composing all 6 portfolio sections.
 */
export default function Home() {
  return (
    <>
      <HeroSection />
      <SkillSection />
      <Experience />
      <Projects />
      <ContactMe />
      <Footer />
    </>
  );
}
