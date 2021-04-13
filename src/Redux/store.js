import { configureStore } from '@reduxjs/toolkit';
import reducer from './contacts/reducer';
import authReducer from './auth/auth-reducer';

const store = configureStore({
    reducer: {
        auth: authReducer,
        contacts: reducer,
    },
    devTools: process.env.NODE_ENV === 'development',
});

export default store;
