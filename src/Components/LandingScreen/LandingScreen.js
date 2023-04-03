import React from "react";
import './LandingScreen.css';
import LandingTopBar from "../LandingTopBar/LandingTopBar";
import LandingMainBar from "../LandingMainBar/LandingMainBar";

<<<<<<< HEAD:src/Components/LandingScreen/LandingScreen.js
export default function LandingScreen () {
=======
//import the supabase client
import supabase from "../../Config/supabaseClient";

export default function Landing() {

    //log the supbase client to the console
    console.log(supabase);

>>>>>>> d50f4d2fe175a69fcadaf50a9d4123c7bddb7cd4:src/Components/Landing/Landing.js
    return (
        <div id="grid-container">
            <LandingTopBar id="landing-top-bar" />
            <LandingMainBar id="landing-main-bar" />
        </div>
    );
}