import React, { createContext } from 'react';
import { Button } from 'react-bootstrap';
import LandingTopBar from '../LandingTopBar/LandingTopBar';
import SignUpForm from '../SignUpForm/SignUpForm';
import './SignUpScreen.css';
import { useState } from 'react';
import SignUpForest from '../../Images/SignUpForest.svg';
import { Image } from "react-bootstrap";
import CreateAccountButton from "../../Images/CreateAccountButton.svg";
import FilledCreateAccount from '../../Images/FilledCreateAccount.svg';
import NotFilledCreateAccount from '../../Images/NotFilledCreateAccount.svg';



export const FilledInContext = createContext();

export default function SignUpScreen() {

    const [filled_in, set_filled_in] = useState(false);
    

    return (
        <>
            <div id="signup-top-bar">
                <LandingTopBar/>
            </div>

            <FilledInContext.Provider value={[filled_in, set_filled_in]}>
                <div id="signup-form">
                    <SignUpForm/>
                </div>
            </FilledInContext.Provider>

            <div id="create-account">
                <Button id="create-account-button">
                    {filled_in && <Image id="create-account-button-image" src={FilledCreateAccount}/>}
                    {!filled_in && <Image id="create-account-button-image" src={NotFilledCreateAccount}/>}
                    {/* {!filled_in && <h3 id="create-account-text-not-filled"> Create Account </h3>}
                    {filled_in && <h3 id="create-account-text-filled"> Create Account </h3>} */}
                </Button>
            </div>

            <div id="signup-forest">
                <Image id="signup-forest-image" src={SignUpForest}/>
            </div>
        </>
    )
}
