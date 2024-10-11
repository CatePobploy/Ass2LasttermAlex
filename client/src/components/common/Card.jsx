import * as styles from './Card.css';

const Card = ({ title, authform, children }) => {
  return (
    <div className={styles.container}>
      <div className={`${styles.leadCard} ${authform ? styles.authForm : ''}`}>
        <h2 className={styles.cardTitle}>{title}</h2>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Card;
