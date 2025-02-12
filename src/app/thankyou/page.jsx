import Image from 'next/image'
import styles from './thanyou.module.css'

const Page = () => {
    return (
        <>
            <section className={styles.feature0bg}>
                <div className="container">
                    <div className="mb-5 text-center">

                        <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>Thank You for Your Purchase!</h2>
                        <p style={{ fontWeight: "bold" }}>Your  order has been confirmed and you have access to your course materials.</p>

                    </div>

                </div>
            </section>
            <section className='container d-flex justify-content-center' style={{ marginBottom: "100px" }}>

                <div className="row w-100">
                    <div className="col-lg-12 text-center p-3 mb-2 rounded-2 border">
                        <Image
                            src={'/Images/Circle-check-green.svg'}
                            width={35}
                            height={35}
                            alt='Icon'
                            className='mb-3'
                        />
                        <div className="mb-5">
                            <h4 style={{ fontSize: "1.4rem", fontWeight: "bold" }}>Complete Your Purchase</h4>
                            <p>Order Number: <span> ORD-12345</span></p>
                            <p>Item: <span> ATPL Air Law</span></p>
                            <p>Amount paid: <span>   £256</span></p>

                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="border p-3 rounded-3">
                            <h5 style={{ fontWeight: "bold" }} className='mb-4'>Access Your Dashboard</h5>
                            <p>You can now access your course materials through our learning dashboard.</p>

                            <button className={`w-100 mb-3 rounded-3 ${styles.couponButton}`}>Submit</button>
                            <p>You can also access your dashboard at any time by clicking on your profile icon and selecting the dashboard option.</p>


                            <div className="d-flex justify-content-start align-items-center mb-3">
                                <div className='mb-0 fw-bold'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                    </svg>
                                </div>
                                <div className='mb-0 ms-3 '>

                                    Dashboard
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right ms-3" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="border p-3 rounded-3">
                            <h5 style={{ fontWeight: "bold" }} className='mb-4'>Check your Email</h5>
                            <p>We’ve sent you an email with important Information</p>
                            <div className="ps-4">


                                <div className="d-flex justify-content-start align-items-center mb-2">
                                    <span className='me-3'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                                        </svg>
                                    </span>
                                    <span className='mb-0' style={{ fontSize: "14px" }}>Detailed receipt of your purchase</span>
                                </div>
                                <div className="d-flex justify-content-start align-items-center mb-2">
                                    <span className='me-3'>
                                        <Image
                                            src={'/Images/book.svg'}
                                            width={16}
                                            height={16}
                                            alt="icon"
                                        />
                                    </span>
                                    <span className='mb-0' style={{ fontSize: "14px" }}>Instructions on how to access your course materials</span>
                                </div>

                                <div className="d-flex justify-content-start align-items-center mb-2">
                                    <span className='me-3'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                        </svg>
                                    </span>
                                    <span className='mb-0' style={{ fontSize: "14px" }}>A direct link to your learning dashboard</span>
                                </div>
                            </div>
                            <p>If you don’t see the email, please check your spam folder.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='container' style={{ marginBottom: "100px" }}>
                <div className="mb-5 text-center">
                    <h4 style={{ fontSize: "1.4rem", fontWeight: "bold" }}>Complete Your Purchase</h4>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card shadow-sm border border-dark rounded-2 mb-3">
                            <div className="card-body p-0">
                                <div className='d-flex justify-content-start rounded-top-2 align-items-center p-3'>

                                    <div className="text-center mb-2 me-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 13 15" fill="none">
                                            <path d="M11.6357 11.6875H11.417V13.4375H11.6357C11.9912 13.4375 12.292 13.7383 12.292 14.0938C12.292 14.4766 11.9912 14.75 11.6357 14.75H2.22949C0.999023 14.75 0.0419922 13.793 0.0419922 12.5625V2.9375C0.0419922 1.73438 0.999023 0.75 2.22949 0.75H11.6357C11.9912 0.75 12.292 1.05078 12.292 1.40625V11.0312C12.292 11.4141 11.9912 11.6875 11.6357 11.6875ZM10.1045 13.4375V11.6875H2.22949C1.7373 11.6875 1.35449 12.0977 1.35449 12.5625C1.35449 13.0547 1.7373 13.4375 2.22949 13.4375H10.1045ZM10.9795 10.375V2.0625H2.22949C1.7373 2.0625 1.35449 2.47266 1.35449 2.9375V10.5664C1.60059 10.457 1.90137 10.375 2.22949 10.375H10.9795ZM4.19824 5.125C3.81543 5.125 3.54199 4.85156 3.54199 4.46875C3.54199 4.11328 3.81543 3.8125 4.19824 3.8125H9.01074C9.36621 3.8125 9.66699 4.11328 9.66699 4.46875C9.66699 4.85156 9.36621 5.125 9.01074 5.125H4.19824ZM4.19824 7.3125C3.81543 7.3125 3.54199 7.03906 3.54199 6.65625C3.54199 6.30078 3.81543 6 4.19824 6H9.01074C9.36621 6 9.66699 6.30078 9.66699 6.65625C9.66699 7.03906 9.36621 7.3125 9.01074 7.3125H4.19824Z" fill="black" />
                                        </svg>
                                    </div>
                                    <div>

                                        <h6 style={{ fontWeight: "bold" }} className='mb-0'>Air Law</h6>


                                    </div>

                                </div>
                                <hr className='m-0' />

                                <div className="p-3">
                                    <h6 >Access to all ATPL subjects</h6>
                                    <div className="d-flex justify-content-start align-items-center mb-3">
                                        <span className='me-3'>
                                            <Image
                                                src={'/Images/clock.svg'}
                                                width={16}
                                                height={16}
                                                alt='icon'
                                            />
                                        </span>
                                        <span>
                                            <select id="ppp">
                                                <option value="mon">1 month</option>
                                                <option value="mon">24 month</option>
                                                <option value="mon">48 month</option>
                                            </select>
                                        </span>
                                    </div>
                                    <div className="ps-4">


                                        <div className="d-flex justify-content-start align-items-center mb-2">
                                            <span className='me-3'>
                                                <Image
                                                    src={'/Images/book.svg'}
                                                    width={16}
                                                    height={16}
                                                    alt="icon"
                                                />
                                            </span>
                                            <span className='mb-0' style={{ fontSize: "14px" }}>Full access for EASA 2016 and 2020</span>
                                        </div>
                                        <div className="d-flex justify-content-start align-items-center mb-2">
                                            <span className='me-3'>
                                                <Image
                                                    src={'/Images/bullseye.svg'}
                                                    width={16}
                                                    height={16}
                                                    alt="icon"
                                                />
                                            </span>
                                            <span className='mb-0' style={{ fontSize: "14px" }}>ATPL (A) and ATPL (H) Questionbank</span>
                                        </div>
                                        <div className="d-flex justify-content-start align-items-center mb-2">
                                            <span className='me-3'>
                                                <Image
                                                    src={'/Images/circle-check.svg'}
                                                    width={16}
                                                    height={16}
                                                    alt="icon"
                                                />
                                            </span>
                                            <span className='mb-0' style={{ fontSize: "14px" }}>Instant activation</span>
                                        </div>
                                        <div className="d-flex justify-content-start align-items-center mb-2">
                                            <span className='me-3'>
                                                <Image
                                                    src={'/Images/circle-check.svg'}
                                                    width={16}
                                                    height={16}
                                                    alt="icon"
                                                />
                                            </span>
                                            <span className='mb-0' style={{ fontSize: "14px" }}>Marked Real Exam Questions</span>
                                        </div>
                                    </div>
                                    <p className='mb-1 text-primary' style={{ fontSize: "2rem" }}>£1598</p>
                                    <span className={styles.tagPrimary}>ATPL(A)</span>
                                    <span className={styles.tagPrimary}>ATPL(H)</span>

                                </div>
                                <div className="ps-3 pe-3 pt-2 pb-2">
                                    <button className='btn btn-outline-primary w-100'>Buy Bundle <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right ms-2" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                    </svg></button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card shadow-sm border border-dark rounded-2 mb-3">
                            <div className="card-body p-0">
                                <div className='d-flex justify-content-start rounded-top-2 align-items-center p-3'>

                                    <div className="text-center mb-2 me-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 13 15" fill="none">
                                            <path d="M11.6357 11.6875H11.417V13.4375H11.6357C11.9912 13.4375 12.292 13.7383 12.292 14.0938C12.292 14.4766 11.9912 14.75 11.6357 14.75H2.22949C0.999023 14.75 0.0419922 13.793 0.0419922 12.5625V2.9375C0.0419922 1.73438 0.999023 0.75 2.22949 0.75H11.6357C11.9912 0.75 12.292 1.05078 12.292 1.40625V11.0312C12.292 11.4141 11.9912 11.6875 11.6357 11.6875ZM10.1045 13.4375V11.6875H2.22949C1.7373 11.6875 1.35449 12.0977 1.35449 12.5625C1.35449 13.0547 1.7373 13.4375 2.22949 13.4375H10.1045ZM10.9795 10.375V2.0625H2.22949C1.7373 2.0625 1.35449 2.47266 1.35449 2.9375V10.5664C1.60059 10.457 1.90137 10.375 2.22949 10.375H10.9795ZM4.19824 5.125C3.81543 5.125 3.54199 4.85156 3.54199 4.46875C3.54199 4.11328 3.81543 3.8125 4.19824 3.8125H9.01074C9.36621 3.8125 9.66699 4.11328 9.66699 4.46875C9.66699 4.85156 9.36621 5.125 9.01074 5.125H4.19824ZM4.19824 7.3125C3.81543 7.3125 3.54199 7.03906 3.54199 6.65625C3.54199 6.30078 3.81543 6 4.19824 6H9.01074C9.36621 6 9.66699 6.30078 9.66699 6.65625C9.66699 7.03906 9.36621 7.3125 9.01074 7.3125H4.19824Z" fill="black" />
                                        </svg>
                                    </div>
                                    <div>

                                        <h6 style={{ fontWeight: "bold" }} className='mb-0'>Air Law</h6>


                                    </div>

                                </div>
                                <hr className='m-0' />

                                <div className="p-3">
                                    <h6 >Access to all ATPL subjects</h6>
                                    <div className="d-flex justify-content-start align-items-center mb-3">
                                        <span className='me-3'>
                                            <Image
                                                src={'/Images/clock.svg'}
                                                width={16}
                                                height={16}
                                                alt='icon'
                                            />
                                        </span>
                                        <span>
                                            <select id="ppp">
                                                <option value="mon">1 month</option>
                                                <option value="mon">24 month</option>
                                                <option value="mon">48 month</option>
                                            </select>
                                        </span>
                                    </div>
                                    <div className="ps-4">


                                        <div className="d-flex justify-content-start align-items-center mb-2">
                                            <span className='me-3'>
                                                <Image
                                                    src={'/Images/book.svg'}
                                                    width={16}
                                                    height={16}
                                                    alt="icon"
                                                />
                                            </span>
                                            <span className='mb-0' style={{ fontSize: "14px" }}>Full access for EASA 2016 and 2020</span>
                                        </div>
                                        <div className="d-flex justify-content-start align-items-center mb-2">
                                            <span className='me-3'>
                                                <Image
                                                    src={'/Images/bullseye.svg'}
                                                    width={16}
                                                    height={16}
                                                    alt="icon"
                                                />
                                            </span>
                                            <span className='mb-0' style={{ fontSize: "14px" }}>ATPL (A) and ATPL (H) Questionbank</span>
                                        </div>
                                        <div className="d-flex justify-content-start align-items-center mb-2">
                                            <span className='me-3'>
                                                <Image
                                                    src={'/Images/circle-check.svg'}
                                                    width={16}
                                                    height={16}
                                                    alt="icon"
                                                />
                                            </span>
                                            <span className='mb-0' style={{ fontSize: "14px" }}>Instant activation</span>
                                        </div>
                                        <div className="d-flex justify-content-start align-items-center mb-2">
                                            <span className='me-3'>
                                                <Image
                                                    src={'/Images/circle-check.svg'}
                                                    width={16}
                                                    height={16}
                                                    alt="icon"
                                                />
                                            </span>
                                            <span className='mb-0' style={{ fontSize: "14px" }}>Marked Real Exam Questions</span>
                                        </div>
                                    </div>
                                    <p className='mb-1 text-primary' style={{ fontSize: "2rem" }}>£1598</p>
                                    <span className={styles.tagPrimary}>ATPL(A)</span>
                                    <span className={styles.tagPrimary}>ATPL(H)</span>

                                </div>
                                <div className="ps-3 pe-3 pt-2 pb-2">
                                    <button className='btn btn-outline-primary w-100'>Buy Bundle <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right ms-2" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                    </svg></button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card shadow-sm border border-dark rounded-2 mb-3">
                            <div className="card-body p-0">
                                <div className='d-flex justify-content-start rounded-top-2 align-items-center p-3'>

                                    <div className="text-center mb-2 me-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 13 15" fill="none">
                                            <path d="M11.6357 11.6875H11.417V13.4375H11.6357C11.9912 13.4375 12.292 13.7383 12.292 14.0938C12.292 14.4766 11.9912 14.75 11.6357 14.75H2.22949C0.999023 14.75 0.0419922 13.793 0.0419922 12.5625V2.9375C0.0419922 1.73438 0.999023 0.75 2.22949 0.75H11.6357C11.9912 0.75 12.292 1.05078 12.292 1.40625V11.0312C12.292 11.4141 11.9912 11.6875 11.6357 11.6875ZM10.1045 13.4375V11.6875H2.22949C1.7373 11.6875 1.35449 12.0977 1.35449 12.5625C1.35449 13.0547 1.7373 13.4375 2.22949 13.4375H10.1045ZM10.9795 10.375V2.0625H2.22949C1.7373 2.0625 1.35449 2.47266 1.35449 2.9375V10.5664C1.60059 10.457 1.90137 10.375 2.22949 10.375H10.9795ZM4.19824 5.125C3.81543 5.125 3.54199 4.85156 3.54199 4.46875C3.54199 4.11328 3.81543 3.8125 4.19824 3.8125H9.01074C9.36621 3.8125 9.66699 4.11328 9.66699 4.46875C9.66699 4.85156 9.36621 5.125 9.01074 5.125H4.19824ZM4.19824 7.3125C3.81543 7.3125 3.54199 7.03906 3.54199 6.65625C3.54199 6.30078 3.81543 6 4.19824 6H9.01074C9.36621 6 9.66699 6.30078 9.66699 6.65625C9.66699 7.03906 9.36621 7.3125 9.01074 7.3125H4.19824Z" fill="black" />
                                        </svg>
                                    </div>
                                    <div>

                                        <h6 style={{ fontWeight: "bold" }} className='mb-0'>Air Law</h6>


                                    </div>

                                </div>
                                <hr className='m-0' />

                                <div className="p-3">
                                    <h6 >Access to all ATPL subjects</h6>
                                    <div className="d-flex justify-content-start align-items-center mb-3">
                                        <span className='me-3'>
                                            <Image
                                                src={'/Images/clock.svg'}
                                                width={16}
                                                height={16}
                                                alt='icon'
                                            />
                                        </span>
                                        <span>
                                            <select id="ppp">
                                                <option value="mon">1 month</option>
                                                <option value="mon">24 month</option>
                                                <option value="mon">48 month</option>
                                            </select>
                                        </span>
                                    </div>
                                    <div className="ps-4">


                                        <div className="d-flex justify-content-start align-items-center mb-2">
                                            <span className='me-3'>
                                                <Image
                                                    src={'/Images/book.svg'}
                                                    width={16}
                                                    height={16}
                                                    alt="icon"
                                                />
                                            </span>
                                            <span className='mb-0' style={{ fontSize: "14px" }}>Full access for EASA 2016 and 2020</span>
                                        </div>
                                        <div className="d-flex justify-content-start align-items-center mb-2">
                                            <span className='me-3'>
                                                <Image
                                                    src={'/Images/bullseye.svg'}
                                                    width={16}
                                                    height={16}
                                                    alt="icon"
                                                />
                                            </span>
                                            <span className='mb-0' style={{ fontSize: "14px" }}>ATPL (A) and ATPL (H) Questionbank</span>
                                        </div>
                                        <div className="d-flex justify-content-start align-items-center mb-2">
                                            <span className='me-3'>
                                                <Image
                                                    src={'/Images/circle-check.svg'}
                                                    width={16}
                                                    height={16}
                                                    alt="icon"
                                                />
                                            </span>
                                            <span className='mb-0' style={{ fontSize: "14px" }}>Instant activation</span>
                                        </div>
                                        <div className="d-flex justify-content-start align-items-center mb-2">
                                            <span className='me-3'>
                                                <Image
                                                    src={'/Images/circle-check.svg'}
                                                    width={16}
                                                    height={16}
                                                    alt="icon"
                                                />
                                            </span>
                                            <span className='mb-0' style={{ fontSize: "14px" }}>Marked Real Exam Questions</span>
                                        </div>
                                    </div>
                                    <p className='mb-1 text-primary' style={{ fontSize: "2rem" }}>£1598</p>
                                    <span className={styles.tagPrimary}>ATPL(A)</span>
                                    <span className={styles.tagPrimary}>ATPL(H)</span>

                                </div>
                                <div className="ps-3 pe-3 pt-2 pb-2">
                                    <button className='btn btn-outline-primary w-100'>Buy Bundle <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right ms-2" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                    </svg></button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='p-3 pt-4 pb-4 text-center '>
                <h4 style={{ fontSize: "1.4rem", fontWeight: "bold" }}>How Did We Do?</h4>
                <p>Your feedback helps us improve our services. We’d love to hear your purchase experience</p>
                <button className='btn btn-primary  fw-bold'>
                    Give Feedback
                </button>
            </section>
        </>
    )
}

export default Page
