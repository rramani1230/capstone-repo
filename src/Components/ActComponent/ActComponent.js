import React from "react";
import { Button, Image } from "react-bootstrap";
import SubCardImage from '../../Images/SubCard.svg';
import ClosedChevron from '../../Images/ClosedChevron.svg'
import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import ExpandedCard from '../../Images/ActCardExpanded.svg';
import OpenChevron from '../../Images/OpenChevron.svg';
import TakeAction from '../../Images/TakeAction.svg'
import leafCompleted from '../../Images/leafCompleted.svg'
import leafTransparent from '../../Images/leafTransparent.svg'
import SmallLeafFilled from '../../Images/SmallLeafFilled.svg'
import supabase from "../Config/dbconnection";
import './ActComponent.css'
export default function ActComponent(props) {
    const [actPoints, setActPoints] = useOutletContext();
    console.log(actPoints);
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const actOngoing = async () => {
        const { data: { user } } = await supabase.auth.getUser();
        if (user) {
            const { data: mydata, error } = await supabase.from('user_ongoing').select('user_id, ongoing').match({ user_id: user.id, module: 'act' })
            if (mydata.length === 0) {
                const { error } = await supabase
                    .from('user_ongoing')
                    .insert({ user_id: user.id, ongoing: true, module: 'act' })
                console.log(error);
            }

        }
        navigate("/act/composite")
    }
    return (
        <div id="expandable-wrapper">
            {!open &&
                <>
                    <Image id="sub-card-image" src={SubCardImage} />
                    <Image id="closed-chevron1" src={ClosedChevron} onClick={() => { setOpen((prev) => !prev); }} />

                    <div className={`fav_container`}>
                        <div>{actPoints?.count ?? 0}/4</div>
                        <div>{actPoints?.count === 4 ? <Image src={SmallLeafFilled} /> : <Image src={leafTransparent} />}</div>
                    </div>
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
                    <div className={`fav_container`}>
                        <div>{actPoints?.count ?? 0}/4</div>
                        <div>{actPoints?.count === 4 ? <Image src={SmallLeafFilled} /> : <Image src={leafTransparent} />}</div>
                    </div>
                    <div className="expanded-header2">
                        {props.text ?? 'Overview'}
                    </div>

                    <span>
                        <Button className="long-buttons2" style={{ background: "lightgrey" }}>
                            <div className="long-buttons-text2"> Actions </div>
                        </Button>
                    </span>

                    <div>
                        <Button className="long-buttons2">
                            <div className="long-buttons-text2"> Check out at least 2 resources </div>
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
                        <Image id="learn-button-image" src={TakeAction} onClick={() => actOngoing()} />
                    </Button>
                </div>
            }

        </div>
    )
}