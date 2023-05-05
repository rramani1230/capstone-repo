import React from "react";
import LandingTopBar from "../LandingTopBar/LandingTopBar";
import LoginForm from "../LoginForm/LoginForm";
import './LoginScreen.css'; 
import { createContext, useState } from "react";
import LoginButton from '../../Images/LoginButton.svg';
import { Image } from "react-bootstrap";
import { Button } from "@blueprintjs/core";
import supabase from '../Config/dbconnection';
import { useNavigate } from "react-router-dom";
// import { navigate } from "hookrouter";

export const LoginContext = createContext();


export default function LoginScreen () {

    const [username, set_username] = useState("");
    const [password, set_password] = useState("");
    const navigate = useNavigate();

    const sign_in_user = async() => {

        console.log("fdsalkjfhasdkjl")

        await supabase.auth.signInWithPassword({
            email: username,
            password: password,
        }).then((event) => {
            console.log(event);
            if (event.data.user) {
                navigate('/application');
            }
        })
    }
    
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

            <Button 
                id="to-login-button"
                onClick={sign_in_user}
            >
                <Image id="login-button-image" src={LoginButton}/>
            </Button>
        </>
    )
}