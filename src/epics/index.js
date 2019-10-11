import { combineEpics } from 'redux-observable'

import * as templates from './templates'
import * as settings from './settings'


export default combineEpics(
    ...Object.values(templates),
    ...Object.values(settings),
)
