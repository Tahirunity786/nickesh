import Image from "next/image";
import styles from "./page.module.css";
import MarqueeCarousel from "@/components/MarqueeCarousel/MarqueeCarousel";

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
          <div className="col-lg-5" style={{position:"relative"}}>
            <div className={`${styles.flowtingDiv} ${styles.float}`}></div>
            <div className={`${styles.flowtingDivLower} ${styles.float}`}></div>
            <div className={styles.superImage}>

            <Image
              src={'Images/pilot-super.svg'}
              width={500}
              height={500}
              alt="super image"
              
              />
              </div>
          </div>
        </div>

      </section>
      <MarqueeCarousel/>
    </>
  );
}
