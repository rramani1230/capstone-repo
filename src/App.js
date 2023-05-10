import React, { createContext, useState } from 'react';
import LandingScreen from './Components/LandingScreen/LandingScreen';
import './index.css'
import SignUpScreen from './Components/SignUpScreen/SignUpScreen';
import LoginScreen from './Components/LoginScreen/LoginScreen';
import ApplicationScreen from './Components/ApplicationScreen/ApplicationScreen';
import ConfirmLandingScreen from './Components/ConfirmLandingScreen/ConfirmLandingScreen';
import CompostScreen from './Components/CompostScreen/CompostScreen';
import AccountScreen from './Components/AccountScreen/AccountScreen';
import ActScreen from './Components/ActScreen/ActScreen';
import AccountFavourite from './Components/AccountScreen/AccountFavourite';
import AccountBookmark from './Components/AccountScreen/AccountBookmark';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import ActSubScreen from './Components/ActScreen/ActSubScreen';
import ActCompo from './Components/ActCompo/ActCompo';
import TrackScreen from './Components/TrackScreen/TrackScreen';
import ConfirmEmailScreen from './Components/ConfirmEmailScreen/ConfirmEmailScreen';
export const AccountContext = createContext();

function App() {
    const [favourite, setFavourite] = useState([])
    const [bookmark, setBookmark] = useState([])

    console.log("In the App component");
    console.log(window.location.href);

    if (window.location.href.includes("access_token")) {
        console.log("I guess we atleast went here", window.local.href);
        return <ConfirmLandingScreen />
    }


    //we pass the routes to useRouter() hook from to register the routes with their corresponding component.
    // const routeResult = useRoutes(routes);

    return (
        <BrowserRouter>
            <AccountContext.Provider value={{ favourite: [favourite, setFavourite], bookmark: [bookmark, setBookmark] }}>
                <Routes>
                    <Route exact path="/" element={<LandingScreen />} />
                    <Route exact path="/capstone-repo" element={<LandingScreen />} />
                    <Route exact path="/confirm-landing-screen" element={<ConfirmLandingScreen />} />
                    <Route exact path="/confirm-email-screen" element={<ConfirmEmailScreen/>} />
                    <Route exact path="/signup" element={<SignUpScreen />} />
                    <Route exact path="/application" element={<ApplicationScreen />} />
                    <Route exact path="/login" element={<LoginScreen />} />
                    <Route exact path="/compost" element={<CompostScreen />} />
                    <Route exact path="/account" element={<AccountScreen />}>
                        <Route path='favourite' element={<AccountFavourite />} />
                        <Route path='bookmark' element={<AccountBookmark />} />
                    </Route>
                    <Route exact path="/act" element={<ActScreen />}>
                        <Route index element={<ActSubScreen />} />
                        <Route path='composite' element={<ActCompo />} />
                    </Route>
                    <Route exact path="/track" element={<TrackScreen />}/>

                </Routes>
            </AccountContext.Provider>
        </BrowserRouter>

    );
}

export default App;