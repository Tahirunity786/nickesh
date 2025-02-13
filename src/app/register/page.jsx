import React from 'react'
import styles from './register.module.css'
import Image from 'next/image'
import Link from 'next/link'
const Page = () => {
  return (
    <>
      <div className={`row ${styles.responsiveRegister}`}>
        <div className="col-lg-5 p-1">
          <div className={`w-100 h-100 ${styles.sideBar} p-3 ps-2 pe-2 border rounded-3`}>
            <div className="mb-4">

              <Image
                src={'/Images/logo.svg'}
                width={182}
                height={50}
                alt='logo'
              />
            </div>
            <div className="mb-3 ps-2 pe-2">
              <h6 className='fw-bold'>What is Lorem Ipsum?</h6>
            </div>
            <div className="mb-3 ps-2 pe-2">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
              </p>
            </div>
            <div className="mb-3 ps-2 pe-2" style={{ backgroundColor: "white" }}>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-7 p-2">

          <div className="mb-4 ps-2 pe-2">
            <h4 className='fw-bold'>Get started</h4>
            <p>Create your account know.</p>
          </div>
          <div className="mb-3 ps-2 pe-2">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email address" />
          </div>
          <div className="mb-2 ps-2 pe-2">
            <button className={`${styles.socialRegister}`}><div className='d-flex justify-content-start'><Image width={30} height={30} className='me-3' src={'/Images/social/google.svg'}/>Sign up with Google</div>  </button>
            <button className={`${styles.socialRegister}`}><div className='d-flex justify-content-start'><Image width={30} height={30} className='me-3' src={'/Images/social/2.svg'}/>Sign up with Facebook</div>  </button>
            <button className={`${styles.socialRegister}`}><div className='d-flex justify-content-start'><Image width={30} height={30} className='me-3' src={'/Images/social/apple.svg'}/>Sign up with Apple</div>  </button>
          </div>
          <div className='text-center'>
          <p>Have an account?  <Link href={'#'}>Login</Link></p>
          </div>
        </div>

      </div>
    </>
  )
}

export default Page
