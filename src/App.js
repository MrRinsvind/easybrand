import React, { Fragment } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ConnectedRouter } from 'connected-react-router'
import { StylesProvider } from '@material-ui/styles'

import { store, persistor, history } from 'store'
import Router from './Router'
import TopBar from 'common/layouts/TopBar'

import 'bootstrap/dist/css/bootstrap-grid.min.css'
import './App.scss'

function App() {
    return (
        <StylesProvider injectFirst>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <ConnectedRouter history={history}>
                        <Fragment>
                            <TopBar/>
                            <Router history={history}/>
                        </Fragment>
                    </ConnectedRouter>
                </PersistGate>
            </Provider>
        </StylesProvider>
    )
}

export default App
