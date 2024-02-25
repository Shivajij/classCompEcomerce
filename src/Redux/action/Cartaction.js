import { ADD_TO_CART, REMOVE_TO_CART } from "./actionTypes/actionType"

export const addTocart = (product) => (dispatch, getState) => {
    console.log(getState(),"check in action");
    const { cart } = getState().cart;
    
    // Check if the product is already in the cart
    const isProductInCart = cart.some((item) => item.id === product.id);

    if (!isProductInCart) {
        const updatedCart = [...cart, product];
        dispatch({ type: ADD_TO_CART, payload: updatedCart });
        // saveTolocalStorage(updatedCart);
    }
};


export const removeTocart = (id) => (dispatch, getState) => {
    const { cart } = getState().cart;
console.log(cart,"check cart");
    const updatedCart = cart.filter((item) => item.id !== id); 
    console.log(updatedCart,"inaction");
    dispatch({ type: REMOVE_TO_CART, payload: updatedCart });
    // saveTolocalStorage(updatedCart);
};


// const saveTolocalStorage = (cart)=>{
//     try {
//         localStorage.setItem("cart", JSON.stringify(cart))
//     } catch (error) {
//         console.log('Error saving in local storage:' , error);
//     }
// }