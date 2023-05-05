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
import Bookmark from '../../Images/Bookmark.svg'
import CompositeImage1 from '../../Images/CompositeImage1.svg'
import SmallTick from '../../Images/SmallTick.svg'

export default function CompositeSubCard1({ status, setStatus, ...props }) {
    const [open, setOpen] = useState(false);
    if (status === 3) {
        open && setOpen(false)
    }

    return (
        <div id="expandable-wrapper">
            {!open &&
                <>
                    <Image id="sub-card-image" src={SubCardImage} />
                    {status > 2 ? <Image id="closed-chevron1" src={SmallTick} /> :
                        <Image id="closed-chevron1" src={ClosedChevron} onClick={() => { status > 0 && setOpen((prev) => !prev); status > 0 && (!open ? setStatus(2) : setStatus(status)) }} />
                    }

                    <Image id="closed-favIcon" src={Vector} />
                    <span id="subcard-text"> {props.text} </span>

                </>
            }
            {open && status <= 2 &&
                <div id="expanded-wrapper1">
                    <Image id="expanded-card1" src={ExpandedCard} />
                    <Image
                        id="open-chevron1"
                        src={OpenChevron}
                        onClick={() => setOpen((prev) => !prev)}
                    />
                    <Image id="open-favIcon" src={Vector} />

                    <div id="expanded-header0">
                        {props.text}
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
                    <div className="bookmark-container">
                        <div style={{ padding: '7px' }}>
                            <Image src={Bookmark} />
                        </div>
                        <a href="https://www2.calrecycle.ca.gov/Docs/Web/112236" rel="noreferrer" target="_blank" style={{color:'green'}}>
                            CalRecycle - What to Put in Compost, Recycling, and Trash (Opens as a PDF)
                        </a>
                    </div>
                    <div className="bookmark-detail">
                        <div>
                            <Image src={CompositeImage1} />
                        </div>
                        
                    </div>
                </div>
            }

        </div>
    )
}