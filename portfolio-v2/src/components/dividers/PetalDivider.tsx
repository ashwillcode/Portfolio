export function PetalDivider({ fillColor }: { fillColor: string }) {
  return (
    <div className="petal-divider-wrapper">
      <svg viewBox="0 0 1760 100" className="petal-divider-svg" preserveAspectRatio="none">
        <path
          fill={fillColor}
          d="M0,100
             Q80,40 160,100 Q240,40 320,100 Q400,40 480,100 Q560,40 640,100
             Q720,40 800,100 Q880,40 960,100 Q1040,40 1120,100 Q1200,40 1280,100
             Q1360,40 1440,100 Q1520,40 1600,100 Q1680,40 1760,100
             L1760,100 L0,100 Z"
        />
      </svg>
    </div>
  );
}
