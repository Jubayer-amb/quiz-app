import { useNavigate } from 'react-router-dom';
import thumbnail from '../assets/img/3.jpg';
import classes from '../styles/Video.module.css';

const Video = () => {
    const navigate = useNavigate();
    const redirect = () => {
        navigate('/quiz');
    };
    return (
        <div className={classes.video} onClick={redirect} aria-hidden>
            <img src={thumbnail} alt="Thumbnail" className={classes.thumbnail} />
            <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
            <div className={classes.qmeta}>
                <p>10 Questions</p>
                <p>Score: 10 / 10</p>
            </div>
        </div>
    );
};

export default Video;
