'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import Main from './components/Main'

import store from './store'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


//console.log('hello ------------');
ReactDOM.render(
	<Provider store={store}>
	  <Router>
	  	<Main/>
	  </Router>	  
	</Provider>,
	  document.getElementById('main')
)