import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import authentication from './authentication';
import registration from './registration';

export default combineReducers({
    routing: routerReducer,
    authentication,
    registration
});