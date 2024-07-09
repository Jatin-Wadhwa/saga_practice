
const initialState={
    loading:false,
    data:null,
    error:false
}

const userReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'REQUESTED':
            return{
                loading:true
            };
        case 'SUCCESS':
            return{
                loading:false,
                data:action.payload
            }
        case 'FAILED':
            return{
                error:true
            }
    }
}

export default userReducer;