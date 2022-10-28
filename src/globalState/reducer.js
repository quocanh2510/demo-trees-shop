import { ADD_PRODUCT_CART, DELETE_PRODUCT_CART } from './constants';

const dataStorage = JSON.parse(localStorage.getItem('products'));

export const initState = {
    cartProducts: dataStorage ?? [],
};

const reducer = (state, action) => {
    switch (action.type) {
        case ADD_PRODUCT_CART:
            localStorage.setItem('products', JSON.stringify([...state.cartProducts, action.payload]));
            return {
                cartProducts: [...state.cartProducts, action.payload],
            };
        case DELETE_PRODUCT_CART:
            const newCartProducts = state.cartProducts.filter((product, index) => index !== action.payload);
            localStorage.setItem('products', JSON.stringify(newCartProducts));
            return {
                cartProducts: newCartProducts,
            };
        default:
            throw new Error('Invalid action');
    }
};

export default reducer;
