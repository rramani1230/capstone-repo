import React from "react";
import LearnTopBar from "../LearnTopBar/LearnTopBar";
import './Account.css'
import {Outlet} from 'react-router-dom'
export default function AccountScreen() {

    return (
        <>
            <div id="compost-learn-topbar">
                <LearnTopBar />
            </div>
            <Outlet/>
        </>
    )
}