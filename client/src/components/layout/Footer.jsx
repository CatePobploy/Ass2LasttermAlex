import React from 'react';
import * as styles from './footer.css';

const NewFooter = () => {
  return (
    <footer className={styles.newFooterContainer}>
      <div className={styles.footerTop}>
        {/* Links Section */}
        <div className={styles.footerSection}>
          <h4 className={styles.footerHeading}>Quick Links</h4>
          <a href="/shop" className={styles.footerLink}>Shop</a>
          <a href="/contact" className={styles.footerLink}>Contact</a>
          <a href="/about" className={styles.footerLink}>About Us</a>
        </div>

        {/* Address Section */}
        <div className={styles.footerSection}>
          <h4 className={styles.footerHeading}>Visit Us</h4>
          <p className={styles.footerText}>3112 Moon Colony, Alice City</p>
          <p className={styles.footerText}>Melbourne, VIC, Australia</p>
        </div>

        {/* Newsletter Section */}
        <div className={styles.footerSection}>
          <h4 className={styles.footerHeading}>Stay Updated</h4>
          <p className={styles.footerText}>Subscribe to receive our latest news and offers</p>
          <div className={styles.newsletterForm}>
            <input type="email" placeholder="Enter your email" className={styles.emailInput} />
            <button className={styles.submitButton}>Subscribe</button>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>© Clipology 2024. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default NewFooter;
