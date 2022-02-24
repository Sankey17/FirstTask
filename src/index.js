import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from './app/store';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);



// import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter as Router } from "react-router-dom";

// import App from "./App";
// // import "bootstrap/dist/css/bootstrap.min.css";

// import "react-toastify/dist/ReactToastify.css";

// import { createStore } from "redux";
// import { Provider } from "react-redux";
// import { contactReducer } from "./redux/reducers/contactReducer";
// import { composeWithDevTools } from "redux-devtools-extension";

// const store = createStore(contactReducer, composeWithDevTools());

// const rootElement = document.getElementById("root");
// ReactDOM.render(
//   <Provider store={store}>
//     <Router>
//       <App />
//     </Router>
//   </Provider>,
//   rootElement
// );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
