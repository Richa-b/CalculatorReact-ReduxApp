import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './redux/store/config'
import {Provider} from "react-redux";

registerServiceWorker();

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
