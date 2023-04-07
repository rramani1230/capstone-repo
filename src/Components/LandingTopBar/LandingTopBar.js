import React from "react";
import { Button } from "@blueprintjs/core";
import { Image } from "react-bootstrap";
import SustainifyLogo from '../../images/SustainifyLogo.svg';
import LoginButton from '../../images/LoginButton.svg';
import SignUpButton from '../../images/SignUpButton.svg';
import './LandingTopBar.css'


export default function LandingTopBar () {
    return (
        <div id="landing-top-bar-component">
            
            <Image id="sustainify-logo-image" src={SustainifyLogo}/>
            
            <Button id="login-button"> 
                <Image id="login-button-image" src={LoginButton}/>
            </Button>

            <Button id="signup-button">
                <Image id="signup-button-image" src={SignUpButton}/>
            </Button>

        </div>
    )
}