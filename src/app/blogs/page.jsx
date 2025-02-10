import React from 'react'
import styles from './blog.module.css'
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
      <section className='container'>
        <div className="d-flex justify-content-between align-items-center mb-5">
          <div style={{ position: "relative" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" style={{ position: "absolute", top: "10px", left: "20px" }} className="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
            <input type="search" class="form-control ps-5" id="search" placeholder="Search article" />
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

        <div className="text-center">
          <div className="row g-3">
            <div className="col-4">
              <div className="card shadow-sm border border-light rounded-4 mb-3">
                <div className="card-body d-flex justify-content-start">
                  {/* <div className="text-center mb-2 me-3">
                    <Image
                      src={'/Images/globe-feature.svg'}
                      width={25}
                      height={25}
                      alt="users"
                    />
                  </div> */}
                  <div>

                    <h6 style={{ fontWeight: "bold" }}>Industry Leading Database</h6>
                    <p className="mb-0">Comprehensive study materials developed by experienced airline captains</p>

                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card shadow-sm border border-light rounded-4 mb-3">
                <div className="card-body d-flex justify-content-start">
                  {/* <div className="text-center mb-2 me-3">
                    <Image
                      src={'/Images/globe-feature.svg'}
                      width={25}
                      height={25}
                      alt="users"
                    />
                  </div> */}
                  <div>

                    <h6 style={{ fontWeight: "bold" }}>Industry Leading Database</h6>
                    <p className="mb-0">Comprehensive study materials developed by experienced airline captains</p>

                  </div>
                </div>
              </div>            </div>
            <div className="col-4">
              <div className="card shadow-sm border border-light rounded-4 mb-3">
                <div className="card-body d-flex justify-content-start">
                  {/* <div className="text-center mb-2 me-3">
                    <Image
                      src={'/Images/globe-feature.svg'}
                      width={25}
                      height={25}
                      alt="users"
                    />
                  </div> */}
                  <div>

                    <h6 style={{ fontWeight: "bold" }}>Industry Leading Database</h6>
                    <p className="mb-0">Comprehensive study materials developed by experienced airline captains</p>

                  </div>
                </div>
              </div>            </div>
            <div className="col-4">
              <div className="card shadow-sm border border-light rounded-4 mb-3">
                <div className="card-body d-flex justify-content-start">
                  {/* <div className="text-center mb-2 me-3">
                    <Image
                      src={'/Images/globe-feature.svg'}
                      width={25}
                      height={25}
                      alt="users"
                    />
                  </div> */}
                  <div>

                    <h6 style={{ fontWeight: "bold" }}>Industry Leading Database</h6>
                    <p className="mb-0">Comprehensive study materials developed by experienced airline captains</p>

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
