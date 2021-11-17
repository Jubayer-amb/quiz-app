import classes from '../styles/Analysis.module.css';
import Question from './Question';

const Analysis = () => (
    <>
        <div className={classes.analysis}>
            <h1>Question Analysis</h1>
            <h4>You answered 5 out of 10 questions correctly</h4>
        </div>

        <Question />
    </>
);

export default Analysis;
