import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container p-3 pt-5">
                <div className="row">
                    <div className="col-lg-4">
                        <h5 className='text-light'>PassATPL Pro</h5>
                        <p className='text-light' style={{ fontSize: "14px" }}>Empowering future pilots with comprehensive ATPL exam preparation. Join our community of successful aviation professionals.</p>

                        <div className="d-flex flex-wrap mt-3 mb-4">
                            <div className="me-3">
                                <Image
                                    src={'/Images/social/1.svg'}
                                    width={32}
                                    height={32}
                                    alt="icon"
                                />
                            </div>
                            <div className="me-3">
                                <Image
                                    src={'/Images/social/2.svg'}
                                    width={32}
                                    height={32}
                                    alt="icon"
                                />
                            </div>
                            <div className="me-3">
                                <Image
                                    src={'/Images/social/3.svg'}
                                    width={32}
                                    height={32}
                                    alt="icon"
                                />
                            </div>
                            <div className="me-3">
                                <Image
                                    src={'/Images/social/4.svg'}
                                    width={32}
                                    height={32}
                                    alt="icon"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <h5 className='text-light mb-4'>Quick Links</h5>
                        <ul className='text-light ps-0' style={{ listStyle: "none" }}>
                            <li className='mb-3'><Link style={{fontSize:"14px"}} href={'#'}>Home</Link></li>
                            <li className='mb-3'><Link style={{fontSize:"14px"}} href={'#'}>About Us</Link></li>
                            <li className='mb-3'><Link style={{fontSize:"14px"}} href={'#'}>Study Materials</Link></li>
                            <li className='mb-3'><Link style={{fontSize:"14px"}} href={'#'}>Questions Banks</Link></li>
                            <li className='mb-3'><Link style={{fontSize:"14px"}} href={'#'}>Success Stories</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-2">
                        <h5 className='text-light mb-4'>Resources </h5>
                        <ul className='text-light ps-0' style={{ listStyle: "none" }}>
                            <li className='mb-3'><Link style={{fontSize:"14px"}} href={'#'}>ATPL Subjects</Link></li>
                            <li className='mb-3'><Link style={{fontSize:"14px"}} href={'#'}>Mock Test</Link></li>
                            <li className='mb-3'><Link style={{fontSize:"14px"}} href={'#'}>Study Tips</Link></li>
                            <li className='mb-3'><Link style={{fontSize:"14px"}} href={'#'}>Blogs</Link></li>
                            <li className='mb-3'><Link style={{fontSize:"14px"}} href={'#'}>Faqs</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-4">
                        <h5 className='text-light mb-4'>Stay Updated</h5>
                        <p className='text-light'>Get the latest ATPL exam updates and study tips</p>
                        <form action="#" method="post">

                            <div className="row">
                                <div className="col-lg-8 mb-3">
                                    <input type="text" className='form-control' placeholder='Enter you email' />
                                </div>
                                <div className="col-lg-4">
                                    <button className='btn btn-warning w-100'>Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <hr className='mb-0'/>
            <div className="text-center pb-3">
            <p className='mb-0 text-light'>© 2024 PassATPL Pro. All rights reserved. | <Link className='nav-link'style={{display:"inline-block"}} href={'#'}> Terms of Service </Link> | <Link className='nav-link'style={{display:"inline-block"}} href={'#'}> Privacy Policy</Link></p>
            </div>
                
        </footer>
    )
}

export default Footer
