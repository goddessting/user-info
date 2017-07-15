import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {IndexRoute, Router, Route, browserHistory} from 'react-router';

import reducer from '../Reducers/index';
import App from './app';

import GetUsers from '../Containers/get-users';

import getUsersMiddleware from '../Middlewares/get-users-middleware';
import deleteUserMiddleware from '../Middlewares/delete-user-middleware';
import addUserMiddleware from '../Middlewares/add-user-middleware';

const createMiddlewareStore = applyMiddleware(getUsersMiddleware, deleteUserMiddleware, addUserMiddleware)(createStore);
const store = createMiddlewareStore(reducer);

render(<Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={GetUsers}/>
        </Route>
    </Router>
</Provider>, document.getElementById("app"));
