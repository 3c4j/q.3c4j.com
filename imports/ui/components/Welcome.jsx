import React, {useState} from 'react';

export class Welcome extends React.Component {
    render() {
        return (
            <video loop muted autoPlay style={{width: "100%", height: "100%", objectFit: "fill"}}>
                <source src="https://3c4j.github.io/3c4j.com/background-video.mp4" type='video/mp4'/>
            </video>
        )
    }
}
