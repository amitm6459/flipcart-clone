import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import { getProductReducer,getProductDetailsREducer } from './reducer/productReducer';
import{cartReducer} from './reducer/cartReducer';
const reducer = combineReducers({

    getProducts: getProductReducer,
    getProductDetails:getProductDetailsREducer,
    cart: cartReducer
})

const middleware =[thunk]

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))

)
export default store;