import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { UserContext } from "./store";

ReactDOM.render(
  <React.StrictMode>
    <UserContext>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App />
      </BrowserRouter>
    </UserContext>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
