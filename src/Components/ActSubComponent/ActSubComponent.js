import React, { useEffect } from "react";
import { Button, Image } from "react-bootstrap";
import SubCardImage from '../../Images/SubCard.svg';
import ClosedChevron from '../../Images/ClosedChevron.svg'
import { useState } from "react";
import ExpandedCard from '../../Images/SubCardExpanded.svg';
import OpenChevron from '../../Images/OpenChevron.svg';
import TakeAction from '../../Images/TakeAction.svg'
import leafCompleted from '../../Images/leaf1.svg'
import leafDone from '../../Images/leaf1done.svg'
import CompositeImage from '../../Images/CompositeImage.svg'
import CompositeImage1 from '../../Images/CompositeImage1.svg'
import CompositeImage2 from '../../Images/CompositeImage2.svg'
import CompositeImage3 from '../../Images/CompositeImage3.svg'
import SubBookmark from "../Bookmarks/Bookmark";
import './ActSubComponent.css'
export default function ActSubComponent({points,setPoints,...props}) {

    const [open, setOpen] = useState(false);
    const [subPoint, setSubPoint] = useState([])
    useEffect(() => {
      if(subPoint.length === 2){
        setPoints(prev => prev+1)
      }
    }, [subPoint])
    
    return (
        <div id="expandable-wrapper">
            {!open &&
                <>
                    <Image id="sub-card-image" src={SubCardImage} />
                    <Image id="closed-chevron1" src={ClosedChevron} onClick={() => { setOpen((prev) => !prev); }} />
                    {subPoint.length >= 2 ? <Image id="closed-favIcon2" src={leafDone} />
                    :<Image id="closed-favIcon2" src={leafCompleted} />
                    }
                    <span id="subcard-text"> {props.text ?? 'Overview'} </span>

                </>
            }
            {open &&
                <div id="expanded-wrapper1">
                    <Image id="expanded-card1" src={ExpandedCard} />
                    <Image
                        id="open-chevron1"
                        src={OpenChevron}
                        onClick={() => setOpen((prev) => !prev)}
                    />
                    {subPoint.length >= 2 ? <Image id="open-favIcon1" src={leafDone} />
                    :<Image id="open-favIcon1" src={leafCompleted} />
                    }
                    <div id="expanded-header0">
                        {props.text ?? 'Overview'}
                    </div>
                    <span style={{ bottom: '452px', position: 'relative', left: '973px' }}>{subPoint.length}/2 Completed</span>
                    <div style={{ display: 'flex', flexWrap: 'wrap', width: '900px' }}>
                        <div style={{ paddingLeft: '10px', paddingTop: '10px' }}>
                            <SubBookmark setSubPoint={setSubPoint} subPoint={subPoint} id='1' heading="Mapping Urban Access to Composting Programs | GreenBlue" image={CompositeImage} text="To better understand residential access to composting programs in urban areas of the United States, GreenBlue has developed interactive maps and charts of municipally-run and privately-run composting programs, available on Tableau Public." />
                        </div>
                        <div style={{ paddingLeft: '50px', paddingTop: '10px' }}>
                            <SubBookmark setSubPoint={setSubPoint} subPoint={subPoint} id='2' heading="CalRecycle - What to Put in Compost, Recycling, and Trash (Opens as a PDF)" link="https://www2.calrecycle.ca.gov/Docs/Web/112236" image={CompositeImage1} />
                        </div>

                        <div style={{ paddingLeft: '10px', paddingTop: '10px' }}>
                            <SubBookmark setSubPoint={setSubPoint} subPoint={subPoint} id='3' heading="Your 5-step guide to start composting and help fight climate change : Life Kit : NPR" link="https://www.npr.org/2020/04/07/828918397/how-to-compost-at-home" image={CompositeImage2} />
                        </div>

                        <div style={{ paddingLeft: '50px', paddingTop: '10px' }}>
                            <SubBookmark setSubPoint={setSubPoint} subPoint={subPoint} id='4' heading="Infographic: How to Compost | PBS.org" link="https://www.pbs.org/wnet/nature/blog/inside-nature-infographic-how-to-compost/" image={CompositeImage3} text="This infographic reviews the dos and donts of composting, where and how to compost, what to compost and what not to compost." />
                        </div>
                    </div>
                </div>
            }

        </div>
    )
}