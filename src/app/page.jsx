import Image from "next/image";
import styles from "./page.module.css";
import MarqueeCarousel from "@/components/MarqueeCarousel/MarqueeCarousel";
import Carousal from "@/components/Carousal/Carousal";

export default function Home() {

  const cards = [
    {id:1, image:"/Images/Countries/1.svg", title: "Germany",slogan:"Professional Flight Exam Prep",subSlogan:"Real exam level questions", questions:"8,000+ Questions", activeUsers:"25K+ Active Users" , description: "This is the first card." },
    {id:2, image:"/Images/Countries/2.svg", title: "UK CAA",slogan:"Professional Flight Exam Prep",subSlogan:"Real exam level questions", questions:"8,000+ Questions", activeUsers:"25K+ Active Users"  , description: "This is the first card." },
    {id:3, image:"/Images/Countries/3.svg", title: "Portugal",slogan:"Professional Flight Exam Prep",subSlogan:"Real exam level questions", questions:"8,000+ Questions", activeUsers:"25K+ Active Users"  , description: "This is the first card." },
    {id:4, image:"/Images/Countries/4.svg", title: "Spain",slogan:"Professional Flight Exam Prep",subSlogan:"Real exam level questions", questions:"8,000+ Questions", activeUsers:"25K+ Active Users"  , description: "This is the first card." },
    {id:5, image:"/Images/Countries/5.svg", title: "Austria",slogan:"Professional Flight Exam Prep",subSlogan:"Real exam level questions", questions:"8,000+ Questions", activeUsers:"25K+ Active Users"  , description: "This is the first card." },
    {id:6, image:"/Images/Countries/6.svg", title: "Belgium",slogan:"Professional Flight Exam Prep",subSlogan:"Real exam level questions", questions:"8,000+ Questions", activeUsers:"25K+ Active Users"  , description: "This is the first card." },
    {id:7, image:"/Images/Countries/7.svg", title: "Czech Republic",slogan:"Professional Flight Exam Prep",subSlogan:"Real exam level questions", questions:"8,000+ Questions", activeUsers:"25K+ Active Users"  , description: "This is the first card." },
    {id:8, image:"/Images/Countries/8.svg", title: "Greece",slogan:"Professional Flight Exam Prep",subSlogan:"Real exam level questions", questions:"8,000+ Questions", activeUsers:"25K+ Active Users"  , description: "This is the first card." },
    {id:9, image:"/Images/Countries/9.svg", title: "Iceland",slogan:"Professional Flight Exam Prep",subSlogan:"Real exam level questions", questions:"8,000+ Questions", activeUsers:"25K+ Active Users"  , description: "This is the first card." },
    {id:10, image:"/Images/Countries/10.svg", title: "Luxemburg",slogan:"Professional Flight Exam Prep",subSlogan:"Real exam level questions", questions:"8,000+ Questions", activeUsers:"25K+ Active Users"  , description: "This is the first card." },
    {id:11, image:"/Images/Countries/11.svg", title: "Malta",slogan:"Professional Flight Exam Prep",subSlogan:"Real exam level questions", questions:"8,000+ Questions", activeUsers:"25K+ Active Users"  , description: "This is the first card." },
    {id:12, image:"/Images/Countries/12.svg", title: "Montenegro",slogan:"Professional Flight Exam Prep",subSlogan:"Real exam level questions", questions:"8,000+ Questions", activeUsers:"25K+ Active Users"  , description: "This is the first card." },
    {id:13, image:"/Images/Countries/13.svg", title: "Norway",slogan:"Professional Flight Exam Prep",subSlogan:"Real exam level questions", questions:"8,000+ Questions", activeUsers:"25K+ Active Users"  , description: "This is the first card." },
    {id:14, image:"/Images/Countries/14.svg", title: "Romania",slogan:"Professional Flight Exam Prep",subSlogan:"Real exam level questions", questions:"8,000+ Questions", activeUsers:"25K+ Active Users"  , description: "This is the first card." },
    {id:15, image:"/Images/Countries/15.svg", title: "Slovenia",slogan:"Professional Flight Exam Prep",subSlogan:"Real exam level questions", questions:"8,000+ Questions", activeUsers:"25K+ Active Users"  , description: "This is the first card." },
    {id:16, image:"/Images/Countries/16.svg", title: "Botswana",slogan:"Professional Flight Exam Prep",subSlogan:"Real exam level questions", questions:"8,000+ Questions", activeUsers:"25K+ Active Users"  , description: "This is the first card." },
    {id:17, image:"/Images/Countries/17.svg", title: "Burundi",slogan:"Professional Flight Exam Prep",subSlogan:"Real exam level questions", questions:"8,000+ Questions", activeUsers:"25K+ Active Users"  , description: "This is the first card." },
    {id:18, image:"/Images/Countries/18.svg", title: "Kenya",slogan:"Professional Flight Exam Prep",subSlogan:"Real exam level questions", questions:"8,000+ Questions", activeUsers:"25K+ Active Users"  , description: "This is the first card." },
    {id:19, image:"/Images/Countries/19.svg", title: "Namibia",slogan:"Professional Flight Exam Prep",subSlogan:"Real exam level questions", questions:"8,000+ Questions", activeUsers:"25K+ Active Users"  , description: "This is the first card." },
    {id:20, image:"/Images/Countries/20.svg", title: "Rwanda",slogan:"Professional Flight Exam Prep",subSlogan:"Real exam level questions", questions:"8,000+ Questions", activeUsers:"25K+ Active Users"  , description: "This is the first card." },
    {id:21, image:"/Images/Countries/21.svg", title: "South Africa",slogan:"Professional Flight Exam Prep",subSlogan:"Real exam level questions", questions:"8,000+ Questions", activeUsers:"25K+ Active Users"  , description: "This is the first card." },
    {id:22, image:"/Images/Countries/22.svg", title: "Tanzania",slogan:"Professional Flight Exam Prep",subSlogan:"Real exam level questions", questions:"8,000+ Questions", activeUsers:"25K+ Active Users"  , description: "This is the first card." },
    {id:23, image:"/Images/Countries/23.svg", title: "Uganda",slogan:"Professional Flight Exam Prep",subSlogan:"Real exam level questions", questions:"8,000+ Questions", activeUsers:"25K+ Active Users"  , description: "This is the first card." },
    {id:24, image:"/Images/Countries/24.svg", title: "UAE",slogan:"Professional Flight Exam Prep",subSlogan:"Real exam level questions", questions:"8,000+ Questions", activeUsers:"25K+ Active Users"  , description: "This is the first card." },
    {id:25, image:"/Images/Countries/25.svg", title: "Qatar",slogan:"Professional Flight Exam Prep",subSlogan:"Real exam level questions", questions:"8,000+ Questions", activeUsers:"25K+ Active Users"  , description: "This is the first card." },
   
  ];
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
                  src={'/Images/icon2.svg'}
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
      <section style={{marginTop:"50px"}}>
        <div className="mb-3 text-center">
          <h4 style={{fontWeight:"bold", marginBottom:"20px"}}>Our Database Contains Following <span style={{color:"#1A73E8"}}>Countries</span></h4>
          <p>Choose your aviation authority to access region-specific ATPL exam questions and study materials</p>
        </div>
        <Carousal cards={cards} />
      </section>
    </>
  );
}
