import React from "react";
import './LandingTopBar.css';
import sustainify_logo from '../../images/sustainify.svg';
import signup_logo from '../../images/signup.svg';
import login_logo from '../../images/login.svg';
import Image from 'react-bootstrap/Image';


export default function LandingTopBar () {
    return (
        <div id="main-title"> 
            <Image id="sustainify-logo" src={sustainify_logo}/>
            <Image id="login_logo" src={login_logo}/> 
            <Image id="signup_logo" src={signup_logo}/>
        </div>
        
    )
}