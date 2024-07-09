'use client'

import { useEffect } from "react"
import { useDispatch,useSelector } from "react-redux"
import { fetchUserRequest } from "@/redux/action/userActions"

const MainPage=()=>{
    const dispatch=useDispatch();
    const res=useSelector((state)=>state.user.data);
    const load=useSelector((state)=>state.user.loading);

    if(load){
        return <p>loading...</p>
    }


    useEffect(()=>{
        dispatch(fetchUserRequest());
    })
    return(
        <>
        <div>
            <h1>Details</h1>
            {res && res.map(details=>(
                <div key={details.id}>
                    <p>{details.id}</p>
                    <p>{details.name}</p>
                </div>
            ))}
        </div>

        </>
    );
}

export default MainPage;