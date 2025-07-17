import React from "react";

const Logo = ({ className = "w-8 h-8", textSize = "text-2xl" }) => {
  return (
    <div className="flex items-center space-x-2">
      {/* Heart with Leaves Logo */}
      <div className={`${className} relative`}>
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          {/* Left leaf sprouting from TOP of heart */}
          <path
            d="M9 1c-1.5 0-2.5 1-2.5 2.5s1 2.5 2.5 2.5c1 0 1.8-0.6 2.2-1.4C11.6 3.8 11.8 3 12 3c0.2 0 0.4 0.8 0.8 1.6C13.2 5.4 14 6 15 6c1.5 0 2.5-1 2.5-2.5S16.5 1 15 1c-1 0-1.8 0.6-2.2 1.4C12.4 3.2 12.2 4 12 4c-0.2 0-0.4-0.8-0.8-1.6C10.8 1.6 10 1 9 1z"
            fill="#22c55e"
          />
          
          {/* Right leaf sprouting from TOP of heart */}
          <path
            d="M15 1c1.5 0 2.5 1 2.5 2.5s-1 2.5-2.5 2.5c-1 0-1.8-0.6-2.2-1.4C12.4 3.8 12.2 3 12 3c-0.2 0-0.4 0.8-0.8 1.6C10.8 5.4 10 6 9 6c-1.5 0-2.5-1-2.5-2.5S7.5 1 9 1c1 0 1.8 0.6 2.2 1.4C11.6 3.2 11.8 4 12 4c0.2 0 0.4-0.8 0.8-1.6C13.2 1.6 14 1 15 1z"
            fill="#22c55e"
          />
          
          {/* Heart shape positioned BELOW the leaves */}
          <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            fill="#16a34a"
            transform="translate(0, 2)"
          />
        </svg>
      </div>
      <span className={`${textSize} font-bold text-green-800`}>CraveKind</span>
    </div>
  );
};

export default Logo;