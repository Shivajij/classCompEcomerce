import {createStore, applyMiddleware, combineReducers,compose} from "redux"
import {Productreducer} from "./reducer/Productreducer"
import {thunk} from "redux-thunk"
import { Cartreducer } from './reducer/Cartreducer';

const rootReducer = combineReducers({
   products: Productreducer,
   cart: Cartreducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
export default store;