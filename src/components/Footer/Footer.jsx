import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className={styles.footer}>
<div className="container p-3">
    <div className="row">
        <div className="col-lg-3">
            <h4 className='text-light'>PassATPL Pro</h4>
            <p className='text-light' style={{fontSize:"14px"}}>Empowering future pilots with comprehensive ATPL exam preparation. Join our community of successful aviation professionals.</p>

            <div className="d-flex flex-wrap">
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
        <div className="col-lg-3">

        </div>
        <div className="col-lg-3">

        </div>
        <div className="col-lg-3">

        </div>
    </div>
</div>
    </footer>
  )
}

export default Footer
