import React, { createContext } from 'react';
import { Button } from 'react-bootstrap';
import LandingTopBar from '../LandingTopBar/LandingTopBar';
import SignUpForm from '../SignUpForm/SignUpForm';
import './SignUpScreen.css';
import { useState } from 'react';
import SignUpForest from '../../Images/SignUpForest.svg';
import { Image } from "react-bootstrap";
import FilledCreateAccount from '../../Images/FilledCreateAccount.svg';
import NotFilledCreateAccount from '../../Images/NotFilledCreateAccount.svg';
//importing the supabase client
import supabase from '../Config/dbconnection';
import { useNavigate } from "react-router-dom";



//create a context object to pass data between SignUpScreen and SignUpForm
export const FilledInContext = createContext();


export default function SignUpScreen() {

    const navigate = useNavigate();

    //filled_in is a boolean that is true if all fields are filled in
    const [filled_in, set_filled_in] = useState(false);

    //declare another state variable to store the form data for the user
    const [form_data, set_form_data] = useState({ first_name: '', last_name: '', email: '', username: '', password: '' });

    const authorize_user = async(e) => {

        console.log(form_data);
        let proceed = true;

        await supabase.from('user_data').select('email_address').eq('email_address', form_data.email).then((item) => {
            if (item.data.length > 0) {
                proceed = false;
            }
        }).then(() => navigate("/confirm-email-screen"));

        
        if (proceed) {
            let { data, error} = await supabase.auth.signUp(
                {
                    email: form_data.email,
                    password: form_data.password,
                    options: {
                        data: {
                            name: form_data.first_name,userName: form_data.username
                        }
                      }
                }
            );

            if (error) {
                console.log("This is the error", error)
            } else {
                console.log("We succeeded: ", data);
            }

            let { user_data, user_error } = await supabase.from('user_data').insert([{ 
                first_name: form_data['first_name'],
                last_name: form_data['last_name'],
                email_address: form_data['email'],
                user_name: form_data['username'],
                password: form_data['password'] 
            }])

            if (user_error) {
                console.log("There's an error in pushing to DB");
            } else {
                console.log("User data has been pushed", user_data);
            }
        }
    };
        
    


    //combine form_data and filled_in into an object to pass to the FilledInContext object
    const form_details = { form_data, set_form_data, filled_in, set_filled_in }

    return (
        <>
            <div id="signup-top-bar">
                <LandingTopBar />
            </div>

            <FilledInContext.Provider value={form_details}>
                <div id="signup-form">
                    <SignUpForm />
                </div>
            </FilledInContext.Provider>

            <div id="create-account">
                {filled_in && 

                <Button id="create-account-button" onClick={ () => {
                    // authorize_user().then(() => navigate("/confirm-email-screen"));
                    authorize_user();
                }}>
                    <Image id="create-account-button-image" src={FilledCreateAccount} />
                </Button>
                }

                {!filled_in &&
                    <Button id="create-account-button">
                        <Image id="create-account-button-image" src={NotFilledCreateAccount} />
                    </Button>
                }
            </div>

            <div id="signup-forest">
                <Image id="signup-forest-image" src={SignUpForest} />
            </div>

        </>
    )
}
