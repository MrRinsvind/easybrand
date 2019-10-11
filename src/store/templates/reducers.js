import * as a from './actions'
import 'rxjs/add/operator/mergeMap'

const initialState = {
  loading: false,
  data: null,
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
              data: action.payload,
              loading: false,
              error: null,
          }

      case a.LIST_ERROR:
          return {
              error: true,
              loading: false,
              data: [],
          }
      default:
          return state
    }
}
