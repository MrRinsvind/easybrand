import { applyMiddleware, compose, createStore, combineReducers } from 'redux'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

import { createEpicMiddleware } from 'redux-observable'
import { reducer as formReducer } from 'redux-form'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'

import epics from '../epics'
import templates from './templates/reducers'
import settings from './settings/reducers'

const initialStore = {}

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['template'],
  blacklist: ['router'],
  stateReconciler: autoMergeLevel2
}

const createRootReducer = (history) =>  persistReducer(persistConfig,combineReducers({
  router: connectRouter(history),
  form: formReducer,
  //reducers
  templates,
  settings,
}))

export const history = createBrowserHistory()

const composeEnhancers =
  (process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

export const epic$ = new BehaviorSubject(epics)

const rootEpic = (action$, state$) => epic$.mergeMap(epic => epic(action$, state$))

const epicMiddleware = createEpicMiddleware(rootEpic)

export const store = createStore(
  createRootReducer(history),
  initialStore,
  composeEnhancers(applyMiddleware(epicMiddleware, routerMiddleware(history)))
)

export const persistor = persistStore(store)

