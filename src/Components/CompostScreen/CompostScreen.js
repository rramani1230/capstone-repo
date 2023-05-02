import React from "react";
import './CompostScreen.css';
import ApplicationTopBar from "../ApplicationTopBar/ApplicationTopBar";
import LearnTopBar from "../LearnTopBar/LearnTopBar";
import SubCard from "../SubCard/SubCard";

export default function CompostScreen () {

    return (
        <>
            <div id="compost-learn-topbar">
                <LearnTopBar/>
            </div>

            <div id="compost-subcards">
                <SubCard text="Overview"/>
            </div>



        </>
    )
}