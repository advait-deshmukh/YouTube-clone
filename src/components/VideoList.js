import React from 'react'
import VideoItem from './VideoItem.js'

function VideoList ({onVideoSelect, videos}){
    const renderList = videos.map(
        (v, index) => <VideoItem 
                key ={index} 
                video ={v} 
                onVideoSelect = {(video)=>onVideoSelect(video)}
            />
    )

    return(
        <div className="ui relaxed divided list">
            {renderList}
        </div>
    );  
}

export default VideoList;