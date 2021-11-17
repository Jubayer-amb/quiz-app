/* eslint-disable jsx-a11y/label-has-associated-control */
import { NavLink } from 'react-router-dom';
import illustrations from '../../assets/img/signup.svg';
import classes from '../../styles/SignupLogin.module.css';
import Button from '../Button';
import Checkbox from '../Checkbox';
import TextInput from '../TextInput';

const Signup = () => (
    <>
        <h1>Create an account</h1>
        <div className={classes.content}>
            <div className={classes.ilustration}>
                <img src={illustrations} alt="Signup ilustration" />
            </div>
            <form className={`${classes.signup} ${classes.form}`}>
                <TextInput type="text" placeholder="Enter name" icon="person" />
                <TextInput type="text" placeholder="Enter email" icon="alternate_email" />
                <TextInput type="password" placeholder="Enter password" icon="lock" />
                <TextInput type="password" placeholder="Confirm password" icon="lock_clock" />
                <Checkbox text="I agree to the Terms and Conditions" />
                <Button>Signup</Button>
                <div className={classes.info}>
                    Already have an account? <NavLink to="/login">Login</NavLink> instead
                </div>
            </form>
        </div>
    </>
);

export default Signup;
