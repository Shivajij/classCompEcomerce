import { ADD_TO_CART, REMOVE_TO_CART } from "./actionTypes/actionType"

export const addTocart = (product) => (dispatch) => {
    const CartItems = JSON.parse(localStorage.getItem("cartItem")) || [];
    const isThere = CartItems.some((item) => item.id === product.id);

    if (!isThere) {
        CartItems.push(product);
        localStorage.setItem("cartItem", JSON.stringify(CartItems));
        dispatch({ type: ADD_TO_CART, payload: product });
    } 
};


export const removeTocart = (id) => (dispatch) => {
    dispatch({ type: REMOVE_TO_CART, payload: id });
};

