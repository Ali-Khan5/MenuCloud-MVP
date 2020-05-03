import rootReducer from './reducer';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
const initialState = {
    lastUpdate: 0,
    light: false,
    count: 1,
  }
// const store = createStore(
//     rootReducer,
//     {},
//     applyMiddleware(thunk)
// );
// const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


//  export default store=createStore(rootReducer, {}, composeEnhancers(applyMiddleware(thunk)));
    // return createStore(rootReducer, initialState, applyMiddleware(thunk));


    const reduxDevtools =
    typeof window !== "undefined" && process.env.NODE_ENV !== "production"
      ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f;
  
  const enhancers = compose(
    applyMiddleware(thunk),
    reduxDevtools
  );
  
  export const makeStore = initialState => {
    return createStore(rootReducer, initialState, enhancers);
  };