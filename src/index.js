import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory, browserHistory } from 'history';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Demo from './containers/Demo/';
//import './common/index.css'

const route = (
    <Router history={browserHistory}>
        <Route path="/" component={Demo}>
            <IndexRoute component={Demo}/>
            <Route path="/demo" getComponent={(location, callback) => {
                require.ensure([], function(require) {
                    callback(null, require('./containers/Demo/index').default);
                })
            }}/>
        </Route>
    </Router>
);


ReactDOM.render(
    <Provider store={configureStore()} >
        {route}
    </Provider>,
    document.getElementById('main')
);
