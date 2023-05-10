import React, { useEffect } from "react";
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
import CompositeImage from '../../Images/CompositeImage.svg'
import SmallTick from '../../Images/SmallTick.svg'
import { useContext } from "react";
import { AccountContext } from "../../App";
import favFilled from '../../Images/favFilled.svg'
import SubBookmark from "../Bookmarks/Bookmark";
import supabase from "../Config/dbconnection";
export default function CompositeSubCard({ status, setStatus, skip, ...props }) {
    const { favourite: Favourite } = useContext(AccountContext)
    const [favourite, setFavourite] = Favourite
    const [open, setOpen] = useState(false);
    const [completed, setCompleted] = useState()
    const [user, setUser] = useState()

    if (!skip && status !== 1) {
        open && setOpen(false)
    }
    const updateLearnModule = async () => {
        if (user) {
            const { data, error } = await supabase.from('user_learn').select('user_id, learn_module_number').match({ user_id: user.id, learn_module_number: 1 })
            if (data.length === 0) {
                const { error } = await supabase
                    .from('user_learn')
                    .insert({ user_id: user.id, learn_module_number: 1 })
                console.log(error);
                setCompleted(true)
            }
            (!skip) && setStatus(1)

        }
    }
    useEffect(() => {
        (async () => {
            const { data: { user } } = await supabase.auth.getUser();
            setUser(user)
            if (user) {
                const { data: mydata, error } = await supabase.from('user_learn').select('user_id, learn_module_number').match({ user_id: user.id, learn_module_number: 1 })
                if (mydata && mydata?.length > 0) {
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
                    {(completed) ? <Image id="closed-chevron1" src={SmallTick} onClick={() => {setOpen((prev) => !prev);((!open && !skip) && setStatus(1))}} /> :
                        <Image id="closed-chevron1" src={ClosedChevron} onClick={() => { setOpen((prev) => !prev); updateLearnModule(); (!open && !skip) && setStatus(1) }} />
                    }
                    {favourite.includes(1) ? <Image id="closed-favIcon" src={favFilled} onClick={() => setFavourite(prev => prev.filter(item => item !== 1))} /> :
                        <Image id="closed-favIcon" src={Vector} onClick={() => setFavourite(prev => [...prev, 1])} />}
                    <span id="subcard-text"> {props.text ?? 'Overview'} </span>

                </>
            }
            {open && (status <= 1 || skip) &&
                <div id="expanded-wrapper1">
                    <Image id="expanded-card1" src={ExpandedCard} />
                    {completed ? <Image id="open-chevron1" src={SmallTick} onClick={() => setOpen((prev) => !prev)} /> : <Image
                        id="open-chevron1"
                        src={OpenChevron}
                        onClick={() => setOpen((prev) => !prev)}
                    />}
                    {favourite.includes(1) ? <Image id="open-favIcon" src={favFilled} onClick={() => setFavourite(prev => prev.filter(item => item !== 1))} /> :
                        <Image id="open-favIcon" src={Vector} onClick={() => setFavourite(prev => [...prev, 1])} />}
                    <div id="expanded-header0">
                        {props.text ?? 'Overview'}
                    </div>

                    <div className="text-container">
                        <div id="" className="text-detail" style={{paddingBottom:'5px',zIndex:'1'}}>
                            33% of the food produced for human consumption in the US is wasted. This uneaten food goes to landfill, which then releases methane, a potent greenhouse gas, into the atmosphere. Composting helps mitigate this amount.
                        </div>
                    </div>

                    <div className="text-container">
                        <div id="" className="text-detail text-heading"> What is compost?  </div>
                    </div>

                    <div className="text-container" style={{zIndex:'1'}}>
                        <span id="" className="text-detail"> Compost is created through a natural process in which organic material such as food waste and yard trimmings are assembled in the right ratios and allowed to decompose. The end product -- compost -- is a nutrient rich soil, or humus (pronounced HYOO-mus), that’s added to soil to improve its health.
                        </span>
                    </div>

                    <div className="text-container" style={{bottom:'458px'}}>
                        <span id="" className="text-detail text-heading text-continue"> Composting has many benefits. </span><span className="text-detail text-continue">It reduces waste sent to landfills, reduces greenhouse gas emissions, and enriches soil with nutrients as a cheaper alternative to commercial fertilizers.</span>
                    </div>
                    <div id="expanded-header1">
                        <Image src={bulb} />
                        <span>Additional Resources</span>
                    </div>
                    <SubBookmark id='1' heading="Mapping Urban Access to Composting Programs | GreenBlue" image={CompositeImage} text="To better understand residential access to composting programs in urban areas of the United States, GreenBlue has developed interactive maps and charts of municipally-run and privately-run composting programs, available on Tableau Public." />
                </div>
            }

        </div>
    )
}