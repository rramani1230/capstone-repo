import React, { useState } from "react";
import { Image } from "react-bootstrap";
import './ApplicationTopBar.css'
import SustainifyLogo from '../../Images/SustainifyLogo.svg';
import AccountButton from '../../Images/AccountButton.svg';
import LightBulb from '../../Images/LightBulb.svg';
import Leaf from '../../Images/Leaf.svg';
import Chart from '../../Images/Chart.svg';
import { Button } from "@blueprintjs/core";
import { useContext } from "react";
import { TopBarContext } from "../ApplicationScreen/ApplicationScreen";
import BookmarkIcon from '../../Images/BookmarkIcon.svg';
import ProfileIcon from '../../Images/ProfileIcon.svg';
import HeartIcon from '../../Images/HeartIcon.svg';
import { useNavigate } from "react-router-dom";

export default function ApplicationTopBar() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }

    const [current_tab, set_current_tab] = useContext(TopBarContext);

    return (
        <div id="signed-in-topbar-component">
            <Image id="sustainify-logo-image" src={SustainifyLogo} />

            {current_tab === "Learn" &&
                <Button
                    id="learn-button-selected"
                    onClick={() => {
                        set_current_tab("Learn");
                        navigate('/application');
                    }}>
                    <Image id="light-bulb-image" src={LightBulb} />
                    <span id="learn-text"> Learn </span>
                </Button>
            }

            {current_tab !== "Learn" &&
                <Button
                    id="learn-button"
                    onClick={() => {
                        set_current_tab("Learn");
                        navigate('/application');
                    }}>
                    <Image id="light-bulb-image" src={LightBulb} />
                    <span id="learn-text"> Learn </span>
                </Button>
            }

            {current_tab === "Act" &&
                <Button
                    id="act-button-selected"
                    onClick={() => {
                        set_current_tab("Act")
                        navigate('/act');

                    }}
                >
                    <Image id="light-bulb-image" src={Leaf} />
                    <span id="learn-text"> Act </span>
                </Button>
            }

            {current_tab !== "Act" &&
                <Button
                    id="act-button"
                    onClick={() => {
                        set_current_tab("Act")
                        navigate('/act');

                    }}
                >
                    <Image id="light-bulb-image" src={Leaf} />
                    <span id="learn-text"> Act </span>
                </Button>
            }

            {current_tab === "Track" &&
                <Button
                    id="track-button-selected"
                    onClick={() => {
                        set_current_tab("Track")
                        navigate('/track');
                    }}
                >
                    <Image id="light-bulb-image" src={Chart} />
                    <span id="learn-text"> Track </span>
                </Button>
            }

            {current_tab !== "Track" &&
                <Button
                    id="track-button"
                    onClick={() => {
                        set_current_tab("Track")
                        navigate('/track');
                    }}
                >
                    <Image id="light-bulb-image" src={Chart} />
                    <span id="learn-text"> Track </span>
                </Button>
            }
            <div class="account-dropdown">
                <button onClick={toggleDropdown} >Account</button>
                {isOpen &&
                    <ul className ="dropdown-menu">
                        <li className="drop-items" onClick={()=>navigate('/account/favourite')}>Favourite<span className="icon"><Image src={HeartIcon}/></span></li>
                        <li className="drop-items" onClick={()=>navigate('/account/bookmark')}>Bookmarks<span className="icon"><Image src={BookmarkIcon}/></span></li>
                        <li className="drop-items" onClick={() =>navigate('/')}>Sign Out </li>
                    </ul>
                }
            </div>
        </div>
    )
}