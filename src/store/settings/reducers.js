import * as a from './actions'

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
                ...state,
                loading: true,
            }
        case a.LIST_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: null,
            }
        default:
            return state
    }
}
