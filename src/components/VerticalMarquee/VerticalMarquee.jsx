import React from "react";
import Image from "next/image";

const VerticalMarqueeCarousel = ({ data, direction }) => {
  const isBottomToTop = direction === "bottomToTop";

  return (
    <section
      className="overflow-hidden"
      style={{
        width: "100%",
        height: "500px",
        position: "relative",
      }}
    >
      {/* Wrapping div for animation */}
      <div
        className={`marquee-wrapper ${isBottomToTop ? "bottom-to-top" : "top-to-bottom"}`}
      >
        {/* Duplicate data for seamless looping */}
        {[...data, ...data].map((item, index) => (
          <div
            className="card shadow-sm border border-light rounded-2 mb-3"
            key={`${item.id}-${index}`}
            style={{ marginBottom: "16px" }}
          >
            <div className="ps-2 pe-2">
              <Image
                src={item.image}
                className="card-img-top"
                alt="certificate"
                width={300}
                height={120}
              />
            </div>
            <div className="card-body pt-1 pb-1">
              <div className="d-flex justify-content-between mb-1">
                <div className="d-flex justify-content-start align-items-center">
                  <div
                    style={{
                      backgroundColor: "wheat",
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      overflow: "hidden",
                      marginRight: "8px",
                    }}
                  >
                    <Image
                      src={item.user}
                      width={40}
                      height={40}
                      alt="real user"
                    />
                  </div>
                  <div>
                    <h6 className="mb-1" style={{ fontWeight: "bold" }}>
                      Yatinder
                    </h6>
                    <p className="mb-0" style={{ fontSize: "12px" }}>
                      9 days ago
                    </p>
                  </div>
                </div>
                <div>
                  <span className="badge text-bg-primary">Score 10/10</span>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex justify-content-between align-items-center">
                  {[...Array(5)].map((_, index) => (
                    <Image
                      key={index}
                      src={"/Images/star.svg"}
                      width={15}
                      height={15}
                      alt="star"
                      className="me-1"
                    />
                  ))}
                </div>
                <div>
                  <span
                    className="badge text-bg-primary"
                    style={{ cursor: "pointer" }}
                  >
                    certificate
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Animation Styles */}
      <style>
        {`
          @keyframes vertical-marquee-bottom-to-top {
            0% {
              transform: translateY(0%);
            }
            100% {
              transform: translateY(-50%);
            }
          }

          @keyframes vertical-marquee-top-to-bottom {
            0% {
              transform: translateY(-50%);
            }
            100% {
              transform: translateY(0%);
            }
          }

          .marquee-wrapper {
            display: flex;
            flex-direction: column;
            animation-duration: 80s;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }

          .bottom-to-top {
            animation-name: vertical-marquee-bottom-to-top;
          }

          .top-to-bottom {
            animation-name: vertical-marquee-top-to-bottom;
          }
        `}
      </style>
    </section>
  );
};

export default VerticalMarqueeCarousel;
