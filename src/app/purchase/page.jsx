import Image from 'next/image'
import styles from './purchase.module.css'

const Page = () => {
    return (
        <>
            <section className={styles.feature0bg}>
                <div className="container">
                    <div className="mb-5 text-center">

                        <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>Complete Your Purchase</h2>
                        <p style={{ fontWeight: "bold" }}>You’re just one step away from accessing premium aviation training materials</p>

                    </div>

                </div>
            </section>
            <section className='container d-flex justify-content-center' style={{ marginBottom: "100px" }}>

                <div className="row w-100">
                    <div className="col-lg-5">
                        <div className="border p-3 rounded-3">
                            <h5 style={{ fontWeight: "bold" }} className='mb-4'>Order Summary</h5>
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <p className='mb-0 fw-bold'>ATPL Air Law</p>
                                <p className='mb-0 fw-bold'>£245</p>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <p className='mb-0 fw-bold opacity-50'>Duration</p>
                                <p className='mb-0 fw-bold opacity-50'>12 months</p>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <p className='mb-0 fw-bold'>Tax</p>
                                <p className='mb-0 fw-bold'>£22.90</p>
                            </div>
                            <hr />
                            <div className="row mb-3">
                                <div className="col-lg-8 mb-2 pe-0">
                                    <input type="text" className={`w-100 ${styles.inputCoupon}`} placeholder='Enter Coupon Code' />
                                </div>
                                <div className="col-lg-4 mb-2 ps-0">
                                    <button className={`w-100 ${styles.couponButton}`}>Submit</button>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <p className='mb-0 fw-bold'>Tax</p>
                                <p className='mb-0 fw-bold text-primary'>£251.90</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="border p-3 rounded-3">
                            <h5 style={{ fontWeight: "bold" }} className='mb-4'>Payment Details</h5>
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

            <section className='container' style={{ marginBottom: "100px" }}>
                <div className="mb-5 text-center">
                    <h4 style={{ fontSize: "1.4rem", fontWeight: "bold" }}> What Our Students Say</h4>
                </div>
                <div className="d-flex justify-content-center">


                    <div className="row w-75">
                        <div className="col-4">
                            <div className="card shadow-sm border border-light rounded-2 mb-3">
                                <div className="card-body">
                                    <div className={`d-flex justify-content-start align-items-center mb-3`} >
                                        <span className='me-1'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" className="bi bi-star" viewBox="0 0 16 16">
                                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                                            </svg>
                                        </span>
                                        <span className='me-1'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" className="bi bi-star" viewBox="0 0 16 16">
                                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                                            </svg>
                                        </span>
                                        <span className='me-1'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" className="bi bi-star" viewBox="0 0 16 16">
                                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                                            </svg>
                                        </span>
                                        <span className='me-1'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" className="bi bi-star" viewBox="0 0 16 16">
                                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                                            </svg>
                                        </span>
                                        <span className='me-1'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" className="bi bi-star" viewBox="0 0 16 16">
                                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                                            </svg>
                                        </span>
                                    </div>
                                    <div className=" mb-3">
                                        <p style={{ fontSize: "14px" }}>“The ATPL materials were crucial for my exam success.”</p>
                                        <h6 style={{ fontWeight: "bold" }}>Sarah L.</h6>
                                    </div>


                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card shadow-sm border border-light rounded-2 mb-3">
                                <div className="card-body">
                                    <div className={`d-flex justify-content-start align-items-center mb-3`} >
                                        <span className='me-1'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" className="bi bi-star" viewBox="0 0 16 16">
                                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                                            </svg>
                                        </span>
                                        <span className='me-1'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" className="bi bi-star" viewBox="0 0 16 16">
                                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                                            </svg>
                                        </span>
                                        <span className='me-1'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" className="bi bi-star" viewBox="0 0 16 16">
                                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                                            </svg>
                                        </span>
                                        <span className='me-1'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" className="bi bi-star" viewBox="0 0 16 16">
                                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                                            </svg>
                                        </span>
                                        <span className='me-1'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" className="bi bi-star" viewBox="0 0 16 16">
                                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                                            </svg>
                                        </span>
                                    </div>
                                    <div className=" mb-3">
                                        <p style={{ fontSize: "14px" }}>“The ATPL materials were crucial for my exam success.”</p>
                                        <h6 style={{ fontWeight: "bold" }}>Sarah L.</h6>
                                    </div>


                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card shadow-sm border border-light rounded-2 mb-3">
                                <div className="card-body">
                                    <div className={`d-flex justify-content-start align-items-center mb-3`} >
                                        <span className='me-1'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" className="bi bi-star" viewBox="0 0 16 16">
                                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                                            </svg>
                                        </span>
                                        <span className='me-1'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" className="bi bi-star" viewBox="0 0 16 16">
                                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                                            </svg>
                                        </span>
                                        <span className='me-1'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" className="bi bi-star" viewBox="0 0 16 16">
                                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                                            </svg>
                                        </span>
                                        <span className='me-1'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" className="bi bi-star" viewBox="0 0 16 16">
                                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                                            </svg>
                                        </span>
                                        <span className='me-1'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" className="bi bi-star" viewBox="0 0 16 16">
                                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                                            </svg>
                                        </span>
                                    </div>
                                    <div className=" mb-3">
                                        <p style={{ fontSize: "14px" }}>“The ATPL materials were crucial for my exam success.”</p>
                                        <h6 style={{ fontWeight: "bold" }}>Sarah L.</h6>
                                    </div>


                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className='container' style={{ marginBottom: "100px" }}>
                <div className="mb-5 text-center">
                    <h4 style={{ fontSize: "1.4rem", fontWeight: "bold" }}> What You’ll Get</h4>
                </div>
                <div className="d-flex justify-content-center">


                    <div className="row">
                        <div className="col-4">
                            <div className="card shadow-sm border border-light rounded-4 mb-3">
                                <div className="card-body d-flex justify-content-start">
                                    <div className="text-center mb-2 me-3">
                                        <Image
                                            src={'/Images/circle-check-blue.svg'}
                                            width={25}
                                            height={25}
                                            alt="icon"
                                        />
                                    </div>
                                    <div>

                                        <h6 style={{ fontWeight: "bold" }}>Instant Access</h6>
                                        <p className="mb-0">Access to wide range of subjects tailored for different aviation paths.</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card shadow-sm border border-light rounded-4 mb-3">
                                <div className="card-body d-flex justify-content-start">
                                    <div className="text-center mb-2 me-3">
                                        <Image
                                            src={'/Images/circle-check-blue.svg'}
                                            width={25}
                                            height={25}
                                            alt="icon"
                                        />
                                    </div>
                                    <div>

                                        <h6 style={{ fontWeight: "bold" }}>Secure Payment</h6>
                                        <p className="mb-0">Choose your subscription duration and learn at your own pace</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card shadow-sm border border-light rounded-4 mb-3">
                                <div className="card-body d-flex justify-content-start">
                                    <div className="text-center mb-2 me-3">
                                        <Image
                                            src={'/Images/circle-check-blue.svg'}
                                            width={25}
                                            height={25}
                                            alt="icon"
                                        />
                                    </div>
                                    <div>

                                        <h6 style={{ fontWeight: "bold" }}>Continuous Updates</h6>
                                        <p className="mb-0">Content developed by experienced aviation professionals and instructors.</p>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className='bg-primary p-3 pt-4 pb-4 text-center text-light'>
                <h4 style={{ fontSize: "1.4rem", fontWeight: "bold" }}>Need Help?</h4>
                <p>Join Thousands of  sucessful pilots who trusted  ATPL Pro</p>
                <button className='btn btn-light text-primary fw-bold'>
                    connect Support
                </button>
            </section>
        </>
    )
}

export default Page
