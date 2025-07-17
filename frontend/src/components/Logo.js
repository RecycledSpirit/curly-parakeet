import React from "react";

const Logo = ({ className = "w-8 h-8", textSize = "text-2xl" }) => {
  return (
    <div className="flex items-center space-x-2">
      {/* Heart with Leaves Logo */}
      <div className={`${className} relative`}>
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          {/* Heart shape */}
          <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            fill="#16a34a"
          />
          {/* Left leaf sprouting from top */}
          <path
            d="M8 3c-2 0-3 1-3 3 0 2 1 3 3 3 1 0 2-1 3-2 1-1 1-2 1-3 0-1-1-1-2-1h-2z"
            fill="#22c55e"
          />
          {/* Right leaf sprouting from top */}
          <path
            d="M16 3c2 0 3 1 3 3 0 2-1 3-3 3-1 0-2-1-3-2-1-1-1-2-1-3 0-1 1-1 2-1h2z"
            fill="#22c55e"
          />
          {/* Center leaf/stem */}
          <path
            d="M12 1c-0.5 0-1 0.5-1 1v3c0 0.5 0.5 1 1 1s1-0.5 1-1V2c0-0.5-0.5-1-1-1z"
            fill="#22c55e"
          />
          {/* Small leaves on stem */}
          <ellipse cx="10" cy="2.5" rx="1.5" ry="0.8" fill="#22c55e" transform="rotate(-45 10 2.5)"/>
          <ellipse cx="14" cy="2.5" rx="1.5" ry="0.8" fill="#22c55e" transform="rotate(45 14 2.5)"/>
        </svg>
      </div>
      <span className={`${textSize} font-bold text-green-800`}>CraveKind</span>
    </div>
  );
};

export default Logo;