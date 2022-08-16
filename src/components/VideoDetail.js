import React from 'react';

function VideoDetail({video}){
    if(video === null || video == undefined){
        return <div></div>
    }
    else {
        return (
            <div>
                <div className = 'ui embed'>
                    <iframe src={"https://www.youtube.com/embed/"  + video.id.videoId} title='videoplayer'/>
                </div>
                <div className = "ui segment">
                    <h4 className = 'ui header'>{video.snippet.title}</h4>
                    <p>{video.snippet.description}</p>
                </div>
            </div>
        );
    }
}

export default VideoDetail;