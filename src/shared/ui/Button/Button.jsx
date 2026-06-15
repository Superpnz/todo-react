import styles from './Button.module.scss'

const Button = ({ className = "", type = "button", isDisabled,  onClick, children }) => {
  return (
    <button className={`${styles.button} ${className}`} type={type} onClick={onClick} disabled={isDisabled}>
      {children}
    </button>
  );
};

export default Button;
