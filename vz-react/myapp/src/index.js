import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { counterReducer } from './reducers/counter-reducers';
import FormContainer from './components/Route2';
import TodoContainer from './components/todo';
import { composeWithDevTools } from 'redux-devtools-extension';
//middlewares
import loggerMiddleware from './middlewares/loggerMiddleware';
import logger from "redux-logger";
import mw2 from './middlewares/mw2';

const cs = createStore(counterReducer, composeWithDevTools(applyMiddleware(logger)));

ReactDOM.render(<Provider store={cs}><Router><App /></Router></Provider>, document.getElementById('root'));
registerServiceWorker();
