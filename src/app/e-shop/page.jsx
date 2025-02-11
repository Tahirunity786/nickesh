import Image from 'next/image'
import styles from './eshop.module.css'


const Page = () => {
    return (
        <>
            <section className={styles.feature0bg}>
                <div className="container">
                    <div className="mb-5 text-center">

                        <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>Elevate Your Aviation <br /> Knowledge</h2>
                        <p style={{ fontWeight: "bold" }}>Access comprehensive aviation databases curated by industry experts. Enhance <br /> your skills and stay ahead in your aviation career.</p>

                        <div className="mb-3">
                            <button className='btn btn-light'>Explore Database</button>
                        </div>
                    </div>

                </div>
            </section>
            <section className='container' style={{ marginBottom: "100px" }}>
                <div className="mb-3 text-center">

                    <h4 style={{ fontSize: "1.3rem", fontWeight: "bold" }}>Specialized Aviation Databases</h4>
                    <p>Choose from our range of meticulously curated databases, designed to meet the <br />specific needs of various aviation professionals.</p>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="card shadow-sm border border-light rounded-4 mb-3">
                            <div className="card-body ">
                                <div className='d-flex justify-content-start mb-3'>

                                    <div className="text-center mb-2 me-3">
                                        <Image
                                            src={'/Images/plane-flying.svg'}
                                            width={25}
                                            height={25}
                                            alt="icon"
                                        />
                                    </div>
                                    <div>

                                        <h6 style={{ fontWeight: "bold" }}>ATPL Database</h6>
                                        <p className="mb-0">Comprehensive resources for airline transport pilots</p>

                                    </div>

                                </div>
                                <div className="d-flex justify-content-start align-items-center">
                                    <span className="badge text-bg-secondary me-3">ATPL(A)</span>
                                    <span className="badge text-bg-secondary">ATPL(H)</span>
                                </div>
                                <hr />
                                <div className="mb-4">
                                    <div className="d-flex justify-content-start align-items-center mb-2">
                                        <span className='me-3'>
                                            <Image
                                                src={'/Images/circle-check-blue.svg'}
                                                width={20}
                                                height={20}
                                                alt="icon"
                                            />
                                        </span>
                                        <span className='mb-0'>Complete ATPL theory package</span>
                                    </div>
                                    <div className="d-flex justify-content-start align-items-center mb-2">
                                        <span className='me-3'>
                                            <Image
                                                src={'/Images/circle-check-blue.svg'}
                                                width={20}
                                                height={20}
                                                alt="icon"
                                            />
                                        </span>
                                        <span className='mb-0'>14 subject areas covered in-depth</span>
                                    </div>
                                    <div className="d-flex justify-content-start align-items-center mb-2">
                                        <span className='me-3'>
                                            <Image
                                                src={'/Images/circle-check-blue.svg'}
                                                width={20}
                                                height={20}
                                                alt="icon"
                                            />
                                        </span>
                                        <span className='mb-0'>Regularly updated content</span>
                                    </div>
                                    <div className="d-flex justify-content-start align-items-center mb-2">
                                        <span className='me-3'>
                                            <Image
                                                src={'/Images/circle-check-blue.svg'}
                                                width={20}
                                                height={20}
                                                alt="icon"
                                            />
                                        </span>
                                        <span className='mb-0'>Exam-style question bank</span>
                                    </div>
                                </div>
                                <button className='btn btn-primary w-100'>Buy now <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right ms-2" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                </svg></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card shadow-sm border border-light rounded-4 mb-3">
                            <div className="card-body ">
                                <div className='d-flex justify-content-start mb-3'>

                                    <div className="text-center mb-2 me-3">
                                        <Image
                                            src={'/Images/plane-flying.svg'}
                                            width={25}
                                            height={25}
                                            alt="icon"
                                        />
                                    </div>
                                    <div>

                                        <h6 style={{ fontWeight: "bold" }}>ATPL Database</h6>
                                        <p className="mb-0">Comprehensive resources for airline transport pilots</p>

                                    </div>

                                </div>
                                <div className="d-flex justify-content-start align-items-center">
                                    <span className="badge text-bg-secondary me-3">ATPL(A)</span>
                                    <span className="badge text-bg-secondary">ATPL(H)</span>
                                </div>
                                <hr />
                                <div className="mb-4">
                                    <div className="d-flex justify-content-start align-items-center mb-2">
                                        <span className='me-3'>
                                            <Image
                                                src={'/Images/circle-check-blue.svg'}
                                                width={20}
                                                height={20}
                                                alt="icon"
                                            />
                                        </span>
                                        <span className='mb-0'>Complete ATPL theory package</span>
                                    </div>
                                    <div className="d-flex justify-content-start align-items-center mb-2">
                                        <span className='me-3'>
                                            <Image
                                                src={'/Images/circle-check-blue.svg'}
                                                width={20}
                                                height={20}
                                                alt="icon"
                                            />
                                        </span>
                                        <span className='mb-0'>14 subject areas covered in-depth</span>
                                    </div>
                                    <div className="d-flex justify-content-start align-items-center mb-2">
                                        <span className='me-3'>
                                            <Image
                                                src={'/Images/circle-check-blue.svg'}
                                                width={20}
                                                height={20}
                                                alt="icon"
                                            />
                                        </span>
                                        <span className='mb-0'>Regularly updated content</span>
                                    </div>
                                    <div className="d-flex justify-content-start align-items-center mb-2">
                                        <span className='me-3'>
                                            <Image
                                                src={'/Images/circle-check-blue.svg'}
                                                width={20}
                                                height={20}
                                                alt="icon"
                                            />
                                        </span>
                                        <span className='mb-0'>Exam-style question bank</span>
                                    </div>
                                </div>
                                <button className='btn btn-primary w-100'>Buy now <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right ms-2" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                </svg></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card shadow-sm border border-light rounded-4 mb-3">
                            <div className="card-body ">
                                <div className='d-flex justify-content-start mb-3'>

                                    <div className="text-center mb-2 me-3">
                                        <Image
                                            src={'/Images/plane-flying.svg'}
                                            width={25}
                                            height={25}
                                            alt="icon"
                                        />
                                    </div>
                                    <div>

                                        <h6 style={{ fontWeight: "bold" }}>ATPL Database</h6>
                                        <p className="mb-0">Comprehensive resources for airline transport pilots</p>

                                    </div>

                                </div>
                                <div className="d-flex justify-content-start align-items-center">
                                    <span className="badge text-bg-secondary me-3">ATPL(A)</span>
                                    <span className="badge text-bg-secondary">ATPL(H)</span>
                                </div>
                                <hr />
                                <div className="mb-4">
                                    <div className="d-flex justify-content-start align-items-center mb-2">
                                        <span className='me-3'>
                                            <Image
                                                src={'/Images/circle-check-blue.svg'}
                                                width={20}
                                                height={20}
                                                alt="icon"
                                            />
                                        </span>
                                        <span className='mb-0'>Complete ATPL theory package</span>
                                    </div>
                                    <div className="d-flex justify-content-start align-items-center mb-2">
                                        <span className='me-3'>
                                            <Image
                                                src={'/Images/circle-check-blue.svg'}
                                                width={20}
                                                height={20}
                                                alt="icon"
                                            />
                                        </span>
                                        <span className='mb-0'>14 subject areas covered in-depth</span>
                                    </div>
                                    <div className="d-flex justify-content-start align-items-center mb-2">
                                        <span className='me-3'>
                                            <Image
                                                src={'/Images/circle-check-blue.svg'}
                                                width={20}
                                                height={20}
                                                alt="icon"
                                            />
                                        </span>
                                        <span className='mb-0'>Regularly updated content</span>
                                    </div>
                                    <div className="d-flex justify-content-start align-items-center mb-2">
                                        <span className='me-3'>
                                            <Image
                                                src={'/Images/circle-check-blue.svg'}
                                                width={20}
                                                height={20}
                                                alt="icon"
                                            />
                                        </span>
                                        <span className='mb-0'>Exam-style question bank</span>
                                    </div>
                                </div>
                                <button className='btn btn-primary w-100'>Buy now <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right ms-2" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                </svg></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card shadow-sm border border-light rounded-4 mb-3">
                            <div className="card-body ">
                                <div className='d-flex justify-content-start mb-3'>

                                    <div className="text-center mb-2 me-3">
                                        <Image
                                            src={'/Images/plane-flying.svg'}
                                            width={25}
                                            height={25}
                                            alt="icon"
                                        />
                                    </div>
                                    <div>

                                        <h6 style={{ fontWeight: "bold" }}>ATPL Database</h6>
                                        <p className="mb-0">Comprehensive resources for airline transport pilots</p>

                                    </div>

                                </div>
                                <div className="d-flex justify-content-start align-items-center">
                                    <span className="badge text-bg-secondary me-3">ATPL(A)</span>
                                    <span className="badge text-bg-secondary">ATPL(H)</span>
                                </div>
                                <hr />
                                <div className="mb-4">
                                    <div className="d-flex justify-content-start align-items-center mb-2">
                                        <span className='me-3'>
                                            <Image
                                                src={'/Images/circle-check-blue.svg'}
                                                width={20}
                                                height={20}
                                                alt="icon"
                                            />
                                        </span>
                                        <span className='mb-0'>Complete ATPL theory package</span>
                                    </div>
                                    <div className="d-flex justify-content-start align-items-center mb-2">
                                        <span className='me-3'>
                                            <Image
                                                src={'/Images/circle-check-blue.svg'}
                                                width={20}
                                                height={20}
                                                alt="icon"
                                            />
                                        </span>
                                        <span className='mb-0'>14 subject areas covered in-depth</span>
                                    </div>
                                    <div className="d-flex justify-content-start align-items-center mb-2">
                                        <span className='me-3'>
                                            <Image
                                                src={'/Images/circle-check-blue.svg'}
                                                width={20}
                                                height={20}
                                                alt="icon"
                                            />
                                        </span>
                                        <span className='mb-0'>Regularly updated content</span>
                                    </div>
                                    <div className="d-flex justify-content-start align-items-center mb-2">
                                        <span className='me-3'>
                                            <Image
                                                src={'/Images/circle-check-blue.svg'}
                                                width={20}
                                                height={20}
                                                alt="icon"
                                            />
                                        </span>
                                        <span className='mb-0'>Exam-style question bank</span>
                                    </div>
                                </div>
                                <button className='btn btn-primary w-100'>Buy now <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right ms-2" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                </svg></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='container' style={{ marginBottom: "100px" }}>
                <div className="mb-4 text-center">
                    <span className="badge text-bg-primary mb-3">Advance Features</span>
                    <h4 style={{ fontSize: "1.3rem", fontWeight: "bold" }}>Empowering Aviation Professionals</h4>
                    <p>Our database are equipped with cutting-edge features designed to enhance your learning experience and <br />professional development</p>

                </div>
                <div className="row">
                    <div className="col-lg-3">
                        <div className="card shadow-sm border border-light rounded-4 mb-3">
                            <div className="card-body ">
                                <div className="mb-3">
                                    <Image
                                        src={'/Images/shield-blue.svg'}
                                        width={25}
                                        height={25}
                                        alt="icon"
                                    />
                                </div>
                                <div>

                                    <h6 style={{ fontWeight: "bold" }} className='mb-3'>Secure Access Management</h6>
                                    <p className="mb-0">Advance encryption and authentication protocols ensure your data remains protected</p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="card shadow-sm border border-light rounded-4 mb-3">
                            <div className="card-body ">
                                <div className="mb-3">
                                    <Image
                                        src={'/Images/shield-blue.svg'}
                                        width={25}
                                        height={25}
                                        alt="icon"
                                    />
                                </div>
                                <div>

                                    <h6 style={{ fontWeight: "bold" }} className='mb-3'>Secure Access Management</h6>
                                    <p className="mb-0">Advance encryption and authentication protocols ensure your data remains protected</p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="card shadow-sm border border-light rounded-4 mb-3">
                            <div className="card-body ">
                                <div className="mb-3">
                                    <Image
                                        src={'/Images/shield-blue.svg'}
                                        width={25}
                                        height={25}
                                        alt="icon"
                                    />
                                </div>
                                <div>

                                    <h6 style={{ fontWeight: "bold" }} className='mb-3'>Secure Access Management</h6>
                                    <p className="mb-0">Advance encryption and authentication protocols ensure your data remains protected</p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="card shadow-sm border border-light rounded-4 mb-3">
                            <div className="card-body ">
                                <div className="mb-3">
                                    <Image
                                        src={'/Images/shield-blue.svg'}
                                        width={25}
                                        height={25}
                                        alt="icon"
                                    />
                                </div>
                                <div>

                                    <h6 style={{ fontWeight: "bold" }} className='mb-3'>Secure Access Management</h6>
                                    <p className="mb-0">Advance encryption and authentication protocols ensure your data remains protected</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='container'>
                <h4 style={{ fontSize: "1.3rem", fontWeight: "bold", marginBottom: "30px" }}>Trusted by Aviation Professionals Worldwide</h4>

                <div className='d-flex justify-content-start mb-3'>

                    <div className={`${styles.circleItem} me-4`} style={{ backgroundColor: "#D6E5FB" }}>
                        <Image
                            src={'/Images/users.svg'}
                            width={30}
                            height={30}
                            alt="icon"
                        />
                    </div>
                    <div>

                        <h6 style={{ fontWeight: "bold" }}>17K+</h6>
                        <p className="mb-0">Active student</p>

                    </div>

                </div>
                <div className='d-flex justify-content-start mb-3'>

                    <div className={`${styles.circleItem} me-4`} style={{ backgroundColor: "#D6E5FB" }}>
                        <Image
                            src={'/Images/globe-feature.svg'}
                            width={30}
                            height={30}
                            alt="icon"
                        />
                    </div>
                    <div>

                        <h6 style={{ fontWeight: "bold" }}>190+ Countries</h6>
                        <p className="mb-0">Global Reach</p>

                    </div>

                </div>
                <div className='d-flex justify-content-start mb-3'>

                    <div className={`${styles.circleItem} me-4`} style={{ backgroundColor: "#D6E5FB" }}>
                        <Image
                            src={'/Images/signal.svg'}
                            width={30}
                            height={30}
                            alt="icon"
                        />
                    </div>
                    <div>

                        <h6 style={{ fontWeight: "bold" }}>98%</h6>
                        <p className="mb-0">Customer Satisfaction</p>

                    </div>

                </div>
            </section>
        </>
    )
}

export default Page
