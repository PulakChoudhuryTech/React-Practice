import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";
import { counterReducer } from './reducers/counter-reducers';
import FormContainer from './components/Route2';
const cs = createStore(counterReducer);

ReactDOM.render(<Provider store={cs}><Router><App /></Router></Provider>, document.getElementById('root'));
registerServiceWorker();
