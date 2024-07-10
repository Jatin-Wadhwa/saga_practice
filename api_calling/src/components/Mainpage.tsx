'use client'

import { useEffect } from "react"
import { useDispatch,useSelector } from "react-redux"
import { fetchUserRequest } from "@/redux/action/userActions"
import { RootState } from "@/redux/store"

const MainPage=()=>{
    const dispatch=useDispatch();
    const check=useSelector((state:RootState)=>state.user?.error);
    console.log(check);
    const res=useSelector((state:RootState)=>state.user?.data);
    const load=useSelector((state:RootState)=>state.user?.loading);

    useEffect(()=>{
        dispatch(fetchUserRequest());
    },[])

    if(load){
        return <p>loading...</p>
    }

    // useEffect(()=>{
    //     if(check){
    //         return <p>Error...</p>
    //     }
    // },[check])



    return(
        <>
        <div>
            <h1>Details</h1>
            {res && res.map((details)=>(
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