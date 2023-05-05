import React, { useEffect } from "react";
import { Button, Image } from "react-bootstrap";
import SubCardImage from '../../Images/SubCard.svg';
import ClosedChevron from '../../Images/ClosedChevron.svg'
import { useState } from "react";
import { navigate } from 'hookrouter';
import ExpandedCard from '../../Images/ActCardExpanded2.svg';
import OpenChevron from '../../Images/OpenChevron.svg';
import TakeAction from '../../Images/TakeAction.svg'
import leafCompleted from '../../Images/leaf2.svg'
import leafDone from '../../Images/leaf2Done.svg'
import box from '../../Images/box.svg'
import boxtick from '../../Images/boxtick.svg'
import DisabledSaveEntry from '../../Images/DisabledSaveEntry.svg'
import SaveEntry from '../../Images/SaveEntry.svg'
import Edit from '../../Images/Edit.svg'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import './ActSubComponent.css'
export default function ActSubComponent1({ points, setPoints, ...props }) {

    const [open, setOpen] = useState(false);
    const [subPoint, setSubPoint] = useState([])
    const [mytext, setMytext] = useState()
    const [saved, setSaved] = useState(false)
    const [saved2, setSaved2] = useState(false)

    const [value, setValue] = useState(new Date());
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const updatePoints = (id) => {
        if (subPoint.length < 2 && !subPoint.includes(id)) {
            setSubPoint(prev => [...prev, id])
        }

    }
    useEffect(() => {
        if (subPoint.length === 2) {
            setPoints(prev => prev + 2)
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
                <div className="expanded-wrapper3">
                    <Image id="expanded-card1" src={ExpandedCard} />
                    <Image
                        className="open-chevron"
                        src={OpenChevron}
                        onClick={() => setOpen((prev) => !prev)}
                    />
                    {subPoint.length >= 2 ? <Image className="open-favIcon" src={leafDone} />
                    :<Image className="open-favIcon" src={leafCompleted} />
                    }
                    
                    <div className="expanded-header">
                        {props.text ?? 'Overview'}
                    </div>
                    <span style={{ bottom: '752px', position: 'relative', left: '973px' }}>{subPoint.length}/2 Completed</span>
                    <div className="act-position">
                        <div className="act1-subheading">
                            <span className="act1-subheading-text">Identify what materials you’ll need</span>
                        </div>
                        <div style={{ padding: '10px 25px' }}>
                            <div>
                                how will you get the materials you need for composting?
                            </div>
                            <div style={{ paddingTop: '10px', display: 'flex' }}>
                                <div className="change-textarea-size">
                                    <textarea value={mytext} onChange={(e) => setMytext(e.target.value)} id="w3review" name="w3review" rows="1" cols="65" placeholder="Text" style={{ resize: 'none' }}></textarea>

                                </div>
                                <div style={{ paddingLeft: '100px', paddingTop: '40px' }}>
                                    {saved ? <Image src={boxtick} /> : <Image src={box} />}
                                </div>
                            </div>
                            <div className="image-container">
                                {mytext ? (saved ? <Image src={Edit} /> : <Image src={SaveEntry} onClick={() => { setSaved(true); updatePoints(1) }} />) : <Image src={DisabledSaveEntry} />}
                            </div>

                        </div>
                        <div className="act1-subheading" style={{ marginTop: '20px' }}>
                            <span className="act1-subheading-text">Set a date to be reminded</span>
                        </div>
                        <div style={{ paddingTop:'20px',paddingLeft: '50px' , display: 'flex' }}>
                            <div>
                                <Calendar onChange={setValue} value={value} />

                            </div>
                            <div style={{ paddingLeft: '60px' }}>
                                Suggested times
                                <div style={{ paddingTop: '20px' }}>
                                    <div onClick={() => setValue(new Date(value.getFullYear(), value.getMonth(), value.getDate() + 7))} className="sug-week" style={{ width: '100px', height: '50px', border: '1px solid black', borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
                                        One Week
                                    </div>
                                    <div onClick={() => setValue(new Date(value.getFullYear(), value.getMonth(), value.getDate() + 14))} className="sug-week" style={{ width: '100px', height: '50px', border: '1px solid black', borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
                                        Two Week
                                    </div>
                                    <div onClick={() => setValue(new Date(value.getFullYear(), value.getMonth(), value.getDate() + 21))} className="sug-week" style={{ width: '100px', height: '50px', border: '1px solid black', borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
                                        Three Week
                                    </div>
                                </div>
                            </div>
                            <div style={{ padding: '70px' }}>
                                <div>⏰ Reminder is set!</div>
                                <div style={{ paddingTop: '40px', textAlign: 'center' }}>
                                    <div>
                                        Check in will be on:
                                    </div>
                                    <div style={{ fontWeight: 'bold' }}>
                                        {value.toLocaleDateString("en-US", options)}
                                    </div>
                                </div>
                            </div>
                            {saved2 ? <Image style={{ paddingLeft: '32px' }} src={boxtick} /> : <Image style={{ paddingLeft: '32px' }} src={box} />}
                        </div>
                        <div className="image-container" style={{marginBottom:'100px',paddingLeft:'678px'}}>
                            {value ? <Image src={SaveEntry} onClick={() => { setSaved2(true); updatePoints(2) }} /> : <Image src={DisabledSaveEntry} />}
                        </div>
                    </div>
                </div>
            }

        </div>
    )
}