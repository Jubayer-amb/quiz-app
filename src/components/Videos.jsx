import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import useVideosList from '../hooks/useVideosList';
import classes from '../styles/Videos.module.css';
import Video from './Video';

const Videos = () => {
    const [pageLimit, setPageLimit] = useState(0);
    const { loading, error, videos, hasMore } = useVideosList(pageLimit);
    return (
        <>
            {videos.length !== 0 && (
                <InfiniteScroll
                    dataLength={videos.length}
                    hasMore={hasMore}
                    next={() => setPageLimit(pageLimit + 9)}
                    className={classes.videos}
                >
                    {videos.map((video) => (
                        <div key={video.youtubeID}>
                            <Video title={video.title} id={video.youtubeID} noq={video.noq} />
                            {!loading && videos.length === 0 && <div> No videos found! </div>}
                            {loading && <div> Loading... </div>}
                            {error && <div> There was an error! </div>}
                        </div>
                    ))}
                </InfiniteScroll>
            )}
        </>
    );
};

export default Videos;
