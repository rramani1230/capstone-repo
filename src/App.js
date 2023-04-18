import React from 'react';
import LandingScreen from './Components/LandingScreen/LandingScreen';
import './index.css'
import SignUpScreen from './Components/SignUpScreen/SignUpScreen';
import LoginScreen from './Components/LoginScreen/LoginScreen';
import WelcomeScreen from './Components/WelcomeScreen/WelcomeScreen';
import { useRoutes } from 'hookrouter';
import ConfirmEmailScreen from './Components/ConfirmEmailScreen/ConfirmEmailScreen';

function App() {

    console.log("In the App component");

    const routes = {
        "/capstone-repo": () => <LandingScreen />, //when we have home in the URL that is default, we will call the LandingScreen component
        "/confirm-email-screen": () => <ConfirmEmailScreen/>,
        "/signup": () => { //when we have /signup in the web URL, we will call whatever is in the arrow function 
            return (
                <SignUpScreen />
            )
        },
        

        "/login": () => <LoginScreen/>, //when we have /login in the web URL, we will call the LoginScreen component
        "/welcome-page": () => <WelcomeScreen/>,
        "/": () => <LandingScreen/>,
        
    }
    
    //we pass the routes to useRouter() hook from to register the routes with their corresponding component.
    const routeResult = useRoutes(routes);

    return (
        routeResult
    );
}

export default App;