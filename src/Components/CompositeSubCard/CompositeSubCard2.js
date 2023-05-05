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
import CompositeImage2 from '../../Images/CompositeImage2.svg'
import CompositeImage3 from '../../Images/CompositeImage3.svg'
import SmallTick from '../../Images/SmallTick.svg'

export default function CompositeSubCard2({ status, setStatus, ...props }) {
    const [open, setOpen] = useState(false);
    if (status === 4) {
        open && setOpen(false)
    }
    return (
        <div id="expandable-wrapper">
            {!open &&
                <>
                    <Image id="sub-card-image" src={SubCardImage} />
                    {status > 3 ? <Image id="closed-chevron1" src={SmallTick} /> :
                        <Image id="closed-chevron1" src={ClosedChevron} onClick={() => { status > 1 && setOpen((prev) => !prev); status > 1 && !open ? setStatus(3) : setStatus(status) }} />
                    }

                    <Image id="closed-favIcon" src={Vector} />
                    <span id="subcard-text"> {props.text} </span>


                </>
            }
            {open && status <= 3 &&
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
                            If municipal composting isn’t offered in your area, don’t worry! You can start your own compost at home.                        </div>
                    </div>


                    <div id="expanded-header1">
                        <Image src={bulb} />
                        <span>Additional Resources</span>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <span style={{ paddingRight: '20px' }}>
                            <div className="bookmark-container">
                                <div style={{ padding: '7px' }}>
                                    <Image src={Bookmark} />
                                </div>
                                <a href="https://www.npr.org/2020/04/07/828918397/how-to-compost-at-home" rel="noreferrer" target="_blank" style={{color:'green'}}>
                                    Your 5-step guide to start composting and help fight climate change : Life Kit : NPR
                                </a>
                            </div>
                            <div className="bookmark-detail">
                                <div>
                                    <Image src={CompositeImage2} />
                                </div>
                            </div>
                        </span>
                        <span>
                            <div className="bookmark-container">
                                <div style={{ padding: '7px' }}>
                                    <Image src={Bookmark} />
                                </div>
                                <a href="https://www.pbs.org/wnet/nature/blog/inside-nature-infographic-how-to-compost/" rel="noreferrer" target="_blank" style={{display: 'flex', justifyContent: 'center', alignItems: 'center' ,color:'green'}}>
                                    Infographic: How to Compost | PBS.org
                                </a>
                            </div>
                            <div className="bookmark-detail">
                                <div style={{ padding: '7px' }}>
                                    <Image src={CompositeImage3} />
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    This infographic reviews the dos and donts of composting, where and how to compost, what to compost and what not to compost.
                                </div>
                            </div>
                        </span>
                    </div>
                </div>
            }

        </div>
    )
}