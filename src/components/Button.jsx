import classes from '../styles/Button.module.css';

const Button = ({ className, children, onClick, type }) => (
    <button
        type={type === 'submit' ? 'submit' : 'button'}
        className={`${classes.button} ${className}`}
        onClick={onClick}
    >
        {children}
    </button>
);

export default Button;
