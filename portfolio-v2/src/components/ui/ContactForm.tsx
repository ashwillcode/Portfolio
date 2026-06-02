import { useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    try {
      const res = await fetch('https://formspree.io/f/xgoqygjq', {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (res.ok) setSubmitted(true);
    } catch {
      // network failure — button resets so user can retry
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="contact-success">
        <p className="contact-success-text">Message sent — I'll be in touch soon!</p>
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
