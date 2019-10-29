import { of } from 'rxjs/observable/of'
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/mergeMap'

import { fromPromise } from 'rxjs/observable/fromPromise'
import { push } from 'connected-react-router'
import { toast } from 'react-toastify'

import { aGet, aPost } from 'api'
import {
    LIST_REQUEST,
    LIST_SUCCESS,
    LIST_CHANGE_REQUEST,
    LIST_ERROR,
    SEND_REQUEST,
    REMOVE_REQUEST,
} from 'store/templates/actions'


export const getTemplates = (action$) =>
    action$
        .ofType(LIST_REQUEST)
        .mergeMap(() => {
            return fromPromise(aGet(`${process.env.REACT_APP_BACKEND_REQUEST_URL}?get=templates`))
                .switchMap((response) => {
                    if(response instanceof Error) {
                        toast("oops, we have some problems with server", { type: 'warning' })
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

export const removeTemplate = (action$, store) =>
    action$
        .ofType(REMOVE_REQUEST)
        .mergeMap(({ payload }) => {
            const fetchedData = store.getState().templates.data
            const filteredTemplates =  fetchedData.filter(template => template.id !== payload)
            const newPayload = {
                post: "templates",
                data: [
                    ...filteredTemplates,
                ]
            }
            return of({
                type: SEND_REQUEST,
                payload: newPayload,
                meta: {
                    successToastText: "template has been deleted",
                    errorToastText: "error with delete template",
                }
            })
        })

export const changeTemplates = (action$, store) =>
    action$
        .ofType(LIST_CHANGE_REQUEST)
        .mergeMap(({ payload }) => {
            const fetchedData = store.getState().templates.data
            const filteredTemplates =  fetchedData.filter(template => template.id !== payload.data.id)
            const newPayload = {
                ...payload,
                data: [
                    ...filteredTemplates,
                    {...payload.data}
                ]
            }
            return of({
                type: SEND_REQUEST,
                payload: newPayload,
                meta: {
                    successToastText: "template has been saved",
                    errorToastText: "error with save template",
                }
            })
        })

export const requestTemplates = (action$) =>
    action$
        .ofType(SEND_REQUEST)
        .mergeMap(({ payload, meta }) => {
            return fromPromise(aPost(
                process.env.REACT_APP_BACKEND_REQUEST_URL,
                payload
            ))
                .switchMap(response => {
                    if(response instanceof Error) {
                        toast(meta.errorToastText, { type: 'error' })
                        return of(
                            {
                                type: LIST_ERROR
                            },
                        )
                    }
                    toast(meta.successToastText, { type: 'success' })
                    return of(
                        {
                            type: LIST_SUCCESS,
                            payload: response,
                        },
                        push("/templates")
                    )
                })
        })
