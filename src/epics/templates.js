import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/mergeMap'


export const getTemplates = (action$) =>
    action$
        .ofType("empty")
        .mergeMap(() => {

        })