import React, { useEffect } from "react";
import './CompositeSubCard.css'
import { Image } from "react-bootstrap";
import SubCardImage from '../../Images/SubCard.svg';
import ClosedChevron from '../../Images/ClosedChevron.svg'
import { useState } from "react";
import ExpandedCard from '../../Images/SubCardExpanded.svg';
import OpenChevron from '../../Images/OpenChevron.svg';
import Vector from '../../Images/Vector.svg'
import bulb from '../../Images/bulb.svg'
import CompositeImage2 from '../../Images/CompositeImage2.svg'
import CompositeImage3 from '../../Images/CompositeImage3.svg'
import SmallTick from '../../Images/SmallTick.svg'
import { useContext } from "react";
import { AccountContext } from "../../App";
import favFilled from '../../Images/favFilled.svg'
import SubBookmark from "../Bookmarks/Bookmark";
import supabase from "../Config/dbconnection";

export default function CompositeSubCard2({ status, setStatus, skip, ...props }) {
    const { favourite: Favourite } = useContext(AccountContext)
    const [favourite, setFavourite] = Favourite
    const [open, setOpen] = useState(false);
    const [completed, setCompleted] = useState(false)
    const [user, setUser] = useState()
    if (!skip && status !== 3) {
        open && setOpen(false)
    }
    const updateLearnModule = async () => {
        if (user) {
            const { data, error } = await supabase.from('user_learn').select('user_id, learn_module_number').match({ user_id: user.id, learn_module_number: 3 })
            if (data.length === 0) {
                const { error } = await supabase
                    .from('user_learn')
                    .insert({ user_id: user.id, learn_module_number: 3 })
                console.log(error);
                setCompleted(true);
            }
            (!skip) && setStatus(3)
        }
    }
    useEffect(() => {
        (async () => {
            const { data: { user } } = await supabase.auth.getUser();
            setUser(user)
            if(user){
                const { data : mydata, error } = await supabase.from('user_learn').select('user_id, learn_module_number').match({ user_id: user.id, learn_module_number: 3 })
                console.log(mydata);
                if(mydata && mydata.length > 0){
                    setCompleted(true)
                }
            }
        })()
    }, [])
    return (
        <div id="expandable-wrapper">
            {!open &&
                <>
                    <Image id="sub-card-image" src={SubCardImage} />
                    {(completed) ? <Image id="closed-chevron1" src={SmallTick} onClick={() => {setOpen((prev) => !prev);((!open && !skip) && setStatus(3))}} /> :
                        <Image id="closed-chevron1" src={ClosedChevron} onClick={() => { setOpen((prev) => !prev); updateLearnModule(); ((!open && !skip) && setStatus(3) ) }} />
                    }
                    {favourite.includes(3) ? <Image id="closed-favIcon" src={favFilled} onClick={() => setFavourite(prev => prev.filter(item => item !== 3))} /> :
                        <Image id="closed-favIcon" src={Vector} onClick={() => setFavourite(prev => [...prev, 3])} />}
                    <span id="subcard-text"> {props.text ?? 'How to start your own compost'} </span>


                </>
            }
            {open && (status <= 3 || skip) &&
                <div id="expanded-wrapper1">
                    <Image id="expanded-card1" src={ExpandedCard} />
                    {completed ? <Image id="open-chevron1" src={SmallTick} onClick={() => setOpen((prev) => !prev)}/> :<Image
                        id="open-chevron1"
                        src={OpenChevron}
                        onClick={() => setOpen((prev) => !prev)}
                    />}
                    {favourite.includes(3) ? <Image id="open-favIcon" src={favFilled} onClick={() => setFavourite(prev => prev.filter(item => item !== 3))} /> :
                        <Image id="open-favIcon" src={Vector} onClick={() => setFavourite(prev => [...prev, 3])} />}

                    <div id="expanded-header0">
                        {props.text ?? 'How to start your own compost'}
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
                            <SubBookmark id='3' heading="Your 5-step guide to start composting and help fight climate change : Life Kit : NPR" link="https://www.npr.org/2020/04/07/828918397/how-to-compost-at-home" image={CompositeImage2} />

                        </span>
                        <span>
                            <SubBookmark id='4' heading="Infographic: How to Compost | PBS.org" link="https://www.pbs.org/wnet/nature/blog/inside-nature-infographic-how-to-compost/" image={CompositeImage3} text="This infographic reviews the dos and donts of composting, where and how to compost, what to compost and what not to compost." />
                        </span>
                    </div>
                </div>
            }
        </div>
    )
}