import React from "react";
import './Landing.css';
import LandingTopBar from "../LandingTopBar/LandingTopBar";
import LandingMainBar from "../LandingMainBar/LandingMainBar";

export default function Landing () {
    return (
        <div id="grid-container"> 
            <LandingTopBar id="landing-top-bar"/>
            <LandingMainBar id="landing-main-bar"/>
        </div>
    );
}