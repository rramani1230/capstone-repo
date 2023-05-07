import React, { useContext } from 'react'
import BookmarkIcon from '../../Images/Bookmark.svg'
import BookmarkFilled from '../../Images/BookmarkFilled.svg'
import { Image } from 'react-bootstrap'
import { AccountContext } from '../../App'

function Bookmark({subPoint,setSubPoint,...props}) {
    const { bookmark: Bookmarks } = useContext(AccountContext)
    const [bookmark, setBookmark] = Bookmarks
    console.log(subPoint);
    const updatePoints = ()=>{
        if(subPoint !== undefined){
            if(subPoint.length < 2 && !subPoint.includes(props.id)){
                setSubPoint(prev => [...prev,props.id])
            }
        }
    }
    return (
        <>
            <div className="bookmark-container">
                <div style={{ padding: '7px' }}>
                    {bookmark.includes(props.id) ? <Image className="bookmark-icon" src={BookmarkFilled} onClick={() => setBookmark(prev => prev.filter(item => item !== props.id))} /> : <Image className="bookmark-icon" src={BookmarkIcon} onClick={() => setBookmark(prev => [...prev, props.id])} />}
                </div>
                {props.link ?
                    <a href={props.link} rel="noreferrer" target="_blank" style={{ color: 'green' }} onClick={updatePoints}>
                        {props.heading}
                    </a> :
                    <div style={{ textDecoration: 'underline' }} onClick={updatePoints}>
                        {props.heading}
                    </div>
                }

            </div>
            <div className="bookmark-detail">
                <div>
                    <Image src={props.image} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {props.text}
                </div>
            </div>
        </>
    )
}

export default Bookmark