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
          {/* Left leaf */}
          <path
            d="M7 2c-1.5 0-2.5 1-2.5 2.5 0 1.5 1 2.5 2.5 2.5 0.5 0 1-0.2 1.4-0.6L9 5.5c0.3-0.4 0.5-0.9 0.5-1.5C9.5 3 8.5 2 7 2z"
            fill="#22c55e"
          />
          {/* Right leaf */}
          <path
            d="M17 2c1.5 0 2.5 1 2.5 2.5 0 1.5-1 2.5-2.5 2.5-0.5 0-1-0.2-1.4-0.6L15 5.5c-0.3-0.4-0.5-0.9-0.5-1.5C14.5 3 15.5 2 17 2z"
            fill="#22c55e"
          />
        </svg>
      </div>
      <span className={`${textSize} font-bold text-green-800`}>CraveKind</span>
    </div>
  );
};

export default Logo;