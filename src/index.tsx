import 'core-js';
import 'regenerator-runtime/runtime';
import React from 'react';
import { Provider } from 'react-redux';

import * as ReactDOM from 'react-dom';

import './services/i18n';
import { App } from './App';
import { store } from './store/store';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <React.Suspense fallback="Loading...">
                <App />
            </React.Suspense>
        </Provider>
    </React.StrictMode>,
    document.getElementById('app'),
);
