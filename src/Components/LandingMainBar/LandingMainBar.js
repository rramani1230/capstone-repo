import React from "react";
import './LandingMainBar.css';
import { Image } from "react-bootstrap";
import { Button } from "@blueprintjs/core";
import ForestWithBackground from '../../Images/ForestWithBackground.svg';
import SustainifyLandingText from '../../Images/SustainifyLandingText.svg';
import GetStartedImage from '../../Images/GetStarted.svg';
import LearnActTrack from '../../Images/LearnActTrack.svg';

export default function LandingMainBar() {

    return (
        <div id="landing-main-bar-component">

            <div>
                <Image id="forest-with-background-image" src={ForestWithBackground} />
            </div>

            <Image id="sustainify-landing-text-image" src={SustainifyLandingText} />

            <Button id="get-started-button">
                <Image src={GetStartedImage} />
            </Button>

            <hr id="landing-line" />

            <Image id="learn-act-track-image" src={LearnActTrack} />

        </div>
    )
}