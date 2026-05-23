import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import '@fontsource/oswald/700.css';
import '@fontsource/oswald/400.css';
import '@fontsource/oswald/500.css';
import '@fontsource/anton/400.css';
import girlAtDesk from './assets/girl_at_desk.PNG';
import {
  SiFigma, SiStorybook,
  SiReact, SiJavascript, SiHtml5, SiCss, SiTailwindcss,
  SiRubyonrails,
  SiGit, SiJira, SiSlack, SiClaude,
} from 'react-icons/si';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

function AdobeIcon({ size }: { size: number }) {
  return (
    <svg fill="currentColor" width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.782 3.153c-.231.02-.472.04-.703.07a8.453 8.453 0 0 0-2.832.834 8.951 8.951 0 0 0-2.46 1.777c-.03.04-.09.06-.141.05a7.44 7.44 0 0 0-1.496-.07 7.424 7.424 0 0 0-2.932.763c-1.768.884-3.013 2.26-3.736 4.108a7.089 7.089 0 0 0-.462 2.139c0 .05-.01.09-.02.13v.773c.02.201.05.392.07.593.1.813.332 1.596.703 2.33.824 1.646 2.089 2.851 3.786 3.594a7.127 7.127 0 0 0 2.45.593c.032 0 .06.004.086.01h8.576c.183-.017.362-.035.547-.06a8.344 8.344 0 0 0 2.811-.834 8.836 8.836 0 0 0 3.646-3.304 8.187 8.187 0 0 0 1.184-3.093c.05-.34.08-.692.121-1.034 0-.05.01-.09.02-.13v-.794c-.02-.23-.05-.452-.05-.662a8.345 8.345 0 0 0-.834-2.812 8.952 8.952 0 0 0-3.324-3.645 8.245 8.245 0 0 0-3.072-1.175c-.362-.06-.713-.09-1.075-.13-.05 0-.09-.01-.14-.02zm.369 1.693c2.126.005 3.93.826 5.395 2.455a6.93 6.93 0 0 1 1.616 3.323c.15.764.181 1.547.07 2.32-.19 1.346-.702 2.55-1.576 3.605a7.082 7.082 0 0 1-3.997 2.45 7.297 7.297 0 0 1-2.56.1c-1.095-.14-2.099-.501-3.003-1.154a5.2 5.2 0 0 1-.672-.573c-1.226-1.205-2.44-2.42-3.666-3.625-.301-.3-.321-.632-.18-.934a.822.822 0 0 1 .863-.472c.21.02.372.141.522.292 1.105 1.114 2.2 2.209 3.304 3.324a5.263 5.263 0 0 0 3.093 1.536c1.948.261 3.605-.341 4.92-1.798.713-.793 1.145-1.747 1.326-2.811.26-1.587-.11-3.013-1.095-4.268-.873-1.115-2.018-1.808-3.404-2.059-1.416-.25-2.751.02-3.966.794-.03.02-.1.03-.131.01a9.04 9.04 0 0 0-1.406-.854s-.01-.01-.02-.03a6.603 6.603 0 0 1 1.255-.823 6.646 6.646 0 0 1 2.641-.784 8.45 8.45 0 0 1 .67-.024zM7.546 7.509c1.455-.024 2.791.525 3.982 1.63.854.802 1.637 1.636 2.46 2.47.231.23.281.522.171.833-.11.311-.362.462-.683.512a.722.722 0 0 1-.632-.23c-.784-.784-1.567-1.557-2.34-2.35-.633-.653-1.386-1.025-2.27-1.186-1.958-.351-3.936.784-4.639 2.641-.904 2.36.522 5.031 2.982 5.594.482.11.995.11 1.497.1.14-.01.22.04.32.13.483.473.995.945 1.497 1.416.03.03.07.06.1.09-.06 0-.1.01-.14.01h-2.3a5.833 5.833 0 0 1-5.693-4.568c-.653-2.942 1.034-5.925 3.926-6.798a6.33 6.33 0 0 1 1.762-.294Z" />
    </svg>
  );
}

function CursorIcon({ size }: { size: number }) {
  return (
    <svg fill="currentColor" fillRule="evenodd" height={size} width={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.106 5.68L12.5.135a.998.998 0 00-.998 0L1.893 5.68a.84.84 0 00-.419.726v11.186c0 .3.16.577.42.727l9.607 5.547a.999.999 0 00.998 0l9.608-5.547a.84.84 0 00.42-.727V6.407a.84.84 0 00-.42-.726zm-.603 1.176L12.228 22.92c-.063.108-.228.064-.228-.061V12.34a.59.59 0 00-.295-.51l-9.11-5.26c-.107-.062-.063-.228.062-.228h18.55c.264 0 .428.286.296.514z" />
    </svg>
  );
}

function NavItem({ children, onClick, isActive }: { children: string; onClick: () => void; isActive: boolean }) {
  return (
    <li onClick={onClick} className={`cursor-pointer transition-colors ${isActive ? 'text-blush font-bold' : 'text-navy hover:text-blush'}`}>
      {children}
    </li>
  );
}

function Section({ children, bgColor, id, className }: { children: React.ReactNode; bgColor: string; id: string; className?: string }) {
  return (
    <section id={id} className={`min-h-screen flex items-center justify-center ${bgColor} relative ${className ?? ''}`}>
      {children}
    </section>
  );
}

function SectionHeading({ children }: { children: string }) {
  return <h2 className="text-5xl">{children}</h2>;
}

const HOBBY_TAGS = ['k-pop fan', 'boba obsessed', 'crochet master', 'digital illustrator', 'anime addict'];

const STORY_QUOTE = '"It\'s not just about the code. It\'s also about having a positive impact."';
const STORY_PARAGRAPHS = [
  'I came back to art in my mid-twenties, not for a career, but for my mental health. Drawing and crochet gave me somewhere to put my anxiety. Thriving in pop culture like BTS and One Piece, and creating my own style of art whether 2D or 3D, gave me an outlet to stay grounded.',
  'I learned to code to further my expression and build a better life. I changed careers and continue every day to grow. Now I am the person on the team who designs and builds. I move fast because I do not have to hand off. I can take something from a Figma file to a working component in the same breath. That is the intersection I live in, and I would not trade it.',
];

function Daisy({ color }: { color: string }) {
  return (
    <svg width="30" height="30" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      {[0, 72, 144, 216, 288].map((angle) => (
        <ellipse key={angle} cx="6" cy="3.5" rx="1.6" ry="2.5" fill={color} transform={`rotate(${angle} 6 6)`} />
      ))}
      <circle cx="6" cy="6" r="1.2" fill="#FFB6C1" />
    </svg>
  );
}

function MarqueeTicker() {
  const items = [...HOBBY_TAGS, ...HOBBY_TAGS, ...HOBBY_TAGS];
  return (
    <div className="h-14 bg-blush overflow-hidden flex items-center">
      <div className="marquee-inner flex items-center">
        {items.map((tag, i) => (
          <span key={i} className="font-oswald font-medium flex items-center gap-3 text-sage text-base uppercase tracking-widest px-4 whitespace-nowrap">
            {tag}
            <Daisy color="#FFFCE7" />
          </span>
        ))}
      </div>
    </div>
  );
}

function PetalDivider({ fillColor }: { fillColor: string }) {
  return (
    <div className="petal-divider-wrapper">
      <svg viewBox="0 0 1760 100" className="petal-divider-svg" preserveAspectRatio="none">
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

function ZigzagDivider({ fillColor }: { fillColor: string }) {
  const toothW = 220;
  const h = 48;
  const count = 12;
  let d = `M0,${h}`;
  for (let i = 0; i < count; i++) {
    const x = i * toothW;
    d += ` L${x + toothW / 2},0 L${x + toothW},${h}`;
  }
  d += ` L${count * toothW},60 L0,60 Z`;
  return (
    <div className="zigzag-divider-wrapper">
      <svg viewBox={`0 0 ${count * toothW} 60`} className="zigzag-divider-svg" preserveAspectRatio="none">
        <path fill={fillColor} d={d} />
      </svg>
    </div>
  );
}

function BlobDivider({ fillColor }: { fillColor: string }) {
  return (
    <div className="blob-divider-wrapper">
      <svg viewBox="0 0 1760 120" className="blob-divider-svg" preserveAspectRatio="none">
        <path
          fill={fillColor}
          d="M0,80 C120,30 280,110 500,60 C680,20 820,95 1050,50 C1220,18 1420,85 1600,45 C1680,28 1730,60 1760,55
             L1760,120 L0,120 Z"
        />
      </svg>
    </div>
  );
}

const TESTIMONIALS = [
  {
    quote: "Ashley's presence is extraordinary - she's everywhere at once, adding momentum and value to every project she touches. Whether advancing Flintstones' marketplace functionality or jumping in to help Next Level with those crucial finishing touches, she delivers nothing but positive energy and solid code. Her ability to seamlessly contribute wherever needed while maintaining such genuine enthusiasm demonstrates the kind of collaborative spirit and results-focused approach that truly drives our collective success (despite her questionable taste in K-pop!)",
    name: 'Derek Neighbors',
    role: 'Former CTO — StrongMind',
  },
  {
    quote: "A special shoutout to Ashley for helping mom (me) with using Cursor for the first time. She's so knowledgable, confident, patient, and willing to offer help. I appreciate you bringing me up to speed!",
    name: 'Jennifer Southall',
    role: 'UI/UX Director — StrongMind',
  },
  {
    quote: "Her use of Cursor accelerates UX design and development, making it seamless for her team to implement new features and get them into users' hands quickly for feedback and iteration. Ashley's openness to new workflows not only boosts the product's success but also makes life easier for everyone around her.",
    name: 'Ray Villaraza',
    role: 'UI/UX Lead Engineer — StrongMind',
  },
  {
    quote: "Instead of a ramp-up, it was a step up. Each and every one of them have stepped up when needed most and have constantly gone above and beyond--becoming truly essential team-members amongst the turbulence. Early mornings, late nights, and getting thrown in at the deep end--all whilst smiling--embodies every SM value. They've grown faster and stronger than expected during trials that would have caused most to crumble under the pressure. For what my little opinion is worth, I'm dead proud!",
    name: 'Benjamin Turvey',
    role: 'Product — StrongMind',
  },
  {
    quote: "Big shoutout to homegirl for helping me today with Lexi styles on her PTO day. She was very insistent to help despite my many attempts to get her to just enjoy her day off, but I'm glad I had her support! She's taken huge ownership over the Lexi user experience and interface, and I'm so grateful to have her help - thank you!!",
    name: 'Toacin Patwary',
    role: 'Software Engineer — StrongMind',
  },
];

const CARD_COLORS = ['#FFB6C1', '#7EB89E', '#C5B9DB', '#A8DCC5', '#C5B9DB'];

const COLLAGE_WORDS = [
  { text: 'RUMORS',   x: 4,   y: 8,   rotate: -14, size: 112, stroke: false, color: '#C5B9DB', yPx: -25 },
  { text: 'TALK',     x: 62,  y: 4,   rotate: 9,   size: 160, stroke: true,  color: '#7EB89E', xPx: -200 },
  { text: 'BUZZ',     x: 78,  y: 28,  rotate: -6,  size: 120, stroke: false, color: '#FFB6C1', yPx: -150 },
  { text: 'WHISPERS', x: 28,  y: 82,  rotate: -9,  size: 96,  stroke: true,  color: '#A8DCC5', yPx: -45, xPx: -50 },
  { text: 'CHATTER',  x: 52,  y: 74,  rotate: 16,  size: 108, stroke: false, color: '#FFB6C1', yPx: 50, xPx: 50 },
  { text: 'GOSSIP',   x: 1,   y: 36,  rotate: 21,  size: 100, stroke: true,  color: '#1A2F3F' },
  { text: 'MURMUR',   x: 60,  y: 48,  rotate: -17, size: 104, stroke: false, color: '#A8DCC5', xPx: 150, yPx: -50 },
  { text: 'VOICES',   x: 18,  y: 88,  rotate: 11,  size: 116, stroke: false, color: '#C5B9DB', xPx: -200 },
  { text: 'ECHO',     x: 83,  y: 58,  rotate: -8,  size: 140, stroke: true,  color: '#1A2F3F', xPx: -50, yPx: 50 },
  { text: 'NEWS',     x: 0,   y: 62,  rotate: -15, size: 114, stroke: false, color: '#FFB6C1', xPx: -30, yPx: -25 },
];

function CollageBackground() {
  return (
    <div className="collage-bg" aria-hidden="true">
      {COLLAGE_WORDS.map((w, i) => (
        <span
          key={i}
          className="collage-word"
          style={{
            left: w.xPx ? `calc(${w.x}% + ${w.xPx}px)` : `${w.x}%`,
            top: w.yPx ? `calc(${w.y}% + ${w.yPx}px)` : `${w.y}%`,
            transform: `rotate(${w.rotate}deg)`,
            fontSize: `${w.size}px`,
            color: w.stroke ? 'transparent' : w.color,
            WebkitTextStroke: w.stroke ? `2px ${w.color}` : 'none',
          }}
        >
          {w.text}
        </span>
      ))}
    </div>
  );
}

function TestimonialDeck() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const interacted = useRef(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const n = TESTIMONIALS.length;

  const startInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      interacted.current = true;
      setDirection(1);
      setCurrent(i => (i + 1) % n);
    }, 4000);
  };

  useEffect(() => {
    startInterval();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  const advance = (dir: number) => {
    interacted.current = true;
    setDirection(dir);
    setCurrent(i => (i + dir + n) % n);
    startInterval();
  };

  return (
    <div className="testimonial-deck-wrapper">
      <div className="testimonial-stack">
        <AnimatePresence>
          <motion.div
            key={current}
            style={{ position: 'absolute', inset: 0, background: CARD_COLORS[current] }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="testimonial-card"
          >
            <span className="quote-mark-top">"</span>
            <blockquote className="testimonial-quote">{TESTIMONIALS[current].quote}</blockquote>
            <div className="testimonial-meta">
              <p className="testimonial-name">{TESTIMONIALS[current].name}</p>
              <p className="testimonial-role">{TESTIMONIALS[current].role}</p>
            </div>
            <span className="quote-mark-bottom">"</span>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="testimonial-controls">
        <button onClick={() => advance(-1)} className="testimonial-btn" aria-label="Previous"><FiChevronLeft size={22} /></button>
        <div className="testimonial-dots">
          {Array.from({ length: n }).map((_, i) => (
            <span key={i} className={`testimonial-dot${i === current ? ' testimonial-dot--active' : ''}`} />
          ))}
        </div>
        <button onClick={() => advance(1)} className="testimonial-btn" aria-label="Next"><FiChevronRight size={22} /></button>
      </div>
    </div>
  );
}

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const res = await fetch('https://formspree.io/f/xgoqygjq', {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' },
    });
    setLoading(false);
    if (res.ok) setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="contact-success">
        <p className="contact-success-text">message sent — i'll be in touch soon!</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="contact-row">
        <div className="contact-field">
          <label className="contact-label">name</label>
          <input name="name" required className="contact-input" placeholder="your name" />
        </div>
        <div className="contact-field">
          <label className="contact-label">email</label>
          <input name="email" type="email" required className="contact-input" placeholder="your@email.com" />
        </div>
      </div>
      <div className="contact-field">
        <label className="contact-label">message</label>
        <textarea name="message" required rows={5} className="contact-input contact-textarea" placeholder="what's on your mind?" />
      </div>
      <button type="submit" disabled={loading} className="contact-btn">
        {loading ? 'sending...' : <span className="contact-btn-inner">send it <FiChevronRight size={18} /></span>}
      </button>
    </form>
  );
}

const NAV_ITEMS = [
  { label: "Hello, i'm ash", id: "hello" },
  { label: "this is how i got here", id: "journey" },
  { label: "and the way i work", id: "work" },
  { label: "plus the things i've made", id: "projects" },
  { label: "here is what the collaborators say", id: "testimonials" },
  { label: "say hello?", id: "contact" },
];

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hello');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.25 }
    );
    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden fixed top-4 left-4 z-50 text-forest">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {isMenuOpen && (
        <div onClick={() => setIsMenuOpen(false)} className="lg:hidden fixed inset-0" />
      )}

      <nav className={`${isMenuOpen ? 'flex' : 'hidden'} lg:flex w-3/4 lg:w-1/4 bg-taupe flex-col fixed lg:relative inset-0 lg:inset-auto z-40`}>
        <div className="p-4 pt-16 lg:pt-4">
          <h1 className="text-navy text-2xl font-bold">Ash</h1>
          <p className="text-navy text-lg">Frontend Engineer</p>
        </div>
        <ul className="flex flex-col flex-1 p-4 text-lg gap-4">
          {NAV_ITEMS.map(item => (
            <NavItem key={item.id}
              isActive={activeSection === item.id}
              onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
            >{item.label}</NavItem>
          ))}
        </ul>
      </nav>
    </>
  );
}

function App() {
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
      <Nav />

      <main className="w-full lg:w-3/4 overflow-y-auto overflow-x-hidden">
        <Section bgColor="bg-sage" id="hello">
          <div data-fade className="gpu-fade flex flex-col items-center gap-4 relative z-10">
            <div className="flex flex-col">
              <h1 className="text-hero leading-tight pl-6">HELLO,</h1>
              <h2 className="text-hero-sub text-navy">i'm ashley</h2>
            </div>
            <p className="text-hero-body text-cream">a frontend engineer</p>
          </div>
        </Section>

        <div className="bg-sage">
          <PetalDivider fillColor="#A8DCC5" />
        </div>

        <Section bgColor="bg-mint" id="journey" className="overflow-hidden">
          <div data-fade className="gpu-fade w-full">
            <div className="journey-illustration hidden lg:block">
              <img src={girlAtDesk} alt="illustration of ash at her desk" className="h-full w-full object-contain object-bottom" />
            </div>

            <div className="flex flex-col lg:hidden w-full pt-16 pb-12">
              <div className="w-[90%] flex-shrink-0 mx-auto">
                <img src={girlAtDesk} alt="illustration of ash at her desk" className="w-full h-auto" />
              </div>
              <div className="journey-mobile-card-overlap blob relative z-10 bg-cream p-8 shadow-xl flex flex-col gap-5 mx-4">
                <p className="font-oswald font-normal text-sm text-sage uppercase tracking-widest">my story</p>
                <blockquote className="story-quote">{STORY_QUOTE}</blockquote>
                {STORY_PARAGRAPHS.map((p, i) => (
                  <p key={i} className="font-oswald text-base text-sage leading-relaxed">{p}</p>
                ))}
              </div>
            </div>

            <div className="journey-desktop-offset hidden lg:flex w-full items-center justify-end pr-16 py-16">
              <div className="journey-desktop-card blob relative z-10 bg-cream p-10 shadow-2xl flex flex-col gap-5">
                <p className="font-oswald font-normal text-sm text-sage uppercase tracking-widest">my story</p>
                <blockquote className="story-quote">{STORY_QUOTE}</blockquote>
                {STORY_PARAGRAPHS.map((p, i) => (
                  <p key={i} className="font-oswald text-base text-sage leading-relaxed">{p}</p>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <MarqueeTicker />

        <Section bgColor="bg-lavender" id="work" className="!items-start">
          <div data-fade className="gpu-fade w-full flex flex-col lg:flex-row min-h-screen lg:pr-10 pt-4 pb-8 lg:py-16">
            <div className="flex-1 flex flex-col justify-center py-6 lg:py-16 px-6">
              <p className="work-heading work-heading-outline work-left">I design it.</p>
              <p className="work-heading work-heading-fill work-right">I build it.</p>
              <p className="work-heading work-heading-outline work-left-sm">I ship it.</p>
            </div>

            <div className="work-checker-panel">
              <div className="checker-card">
                <p className="font-oswald font-normal text-sm text-sage uppercase tracking-widest">tools i use</p>
                <div className="flex flex-col gap-4">
                  {[
                    { label: 'Design', tags: [
                      { name: 'Figma', icon: SiFigma },
                      { name: 'Adobe Creative Suite', icon: AdobeIcon },
                      { name: 'Storybook', icon: SiStorybook },
                    ]},
                    { label: 'Frontend', tags: [
                      { name: 'React', icon: SiReact },
                      { name: 'JavaScript', icon: SiJavascript },
                      { name: 'HTML', icon: SiHtml5 },
                      { name: 'CSS', icon: SiCss },
                      { name: 'Tailwind', icon: SiTailwindcss },
                    ]},
                    { label: 'Backend', tags: [
                      { name: 'Ruby on Rails', icon: SiRubyonrails },
                    ]},
                    { label: 'Workflow', tags: [
                      { name: 'Git', icon: SiGit },
                      { name: 'Jira', icon: SiJira },
                      { name: 'Slack', icon: SiSlack },
                      { name: 'Cursor', icon: CursorIcon },
                      { name: 'Claude Code', icon: SiClaude },
                    ]},
                  ].map(({ label, tags }) => (
                    <div key={label} className="flex flex-col gap-2">
                      <span className="font-oswald font-normal text-xs text-sage uppercase tracking-widest">{label}</span>
                      <div className="flex flex-wrap gap-2">
                        {tags.map(({ name, icon: Icon }) => (
                          <span key={name} className="icon-tooltip bg-cream rounded-full p-2.5 text-navy flex items-center justify-center" data-tooltip={name}>
                            <Icon size={22} />
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Section>

        <div className="bg-lavender">
          <ZigzagDivider fillColor="#FFB6C1" />
        </div>

        <Section bgColor="bg-blush" id="projects">
          <div data-fade className="gpu-fade"><SectionHeading>things i've made</SectionHeading></div>
        </Section>

        <Section bgColor="bg-cream" id="testimonials">
          <div data-fade className="gpu-fade" style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
            <CollageBackground />
          </div>
          <div data-fade className="gpu-fade w-full flex flex-col items-center gap-10 py-16 px-6 relative z-10">
            <TestimonialDeck />
          </div>
        </Section>

        <div className="bg-cream">
          <BlobDivider fillColor="#7EB89E" />
        </div>

        <Section bgColor="bg-sage" id="contact">
          <div data-fade className="gpu-fade w-full flex flex-col items-center gap-10 py-16 px-6">
            <ContactForm />
          </div>
        </Section>
      </main>
    </div>
  );
}

export default App;
