import React, { useState } from "react";
import { Image } from "react-bootstrap";
import SelectionBox from '../../Images/SelectionCard.svg';
import BlueLongCard from '../../Images/BlueLongCard.svg';
import './SelectionCard.css'

export default function SelectionCard (props) {

    let [checked, set_checked] = useState(false);

    return (
        <>
            {!checked && 
                <Image
                id="selection-card-image"
                onClick={() => set_checked((prev) => !prev)}
                src={SelectionBox}/>
            }

            {checked && 
                <Image
                    id="selection-card-image"
                    src={BlueLongCard}
                    onClick={() => set_checked((prev) => !prev)}
                />
            }
            <input 
                id="selection-check-box"

                style={{ 
                    color: "#00e676",
                    width: 20,
                    height: 20
                }}
            type="checkbox"
            checked={checked}
            onClick={() => {
                    set_checked((prev) => !prev)
                    console.log(checked);
                }}
            />
                {
                    <span id="card-text"> {props.cardText} </span>
                }
        </>
    )
}