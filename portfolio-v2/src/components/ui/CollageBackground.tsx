const COLLAGE_WORDS = [
  { text: 'RUMORS',   x: 4,   y: 8,   rotate: -14, size: 102, stroke: false, color: '#C5B9DB', yPx: -15 },
  { text: 'TALK',     x: 62,  y: 4,   rotate: 9,   size: 160, stroke: true,  color: '#7EB89E', xPx: -200 },
  { text: 'BUZZ',     x: 78,  y: 28,  rotate: -6,  size: 120, stroke: false, color: '#FFB6C1', yPx: -150 },
  { text: 'WHISPERS', x: 28,  y: 82,  rotate: -9,  size: 96,  stroke: true,  color: '#A8DCC5', yPx: -45, xPx: -50 },
  { text: 'CHATTER',  x: 52,  y: 74,  rotate: 16,  size: 108, stroke: false, color: '#FFB6C1', yPx: 50, xPx: 50 },
  { text: 'GOSSIP',   x: 1,   y: 36,  rotate: 21,  size: 100, stroke: true,  color: '#1A2F3F' },
  { text: 'MURMUR',   x: 60,  y: 48,  rotate: -17, size: 104, stroke: false, color: '#A8DCC5', xPx: 150, yPx: -50 },
  { text: 'VOICES',   x: 18,  y: 88,  rotate: 11,  size: 116, stroke: false, color: '#C5B9DB', xPx: -200 },
  { text: 'ECHO',     x: 83,  y: 58,  rotate: -8,  size: 140, stroke: true,  color: '#1A2F3F', xPx: -50, yPx: 50 },
  { text: 'NEWS',     x: 0,   y: 62,  rotate: -15, size: 114, stroke: false, color: '#FFB6C1', xPx: -30, yPx: -25 },
];

export function CollageBackground() {
  return (
    <div className="collage-bg" aria-hidden="true">
      {COLLAGE_WORDS.map((w, i) => (
        <span
          key={i}
          className="collage-word"
          style={{
            left: w.xPx ? `calc(${w.x}% + ${w.xPx}px)` : `${w.x}%`,
            top: w.yPx ? `calc(${w.y}% + ${w.yPx}px)` : `${w.y}%`,
            transform: `rotate(${w.rotate}deg)`,
            fontSize: `${w.size}px`,
            color: w.stroke ? 'transparent' : w.color,
            WebkitTextStroke: w.stroke ? `2px ${w.color}` : 'none',
          }}
        >
          {w.text}
        </span>
      ))}
    </div>
  );
}
