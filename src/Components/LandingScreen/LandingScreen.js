import React from "react";
import LandingMainBar from "../LandingMainBar/LandingMainBar";
import LandingTopBar from "../LandingTopBar/LandingTopBar";
import './LandingScreen.css'

export default function LandingScreen () {
    return (
        <>
            <div id="landing-top-bar">
                <LandingTopBar/>
            </div>

            <div id="landing-main-bar">
                <LandingMainBar/>
            </div>
        </>
    )
}