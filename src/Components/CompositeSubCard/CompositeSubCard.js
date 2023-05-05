import React from "react";
import './CompositeSubCard.css'
import { Image } from "react-bootstrap";
import SubCardImage from '../../Images/SubCard.svg';
import ClosedChevron from '../../Images/ClosedChevron.svg'
import { useState } from "react";
// import { navigate } from 'hookrouter';
import ExpandedCard from '../../Images/SubCardExpanded.svg';
import OpenChevron from '../../Images/OpenChevron.svg';
import Vector from '../../Images/Vector.svg'
import bulb from '../../Images/bulb.svg'
import Bookmark from '../../Images/Bookmark.svg'
import CompositeImage from '../../Images/CompositeImage.svg'
import SmallTick from '../../Images/SmallTick.svg'


export default function CompositeSubCard({ status, setStatus, ...props }) {
    const [open, setOpen] = useState(false);
    if (status === 2) {
        open && setOpen(false)
    }
    console.log(status);
    return (
        <div id="expandable-wrapper">
            {!open &&
                <>
                    <Image id="sub-card-image" src={SubCardImage} />
                    {status > 1 ? <Image id="closed-chevron1" src={SmallTick} /> :
                        <Image id="closed-chevron1" src={ClosedChevron} onClick={() => { setOpen((prev) => !prev); !open ? setStatus(1) : setStatus(status) }} />
                    }
                    <Image id="closed-favIcon" src={Vector} />
                    <span id="subcard-text"> {props.text} </span>

                </>
            }
            {open && status <= 1 &&
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
                            33% of the food produced for human consumption in the US is wasted. This uneaten food goes to landfill, which then releases methane, a potent greenhouse gas, into the atmosphere. Composting helps mitigate this amount.
                        </div>
                    </div>

                    <div className="text-container">
                        <div id="" className="text-detail text-heading"> What is compost?  </div>
                    </div>

                    <div className="text-container">
                        <span id="" className="text-detail"> Compost is created through a natural process in which organic material such as food waste and yard trimmings are assembled in the right ratios and allowed to decompose. The end product -- compost -- is a nutrient rich soil, or humus (pronounced HYOO-mus), that’s added to soil to improve its health.
                        </span>
                    </div>

                    <div className="text-container">
                        <span id="" className="text-detail text-heading text-continue"> Composting has many benefits. </span><span className="text-detail text-continue">It reduces waste sent to landfills, reduces greenhouse gas emissions, and enriches soil with nutrients as a cheaper alternative to commercial fertilizers.</span>
                    </div>
                    <div id="expanded-header1">
                        <Image src={bulb} />
                        <span>Additional Resources</span>
                    </div>
                    <div className="bookmark-container">
                        <div style={{ padding: '7px' }}>
                            <Image src={Bookmark} />
                        </div>
                        <div style={{textDecoration: 'underline'}}>
                            Mapping Urban Access to Composting Programs | GreenBlue
                        </div>
                    </div>
                    <div className="bookmark-detail">
                        <div style={{ padding: '7px' }}>
                            <Image src={CompositeImage} />
                        </div>
                        <div>
                            “To better understand residential access to composting programs in urban areas of the United States, GreenBlue has developed interactive maps and charts of municipally-run and privately-run composting programs, available on Tableau Public.
                        </div>
                    </div>
                </div>
            }

        </div>
    )
}