import {createStore} from 'redux';
import reducers from './reducers';
var initialState = {
    products: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: '',
};
var store = createStore(reducers, initialState);
export default store;