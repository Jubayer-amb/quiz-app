/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
const Checkbox = ({ text, ...rest }) => (
    <label>
        <input type="checkbox" {...rest} /> <span>{text}</span>
    </label>
);

export default Checkbox;
