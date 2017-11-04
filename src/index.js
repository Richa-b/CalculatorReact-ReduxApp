import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './redux/store/config'

function render() {
    ReactDOM.render(<App value={store.getState()}/>, document.getElementById('root'));
}

render();
store.subscribe(render);

registerServiceWorker();


