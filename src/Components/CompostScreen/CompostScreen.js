import React from "react";
import './CompostScreen.css';
import LearnTopBar from "../LearnTopBar/LearnTopBar";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import SubCard from "../CompositeSubCard/CompositeSubCard";
import SubCard1 from "../CompositeSubCard/CompositeSubCard1";
import SubCard2 from "../CompositeSubCard/CompositeSubCard2";
import FinishModule from '../../Images/FinishModule.svg'
import DisabledFinishButton from '../../Images/DisabledFinishButton.svg'
import { useState } from "react";
import { Button, Image } from "react-bootstrap";
import ModuleFinishedScreen from "../ModuleFinishedScreen/ModuleFinishedScreen";
export default function CompostScreen() {
    const [completed, setCompleted] = useState(0)
    const [moduleFinshed, setModuleFinshed] = useState(false)

    const paths = [
        { name: 'Learn' },
        { name: 'Compositing' },
        { name: 'Overview' },
        { name: 'What can be composted?' },
        { name: 'How to start your own compost' },
        { name: 'Wrap Up' }
    ];
    return moduleFinshed ? (<>
        <ModuleFinishedScreen paths={paths} />
    </>) : (
        <>
            <div id="compost-learn-topbar">
                <LearnTopBar current="Learn"/>
            </div>
            <div id="compost-breadcrumbs">
                <Breadcrumbs paths={paths.slice(0, completed + 2)} />
            </div>
            <span className="expandables">
                <div id="compost-subcards" >
                    <SubCard text="Overview" status={completed} setStatus={setCompleted} />
                    <SubCard1 text="What can be composted?" status={completed} setStatus={setCompleted} />
                    <SubCard2 text="How to start your own compost" status={completed} setStatus={setCompleted} />
                </div>
            </span>
            {completed < 4 && (completed === 3 ?
                <Button className='module-finish-button' onClick={() => { setCompleted(4); setModuleFinshed(true) }}>
                    <Image src={FinishModule} />
                </Button>
                : <Button className='module-disabled-finish-button'>
                    <Image src={DisabledFinishButton} />
                </Button>)}
        </>
    )
}