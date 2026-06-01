import {
  SiFigma, SiStorybook,
  SiReact, SiTypescript, SiJavascript, SiHtml5, SiCss, SiTailwindcss,
  SiRubyonrails,
  SiGit, SiJira, SiSlack, SiClaude,
} from 'react-icons/si';
import { AdobeIcon } from '../icons/AdobeIcon';
import { CursorIcon } from '../icons/CursorIcon';
import { Section } from '../components/layout/Section';

const TOOL_GROUPS = [
  { label: 'Design', tags: [
    { name: 'Figma',                icon: SiFigma    },
    { name: 'Adobe Creative Suite', icon: AdobeIcon  },
    { name: 'Storybook',            icon: SiStorybook },
  ]},
  { label: 'Frontend', tags: [
    { name: 'React',       icon: SiReact      },
    { name: 'TypeScript',  icon: SiTypescript },
    { name: 'JavaScript',  icon: SiJavascript },
    { name: 'HTML',        icon: SiHtml5      },
    { name: 'CSS',         icon: SiCss        },
    { name: 'Tailwind',    icon: SiTailwindcss },
  ]},
  { label: 'Backend', tags: [
    { name: 'Ruby on Rails', icon: SiRubyonrails },
  ]},
  { label: 'Workflow', tags: [
    { name: 'Git',        icon: SiGit      },
    { name: 'Jira',       icon: SiJira     },
    { name: 'Slack',      icon: SiSlack    },
    { name: 'Cursor',     icon: CursorIcon },
    { name: 'Claude Code', icon: SiClaude  },
  ]},
];

export function WorkSection() {
  return (
    <Section bgColor="bg-lavender" id="work" className="!items-start">
      <div data-fade className="gpu-fade w-full flex flex-col lg:flex-row min-h-[85vh] lg:pr-10 pt-4 pb-8 lg:py-16">
        <div className="flex-1 flex flex-col justify-center py-6 lg:py-16 px-6">
          <p className="work-heading work-heading-outline work-left">I design it.</p>
          <p className="work-heading work-heading-fill work-right">I build it.</p>
          <p className="work-heading work-heading-outline work-left-sm">I ship it.</p>
        </div>

        <div className="work-checker-panel">
          <div className="checker-card">
            <p className="font-oswald font-normal text-sm text-sage uppercase tracking-widest">tools i use</p>
            <div className="flex flex-col gap-4">
              {TOOL_GROUPS.map(({ label, tags }) => (
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
  );
}
