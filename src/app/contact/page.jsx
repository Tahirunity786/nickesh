import Faqa from '@/components/Faqs/Faqa'
import Image from 'next/image'
import React from 'react'

import styles from './contact.module.css'

const Page = () => {
  return (
    <>
      <section className={styles.feature0bg}>
        <div className="container">
          <div className="mb-5">

            <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>Get in Touch With ATPL Pro</h2>
            <p style={{ fontWeight: "bold" }}>We’re here to answer your questions and provide support on your journey to <br /> become a pilot</p>

          </div>

        </div>
      </section>
      <section className="mt-5 mb-5 container">
        <div className="row">
          <div className="col-lg-6 mb-4">
            <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "20px" }}>Contact Us</h2>
            <div className="card rounded-4 border-0 ps-0 mb-2">
              <div className="card-body d-flex justify-content-start ps-0 ">
                <div className="text-center mb-2 me-3">
                  <Image
                    src={'/Images/envelope.svg'}
                    width={25}
                    height={25}
                    alt="icon"
                  />
                </div>
                <div>

                  <h6 style={{ fontWeight: "bold" }}>Email</h6>
                  <p className="mb-0">support@atplpro.com</p>

                </div>
              </div>
            </div>
            <div className="card rounded-4 border-0 ps-0 mb-2">
              <div className="card-body d-flex justify-content-start ps-0 ">
                <div className="text-center mb-2 me-3">
                  <Image
                    src={'/Images/location-dot.svg'}
                    width={25}
                    height={25}
                    alt="icon"
                  />
                </div>
                <div>

                  <h6 style={{ fontWeight: "bold" }}>Address</h6>
                  <p className="mb-0">Estonia, Tsergondõ , Viljandimaa </p>

                </div>
              </div>
            </div>
            <div className="mt-3 ms-4 ps-1 mb-2 text-statr">
              <h4 className='mb-3'>Follow Us</h4>

              <div className="d-flex justify-content-start align-items-center">
                <div className="me-3">
                  <Image
                    src={'/Images/social/1.svg'}
                    width={25}
                    height={25}
                    alt='icon'
                  />
                </div>
                <div className="me-3">
                  <Image
                    src={'/Images/social/2.svg'}
                    width={25}
                    height={25}
                    alt='icon'
                  />
                </div>
                <div className="me-3">
                  <Image
                    src={'/Images/social/logos_twitter.svg'} // Add leading slash
                    width={25}
                    height={25}
                    alt="icon"
                  />
                </div>
                <div className="me-3">
                  <Image
                    src={'/Images/social/4.svg'}
                    width={25}
                    height={25}
                    alt='icon'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card shadow-sm border border-light rounded-4 mb-3">
              <div className="card-body">
                <h5 style={{ fontWeight: "bold", marginBottom: "30px" }}>Send Us Message</h5>

                <form action="#" method="post">

                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" aria-describedby="name" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Subject</label>
                    <input type="text" className="form-control" id="name" aria-describedby="name" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className="form-control" id="message" rows="5" style={{ resize: "none" }}></textarea>
                  </div>
                  <div className="mb-3">
                    <button className='btn btn-primary w-100 d-flex justify-content-center align-items-center'>
                      <span className='me-2'>
                        Send

                      </span>
                      <span className='mb-2'>
                        <Image
                          src={'/Images/paper-plane.svg'}
                          width={20}
                          height={20}
                          alt='icon'
                        />
                      </span>
                    </button>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Faqa />
    </>
  )
}

export default Page
