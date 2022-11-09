import {
  AUTH_USER,
  CLEAR_NOTIFICATIONS,
  ERROR_GLOBAL,
  GET_PRODUCT_BY_DATE,
  GET_PRODUCT_BY_SOLD,
  GET_PROD_PAGINATE,
  REMOVE_PRODUCT,
  SIGN_OUT,
  SUCCESS_GLOBAL,
  UPDATE_USER_PROFILE,
  USER_CHANGE_EMAIL,
} from "../types";

///  USER

export const userAuthenticate = (user) => ({
  type: AUTH_USER,
  payload: user,
});

export const userUpdate = (userData) => ({
  type: UPDATE_USER_PROFILE,
  payload: userData,
});

export const userChangeEmail = (data) => ({
  type: USER_CHANGE_EMAIL,
  payload: data,
});

export const userSignOut = () => ({
  type: SIGN_OUT,
});

// Products
export const productsBySold = (data) => ({
  type: GET_PRODUCT_BY_SOLD,
  payload: data,
});
export const productsByDate = (data) => ({
  type: GET_PRODUCT_BY_DATE,
  payload: data,
});

export const productsByPaginate = (products)=>({
  type:GET_PROD_PAGINATE,
  payload:products
})

export const productRemove = ()=>({
  type:REMOVE_PRODUCT

})



// Notifications
export const errorGlobal = (msg) => ({
  type: ERROR_GLOBAL,
  payload: msg,
});
export const successGlobal = (msg) => ({
  type: SUCCESS_GLOBAL,
  payload: msg,
});

export const clearNotifications = () => {
  return (dispatch) => {
    dispatch({
      type: CLEAR_NOTIFICATIONS,
    });
  };
};
