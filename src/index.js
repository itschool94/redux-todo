import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App';

import { createStore } from 'redux';
import rootReducer from './reducers';

import { Provider } from 'react-redux';

import * as serviceWorker from './serviceWorker';

// store 생성(createStore 실행하여 reducer를 전달)
const store = createStore(rootReducer);
// console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
