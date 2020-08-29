import axios from 'axios';

import history from '../components/history';
export const signIn = (id) => {
    return {
        type: 'SIGN_IN',
        payload: id
    }
}

export const signOut = () => {
    return {
        type: 'SIGN_OUT'
    }
}

export const streamCreate = (stream) => async (dispatch) => {
        const response = await axios.post('http://localhost:3001/streams', stream);
        
        dispatch({type: 'CREATE_STREAM', payload: response.data});
        history.push('/');
    }

export const showStreams = () => async (dispatch) => {
    const response = await axios.get('http://localhost:3001/streams');
    
    dispatch({type: 'SHOW_STREAMS', payload: response.data});
}
export const fetchStream = (id) => async (dispatch) => {
    const response = await axios.get(`http://localhost:3001/streams/${id}`);
    dispatch({type: 'SHOW_STREAM', payload: response.data});
}

export const streamEdit = (id, stream) => async (dispatch) => {
    const response = await axios.patch(`http://localhost:3001/streams/${id}`, stream);

    dispatch({type: 'EDIT_STREAM', payload: response.data});
    history.push('/');
}

export const streamDelete = (id) => async (dispatch) => {
    await axios.delete(`http://localhost:3001/streams/${id}`);

    dispatch({type: 'DELETE_STREAM', payload: id})
    history.push('/');
}