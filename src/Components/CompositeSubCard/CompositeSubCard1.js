import React from "react";
import './CompositeSubCard.css'
import { Image } from "react-bootstrap";
import SubCardImage from '../../Images/SubCard.svg';
import ClosedChevron from '../../Images/ClosedChevron.svg'
import { useState } from "react";
import ExpandedCard from '../../Images/SubCardExpanded.svg';
import OpenChevron from '../../Images/OpenChevron.svg';
import Vector from '../../Images/Vector.svg'
import bulb from '../../Images/bulb.svg'
import CompositeImage1 from '../../Images/CompositeImage1.svg'
import SmallTick from '../../Images/SmallTick.svg'
import { useContext } from "react";
import { AccountContext } from "../../App";
import favFilled from '../../Images/favFilled.svg'
import SubBookmark from "../Bookmarks/Bookmark";
import supabase from "../Config/dbconnection";

export default function CompositeSubCard1({ status, setStatus, skip, ...props }) {
    const { favourite: Favourite } = useContext(AccountContext)
    const [favourite, setFavourite] = Favourite
    const [open, setOpen] = useState(false);
    if (status === 3) {
        open && setOpen(false)
    }
    const updateLearnModule = async () => {
        const { data: { user } } = await supabase.auth.getUser()
        if (user) {
            const { data, error } = await supabase.from('user_learn').select('user_id, learn_module_number').match({ user_id: user.id, learn_module_number: 2 })
            if (data.length === 0) {
                const { error } = await supabase
                    .from('user_learn')
                    .insert({ user_id: user.id, learn_module_number: 2 })
                console.log(error);
            }
        }
    }
    return (
        <div id="expandable-wrapper">
            {!open &&
                <>
                    <Image id="sub-card-image" src={SubCardImage} />
                    {status > 2 ? <Image id="closed-chevron1" src={SmallTick} /> :
                        <Image id="closed-chevron1" src={ClosedChevron} onClick={() => { (status > 0 || skip) && setOpen((prev) => !prev); updateLearnModule(); (status > 0 && !skip) && ((!open && !skip) ? setStatus(2) : !skip && setStatus(status)) }} />
                    }

                    {favourite.includes(2) ? <Image id="closed-favIcon" src={favFilled} onClick={() => setFavourite(prev => prev.filter(item => item !== 2))} /> :
                        <Image id="closed-favIcon" src={Vector} onClick={() => setFavourite(prev => [...prev, 2])} />}
                    <span id="subcard-text"> {props.text ?? 'What can be composted?'} </span>

                </>
            }
            {console.log(skip)}
            {open && (status <= 2 || skip) &&
                <div id="expanded-wrapper1">
                    <Image id="expanded-card1" src={ExpandedCard} />
                    <Image
                        id="open-chevron1"
                        src={OpenChevron}
                        onClick={() => setOpen((prev) => !prev)}
                    />
                    {favourite.includes(2) ? <Image id="open-favIcon" src={favFilled} onClick={() => setFavourite(prev => prev.filter(item => item !== 2))} /> :
                        <Image id="open-favIcon" src={Vector} onClick={() => setFavourite(prev => [...prev, 2])} />}

                    <div id="expanded-header0">
                        {props.text ?? 'What can be composted?'}
                    </div>

                    <div className="text-container">
                        <div id="" className="text-detail">
                            Generally, organic materials such as food scraps and yard trimmings are compostable. However, this can vary by location depending on what composting facilities your community has available.
                        </div>
                    </div>

                    <div className="text-container">
                        <div id="" className="text-detail text-heading"> General composting tips  </div>
                    </div>
                    <div className="text-container">
                        <div id="" className="text-detail">
                            - only compost biodegradable materials
                        </div>
                        <div id="" className="text-detail">
                            - maintain proper moisture and aeration levels
                        </div>
                        <div id="" className="text-detail">
                            - avoid composting meat, dairy, and other animal products
                        </div>
                    </div>

                    <div id="expanded-header1">
                        <Image src={bulb} />
                        <span>Additional Resources</span>
                    </div>
                    <SubBookmark id='2' heading="CalRecycle - What to Put in Compost, Recycling, and Trash (Opens as a PDF)" link="https://www2.calrecycle.ca.gov/Docs/Web/112236" image={CompositeImage1} />

                </div>
            }

        </div>
    )
}