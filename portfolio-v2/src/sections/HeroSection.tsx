import { Section } from '../components/layout/Section';

export function HeroSection() {
  return (
    <Section bgColor="bg-sage" id="hello">
      <div data-fade className="gpu-fade flex flex-col items-center gap-4 relative z-10">
        <div className="flex flex-col">
          <h1 className="text-hero leading-tight pl-6">HELLO,</h1>
          <h2 className="text-hero-sub text-navy">i'm ashley</h2>
        </div>
        <p className="text-hero-body text-cream">a frontend engineer</p>
      </div>
    </Section>
  );
}
