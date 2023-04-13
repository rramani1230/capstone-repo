import React from "react";
import { Image } from "react-bootstrap";
import WelcomeMessage from '../../Images/WelcomeMessage.svg';
import RaisedHands from '../../Images/RaisedHands.svg';
import './WelcomeMainBar.css';
import NextButton from '../../Images/NextButton.svg';
import { Button } from "@blueprintjs/core";
import SignUpForest from '../../Images/SignUpForest.svg';

export default function WelcomeMainBar () {

    return (
        <>
            <Image id="welcome-message-image" src={WelcomeMessage}/>
            <Image id="raised-hands-image" src={RaisedHands}/>

            <div id="welcome-page-initial-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut <br/>
                velit mollis, egestas ligula nec, rhoncus tortor. In sagittis nunc me, <br/>
                at ultricies nibh commodo malesuada. Interdum et malesuada fames ac a <br/>
                ipsum primis in faucibus. Mauris consectetur, eros sit amet pretium d, <br/>
                urna ipsum pellentesque eros, ac rhoncus ligula elit id augue. Phasel <br/>
                sodales lectus eget tellus auctor blandit. Donec vestibulum sapien si <br/>
                interdum sollicitudin. Fusce quis ligula non tellus volutpat pretiums <br/>
                ligula. Integer a enim in velit pulvinar feugiat. In hac habitasse ta <br/>
                Donec sit amet mattis purus, molestie tincidunt dui. <br/>
            </div>

            <Button id="next-button">
                <Image id="next-button-image" src={NextButton}/>
            </Button>

            <div id="welcome-signup-forest">
                <Image id="welcome-signup-forest-image" src={SignUpForest}/>
            </div>

        </>
    )
}