"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";


const Carousel = ({ cards = [] }) => {
  const [index, setIndex] = useState(0);
  const itemsPerPage = 4;

  if (cards.length === 0) {
    return <p className="text-center text-secondary">No cards available</p>;
  }

  const nextSlide = () => {
    setIndex((prev) => (prev + itemsPerPage < cards.length ? prev + itemsPerPage : 0));
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - itemsPerPage >= 0 ? prev - itemsPerPage : cards.length - itemsPerPage));
  };

  return (
    <div className="container py-5 position-relative">
      {/* Left Button */}
      <button
        onClick={prevSlide}
        className="btn btn-light position-absolute top-50 start-0 translate-middle-y shadow-sm" style={{ zIndex: "100" }}
      >
        <ChevronLeft size={24} />
      </button>

      {/* Cards Container */}
      <div className="row row-cols-1 row-cols-md-4 g-4 justify-content-center">
        <AnimatePresence mode="wait">
          {cards.slice(index, index + itemsPerPage).map((card, i) => (
            <motion.div
              key={card.id}
              className="col"
              initial={{ opacity: 0, scale: 0.8, x: i % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: i % 2 === 0 ? 50 : -50 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="card h-100 shadow-sm border border-light rounded-4">
                <div className="card-body">
                  <Image
                    src={card.image}
                    width={70}
                    height={50}
                    alt={card.title}
                    className="mb-3"
                  />
                  <h5 className="card-title fw-bold">{card.title}</h5>
                  <p className="card-text text-muted mb-0">{card.slogan}</p>
                  <span style={{ fontSize: "12px", marginBottom: "15px" }}>Real exam level questions</span>
                  <div className="d-flex justify-content-start align-items-center mt-3">

                    <div className="me-2">
                      <Image
                        src={'/Images/crimage2.svg'}
                        width={18}
                        height={15}
                        alt="book"
                      />
                    </div>
                    <span className="mb-0" style={{fontSize:"14px"}}>{card.questions}</span>
                  </div>
                  <div className="d-flex justify-content-start align-items-center">

                    <div className="me-2">
                      <Image
                        src={'/Images/crimage1.svg'}
                        width={18}
                        height={15}
                        alt="group"
                      />
                    </div>
                    <span className="mb-0" style={{fontSize:"14px"}}>{card.activeUsers}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

      </div>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        className="btn btn-light position-absolute top-50 end-0 translate-middle-y shadow-sm" style={{ zIndex: "100" }}
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default Carousel;
