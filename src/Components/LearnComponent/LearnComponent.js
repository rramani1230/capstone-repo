import React from "react";
import './LearnComponent.css'
import WavingHand from '../../Images/WavingHand.svg';
import { Collapse, Image } from "react-bootstrap";
import { MultiSelect } from "react-multi-select-component";
import { useState } from "react";
import ExpandableComponent from "../ExpandableComponent/ExpandableComponent";
// import MultiSelect from "react-bootstrap"

export default function LearnComponent (props) {

    const [selected, setSelected] = useState([]);

    const options = [
        {label: "groceries", value: "groceries"},
        {label: "savings", value: "savings"},
        {label: "waste", value: "waste"}
      ];

    return (
        <>

            <span id="learn-header"> We're glad to have you here, </span>
            
            <span id="learn-header-name"> Rohan </span>
            
            <span id="waving-hand">
                <Image id="waving-hand-image" src={WavingHand}/>
            </span>

            <div id="learn-header-subtext">
                Note that we are still in beta testing, which means you may see a more limited selection of materials right now. Congrats on being an early <br/> adopter!
            </div>

            <div id="ready-to-learn-text">
                Ready to learn?
            </div>

            <div id="ready-to-learn-subtext">
                Click on any of the cards below to see what topics they cover. After you’ve <br/> started a topic, you’ll start seeing ways to act on what you’ve learned.
            </div>

            <div id="dropdown-selector">
            <MultiSelect
                options={options}
                value={selected}
                onChange={setSelected}
                // labelledBy={"Select"}
                isCreatable={true}
                hasSelectAll={false}
            />
            </div>

            <div id="learn-nodes">

                <span className="expandables">
                    <div>
                        <ExpandableComponent text="Composting" tags={props.tags}/>
                        <ExpandableComponent text="Recycling" tags={props.tags}/>
                        <ExpandableComponent text="Food Waste and Storage" tags={props.tags}/>
                        <ExpandableComponent text="Singe Use and Landfill" tags={props.tags}/>
                        <ExpandableComponent text="Farmer's Markets" tags={props.tags}/>
                        <ExpandableComponent text="Food Pantries" tags={props.tags}/>
                        <ExpandableComponent text="Grocery Stores" tags={props.tags}/>
                    </div>
                </span>


            </div>


        </>
    )
}