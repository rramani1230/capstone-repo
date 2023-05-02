import { TagInput } from "@blueprintjs/core";
import React from "react";
import { Button } from "react-bootstrap";
import './Tag.css'

export default function Tag (props) {

    const colorscheme = {
        "waste": "#FFEDEA",
        "groceries": "CFEDEA",
        "savings": "#FEDACA",
    }

    return (
        <span id="tag-span">
            <Button id="tag-button" style={{background: colorscheme[props.text] }}> {props.text} </Button>
        </span>
    )
}