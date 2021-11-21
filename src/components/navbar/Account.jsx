import { NavLink } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import classes from '../../styles/Account.module.css';

const Account = () => {
    const { currentUser, signout } = useAuth();
    return (
        <div className={classes.account}>
            <div className={classes.avatar}>
                <span className="material-icons-outlined"> account_circle </span>
            </div>
            {currentUser ? (
                <>
                    <span>{currentUser.displayName}</span>
                    <span
                        className="material-icons-outlined"
                        onClick={signout}
                        role="button"
                        tabIndex="0"
                    >
                        {' '}
                        logout{' '}
                    </span>
                </>
            ) : (
                <>
                    <NavLink className={classes.anchor} to="/signup">
                        <span>Signup</span>
                    </NavLink>
                    <NavLink className={classes.anchor} to="/login">
                        <span>Login</span>
                    </NavLink>
                </>
            )}
        </div>
    );
};

export default Account;
