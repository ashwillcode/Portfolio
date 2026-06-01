import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { TESTIMONIALS, CARD_COLORS } from '../../data/testimonials';

export function TestimonialDeck() {
  const [current, setCurrent] = useState(0);
  const [, setDirection] = useState(1);
  const interacted = useRef(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const n = TESTIMONIALS.length;

  const startInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      interacted.current = true;
      setDirection(1);
      setCurrent(i => (i + 1) % n);
    }, 4000);
  };

  useEffect(() => {
    startInterval();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  const advance = (dir: number) => {
    interacted.current = true;
    setDirection(dir);
    setCurrent(i => (i + dir + n) % n);
    startInterval();
  };

  return (
    <div className="testimonial-deck-wrapper">
      <div className="testimonial-stack">
        <AnimatePresence>
          <motion.div
            key={current}
            style={{ position: 'absolute', inset: 0, background: CARD_COLORS[current] }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="testimonial-card"
          >
            <span className="quote-mark-top">"</span>
            <blockquote className="testimonial-quote">{TESTIMONIALS[current].quote}</blockquote>
            <div className="testimonial-meta">
              <p className="testimonial-name">{TESTIMONIALS[current].name}</p>
              <p className="testimonial-role">{TESTIMONIALS[current].role}</p>
            </div>
            <span className="quote-mark-bottom">"</span>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="testimonial-controls">
        <button onClick={() => advance(-1)} className="testimonial-btn" aria-label="Previous"><FiChevronLeft size={22} /></button>
        <div className="testimonial-dots">
          {Array.from({ length: n }).map((_, i) => (
            <span key={i} className={`testimonial-dot${i === current ? ' testimonial-dot--active' : ''}`} />
          ))}
        </div>
        <button onClick={() => advance(1)} className="testimonial-btn" aria-label="Next"><FiChevronRight size={22} /></button>
      </div>
    </div>
  );
}
