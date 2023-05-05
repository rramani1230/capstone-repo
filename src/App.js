import React from 'react';
import LandingScreen from './Components/LandingScreen/LandingScreen';
import './index.css'
import SignUpScreen from './Components/SignUpScreen/SignUpScreen';
import LoginScreen from './Components/LoginScreen/LoginScreen';
import ApplicationScreen from './Components/ApplicationScreen/ApplicationScreen';
import ConfirmLandingScreen from './Components/ConfirmLandingScreen/ConfirmLandingScreen';
import CompostScreen from './Components/CompostScreen/CompostScreen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {



    console.log("In the App component");
    console.log(window.location.href);

    if (window.location.href.includes("access_token")) {
        console.log("I guess we atleast went here");
        return <ConfirmLandingScreen/>
    }

    
    //we pass the routes to useRouter() hook from to register the routes with their corresponding component.
    // const routeResult = useRoutes(routes);

    return (

        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<LandingScreen/>}/>
                <Route exact path="/capstone-repo" element={<LandingScreen/>}/>
                <Route exact path="/confirm-landing-screen" element={<ConfirmLandingScreen/>}/>
                <Route exact path="/signup" element={<SignUpScreen/>}/>
                <Route exact path="/application" element={<ApplicationScreen/>}/>
                <Route exact path="/login" element={<LoginScreen/>}/>
                <Route exact path="/compost" element={<CompostScreen/>}/>
            </Routes>
        </BrowserRouter>

    );
}

export default App;