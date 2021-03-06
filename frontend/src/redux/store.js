import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { authReducer } from './Reducers/authReducer';
import { productReducer } from './Reducers/productReducer';
import { shoppingListReducer } from './Reducers/shoppingListReducer'
import thunkMiddleware from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
  authReducer,
  productReducer,
  shoppingListReducer,
})
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;
