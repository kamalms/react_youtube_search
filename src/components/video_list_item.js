import React from 'react';


const VideoListItem = function(props){

    //console.log("TEST props", props.video);
    const imageUrl = props.video.snippet.thumbnails.default.url;

return <li onClick = { () => 
    {
    console.log('first emit comes here');
    props.onVideoSelect(props.video)
    }
    

} className="list-group-item">
    <div className="video-list media">

    <div className="media-left">
    <img className="media-object" src={imageUrl} />
    </div>

    <div className="media-body">
    <div className="media-heading">
    { props.video.snippet.title }
    </div>
    </div>

    </div>
</li>;
}

export default VideoListItem ;