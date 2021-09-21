import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import 'antd/dist/antd.css';

import { Provider } from 'react-redux';

// step 1 in ./src/app
//2. import the store, and pass the store to the Provider which wraps the app.
// this allows every component in the app to now access data from the store.
// then go to ./src/services/cryptoApi.js

import store from './app/store';

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);
