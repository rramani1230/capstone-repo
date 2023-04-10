import React, { useContext, useState } from "react";
import BlankCard from '../../Images/BlankCard.svg';
import { Image } from "react-bootstrap";
import { InputGroup, FormGroup, Icon } from "@blueprintjs/core";

import './SignUpForm.css';
import { FilledInContext } from "../SignUpScreen/SignUpScreen";


export default function SignUpForm () {

    const [first_name, set_first_name] = useState("");
    const [last_name, set_last_name] = useState("");
    const [email, set_email] = useState("");
    const [confirm_email, set_confirm_email] = useState("");
    const [username, set_username] = useState("");
    const [password, set_password] = useState("");
    const [confirm_password, set_confirm_password] = useState("");
    const [show_password, set_show_password] = useState(false);
    const [show_confirm_password, set_show_confirm_password] = useState(false);
    const [filled_in, set_filled_in] = useContext(FilledInContext);

    function check_all_fields () {
        return (
            first_name != "" && 
            last_name != "" && 
            email != "" && 
            confirm_email != "" &&
            username != "" && 
            password != "" && 
            confirm_password != ""
            )
    }

    return (
        <>
            <Image id="blank-card-image" src={BlankCard}/>

            <div id="signup-form-group">
                <FormGroup>

                    <span id="first-name-text"> First Name </span>
                    <InputGroup 
                        id="signup-form-first-name"
                        placeholder="Text"
                        onChange={(event) => {
                            console.log(event.target.value);
                            set_first_name(event.target.value);
                            set_filled_in(check_all_fields());

                        }}
                    />

                    <span id="last-name-text"> Last Name </span>
                    <InputGroup 
                        id="signup-form-last-name"
                        placeholder="Text"
                        onChange={(event) => {
                            set_last_name(event.target.value);
                            set_filled_in(check_all_fields())
                        }}
                    />

                    <span id="email-text"> Email </span>
                    <InputGroup 
                        id="signup-form-email"
                        placeholder="Text"
                        onChange={(event) => {
                            set_email(event.target.value);
                            set_filled_in(check_all_fields())
                        }}
                    />

                    <span id="confirm-email-text"> Confirm Email </span>
                    <InputGroup 
                        id="signup-form-confirm-email"
                        placeholder="Text"
                        onChange={(event) => {
                            set_confirm_email(event.target.value);
                            set_filled_in(check_all_fields())
                        }}
                    />

                    <span id="username-text"> Username </span>
                    <InputGroup 
                        id="signup-form-username"
                        placeholder="Text"
                        onChange={(event) => {
                            set_username(event.target.value);
                            set_filled_in(check_all_fields())
                        }}
                    />

                    <span id="password-text"> Password </span>
                    <InputGroup 
                        id="signup-form-password"
                        placeholder="Text"
                        onChange={(event) => {
                            set_password(event.target.value);
                            set_filled_in(check_all_fields())
                        }}
                        type={show_password ? "password" : "text"}
                    />

                    <span id="confirm-password-text"> Confirm Password </span>
                    <InputGroup 
                        id="signup-form-confirm-password"
                        placeholder="Text"
                        round={true}
                        onChange={(event) => {
                            set_confirm_password(event.target.value);
                            set_filled_in(check_all_fields())
                        }}
                        type={show_confirm_password ? "password" : "text"}
                        
                    />

                    {!show_password && 
                    <Icon 
                        id="password-unlock-icon"
                        icon="unlock"
                        onClick={() => {
                            set_show_password((prev) => !prev)
                        }}
                    />}

                    {show_password && 
                    <Icon 
                        id="password-lock-icon"
                        icon="lock"
                        onClick={() => {
                            set_show_password((prev) => !prev)
                        }}
                    />}

                    {!show_confirm_password && 
                    <Icon 
                        id="confirm-password-unlock-icon"
                        icon="unlock"
                        onClick={() => {
                            set_show_confirm_password((prev) => !prev)
                        }}
                    />}

                    {show_confirm_password && 
                    <Icon 
                        id="confirm-password-lock-icon"
                        icon="lock"
                        onClick={() => {
                            set_show_confirm_password((prev) => !prev)
                        }}
                    />}
                </FormGroup>
            </div>
        </>
    );
}