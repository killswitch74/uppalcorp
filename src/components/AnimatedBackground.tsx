import React from "react";
import Orb from "./Orb";

interface AnimatedBackgroundProps {
  children: React.ReactNode;
  hue?: number;
  hoverIntensity?: number;
  rotateOnHover?: boolean;
  forceHoverState?: boolean;
  className?: string;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
  children,
  hue = 0,
  hoverIntensity = 0.3,
  rotateOnHover = true,
  forceHoverState = false,
  className = "",
}) => {
  return (
    <div className={`relative ${className}`}>
      {/* Background Orb - positioned to receive all mouse events */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute inset-0 opacity-30">
          <Orb
            hue={hue}
            hoverIntensity={hoverIntensity}
            rotateOnHover={rotateOnHover}
            forceHoverState={forceHoverState}
          />
        </div>
      </div>

      {/* Content - with pointer events that don't block background */}
      <div className="relative z-10" style={{ pointerEvents: 'none' }}>
        <div style={{ pointerEvents: 'auto' }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AnimatedBackground;
