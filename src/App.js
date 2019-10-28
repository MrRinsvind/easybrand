import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ConnectedRouter } from 'connected-react-router'
import { StylesProvider } from '@material-ui/styles'
import { ToastContainer } from "react-toastify"
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/mergeMap'

import { store, persistor, history } from 'store'
import Router from './Router'
import './App.scss'
import 'react-toastify/dist/ReactToastify.css'


function App() {
    return (
        <StylesProvider injectFirst>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <ConnectedRouter history={history}>
                        <React.Fragment>
                            <Router history={history}/>
                            <ToastContainer/>
                        </React.Fragment>
                    </ConnectedRouter>
                </PersistGate>
            </Provider>
        </StylesProvider>
    )
}

export default App
