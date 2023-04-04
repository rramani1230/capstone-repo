import React from "react";
import ForestWithBackground from '../../Images/ForestWithBackground.svg';
import { Image } from "react-bootstrap";
import './LandingMainBar.css'
import SustainifyText from '../../Images/SustainifyText.svg'
import GetStartedButton from '../../Images/GetStartedButton.svg';
import LearnActTrack from '../../Images/LearnActTrack.svg';

export default function LandingMainBar () {

    return (
        <div>
            <div id="forest-with-background"> 
                <Image id="forest-with-background-image" src={ForestWithBackground}/>
            </div>

            
            <div id="sustainify-text">
                <Image id="sustainify-text-image" src={SustainifyText}/>
            </div>

            <div id="get-started-button">
                <Image id="get-started-button-image" src={GetStartedButton}/>
            </div>

            <div id="landing-line">
                <hr id="landing-line-image"/>
            </div>

            <div id="learn-act-track">
                <Image id="learn-act-track-image" src={LearnActTrack}/>
            </div>
        </div>
    )
}