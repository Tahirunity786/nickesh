
import styles from './forgot.module.css'
import Link from 'next/link'

const Page = () => {
    return (

        <>

            <div className="mb-2  d-flex flex-column justify-content-center align-items-center ">
                <div className={styles.circleItem} style={{ backgroundColor: "#1976D2" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white" className="bi bi-key" viewBox="0 0 16 16">
                        <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8m4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5" />
                        <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                    </svg>
                </div>
                <div className="mb-2 text-center">
                    <h4>Forgot Password</h4>
                    <p>No worries, we will send you reset instruction</p>
                </div>

            </div>


            <div className="mb-2 ps-2 pe-2">

                <div className="mb-3 ">
                    <label htmlFor="email" className="form-label" style={{ fontSize: "16px" }}>Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter your email address" />
                </div>

            </div>

            <div className="mb-2 ps-2 pe-2">
                <button className={`w-100 ${styles.forgotBtn}`}>Submit</button>
            </div>
            <div className="text-center">
                <p>Return to  <Link href={'/login'} className='text-primary'> Login</Link></p>
            </div>

        </>
    )
}

export default Page
