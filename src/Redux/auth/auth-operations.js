import axios from 'axios';
import * as authActions from './auth-actions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com/';

const token = {};
export const register = (credentials) => async (dispatch) => {
    dispatch(authActions.registerRequest());

    try {
        const response = await axios.post('/users/signup', credentials);
        dispatch(authActions.registerSuccess(response.data));
    } catch (error) {
        dispatch(authActions.registerError(error.message));
    }
};
export const login = (credentials) => async (dispatch) => {
    dispatch(authActions.loginRequest());

    try {
        const response = await axios.post('/users/login', credentials);
        dispatch(authActions.loginSuccess(response.data));
    } catch (error) {
        dispatch(authActions.loginError(error.message));
    }
};
export const logout = (credentials) => (dispatch) => {};
export const getCurrentUser = () => (dispatch, getState) => {};

// export default { register, login, logout, getCurrentUser };
