/* eslint-disable react/jsx-props-no-spreading */
import classes from '../styles/TextInput.module.css';

const TextInput = ({ type, placeholder, icon, ...args }) => (
    <div className={classes.textInput}>
        <input type={type} placeholder={placeholder} {...args} />
        <span className="material-icons-outlined"> {icon} </span>
    </div>
);
export default TextInput;
