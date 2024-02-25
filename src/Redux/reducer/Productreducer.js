import { GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "../action/actionTypes/actionType"

const initialState = {
    products:[],
    isLoading:false,
    isErr:null
}

export const Productreducer = (state= initialState,{type,payload})=>{
    switch(type){
        case GET_PRODUCT_REQUEST:
            return{
                ...state,isLoading:true
            }
            case GET_PRODUCT_SUCCESS:
            return{
                ...state,isLoading:false,products:payload
            }
            case GET_PRODUCT_FAILURE:
            return{
                ...state,isLoading:false,isErr:payload
            }
            default:
                return state;
    }
}