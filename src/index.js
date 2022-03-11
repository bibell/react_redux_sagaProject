import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import { createStore,combineReducers,applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import * as entireReducers from './reducers/allInOne'

import createSagaMiddleware from 'redux-saga'
import {allRequest} from './saga/handlingApiRequest'
import * as allStore from './reducers/allStores/mainStor'

const sagaMiddlewate=createSagaMiddleware()
const saga=[sagaMiddlewate]
//const allReducers=combineReducers({entireReducers})
//const store=allStore.responseState(entireReducers.responseReducers,applyMiddleware(sagaMiddlewate))
const myStore=createStore(entireReducers.responseReducers,applyMiddleware(sagaMiddlewate))
sagaMiddlewate.run(allRequest)


ReactDOM.render(
  <React.StrictMode>
   <BrowserRouter>  
     <Provider store={myStore}>  
       <App />
    </Provider> 
    </BrowserRouter> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
