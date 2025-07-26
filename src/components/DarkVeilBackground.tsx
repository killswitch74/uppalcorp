import React from "react";
import DarkVeil from "./DarkVeil";

interface DarkVeilBackgroundProps {
  children: React.ReactNode;
  hueShift?: number;
  noiseIntensity?: number;
  scanlineIntensity?: number;
  speed?: number;
  scanlineFrequency?: number;
  warpAmount?: number;
  resolutionScale?: number;
  className?: string;
  opacity?: number;
}

const DarkVeilBackground: React.FC<DarkVeilBackgroundProps> = ({
  children,
  hueShift = 0,
  noiseIntensity = 0.02,
  scanlineIntensity = 0.1,
  speed = 0.5,
  scanlineFrequency = 0.01,
  warpAmount = 0.3,
  resolutionScale = 1,
  className = "",
  opacity = 0.4,
}) => {
  return (
    <div className={`relative ${className}`}>
      {/* Background DarkVeil - allow pointer events to pass through */}
      <div className="absolute inset-0 overflow-hidden z-0" style={{ pointerEvents: 'none' }}>
        <div className="absolute inset-0" style={{ opacity, pointerEvents: 'none' }}>
          <DarkVeil
            hueShift={hueShift}
            noiseIntensity={noiseIntensity}
            scanlineIntensity={scanlineIntensity}
            speed={speed}
            scanlineFrequency={scanlineFrequency}
            warpAmount={warpAmount}
            resolutionScale={resolutionScale}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default DarkVeilBackground;
