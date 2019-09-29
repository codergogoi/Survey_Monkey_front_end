import axios from 'axios';
import { FETCH_USER } from './types';


export const fetchUser = () => {
    return function(dispatch){
        axios
        .get('http://localhost:5000/api/current_user')
        .then(res => dispatch({ type: FETCH_USER, payload: res}));
    };
    
};