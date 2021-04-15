import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import store from './Redux/store';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store.store}>
                <PersistGate
                    loading={null}
                    persistor={store.persistor}
                ></PersistGate>
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
