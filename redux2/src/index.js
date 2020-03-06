import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Routing from './component/routing';

// To connect view to store
ReactDOM.render(
    <Provider store={store}>
        <Routing/>
    </Provider>,  document.getElementById('root')
)