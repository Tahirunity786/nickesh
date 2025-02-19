import React from 'react'
import styles from './about.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Page = () => {
  return (
    <>
      <section className={styles.feature0bg} style={{ marginBottom: "50px" }}>
        <div className="container">
          <div className="mb-5">

            <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "20px" }}>Empowering Future Pilots <br /> Worldwide</h2>
            <p style={{ fontWeight: "bold" }}>Since our inception, ATPL Pro has been dedicated to transforming aviation training <br />
              through innovative technology and expert-led education.</p>

          </div>

        </div>

      </section>
      <section className='container' style={{ marginBottom: "50px" }}>
        <div className="row">
          <div className="col-lg-7 d-flex flex-column align-items-center justify-content-center">
            <div>


              <div className="mb-4">

                <span className="badge text-bg-primary mb-3">Our Mission</span>
                <h3 style={{ fontWeight: "bold" }}>Revolutionizing Aviation training</h3>
                <p>At ATPL Pro, we're committed to providing aspiring pilots with the most
                  comprehensive and effective training resources. Our platform combines
                  cutting-edge technology with expert knowledge to create an
                  unparalleled learning experience.</p>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="card shadow-sm border border-light rounded-4 mb-3">
                    <div className="card-body d-flex justify-content-start">
                      <div className="text-center mb-2 me-3">
                        <Image
                          src={'/Images/focus.svg'}
                          width={25}
                          height={25}
                          alt="icon"
                        />
                      </div>
                      <div>

                        <h6 style={{ fontWeight: "bold" }}>Focused Learning</h6>
                        <p className="mb-0">Targeted preparation for aviation exams</p>

                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card shadow-sm border border-light rounded-4 mb-3">
                    <div className="card-body d-flex justify-content-start">
                      <div className="text-center mb-2 me-3">
                        <Image
                          src={'/Images/prideBadge.svg'}
                          width={25}
                          height={25}
                          alt="icon"
                        />
                      </div>
                      <div>

                        <h6 style={{ fontWeight: "bold" }}>Expert-Led</h6>
                        <p className="mb-0">Industry Professionals at your service</p>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <Image
              src={'Images/aboutus.svg'}
              width={400}
              height={400}
              alt='about us'
              style={{ width: "100%", height: "400px" }}
            />

          </div>
        </div>
      </section>

      <section className='container' style={{ marginBottom: "50px" }}>
        <div className="row">
          <div className="col-lg-3">
            <div className="card shadow-sm border border-light rounded-4 mb-3">
              <div className="card-body d-flex flex-column text-center justify-content-start">
                <div className="text-center mb-2">
                  <Image
                    src={'/Images/multiUser.svg'}
                    width={25}
                    height={25}
                    alt="icon"
                  />
                </div>
                <div>

                  <h6 style={{ fontWeight: "bold" }}>17K+</h6>
                  <p className="mb-0">Active student</p>

                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card shadow-sm border border-light rounded-4 mb-3">
              <div className="card-body d-flex flex-column text-center justify-content-start">
                <div className="text-center mb-2">
                  <Image
                    src={'/Images/prideBadge.svg'}
                    width={25}
                    height={25}
                    alt="icon"
                  />
                </div>
                <div>

                  <h6 style={{ fontWeight: "bold" }}>95%</h6>
                  <p className="mb-0">Pass Rate</p>

                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card shadow-sm border border-light rounded-4 mb-3">
              <div className="card-body d-flex flex-column text-center justify-content-start">
                <div className="text-center mb-2">
                  <Image
                    src={'/Images/24-7-blue.svg'}
                    width={25}
                    height={25}
                    alt="icon"
                  />
                </div>
                <div>

                  <h6 style={{ fontWeight: "bold" }}>24/7</h6>
                  <p className="mb-0">Expert Support</p>

                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card shadow-sm border border-light rounded-4 mb-3">
              <div className="card-body d-flex flex-column text-center justify-content-start">
                <div className="text-center mb-2">
                  <Image
                    src={'/Images/globe-feature.svg'}
                    width={25}
                    height={25}
                    alt="icon"
                  />
                </div>
                <div>

                  <h6 style={{ fontWeight: "bold" }}>50+</h6>
                  <p className="mb-0">Countries</p>

                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
      
      <section style={{ marginBottom: "100px" }}>
        <div className="container">
          <div className="mb-4 d-flex justify-content-center align-items-center flex-column">

            <span className="badge text-bg-primary mb-3">Our Team</span>
            <h3>Revolutionizing Aviation training</h3>
            <p>Our team consists of experienced pilots, certified instructors, and aviation experts committed to your success.</p>
            <div>
              <div className="row ">
                <div className="col-lg-4 mb-3">
                  <div className="card w-100 text-start">
                    {/* <img src="..." className="card-img-top" alt="..."/> */}
                    <Image
                      src={'/Images/dummyPIc.png'}
                      width={300}
                      height={213}
                      className="card-img-top"
                      alt='blog image'
                    />
                    <div className="card-body">
                      <h5 className="card-title" style={{ fontWeight: "bold" }}>Card title</h5>
                      <p style={{ color: "#4285F4" }}>Chief Aviation Instrustor</p>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mb-3">
                  <div className="card w-100 text-start">
                    {/* <img src="..." className="card-img-top" alt="..."/> */}
                    <Image
                      src={'/Images/dummyPIc.png'}
                      width={300}
                      height={213}
                      className="card-img-top"
                      alt='blog image'
                    />
                    <div className="card-body">
                      <h5 className="card-title" style={{ fontWeight: "bold" }}>Card title</h5>
                      <p style={{ color: "#4285F4" }}>Chief Aviation Instrustor</p>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mb-3">
                  <div className="card w-100 text-start">
                    {/* <img src="..." className="card-img-top" alt="..."/> */}
                    <Image
                      src={'/Images/dummyPIc.png'}
                      width={300}
                      height={213}
                      className="card-img-top"
                      alt='blog image'
                    />
                    <div className="card-body">

                      <h5 className="card-title" style={{ fontWeight: "bold" }}>Card title</h5>
                      <p style={{ color: "#4285F4" }}>Chief Aviation Instrustor</p>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>
      <section style={{ marginBottom: "50px" }}>
        <div className="container">
          <div className="mb-4 d-flex justify-content-center align-items-center flex-column">

            <span className="badge text-bg-primary mb-3">Our Values</span>
            <h3>Revolutionizing Aviation training</h3>
            <p>Our team consists of experienced pilots, certified instructors, and aviation experts committed to your success.</p>
            <div>
              <div className="row">
                <div className="col-lg-4 mb-3">
                  <div className="card shadow-sm border border-light rounded-2 mb-3">
                    <div className="card-body d-flex flex-column align-items-center justify-content-between">
                    <div className={`${styles.circleItem} ${styles.circleColor} mb-3`} style={{ width: "60px", height: "60px" }} >
                        <Image
                          src={'/Images/book-open-white.png'}
                          width={20}
                          height={20}
                          alt="icon"
                        />
                      </div>
                      <div className="text-center mb-3">
                        <h6 style={{ fontWeight: "bold" }}>Excellence in Education</h6>
                        <p style={{ fontSize: "14px" }}>We maintain the highest standards in aviation training, constantly updating our materials to reflect industry best practices.</p>
                      </div>
                     

                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mb-3">
                  <div className="card shadow-sm border border-light rounded-2 mb-3">
                    <div className="card-body d-flex flex-column align-items-center justify-content-between">
                    <div className={`${styles.circleItem} ${styles.circleColor} mb-3`} style={{ width: "60px", height: "60px" }} >
                        <Image
                          src={'/Images/whiteboldusers.png'}
                          width={25}
                          height={20}
                          alt="icon"
                        />
                      </div>
                      <div className="text-center mb-3">
                        <h6 style={{ fontWeight: "bold" }}>Student Success</h6>
                        <p style={{ fontSize: "14px" }}>Your success is our priority. We provide comprehensive support and resources to help you achieve your aviation goals.</p>
                      </div>
                      

                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mb-3">
                  <div className="card shadow-sm border border-light rounded-2 mb-3">
                    <div className="card-body d-flex flex-column align-items-center justify-content-between">
                      <div className={`${styles.circleItem} ${styles.circleColor} mb-3`} style={{ width: "60px", height: "60px" }} >
                        <Image
                          src={'/Images/shield.png'}
                          width={20}
                          height={20}
                          alt="icon"
                        />
                      </div>
                      <div className="text-center mb-3">
                        <h6 style={{ fontWeight: "bold" }}>Safety First</h6>
                        <p style={{ fontSize: "14px" }}>We emphasize safety in all aspects of our training, preparing pilots to make sound decisions in any situation.</p>
                      </div>
                     

                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

    </>
  )
}

export default Page
