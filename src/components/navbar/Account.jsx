import { NavLink } from 'react-router-dom';
import classes from '../../styles/Account.module.css';

const Account = () => (
    <div className={classes.account}>
        <div className={classes.avatar}>
            <span className="material-icons-outlined"> account_circle </span>
        </div>
        <NavLink className={classes.anchor} to="/signup">
            <p>Signup</p>
        </NavLink>
        <NavLink className={classes.anchor} to="/login">
            <p>Login</p>
        </NavLink>
    </div>
);

export default Account;
