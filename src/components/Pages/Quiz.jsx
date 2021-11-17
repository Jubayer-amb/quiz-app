import classes from '../../styles/Quiz.module.css';
import Answers from '../Answers';
import MiniPlayer from '../MiniPlayer';
import ProgressBar from '../ProgressBar';

const Quiz = () => (
    <>
        <div className={classes.quiz}>
            <h1>Pick Three of Your Favorite Star Wars Films</h1>
            <h4>Questions can have multiple answers</h4>
        </div>
        <Answers />

        <ProgressBar />

        <MiniPlayer />
    </>
);

export default Quiz;
