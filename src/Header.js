import React from 'react';
import './Header.css';
import { useStateValue } from './StateProvider';
import {Avatar, IconButton, Tooltip, Badge } from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';

import HomeIcon from '@material-ui/icons/Home';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';

import AppsIcon from '@material-ui/icons/Apps';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Header() {
    const [{user}, dispatch] = useStateValue();

    // const logout = () =>{
    //     firebase
    //     .auth().
    //     signOut().
    //     then(()=>{
    //         actionTypes.SET_USER = null
    //     }).catch((e)=>(
    //         console.log(e.message)
    //     ))        
    // }

    return (
        <div className="header">
            <div className="header__left">
                <img src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo-768x480.png" alt="" />
                <div className="header__input">
                    <SearchIcon />
                    <input placeholder="Search Facebook" type="text" />
                </div>
            </div>

            <div className="header__middle">
                <div className="header__option header__option--active">
                    <Tooltip title="Home"><HomeIcon fontSize = "large"/></Tooltip>
                </div>
                <div className="header__option" style={{transform : "rotate(180deg)"}}>
                    <Tooltip title="Watch"><LiveTvIcon fontSize = "large"/></Tooltip>
                </div>
                <div className="header__option">
                    <Tooltip title="Marketplace"><StorefrontIcon fontSize = "large"/></Tooltip>
                </div>
                <div className="header__option">
                    <Tooltip title="Groups">
                        <Badge badgeContent={2} color="secondary">
                            <SupervisedUserCircleIcon fontSize = "large"/>
                        </Badge>
                    </Tooltip>
                        
                </div>
                <div className="header__option">
                    <Tooltip title="Gaming"><SportsEsportsIcon fontSize = "large"/></Tooltip>
                </div>

            </div>

            <div className="header__right">
                <div className="header__info">
                    <Avatar src={user.photoURL}  /> 
                    <h4>{user.displayName}</h4>
                </div>

                <Tooltip title="Menu" >
                    <IconButton>
                        <AppsIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Messenger">
                    <IconButton><ForumIcon /></IconButton>
                </Tooltip>
                <Tooltip title="Notification">
                    <IconButton>
                        <Badge badgeContent={6} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                </Tooltip>
                <Tooltip title="Account">
                    <IconButton ><ExpandMoreIcon  /></IconButton>
                </Tooltip>

            </div>

        </div>
    )
}

export default Header
