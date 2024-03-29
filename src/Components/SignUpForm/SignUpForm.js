import React, { useContext, useState } from "react";
import BlankCard from '../../Images/BlankCard.svg';
import { Image } from "react-bootstrap";
import { InputGroup, FormGroup, Icon } from "@blueprintjs/core";

import './SignUpForm.css';
import { FilledInContext } from "../SignUpScreen/SignUpScreen";


export default function SignUpForm() {

    const [first_name, set_first_name] = useState("");
    const [last_name, set_last_name] = useState("");
    const [email, set_email] = useState("");
    const [confirm_email, set_confirm_email] = useState("");
    const [username, set_username] = useState("");
    const [password, set_password] = useState("");
    const [confirm_password, set_confirm_password] = useState("");
    const [show_password, set_show_password] = useState(true);
    const [show_confirm_password, set_show_confirm_password] = useState(true);


    //we use the useContext hook to access the values from the FilledInContext object
    const { form_data, set_form_data, filled_in, set_filled_in } = useContext(FilledInContext);

    function check_all_fields() {
        return (
            first_name !== "" &&
            last_name !== "" &&
            email !== "" &&
            confirm_email !== "" &&
            username !== "" &&
            password !== "" &&
            confirm_password !== ""
        )
    }

    return (
        <>
            <Image id="blank-card-image" src={BlankCard} />

            <div id="signup-form-group">
                <FormGroup>

                    <span id="first-name-text"> First Name </span>
                    <InputGroup
                        id="signup-form-first-name"
                        className="form-control form-control-warning"
                        placeholder="Type here..."
                        onChange={(event) => {
                            set_first_name(event.target.value);
                            set_filled_in(check_all_fields());
                            //pass the data to the SignUpScreen component using set_form_data method from the FilledInContext object
                            set_form_data({ ...form_data, first_name: event.target.value });
                            
                            console.log(filled_in)
                        }}
                    />

                    <span id="last-name-text"> Last Name </span>
                    <InputGroup
                        id="signup-form-last-name"
                        placeholder="Type here..."
                        onChange={(event) => {
                            set_last_name(event.target.value);
                            set_filled_in(check_all_fields())
                            //pass the data to the SignUpScreen component using set_form_data method from the FilledInContext object
                            set_form_data({ ...form_data, last_name: event.target.value });

                        }}
                    />

                    <span id="email-text"> Email </span>
                    <InputGroup
                        id="signup-form-email"
                        placeholder="Type here..."
                        onChange={(event) => {
                            set_email(event.target.value);
                            set_filled_in(check_all_fields())
                            //pass the data to the SignUpScreen component using set_form_data method from the FilledInContext object
                            set_form_data({ ...form_data, email: event.target.value });
                        }}
                    />

                    <span id="confirm-email-text"> Confirm Email </span>
                    <InputGroup
                        id="signup-form-confirm-email"
                        placeholder="Type here..."
                        onChange={(event) => {
                            set_confirm_email(event.target.value);
                            set_filled_in(check_all_fields())

                        }}
                    />

                    <span id="username-text"> Username </span>
                    <InputGroup
                        id="signup-form-username"
                        placeholder="Type here..."
                        onChange={(event) => {
                            set_username(event.target.value);
                            set_filled_in(check_all_fields())
                            //pass the data to the SignUpScreen component using set_form_data method from the FilledInContext object
                            set_form_data({ ...form_data, username: event.target.value });
                        }}
                    />

                    <span id="password-text"> Password </span>
                    <InputGroup
                        id="signup-form-password"
                        placeholder="Type here..."
                        onChange={(event) => {
                            set_password(event.target.value);
                            set_filled_in(check_all_fields())
                            //pass the data to the SignUpScreen component using set_form_data method from the FilledInContext object
                            set_form_data({ ...form_data, password: event.target.value });

                        }}
                        type={show_password ? "password" : "text"}
                    />

                    <span id="confirm-password-text"> Confirm Password </span>
                    <InputGroup
                        id="signup-form-confirm-password"
                        placeholder="Type here..."
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
                        />
                    }

                    {show_password &&
                        <Icon
                            id="password-lock-icon"
                            icon="lock"
                            onClick={() => {
                                set_show_password((prev) => !prev)
                            }}
                        />
                    }

                    {!show_confirm_password &&
                        <Icon
                            id="confirm-password-unlock-icon"
                            icon="unlock"
                            onClick={() => {
                                set_show_confirm_password((prev) => !prev)
                            }}
                        />
                    }

                    {show_confirm_password &&
                        <Icon
                            id="confirm-password-lock-icon"
                            icon="lock"
                            onClick={() => {
                                set_show_confirm_password((prev) => !prev)
                            }}
                        />
                    }
                </FormGroup>
            </div>
        </>
    );
}