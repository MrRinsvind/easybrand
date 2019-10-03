import React from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Router, Switch, Redirect, Route } from 'react-router-dom'

//layouts
import BaseLayout from 'common/layouts/BaseLayout'
// views
import Settings from 'views/Settings'
import Templates from 'views/Templates'
import Hello from 'views/Hello'
import Builder from 'views/Builder'


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
                    render={(routeProps) => (
                        <BaseLayout>
                            <Settings {...routeProps}/>
                        </BaseLayout>
                    )} />
                />
                <Route
                    path="/templates"
                    exact
                    render={(routeProps) => (
                        <BaseLayout>
                            <Templates {...routeProps}/>
                        </BaseLayout>
                    )} />
                />
                <Route
                    path="/hello"
                    exact
                    render={(routeProps) => (
                        <BaseLayout>
                            <Hello {...routeProps}/>
                        </BaseLayout>
                    )} />
                />
                <Route
                    path="/builder"
                    exact
                    component={Builder}
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
