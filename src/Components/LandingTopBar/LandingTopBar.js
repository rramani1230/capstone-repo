import React from "react";
import './LandingTopBar.css';
import sustainify_logo from '../../images/sustainify.svg';
import signup_logo from '../../images/signup.svg';
import login_logo from '../../images/login.svg';
import Image from 'react-bootstrap/Image';


export default function LandingTopBar () {
    return (
        <div id="main-title"> 
        
            <span id="sustainify-logo">
                <Image id="sustainify-image" src={sustainify_logo}/>
            </span>

            <span id="login-logo">
                <Image id="login-image" src={login_logo}/>
            </span>

            <span id="signup-logo">
                <Image  id="signup-image" src={signup_logo}/>
            </span>

        </div>
        
    )
}