import classes from '../styles/TextInput.module.css';

const TextInput = ({ type, placeholder, icon, value, onChange, className }) => (
    <div className={`${classes.textInput} ${className || null}`}>
        <input type={type} placeholder={placeholder} value={value} onChange={onChange} />
        <span className="material-icons-outlined"> {icon} </span>
    </div>
);
export default TextInput;
