import React from "react";
import LearnTopBar from "../LearnTopBar/LearnTopBar";
import './ModuleFinishedScreen.css'
import FinishModule from '../../Images/FinishModule.svg'
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import { useState } from "react";
import { Button, Image } from "react-bootstrap";
import bulb2 from '../../Images/bulb2.svg'
import Congrats from '../../Images/Congrats.svg'
import favFilled from '../../Images/favFilled.svg'
import BookmarkFilled from '../../Images/BookmarkFilled.svg'
import LeafFilled from '../../Images/LeafFilled.svg'
import NextModule from '../../Images/NextModule.svg'
import Feed1 from '../../Images/Feed1.svg'
import Feed2 from '../../Images/Feed2.svg'
import Feed3 from '../../Images/Feed3.svg'
import Feed4 from '../../Images/Feed4.svg'
import Feed5 from '../../Images/Feed5.svg'

export default function ModuleFinishedScreen({ paths }) {
    const [completed, setCompleted] = useState(0)
    const [moduleFinshed, setModuleFinshed] = useState(false)

    return (
        <>
            <div id="compost-learn-topbar">
                <LearnTopBar />
            </div>
            <div id="compost-breadcrumbs">
                <Breadcrumbs paths={paths} />
            </div>
            <div style={{ padding: '100px' }}>
                <div >
                    <Image src={bulb2} style={{ paddingRight: '20px' }} />
                    <Image src={Congrats} />
                </div>
                <div style={{ padding: '50px' }}>
                    <div style={{ paddingBottom: '10px' }}>
                        <Image src={BookmarkFilled} />
                        <spav className="fav-text">0 Bookmarks added </spav>
                    </div>
                    <div>
                        <Image src={favFilled} />
                        <spav className="fav-text">0 Favourites added </spav>
                    </div>
                </div>
                <div >
                    <Image src={LeafFilled} style={{ paddingRight: '20px' }} />
                    <span className="module-text">Ready to act?</span>
                </div>
                <div style={{ padding: '20px' }}>
                    <span className="module-heading ">1. Take some time to reflect</span>
                </div>
                <div style={{ paddingLeft: '50px' }}>
                    <div>
                        <span className="module-text2">How do you feel about being able to act on what you just read?</span>
                        <div style={{ padding: '30px', display: 'flex' }}>
                            <div style={{ paddingLeft: '30px' }}>
                                <Image src={Feed1} />
                                <div>
                                    not great
                                </div>
                            </div>
                            <div style={{ paddingLeft: '30px' }}>
                                <Image src={Feed2} />
                                <div>
                                </div>
                            </div>
                            <div style={{ paddingLeft: '30px' }}>
                                <Image src={Feed3} />
                                <div>
                                    so-so
                                </div>
                            </div>
                            <div style={{ paddingLeft: '30px' }}>
                                <Image src={Feed4} />
                                <div>
                                </div>
                            </div>
                            <div style={{ paddingLeft: '30px' }}>
                                <Image src={Feed5} />
                                <div>
                                    great!
                                </div>
                            </div>

                        </div>
                    </div>
                    <div>
                        <span className="module-text2">What do you think about what you just read?</span>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <div>
                            <div>
                                jot down some thoughts here...
                            </div>
                            <textarea id="w3review" name="w3review" rows="7" cols="80" placeholder="Text" style={{resize: 'none'}}></textarea>
                            
                        </div>
                        <div style={{ paddingLeft: '180px', paddingTop: '50px' }}>
                            <Button className='module-finish-button2'>
                                <Image src={NextModule} />
                            </Button>
                        </div>

                    </div>
                </div>

            </div>


        </>
    )
}