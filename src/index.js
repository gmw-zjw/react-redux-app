import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'

import registerServiceWorker from './registerServiceWorker'
import reducers from './reducer'
// import config from './config'

import 'antd/dist/antd.css'

import Login from './container/login'
import Register from './container/register'

registerServiceWorker()

const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
))

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route path="/login" component={Login}></Route>
                <Route path="/register" component={Register}></Route>
            </div>
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));

