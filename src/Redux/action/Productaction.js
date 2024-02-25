import axios from "axios";
import {
  GET_PRODUCT_FAILURE,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
} from "./actionTypes/actionType";

export const getProduct = () => async (dispatch) => {
  dispatch({ type: GET_PRODUCT_REQUEST });
  try {
    const res = await axios.get("https://fakestoreapi.com/products?limit=10");
    dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: GET_PRODUCT_FAILURE, payload: err });
  }
};
