import React from "react";
import './LandingScreen.css';
import LandingTopBar from "../LandingTopBar/LandingTopBar";
import LandingMainBar from "../LandingMainBar/LandingMainBar";

export default function LandingScreen () {
    return (
        <div id="grid-container"> 
            <LandingTopBar id="landing-top-bar"/>
            <LandingMainBar id="landing-main-bar"/>
        </div>
    );
}