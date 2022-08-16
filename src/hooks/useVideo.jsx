import { useState, useEffect } from 'react';
import YouTube from '../api/YouTube';

const useVideos = () => {
    const [videos, setVideos] = useState([]);
    
    useEffect(()=>{
        search("documentory on cars");
    }, [])

    const search = async (term) => {
        const result = await YouTube.get('/search' ,{params: {q:term} } );
        setVideos(result.data.items);
    }
    

    return [videos, search];
}


export default useVideos;

