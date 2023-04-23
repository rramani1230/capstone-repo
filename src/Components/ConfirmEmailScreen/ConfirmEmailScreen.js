import React from "react";
import LandingTopBar from "../LandingTopBar/LandingTopBar";
import './ConfirmEmailScreen.css';
import { Image } from "react-bootstrap";
import SignUpForest from '../../Images/SignUpForest.svg';

export default function ConfirmEmailScreen () {
    return (
        <>


            <div>
                <LandingTopBar/>
            </div>

            <div id="confirm-message">
                <h3 id="confirm-header"> Almost there - Check your email! </h3>
                <span id="confirm-text"> You should receive a link to confirm your account shortly. Click that link to finish signing up!</span>
            </div>

            <div id="confirm-trees">
                <Image id="confirm-trees-image" src={SignUpForest}></Image>
            </div>
        </>
    )
}