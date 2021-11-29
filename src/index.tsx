import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createAPI} from './api';
import {configureStore} from '@reduxjs/toolkit';
import {reducer} from './store/reducer';
import {Provider} from 'react-redux';
import App from './components/App/App';
import {BrowserRouter} from 'react-router-dom';

const api = createAPI();

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    })
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
