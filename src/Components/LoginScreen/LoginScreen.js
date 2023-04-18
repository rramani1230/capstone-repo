import React from "react";
import LandingTopBar from "../LandingTopBar/LandingTopBar";
import LoginForm from "../LoginForm/LoginForm";
import './LoginScreen.css'; 
import { createContext, useState } from "react";

export const LoginContext = createContext();

export default function LoginScreen () {

    const [username, set_username] = useState("");
    const [password, set_password] = useState("");
    
    return (
        <>
            <div id="login-top-bar">
                <LandingTopBar/>
            </div>

            <LoginContext.Provider value={[username, set_username, password, set_password]}>
                <div id="login-form">
                    <LoginForm/>
                </div>
            </LoginContext.Provider>
        </>
    )
}