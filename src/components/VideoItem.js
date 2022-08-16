import React from 'react';
import "./VideoItem.css";

function VideoItem({video, onVideoSelect}){   
    return (
        <div className="video-item item" onClick = {()=> onVideoSelect(video)}>
            <img alt={video.snippet.title} className="ui image" src={video.snippet.thumbnails.default.url } />
            <div className="content header" >
                {video.snippet.title}
            </div>
        </div>

    );
}
    
export default VideoItem;