import React from "react";
import LearnTopBar from "../LearnTopBar/LearnTopBar";
import AccountBookmark from "./AccountBookmark";
import AccountFavourite from "./AccountFavourite";
import { useRoutes } from 'hookrouter';
import './Account.css'

export default function AccountScreen() {
    const routes = {
        '/favourite': () => <AccountFavourite/>,
        '/bookmark': () => <AccountBookmark/>
    };
    const routeResult = useRoutes(routes);

    return (
        <>
            <div id="compost-learn-topbar">
                <LearnTopBar />
            </div>
            {routeResult}
        </>
    )
}