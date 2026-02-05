import { About } from '@/components/about';
import { Achievements } from '@/components/achievements';
import Certifications from '@/components/certifications';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Intro } from '@/components/intro';
import { Leadership } from '@/components/leadership';
import { Projects } from '@/components/projects';
import { SectionDivider } from '@/components/section-divider';
import { Skills } from '@/components/skills';
import { ThemeToggle } from '@/components/theme-toggle';

const HomePage = async () => {
  return (
    <>
      <main id="main-content" className="container flex flex-col items-center">
        <Header />
        <Intro />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Skills />
        <Certifications />
        <SectionDivider />
        <Achievements />
        <Leadership />
        <SectionDivider />
        <Projects />
        <Contact />
        <Footer />
      </main>
      <ThemeToggle className="bg-background/80 fixed right-6 top-6 z-30 hidden backdrop-blur-sm sm:flex" />
    </>
  );
};

export default HomePage;
