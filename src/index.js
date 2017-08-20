import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './containers/AppContainer.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import reducer from './reducers';

let store = createStore(reducer)

ReactDOM.render(
	<Provider store={store}>
		<AppContainer />
	</Provider>, 
	document.getElementById('root')
);
registerServiceWorker();