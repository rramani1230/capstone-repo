import React from "react";
import './Landing.css';
import LandingTopBar from "../LandingTopBar/LandingTopBar";
import LandingMainBar from "../LandingMainBar/LandingMainBar";

//import the supabase client
import supabase from "../../Config/supabaseClient";

export default function Landing() {

    //log the supbase client to the console
    console.log(supabase);

    return (
        <div id="grid-container">
            <LandingTopBar id="landing-top-bar" />
            <LandingMainBar id="landing-main-bar" />
        </div>
    );
}