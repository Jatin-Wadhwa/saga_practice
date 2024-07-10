export interface user{
    id:number;
    name:string
}
interface mytypes{
    loading:boolean,
    data:user[] |null,
    error:boolean
}
const initialState:mytypes={
    loading:false,
    data:null,
    error:false
}

const userReducer=(state=initialState,action:any)=>{
    switch(action.type){
        case 'REQUESTED':
            return {
                ...state,
                loading: true,
                error: false // reset error state when a new request is made
            };
        case 'SUCCESS':
            return {
                loading: false,
                data: action.response,
                error: false
            };
        case 'FAILED':
            return {
                loading: false,
                data: null,
                error: true
            };
            default: 
            return state;
    }
}

export default userReducer;