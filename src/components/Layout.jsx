import classes from '../styles/Layout.module.css';

const Layout = ({ children }) => (
    <main className={classes.main}>
        <div className={classes.container}>{children}</div>
    </main>
);

export default Layout;
