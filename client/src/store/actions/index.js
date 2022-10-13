
import { AUTH_USER, CLEAR_NOTIFICATIONS, ERROR_GLOBAL, GET_PRODUCT_BY_DATE, GET_PRODUCT_BY_SOLD, SUCCESS_GLOBAL } from '../types'


///  USER

export const userAuthenticate = (user) => ({
    type:AUTH_USER,
    payload: user
});
// Products
export const productsBySold = (data)=>({
    type:GET_PRODUCT_BY_SOLD,
    payload:data
})
export const productsByDate = (data)=>({
    type:GET_PRODUCT_BY_DATE,
    payload:data
})

// Notifications
export const errorGlobal = (msg)=>({
    type: ERROR_GLOBAL,
    payload:msg
})
export const successGlobal = (msg)=>({
    type:SUCCESS_GLOBAL,
    payload:msg
})

export const clearNotifications = () => {
    return (dispatch) => {
        dispatch({
            type:CLEAR_NOTIFICATIONS
        })
    }
}