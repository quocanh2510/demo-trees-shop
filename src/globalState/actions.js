import { ADD_PRODUCT_CART, DELETE_PRODUCT_CART } from './constants';

export const addProductCart = (payload) => {
    return {
        type: ADD_PRODUCT_CART,
        payload,
    };
};

export const deleteProductCart = (payload) => {
    return {
        type: DELETE_PRODUCT_CART,
        payload,
    };
};
