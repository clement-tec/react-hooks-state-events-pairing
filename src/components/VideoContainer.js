import React from 'react';

function VideoContainer (props) {
    console.log(props.video.embedUrl);
    return (
        <div>
            <iframe
            width="919"
            height="525"
            src={props.video.embedUrl}
            frameBorder="0"
            allowFullScreen
            title={props.video.title}
            />
            <h1>{props.video.title}</h1>
            <p>{props.video.views} Views | Uploaded {props.video.createdAt}</p>
            <button>{props.video.upvotes}👍</button>
            <button>{props.video.downvotes}👎</button>
        </div>
    )
}
export default VideoContainer