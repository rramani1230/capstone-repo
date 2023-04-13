import React from "react";
import { Image } from "react-bootstrap";
import './SignedInTopBar.css'
import SustainifyLogo from '../../Images/SustainifyLogo.svg';
import AccountButton from '../../Images/AccountButton.svg';
import LightBulb from '../../Images/LightBulb.svg';
import { Button } from "@blueprintjs/core";
import { useState } from "react";


export default function SignedInTopBar () {

    const [current_tab, set_current_tab] = useState("Learn");
    return (
        <div id="signed-in-topbar-component">
            <Image id="sustainify-logo-image" src={SustainifyLogo} />

            {current_tab === "Learn" &&
                <Button 
                    id="learn-button-selected"
                    onClick={() => {
                        set_current_tab("Learn")
                }}>
                    <Image id="light-bulb-image" src={LightBulb}/>
                    <span id="learn-text"> Learn </span>
                </Button>
            }

            {current_tab !== "Learn" &&
                <Button 
                    id="learn-button"
                    onClick={() => {
                        set_current_tab("Learn")
                }}>
                    <Image id="light-bulb-image" src={LightBulb}/>
                    <span id="learn-text"> Learn </span>
                </Button>
            }

            {current_tab === "Act" &&
                <Button 
                    id="act-button-selected"
                    onClick={() => {
                        set_current_tab("Act")
                    }}
                >
                    <Image id="light-bulb-image" src={LightBulb}/>
                    <span id="learn-text"> Act </span>
                </Button>
            }

            {current_tab !== "Act" &&
                <Button 
                    id="act-button"
                    onClick={() => {
                        set_current_tab("Act")
                    }}
                >
                    <Image id="light-bulb-image" src={LightBulb}/>
                    <span id="learn-text"> Act </span>
                </Button>
            } 

        {current_tab === "Track" && 
            <Button 
                id="track-button-selected"
                onClick={() => {
                    set_current_tab("Track")
                }}
            >
                <Image id="light-bulb-image" src={LightBulb}/>
                <span id="learn-text"> Track </span>
            </Button>
        }

        {current_tab !== "Track" && 
            <Button 
                id="track-button"
                onClick={() => {
                    set_current_tab("Track")
                }}
            >
                <Image id="light-bulb-image" src={LightBulb}/>
                <span id="learn-text"> Track </span>
            </Button>
        }
            <Button id="account-button">
                <Image id="account-button-image" src={AccountButton}/>
            </Button>
        </div> 
    )
}