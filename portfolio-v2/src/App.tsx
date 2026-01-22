import { useState, useEffect, useRef } from 'react'
import '@fontsource/oswald/700.css';
import '@fontsource/anton/400.css';

function NavItem ({children, onClick, isActive }: {children: string; onClick: () => void; isActive: boolean }) {
  return (
    <li onClick={onClick} className= {`cursor-pointer transition-colors ${isActive ? 'text-blush font-bold' : 'text-navy hover:text-blush'}`}>
      {children}
    </li>
  )
}

function Section({ children, bgColor, id}: {children: React.ReactNode; bgColor: string; id: string}) {
  return (
  <section id={id} className={`min-h-screen flex items-center justify-center ${bgColor} relative`}> 
  {children}
  </section>
  )
}

function SectionHeading({ children}: { children: string}) {
  return <h2 className="text-5xl">{children}</h2>
}

function PetalDivider({ fillColor }: { fillColor: string }) {
  return (
    <div style={{ marginTop: '-2px' }}>
      <svg 
        viewBox="0 0 1440 100" 
        className="w-full block"
        style={{ height: '70px' }}
        preserveAspectRatio="none"
      >
        <path 
          fill={fillColor}
          d="M0,100 
             Q80,40 160,100 
             Q240,40 320,100 
             Q400,40 480,100 
             Q560,40 640,100 
             Q720,40 800,100 
             Q880,40 960,100 
             Q1040,40 1120,100 
             Q1200,40 1280,100 
             Q1360,40 1440,100 
             L1440,100 L0,100 Z"
        />
      </svg>
    </div>
  );
}

function App () {
  const navItems = [
    { label: "Hello, i'm ash", id: "hello" },
    { label: "how i got here", id: "journey" },
    { label: "the way i work", id: "work" },
    { label: "things i've made", id: "projects" },
    { label: "what collaborators say", id: "testimonials" },
    { label: "say hello?", id: "contact" }
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [activeSection, setActiveSection] = useState('hello');

  const [heroOpacity, setHeroOpacity] = useState(1);

  useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => { 
      entries.forEach((entry) => {  
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    },
    { threshold: 0.25 }  
  );

  navItems.forEach((item) => {
    const element = document.getElementById(item.id);
    if (element) observer.observe(element);
  });
  
  return () => observer.disconnect();
  }, []); 

  useEffect(() => {
  const mainElement = document.querySelector('main');
  
  const handleScroll = () => {
    if (!mainElement) return;
    
    const scrollY = mainElement.scrollTop;
    const fadeEnd = 400;
    const opacity = 1 - Math.min(scrollY / fadeEnd, 1);
    
    setHeroOpacity(opacity);
  };

  mainElement?.addEventListener('scroll', handleScroll);
  return () => mainElement?.removeEventListener('scroll', handleScroll);
  }, []);

  return (

    <div className="flex h-screen overflow-hidden bg-cream">
      <button onClick={() => setIsMenuOpen (!isMenuOpen)} className="lg:hidden fixed top-4 left-4 z-50 text-forest">
        <svg className="w-6 h-6" fill="none"   stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg> 
      </button>

      {isMenuOpen && (
        <div onClick={() => setIsMenuOpen (false)} className="lg:hidden fixed inset-0"></div>
      )}

      <nav className={`${isMenuOpen ? 'flex' : 'hidden'} lg:flex w-1/3 lg:w-1/4 bg-taupe flex-col fixed lg:relative inset-0 lg:inset-auto z-40`}>
        <div className="p-4 pt-16 lg:pt-4">
          <h1 className="text-navy text-2xl font-bold">Ash</h1>
          <p className="text-navy text-lg">Full-stack Developer</p>
        </div>

        <ul className="flex flex-col flex-1 p-4 text-lg gap-4">
          { navItems.map(item => (
            <NavItem key={item.id}
             isActive={activeSection === item.id}
             onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth'})}
            >{item.label}</NavItem>
          ))}
        </ul>
      </nav>

      <main className="w-full lg:w-3/4 overflow-y-auto">
        <Section bgColor="bg-sage" id="hello">
          <div className="flex flex-col items-center gap-4 relative z-10" style={{ opacity: heroOpacity }}>
            <div className="flex flex-col">
              <h1 className="text-hero leading-tight pl-6">HELLO,</h1>
              <h2 className="text-hero-sub text-navy ">i'm ashley</h2>
            </div>
            <p className="text-hero-body text-cream"> a full-stack devoloper</p>
          </div>
        </Section>

        <div className="bg-sage">
          <PetalDivider fillColor="#A8DCC5" />
        </div>

        <Section bgColor="bg-mint" id="journey">
          <SectionHeading>how i got here</SectionHeading>
        </Section>

        <Section bgColor="bg-lavender" id="work">
          <SectionHeading>the way i work</SectionHeading>
        </Section>

        <Section bgColor="bg-blush" id="projects">
          <SectionHeading>things i've made</SectionHeading>
        </Section>

        <Section bgColor="bg-cream" id="testimonials">
          <SectionHeading>what collaborators say</SectionHeading>
        </Section>

        <Section bgColor="bg-sage" id="contact">
          <SectionHeading>say hello?</SectionHeading>
        </Section>
      </main>
    </div>
  )
}

export default App