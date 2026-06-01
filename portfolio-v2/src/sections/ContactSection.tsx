import { Section } from '../components/layout/Section';
import { ContactForm } from '../components/ui/ContactForm';

export function ContactSection() {
  return (
    <Section bgColor="bg-sage" id="contact">
      <div data-fade className="gpu-fade w-full flex flex-col items-center gap-10 py-16 px-6">
        <ContactForm />
      </div>
    </Section>
  );
}
