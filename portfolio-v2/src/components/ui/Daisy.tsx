export function Daisy({ color, size = 30 }: { color: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      {[0, 72, 144, 216, 288].map((angle) => (
        <ellipse key={angle} cx="6" cy="3.5" rx="1.6" ry="2.5" fill={color} transform={`rotate(${angle} 6 6)`} />
      ))}
      <circle cx="6" cy="6" r="1.2" fill="#FFB6C1" />
    </svg>
  );
}
