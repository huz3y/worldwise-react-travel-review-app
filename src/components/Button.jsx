import PropTypes from "prop-types";
import styles from "./Button.module.css";

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
};

function Button({ children, onClick, type }) {
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  );
}

export default Button;
