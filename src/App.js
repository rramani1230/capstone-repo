import React from 'react';
import LandingScreen from './Components/LandingScreen/LandingScreen';
import './index.css'
import SignUpForm from './Components/SignUp/SignUpForm';
import LoginScreen from './Components/Login/LoginScreen';

import { useRoutes } from 'hookrouter';

function App() {

    console.log("In the App component");

    const routes = {
        "/capstone-repo": () => <LandingScreen />, //when we have home in the URL that is default, we will call the LandingScreen component
        "/signup": () => { //when we have /signup in the web URL, we will call whatever is in the arrow function 
            return (
                <SignUpForm />
            )
        },

        "/login": () => <LoginScreen /> //when we have /login in the web URL, we will call the LoginScreen component
        
    }
    
    //we pass the routes to useRouter() hook from to register the routes with their corresponding component.
    const routeResult = useRoutes(routes);

    return (
        routeResult
    );
}

export default App;