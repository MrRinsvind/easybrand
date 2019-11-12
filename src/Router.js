import React from 'react';
import { Router, Switch, Redirect, Route } from 'react-router-dom'

//layouts
import BaseLayout from 'common/layouts/BaseLayout'
import RequestLayout from 'common/layouts/RequestLayout'
// views
import Templates from 'views/Templates'
import Builder from 'views/Builder'


function AppRouter({ history }) {

    return (
        <Router history={history}>
            <Route exact path="/" render={() => (
                <Redirect to="/templates"/>
            )}/>
            <Switch>
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
                    path="/template/:id"
                    exact
                    render={(routeProps) => (
                        <RequestLayout>
                            <Builder {...routeProps}/>
                        </RequestLayout>
                    )} />
                />
            </Switch>
        </Router>
    )
}

export default AppRouter
