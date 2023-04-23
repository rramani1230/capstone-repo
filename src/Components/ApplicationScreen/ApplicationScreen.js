import React from "react";
import ApplicationTopBar from "../ApplicationTopBar/ApplicationTopBar";
import ApplicationMainBar from "../ApplicationMainBar/ApplicationMainBar";
import './ApplicationScreen.css'
import { createContext } from "react";
import { useState } from "react";

export const TopBarContext = createContext();
export const MainBarContext = createContext();

export default function ApplicationScreen () {

    const [current_tab, set_current_tab] = useState("Learn")
    const [survey_status, set_survey_status] = useState(0);

    return (
        <>
            <TopBarContext.Provider value={[current_tab, set_current_tab]}>
                <div id="signed-in-topbar">
                    <ApplicationTopBar/>
                </div>
            </TopBarContext.Provider>  

            <MainBarContext.Provider value={[survey_status, set_survey_status]}>
                <div id="survey-screen">
                    <div id="survey-screen">
                        <ApplicationMainBar/>
                    </div>
                </div>
            </MainBarContext.Provider>
        </>
    );
}