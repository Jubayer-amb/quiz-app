import classes from '../styles/Question.module.css';
import Answers from './Answers';

const Question = () => (
    <div className={classes.question}>
        <div className={classes.qtitle}>
            <span className="material-icons-outlined"> help_outline </span>
            <p>Here goes the question from Learn With Sumit?</p>
        </div>
        <Answers />
    </div>
);

export default Question;
