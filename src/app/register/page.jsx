'use client'
import React, { useState } from 'react'
import styles from './register.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { signIn, useSession } from "next-auth/react";
import { motion, AnimatePresence } from 'framer-motion'; // Importing Framer Motion with AnimatePresence

const Page = () => {
  const { data: session } = useSession();
  const [showNewBox, setShowNewBox] = useState(false);

  const handleSignInClick = () => {
    setShowNewBox(true);
  };

  return (
    <AnimatePresence mode="wait"> {/* Ensure exit animation is handled */}
      {!showNewBox ? (
        <motion.div
          key="registerBox"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{
            duration: 0.6,
            ease: [0.42, 0, 0.58, 1], // A smoother, valid easing function
          }}
          style={{
            width: "100%",
            maxWidth: "800px",
            background: "#ffffff",
            padding: "20px",
            borderRadius: "12px",
            border: "1px solid #D9D9D9",
            marginLeft:"5px",
            marginRight:"5px",
            

          }}
        >

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
              </div>
            </div>
            <div className="col-lg-7 p-2">
              <div className="mb-4 ps-2 pe-2">
                <h4 className='fw-bold'>Get started</h4>
                <p>Create your account now.</p>
              </div>
              <div className="mb-1 ps-2 pe-2">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email address" />
              </div>
              <div className="mb-2 ps-2 pe-2">
                <button className={`w-100 ${styles.RegisternBtn}`} onClick={handleSignInClick}>Sign In</button>
              </div>
              <div className={`${styles.dividerWithText} ps-2 pe-2`}>
                <span>Or</span>
              </div>
              <div className="mb-2 ps-2 pe-2">
                <button className={`${styles.socialRegister}`} onClick={() => signIn('google')}>
                  <div className='d-flex justify-content-start'>
                    <Image width={30} height={30} className='me-3' alt='icon' src={'/Images/social/google.svg'} />
                    Sign up with Google
                  </div>
                </button>
                <button className={`${styles.socialRegister}`} onClick={() => signIn('facebook')}>
                  <div className='d-flex justify-content-start'>
                    <Image width={30} height={30} className='me-3' alt='icon' src={'/Images/social/2.svg'} />
                    Sign up with Facebook
                  </div>
                </button>
                
              </div>
              <div className='text-center'>
                <p>Have an account?  <Link href={'/login'} className='text-primary'>Login</Link></p>
              </div>
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="successBox"
          className="new-box p-4 border rounded-3"
          initial={{ opacity: 0, x: 100 }} // Slide in from the right
          animate={{ opacity: 1, x: 0 }} // Smoothly slide into view
          exit={{ opacity: 0, x: -100 }} // Slide out to the left
          transition={{
            duration: 0.6,
            ease: [0.42, 0, 0.58, 1], // A smoother, valid easing function
          }}
          style={{
            width: "100%",
            maxWidth: "450px",
            background: "#ffffff",
            padding: "20px",
            borderRadius: "12px",
            border: "1px solid #D9D9D9"
          }}
        >
          <div className="text-center d-flex justify-content-center flex-column align-items-center mb-3">
            <div className={styles.circleItem} style={{ backgroundColor: "#1976D2" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="white" className="bi bi-person" viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
              </svg>
            </div>
            <h3 className='fw-bold'>Register</h3>
          </div>
          <form action="#" method="post" className='mb-1'>
            <div className="row">
              <div className="col-lg-6 mb-3">

                <label htmlFor="fullname" className="form-label">First Name</label>
                <input type="text" className="form-control" id="fullname" placeholder="Jhon" />

              </div>
              <div className="col-lg-6 mb-3">

                <label htmlFor="lastname" className="form-label">Last Name</label>
                <input type="text" className="form-control" id="lastname" placeholder="Smith" />

              </div>

            </div>
            <div className="mb-3 pRelative">

              <label htmlFor="pass1" className="form-label">Password</label>
              <input type="password" className="form-control" id="pass1" placeholder='Your Password' />
              <span className='pAbsolute'>

              </span>
            </div>
            <div className="mb-1 pRelative">

              <label htmlFor="pass2" className="form-label">Confirm Password</label>
              <input type="password" className="form-control" id="pass2" placeholder='Confirm Your Password' />
              <span className='pAbsolute'>

              </span>
            </div>
            <div className="form-check mb-2">
              <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
              <label className="form-check-label" htmlFor="defaultCheck1" style={{ fontSize: "14px" }}>
                I agree to the <Link href={"#"} className='text-primary'> terms and condition </Link>
              </label>
            </div>
            <button className={`w-100 ${styles.RegisternBtn}`} onClick={handleSignInClick}>Sign In</button>

          </form>
          <div className='text-center'>
            <Link className="text-primary" href={"#"} onClick={() => setShowNewBox(false)}>Change Email</Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Page;
