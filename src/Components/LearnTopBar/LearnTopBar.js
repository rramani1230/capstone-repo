import React, { useState } from "react";
import { Image } from "react-bootstrap";
import SustainifyLogo from '../../Images/SustainifyLogo.svg';
import AccountButton2 from '../../Images/AccountButton2.svg';
import LightBulb from '../../Images/LightBulb.svg';
import Leaf from '../../Images/Leaf.svg';
import Chart from '../../Images/Chart.svg';
import { Button } from "@blueprintjs/core";
import './LearnTopBar.css'
import { navigate } from "hookrouter";
import BookmarkIcon from '../../Images/BookmarkIcon.svg';
import ProfileIcon from '../../Images/ProfileIcon.svg';
import HeartIcon from '../../Images/HeartIcon.svg';

export default function LearnTopBar({ current }) {
    const [isOpen, setIsOpen] = useState(false);
    console.log(current);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }
    const current_tab = current ?? "learn"

    return (
        <>
            <Image id="sustainify-logo-image" src={SustainifyLogo} />

            <Button id={`${current_tab === "Learn" ? "learn-button-selected" : "learn-button"}`} onClick={() => navigate('/application')}>
                <Image id="light-bulb-image" src={LightBulb} />
                <span id="learn-text"> Learn </span>
            </Button>


            <Button id={`${current_tab === "Act" ? "act-button-selected" : "act-button"}`} onClick={() => navigate('/act')}>
                <Image id="light-bulb-image" src={Leaf} />
                <span id="learn-text"> Act </span>
            </Button>


            <Button id={`${current_tab === "Track" ? "track-button-selected" : "track-button"}`}>
                <Image id="light-bulb-image" src={Chart} />
                <span id="learn-text"> Track </span>
            </Button>

            <div class="account-dropdown">
                <button onClick={toggleDropdown} >Account</button>
                {isOpen &&
                    <ul className="dropdown-menu">
                        <li className="drop-items" onClick={() => navigate('/account/favourite')}>Favourite<span className="icon"><Image src={HeartIcon} /></span></li>
                        <li className="drop-items" onClick={() => navigate('/account/bookmark')}>Bookmarks<span className="icon"><Image src={BookmarkIcon} /></span></li>
                        <li className="drop-items">Profile<span className="icon"><Image src={ProfileIcon} /></span></li>
                        <li className="drop-items">Sign Out </li>
                    </ul>
                }
            </div>


        </>
    )
}