'use client'
import { useState } from 'react';
import styles from './single-shop.module.css'
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';

const Page = () => {
    const searchParams = useSearchParams();
    const source = searchParams.get("source");
    const [activeCategory, setActiveCategory] = useState(`${source ? source : "ATPL"}`);

    const options = [
        { id: 1, name: "ATPL" },
        { id: 2, name: "PPL" },
        { id: 3, name: "Drone" },
        { id: 4, name: "Ballon" },
    ];

    return (

        <>
            <section className={styles.feature0bg}>
                <div className="container">
                    <div className="mb-5 text-center">

                        <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>Tailored Learning Packages for <br /> Every Aviator</h2>
                        <p style={{ fontWeight: "bold" }}>Choose from our comprehensive range of courses and customize your learning journey</p>

                        <div className="mb-3">
                            <button className='btn btn-light'>Explore Database</button>
                        </div>
                    </div>

                </div>
            </section>
            <section className='container ps-4 pe-4' style={{ marginBottom: "50px" }}>
                <div className="w-100 bg-primary row p-2 rounded-2">
                    {
                        options.map((data) => (
                            <div className={`col-lg-3 `} key={data.id}>
                                <div className={`${activeCategory === data.name ? styles.activeItemShop : styles.itemShop} rounded-2 p-2`} onClick={() => { setActiveCategory(data.name) }}>
                                    <span className='ms-4 me-4'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 31 23" fill={`${activeCategory === data.name ? "#1A73E8" : 'white'}`}>
                                            <path d="M4.25 14.5312L0.6875 10.6406C0.3125 10.2188 0.453125 9.5625 0.921875 9.32812L2.79688 8.34375C3.07812 8.25 3.3125 8.25 3.59375 8.34375L6.96875 10.0781L11.7969 7.59375L4.48438 3C4.10938 2.625 4.20312 1.92188 4.71875 1.6875L7.8125 0.09375C8.09375 0 8.375 0 8.65625 0.1875L18.9219 4.03125L23.5156 1.6875C24.7812 1.03125 26.1406 0.65625 27.5469 0.75C29.1406 0.84375 29.9375 1.35938 30.3125 2.0625C30.6406 2.71875 30.5469 3.70312 29.6562 5.01562C28.9062 6.23438 27.7812 7.125 26.5156 7.78125L12.875 14.6719C12.4531 14.9062 11.9844 15 11.5156 15H5.375C4.95312 15 4.53125 14.8594 4.25 14.5312ZM29 19.5C29.7969 19.5 30.5 20.2031 30.5 21C30.5 21.8438 29.7969 22.5 29 22.5H2C1.15625 22.5 0.5 21.8438 0.5 21C0.5 20.2031 1.15625 19.5 2 19.5H29Z" />
                                        </svg>
                                    </span>
                                    {data.name}
                                </div>
                            </div>
                        ))
                    }

                </div>
            </section>
            <section className='container' style={{ marginBottom: "100px" }}>
                <div className="mb-4 text-start">

                    <h4 style={{ fontSize: "1.3rem", fontWeight: "bold" }}>ATPL-Airline Transport Pilot License</h4>
                    <p>Choose your preffered subscription option:</p>
                </div>




                <div className="row g-3">
                    <div className="col-4">
                        <div className="card shadow-sm border border-primary rounded-2 mb-3">
                            <div className="card-body p-0">
                                <div className='d-flex justify-content-start  bg-primary text-light align-items-center  rounded-top-2 p-3'>

                                    <div className="text-center mb-2 me-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 31 23" fill="white">
                                            <path d="M4.25 14.5312L0.6875 10.6406C0.3125 10.2188 0.453125 9.5625 0.921875 9.32812L2.79688 8.34375C3.07812 8.25 3.3125 8.25 3.59375 8.34375L6.96875 10.0781L11.7969 7.59375L4.48438 3C4.10938 2.625 4.20312 1.92188 4.71875 1.6875L7.8125 0.09375C8.09375 0 8.375 0 8.65625 0.1875L18.9219 4.03125L23.5156 1.6875C24.7812 1.03125 26.1406 0.65625 27.5469 0.75C29.1406 0.84375 29.9375 1.35938 30.3125 2.0625C30.6406 2.71875 30.5469 3.70312 29.6562 5.01562C28.9062 6.23438 27.7812 7.125 26.5156 7.78125L12.875 14.6719C12.4531 14.9062 11.9844 15 11.5156 15H5.375C4.95312 15 4.53125 14.8594 4.25 14.5312ZM29 19.5C29.7969 19.5 30.5 20.2031 30.5 21C30.5 21.8438 29.7969 22.5 29 22.5H2C1.15625 22.5 0.5 21.8438 0.5 21C0.5 20.2031 1.15625 19.5 2 19.5H29Z" />
                                        </svg>
                                    </div>
                                    <div>

                                        <h6 style={{ fontWeight: "bold" }} className='mb-0'>Complete ATPL Bundle</h6>


                                    </div>

                                </div>

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
                                            <span className='mb-0' style={{fontSize:"16px"}}>Full access for EASA 2016 and 2020</span>
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
                                            <span className='mb-0' style={{fontSize:"16px"}}>ATPL (A) and ATPL (H) Questionbank</span>
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
                                            <span className='mb-0' style={{fontSize:"16px"}}>Instant activation</span>
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
                                            <span className='mb-0' style={{fontSize:"16px"}}>Marked Real Exam Questions</span>
                                        </div>
                                    </div>
                                    <p className='mb-1 text-primary' style={{ fontSize: "2rem" }}>£1598</p>
                                    <span className={styles.tagPrimary}>ATPL(A)</span>
                                    <span className={styles.tagPrimary}>ATPL(H)</span>

                                </div>
                                <div className="ps-3 pe-3 pt-2 pb-2">
                                    <button className='btn btn-primary w-100'>Buy Bundle <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right ms-2" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                    </svg></button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-4">
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
                                            <span className='mb-0' style={{fontSize:"16px"}}>Full access for EASA 2016 and 2020</span>
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
                                            <span className='mb-0' style={{fontSize:"16px"}}>ATPL (A) and ATPL (H) Questionbank</span>
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
                                            <span className='mb-0' style={{fontSize:"16px"}}>Instant activation</span>
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
                                            <span className='mb-0' style={{fontSize:"16px"}}>Marked Real Exam Questions</span>
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
                    <div className="col-4">
                        <div className="card shadow-sm border border-dark rounded-2 mb-3">
                            <div className="card-body p-0">
                                <div className='d-flex justify-content-start rounded-top-2 align-items-center p-3'>

                                    <div className="text-center mb-2 me-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 13 15" fill="none">
                                            <path d="M11.6357 11.6875H11.417V13.4375H11.6357C11.9912 13.4375 12.292 13.7383 12.292 14.0938C12.292 14.4766 11.9912 14.75 11.6357 14.75H2.22949C0.999023 14.75 0.0419922 13.793 0.0419922 12.5625V2.9375C0.0419922 1.73438 0.999023 0.75 2.22949 0.75H11.6357C11.9912 0.75 12.292 1.05078 12.292 1.40625V11.0312C12.292 11.4141 11.9912 11.6875 11.6357 11.6875ZM10.1045 13.4375V11.6875H2.22949C1.7373 11.6875 1.35449 12.0977 1.35449 12.5625C1.35449 13.0547 1.7373 13.4375 2.22949 13.4375H10.1045ZM10.9795 10.375V2.0625H2.22949C1.7373 2.0625 1.35449 2.47266 1.35449 2.9375V10.5664C1.60059 10.457 1.90137 10.375 2.22949 10.375H10.9795ZM4.19824 5.125C3.81543 5.125 3.54199 4.85156 3.54199 4.46875C3.54199 4.11328 3.81543 3.8125 4.19824 3.8125H9.01074C9.36621 3.8125 9.66699 4.11328 9.66699 4.46875C9.66699 4.85156 9.36621 5.125 9.01074 5.125H4.19824ZM4.19824 7.3125C3.81543 7.3125 3.54199 7.03906 3.54199 6.65625C3.54199 6.30078 3.81543 6 4.19824 6H9.01074C9.36621 6 9.66699 6.30078 9.66699 6.65625C9.66699 7.03906 9.36621 7.3125 9.01074 7.3125H4.19824Z" fill="black" />
                                        </svg>
                                    </div>
                                    <div>

                                        <h6 style={{ fontWeight: "bold" }} className='mb-0'>Aircraft General Knowledge</h6>


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
                                            <span className='mb-0' style={{fontSize:"16px"}}>Full access for EASA 2016 and 2020</span>
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
                                            <span className='mb-0' style={{fontSize:"16px"}}>ATPL (A) and ATPL (H) Questionbank</span>
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
                                            <span className='mb-0' style={{fontSize:"16px"}}>Instant activation</span>
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
                                            <span className='mb-0' style={{fontSize:"16px"}}>Marked Real Exam Questions</span>
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
                    <div className="col-4">
                        <div className="card shadow-sm border border-dark rounded-2 mb-3">
                            <div className="card-body p-0">
                                <div className='d-flex justify-content-start rounded-top-2 align-items-center p-3'>

                                    <div className="text-center mb-2 me-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 13 15" fill="none">
                                            <path d="M11.6357 11.6875H11.417V13.4375H11.6357C11.9912 13.4375 12.292 13.7383 12.292 14.0938C12.292 14.4766 11.9912 14.75 11.6357 14.75H2.22949C0.999023 14.75 0.0419922 13.793 0.0419922 12.5625V2.9375C0.0419922 1.73438 0.999023 0.75 2.22949 0.75H11.6357C11.9912 0.75 12.292 1.05078 12.292 1.40625V11.0312C12.292 11.4141 11.9912 11.6875 11.6357 11.6875ZM10.1045 13.4375V11.6875H2.22949C1.7373 11.6875 1.35449 12.0977 1.35449 12.5625C1.35449 13.0547 1.7373 13.4375 2.22949 13.4375H10.1045ZM10.9795 10.375V2.0625H2.22949C1.7373 2.0625 1.35449 2.47266 1.35449 2.9375V10.5664C1.60059 10.457 1.90137 10.375 2.22949 10.375H10.9795ZM4.19824 5.125C3.81543 5.125 3.54199 4.85156 3.54199 4.46875C3.54199 4.11328 3.81543 3.8125 4.19824 3.8125H9.01074C9.36621 3.8125 9.66699 4.11328 9.66699 4.46875C9.66699 4.85156 9.36621 5.125 9.01074 5.125H4.19824ZM4.19824 7.3125C3.81543 7.3125 3.54199 7.03906 3.54199 6.65625C3.54199 6.30078 3.81543 6 4.19824 6H9.01074C9.36621 6 9.66699 6.30078 9.66699 6.65625C9.66699 7.03906 9.36621 7.3125 9.01074 7.3125H4.19824Z" fill="black" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h6 style={{ fontWeight: "bold" }} className='mb-0'>Flight Planning and Monitoring</h6>
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
                                            <span className='mb-0' style={{fontSize:"16px"}}>Full access for EASA 2016 and 2020</span>
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
                                            <span className='mb-0' style={{fontSize:"16px"}}>ATPL (A) and ATPL (H) Questionbank</span>
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
                                            <span className='mb-0' style={{fontSize:"16px"}}>Instant activation</span>
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
                                            <span className='mb-0' style={{fontSize:"16px"}}>Marked Real Exam Questions</span>
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
        </>
    )
}

export default Page
