import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';

// wee bit of middleware googlin netted me redux-thunk, lets me make action creators which
// return callbacks (for delaying/conditionally dispatching actions) instead of actions

let store = createStore(rootReducer,applyMiddleware(thunk));

export default store;