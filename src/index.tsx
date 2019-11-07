import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { HashRouter } from 'react-router-dom';
import { PreferencesContext } from './context/PreferencesContext';

import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './store/reducers';
import { Provider } from 'react-redux';

import promiseMiddleware from 'redux-promise-middleware';
import { autorun, observable } from 'mobx';

export const items = observable({ items: [], status: 'start' });

autorun(() => console.log('ZMIANA!', items.items));
autorun(() => console.log('ZMIANA status!', items.status));
setInterval(() => (items.status = Math.random().toString()), 2000);
items.status = 'sdsd';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(promiseMiddleware)),
);

// store.subscribe(() => {
//   console.log('Store changed ', store.getState());
// });
//
// store.dispatch(bookmarksAdd({ id: 2 }));
// store.dispatch(bookmarksAdd({ id: 24 }));
// store.dispatch(bookmarksRemove(2));
// store.dispatch(bookmarksAdd({ id: 12 }));
// store.dispatch(bookmarksAdd({ id: 21 }));

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <PreferencesContext.Provider
        value={{ initialQuery: 'batman', perPage: 6 }}
      >
        <App />
      </PreferencesContext.Provider>
    </Provider>
  </HashRouter>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
