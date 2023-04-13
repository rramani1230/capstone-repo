import React from "react";
import SignedInTopBar from "../SignedInTopBar/SignedInTopBar";
import WelcomeMainBar from "../WelcomeMainBar/WelcomeMainBar";

export default function WelcomeScreen () {
    return (

        <>
            <div id="signed-in-topbar">
                <SignedInTopBar/>
            </div>

            <div id="welcome-screen">
                <WelcomeMainBar/>
            </div>
        </>
    )
}