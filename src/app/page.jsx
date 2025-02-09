import Image from "next/image";
import styles from "./page.module.css";
import MarqueeCarousel from "@/components/MarqueeCarousel/MarqueeCarousel";
import UltraMarqueeCarousel from "@/components/Carousal/Carousal";
import data from '@/app/icData'
import Faqa from "@/components/Faqs/Faqa";
export default function Home() {


  return (
    <>
      <section className="container mt-5">
        <div className="row">
          <div className="col-lg-7">
            <span className={`${styles.headerTag} mb-4`}>99% Accurate Database</span>
            <h1 className={`${styles.mainHeading} mb-4`}>Your Success <br />
              Start With  ATPL Pro</h1>
            <p className={'mb-5'}>
              ATPL Pro empowers aspiring pilots worldwide with comprehensive ATPL
              courses and cutting-edge study resources.
            </p>
            <button className={styles.mainButton}>
              Get Started
            </button>

          </div>
          <div className="col-lg-5" style={{ position: "relative" }}>
            <div className={`${styles.flowtingDiv} ${styles.float}`}>
              <div className={`${styles.circleItem}`} style={{ backgroundColor: "#12BB6A" }}>
                <Image
                  src={'/Images/icon2.svg'}
                  width={30}
                  height={30}
                  alt="icon"
                />
              </div>
              <div className={`${styles.floatContent}`}>
                <h6>Total Students</h6>
                <p>17K</p>
              </div>
            </div>
            <div className={`${styles.flowtingDivLower} ${styles.float}`}>
              <div className={`${styles.circleItem}`} style={{ position: "absolute", top: "-20px", backgroundColor: "#8121FB" }}>
                <Image
                  src={'/Images/icon1.svg'}
                  width={30}
                  height={30}
                  alt="icon"
                />
              </div>
              <div className={`${styles.floatContent}`} style={{ background: "#F5F5F5", padding: "10px 15px", borderRadius: "10px" }}>
                <h6 className="mt-4">Certified Pilots</h6>
                <p className="mb-0">16K</p>
              </div>
            </div>
            <div className={styles.superImage}>

              <Image
                src={'Images/pilot-super.svg'}
                width={500}
                height={500}
                alt="super image"
                priority
              />
            </div>
          </div>
        </div>

      </section>
      <MarqueeCarousel />
      <section className="container" style={{ marginTop: "50px", marginBottom: "50px", height: "auto", position: "relative" }}>
        <div className="text-center mb-4">
          <h4 style={{ fontWeight: "bold", marginBottom: "70px" }}>Your Path To ATPL Success</h4>
        </div>

        <svg className={styles.curveLineleft} width="50%" height="180" viewBox="0 0 300 150" xmlns="http://www.w3.org/2000/svg">
          <path d="M 10 110 A 160 80 0 0 1 290 110"
            stroke="black"
            fill="transparent"
            strokeWidth="2"
            strokeDasharray="5,5"
            transform="translate(0, 40)" />
        </svg>
        <svg className={styles.curveLineRight} width="50%" height="180" viewBox="0 0 300 150" xmlns="http://www.w3.org/2000/svg">
          <path d="M 10 110 A 160 80 0 0 1 290 110"
            stroke="black"
            fill="transparent"
            strokeWidth="2"
            strokeDasharray="5,5"
            transform="translate(0, 40)" />
        </svg>




        <div className="row">
          <div className="col-lg-4 p-3" style={{ position: "relative" }}>
            <div className={`${styles.circleItem}`} style={{ backgroundColor: "#1A73E8", position: "absolute", zIndex: "100", top: "-20px", left: "44%", right: "44%" }}>
              <Image
                src={'/Images/plane-tilt.svg'}
                width={25}
                height={25}
                alt="icon"
              />
            </div>
            <div className="card h-100 shadow-sm border border-light rounded-4">
              <div className="card-body">
                <h6 style={{ fontWeight: "bold", marginTop: "30px" }}>Tailored Exam Preparation</h6>
                <p className="mb-0">Our question banks serve student pilots, flight schools, and authorities. We offer EASA PPL/ATPL/IR and ICAO sets, ensuring updated, thorough exam prep.</p>

              </div>
            </div>
          </div>
          <div className="col-lg-4 p-3" style={{ position: "relative", top: "50px" }}>
            <div className={`${styles.circleItem}`} style={{ backgroundColor: "#FFA726", position: "absolute", zIndex: "100", top: "-20px", left: "44%", right: "44%" }}>
              <Image
                src={'/Images/icon3.svg'}
                width={25}
                height={25}
                alt="icon"
              />
            </div>
            <div className="card h-100 shadow-sm border border-light rounded-4">
              <div className="card-body">
                <h6 style={{ fontWeight: "bold", marginTop: "30px" }}>Tailored Exam Preparation</h6>
                <p className="mb-0">Our question banks serve student pilots, flight schools, and authorities. We offer EASA PPL/ATPL/IR and ICAO sets, ensuring updated, thorough exam prep.</p>

              </div>
            </div>
          </div>
          <div className="col-lg-4 p-3" style={{ position: "relative" }}>
            <div className={`${styles.circleItem}`} style={{ backgroundColor: "#12BB6A", position: "absolute", zIndex: "100", top: "-20px", left: "44%", right: "44%" }}>
              <Image
                src={'/Images/chart-pie.svg'}
                width={25}
                height={25}
                alt="icon"
              />
            </div>
            <div className="card h-100 shadow-sm border border-light rounded-4">
              <div className="card-body">
                <h6 style={{ fontWeight: "bold", marginTop: "30px" }}>Tailored Exam Preparation</h6>
                <p className="mb-0">Our question banks serve student pilots, flight schools, and authorities. We offer EASA PPL/ATPL/IR and ICAO sets, ensuring updated, thorough exam prep.</p>

              </div>
            </div>
          </div>
        </div>
      </section>
      <section style={{ marginTop: "100px", marginBottom: "50px", backgroundColor: "#F5F5F5", paddingTop: "50px" }}>
        <div className="mb-3 text-center">
          <h4 style={{ fontWeight: "bold", marginBottom: "20px" }}>Our Database Contains Following <span style={{ color: "#1A73E8" }}>Countries</span></h4>
          <p>Choose your aviation authority to access region-specific ATPL exam questions and study materials</p>
        </div>
        <UltraMarqueeCarousel cards={data.cards} />
        <div style={{ position: "relative", marginTop: "100px", height: "auto" }} className="text-end">
          <Image
            src={'/Images/11.svg'}
            width={132}
            height={82}
            alt="aeroplane"
            style={{ position: "absolute", top: "-50px", right: "10%" }}
          />
          <Image
            src={'/Images/12.svg'}
            width={498}
            height={106}
            alt="aeroplane"

          />
        </div>

      </section>
      <section className="container" style={{ marginBottom: "50px" }}>
        <div className="mb-3 text-center">
          <h4 style={{ fontWeight: "bold" }}>Our Success Stories</h4>
        </div>
        <div className="row" style={{ marginBottom: "50px" }}>
          <div className="col-lg-3">
            <div className="card h-100 shadow-sm border border-light rounded-4">
              <div className="card-body text-center">
                <div className="text-center mb-2">
                  <Image
                    src={'/Images/users.svg'}
                    width={25}
                    height={25}
                    alt="users"
                  />
                </div>
                <h6 style={{ fontWeight: "bold" }}>17,000+</h6>
                <p className="mb-0">Students Trained</p>

              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card h-100 shadow-sm border border-light rounded-4">
              <div className="card-body text-center">
                <div className="text-center mb-2">
                  <Image
                    src={'/Images/graduation-cap.svg'}
                    width={25}
                    height={25}
                    alt="users"
                  />
                </div>
                <h6 style={{ fontWeight: "bold" }}>99%</h6>
                <p className="mb-0">Pass Rate</p>

              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card h-100 shadow-sm border border-light rounded-4">
              <div className="card-body text-center">
                <div className="text-center mb-2">
                  <Image
                    src={'/Images/blue-star.svg'}
                    width={25}
                    height={25}
                    alt="users"
                  />
                </div>
                <h6 style={{ fontWeight: "bold" }}>4.95</h6>
                <p className="mb-0">Students Rating</p>

              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card shadow-sm border border-light rounded-4">
              <div className="card-body text-center">
                <div className="text-center mb-2">
                  <Image
                    src={'/Images/book-open.svg'}
                    width={25}
                    height={25}
                    alt="users"
                  />
                </div>
                <h6 style={{ fontWeight: "bold" }}>14</h6>
                <p className="mb-0">Course Modules</p>

              </div>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-lg-6">
            <p>When you choose ATPL Pro, you tap into years of aviation expertise. Our cutting-edge platform, combined with top-tier instructors, ensures you’re more than just ‘exam ready’—you’re ready to thrive in the cockpit. Whether you’re targeting EASA, FAA, or other regulatory exams, trust our proven approach to help you soar.</p>
            <div className="card shadow-sm border border-light rounded-4 mb-3">
              <div className="card-body d-flex justify-content-start">
                <div className="text-center mb-2 me-3">
                  <Image
                    src={'/Images/prideBadge.svg'}
                    width={25}
                    height={25}
                    alt="users"
                  />
                </div>
                <div>

                  <h6 style={{ fontWeight: "bold" }}>Industry Leading Database</h6>
                  <p className="mb-0">Comprehensive study materials developed by experienced airline captains</p>

                </div>
              </div>
            </div>
            <div className="card shadow-sm border border-light rounded-4 mb-3">
              <div className="card-body d-flex justify-content-start">
                <div className="text-center mb-2 me-3">
                  <Image
                    src={'/Images/multiUser.svg'}
                    width={25}
                    height={25}
                    alt="users"
                  />
                </div>
                <div>

                  <h6 style={{ fontWeight: "bold" }}>Expert Support</h6>
                  <p className="mb-0">Get guidance from expert support</p>

                </div>
              </div>
            </div>
            <div className="card shadow-sm border border-light rounded-4 mb-3">
              <div className="card-body d-flex justify-content-start">
                <div className="text-center mb-2 me-3">
                  <Image
                    src={'/Images/graduation-cap.svg'}
                    width={25}
                    height={25}
                    alt="users"
                  />
                </div>
                <div>

                  <h6 style={{ fontWeight: "bold" }}>Proven Track Record</h6>
                  <p className="mb-0">Join our community of successful pilots worldwide</p>

                </div>
              </div>
            </div>

            <div className="row w-75 mt-4">
              <div className="col-lg-6">
                <button className={`${styles.btn} ${styles.btnPrimary} mb-3`}>E Shop</button>
              </div>
              <div className="col-lg-6">
                <button className={`${styles.btn} ${styles.btnOutlineprimary} mb-3`}>Sign Up</button>
              </div>
            </div>

          </div>
          <div className="col-lg-6">
            <div className="card shadow-sm h-100 border border-light rounded-4 mb-3">
              <div className="card-body d-flex justify-content-center pt-0 pb-0">
                <div className="row w-100">
                  <div className="col-lg-6 ps-0">
                    <div className="card shadow-sm border border-light rounded-2 mb-3">
                      <div className="ps-2 pe-2">

                        <Image
                          src={'/Images/certificate.svg'}
                          className="card-img-top"
                          alt="certificate"
                          width={300}
                          height={120}
                        />

                      </div>
                      <div className="card-body pt-1 pb-1">
                        <div className="d-flex justify-content-between mb-1">
                          <div className="d-flex justify-content-start align-items-center">
                            <div className={`${styles.circleItem} me-2`} style={{ backgroundColor: "wheat", width: "40px", height: "40px" }}>
                              <Image
                                src={'/Images/userReal.svg'}
                                width={40}
                                height={40}
                                alt="real user"
                              />
                            </div>
                            <div>
                              <h6 className="mb-1" style={{ fontWeight: "bold" }}>Yatinder</h6>
                              <p className="mb-0" style={{ fontSize: "12px" }}>9 days ago</p>
                            </div>
                          </div>
                          <div>
                            <span className="badge text-bg-primary">Score 10/10</span>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="d-flex justify-content-between align-items-center">
                            <Image src={'/Images/star.svg'} width={15} height={15} alt="star" className="me-1" />
                            <Image src={'/Images/star.svg'} width={15} height={15} alt="star" className="me-1" />
                            <Image src={'/Images/star.svg'} width={15} height={15} alt="star" className="me-1" />
                            <Image src={'/Images/star.svg'} width={15} height={15} alt="star" className="me-1" />
                            <Image src={'/Images/star.svg'} width={15} height={15} alt="star" className="me-1" />
                          </div>
                          <div>
                            <span className="badge text-bg-primary" style={{ cursor: "pointer" }}>certificate</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card shadow-sm border border-light rounded-2 mb-3">
                      <div className="ps-2 pe-2">

                        <Image
                          src={'/Images/certificate.svg'}
                          className="card-img-top"
                          alt="certificate"
                          width={300}
                          height={120}
                        />

                      </div>
                      <div className="card-body pt-1 pb-1">
                        <div className="d-flex justify-content-between mb-1">
                          <div className="d-flex justify-content-start align-items-center">
                            <div className={`${styles.circleItem} me-2`} style={{ backgroundColor: "wheat", width: "40px", height: "40px" }}>
                              <Image
                                src={'/Images/userReal.svg'}
                                width={40}
                                height={40}
                                alt="real user"
                              />
                            </div>
                            <div>
                              <h6 className="mb-1" style={{ fontWeight: "bold" }}>Yatinder</h6>
                              <p className="mb-0" style={{ fontSize: "12px" }}>9 days ago</p>
                            </div>
                          </div>
                          <div>
                            <span className="badge text-bg-primary">Score 10/10</span>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="d-flex justify-content-between align-items-center">
                            <Image src={'/Images/star.svg'} width={15} height={15} alt="star" className="me-1" />
                            <Image src={'/Images/star.svg'} width={15} height={15} alt="star" className="me-1" />
                            <Image src={'/Images/star.svg'} width={15} height={15} alt="star" className="me-1" />
                            <Image src={'/Images/star.svg'} width={15} height={15} alt="star" className="me-1" />
                            <Image src={'/Images/star.svg'} width={15} height={15} alt="star" className="me-1" />
                          </div>
                          <div>
                            <span className="badge text-bg-primary" style={{ cursor: "pointer" }}>certificate</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 pe-0">
                    <div className="card shadow-sm border border-light rounded-2 mb-3">
                      <div className="ps-2 pe-2">

                        <Image
                          src={'/Images/certificate.svg'}
                          className="card-img-top"
                          alt="certificate"
                          width={300}
                          height={120}
                        />

                      </div>
                      <div className="card-body pt-1 pb-1">
                        <div className="d-flex justify-content-between mb-1">
                          <div className="d-flex justify-content-start align-items-center">
                            <div className={`${styles.circleItem} me-2`} style={{ backgroundColor: "wheat", width: "40px", height: "40px" }}>
                              <Image
                                src={'/Images/userReal.svg'}
                                width={40}
                                height={40}
                                alt="real user"
                              />
                            </div>
                            <div>
                              <h6 className="mb-1" style={{ fontWeight: "bold" }}>Yatinder</h6>
                              <p className="mb-0" style={{ fontSize: "12px" }}>9 days ago</p>
                            </div>
                          </div>
                          <div>
                            <span className="badge text-bg-primary">Score 10/10</span>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="d-flex justify-content-between align-items-center">
                            <Image src={'/Images/star.svg'} width={15} height={15} alt="star" className="me-1" />
                            <Image src={'/Images/star.svg'} width={15} height={15} alt="star" className="me-1" />
                            <Image src={'/Images/star.svg'} width={15} height={15} alt="star" className="me-1" />
                            <Image src={'/Images/star.svg'} width={15} height={15} alt="star" className="me-1" />
                            <Image src={'/Images/star.svg'} width={15} height={15} alt="star" className="me-1" />
                          </div>
                          <div>
                            <span className="badge text-bg-primary" style={{ cursor: "pointer" }}>certificate</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ marginBottom: "50px" }}>
        <div className="text-center" style={{ position: "relative", marginBottom: "50px" }}>
          <h4 style={{ fontWeight: "bold", marginBottom: "50px" }}>Why ATPL <span style={{ color: "#1A73E8" }}>Pro?</span></h4>
          <Image
            src={'/Images/double-lines.svg'}
            width={178}
            height={58}
            alt="lines"
            style={{ position: "absolute", top: "12px", right: "38%", zIndex: "100" }}
          />
          <p>ATPL Pro empowers aspiring pilots and aviation professionals with top-quality tools and resources, serving students, flight schools, <br /> and aviation authorities worldwide.</p>
        </div>
        <div className="row w-100 mt-4">
          <div className="col-lg-7">
            <div className="row w-100 mb-4">
              <div className="col-lg-6">
                <div className="card shadow-sm h-100 border border-light rounded-2 mb-3">
                  <div className="card-body d-flex flex-column align-items-center">
                    <div className={`${styles.circleItem} ${styles.circleColor}`} style={{ width: "60px", height: "60px" }} >
                      <Image
                        src={'/Images/tutor.svg'}
                        width={40}
                        height={40}
                        alt="icon"
                      />
                    </div>
                    <div className="text-center">
                      <h6 style={{ fontWeight: "bold" }}>Trusted by Aviation Experts</h6>
                      <p style={{ fontSize: "14px" }}>Our platform is developed in collaboration with experienced airline captains, ATPL instructors, and industry professionals, ensuring practical and reliable knowledge transfer.</p>
                    </div>


                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card shadow-sm h-100 border border-light rounded-2 mb-3">
                  <div className="card-body d-flex flex-column align-items-center">
                    <div className={`${styles.circleItem} ${styles.circleColor}`} style={{ width: "60px", height: "60px" }} >
                      <Image
                        src={'/Images/book-writing.svg'}
                        width={40}
                        height={40}
                        alt="icon"
                      />
                    </div>
                    <div className="text-center">
                      <h6 style={{ fontWeight: "bold" }}>Global Reach</h6>
                      <p style={{ fontSize: "14px" }}>From EASA-compliant exams in Europe to ICAO-compliant solutions for global users, we are the go-to resource for pilots worldwide.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row w-100 mb-4">
              <div className="col-lg-6">
                <div className="card shadow-sm h-100 border border-light rounded-2 mb-3">
                  <div className="card-body d-flex flex-column align-items-center">
                    <div className={`${styles.circleItem} ${styles.circleColor}`} style={{ width: "60px", height: "60px" }} >
                      <Image
                        src={'/Images/24-7.svg'}
                        width={40}
                        height={40}
                        alt="icon"
                      />
                    </div>
                    <div className="text-center">
                      <h6 style={{ fontWeight: "bold" }}>Support for Flight Schools and Aviation Authorities</h6>
                      <p style={{ fontSize: "14px" }}>Our platform is developed in collaboration with experienced airline captains, ATPL instructors, and industry professionals, ensuring practical and reliable knowledge transfer.</p>
                    </div>


                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card shadow-sm h-100 border border-light rounded-2 mb-3">
                  <div className="card-body d-flex flex-column align-items-center">
                    <div className={`${styles.circleItem} ${styles.circleColor}`} style={{ width: "60px", height: "60px" }} >
                      <Image
                        src={'/Images/24-7.svg'}
                        width={40}
                        height={40}
                        alt="icon"
                      />
                    </div>
                    <div className="text-center">
                      <h6 style={{ fontWeight: "bold" }}>Innovation Features</h6>
                      <p style={{ fontSize: "14px" }}>Dynamic Quality Score: Focus on high-probability questions based on recent exams.</p>
                    </div>


                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="d-flex align-items-end h-100 w-100" style={{ position: "relative" }}>
              <Image
                src={'/Images/border-circle2.svg'}
                width={50}
                height={50}
                alt="circle"
                style={{ position: "absolute", top: "100px" }}
              />
              <Image
                src={'/Images/border-circle1.svg'}
                width={100}
                height={100}
                alt="circle"
                style={{ position: "absolute", top: "0px", right: "80px" }}
              />
              <Image
                src={'/Images/aero-plain.svg'}
                width={100}
                height={100}
                alt="circle"
                style={{ position: "absolute", top: "20px", right: "110px" }}
              />
              <Image
                src={'/Images/background__322011.png'}
                width={492}
                height={442}
                alt="pilots"
                style={{ marginTop: "100px" }}
              />
            </div>
          </div>
        </div>

      </section>
      <section className={styles.bgWave} style={{ marginBottom: "50px", overflow: "hidden" }}>
        <div className="container">

          <div className="text-center" style={{ position: "relative", marginBottom: "50px" }}>
            <h4 style={{ fontWeight: "bold" }}>How to <span style={{ color: "#1A73E8" }}>Order</span></h4>
            <p style={{ fontSize: "14px" }}>Choose your path to aviation excellence with our tailored solutions</p>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="card shadow-sm border border-light rounded-2 mb-3">
                <div className="card-body d-flex flex-column align-items-center justify-content-between">
                  <div className={`${styles.circleItem} ${styles.circleColor} mb-3`} style={{ width: "60px", height: "60px" }} >
                    <Image
                      src={'/Images/business-and-trade.png'}
                      width={35}
                      height={35}
                      alt="icon"
                    />
                  </div>
                  <div className="text-center mb-3">
                    <h6 style={{ fontWeight: "bold" }}>Aviation Authority</h6>
                    <p style={{ fontSize: "14px" }}>Please contact us via e-mail for personalized assistance and product information</p>
                  </div>
                  <button className={`${styles.btn} ${styles.btnPrimary}`}>Email</button>


                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card shadow-sm border border-light rounded-2 mb-3">
                <div className="card-body d-flex flex-column align-items-center justify-content-between">
                  <div className={`${styles.circleItem} ${styles.circleColor} mb-3`} style={{ width: "60px", height: "60px" }} >
                    <Image
                      src={'/Images/graduation3.png'}
                      width={35}
                      height={35}
                      alt="icon"
                    />
                  </div>
                  <div className="text-center mb-3">
                    <h6 style={{ fontWeight: "bold" }}>Flight School</h6>
                    <p style={{ fontSize: "14px" }}>Please contact us via e-mail for personalized assistance and product information</p>
                  </div>
                  <button className={`${styles.btn} ${styles.btnPrimary}`}>Email</button>


                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card shadow-sm border border-light rounded-2 mb-3">
                <div className="card-body d-flex flex-column align-items-center justify-content-between">
                  <div className={`${styles.circleItem} ${styles.circleColor} mb-3`} style={{ width: "60px", height: "60px" }} >
                    <Image
                      src={'/Images/groupuserwhite.png'}
                      width={35}
                      height={35}
                      alt="icon"
                    />
                  </div>
                  <div className="text-center mb-3">
                    <h6 style={{ fontWeight: "bold" }}>Private Customer</h6>
                    <p style={{ fontSize: "14px" }}>Please purchase our products
                      directly from our partners or
                      your flight school. </p>
                  </div>
                  <button className={`${styles.btn} ${styles.btnPrimary}`}>DEALERS & PARTNERS</button>


                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
      <Faqa />

    </>
  );
}
