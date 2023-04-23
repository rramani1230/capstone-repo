import React from 'react';
import LandingScreen from './Components/LandingScreen/LandingScreen';
import './index.css'
import SignUpScreen from './Components/SignUpScreen/SignUpScreen';
import LoginScreen from './Components/LoginScreen/LoginScreen';
// import WelcomeScreen from './Components/WelcomeScreen/WelcomeScreen';
import { useRoutes } from 'hookrouter';
import ConfirmEmailScreen from './Components/ConfirmEmailScreen/ConfirmEmailScreen';
import ApplicationScreen from './Components/ApplicationScreen/ApplicationScreen';
import { navigate } from 'hookrouter';
import ConfirmLandingScreen from './Components/ConfirmLandingScreen/ConfirmLandingScreen';

function App() {

    console.log("In the App component");
    console.log(window.location.href);

    if (window.location.href.includes("access_token")) {
        console.log("I guess we atleast went here");
        navigate("/confirm-landing-screen");
    } 
    //http://localhost:3000/#access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNjgyMDM5MjY2LCJzdWIiOiJjOTE0OWNlOS0yZmQyLTQ2ZDYtYTJiOS0zODAwYWY1MDJjN2YiLCJlbWFpbCI6InJyYW1hbmkxMjMwQGdtYWlsLmNvbSIsInBob25lIjoiIiwiYXBwX21ldGFkYXRhIjp7InByb3ZpZGVyIjoiZW1haWwiLCJwcm92aWRlcnMiOlsiZW1haWwiXX0sInVzZXJfbWV0YWRhdGEiOnt9LCJyb2xlIjoiYXV0aGVudGljYXRlZCIsImFhbCI6ImFhbDEiLCJhbXIiOlt7Im1ldGhvZCI6Im90cCIsInRpbWVzdGFtcCI6MTY4MjAzNTY2Nn1dLCJzZXNzaW9uX2lkIjoiYzk2NDViNDctNjg2OC00ZjFkLWJmYTItOWI4NjNiYzE0OTU5In0.hSXUXHnuJkQ9rHL_kpo78b_d7B-vHbBCBE1R91c6uZw&expires_in=3600&refresh_token=ZBaU1oYYPKMQy42fHwAFZA&token_type=bearer&type=signup

    const routes = {
        "/capstone-repo": () => <LandingScreen />, //when we have home in the URL that is default, we will call the LandingScreen component
        "/confirm-landing-screen": () => <ConfirmLandingScreen/>,
        "/confirm-email-screen": () => <ConfirmEmailScreen/>,
        "/signup": () => { //when we have /signup in the web URL, we will call whatever is in the arrow function 
            return (
                <SignUpScreen />
            )
        },
        "/application": () => <ApplicationScreen/>,
        "/login": () => <LoginScreen/>, //when we have /login in the web URL, we will call the LoginScreen component
        
        // "/welcome-page": () => <WelcomeScreen/>,
        "/": () => <LandingScreen/>,
        
        
    }
    
    //we pass the routes to useRouter() hook from to register the routes with their corresponding component.
    const routeResult = useRoutes(routes);

    return (
        routeResult
    );
}

export default App;