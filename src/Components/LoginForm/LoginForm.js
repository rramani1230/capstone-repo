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
import SignInCard from '../../Images/SignInCard.svg';
import { useState } from "react";
import { FormGroup, Icon } from "@blueprintjs/core";


export default function LoginForm () {

    const [username, set_username, password, set_password] = useContext(LoginContext);
    const [show_password, set_show_password] = useState(false);

    const sign_in_user = async() => {


        await supabase.auth.signInWithPassword({
            email: username,
            password: password,
        }).then((event) => {
            console.log(event);
            if (event.data.user) {
                navigate('/application')
            }
        })
    }

    return (
        <>
            <Image id="login-card-image" src={SignInCard}/>

            <span id="sign-in-text"> Sign In </span>

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
                type={!show_password ? "text" : "password"}
                onChange={(event) => set_password(event.target.value)}
            />
            <div id="signup-lock-icon">
                {show_password &&
                    <Icon
                        id="signup-password-lock"
                        icon="lock"
                        onClick={() => {
                            set_show_password((prev) => !prev)
                        }}
                    />
                }

                {!show_password &&
                    <Icon
                        id="signup-password-lock"
                        icon="unlock"
                        onClick={() => {
                            set_show_password((prev) => !prev)
                        }}
                    />
                }
            </div>

            {/* <Button 
                id="login-screen-button"
                onClick={sign_in_user}
            >
                <Image id="loginscreen-button" src={LoginButton}/>
            </Button> */}

        </>
    )
}