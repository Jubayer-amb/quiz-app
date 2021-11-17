import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo-bg.png';
import classes from '../../styles/Navbar.module.css';
import Account from './Account';

const Navbar = () => (
    <nav>
        <ul className={classes.navbar}>
            <li className={classes.logoName}>
                <NavLink className={classes.anchor} to="/">
                    <img src={logo} alt="logo" className={classes.logoImg} />
                </NavLink>
                <NavLink className={classes.anchor} to="/">
                    <h4>Learn With Sumit Bangladesh</h4>
                </NavLink>
            </li>
            <Account />
        </ul>
    </nav>
);

export default Navbar;
