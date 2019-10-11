import { of } from 'rxjs/observable/of'
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/mergeMap'
import { push } from 'connected-react-router'
import { fromPromise } from 'rxjs/observable/fromPromise'
import  { toast } from 'react-toastify'

import { LIST_REQUEST, LIST_SUCCESS, LIST_CHANGE_REQUEST, LIST_ERROR } from 'store/settings/actions'
import { aGet, aPost } from 'api'


export const getSettings = (action$) =>
    action$
        .ofType(LIST_REQUEST)
        .mergeMap(({ payload }) => {
            return fromPromise(aGet("http://radpoznyakov.96.lt/test1/index.php?get=settings"))
                .switchMap(response => {
                    if(response instanceof Error) {
                        toast("oops, we have some problems with server", { type: 'warning' })
                        return of(
                            {
                                type: LIST_ERROR,
                            }
                        )
                    }
                    return of({
                        type: LIST_SUCCESS,
                        payload: response,
                    })
                })
        })


export const changeSettings = (action$) =>
    action$
        .ofType(LIST_CHANGE_REQUEST)
        .mergeMap(({ payload }) => {
            return fromPromise(aPost("http://radpoznyakov.96.lt/test1/index.php", payload))
                .switchMap(response => {
                    if(response instanceof Error) {
                        toast("error with save settings", { type: 'error' })
                        return of(
                            {
                                type: LIST_ERROR,
                            }
                        )
                    }
                    toast("settings have been saved", { type: 'success' })
                    return of(
                        {
                            type: LIST_SUCCESS,
                            payload: response,
                        },
                        push("/templates")
                    )
                })
        })
