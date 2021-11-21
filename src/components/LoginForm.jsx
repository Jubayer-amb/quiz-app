import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import classes from '../styles/SignupLogin.module.css';
import Button from './Button';
import TextInput from './TextInput';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const { signin } = useAuth();
    const redirect = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            await signin(email, password);
            setLoading(false);
            redirect('/');
        } catch (err) {
            setError('Email or Password is incorrect!');
            setLoading(false);
        }
    };
    return (
        <form className={`${classes.login} ${classes.form}`} onSubmit={handleSubmit}>
            <TextInput
                type="text"
                placeholder="Enter email"
                icon="alternate_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextInput
                type="password"
                placeholder="Enter password"
                icon="lock"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" disabled={loading}>
                Login
            </Button>
            {error && <p className="error">{error}</p>}
            <div className={classes.info}>
                Don&apos;t have an account? <NavLink to="/signup">Signup</NavLink> instead
            </div>
        </form>
    );
};

export default LoginForm;
