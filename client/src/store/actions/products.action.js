import axios from "axios"
import * as actions from './index'


export const productsBySort = ({limit,order,sortBy,where})=>{

   return async(dispatch)=>{
    try{
        const products = await axios.get(`/api/products/all`,{
        params:{
            limit,
            order,
            sortBy,
        }
        });
         
        // dispatch(actions.productsBySold(products.data))
        // dispatch(actions.productsByDate(products.data))
        // console.log(products);
        switch(where){
            case 'bySold':
                dispatch(actions.productsBySold(products.data)) 
            break;

            case 'byDate':
            dispatch(actions.productsByDate(products.data))
            break;

            default:
                return false
        }
     }
     catch(error){
        dispatch(actions.errorGlobal(error.response.data.message))
     }
   }
   
}