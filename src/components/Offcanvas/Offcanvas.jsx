'use client'
import Link from 'next/link'
import styles from './offcanvas.module.css'
import Image from 'next/image'
import { usePathname, useRouter } from "next/navigation";


const Offcanvas = ({ navlinks }) => {

    const pathname = usePathname();
    return (
        <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" style={{ width: "250px" }}>
            <div className="offcanvas-header">
                <Link className={`navbar-brand ${styles.navbarLogo}`} href="/">
                    <Image src={'/Images/logo.svg'} alt="ATPL PRO" width={140} height={50} priority />
                </Link>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body h-100">
                <div className="d-flex flex-column justify-content-between" style={{height:"80%"}}>

                    <ul className='ms-0 ps-0' style={{ listStyle: "none" }}>
                        {
                            navlinks.map((items, index) => (

                                <li key={index} className={` ${pathname === items.path ? `${styles.navActive}  rounded-2` : "ms-3 me-3 p-2"} `}><Link href={items.path} className='w-100 d-block'>{items.name}</Link></li>
                            ))
                        }
                    </ul>
                    <div className='mb-4 '>
                        <button className={`${styles.navButtonAeroWarning} ${styles.navBtnAro} mb-2`}>E Shop</button>
                        <button className={`${styles.navButtonAeroPrimary} ${styles.navBtnAro}`}>Sign Up</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Offcanvas
