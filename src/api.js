import fetch from "isomorphic-fetch"

export function aGet(url) {

    return fetch(url, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
        .then(resp => resp.json())
        .catch(e => {
            return new Error()
        })
}

export function aPost(url, data) {

    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(data)
    })
        .then(resp => resp.json())
        .catch(e => {
            return new Error()
        });
}

export function aPostWithFile(url, data) {

    const headers = {
        'Accept': 'application/json, */*',
    }
    return fetch(url, {
        method: 'POST',
        headers,
        body: data
    })
        .then(resp => resp.json())
        .catch(e => {
            return new Error()
        })
}

