import React from "react";
import SignedInTopBar from "../ApplicationTopBar/ApplicationTopBar";
import WelcomeMainBar from "../ApplicationMainBar/ApplicationMainBar";
import supabase from '../Config/dbconnection';
import './WelcomeScreen.css'

export default function WelcomeScreen () {

    async function checkUser () {
        await supabase.auth.getUser().then((user) => console.log(user));
    }

    checkUser();

    return (

        <>
            <div id="signed-in-topbar">
                <SignedInTopBar/>
            </div>

            <div id="welcome-screen">
                <WelcomeMainBar/>
            </div>
        </>
    )
}