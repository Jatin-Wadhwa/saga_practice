import { call,put,takeEvery } from "redux-saga/effects";
import axios, {AxiosResponse} from "axios";
import {fetchUserSuccess,fetchUserFailure } from "../action/userActions";


function* fetchUser(){
    try{
        const response:AxiosResponse<any>= yield call(axios.get('https://jsonplaceholder.typicode.com/users'));
        console.log('response');
        yield put(fetchUserSuccess(response))
    }
    catch(error:any){
        yield put(fetchUserFailure(error.message))
        console.log(error.message);
    }
}

function* userSaga(){
    yield takeEvery('REQUESTED',fetchUser);
}

export default userSaga;