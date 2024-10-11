import React from 'react';
import * as styles from './header.css';  // Importing styles from header.css.ts

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <nav className={styles.navBar}>
        <div className={styles.leftLinks}>
          <a href="/shop" className={styles.navLink}>Shop</a>
          <a href="/about" className={styles.navLink}>About</a>
          <a href="/search" className={styles.navLink}>Search</a>
        </div>

        <div className={styles.logo}>Clipology</div>

        <div className={styles.rightLinks}>
          <a href="/signup" className={styles.navLink}>Sign Up</a>
          <a href="/login" className={styles.navLink}>Login</a>
          <a href="/cart" className={styles.navLink}>Cart</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
