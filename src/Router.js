import React from 'react';
import { Router, Switch, Redirect, Route } from 'react-router-dom'

//layouts
import BaseLayout from 'common/layouts/BaseLayout'
import RequestLayout from 'common/layouts/RequestLayout'
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
                        <RequestLayout>
                            <BaseLayout>
                                <Settings {...routeProps}/>
                            </BaseLayout>
                        </RequestLayout>
                    )} />
                />
                <Route
                    path="/templates"
                    exact
                    render={(routeProps) => (
                        <RequestLayout>
                            <BaseLayout>
                                <Templates {...routeProps}/>
                            </BaseLayout>
                        </RequestLayout>
                    )} />
                />
                <Route
                    path="/hello"
                    exact
                    render={(routeProps) => (
                        <RequestLayout>
                            <BaseLayout>
                                <Hello {...routeProps}/>
                            </BaseLayout>
                        </RequestLayout>
                    )} />
                />
                <Route
                    path="/builder"
                    exact
                    render={(routeProps) => (
                        <RequestLayout>
                            <Builder {...routeProps}/>
                        </RequestLayout>
                    )} />
                />
                <Route
                    path="/builder/:id"
                    exact
                    render={(routeProps) => (
                        <RequestLayout>
                            <Builder {...routeProps}/>
                        </RequestLayout>
                    )} />
                />
                <Redirect to="/templates"/>
            </Switch>
        </Router>
    )
}

export default AppRouter
