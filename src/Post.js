import React from 'react'
import './Post.css';
import db from './firebase';
import {Avatar, Tooltip} from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from '@material-ui/icons/NearMe';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import ClearIcon from '@material-ui/icons/Clear';

function Post({profilePic, image, username, timestamp, message, id}) {

    const deletePost = (event) =>{
        event.preventDefault()
        db.collection('posts').doc(id).delete();
    }

    return (
        <div className="post">
            <div className="post__top">
                <Avatar src={profilePic} className="post__avatar" />
                <div className="post__topInfo">
                    <h3>{username}</h3>
                    {/* <p>{new Date(timestamp?.toDate()).toUTCString()}</p> */}
                    <p>{new Date().toUTCString()}</p>
                </div>
                <div style={{color:"red"}} className="post__topDelete">
                    <Tooltip title="Delete Post" ><ClearIcon onClick={deletePost} fontSize="small"/></Tooltip>
                </div>
            </div>

            <div className="post__bottom">
                <p>{message}</p>
            </div>

            <div className="post__image">
                <img src={image} alt="" />
            </div>

            <div className="post__options">
                <div className="post__option">
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>
                <div className="post__option">
                    <ChatBubbleOutlineIcon />
                    <p>Comment</p>
                </div>
                <div className="post__option">
                    <NearMeIcon />
                    <p>Share</p>
                </div>
                <div className="post__option">
                    <AccountCircleIcon />
                    <ExpandMoreIcon />
                </div>

            </div>

        </div>
    )
}

export default Post
