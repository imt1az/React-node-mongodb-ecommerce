import { GET_PRODUCT_BY_DATE, GET_PRODUCT_BY_SOLD, GET_PROD_PAGINATE, PRODUCT_ADD, PROD_BY_ID, REMOVE_PRODUCT } from "store/types"




export default function productsReducer(state={},action){
    switch(action.type){
        case GET_PRODUCT_BY_SOLD:
            return {...state, bySold:action.payload}
        case GET_PRODUCT_BY_DATE:
            return {...state,byDate:action.payload}    
        case GET_PROD_PAGINATE:
            return {...state,byPaginate:action.payload}  
        case PRODUCT_ADD:
            return {...state,lastAdded:action.payload}
        case PROD_BY_ID:
            return{
                ...state,byId:action.payload
            }        
        default:
            return state
    }
}