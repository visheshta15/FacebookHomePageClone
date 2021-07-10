import React from 'react'
import './Login.css';
import {Button} from '@material-ui/core';
import {auth , provider} from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {

    const [state, dispatch] = useStateValue();

    const signIn =()=>{
        // sign in.....
        auth.signInWithPopup(provider)
        //so when i comes in then
        .then(result =>{
            console.log(result)
            console.log(result.user)

            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
        })
        .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <div className="login__logo">
                <img className="login__logo1" src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" alt=""/>
                <img className="login__logo2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/1280px-Facebook_Logo_%282019%29.svg.png" alt=""/>
            </div>
            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>
    )
}

export default Login
