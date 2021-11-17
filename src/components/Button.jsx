import classes from '../styles/Button.module.css';

const Button = ({ className, children, onClick }) => (
    <div className={`${classes.button} ${className}`} onClick={onClick} aria-hidden>
        {children}
    </div>
);

export default Button;
