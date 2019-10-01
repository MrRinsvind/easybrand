import React from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Router, Switch, Redirect, Route } from 'react-router-dom'

// views
import Settings from './views/Settings'
import Templates from './views/Templates'
import Hello from './views/Hello'

function AppRouter({ history }) {
    return (
        <Router history={history}>
            <Route exact path="/" render={() => (
                <Redirect to="/hello"/>
            )}/>
            <Switch>
                <Route
                    path="/settings"
                    exact
                    component={Settings}
                />
                <Route
                    path="/templates"
                    exact
                    component={Templates}
                />
                <Route
                    path="/hello"
                    exact
                    component={Hello}
                />
            </Switch>
        </Router>
    )
}

export default compose(
    connect(
        (state) => ({
            someprops: 'test',
        })
    ),
)(AppRouter)
