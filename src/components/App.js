import React,{useEffect, useState} from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList.js'
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideo';

const App = () => {
    const [selectedVideo, setSelectedVideo] = useState(null)
    const [videos, search] = useVideos()

    useEffect(()=>{
        setSelectedVideo(videos[0]);
    }, [videos])

    return (
        <div>
            <SearchBar onFSubmit={search}/>
            <div className= 'ui grid'>
                <div className= 'ui row'>
                    <div className = "eleven wide column">
                        <VideoDetail video = {selectedVideo}/>
                    </div> 
                    <div className= "five wide column">
                        <VideoList onVideoSelect = {setSelectedVideo} videos = {videos}/>
                    </div>
                </div>
            </div>
        </div>
    );        
}


export default App;
