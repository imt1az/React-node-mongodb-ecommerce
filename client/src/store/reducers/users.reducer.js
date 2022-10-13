import { AUTH_USER } from "store/types"



let DEFAULT_USER_STATE = {
    data:{
        _id:null,
        email:null,
        firstName:null,
        lastName:null,
        history:null,
        verified:null
    },
    auth:null,
    cart:[]
}

export default function usersReducer(state=DEFAULT_USER_STATE,action){
    switch(action.type){
        case AUTH_USER:
            return { ...state,
                data: { ...state.data, ...action.payload.data },
                auth: action.payload.auth
             }
        default:
            return state
    }
}