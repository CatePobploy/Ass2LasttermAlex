import React from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer, Slide } from 'react-toastify';
import * as styles from './Layout.css'; 

import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className={styles.app}>
      <ToastContainer 
        style={{ textAlign: 'center' }} 
        position='top-center'
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        transition={Slide}
        theme="colored"
      />
      
      <Header />

      <main className={styles.appContent}>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
