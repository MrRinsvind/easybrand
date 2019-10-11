export const namespace = '@SETTINGS',
    LIST_REQUEST = `${namespace}/LIST_REQUEST`,
    LIST_SUCCESS = `${namespace}/LIST_SUCCESS`,
    LIST_CHANGE_REQUEST = `${namespace}/LIST_CHANGE_REQUEST`,
    LIST_CHANGE_SUCCESS = `${namespace}/LIST_CHANGE_SUCCESS`,
    LIST_ERROR = `${namespace}/LIST_ERROR`

export const fetchSettings = () => ({
    type: LIST_REQUEST,
})

export const changeSettings = (data) => ({
    type: LIST_CHANGE_REQUEST,
    payload: data,
})
