import React from "react";
import { Image } from "react-bootstrap";
import './LoginForm.css';
import { InputGroup } from "@blueprintjs/core";
import { LoginContext } from "../LoginScreen/LoginScreen";
import { useContext } from "react";
import { navigate } from "hookrouter";
import SignInCard from '../../Images/SignInCard.svg';
import { useState } from "react";
import { Icon } from "@blueprintjs/core";


export default function LoginForm () {

    // const navigate = useNavigate();

    const [username, set_username, password, set_password] = useContext(LoginContext);
    const [show_password, set_show_password] = useState(false);

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