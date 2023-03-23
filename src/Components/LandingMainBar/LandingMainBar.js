import React from "react";
import forest_logo from '../../images/forest.svg';
import forest_background from '../../images/forest_background.svg';
import catch_line from '../../images/catch_line.svg';
import get_started from '../../images/get_started.svg';
import landing_text from '../../images/landing_text.svg';
import Image from 'react-bootstrap/Image';
import './LandingMainBar.css';

export default function LandingMainBar () {
    return (
        <>
            <Image id="forest-background" src={forest_background}/>
            <Image id="forest-logo" src={forest_logo}/>
            <Image id="catch-line" src={catch_line}/>
            <Image id="get-started" src={get_started}/>
            <hr id="landing-line"/>
            <Image id="landing-text" src={landing_text}/>
        </>
    )
}