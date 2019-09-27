import React from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Router, Switch, Redirect, Route } from 'react-router-dom'

// components
import Preview from './views/Preview'
import Settings from './views/Settings'
import Templates from './views/Templates'

function AppRouter({ history }) {
  console.log('history',history)
    return (
        <Router history={history}>
            <Route exact path="/" render={() => (
                <Redirect to="/preview"/>
            )}/>
            <Switch>
                <Route
                    path="/preview"
                    exact
                    component={Preview}
                />
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
