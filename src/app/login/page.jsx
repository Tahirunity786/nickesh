'use client';

import Image from 'next/image'
import styles from './login.module.css'
import Link from 'next/link'
import { signIn, useSession } from "next-auth/react";
import axios from "axios";


const Page = () => {
    const { data: session } = useSession();

    // Function to send token to Django for verification
    const sendTokenToBackend = async () => {
        if (session && session.accessToken) {
            try {
                const response = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth/google/`, {
                    token: session.accessToken,
                });
            } catch (error) {
                console.error("Error authenticating with Django:", error);
            }
        }
    };
    return (

        <>

            <div className="mb-2  d-flex flex-column justify-content-center align-items-center ">
                <div className="mb-3 ps-sm-5">

                    <Image
                        src={'/Images/logo.svg'}
                        width={182}
                        height={50}
                        alt='Logo'
                    />
                </div>
                <div className="mb-2 text-center">
                    <h4>Welcome <span style={{ color: "#037EC2" }}>Back</span></h4>
                    <p>Enter your details to Sign in</p>
                </div>

            </div>
            <div className="mb-2  d-flex justify-content-center align-items-center">
                <button className={`${styles.socialRegister}`} onClick={() => signIn("google")}><Image width={30} height={30} alt='icon' src={'/Images/social/google.svg'} /></button>
                <button className={`${styles.socialRegister}`} onClick={() => signIn("facebook")}><Image width={30} height={30} alt='icon' src={'/Images/social/2.svg'} /> </button>
                <button className={`${styles.socialRegister}`} onClick={() => signIn("apple")}><Image width={30} height={30} alt='icon' src={'/Images/social/apple.svg'} /></button>
            </div>
            <div className={`${styles.dividerWithText} ps-2 pe-2`}>
                <span>Or</span>
            </div>
            <div className="mb-2 ps-2 pe-2">

                <div className="mb-3 ">
                    <label htmlFor="email" className="form-label" style={{ fontSize: "16px" }}>Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter your email address" />
                </div>
                <div>
                    <label htmlFor="password" className="form-label" style={{ fontSize: "16px" }}>Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Your Password" />
                </div>
            </div>
            <div className="mb-2 ps-2 pe-2 d-flex justify-content-between">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label className="form-check-label" htmlFor="defaultCheck1" style={{ fontSize: "14px" }}>
                        Remember me
                    </label>
                </div>
                <div><Link href={'/forgot-password'} className='text-primary' style={{ fontSize: "14px" }}>Forgot Password?</Link></div>
            </div>
            <div className="mb-2">
            
           
            <button className={`w-100 ${styles.LoginBtn}`} onClick={() => signIn("google")}>Sign In</button>
        </div >
            <div className="text-center">
                <p>Don’t have an account? <Link href={'/register'} className='text-primary'> Sign Up</Link></p>
            </div>

        </>
    )
}

export default Page
