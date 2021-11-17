import { useNavigate } from 'react-router-dom';
import classes from '../styles/ProgressBar.module.css';
import Button from './Button';

const ProgressBar = () => {
    const navigate = useNavigate();
    const redirect = () => {
        navigate('/result');
    };
    return (
        <div className={classes.progress}>
            <div className={classes.backButton}>
                <span className="material-icons-outlined"> arrow_back </span>
            </div>
            <div className={classes.progressBar}>
                <div className={classes.tooltip}>25% Completed!</div>
                <div className={classes.progressRange}>
                    <div className={classes.progressRangeLine} style={{ width: '25%' }} />
                </div>
            </div>

            <Button className={classes.forwardButton} onClick={redirect}>
                <span>Next Question</span>
                <span className="material-icons-outlined"> arrow_forward </span>
            </Button>
        </div>
    );
};

export default ProgressBar;
