//get data from form that user enters and insert it into the dummy_user_data table of the database
import react, { useState } from 'react';
import supabase from '../../Config/supabaseClient';
import Users from './Users';
import JSON from 'json5';

const Create = () => {

    //declaring state variables
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [interest, setInterest] = useState('');

    //create a function to insert the data into the database
    const createUser = async (e) => {
        e.preventDefault(); //prevent the page from refreshing when the user clicks the submit button

        //check if we actually have data in the state variables
        console.log(email, age, interest);

        if (!email || !age || !interest) {
            alert('Please enter all fields')
            return
        }

        //convert the interest array into a format that can be inserted into the post gres database
        setInterest(JSON.stringify(interest).replace('[', '{').replace(']', '}')) //check why this line is not working for proper formatting

        console.log(interest);
        //if data is present now insert it into the database
        //make a call to the users table and insert the data into the table

        let { data: new_user, error } = await supabase //data now would be the new row that was inserted into the table if insert was successful

            .from('dummy_user_data')
            .insert([
                { email: email, age: age, interest: interest }
            ])

        //if there is an error, log it to the console
        if (error) console.log('error', error)
        //if there are no errors, set the users state variable to the users returned from the database
        else
            //setUsers(new_user)
            console.log(new_user)
    }

    //create form where user can enter data for above variables. Only when user clicks submit button will the data be inserted into the database
    return (
        <div>
            <h1>Create User</h1>
            <form onSubmit={createUser}>
                <label>Email</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label>Age</label>
                <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
                <label>Interest</label>
                <input type="text" value={interest} onChange={(e) => setInterest(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );

}

export default Create
