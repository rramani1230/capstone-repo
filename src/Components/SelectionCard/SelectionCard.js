import React from "react";
import { Image } from "react-bootstrap";
import SelectionBox from '../../Images/SelectionCard.svg';
import './SelectionCard.css'

export default function SelectionCard (props) {


    let cutoff = 0;

    if (props.cardText.length > 80) {
        cutoff = props.cardText.indexOf(' ', 80);
    }

    console.log(cutoff);
    console.log(props.cardText.substring(0, cutoff),  props.cardText.substring(cutoff+2, props.cardText.length))


    return (
        <>
            <Image id="selection-card-image" src={SelectionBox}/>
            <input 
                id="selection-check-box"

                style={{ 
                    color: "#00e676",
                    width: 20,
                    height: 20
                }}
                type="checkbox"></input>
                {
                    <span id="card-text"> {props.cardText} </span>
                }
        </>
    )
}