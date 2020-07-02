import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createHashHistory } from 'history';
import { Provider } from 'react-redux';
import { worker } from './utils/mock-service';

import OutlookMailer from './app';
import './scss/style.scss';

declare const require: (name: String) => any;

export const history = createHashHistory();
export const store: any =
    process.env.NODE_ENV !== 'production'
        ? (require('./store/store.dev') as any).configureStore(history)
        : (require('./store/store.prod') as any).configureStore(history);


ReactDOM.render(
    <Provider store={store}>
        <OutlookMailer store={store} history={history} />
    </Provider>,
    document.getElementById('outlook-mailer'),
);

// start the mock service here
worker.start();
