import React from "react";
import './ConfirmLandingScreen.css';
import LandingTopBar from "../LandingTopBar/LandingTopBar";
import LandingMainBar from "../LandingMainBar/LandingMainBar";
import { Image } from "react-bootstrap";
import ConfirmedBackground from "../../Images/ConfirmBackground.png";
import CheckCircle from '../../Images/CheckCircle.svg';

export default function ConfirmLandingScreen () {

    return (
        <>


            <div id="confirmed-landing-topbar">
                <LandingTopBar/>
            </div>


            {/* <div id="confirmed-message">
                <Image id="confirmed-background-image" src={ConfirmedBackground}/>
                <span id="confirm-message-text"> Email Email successfully confirmed! Please log in to continue. </span>
            </div> */}

            <div id="confirmed-bar">
                <Image id="check-circle" src={CheckCircle}/>
                <span id="confirmed-bar-message"> Email successfuly confirmed! Please login to continue </span>
            </div>

            <div id="confirmed-landing-mainbar">
                <LandingMainBar/>
            </div>
        
        </>
    );
}