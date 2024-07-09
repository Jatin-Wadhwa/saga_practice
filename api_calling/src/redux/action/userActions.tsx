export const fetchUserRequest=()=>({
    type:'REQUESTED',
})

export const fetchUserSuccess=(userData:any)=>({
    type:'SUCCESS',
    payload:userData.data
})

export const fetchUserFailure=(error:boolean)=>({
    type:'FAILED',
    payload:error
})