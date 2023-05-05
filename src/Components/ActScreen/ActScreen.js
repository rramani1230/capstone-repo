import React, { useState } from "react";
import LearnTopBar from "../LearnTopBar/LearnTopBar";
import './ActScreen.css'
import ActSubScreen from "./ActSubScreen";
import ActCompo from "../ActCompo/ActCompo";
import { useRoutes } from 'hookrouter';
import {Outlet} from 'react-router-dom'
export default function ActScreen() {
    
   
    console.log('Hello');
    return (
        <>
            <div id="compost-learn-topbar">
                <LearnTopBar current='Act' />
            </div>
            <Outlet/>
        </>
    )
}