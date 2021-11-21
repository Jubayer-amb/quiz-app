/* eslint-disable jsx-a11y/label-has-associated-control */
import illustrations from '../../assets/img/signup.svg';
import classes from '../../styles/SignupLogin.module.css';
import SignupForm from '../SignupForm';

const Signup = () => (
    <>
        <h1>Create an account</h1>
        <div className={classes.content}>
            <div className={classes.ilustration}>
                <img src={illustrations} alt="Signup ilustration" />
            </div>
            <SignupForm />
        </div>
    </>
);

export default Signup;
