import React from "react";
import './ExpandableComponent.css'
import { Image } from "react-bootstrap";
import ExpandableCard from '../../Images/ExpandableCard.svg';
import ClosedChevron from '../../Images/ClosedChevron.svg';
import LearnButton from '../../Images/LearnButton.svg'
import { useState } from "react";
import Tag from "../Tags/Tag";
import ExpandedCard from '../../Images/ExpandedCard.svg';
import OpenChevron from '../../Images/OpenChevron.svg';
import { Button } from "@blueprintjs/core";
// import { navigate } from 'hookrouter';
import { useNavigate } from "react-router-dom";
import supabase from "../Config/dbconnection";

export default function ExpandableComponent(props) {

    const navigate = useNavigate();

    const [open, set_open] = useState(false);
    const learnOngoing = async () => {
        const { data: { user } } = await supabase.auth.getUser();
        if (user) {
            const { data: mydata, error } = await supabase.from('user_ongoing').select('user_id, ongoing').match({ user_id: user.id, module: 'learn' })
            if (mydata.length === 0) {
                const { error } = await supabase
                    .from('user_ongoing')
                    .insert({ user_id: user.id, ongoing: true, module: 'learn' })
                console.log(error);
            }

        }
        navigate("/compost")
    }

    return (
        <div id="expandable-wrapper">
            {/* <h1> Hello World </h1> */}
            {!open &&
                <>
                    <div>
                        <Image id="exandable-card" src={ExpandableCard} />
                        <Image
                            id="closed-chevron"
                            src={ClosedChevron}
                            onClick={() => props.text === 'Composting' && set_open((prev) => !prev)}
                        />
                        <div id="expandable-header">
                            {props.text}
                        </div>
                    </div>

                    <div id="tag-list">
                        {props.tags.map((tag, idx) => (
                            <Tag key={idx} text={tag} />
                        ))}
                        {/* <Tag id="tag-1" text="waste"/> */}
                    </div>
                </>
            }

            {open && props.text === 'Composting' &&
                <div id="expanded-wrapper">
                    <span>
                        <Image id="expanded-card" src={ExpandedCard} />
                        <Image
                            id="open-chevron"
                            src={OpenChevron}
                            onClick={() => set_open((prev) => !prev)}
                        />
                        <div id="expanded-header">
                            {props.text}
                        </div>

                        <span>
                            <Button className="long-buttons" style={{ background: "lightgrey" }}>
                                <div id="topics-text" className="long-buttons-text"> Topics </div>
                            </Button>
                        </span>

                        <div>
                            <Button className="long-buttons">
                                <div id="overview-text" className="long-buttons-text"> Overview </div>
                            </Button>
                        </div>

                        <div>
                            <Button className="long-buttons">
                                <span id="compost-text" className="long-buttons-text"> What can be composted? </span>
                            </Button>
                        </div>

                        <div>
                            <Button className="long-buttons">
                                <span id="home-compost-text" className="long-buttons-text"> How to start a home compost? </span>
                            </Button>
                        </div>

                    </span>

                    <div id="expanded-tag-list">
                        <Tag id="tag-1" text={props.tags[0]} />
                        <Tag id="tag-2" text={props.tags[1]} />
                    </div>

                    <Button id="learn-button2">
                        <Image id="learn-button-image" src={LearnButton} onClick={() => learnOngoing()} />
                    </Button>
                </div>
            }

        </div>

    )
}