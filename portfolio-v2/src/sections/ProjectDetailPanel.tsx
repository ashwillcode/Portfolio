import { PROJECTS } from '../data/projects';

export function ProjectDetailPanel({ selectedProject, onClose }: {
  selectedProject: string;
  onClose: () => void;
}) {
  const project = PROJECTS.find(p => p.id === selectedProject);

  return (
    <div
      className="fixed top-0 right-0 h-full bg-cream z-50 shadow-2xl overflow-y-auto"
      style={{ width: '100vw', animation: 'slideIn 0.4s ease-out' }}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-navy hover:text-blush text-2xl font-bold z-10"
      >
        ✕
      </button>
      <div className="p-12 pt-16">
        <p className="text-sm text-sage uppercase tracking-widest font-oswald mb-2">project details</p>
        <h2 className="text-4xl text-navy font-bold mb-8" style={{ fontFamily: 'Anton, sans-serif' }}>
          {project?.title}
        </h2>
        <div className="bg-lavender rounded-2xl w-full" style={{ height: '400px' }} />
        <p className="text-navy font-oswald mt-6">Project content coming soon.</p>
      </div>
    </div>
  );
}
