import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import store, { history } from './store';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

ReactDOM.render(
 <Provider store={store}>
    <ConnectedRouter history={history}>
        <App />
    </ConnectedRouter>
 </Provider>, document.getElementById('root')
);

registerServiceWorker();
