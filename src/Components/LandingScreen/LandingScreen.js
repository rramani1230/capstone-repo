import React from "react";
import './LandingScreen.css';
import LandingTopBar from "../LandingTopBar/LandingTopBar";
import LandingMainBar from "../LandingMainBar/LandingMainBar";

export default function LandingScreen () {

    return (
        <>
            <div id="landing-topbar">
                <LandingTopBar/>
            </div>

            <div id="landing-mainbar">
                <LandingMainBar/>
            </div>
        
        </>
    );
}