import girlAtDesk from '../assets/art/girl_at_desk.PNG';
import { STORY_QUOTE, STORY_PARAGRAPHS } from '../data/story';
import { Section } from '../components/layout/Section';

export function JourneySection() {
  return (
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
  );
}
