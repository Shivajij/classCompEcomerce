import { ADD_TO_CART, REMOVE_TO_CART } from "../action/actionTypes/actionType";

const initialState = {
    cart: JSON.parse(localStorage.getItem("cartItem")) || [], // Load initial cart from localStorage
    isLoading: false,
    isErr: null
};

export const Cartreducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_TO_CART:
            // Add the new item to cart
            const updatedCartAdd = [...state.cart, payload];
            // Update localStorage with updated cart
            localStorage.setItem("cartItem", JSON.stringify(updatedCartAdd));
            return {
                ...state,
                cart: updatedCartAdd
            };
        case REMOVE_TO_CART:
            const updatedCartRemove = state.cart.filter(item => item.id !== payload);
            localStorage.setItem("cartItem", JSON.stringify(updatedCartRemove));
            return {
                ...state,
                cart: updatedCartRemove
            };
        default:
            return state;
    }
};
