import React from "react";
import { Button } from "@blueprintjs/core";
import { Image } from "react-bootstrap";
import SustainifyLogo from '../../Images/SustainifyLogo.svg';
import LoginButton from '../../Images/LoginButton.svg';
import SignUpButton from '../../Images/SignUpButton.svg';
import './LandingTopBar.css'
import { useNavigate } from "react-router-dom";


export default function LandingTopBar() {

    const navigate = useNavigate();

    return (
        <div id="landing-top-bar-component">

            <Image id="sustainify-logo-image" src={SustainifyLogo} onClick={() => navigate('/')} />

            <Button id="login-button" onClick={() => navigate('/login')}>
                <Image id="login-button-image" src={LoginButton} />
            </Button>

            <Button id="signup-button" onClick={() => navigate('/signup')}>
                <Image id="signup-button-image" src={SignUpButton} />
            </Button>

        </div>
    )
}