import Image from 'next/image'
import styles from './features.module.css'


const Page = () => {
  return (
    <>
      <section className={styles.feature0bg}>
        <div className="container">
          <div className="mb-5">

            <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>Features That Set Us Apart</h2>
            <p style={{ fontWeight: "bold" }}>Discover why ATPL Pro is the trusted choice for aviation training WorldWide</p>

          </div>
          <div className="mb-2 d-flex justify-content-start align-items-center">
            <button className={`${styles.navButtonAeroWarning} ${styles.navBtnAro} me-4`}>Explore Feature</button>
            <button className={`${styles.navButtonAeroOutlinePrimary} ${styles.navBtnAro}`}>E Shop</button>
          </div>
        </div>
      </section>

      <section className='container' style={{ marginBottom: "50px" }}>
        <div className='row ps-lg-5 pe-lg-5'>
          <div className="col-lg-6">
            <div className="card shadow-sm border border-light rounded-4 mb-3">
              <div className="card-body d-flex justify-content-start">
                <div className="text-center mb-2 me-3">
                  <Image
                    src={'/Images/globe-feature.svg'}
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
          </div>
          <div className="col-lg-6">
            <div className="card shadow-sm border border-light rounded-4 mb-3">
              <div className="card-body d-flex justify-content-start">
                <div className="text-center mb-2 me-3">
                  <Image
                    src={'/Images/globe-feature.svg'}
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
          </div>
          <div className="col-lg-6">
            <div className="card shadow-sm border border-light rounded-4 mb-3">
              <div className="card-body d-flex justify-content-start">
                <div className="text-center mb-2 me-3">
                  <Image
                    src={'/Images/globe-feature.svg'}
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
          </div>
          <div className="col-lg-6">
            <div className="card shadow-sm border border-light rounded-4 mb-3">
              <div className="card-body d-flex justify-content-start">
                <div className="text-center mb-2 me-3">
                  <Image
                    src={'/Images/globe-feature.svg'}
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
          </div>
        </div>
      </section>
      <section className='container mb-5'>
        <div className="row">
          <div className="col-lg-7">
            <div className="mb-4">

              <h3 style={{ fontWeight: "bold" }} className='mb-4'>99%  Accurate Question Bank</h3>
              <p>Our database is accurately maintained and updated through a precise verification process, combining expert review with real students feedback to ensure uparalledled accuracy</p>
            </div>
            <div className="mb-4">
              <div className="card shadow-sm border border-light rounded-4 mb-3">
                <div className="card-body d-flex justify-content-start">
                  <div className="text-center mb-2 me-3">
                    <Image
                      src={'/Images/circle-check.svg'}
                      width={25}
                      height={25}
                      alt="users"
                    />
                  </div>
                  <div>

                    <h6 style={{ fontWeight: "bold" }}>Tailored Learning Experience</h6>
                    <p className="mb-0">Every question is crafted to reflect actual ATPL exam standards, enabling a targeted and personalized learning journey.</p>

                  </div>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <div className="card shadow-sm border border-light rounded-4 mb-3">
                <div className="card-body d-flex justify-content-start">
                  <div className="text-center mb-2 me-3">
                    <Image
                      src={'/Images/circle-check.svg'}
                      width={25}
                      height={25}
                      alt="users"
                    />
                  </div>
                  <div>

                    <h6 style={{ fontWeight: "bold" }}>99% Match Rate with Exams</h6>
                    <p className="mb-0">With a proven 99% match rate, our questions are validated by thousands of successful pilots worldwide.</p>

                  </div>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <div className="card shadow-sm border border-light rounded-4 mb-3">
                <div className="card-body d-flex justify-content-start">
                  <div className="text-center mb-2 me-3">
                    <Image
                      src={'/Images/circle-check.svg'}
                      width={25}
                      height={25}
                      alt="users"
                    />
                  </div>
                  <div>

                    <h6 style={{ fontWeight: "bold" }}>Comprehensive Coverage</h6>
                    <p className="mb-0">Covering all essential topics and regulations, our database ensures you're prepared for any challenge in your ATPL exams.</p>

                  </div>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <div className="card shadow-sm border border-light rounded-4 mb-3">
                <div className="card-body d-flex justify-content-start">
                  <div className="text-center mb-2 me-3">
                    <Image
                      src={'/Images/circle-check.svg'}
                      width={25}
                      height={25}
                      alt="users"
                    />
                  </div>
                  <div>

                    <h6 style={{ fontWeight: "bold" }}>Built for Success</h6>
                    <p className="mb-0">Designed to mirror real-world scenarios, our content helps pilots achieve mastery in aviation fundamentals and beyond.</p>

                  </div>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <div className="card shadow-sm border border-light rounded-4 mb-3">
                <div className="card-body d-flex justify-content-start">
                  <div className="text-center mb-2 me-3">
                    <Image
                      src={'/Images/circle-check.svg'}
                      width={25}
                      height={25}
                      alt="users"
                    />
                  </div>
                  <div>

                    <h6 style={{ fontWeight: "bold" }}>Real-Time Updates</h6>
                    <p className="mb-0">Our question bank evolves with the latest regulations and exam trends, ensuring you always stay ahead with the most accurate and relevant content.</p>

                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className={`col-lg-5 d-flex justify-content-center`}>
            <div className={`${styles.bgPrimaryRadial} pb-4`}>
              <div className={styles.circleBig}>
                <span>99%</span>
              </div>
              <div className='text-center text-light mb-3'>
                <h5>Trusted by Thousands</h5>
                <p>Join over 17,000+ sucessful pilots who relied on our accurate question bank for their ATPL success</p>
              </div>
              <button className='btn btn-light'>Explore E-Shop</button>
            </div>
          </div>
        </div>

      </section>
      <section className={`${styles.bgPrimary}`} style={{ marginBottom: '50px', borderRadius: "0px" }}>

        <div className="container ">
          <div className="row pt-4 pb-4">
            <div className="col-lg-3 mb-4 text-light text-center">
              <h5 style={{ fontSize: "1.6rem", fontWeight: "bold" }} className='mb-1'>17K+</h5>
              <p className='mb-0'>Active student</p>
            </div>
            <div className="col-lg-3 mb-4 text-light text-center">
              <h5 style={{ fontSize: "1.6rem", fontWeight: "bold" }} className='mb-1'>98%</h5>
              <p className='mb-0'>Pass Rate</p>
            </div>
            <div className="col-lg-3 mb-4 text-light text-center">
              <h5 style={{ fontSize: "1.6rem", fontWeight: "bold" }} className='mb-1'>24/7</h5>
              <p className='mb-0'>Expert Support</p>
            </div>
            <div className="col-lg-3 mb-4 text-light text-center">
              <h5 style={{ fontSize: "1.6rem", fontWeight: "bold" }} className='mb-1'>180+</h5>
              <p className='mb-0'>Countries</p>
            </div>
          </div>
        </div>
      </section>

      <section className='container mb-5'>
        <div className="text-center">
          <h3 style={{ fontWeight: "bold" }} className='mb-4'>Ready to Start Your Journey?</h3>
          <p>Join Thousands of  sucessful pilots who trusted  ATPL Pro</p>
        </div>
        <div className="mb-2 d-flex justify-content-center align-items-center">
           
            <button className={`btn btn-primary me-3`} style={{fontWeight:"bold"}}>Get Started Now</button>
            <button className={`btn btn-outline-primary`}>View Pricing</button>
          </div>
      </section>
    </>
  )
}

export default Page
