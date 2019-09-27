export const namespace = '@TEMPLATES',
    LIST_REQUEST = `${namespace}/LIST_REQUEST`,
    LIST_SUCCESS = `${namespace}/LIST_SUCCESS`,
    LIST_ERROR = `${namespace}/LIST_ERROR`

export const fetchTemplates = () => ({
    type: LIST_REQUEST,
    url: '/'
})

