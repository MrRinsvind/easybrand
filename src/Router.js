import React from 'react'
import { Router, Switch, Redirect, Route } from 'react-router-dom'

import Builder from 'views/Builder'


function AppRouter({ history }) {

    return (
        <Router history={history}>
            <Switch>
                <Route
                    path="/"
                    exact
                    render={(routeProps) => (
                      <Builder {...routeProps}/>
                    )} />
                />
                <Redirect to="/"/>
            </Switch>
        </Router>
    )
}

export default AppRouter
