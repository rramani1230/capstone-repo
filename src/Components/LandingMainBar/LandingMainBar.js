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

            <div id="landing-left-text">
                <strong id="left-strong-text"> Living more sustainably doesn't have to be stressful. <br/> </strong>
                <span> 
                    We’re here to help you with your sustainability journey --<br/>
                    by curating relevant information, providing SMALL steps,<br/> 
                    and a way to track your progress. You can do however <br/>
                    little or much as you want and are able to. You can choose <br/>
                    specific areas to focus on, or let us get you started with a<br/>
                    few! There's get you started with a few. There’s no pressure <br/>
                    to be perfect! 
                </span>
            </div>

            <div id="right-landing-text">
                <strong id="right-strong-text"> How does Sustainify Work?</strong> <br/>
                <span>
                    In order to get the best out of Sustainify we <br/>
                    encourage yout to follow the Learn -{">"} Act -{">"} <br/>
                    Track Path. <br/>

                    <strong className="strong-subtitle"> Learn: </strong>
                    
                    Simple, useful, meaningful, relevant <br/>
                    and personalized information to start your <br/>
                    Sustainability journey <br/>

                    <strong className="strong-subtitle"> Act: </strong>
                    Simple actionable steps to create <br/>
                    sustainable habits in the long run. <br/>

                    <strong className="strong-subtitle"> Track: </strong>
                    Track your progress, journal to keep it <br/>
                    personal or share with your community if you <br/>
                    are feeling social.
                </span>

                
            </div>

        </div>
    )
}