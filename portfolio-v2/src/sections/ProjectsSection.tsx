import { PROJECTS } from '../data/projects';
import { Section } from '../components/layout/Section';

export function ProjectsSection({ onSelectProject }: { onSelectProject: (id: string) => void }) {
  return (
    <Section bgColor="bg-blush" id="projects">
      <div data-fade className="gpu-fade w-full py-16 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-4xl mx-auto">
          {PROJECTS.map(project => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project.id)}
              className="cursor-pointer hover:scale-105 transition-transform duration-200 flex flex-col gap-3"
            >
              <div className="bg-lavender rounded-2xl w-full" style={{ height: '200px' }} />
              <p className="font-oswald font-bold text-navy text-lg">{project.title}</p>
              <p className="font-oswald text-sage text-sm">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
