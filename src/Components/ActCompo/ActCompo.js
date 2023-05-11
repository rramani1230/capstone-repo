import React, { useState } from "react";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import { Image } from "react-bootstrap";
import './ActCompo.css'
import smallLeaf from '../../Images/smallLeaf.svg'
import verySmallleaf from '../../Images/verySmallleaf.svg'
import ActSubComponent from "../ActSubComponent/ActSubComponent";
import ActSubComponent1 from "../ActSubComponent/ActSubComponent1";
import ActSubComponent2 from "../ActSubComponent/ActSubComponent2";
import { useNavigate, useOutletContext } from "react-router-dom";
export default function ActCompo() {
    const [actPoints, setActPoints] = useOutletContext();
    const navigate = useNavigate();
    const paths = [
        { name: 'Act' },
        { name: 'Most recent modules' },
        { name: 'Composting' },

    ];
    return (
        <>
            <div id="compost-breadcrumbs">
                <Breadcrumbs paths={paths} />
            </div>
            {actPoints?.count === 4 &&
                <div className="act-topheader">
                    <div style={{ width: '1100px', padding: '15px', borderRadius: '5px', background: '#BDFFDF' }}>
                        <Image src={verySmallleaf} /><span style={{ paddingLeft: '10px', fontSize: '18px' }}>You’ve collected all leaves for this topic! <span style={{ fontWeight: 'bold', textDecoration: 'underline' }} className="act-track" onClick={() => navigate('/track')}>Go to the Track tab</span> to see how things are growing.</span>
                    </div>
                </div>
            }
            <div style={{ padding: '100px 60px', display: 'flex' }}>

                <div>
                    <span className="act-compos-heading">Actions for <span className="act-compos-sub-heading">Composting</span></span>
                </div>
                <div style={{ paddingLeft: '380px' }}>
                    <span style={{ fontSize: '32px' }}><span style={{ fontWeight: 'bold' }}>{4 - (actPoints?.count ?? 4)}</span> available, <span style={{ fontWeight: 'bold' }}>{actPoints?.count}</span> collected </span><Image src={smallLeaf} />
                </div>
            </div>
            <div style={{ paddingLeft: '60px' }}>
                {actPoints ?
                    <>
                        <ActSubComponent text='Download the composting guide for your kitchen' points={actPoints} setPoints={setActPoints} />
                        <ActSubComponent1 text='Try starting a home compost' points={actPoints} setPoints={setActPoints} />
                        <ActSubComponent2 text='Set a custom goal' points={actPoints} setPoints={setActPoints} />

                    </> : <></>
                }

            </div>
        </>
    )
}