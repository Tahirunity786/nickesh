'use client'
import { useState } from 'react';
import styles from './single-shop.module.css'
import { useSearchParams } from 'next/navigation';


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
        </>
    )
}

export default Page
