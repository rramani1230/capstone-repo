import React from "react";
import { Button, Image } from "react-bootstrap";
import SubCardImage from '../../Images/SubCard.svg';
import ClosedChevron from '../../Images/ClosedChevron.svg'
import { useState } from "react";
import { navigate } from 'hookrouter';
import ExpandedCard from '../../Images/ActCardExpanded.svg';
import OpenChevron from '../../Images/OpenChevron.svg';
import TakeAction from '../../Images/TakeAction.svg'
import leafCompleted from '../../Images/leafCompleted.svg'
import './ActComponent.css'
export default function ActComponent(props) {

    const [open, setOpen] = useState(false);
    return (
        <div id="expandable-wrapper">
            {!open &&
                <>
                    <Image id="sub-card-image" src={SubCardImage} />
                    <Image id="closed-chevron1" src={ClosedChevron} onClick={() => { setOpen((prev) => !prev); }} />

                    <Image id="closed-favIcon2" src={leafCompleted} />
                    <span id="subcard-text"> {props.text ?? 'Overview'} </span>

                </>
            }
            {open &&
                <div className="expanded-wrapper2">
                    <Image id="expanded-card1" src={ExpandedCard} />
                    <Image
                        className="open-chevron2"
                        src={OpenChevron}
                        onClick={() => setOpen((prev) => !prev)}
                    />
                    <Image id="open-favIcon2" src={leafCompleted} />
                    <div className="expanded-header2">
                        {props.text ?? 'Overview'}
                    </div>

                    <span>
                        <Button className="long-buttons2" style={{ background: "lightgrey" }}>
                            <div  className="long-buttons-text2"> Actions </div>
                        </Button>
                    </span>

                    <div>
                        <Button className="long-buttons2">
                            <div  className="long-buttons-text2"> Check out at least 2 resources </div>
                        </Button>
                    </div>

                    <div>
                        <Button className="long-buttons2">
                            <span className="long-buttons-text2"> Try starting a home compost </span>
                        </Button>
                    </div>

                    <div>
                        <Button className="long-buttons2">
                            <span className="long-buttons-text2"> Set a custom goal </span>
                        </Button>
                    </div>
                    <Button className="act-button">
                        <Image id="learn-button-image" src={TakeAction} onClick={() => navigate("act/composite")} />
                    </Button>
                </div>
            }

        </div>
    )
}