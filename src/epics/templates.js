import { of } from 'rxjs/observable/of'
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/mergeMap'
import { LIST_REQUEST, LIST_SUCCESS, LIST_CHANGE_REQUEST, LIST_ERROR } from 'store/templates/actions'
import { aGet, aPost } from 'api'
import { fromPromise } from 'rxjs/observable/fromPromise'
import { push } from 'connected-react-router'
import { toast } from 'react-toastify'


export const getTemplates = (action$) =>
    action$
        .ofType(LIST_REQUEST)
        .mergeMap(({ payload }) => {
            return fromPromise(aGet("http://radpoznyakov.96.lt/test1/index.php?get=templates"))
                .switchMap(( response) => {
                    if(response instanceof Error) {
                        console.log('все хуево пасаны')
                        toast("все хуево пасаны")
                        return of(
                            {
                                type: LIST_ERROR,
                            },
                        )
                    }
                    return of({
                        type: LIST_SUCCESS,
                        payload: response,
                    })
                })
        })


export const ChangeTemplates = (action$, store) =>
    action$
        .ofType(LIST_CHANGE_REQUEST)
        .mergeMap(({ payload }) => {
            const fetchedData = store.getState().templates.data;
            const filteredTemplates =  fetchedData.filter(template => template.id !== payload.data.id)
            const newPayload = {
                ...payload,
                data: [
                    ...filteredTemplates,
                    {...payload.data}
                ]
            }
            return fromPromise(aPost(
                "http://radpoznyakov.96.lt/test1/index.php",
                newPayload
            ))
                .switchMap(response => of({
                    type: LIST_SUCCESS,
                    payload: response,
                },push("/templates")))
        })
