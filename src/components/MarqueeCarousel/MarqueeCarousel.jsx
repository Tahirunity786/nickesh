import React from "react";

const MarqueeCarousel = () => {
  return (
    <section className="overflow-hidden" style={{ width: "100%", height: "150px", position: "relative" }}>
      <div className="whitespace-nowrap flex animate-marquee">
        {[...Array(10)].map((_, index) => (
          <img
            key={index}
            src={`/Images/${index + 1}.svg`}
            alt={`Image ${index + 1}`}
            className="mx-4 p-4"
            width={500}
            height={500}
            style={{ width: "250px", height: "200px" }}
          />
        ))}
        {[...Array(10)].map((_, index) => (
          <img
            key={`duplicate-${index}`}
            src={`/Images/${index + 1}.svg`}
            alt={`Image ${index + 1}`}
            className="mx-4 p-4 "
            width={500}
            height={500}
            style={{ width: "250px", height: "200px" }}
          />
        ))}
      </div>

      <style>
        {`
          @keyframes marquee {
            from {
              transform: translateX(-50%);
            }
            to {
              transform: translateX(0);
            }
          }

          .animate-marquee {
            display: flex;
            gap: 1rem;
            animation: marquee 50s linear infinite;
            width: max-content;
          }
        `}
      </style>
    </section>
  );
};

export default MarqueeCarousel;
