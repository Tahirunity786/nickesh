import Image from "next/image";
import { memo } from "react";

// Reusable Card Component
const Card = ({ data }) => {
  return (
    <div className="relative flex justify-center items-center w-full py-12">
      {/* SVG Dotted Line */}
      <svg
        className="absolute top-10 md:top-16 w-full h-auto"
        viewBox="0 0 1000 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 100 Q 500 -50 900 100"
          stroke="black"
          strokeWidth="2"
          strokeDasharray="8,8"
          fill="transparent"
        />
      </svg>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
        {data.map(({ icon, bgColor, title, text }, index) => (
          <div key={index} className="relative flex flex-col items-center">
            {/* Circle Icon */}
            <div
              className={`w-16 h-16 ${bgColor} rounded-full flex items-center justify-center absolute -top-8`}
            >
              <Image src={icon} width={30} height={30} alt={title} priority />
            </div>

            {/* Card Box */}
            <div className="bg-white p-6 rounded-lg shadow-md border max-w-xs text-center">
              <h4 className="text-lg font-semibold text-gray-900">{title}</h4>
              <p className="text-gray-600 mt-2">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Memoizing for Performance Optimization
export default memo(Card);
