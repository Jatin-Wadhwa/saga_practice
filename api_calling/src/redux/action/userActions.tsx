export const fetchUserRequest=()=>({
    type:'REQUESTED',
})

export const fetchUserSuccess=(userData)=>({
    type:'SUCCESS',
    payload:userData
})

export const fetchUserFailure=(error:boolean)=>({
    type:'FAILED',
    payload:error
})