import React from 'react';
import * as styles from './home.css'; // Importing styles

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.contentUnderNavbar}>
        {/* Background Image */}
        <img
          src="/pictures/castleBG2.png"
          alt="Castle Background"
          className={styles.homeImage}
        />

        {/* Featured Section */}
        <section className={styles.featuredSection}>
          <h2 className={styles.h2Section}>Latest Collection</h2>

          {/* Product Grid */}
          <div className={styles.productGrid}>
            <div className={styles.productCard}>
              <img
                src="/pictures/Princess.png"
                alt="Princess"
                className={styles.productImage}
              />
              <div className={styles.productDetails}>
                <h3 className={styles.productTitle}>Princess</h3>
                <p className={styles.productPrice}>$2.99</p>
                <button className={styles.addToCartButton}>Add to Cart</button>
              </div>
            </div>

            <div className={styles.productCard}>
              <img
                src="/pictures/elf.png"
                alt="Elf"
                className={styles.productImage}
              />
              <div className={styles.productDetails}>
                <h3 className={styles.productTitle}>Elf</h3>
                <p className={styles.productPrice}>$2.19</p>
                <button className={styles.addToCartButton}>Add to Cart</button>
              </div>
            </div>

            <div className={styles.productCard}>
              <img
                src="/pictures/mm.png"
                alt="Mermaid"
                className={styles.productImage}
              />
              <div className={styles.productDetails}>
                <h3 className={styles.productTitle}>Mermaid</h3>
                <p className={styles.productPrice}>$3.99</p>
                <button className={styles.addToCartButton}>Add to Cart</button>
              </div>
            </div>
          </div>
        </section>

        {/* New Info Section (with Images and Text) */}
        {/* <section className={styles.infoSection}>

          <section className={styles.inforFirstClipart}>
          <div className={styles.infoTextSection}>
            <h2>Name: Lorme</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
          </div>

         
          <div className={styles.infoImageLarge}>
            <img
              src="public/pictures/FairysClipArt.png"
              alt="Castle Background"
              className={styles.homeImage}
            />
          </div>

          <div className={styles.infoImageSmall}>
              <img src="/pictures/castleBG.webp" alt="Small Image" />
            </div>

            </section>

          
          <div className={styles.infoImagesSection}>
           
            <div className={styles.infoImageSmall}>
              <img src="/pictures/castleBG.webp" alt="Small Image" />
            </div>
            <div className={styles.infoImageSmall}>
              <img src="/pictures/castleBG.webp" alt="Small Image" />
            </div>
            <div className={styles.infoImageSmall}>
              <img src="/pictures/castleBG.webp" alt="Small Image" />
            </div>
            <div className={styles.infoImageSmall}>
              <img src="/pictures/castleBG.webp" alt="Small Image" />
            </div>
          </div>
        </section> */}

  <section className={styles.infoFirstClipart}>
  {/* Text Section (1.5 width) */}
  <div className={styles.infoTextSection}>
    <h2>Name: Lorme</h2>
    <p className={styles.SubTextSection }>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris.
    </p>
  </div>

  {/* Large Image Section (1 width) */}
  <div className={styles.infoImageLarge}>
    <img
      src="public/pictures/pbf.png"
      alt=""
      className={styles.sectionImage}
    />
  </div>

  {/* Small Image Section (1.5 width) */}
  <div className={styles.infoImageSmall}>
    <img src="public/pictures/castleBG.webp" alt=""
    className={styles.sectionImage1} />
  </div>

  {/* Second line */}

  <div className={styles.infoImageSmall}>
    <img src="public/pictures/castleBG.webp" alt=""
    className={styles.sectionImage1} />
  </div>

<div className={styles.infoImageLarge}>
    <img
      src="public/pictures/pbf.png"
      alt=""
      className={styles.sectionImage}
    />
  </div>

  <div className={styles.infoImageLarge}>
    <img
      src="public/pictures/pbf.png"
      alt=""
      className={styles.sectionImage}
    />
  </div>

</section>




      </div>
    </div>
  );
};

export default Home;
