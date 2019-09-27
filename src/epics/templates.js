import { of } from 'rxjs/observable/of'
import 'rxjs/add/operator/mergeMap';


export const getTemplates = (action$) =>
  action$
      .ofType('some action')
      .mergeMap(({ payload }) => {
          return of({
            type: '',
            payload,
          })
      })
