export function CloudDivider({ fillColor }: { fillColor: string }) {
  return (
    <div className="cloud-divider-wrapper" style={{ lineHeight: 0 }}>
      <svg viewBox="0 0 1440 160" preserveAspectRatio="none"
        className="cloud-divider-svg" style={{ display: 'block', height: '60px' }}>
        <path fill={fillColor} d="
          M0,160 L0,100
          C80,100 80,40 160,40
          C200,40 220,60 240,60
          C280,60 300,20 360,20
          C420,20 440,70 480,70
          C520,70 540,30 600,30
          C660,30 680,80 720,80
          C760,80 780,35 840,35
          C900,35 920,75 960,75
          C1000,75 1020,25 1080,25
          C1140,25 1160,70 1200,70
          C1240,70 1260,40 1320,40
          C1380,40 1400,90 1440,90
          L1440,160 Z
        " />
      </svg>
    </div>
  );
}
