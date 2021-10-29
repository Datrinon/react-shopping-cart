import React from 'react';
import ReactDOM from 'react-dom';
import "./css/Reset.css";
import './css/index.css';
import Router from "./js/components/Router";



ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);
