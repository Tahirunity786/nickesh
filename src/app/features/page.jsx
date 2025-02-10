import styles from './features.module.css'


const Page = () => {
  return (
    <>
    <section className={styles.feature0bg}>
      <div className="container">
        <div className="mb-5">

      <h2 style={{fontSize:"2rem", fontWeight:"bold"}}>Features That Set Us Apart</h2>
      <p style={{fontWeight:"bold"}}>Discover why ATPL Pro is the trusted choice for aviation training WorldWide</p>

        </div>
        <div className="mb-2 d-flex justify-content-start align-items-center">
          <button className={`${styles.navButtonAeroWarning} ${styles.navBtnAro} me-4`}>Explore Feature</button>
          <button className={`${styles.navButtonAeroOutlinePrimary} ${styles.navBtnAro}`}>E Shop</button>
        </div>
      </div>
    </section>

    <section className='container'>

    </section>

    </>
  )
}

export default Page
