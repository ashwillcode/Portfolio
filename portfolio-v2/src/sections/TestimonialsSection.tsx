import { Section } from '../components/layout/Section';
import { CollageBackground } from '../components/ui/CollageBackground';
import { TestimonialDeck } from '../components/ui/TestimonialDeck';

export function TestimonialsSection() {
  return (
    <Section bgColor="bg-cream" id="testimonials">
      <div data-fade className="gpu-fade" style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <CollageBackground />
      </div>
      <div data-fade className="gpu-fade w-full flex flex-col items-center gap-10 py-16 px-6 relative z-10">
        <TestimonialDeck />
      </div>
    </Section>
  );
}
