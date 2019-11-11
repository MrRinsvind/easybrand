import { of } from 'rxjs/observable/of'
import { push } from 'connected-react-router'
import { fromPromise } from 'rxjs/observable/fromPromise'
import  { toast } from 'react-toastify'

import { LIST_REQUEST, LIST_SUCCESS, LIST_CHANGE_REQUEST, LIST_ERROR, LIST_JSON_REQUEST } from 'store/settings/actions'
import { aGet, aPost, aPostWithFile } from 'api'


export const getSettings = (action$) =>
    action$
        .ofType(LIST_REQUEST)
        .mergeMap( () => {
            return fromPromise(aGet(`${process.env.REACT_APP_BACKEND_REQUEST_URL}?get=settings`))
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

            if(payload && payload.data && payload.data.img && payload.data.img && typeof payload.data.img !== "string") {

                let formData = new FormData()
                formData.append('file', payload.data.img)
                formData.append('action', "loadPicture")
                formData.append('logo', "true")

                return fromPromise(aPostWithFile(process.env.REACT_APP_BACKEND_REQUEST_URL, formData))
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
                            type: LIST_JSON_REQUEST,
                            payload: {
                                ...payload,
                                data: {
                                    ...payload.data,
                                    img: process.env.REACT_APP_IMAGE_URL + response.url,
                                }
                            }
                        })
                    })
            }

            return of({
                type: LIST_JSON_REQUEST,
                payload,
            })
        })


export const sendingSettings = (action$) =>
    action$
        .ofType(LIST_JSON_REQUEST)
        .mergeMap(({ payload }) => {
            return fromPromise(aPost(process.env.REACT_APP_BACKEND_REQUEST_URL, payload))
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
                        payload.needRedirect ? push("/templates") : {
                            type: "mock",
                        }
                    )
                })
        })
