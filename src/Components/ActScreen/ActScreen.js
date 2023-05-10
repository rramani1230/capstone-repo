import React, { useEffect, useState } from "react";
import LearnTopBar from "../LearnTopBar/LearnTopBar";
import './ActScreen.css'
import ActSubScreen from "./ActSubScreen";
import ActCompo from "../ActCompo/ActCompo";
import { useRoutes } from 'hookrouter';
import { Outlet } from 'react-router-dom'
import supabase from "../Config/dbconnection";
export default function ActScreen() {
    const [actPoints, setActPoints] = useState({})
    useEffect(() => {
        (async () => {
            const { data: { user } } = await supabase.auth.getUser()
            if(user){
                const { data, error } = await supabase.from('user_act').select('user_id, act_module_number').match({ user_id: user.id})
                var current_points = 0
                var actList = []
                if (data?.length > 0) {
                    for (let i in data) {
                        if (data[i].act_module_number === 2) {
                            current_points += 2
                        } else {
                            current_points += 1
                        }
                        actList.push(data[i].act_module_number)
                    }
                }
                setActPoints(prev=>({...prev,list:actList}))
                setActPoints(prev=>({...prev,count:current_points}))
            }

        })()


    }, [])


    console.log('Hello');
    return (
        <>
            <div id="compost-learn-topbar">
                <LearnTopBar current='Act' />
            </div>
            <Outlet context={[actPoints, setActPoints]}/>
        </>
    )
}