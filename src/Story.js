import React from 'react'
import './Story.css';
import {Avatar} from '@material-ui/core';

function Story({image, bgImage, title}) {
    return (
        <div className="story" style={{ backgroundImage: `url(${bgImage})`}}>
            <Avatar className="story__avatar" src={image}  />
            <h4>{title}</h4>
        </div>
    )
}

export default Story
