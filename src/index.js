import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
// import 'bootstrap/disk/css/bootstrap.min.css'
import './base.scss'
import store from './redux/store';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router>
    <App />
    </Router>
  </Provider>
);

reportWebVitals();
