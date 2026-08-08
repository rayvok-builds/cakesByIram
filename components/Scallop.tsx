import React from "react";

interface ScallopProps {
  color: string;
  flip?: boolean;
  className?: string;
}

export const Scallop: React.FC<ScallopProps> = ({ color, flip = false, className = "" }) => {
  return (
    <div
      className={`w-full h-[18px] bg-[length:20px_18px] bg-repeat-x block relative z-10 m-0 p-0 pointer-events-none ${
        flip ? "rotate-180" : ""
      } ${className}`}
      style={{
        backgroundImage: `radial-gradient(circle at 10px 0, transparent 9px, ${color} 9.5px)`,
      }}
      aria-hidden="true"
    />
  );
};
