import React, { useContext } from "react";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import BookmarkIcon from '../../Images/BookmarkIcon.svg'
import { Image } from "react-bootstrap";
import { AccountContext } from "../../App";
import SubBookmark from "../Bookmarks/Bookmark";
import CompositeImage from '../../Images/CompositeImage.svg'
import CompositeImage1 from '../../Images/CompositeImage1.svg'
import CompositeImage2 from '../../Images/CompositeImage2.svg'
import CompositeImage3 from '../../Images/CompositeImage3.svg'

export default function AccountBookmark() {
    const { bookmark: Bookmark } = useContext(AccountContext)
    const [bookmark, setBookmark] = Bookmark
    const paths = [
        { name: 'Account' },
        { name: 'Bookmark' },
    ];
    console.log(bookmark);
    return (
        <>
            <div id="compost-breadcrumbs">
                <Breadcrumbs paths={paths} />
            </div>
            <div style={{ padding: '100px' }}>
                <div>
                    <Image src={BookmarkIcon} />
                    <span className="my-text">Bookmark</span>
                </div>
                <div style={{ padding: '22px 0' }}>
                    View all your bookmarked resources here.
                </div>
                <div style={{ paddingTop: '440px', display: 'flex', flexWrap: 'wrap' }}>
                    {bookmark.includes('1') &&
                        <div style={{ paddingLeft: '10px', paddingTop: '10px' }}>
                            <SubBookmark id='1' heading="Mapping Urban Access to Composting Programs | GreenBlue" image={CompositeImage} text="To better understand residential access to composting programs in urban areas of the United States, GreenBlue has developed interactive maps and charts of municipally-run and privately-run composting programs, available on Tableau Public." />
                        </div>
                    }
                    {bookmark.includes('2') &&
                        <div style={{ paddingLeft: '10px', paddingTop: '10px' }}>

                            <SubBookmark id='2' heading="CalRecycle - What to Put in Compost, Recycling, and Trash (Opens as a PDF)" link="https://www2.calrecycle.ca.gov/Docs/Web/112236" image={CompositeImage1} />
                        </div>
                    }
                    {bookmark.includes('3') &&
                        <div style={{ paddingLeft: '10px', paddingTop: '10px' }}>

                            <SubBookmark id='3' heading="Your 5-step guide to start composting and help fight climate change : Life Kit : NPR" link="https://www.npr.org/2020/04/07/828918397/how-to-compost-at-home" image={CompositeImage2} />
                        </div>
                    }
                    {bookmark.includes('4') &&
                        <div style={{ paddingLeft: '10px', paddingTop: '10px' }}>

                            <SubBookmark id='4' heading="Infographic: How to Compost | PBS.org" link="https://www.pbs.org/wnet/nature/blog/inside-nature-infographic-how-to-compost/" image={CompositeImage3} text="This infographic reviews the dos and donts of composting, where and how to compost, what to compost and what not to compost." />
                        </div>
                    }
                </div>
            </div>
        </>
    )
}