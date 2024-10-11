import React from 'react';
import { Link } from 'react-router-dom';
import * as styles from './NotFound.css';

const NotFound = () => {
  return (
    <div className={styles.notFoundContainer}>
      <h1 className={styles.notFoundTitle}>404 - Page Not Found</h1>
      <p className={styles.notFoundText}>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className={styles.homeButton}>
        Go back home
      </Link>
    </div>
  );
};

export default NotFound;
