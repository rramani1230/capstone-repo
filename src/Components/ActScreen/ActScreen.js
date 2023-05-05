import React, { useState } from "react";
import LearnTopBar from "../LearnTopBar/LearnTopBar";
import './ActScreen.css'
import ActSubScreen from "./ActSubScreen";
import ActCompo from "../ActCompo/ActCompo";
import { useRoutes } from 'hookrouter';

export default function ActScreen() {
    
    const routes = {
        '/': () => <ActSubScreen/>,
        '/composite': () => <ActCompo/>
    };
    const routeResult = useRoutes(routes);
    console.log('Hello');
    return (
        <>
            <div id="compost-learn-topbar">
                <LearnTopBar current='Act' />
            </div>
            {routeResult}
        </>
    )
}