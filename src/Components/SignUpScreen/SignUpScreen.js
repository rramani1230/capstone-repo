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
//importing the supabase client
import supabase from '../Config/dbconnection';


//create a context object to pass data between SignUpScreen and SignUpForm
export const FilledInContext = createContext();


export default function SignUpScreen() {

    //filled_in is a boolean that is true if all fields are filled in
    const [filled_in, set_filled_in] = useState(false);

    //declare another state variable to store the form data for the user
    const [form_data, set_form_data] = useState({ first_name: '', last_name: '', email: '', username: '', password: '' });

    //create a function to insert the data into the database
    const saveToDB = async (e) => {
        console.log("Saving Sign up data to DB");
        console.log(filled_in)
        console.log(form_data)
        e.preventDefault(); //prevent the page from refreshing when the user clicks the submit button

        // //check if we actually have data in the state variables
        // console.log(email, age, interest);

        // if (!email || !age || !interest) {
        //     alert('Please enter all fields')
        //     return
        // }

        //convert the interest array into a format that can be inserted into the post gres database
        //setInterest(JSON.stringify(interest).replace('[', '{').replace(']', '}')) //check why this line is not working for proper formatting

        //make a call to the users table and insert the data into the table
        let { data: new_user, error } = await supabase //data now would be the new row that was inserted into the table if insert was successful

            .from('user_data')
            .insert([
                { first_name: form_data['first_name'], last_name: form_data['last_name'], email_address: form_data['email'], user_name: form_data['username'], password: form_data['password'] }
            ])

        //if there is an error, log it to the console
        if (error) console.log('error', error)
        else
            console.log("Data successfully saved to DB")
    }


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

            <div id="create-account" onClick={saveToDB}>
                <Button id="create-account-button">
                    {filled_in && <Image id="create-account-button-image" src={FilledCreateAccount} />}
                    {!filled_in && <Image id="create-account-button-image" src={NotFilledCreateAccount} />}
                    {/* {!filled_in && <h3 id="create-account-text-not-filled"> Create Account </h3>}
                    {filled_in && <h3 id="create-account-text-filled"> Create Account </h3>} */}
                </Button>
            </div>

            <div id="signup-forest">
                <Image id="signup-forest-image" src={SignUpForest} />
            </div>
        </>
    )
}
