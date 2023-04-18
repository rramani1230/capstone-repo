import React from "react";
import LandingTopBar from "../LandingTopBar/LandingTopBar";
import './ConfirmEmailScreen.css';

export default function ConfirmEmailScreen () {
    return (
        <>
            <div>
                <LandingTopBar/>
            </div>

            <div id="confirm-message">
                <span id="confirm-message-text">
                    Hey there! You should have received an email asking to confirm if this is really you! <br/> <tb/>You mind checking your inbox :)
                </span>
            </div>
        </>
    )
}