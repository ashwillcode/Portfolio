export function ZigzagDivider({ fillColor }: { fillColor: string }) {
  const toothW = 220;
  const h = 48;
  const count = 12;
  let d = `M0,${h}`;
  for (let i = 0; i < count; i++) {
    const x = i * toothW;
    d += ` L${x + toothW / 2},0 L${x + toothW},${h}`;
  }
  d += ` L${count * toothW},60 L0,60 Z`;
  return (
    <div className="zigzag-divider-wrapper">
      <svg viewBox={`0 0 ${count * toothW} 60`} className="zigzag-divider-svg" preserveAspectRatio="none">
        <path fill={fillColor} d={d} />
      </svg>
    </div>
  );
}
