import { createStore,applyMiddleware,combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './sagas/rootsaga';
import userReducer from './reducer/apiReducer';
const rootReducer=combineReducers({
    user:userReducer
})

const bindMiddleware=(middleware:any)=>{
    return applyMiddleware(...middleware);
}
const sagaMiddleWare=createSagaMiddleware();

const store=createStore(
    rootReducer,bindMiddleware([sagaMiddleWare])

)

sagaMiddleWare.run(rootSaga);

export default store;