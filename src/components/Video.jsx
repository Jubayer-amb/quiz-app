import { useNavigate } from 'react-router-dom';
import classes from '../styles/Video.module.css';

const Video = ({ title, id, noq }) => {
    const navigate = useNavigate();
    const redirect = () => {
        navigate('/quiz');
    };
    return (
        <div className={classes.video} onClick={redirect} aria-hidden>
            <img
                src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
                alt="Thumbnail"
                className={classes.thumbnail}
            />
            <p>{title}</p>
            <div className={classes.qmeta}>
                <p>{noq} Questions</p>
                <p>Total Points: {noq * 5}</p>
            </div>
        </div>
    );
};

export default Video;
