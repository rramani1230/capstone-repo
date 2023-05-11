import React from "react";
import ApplicationTopBar from "../ApplicationTopBar/ApplicationTopBar";
import SurveyComponent from "../SurveyComponent/SurveyComponent";
import './ApplicationScreen.css'
import { createContext } from "react";
import { useState } from "react";
import LearnComponent from "../LearnComponent/LearnComponent";

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

            {survey_status <= 5 && 
            <MainBarContext.Provider value={[survey_status, set_survey_status]}>
                <div id="survey-screen">
                    <div id="survey-screen">
                        <SurveyComponent/>
                    </div>
                </div>
            </MainBarContext.Provider>
            }

            {survey_status > 5 &&
                <div id="learn-component">
                    <LearnComponent/>
                </div>
            }

        </>
    );
}