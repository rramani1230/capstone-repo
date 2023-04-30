import React from "react";
import { useState } from "react";
import './Option.css'

export default function Option (props) {

    const [checked, set_checked] = useState(false);

    return (
    <>
        <input 
            id="option-check"
            type="checkbox"
        />
        <span id="option-text"> {props.text} </span>
    </>
    );
    
}