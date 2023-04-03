import React from "react";
import catch_line from '../../images/catch_line.svg';
import get_started from '../../images/get_started.svg';
import landing_text from '../../images/landing_text.svg';
import forest_with_background from '../../images/forest_with_background.svg';
import Image from 'react-bootstrap/Image';
import './LandingMainBar.css';

export default function LandingMainBar () {
    return (
        <div id="landing-main-bar">

            <span id="forest-with-background">
                <Image src={forest_with_background}/>
            </span>

            <span id="catch-line">
                <Image src={catch_line}/>
            </span>

            <span id="get-started">
                <Image src={get_started}/>
            </span>

            <span id="landing-line">
                <hr id="landing-line-line" style={{borderColor: "lightgreen"}}/>
            </span>

            <span id="landing-text">
                <Image src={landing_text}/>
            </span>

        </div>
    )
}