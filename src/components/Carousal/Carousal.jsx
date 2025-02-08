"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const UltraMarqueeCarousel = ({ cards = [] }) => {
  if (cards.length === 0) {
    return <p className="text-center text-secondary">No cards available</p>;
  }

  return (
    <section className="overflow-hidden" style={{ width: "100%", height: "auto", position: "relative" }}>
      <motion.div
        className="d-flex"
        style={{ width: "max-content" }}
        animate={{ x: ["-50%", "0%"] }}
        transition={{ repeat: Infinity, duration: 100, ease: "linear" }}
      >
        {[...cards, ...cards].map((card, index) => (
          <div key={index} className="mx-3 p-3">
            <div className="card h-100 shadow-sm border border-light rounded-4" style={{ width: "250px" }}>
              <div className="card-body">
                <Image
                  src={card.image}
                  width={70}
                  height={50}
                  alt={card.title}
                  className="mb-3"
                  priority
                />
                <h5 className="card-title fw-bold">{card.title}</h5>
                <p className="card-text text-muted mb-0" style={{ fontSize: "12px", fontWeight: "bold" }}>{card.slogan}</p>
                <span style={{ fontSize: "12px" }}>Real exam level questions</span>
                <div className="d-flex justify-content-start align-items-center mt-3">
                  <div className="me-2">
                    <Image src={'/Images/crimage2.svg'} width={18} height={15} alt="book" />
                  </div>
                  <span className="mb-0" style={{ fontSize: "14px" }}>{card.questions}</span>
                </div>
                <div className="d-flex justify-content-start align-items-center">
                  <div className="me-2">
                    <Image src={'/Images/crimage1.svg'} width={18} height={15} alt="group" />
                  </div>
                  <span className="mb-0" style={{ fontSize: "14px" }}>{card.activeUsers}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default UltraMarqueeCarousel;
