import { useState, useEffect } from 'react';
import { FiDownload } from 'react-icons/fi';
import ashleyPhoto from '../../assets/art/ash-portfolio-img.JPEG';
import resumePdf from '../../assets/resume/ASHLEYWILLIAMS-Resume2026.pdf';
import { NAV_ITEMS, SOCIALS } from '../../data/nav';

function NavItem({ children, onClick, isActive }: { children: string; onClick: () => void; isActive: boolean }) {
  return (
    <li
      onClick={onClick}
      className={`cursor-pointer transition-colors ${isActive ? 'text-blush font-bold' : 'text-navy hover:text-blush'}`}
    >
      {children}
    </li>
  );
}

export function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hello');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
    );
    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden fixed top-4 left-4 z-50 text-navy">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {isMenuOpen && (
        <div onClick={() => setIsMenuOpen(false)} className="lg:hidden fixed inset-0" />
      )}

      <nav
        className={`${isMenuOpen ? 'flex' : 'hidden'} lg:flex w-3/4 lg:w-1/4 bg-taupe flex-col fixed lg:relative inset-0 lg:inset-auto z-40`}
      >
        <div className="px-6 pt-16 lg:pt-8 pb-6 flex flex-row gap-4 items-end">
          <div className="blob flex-shrink-0 w-32 h-32 overflow-hidden">
            <img src={ashleyPhoto} alt="Ashley Williams" className="w-full h-full object-cover object-top" />
          </div>
          <div className="flex flex-col pb-1">
            <h1 className="font-anton text-navy text-xl leading-tight">Ashley Williams</h1>
            <p className="font-oswald text-navy text-xs uppercase tracking-widest">Frontend Engineer</p>
          </div>
        </div>

        <ul className="flex flex-col flex-1 p-4 text-lg gap-4">
          {NAV_ITEMS.map(item => (
            <NavItem key={item.id}
              isActive={activeSection === item.id}
              onClick={() => {
                document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                setIsMenuOpen(false);
              }}
            >{item.label}</NavItem>
          ))}
        </ul>

        <div className="px-6 pb-8 flex flex-row gap-3 items-center">
          {SOCIALS.map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="nav-social-btn icon-tooltip" data-tooltip={label}>
              <Icon size={17} />
            </a>
          ))}
          <a href={resumePdf} download aria-label="Download Resume" className="nav-social-btn icon-tooltip" data-tooltip="Resume">
            <FiDownload size={17} />
          </a>
        </div>
      </nav>
    </>
  );
}
