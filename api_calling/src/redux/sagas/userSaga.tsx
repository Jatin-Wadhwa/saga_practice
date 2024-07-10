import { call,put,takeEvery } from "redux-saga/effects";
import axios, {AxiosResponse} from "axios";
import {fetchUserSuccess,fetchUserFailure } from "../action/userActions";


function userfetch(){
    return fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json())
}

function* fetchUser(){
    try{
        const response= yield call(userfetch);
        console.log(response);
        yield put({type:'SUCCESS',response});
    }
    catch(error:any){
        yield put({type:'FAILED',payload:error.message})
        console.log(error.message);
    }
}

function* userSaga(){
    yield takeEvery('REQUESTED',fetchUser);
}

export default userSaga;