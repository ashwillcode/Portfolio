import { useState, useEffect, useRef } from 'react'
import '@fontsource/oswald/700.css';
import '@fontsource/anton/400.css';
import girlAtDesk from './assets/girl_at_desk.PNG';

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

function PetalDivider({ fillColor, waveOffset }: { fillColor: string; waveOffset: number }) {
  return (
    <div style={{ marginTop: '-2px', overflow: 'hidden' }}>
      <svg
        viewBox="0 0 1760 100"
        className="block"
        style={{
          height: '70px',
          width: 'calc(100% + 240px)',
          marginLeft: '-120px',
          transform: `translateX(${waveOffset}px)`,
          transition: 'transform 0.3s ease-out',
        }}
        preserveAspectRatio="none"
      >
        <path
          fill={fillColor}
          d="M0,100
             Q80,40 160,100 Q240,40 320,100 Q400,40 480,100 Q560,40 640,100
             Q720,40 800,100 Q880,40 960,100 Q1040,40 1120,100 Q1200,40 1280,100
             Q1360,40 1440,100 Q1520,40 1600,100 Q1680,40 1760,100
             L1760,100 L0,100 Z"
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

  const [waveOffset, setWaveOffset] = useState(0);
  const prevScrollY = useRef(0);

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

    const currentScrollY = mainElement.scrollTop;
    const fadeEnd = 400;
    const opacity = 1 - Math.min(currentScrollY / fadeEnd, 1);
    setHeroOpacity(opacity);

    const scrollDelta = currentScrollY - prevScrollY.current;
    setWaveOffset(prev => {
      const newOffset = prev + scrollDelta * 0.35;
      return Math.max(-100, Math.min(100, newOffset));
    });
    prevScrollY.current = currentScrollY;
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
          <PetalDivider fillColor="#A8DCC5" waveOffset={waveOffset} />
        </div>

        <Section bgColor="bg-mint" id="journey">
          <div className="flex flex-col lg:flex-row items-center gap-12 px-8 lg:px-16 py-16 max-w-6xl w-full">
            {/* Left: illustration */}
            <div className="flex-shrink-0 w-64 lg:w-80 xl:w-96">
              <img src={girlAtDesk} alt="illustration of ash at her desk" className="w-full h-auto" />
            </div>

            {/* Right: text content */}
            <div className="flex flex-col gap-6">
              <p className="text-sm text-navy/50 uppercase tracking-widest" style={{ fontFamily: 'Oswald, sans-serif' }}>
                my story
              </p>

              <blockquote className="text-3xl lg:text-4xl text-navy leading-snug" style={{ fontFamily: 'Anton, sans-serif' }}>
                "It's not just about the code. It's also about having a positive impact."
              </blockquote>

              <p className="text-base text-navy leading-relaxed" style={{ fontFamily: 'Oswald, sans-serif' }}>
                I've always thought in color and feeling first. I started as an artist — drawing, designing brands, building things with my hands. Then I wanted to build things on screens too.
              </p>

              <p className="text-base text-navy leading-relaxed" style={{ fontFamily: 'Oswald, sans-serif' }}>
                Today I sit at the intersection of design and engineering. I bring the artist's eye to every component I build.
              </p>

              {/* Hobby pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                {['k-pop fan', 'boba obsessed', 'crochet master', 'digital illustrator', 'anime addict'].map(tag => (
                  <span key={tag} className="bg-blush text-navy rounded-full px-3 py-1 text-sm" style={{ fontFamily: 'Oswald, sans-serif' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
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