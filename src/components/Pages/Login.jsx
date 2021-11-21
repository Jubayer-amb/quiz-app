import illustrations from '../../assets/img/login.svg';
import classes from '../../styles/SignupLogin.module.css';
import LoginForm from '../LoginForm';

const Login = () => (
    <>
        <h1>Login to your account</h1>
        <div className={classes.content}>
            <div className={classes.ilustration}>
                <img src={illustrations} alt="Signup ilustration" />
            </div>
            <LoginForm />
        </div>
    </>
);

export default Login;
