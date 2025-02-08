import Image from "next/image";
import styles from "./page.module.css";
import MarqueeCarousel from "@/components/MarqueeCarousel/MarqueeCarousel";
import UltraMarqueeCarousel from "@/components/Carousal/Carousal";
import cards from '@/app/icData'
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
      <section className="container" style={{ marginTop: "50px", marginBottom: "50px", height: "auto" }}>
        <div className="text-center mb-4">
          <h4 style={{ fontWeight: "bold", marginBottom: "70px" }}>Your Path To ATPL Success</h4>
        </div>
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
          <div className="col-lg-4 p-3" style={{ position: "relative" }}>
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
        <UltraMarqueeCarousel cards={cards} />
        <div style={{ position: "relative", marginTop:"100px", height:"auto"}} className="text-end">
          <Image
            src={'/Images/11.svg'}
            width={132}
            height={82}
            alt="aeroplane"
            style={{position:"absolute", top:"-50px", right:"10%"}}
          />
          <Image
          src={'/Images/12.svg'}
          width={498}
          height={106}
          alt="aeroplane"
          
          />
        </div>

      </section>

    </>
  );
}
