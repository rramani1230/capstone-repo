import React from "react";
import './LandingMainBar.css';
import { Image } from "react-bootstrap";
import { Button } from "@blueprintjs/core";
import ForestWithBackground from '../../images/ForestWithBackground.svg';
import SustainifyLandingText from '../../images/SustainifyLandingText.svg';
import GetStartedImage from '../../images/GetStarted.svg';
import LearnActTrack from '../../images/LearnActTrack.svg';


export default function LandingMainBar () {

    return (
        <div id="landing-main-bar-component">

            <div>
                <Image id="forest-with-background-image" src={ForestWithBackground}/>
            </div>

            <Image id="sustainify-landing-text-image" src={SustainifyLandingText}/>
            
            <Button id="get-started-button">
                <Image src={GetStartedImage}/>
            </Button>

            <hr id="landing-line"/>

            <Image id="learn-act-track-image" src={LearnActTrack}/>

        </div>
    )
}