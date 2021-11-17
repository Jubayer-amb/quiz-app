import illustration from '../assets/img/success.png';
import classes from '../styles/Summary.module.css';

const Summary = () => (
    <div className={classes.summary}>
        <div className={classes.point}>
            <p>
                Your score is <br />5 out of 10
            </p>
        </div>
        <div className={classes.illustration}>
            <img src={illustration} alt="Success Illustrator" />
        </div>
    </div>
);

export default Summary;
