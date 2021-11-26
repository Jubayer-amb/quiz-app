import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import classes from '../styles/SignupLogin.module.css';
import Button from './Button';
import Checkbox from './Checkbox';
import TextInput from './TextInput';

const SignupForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [agree, setAgree] = useState();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const { signup } = useAuth();

    const redirect = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            try {
                setError('');
                setLoading(true);
                await signup(email, password, name);
                redirect('/');
            } catch (err) {
                setLoading(false);
                setError('Failed to create an account!');
            }
        } else {
            setError('Passwords do not match!');
        }
    };

    return (
        <form className={`${classes.signup} ${classes.form}`} onSubmit={handleSubmit}>
            <TextInput
                type="text"
                placeholder="Enter name"
                icon="person"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <TextInput
                type="text"
                placeholder="Enter email"
                icon="alternate_email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextInput
                type="password"
                placeholder="Enter password"
                icon="lock"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <TextInput
                type="password"
                placeholder="Confirm password"
                icon="lock_clock"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Checkbox
                text="I agree to the Terms and Conditions"
                required
                value={agree}
                onChange={(e) => setAgree(e.target.value)}
            />
            <Button type="submit" disabled={loading}>
                Signup
            </Button>
            {error && <p className="error">{error}</p>}
            <div className={classes.info}>
                Already have an account? <NavLink to="/login">Login</NavLink> instead
            </div>
        </form>
    );
};

export default SignupForm;
