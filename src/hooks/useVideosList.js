import { get, getDatabase, limitToFirst, orderByKey, query, ref, startAt } from 'firebase/database';
import { useEffect, useState } from 'react';

const useVideosList = (pageLimit) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [videos, setVideos] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    useEffect(() => {
        const fetchVideos = async () => {
            const db = getDatabase();
            const videosRef = ref(db, 'videos');
            const videosQuery = query(
                videosRef,
                orderByKey(),
                startAt(`${pageLimit}`),
                limitToFirst(9)
            );
            try {
                setError(false);
                setLoading(true);
                const snapshot = await get(videosQuery);
                setLoading(false);
                if (snapshot.exists()) {
                    setVideos((prevState) => [...prevState, ...Object.values(snapshot.val())]);
                } else {
                    setHasMore(false);
                }
            } catch (err) {
                console.log(err);
            }
        };
        fetchVideos();
    }, [pageLimit]);
    return {
        loading,
        error,
        videos,
        hasMore,
    };
};

export default useVideosList;
