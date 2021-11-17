import { NavLink } from 'react-router-dom';
import illustrations from '../../assets/img/login.svg';
import classes from '../../styles/SignupLogin.module.css';
import TextInput from '../TextInput';
import Button from '../Button';

const Login = () => (
    <>
        <h1>Login to your account</h1>
        <div className={classes.content}>
            <div className={classes.ilustration}>
                <img src={illustrations} alt="Signup ilustration" />
            </div>
            <form className={`${classes.login} ${classes.form}`}>
                <TextInput type="text" placeholder="Enter email" icon="alternate_email" />
                <TextInput type="password" placeholder="Enter password" icon="lock" />
                <Button>Login</Button>
                <div className={classes.info}>
                    Don&apos;t have an account? <NavLink to="/signup">Signup</NavLink> instead
                </div>
            </form>
        </div>
    </>
);

export default Login;
