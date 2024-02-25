
import { ADD_TO_CART, REMOVE_TO_CART } from "../action/actionTypes/actionType";

const initialState = {
    cart: [],
    isLoading: false,
    isErr: null
};

export const Cartreducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_TO_CART:
            return {
                ...state,
                cart: payload
            };
        case REMOVE_TO_CART:
            console.log(payload,"check in reducer");
            return {
                ...state,
                cart: payload
            };
        default:
            return state;
    }
};
