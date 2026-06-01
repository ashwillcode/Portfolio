import { useState, useEffect } from 'react';
import '@fontsource/oswald/700.css';
import '@fontsource/oswald/400.css';
import '@fontsource/oswald/500.css';
import '@fontsource/anton/400.css';
import { Nav } from './components/nav/Nav';
import { PetalDivider } from './components/dividers/PetalDivider';
import { ZigzagDivider } from './components/dividers/ZigzagDivider';
import { CloudDivider } from './components/dividers/CloudDivider';
import { MarqueeTicker } from './components/ui/MarqueeTicker';
import { HeroSection } from './sections/HeroSection';
import { JourneySection } from './sections/JourneySection';
import { WorkSection } from './sections/WorkSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { ProjectDetailPanel } from './sections/ProjectDetailPanel';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { ContactSection } from './sections/ContactSection';

function App() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  useEffect(() => {
    const mainElement = document.querySelector('main');
    const handleScroll = () => {
      if (!mainElement) return;
      const fadeDistance = window.innerWidth < 1024 ? 900 : 600;
      document.querySelectorAll<HTMLElement>('[data-fade]').forEach(el => {
        const section = el.closest('section') as HTMLElement ?? el;
        const scrolled = mainElement.scrollTop - section.offsetTop;
        const opacity = scrolled <= 0 ? 1 : Math.max(1 - scrolled / fadeDistance, 0);
        el.style.opacity = String(opacity);
      });
    };
    mainElement?.addEventListener('scroll', handleScroll, { passive: true });
    return () => mainElement?.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex h-screen overflow-hidden bg-cream">
      <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden="true">
        <defs>
          <clipPath id="blob-clip" clipPathUnits="objectBoundingBox">
            <path d="M 0.07,0 Q 0.3,0.012 0.5,0.02 Q 0.72,0.008 0.93,0 Q 1,0 1,0.07 Q 0.988,0.32 1,0.5 Q 0.992,0.7 1,0.93 Q 1,1 0.93,1 Q 0.68,0.988 0.5,0.98 Q 0.3,0.992 0.07,1 Q 0,1 0,0.93 Q 0.012,0.68 0,0.5 Q 0.018,0.3 0,0.07 Q 0,0 0.07,0 Z" />
          </clipPath>
          <clipPath id="checker-card-clip" clipPathUnits="objectBoundingBox">
            <path d="M 0.06,0 Q 0.28,0.018 0.5,0.006 Q 0.72,0 0.94,0.012 Q 1,0 1,0.06 Q 0.992,0.3 1,0.5 Q 0.996,0.72 1,0.94 Q 1,1 0.94,1 Q 0.7,0.988 0.5,1 Q 0.28,0.992 0.06,1 Q 0,1 0,0.94 Q 0.008,0.7 0,0.5 Q 0.004,0.28 0,0.06 Q 0,0 0.06,0 Z" />
          </clipPath>
        </defs>
      </svg>

      <Nav selectedProject={selectedProject} />

      <main className="w-full lg:w-3/4 overflow-y-auto overflow-x-hidden">
        <HeroSection />
        <div className="bg-sage"><PetalDivider fillColor="#A8DCC5" /></div>
        <JourneySection />
        <MarqueeTicker />
        <WorkSection />
        <div className="bg-lavender"><ZigzagDivider fillColor="#FFB6C1" /></div>
        <ProjectsSection onSelectProject={setSelectedProject} />
        <div className="bg-blush"><CloudDivider fillColor="#FFFCE7" /></div>
        <TestimonialsSection />
        <div className="bg-cream"><PetalDivider fillColor="#7EB89E" /></div>
        <ContactSection />
      </main>

      {selectedProject && (
        <ProjectDetailPanel
          selectedProject={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}

export default App;
