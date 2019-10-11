import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import { LIST_REQUEST, LIST_SUCCESS, LIST_CHANGE_REQUEST } from 'store/settings/actions'
import { aGet, aPost } from 'api'
import { fromPromise } from 'rxjs/observable/fromPromise'


export const getSettings = (action$) =>
    action$
        .ofType(LIST_REQUEST)
        .mergeMap(({ payload }) => {
            return fromPromise(aGet("http://radpoznyakov.96.lt/test1/index.php?get=settings"))
                .switchMap(response => of({
                    type: LIST_SUCCESS,
                    payload: response,
                }))
        })


export const changeSettings = (action$) =>
    action$
        .ofType(LIST_CHANGE_REQUEST)
        .mergeMap(({ payload }) => {
            return fromPromise(aPost("http://radpoznyakov.96.lt/test1/index.php", payload))
                .switchMap(response => of({
                    type: LIST_SUCCESS,
                    payload: response,
                }))
        })
