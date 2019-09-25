import { Observable } from 'rxjs/Rx';
import {
    INIT,
} from './constants';

const setInit = (action$, store) =>
    action$.ofType(INIT).switchMap(() => {
        return Observable.empty();
    });

export default [
    setInit,
];
