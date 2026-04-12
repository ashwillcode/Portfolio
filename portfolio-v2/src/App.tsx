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

function Section({ children, bgColor, id, className }: {children: React.ReactNode; bgColor: string; id: string; className?: string}) {
  return (
  <section id={id} className={`min-h-screen flex items-center justify-center ${bgColor} relative ${className ?? ''}`}>
  {children}
  </section>
  )
}

function SectionHeading({ children}: { children: string}) {
  return <h2 className="text-5xl">{children}</h2>
}

const HOBBY_TAGS = ['k-pop fan', 'boba obsessed', 'crochet master', 'digital illustrator', 'anime addict'];

function MarqueeTicker({ scrollDirection }: { scrollDirection: 'down' | 'up' }) {
  const items = [...HOBBY_TAGS, ...HOBBY_TAGS];
  return (
    <div className="h-14 bg-blush overflow-hidden flex items-center">
      <div className={`marquee-track${scrollDirection === 'up' ? ' reverse' : ''} flex whitespace-nowrap`}>
        {items.map((tag, i) => (
          <span
            key={i}
            className="text-sage uppercase tracking-widest text-sm px-6"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            {tag} <span className="text-sage/60">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
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
  const [scrollDirection, setScrollDirection] = useState<'down' | 'up'>('down');
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
    if (scrollDelta > 0) setScrollDirection('down');
    else if (scrollDelta < 0) setScrollDirection('up');
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
          <p className="text-navy text-lg">Frontend Engineer</p>
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
            <p className="text-hero-body text-cream"> a frontend engineer</p>
          </div>
        </Section>

        <div className="bg-sage">
          <PetalDivider fillColor="#A8DCC5" waveOffset={waveOffset} />
        </div>

        <Section bgColor="bg-mint" id="journey" className="overflow-hidden">
          {/* Desktop: full-height illustration bleeding off the left edge */}
          <div className="hidden lg:block absolute" style={{ left: '-75px', top: '25px', width: '65%', height: '100%' }}>
            <img
              src={girlAtDesk}
              alt="illustration of ash at her desk"
              className="h-full w-full object-contain object-bottom"
            />
          </div>

          {/* Mobile: stacked illustration + card */}
          <div className="flex flex-col lg:hidden items-center gap-8 px-6 py-16 w-full">
            <div className="w-64 flex-shrink-0">
              <img src={girlAtDesk} alt="illustration of ash at her desk" className="w-full h-auto" />
            </div>
            <div className="bg-cream rounded-2xl p-8 shadow-xl flex flex-col gap-5 w-full">
              <p className="text-sm text-navy/50 uppercase tracking-widest" style={{ fontFamily: 'Oswald, sans-serif' }}>my story</p>
              <blockquote className="text-3xl text-navy leading-snug" style={{ fontFamily: 'Anton, sans-serif' }}>
                "It's not just about the code. It's also about having a positive impact."
              </blockquote>
              <p className="text-base text-navy leading-relaxed" style={{ fontFamily: 'Oswald, sans-serif' }}>
                I've always thought in color and feeling first. I started as an artist — drawing, designing brands, building things with my hands. Then I wanted to build things on screens too.
              </p>
              <p className="text-base text-navy leading-relaxed" style={{ fontFamily: 'Oswald, sans-serif' }}>
                Today I sit at the intersection of design and engineering. I bring the artist's eye to every component I build.
              </p>
            </div>
          </div>

          {/* Desktop: card overlapping the illustration on the right */}
          <div className="hidden lg:flex w-full items-center justify-end pr-16 py-16" style={{ transform: 'translateX(25px)' }}>
            <div className="relative z-10 bg-cream rounded-2xl p-10 shadow-2xl flex flex-col gap-5" style={{ width: '52%' }}>
              <p className="text-sm text-navy/50 uppercase tracking-widest" style={{ fontFamily: 'Oswald, sans-serif' }}>my story</p>
              <blockquote className="text-4xl text-navy leading-snug" style={{ fontFamily: 'Anton, sans-serif' }}>
                "It's not just about the code. It's also about having a positive impact."
              </blockquote>
              <p className="text-base text-navy leading-relaxed" style={{ fontFamily: 'Oswald, sans-serif' }}>
                I've always thought in color and feeling first. I started as an artist — drawing, designing brands, building things with my hands. Then I wanted to build things on screens too.
              </p>
              <p className="text-base text-navy leading-relaxed" style={{ fontFamily: 'Oswald, sans-serif' }}>
                Today I sit at the intersection of design and engineering. I bring the artist's eye to every component I build.
              </p>
            </div>
          </div>
        </Section>

        <MarqueeTicker scrollDirection={scrollDirection} />

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