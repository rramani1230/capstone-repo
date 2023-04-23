import React from "react";
import { Image } from "react-bootstrap";
import MiniSelectionCardImage from '../../Images/MiniSelectionCard.svg';
import './MiniSelectionCard.css'
import { useState } from "react";

export default function MiniSelectionCard (props) {

    const [checked, set_checked] = useState(false);

    return (
        <>
            <Image id="mini-selectioncard-image" src={MiniSelectionCardImage}/>
            <input 
                id="radio-check"
                type="radio"
                onClick={() => set_checked((prev) => !prev)}
                checked={checked}
            />
            <span id="mini-text"> {props.text} </span>
        </>
    );
}