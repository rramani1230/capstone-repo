import React from "react";
import './SubCard.css'
import { Image } from "react-bootstrap";
import SubCardImage from '../../Images/SubCard.svg';
import ClosedChevron from '../../Images/ClosedChevron.svg'

export default function SubCard (props) {

    return (
        <>
            <Image id="sub-card-image" src={SubCardImage}/>
            <Image id="closed-chevron1" src={ClosedChevron}/>
            <span id="subcard-text"> {props.text} </span>
        </>
    )
}