import styles from "./Footer.module.css"
const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div>

        <div className={` grid grid-cols-1 xl:grid-cols-2  ${styles.bgContainer}`}>

          <div className={` grid grid-cols-1 md:grid-cols-2  ${styles.logoLinkContainer}`}>

            <div className={styles.imageContainer}>
              <img className={styles.logo} src="/Images/footer/shf-logo.svg" alt="logo" />
            </div>

            <div className={styles.QuickLinkAndGetTouchContainer}>

              <div className={styles.quickLinkContainer}>
                <h1 className={styles.qucikLinkHeading}>Qucik Link</h1>
                <p className={styles.qucikLinks}>Home</p>
                <p className={styles.qucikLinks}>About Us</p>
                <p className={styles.qucikLinks}>Events</p>
                <p className={styles.qucikLinks}>Gallery</p>
                <p className={styles.qucikLinks}>Contact</p>
                <p className={styles.qucikLinks}>Work With Us</p>
              </div>

              <div className={styles.quickLinkContainer}>
                <h1 className={styles.qucikLinkHeading}>Get In Touch</h1>
                <p className={styles.qucikLinks}>Contact Us</p>
                <p className={styles.qucikLinks}>Our Services</p>
              </div>

            </div>
          </div>

          <div className={` grid grid-cols-1 md:grid-cols-2 md:mt-10 xl:mt-0 ${styles.addressSubscribe}`}>

            <div className={styles.addressContainer}>
              <h1 className={styles.qucikLinkHeading}>Address</h1>
              <p className={styles.qucikLinks}>2464 Royal Ln. Mesa, Scotland 4567842</p>
            </div>


            <div className={styles.subscribeusContainer}>
              <h1 className={styles.qucikLinkHeading}>Subscribe</h1>
              <form className="flex">
                <input type="email" className={styles.emailInputBox} placeholder="Enter Your Email" />
                <button className={styles.subscribeBtn}>Subscribe</button>
              </form>
              <p className={styles.mailPara}>Your email is safe with us, We don't spam</p>
            </div>

          </div>

        </div>

        <hr className={styles.horizontal} />
        <p className={styles.beenait}>Designed By beenaIT Solutions</p>
      </div>
    </div>
  )
}

export default Footer;
