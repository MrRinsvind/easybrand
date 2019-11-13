import { combineEpics } from 'redux-observable'

import * as templates from './templates'

export default combineEpics(
    ...Object.values(templates),
)
