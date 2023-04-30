import React from "react";
import { Image } from "react-bootstrap";
import MiniSelectionCardImage from '../../Images/MiniSelectionCard.svg';
import './MiniSelectionCard.css'
import { useState } from "react";
import BlueSelectionCard from '../../Images/BlueSelectionCard.svg';

export default function MiniSelectionCard (props) {

    const [checked, set_checked] = useState(false);

    return (
        <>
            {!checked && 
                <Image 
                    id="mini-selectioncard-image"
                    src={MiniSelectionCardImage}
                    onClick={() => set_checked((prev) => !prev)}
                />
            }

            {checked &&
                <Image 
                    id="mini-selectioncard-image"
                    src={BlueSelectionCard}
                    onClick={() => set_checked((prev) => !prev)}
                />
            }
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