/*eslint-disable*/
import 'babel-polyfill';
import 'url-search-params-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import RouterComponent from './router';
import * as serviceWorker from './serviceWorker';
import "./assets/js/libs/zepto.js";
import "./assets/css/common/public.css";
import 'whatwg-fetch'
ReactDOM.render(<RouterComponent />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
