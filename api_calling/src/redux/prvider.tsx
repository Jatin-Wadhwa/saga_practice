'use client'
import { Provider } from "react-redux"
import store from "./store"
import { ReactNode } from "react"

interface prviderprops{
    children:ReactNode;
}

const Prvider: React.FC<prviderprops>=({children})=>{
    return <Provider store={store}>{children}</Provider>
};

export default Prvider;