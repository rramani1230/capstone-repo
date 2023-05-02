import React from "react";
import { Image } from "react-bootstrap";
import SustainifyLogo from '../../Images/SustainifyLogo.svg';
import AccountButton from '../../Images/AccountButton.svg';
import LightBulb from '../../Images/LightBulb.svg';
import Leaf from '../../Images/Leaf.svg';
import Chart from '../../Images/Chart.svg';
import { Button } from "@blueprintjs/core";
import './LearnTopBar.css'

export default function () {

    const current_tab = "Learn"

    return (
        <>
            <Image id="sustainify-logo-image" src={SustainifyLogo} />

            {current_tab === "Learn" &&
                <Button id="learn-button-selected">
                    <Image id="light-bulb-image" src={LightBulb}/>
                    <span id="learn-text"> Learn </span>
                </Button>
            }

            {current_tab !== "Act" &&
                <Button id="act-button">
                    <Image id="light-bulb-image" src={Leaf}/>
                    <span id="learn-text"> Act </span>
                </Button>
            } 

            {current_tab !== "Track" && 
                <Button id="track-button">
                    <Image id="light-bulb-image" src={Chart}/>
                    <span id="learn-text"> Track </span>
                </Button>
            }
            
            <Button id="account-button">
                <Image id="account-button-image" src={AccountButton}/>
            </Button>
        </>
    )
}