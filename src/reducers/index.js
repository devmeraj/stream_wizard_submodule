import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import streamReducer from './streamReducer';

const authReducer = (state = {signedIn: null, id: null}, action) => {
    if(action.type === 'SIGN_IN') {
        return {...state, signedIn: true, id: action.payload}
    } else if(action.type === 'SIGN_OUT'){
        return {...state, signedIn: false, id: null}
    } else {
        return state;
    }
};



export default combineReducers({
    auth: authReducer,
    streams: streamReducer,
    form: formReducer
});