import React, { useEffect, useState } from 'react'
import supabase from '../Config/dbconnection';
import Feed1 from '../../Images/Emoji.svg'
import Feed2 from '../../Images/Emoji1.svg'
import Feed3 from '../../Images/Emoji2.svg'
import Feed4 from '../../Images/Emoji3.svg'
import Feed5 from '../../Images/Emoji4.svg'
import { Image } from 'react-bootstrap';
export default function EmojiHistory({ current_user, emojiUpdated }) {
    const imageRelation = {
        '1': Feed1,
        '2': Feed2,
        '3': Feed3,
        '4': Feed4,
        '5': Feed5
    }
    const [history, setHistory] = useState()
    useEffect(() => {
        console.log('hello');
        (async () => {
            const { data, error } = await supabase.from('user_mood').select('id,user_id, date,mood_number').match({ user_id: current_user.id })
            data.sort((a, b) => new Date(b.date) - new Date(a.date));
            setHistory(data);
        })()
    }, [current_user, emojiUpdated])
    console.log(history);
    return history ? (
        <div className='emoji_history_container'>
            <div style={{ padding: '0 180px' }}>
                {history.map((data,idx) => (
                    <div key={data.id} style={{ paddingTop: '10px', display: 'flex' }}>
                        <span className='history_date'>{data.date}</span>
                        <div className={`${(idx+1) % 2 === 0 ? 'history_image_even':'history_image_odd'}`}>
                            <div className={`emoji_padding_${data.mood_number}`}>
                                <div className='emoji_container emoji_selected'>
                                    <div className="emoji_container_image">
                                        <Image src={imageRelation[data.mood_number]} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    ) : (<>Loading</>)
}
