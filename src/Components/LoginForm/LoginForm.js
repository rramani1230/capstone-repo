import React from "react";
import EmptyCard from '../../Images/EmptyCard.svg';
import { Image } from "react-bootstrap";
import './LoginForm.css';
import { InputGroup } from "@blueprintjs/core";
import LoginButton from '../../Images/LoginButton.svg';
import { LoginContext } from "../LoginScreen/LoginScreen";
import { useContext } from "react";
import { Button } from "@blueprintjs/core";
import supabase from '../Config/dbconnection';
import { navigate } from "hookrouter";


export default function LoginForm () {

    const [username, set_username, password, set_password] = useContext(LoginContext);

    const sign_in_user = async() => {

        // console.log("This is the username", username);
        // console.log("This is the password", password);
        // let session = "";
        // let error = "";

        await supabase.auth.signInWithPassword({
            email: username,
            password: password,
        }).then((event) => {
            navigate('/welcome-page')
            // supabase.auth.getUser().then((user) => {
            //     console.log(user);
            // })
        })
    

    }

    return (
        <>
            <Image id="login-card-image" src={EmptyCard}/>

            <h1 id="sign-in-text"> Sign In </h1>
            <span id="sign-in-message"> with your username and password </span>

            <span id="username-text-login"> Email </span>

            <InputGroup
                id="login-username"
                placeholder="Text"
                onChange={(event) => set_username(event.target.value)}
            />

            <span id="password-text-login"> Password </span>
            <InputGroup
                id="login-password"
                placeholder="Text"
                onChange={(event) => set_password(event.target.value)}
            />

            <Button 
                id="login-screen-button"
                onClick={sign_in_user}
            >
                <Image id="loginscreen-button" src={LoginButton}/>
            </Button>

        </>
    )
}