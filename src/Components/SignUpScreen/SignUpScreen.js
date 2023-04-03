import React from "react";
import LandingTopBar from "../LandingTopBar/LandingTopBar";
import SignUpForm from "../SignUpForm/SignUpForm";
import card from '../../images/card.svg';
import { Image } from "react-bootstrap";
import './SignUpScreen.css'

export default function SignUpScreen () {

    return (
        <div id="grid-container">
            <LandingTopBar/>
            <span id="signup-form">
                <SignUpForm/>
            </span>
        </div>
    )
}