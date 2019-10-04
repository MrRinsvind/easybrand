import * as a from './actions'
import 'rxjs/add/operator/mergeMap'

const initialState = {
  loading: false,
  data: [],
  item: null,
  error: null,
}

export default function (state = initialState, action) {
  switch(action.type) {
      case a.LIST_REQUEST:
          return {
              data: [],
              loading: true,
          }
      case a.LIST_SUCCESS:
          return {
              ...state,
              data: action.payload.results,
              loading: false,
              error: null,
          }
      default:
          return state
    }
}
