import classes from '../styles/Answers.module.css';
import Checkbox from './Checkbox';

const Answers = () => (
    <div className={classes.answers}>
        <div className={classes.answer}>
            <Checkbox text="A New Hope 1" />
        </div>
        <div className={classes.answer}>
            <Checkbox text="A New Hope 2" />
        </div>
        <div className={classes.answer}>
            <Checkbox text="A New Hope 3" />
        </div>
        <div className={`${classes.answer} ${classes.wrongAnswer}`}>
            <Checkbox text="A New Hope 4" />
        </div>
        <div className={classes.answer}>
            <Checkbox text="A New Hope 5" />
        </div>
        <div className={classes.answer}>
            <Checkbox text="A New Hope 6" />
        </div>
        <div className={`${classes.answer} ${classes.correctAnswer}`}>
            <Checkbox text="A New Hope 7" />
        </div>
        <div className={classes.answer}>
            <Checkbox text="A New Hope 8" />
        </div>
        <div className={classes.answer}>
            <Checkbox text="A New Hope 9" />
        </div>
        <div className={classes.answer}>
            <Checkbox text="A New Hope 10" />
        </div>
    </div>
);

export default Answers;
