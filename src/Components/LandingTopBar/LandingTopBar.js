import React from "react";
import { Image, } from "react-bootstrap";
import SustainifyLogo from '../../Images/SustainifyLogo.svg';
import LoginButton from '../../Images/LoginButton.svg';
import SignUpButton from '../../Images/SignUpButton.svg';


import './LandingTopBar.css';

export default function LandingTopBar () {

    return ( 
        <div> 
            <span id="sustainify-landing-logo"> 
                <Image src={SustainifyLogo}/>
            </span>

            <span id="login-button">
                <Image id="login-button-image" src={LoginButton}/>
            </span>

            <span id="signup-button">
                <Image id="signup-button-image" src={SignUpButton}/>
            </span>

        </div>
    );
}