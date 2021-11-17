import thumbnail from '../assets/img/3.jpg';
import classes from '../styles/MiniPlayer.module.css';

const MiniPlayer = () => (
    <div className={classes.miniplayer}>
        <div className={classes.player}>
            <span className="material-icons-outlined closeButton"> close </span>
            <img src={thumbnail} alt="Video Thumbnail" />
            <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
        </div>
        <div className={classes.playButton}>
            <span className="material-icons-outlined"> play_circle_filled </span>
        </div>
    </div>
);

export default MiniPlayer;
