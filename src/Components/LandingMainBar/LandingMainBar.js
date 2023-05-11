import React from "react";
import './LandingMainBar.css';
import { Image } from "react-bootstrap";
import { Button } from "@blueprintjs/core";
import ForestWithBackground from '../../Images/ForestWithBackground.svg';
import SustainifyLandingText from '../../Images/SustainifyLandingText.svg';
import GetStartedImage from '../../Images/GetStarted.svg';
import LearnActTrack from '../../Images/LearnActTrack.svg';
import { useNavigate } from "react-router-dom";

export default function LandingMainBar() {

    const navigate = useNavigate();

    return (
        <div id="landing-main-bar-component">

            <div>
                <Image id="forest-with-background-image" src={ForestWithBackground} />
            </div>

            <Image id="sustainify-landing-text-image" src={SustainifyLandingText} />

            <Button id="get-started-button" onClick={() => navigate("/signup")}>
                <Image src={GetStartedImage} />
            </Button>

            <hr id="landing-line" />

            <Image id="learn-act-track-image" src={LearnActTrack} />

            <div id="landing-left-text">
                <strong id="left-strong-text"> Living more sustainably doesn't have to be stressful. <br/> </strong>
                <span id="left-text-mover"> 
                    We’re here to help you with your sustainability journey --<br className="left-text-styler"/>
                    by curating relevant information, providing SMALL steps,<br className="left-text-styler"/>
                    and a way to track your progress. You can do however <br className="left-text-styler"/>
                    little or much as you want and are able to. You can choose <br className="left-text-styler"/>
                    specific areas to focus on, or let us get you started with a <br className="left-text-styler"/>
                    few! There's get you started with a few. There’s no pressure <br className="left-text-styler"/>
                    to be perfect! 
                </span>
            </div>

            <div id="right-landing-text">
                <strong id="right-strong-text"> How does Sustainify Work?</strong> <br/>
                <span>
                    In order to get the best out of Sustainify we encourage <br/>
                    youth to follow the Learn -{">"} Act -{">"} Track Path. <br/>
                     <br/>

                    <strong className="strong-subtitle"> Learn: </strong>
                    
                    Simple, useful, meaningful, relevant and<br/>
                    personalized information to start your sustainability journey <br/>
                      <br/>

                    <strong className="strong-subtitle"> Act: </strong>
                    Simple actionable steps to create sustainable habits<br/>
                    in the long run. <br/> <br/>

                    <strong className="strong-subtitle"> Track: </strong>
                    Track your progress, journal to keep it personal or <br/>
                    share with your community if you are feeling social.<br/>
                    
                </span>

                
            </div>

        </div>
    )
}