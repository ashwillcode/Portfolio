import { useState } from 'react';
import { SiJavascript, SiHtml5, SiCss, SiBootstrap, SiRubyonrails, SiJson, SiReact, SiTypescript, SiTailwindcss, SiFramer, SiVite, SiFigma } from 'react-icons/si';
import type { IconType } from 'react-icons';
import { PROJECTS } from '../data/projects';


const TECH_ICONS: Record<string, IconType> = {
  'JavaScript':    SiJavascript,
  'HTML5':         SiHtml5,
  'CSS3':          SiCss,
  'Bootstrap 5':   SiBootstrap,
  'Ruby on Rails': SiRubyonrails,
  'JSON':          SiJson,
  'React':         SiReact,
  'TypeScript':    SiTypescript,
  'Tailwind CSS':  SiTailwindcss,
  'Tailwind':      SiTailwindcss,
  'Framer Motion': SiFramer,
  'Vite':          SiVite,
  'Figma':         SiFigma,
  'HTML':          SiHtml5,
  'CSS':           SiCss,
};

export function ProjectDetailPanel({ selectedProject, onClose }: {
  selectedProject: string;
  onClose: () => void;
}) {
  const project = PROJECTS.find(p => p.id === selectedProject);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  return (
    <>
    {lightboxSrc && (
      <div
        className="fixed inset-0 z-[60] bg-sage flex items-center justify-center"
        onClick={() => setLightboxSrc(null)}
      >
        <button
          onClick={() => setLightboxSrc(null)}
          className="absolute top-4 right-4 text-navy hover:text-cream text-2xl font-bold z-10 transition-colors duration-200"
        >
          ✕
        </button>
        <img
          src={lightboxSrc}
          alt="enlarged screenshot"
          className="w-full h-full object-contain p-4 md:p-8"
          onClick={e => e.stopPropagation()}
        />
      </div>
    )}
    <div
      className="fixed top-0 right-0 h-full bg-taupe z-50 shadow-2xl overflow-y-auto"
      style={{ width: '100vw', animation: 'slideIn 0.4s ease-out' }}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-navy hover:text-cream text-2xl font-bold z-10"
      >
        ✕
      </button>

      <div className="p-8 md:p-12 pt-16 max-w-3xl mx-auto flex flex-col gap-8">
        <div>
          <p className="text-sm text-sage uppercase tracking-widest font-oswald mb-2">project details</p>
          <h2 className="text-4xl text-navy font-bold" style={{ fontFamily: 'Anton, sans-serif' }}>
            {project?.title}
          </h2>
        </div>

        {project?.video ? (
          <video
            src={project.video}
            className="rounded-2xl w-full object-cover shadow-lg"
            style={{ maxHeight: '420px' }}
            controls
            playsInline
          />
        ) : project?.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="rounded-2xl w-full object-cover shadow-lg"
            style={{ maxHeight: '420px' }}
          />
        ) : (
          <div className="bg-lavender rounded-2xl w-full" style={{ height: '400px' }} />
        )}

        {project?.fullDescription && (
          <p className="font-oswald text-navy text-lg leading-relaxed">
            {project.fullDescription}
          </p>
        )}

        {project?.sections && project.sections.map(section => (
          <div key={section.heading} className="flex flex-col gap-3">
            <p className="text-sm text-sage uppercase tracking-widest font-oswald">
              {section.heading}
            </p>
            {section.body && (
              <p className="font-oswald text-navy text-base leading-relaxed">{section.body}</p>
            )}
            {section.items && (
              <ul className="flex flex-col gap-2">
                {section.items.map(item => (
                  <li key={item} className="font-oswald text-navy text-base leading-relaxed flex gap-3">
                    <span className="text-blush flex-shrink-0">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
            {section.images && (
              <div className="flex gap-3 overflow-x-auto pb-2" style={{ scrollbarWidth: 'thin', scrollbarColor: '#FFB6C1 transparent' }}>
                {section.images.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`${section.heading} screenshot ${i + 1}`}
                    className="rounded-xl flex-shrink-0 object-cover shadow-md cursor-pointer hover:opacity-90 transition-opacity"
                    style={{ height: '220px', width: 'auto' }}
                    onClick={() => setLightboxSrc(src)}
                  />
                ))}
              </div>
            )}
          </div>
        ))}

        {project?.techStack && project.techStack.length > 0 && (
          <div className="flex flex-col gap-3">
            <p className="text-sm text-sage uppercase tracking-widest font-oswald">built with</p>
            <div className="flex flex-wrap gap-2 items-center">
              {[
                ...project.techStack.filter(t => TECH_ICONS[t]),
                ...project.techStack.filter(t => !TECH_ICONS[t]),
              ].map((tech) => {
                const Icon = TECH_ICONS[tech];
                return Icon ? (
                  <span
                    key={tech}
                    className="icon-tooltip bg-cream rounded-full p-2.5 text-navy flex items-center justify-center"
                    data-tooltip={tech}
                  >
                    <Icon size={22} />
                  </span>
                ) : (
                  <span
                    key={tech}
                    className="bg-cream text-navy font-oswald text-sm px-4 py-2 rounded-full flex items-center justify-center"
                  >
                    {tech}
                  </span>
                );
              })}
            </div>
          </div>
        )}

        {(project?.github || project?.liveDemo || project?.mapFile) && (
          <div className="flex flex-wrap gap-4">
            {project.mapFile && (
              <a
                href={project.mapFile}
                download="dashboard-map-file.tmj"
                className="nav-social-btn font-oswald uppercase tracking-widest text-sm px-6 py-3 rounded-full"
                style={{ width: 'auto', height: 'auto', borderRadius: '9999px' }}
              >
                View Map File
              </a>
            )}
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-social-btn font-oswald uppercase tracking-widest text-sm px-6 py-3 rounded-full"
                style={{ width: 'auto', height: 'auto', borderRadius: '9999px' }}
              >
                Live Demo
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-social-btn font-oswald uppercase tracking-widest text-sm px-6 py-3 rounded-full"
                style={{ width: 'auto', height: 'auto', borderRadius: '9999px' }}
              >
                GitHub
              </a>
            )}
          </div>
        )}

        {!project?.fullDescription && !project?.sections && (
          <p className="text-navy font-oswald mt-6">Project content coming soon.</p>
        )}
      </div>
    </div>
    </>
  );
}
