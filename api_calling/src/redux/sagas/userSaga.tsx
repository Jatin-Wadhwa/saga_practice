import { call,put,takeEvery } from "redux-saga/effects";
import axios from "axios";
import { fetchUserRequest,fetchUserSuccess,fetchUserFailure } from "../action/userActions";

function* fetchUser(){
    try{
        const response= yield call(axios.get('https://jsonplaceholder.typicode.com/users'));

        yield put(fetchUserSuccess(response.data))
    }
    catch(error){
        yield put(fetchUserFailure(error.message))
    }
}

function* userSaga(){
    yield takeEvery('REQUESTED',fetchUser);
}

export default userSaga;