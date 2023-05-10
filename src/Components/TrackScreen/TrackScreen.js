import React, { useContext, useEffect, useState } from "react";
import LearnTopBar from "../LearnTopBar/LearnTopBar";
import './TrackScreen.css'
import topleaf from '../../Images/topleaf.svg'
import bottomleaf from '../../Images/bottomleaf.svg'
import { Image } from "react-bootstrap";
import supabase from "../Config/dbconnection";
import Feed1 from '../../Images/Emoji.svg'
import Feed2 from '../../Images/Emoji1.svg'
import Feed3 from '../../Images/Emoji2.svg'
import Feed4 from '../../Images/Emoji3.svg'
import Feed5 from '../../Images/Emoji4.svg'
import bars from '../../Images/bars.svg'
import addgoal from '../../Images/addGoal2.svg'
import addEntry from '../../Images/addEntry.svg'
import SaveEntry from '../../Images/SaveEntry.svg'
import SaveGoal from '../../Images/SaveGoal.svg'
import Clock from '../../Images/Clock.svg'
import OpenChevron from '../../Images/OpenChevron.svg'
import History from '../../Images/History.svg'
import EmojiHistory from "./EmojiHistory";
import { AccountContext } from "../../App";
import TrackModule from "./TrackModule";
export default function TrackScreen() {
    const [points, setPoints] = useState(0)
    const [selectedEmoji, setSelectedEmoji] = useState(0)
    const [emojiUpdated, setEmojiUpdated] = useState(0)
    const [currentUser, setCurrentUser] = useState()
    const [toggle, setToggle] = useState(false)
    const [mytext, setMytext] = useState()
    const [mytext2, setMytext2] = useState()
    const [mytext3, setMytext3] = useState()
    const [newgoal, setNewgoal] = useState()
    const [newgoal2, setNewgoal2] = useState()
    const [customDate, setCustomDate] = useState([])
    const [goalDate, setGoalDate] = useState()

    console.log(customDate);
    useEffect(() => {
        (async () => {
            console.log('hello');
            const { data: { user } } = await supabase.auth.getUser()
            setCurrentUser(user);
            if (user) {
                const { data, error } = await supabase.from('user_act').select('user_id, act_module_number').match({ user_id: user?.id })
                var current_points = 0
                if (data?.length > 0) {
                    for (let i in data) {
                        if (data[i].act_module_number === 2) {
                            current_points += 2
                        } else {
                            current_points += 1
                        }
                    }
                }
                setPoints(current_points)
                const { data: goal, error: goal_error } = await supabase.from('user_custom_goals').select('user_id, goal,created_at').match({ user_id: user?.id })
                goal?.length > 0 && setMytext(goal[0]?.goal)
                goal?.length > 0 && setGoalDate(goal[0]?.created_at)
                const { data: mydate } = await supabase.from('user_custom_date').select('id,user_id, date,created_at').match({ user_id: user?.id })
                mydate?.length > 0 && setCustomDate([mydate[0]?.created_at, mydate[0]?.date])
            }
        })()

    }, [])
    console.log(currentUser);

    const updatedSelectedEmoji = async (num) => {
        setSelectedEmoji(num)
        const currentDate = new Date().toLocaleDateString();
        if (currentUser) {
            const { data, error } = await supabase.from('user_mood').select('id,user_id, date,mood_number').match({ user_id: currentUser.id, date: currentDate })
            error && console.log(error);
            var upsertObject = {}
            if (data.length > 0) {
                upsertObject = { id: data[0]?.id, user_id: currentUser?.id, mood_number: num, date: currentDate }
            }
            else {
                upsertObject = { user_id: currentUser?.id, mood_number: num, date: currentDate }
            }
            const { error: error2 } = await supabase
                .from('user_mood')
                .upsert({ ...upsertObject })
                .select()
            error2 && console.log(error2);
            setEmojiUpdated(prev => prev + 1)
        }
    }
    const calRemainDays = () => {
        let day1 = customDate[0]
        let day2 = customDate[1]
        const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
        const firstDate = new Date(day1);
        const secondDate = new Date(day2);
        const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
        return diffDays 
    }

    return (
        <>
            <div id="compost-learn-topbar">
                <LearnTopBar current='Track' />
            </div>
            <div className="track_heading">
                <div style={{ padding: '0 60px', display: 'flex', alignItems: 'center' }}>

                    <div className="track_heading_txt">
                        Let’s get tracking 🌱
                    </div>
                    <div style={{ marginLeft: '50px' }}>
                        <div style={{ paddingLeft: '25px', display: 'flex' }}>
                            {(() => {
                                const arr = [];
                                var total = points % 2 ? (points - 1) : points;
                                for (let i = 0; i < total / 2; i++) {
                                    arr.push(
                                        <div key={i} style={{ paddingLeft: '20px' }}>
                                            <Image src={topleaf} />
                                        </div>
                                    );
                                }
                                return arr;
                            })()}
                        </div>
                        <div className="track_progress">

                        </div>
                        <div style={{ paddingLeft: '10px', display: 'flex' }}>
                            {(() => {
                                const arr = [];
                                var total = points % 2 ? (points + 1) : points;
                                for (let i = 0; i < total / 2; i++) {
                                    arr.push(
                                        <div key={i} style={{ paddingLeft: '20px' }}>
                                            <Image src={bottomleaf} />
                                        </div>
                                    );
                                }
                                return arr;
                            })()}
                        </div>
                    </div>
                    <div style={{ marginLeft: '30px' }}>
                        <div className="track_heading_end_txt">
                            way to grow!
                        </div>
                        <div style={{ paddingTop: '10px', display: 'flex' }}>
                            <Image src={topleaf} />
                            <span className="track_heading_end_sub_txt"><span style={{ fontWeight: '700', paddingRight: '5px' }}>{points}</span> collected this month</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main_container">
                <div className="track_container_heading">
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            Today’s check-in
                        </div>
                        <div className="track_mood_heading">
                            How are you feeling about your sustainability today?
                        </div>
                        <div className={`emoji_list ${toggle ? 'opened_emoji_container' : ''}`}>
                            <div>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <div className={`emoji_container ${selectedEmoji === 1 ? 'emoji_selected' : ''}`} onClick={() => updatedSelectedEmoji(1)}>
                                        <div className="emoji_container_image">
                                            <Image src={Feed1} />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    not great
                                </div>

                            </div>
                            <div style={{ paddingLeft: '30px' }}>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>

                                    <div className={`emoji_container ${selectedEmoji === 2 ? 'emoji_selected' : ''}`} onClick={() => updatedSelectedEmoji(2)}>
                                        <div className="emoji_container_image">
                                            <Image src={Feed2} />
                                        </div>
                                    </div>
                                </div>


                            </div>
                            <div style={{ paddingLeft: '30px' }}>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>

                                    <div className={`emoji_container ${selectedEmoji === 3 ? 'emoji_selected' : ''}`} onClick={() => updatedSelectedEmoji(3)}>
                                        <div className="emoji_container_image">
                                            <Image src={Feed3} />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    so-so
                                </div>

                            </div>
                            <div style={{ paddingLeft: '30px' }}>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <div className={`emoji_container ${selectedEmoji === 4 ? 'emoji_selected' : ''}`} onClick={() => updatedSelectedEmoji(4)}>
                                        <div className="emoji_container_image">
                                            <Image src={Feed4} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ paddingLeft: '30px' }}>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <div className={`emoji_container ${selectedEmoji === 5 ? 'emoji_selected' : ''}`} onClick={() => updatedSelectedEmoji(5)}>
                                        <div className="emoji_container_image">
                                            <Image src={Feed5} />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    great!
                                </div>
                            </div>
                            <div className="track_history" onClick={() => setToggle(prev => !prev)}>
                                <Image src={History} />
                            </div>
                        </div>
                        {toggle &&
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <EmojiHistory current_user={currentUser} emojiUpdated={emojiUpdated} />
                            </div>
                        }
                    </div>
                </div>
                <div style={{ padding: '0 60px', display: 'flex' }}>
                    <div>
                        <div className="">
                            <Image src={bars} />
                            <span className="track_module1_heading">Actions in progress</span>
                        </div>
                        <div style={{ paddingTop: '10px' }}>
                            <div className="track_card">
                                <div className="heading_container">
                                    <div className="track_heading_icon">
                                        <Image src={OpenChevron} />
                                    </div>
                                    <div className="track_card_heading">
                                        Composting
                                    </div>
                                </div>
                                <div style={{ paddingTop: '10px' }}>
                                    <div className="track_goal_heading">
                                        Your custom goals
                                    </div>
                                    <div>
                                        Set on {new Date(goalDate).toLocaleDateString()}
                                    </div>
                                    <div className="track_textarea">
                                        <textarea value={mytext} onChange={(e) => setMytext(e.target.value)} id="w3review" name="w3review" rows="1" cols="65" placeholder="Text" style={{ resize: 'none' }}></textarea>
                                    </div>
                                    {newgoal &&
                                        <>
                                            {mytext2 ? <div>Set on {new Date().toLocaleDateString()}
                                            </div> : <div>Adding a new goal...
                                            </div>}
                                            <div className="track_textarea">
                                                <textarea value={mytext2} onChange={(e) => setMytext2(e.target.value)} id="w3review" name="w3review" rows="1" cols="65" placeholder="Text" style={{ resize: 'none' }}></textarea>
                                            </div>
                                        </>
                                    }
                                    {console.log(newgoal)}
                                    {newgoal ? <div className="track_goal_button">
                                        <Image src={SaveGoal} />
                                    </div> : <div className="track_goal_button">
                                        <Image src={addgoal} onClick={() => setNewgoal(true)} />
                                    </div>}
                                    <div className="track_heading2" style={{ paddingTop: '10px' }}>
                                        Your check-in entries
                                    </div>

                                    <div className="track_heading3" style={{ padding: '10px 0' }}>
                                        None yet!
                                    </div>
                                    <div style={{ display: 'flex' }}>
                                        <Image src={Clock} />
                                        <div className="track_clock_txt">
                                            <span style={{ fontWeight: 'bold', padding: '0 5px' }}> {calRemainDays()}</span> until your scheduled reminder
                                        </div>

                                    </div>
                                    {newgoal2 && <>{mytext3 ? <div>Set on {new Date().toLocaleDateString()}
                                    </div> : <div>Adding a manual entry...
                                    </div>}
                                        <div className="track_textarea">
                                            <textarea value={mytext3} onChange={(e) => setMytext3(e.target.value)} id="w3review" name="w3review" rows="1" cols="65" placeholder="Text" style={{ resize: 'none' }}></textarea>
                                        </div></>}
                                    {newgoal2 ? <div className="track_goal_button">
                                        <Image src={SaveEntry} />
                                    </div> : <div className="track_goal_button">
                                        <Image src={addEntry} onClick={() => setNewgoal2(true)} />
                                    </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ paddingLeft: '100px', paddingTop: '20px' }}>
                        <TrackModule currentUser={currentUser} selectedEmoji={selectedEmoji} />
                    </div>
                </div>

            </div>
        </>
    )
}