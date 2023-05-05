import React from "react";
import './LearnComponent.css'
import WavingHand from '../../Images/WavingHand.svg';
import { Collapse, Image } from "react-bootstrap";
import { MultiSelect } from "react-multi-select-component";
import { useState } from "react";
import ExpandableComponent from "../ExpandableComponent/ExpandableComponent";
import { useEffect } from "react";
// import MultiSelect from "react-bootstrap"

export default function LearnComponent(props) {

    const [selected, setSelected] = useState([]);
    const [components, setComponents] = useState(['Composite','Recycling','Food Waste and Storage','Singe Use and Landfill',"Farmer's Markets",'Food Pantries','Grocery Stores'])
    const options = [
        { label: "groceries", value: "groceries" },
        { label: "savings", value: "savings" },
        { label: "waste", value: "waste" },
        { label: "test", value: "test" },
    ];
    const componentTags = {
        'Composite' : ['waste','savings'],
        'Recycling': ['waste','savings','test'],
        'Food Waste and Storage': ['waste','savings'],
        'Singe Use and Landfill':  ['waste','savings'],
        "Farmer's Markets": ['waste','savings'],
        'Food Pantries': ['waste','savings'],
        'Grocery Stores': ['waste','savings'],
    }
    const sortComponents = (components, selectedTags) => {
        const selectedComponents = components.filter(component => {
            const tags = componentTags[component];
            return selectedTags.some(tag => tags.includes(tag.value));
        });
        const unselectedComponents = components.filter(component => !selectedComponents.includes(component));
        return [...selectedComponents, ...unselectedComponents];
    };

    // Update the component state whenever the selected tags change
    useEffect(() => {
        setComponents(sortComponents(components, selected));
    }, [selected]);
    console.log(components);
    return (
        <>

            <span id="learn-header"> We're glad to have you here, </span>

            <span id="learn-header-name"> Rohan </span>

            <span id="waving-hand">
                <Image id="waving-hand-image" src={WavingHand} />
            </span>

            <div id="learn-header-subtext">
                Note that we are still in beta testing, which means you may see a more limited selection of materials right now. Congrats on being an early <br /> adopter!
            </div>

            <div id="ready-to-learn-text">
                Ready to learn?
            </div>

            <div id="ready-to-learn-subtext">
                Click on any of the cards below to see what topics they cover. After you’ve <br /> started a topic, you’ll start seeing ways to act on what you’ve learned.
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
                        {components.map(title=>(
                            <ExpandableComponent key={title} text={title} tags={componentTags[title]} />
                        ))}
                    </div>
                </span>


            </div>


        </>
    )
}