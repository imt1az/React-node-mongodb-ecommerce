import { GET_PRODUCT_BY_DATE, GET_PRODUCT_BY_SOLD } from "store/types"




export default function productsReducer(state={},action){
    switch(action.type){
        case GET_PRODUCT_BY_SOLD:
            return {...state, bySold:action.payload}
        case GET_PRODUCT_BY_DATE:
            return {...state,byDate:action.payload}    
        default:
            return state
    }
}