import PropTypes from 'prop-types';
import * as styles from './Button.css'; // Ensure the CSS file exists

const CustomButton = ({ children, loadingState, onClick }) => {
  return (
    <button
      className={styles.button} // Apply custom button styles
      type={onClick ? 'button' : 'submit'}
      onClick={onClick}
      disabled={loadingState} // Disable button when loading
    >
      {loadingState ? (
        <span>Loading...</span>  // Display loading text
      ) : (
        children  // Display button children (e.g., 'Sign Up')
      )}
    </button>
  );
};

CustomButton.propTypes = {
  children: PropTypes.any.isRequired,
  loadingState: PropTypes.bool,
  onClick: PropTypes.func,
};

export default CustomButton;
