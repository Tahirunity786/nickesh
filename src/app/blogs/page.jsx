import React from 'react'
import styles from './blog.module.css'
import Image from 'next/image'

const Page = () => {
  return (
    <>
      <section className={styles.feature0bg}>
        <div className="container">
          <div className="mb-5">

            <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>ATPL Pro Blog</h2>
            <p style={{ fontWeight: "bold" }}>Expert Insights,study tips, and sucess stories to help you succeed  in your aviation <br />journey</p>

          </div>

        </div>
      </section>
      <section className='container mb-5'>
        <div className="d-flex justify-content-between align-items-center mb-5">
          <div style={{ position: "relative" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" style={{ position: "absolute", top: "10px", left: "20px" }} className="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
            <input type="search" className="form-control ps-5" id="search" placeholder="Search article" />
          </div>
          <div className="d-flex justify-content-center align-items-center">

            <div className="me-2 ms-2">
              <button className={styles.activenav}>
                All Posts
              </button>
            </div>
            <div className="me-2 ms-2">
              <button className={styles.outlinenav}>
                Exam Paperation
              </button>
            </div>
            <div className="me-2 ms-2">
              <button className={styles.outlinenav}>
                Training Tips
              </button>
            </div>
            <div className="me-2 ms-2">
              <button className={styles.outlinenav}>
                Industrial news
              </button>
            </div>
            <div className="me-2 ms-2">
              <button className={styles.outlinenav}>
                Success Stories
              </button>
            </div>

          </div>
        </div>

    
          <div className="row">
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
                  <span className="badge text-bg-warning mb-3">Exam preparation</span>
                  <h5 className="card-title" style={{ fontWeight: "bold" }}>Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-outline-primary w-100">Go somewhere

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right ms-2" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                    </svg>
                  </a>
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
                  <span className="badge text-bg-warning mb-3">Exam preparation</span>
                  <h5 className="card-title" style={{ fontWeight: "bold" }}>Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-outline-primary w-100">Go somewhere

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right ms-2" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                    </svg>
                  </a>
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
                  <span className="badge text-bg-warning mb-3">Exam preparation</span>
                  <h5 className="card-title" style={{ fontWeight: "bold" }}>Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-outline-primary w-100">Go somewhere

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right ms-2" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                    </svg>
                  </a>
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
                  <span className="badge text-bg-warning mb-3">Exam preparation</span>
                  <h5 className="card-title" style={{ fontWeight: "bold" }}>Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-outline-primary w-100">Go somewhere

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right ms-2" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
      </section>
    </>
  )
}

export default Page
