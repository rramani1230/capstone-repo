// fetch users and render them on screen as example of how to read data from the database

import React, { useState, useEffect } from 'react';

//import the supabase client
import supabase from "../../Config/supabaseClient";


//Reading users data from the database table - dummy_user_data

export default function Users() {

    //log the supbase client to the console
    //console.log(supabase);

    //create a state variable to hold the users
    const [users, setUsers] = useState([]);

    //create a function to fetch the users from the database
    const fetchUsers = async () => {
        //make a call to the users table and get all the users
        let { data: users, error } = await supabase // This line uses object destructuring (https://www.javascripttutorial.net/es6/javascript-object-destructuring/) to 
            //extract the data property from the result of the previous line, and assign it to a 
            //variable named users. If there was an error during the request, the error variable will be assigned the error object.
            .from('dummy_user_data')
            .select('email')
        //if there is an error, log it to the console
        if (error) console.log('error', error)
        //if there are no errors, set the users state variable to the users returned from the database
        else setUsers(users)
        console.log(users)
    }

    //use the useEffect hook to call the fetchUsers function when the component mounts
    useEffect(() => {
        fetchUsers()
    }, [])

    //render the users on the screen
    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.user_id}>{user.email}</li>
                ))}
            </ul>
        </div>
    );
}



