import reducer from './reducer';
import CartReducer from "./cartReducer"
import {combineReducers} from 'redux';
// import cartReducer from './cartReducer';

export default combineReducers({
    store: reducer,
    CartReducer:CartReducer
});

