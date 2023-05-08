import React, { useEffect, useState } from 'react'
import { Image } from 'react-bootstrap'
import BigDone from '../../Images/BigDone.svg'
import BigNot from '../../Images/BigNot.svg'
import SmallDone from '../../Images/SmallDone.svg'
import smallNot from '../../Images/smallNot.svg'
import Ongoing from '../../Images/Ongoing.svg'
import TrackDone from '../../Images/TrackDone.svg'

import supabase from '../Config/dbconnection'
export default function TrackModule({ currentUser, selectedEmoji }) {
    const [learn, setLearn] = useState()
    const [act, setAct] = useState()
    console.log(learn);
    useEffect(() => {
        (async () => {
            if (currentUser) {
                const { data: learn, error } = await supabase.from('user_learn').select('user_id, learn_module_number,created_at').match({ user_id: currentUser.id })
                setLearn(learn)
                const { data: act } = await supabase.from('user_act').select('user_id, act_module_number,created_at').match({ user_id: currentUser.id })
                setAct(act)
            }
        })()
    }, [currentUser])
    const checklearn = (id) => {
        if (learn?.length > 0) {
            for (let i in learn) {
                if (learn[i].learn_module_number === id) {
                    return true
                }
            }
        }
        return false
    }
    const checklearndate = (id) => {
        if (learn?.length > 0) {
            for (let i in learn) {
                if (learn[i].learn_module_number === id) {
                    return new Date(learn[i].created_at).toLocaleDateString()
                }
            }
        }
        return false
    }
    const checkact = (id) => {
        if (act?.length > 0) {
            for (let i in act) {
                if (act[i].act_module_number === id) {
                    return true
                }
            }
        }
        return false
    }
    const checkactdate = (id) => {
        if (act?.length > 0) {
            for (let i in act) {
                if (act[i].act_module_number === id) {
                    return new Date(act[i].created_at).toLocaleDateString()
                }
            }
        }
        return false
    }
    return (
        <div style={{ paddingTop: '10px' }}>
            <div className='track_journey_heading'>
                Your learning journey
            </div>
            <div style={{ display: 'flex', paddingLeft: '128px', paddingTop: '30px', justifyContent: 'space-between' }}>
                <span className='track_journey_subheading'>Learn</span>
                <span className='track_journey_subheading'>Act</span>
                <span className='track_journey_subheading'>Track</span>
            </div>
            <div style={{ display: 'flex', paddingTop: '10px', alignItems: 'center' }}>
                <span style={{ width: '78px', paddingRight: '50px' }}>Composting</span>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                    {learn?.length > 2 ?
                        <div className='module_info'>
                            <Image src={BigDone} style={{ paddingBottom: '10px' }} className={`spacing`} />
                            <div className='hidden_info'>
                                <div>
                                    Completed
                                </div>
                                <div>
                                    {checklearndate(3)}
                                </div>
                            </div>
                        </div> :
                        <div className='module_info'>
                            <Image src={BigNot} className={`spacing`} />
                            <div className='hidden_info'>
                                <div>
                                    Not Started
                                </div>
                            </div>
                        </div>
                    }

                    <div className="track_progress2">

                    </div>
                    {checklearn(1) ?
                        <div className='module_info'>
                            <Image src={SmallDone} style={{ paddingBottom: '10px' }} className={`spacing`} />
                            <div className='hidden_info'>
                                <div>
                                    Module Name
                                </div>
                                <div>
                                    {checklearndate(1)}
                                </div>
                            </div>
                        </div> :
                        <div className='module_info'>
                            <Image src={smallNot} className={`spacing`} />
                            <div className='hidden_info'>
                                <div>
                                    Not Started
                                </div>
                            </div>
                        </div>
                    }
                    <div className="track_progress2">

                    </div>
                    {checklearn(2) ?
                        <div className='module_info'>
                            <Image src={SmallDone} style={{ paddingBottom: '10px' }} className={`spacing`} />
                            <div className='hidden_info'>
                                <div>
                                    Module Name
                                </div>
                                <div>
                                    {checklearndate(2)}
                                </div>
                            </div>
                        </div> :
                        <div className='module_info'>
                            <Image src={smallNot} className={`spacing`} />
                            <div className='hidden_info'>
                                <div>
                                    Not Started
                                </div>
                            </div>
                        </div>
                    }
                    <div className="track_progress2">

                    </div>
                    {checklearn(3) ?
                        <div className='module_info'>
                            <Image src={SmallDone} style={{ paddingBottom: '10px' }} className={`spacing`} />
                            <div className='hidden_info'>
                                <div>
                                    Module Name
                                </div>
                                <div>
                                    {checklearndate(3)}
                                </div>
                            </div>
                        </div> :
                        <div className='module_info'>
                            <Image src={smallNot} className={`spacing`} />
                            <div className='hidden_info'>
                                <div>
                                    Not Started
                                </div>
                            </div>
                        </div>
                    }
                    <div className="track_progress2">

                    </div>
                    {act?.length > 2 ?
                        <div className='module_info'>
                            <Image src={BigDone} style={{ paddingBottom: '10px' }} className={`spacing`} />
                            <div className='hidden_info'>
                                <div>
                                    Completed
                                </div>
                                <div>
                                    {checkactdate(3)}
                                </div>
                            </div>
                        </div> :
                        <div className='module_info'>
                            <Image src={BigNot} className={`spacing`} />
                            <div className='hidden_info'>
                                <div>
                                    Not Started
                                </div>
                            </div>
                        </div>
                    }

                    <div className="track_progress2">

                    </div>
                    {checkact(1) ?
                        <div className='module_info'>
                            <Image src={SmallDone} style={{ paddingBottom: '10px' }} className={`spacing`} />
                            <div className='hidden_info'>
                                <div>
                                    Module Name
                                </div>
                                <div>
                                    {checkactdate(1)}
                                </div>
                            </div>
                        </div> :
                        <div className='module_info'>
                            <Image src={smallNot} className={`spacing`} />
                            <div className='hidden_info'>
                                <div>
                                    Not Started
                                </div>
                            </div>
                        </div>
                    }
                    <div className="track_progress2">

                    </div>
                    {checkact(2) ?
                        <div className='module_info'>
                            <Image src={SmallDone} style={{ paddingBottom: '10px' }} className={`spacing`} />
                            <div className='hidden_info'>
                                <div>
                                    Module Name
                                </div>
                                <div>
                                    {checkactdate(2)}
                                </div>
                            </div>
                        </div> :
                        <div className='module_info'>
                            <Image src={smallNot} className={`spacing`} />
                            <div className='hidden_info'>
                                <div>
                                    Not Started
                                </div>
                            </div>
                        </div>
                    }
                    <div className="track_progress2">

                    </div>
                    {checkact(3) ?
                        <div className='module_info'>
                            <Image src={SmallDone} style={{ paddingBottom: '10px' }} className={`spacing`} />
                            <div className='hidden_info'>
                                <div>
                                    Module Name
                                </div>
                                <div>
                                    {checkactdate(3)}
                                </div>
                            </div>
                        </div> :
                        <div className='module_info'>
                            <Image src={smallNot} className={`spacing`} />
                            <div className='hidden_info'>
                                <div>
                                    Not Started
                                </div>
                            </div>
                        </div>
                    }
                    <div className="track_progress2">

                    </div>
                    {selectedEmoji !== 0 ?
                        <div className='module_info'>
                            <Image src={BigDone} style={{ paddingBottom: '12px' }} />
                            <div className='hidden_info'>
                                <div>
                                    Completed
                                </div>
                            </div>
                        </div> :
                        <div className='module_info'>
                            <Image src={Ongoing} />
                            <div className='hidden_info'>
                                <div>
                                    In Progress
                                </div>
                            </div>
                        </div>
                    }

                </div>

            </div>
            <div style={{ display: 'flex', paddingTop: '30px' }}>
                <span style={{ width: '78px', paddingRight: '50px' }}>Food Waste and Storage</span>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Image src={Ongoing} />
                    <div className="track_progress2">

                    </div>
                    <Image src={smallNot} className={`spacing`} />
                    <div className="track_progress2">

                    </div>
                    <Image src={smallNot} className={`spacing`} />
                    <div className="track_progress2">

                    </div>
                    <Image src={smallNot} className={`spacing`} />
                    <div className="track_progress2">

                    </div>
                    <Image src={BigNot} />
                    <div className="track_progress2">

                    </div>
                    <Image src={smallNot} className={`spacing`} />
                    <div className="track_progress2">

                    </div>
                    <Image src={smallNot} className={`spacing`} />
                    <div className="track_progress2">

                    </div>
                    <Image src={smallNot} className={`spacing`} />
                    <div className="track_progress2">

                    </div>
                    <Image src={BigNot} />
                </div>
            </div>
            <div style={{ display: 'flex', paddingTop: '30px' }}>
                <span style={{ width: '78px', paddingRight: '50px' }}>Recycling</span>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Image src={Ongoing} />
                    <div className="track_progress2">

                    </div>
                    <Image src={smallNot} className={`spacing`} />
                    <div className="track_progress2">

                    </div>
                    <Image src={smallNot} className={`spacing`} />
                    <div className="track_progress2">

                    </div>
                    <Image src={smallNot} className={`spacing`} />
                    <div className="track_progress2">

                    </div>
                    <Image src={BigNot} />
                    <div className="track_progress2">

                    </div>
                    <Image src={smallNot} className={`spacing`} />
                    <div className="track_progress2">

                    </div>
                    <Image src={smallNot} className={`spacing`} />
                    <div className="track_progress2">

                    </div>
                    <Image src={smallNot} className={`spacing`} />
                    <div className="track_progress2">

                    </div>

                    <Image src={BigNot} />


                </div>

            </div>
        </div>
    )
}
