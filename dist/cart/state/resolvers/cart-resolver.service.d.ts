import { Store, ActionsSubject, Action } from '@ngrx/store';
import { Resolve, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DaffCartReducersState } from '../reducers/public_api';
/**
 * Resolves the cart before navigation. Redirects to a given url when a failure occurs during Cart Load.
 * This url is `/` by default but can be overridden with the DaffCartResolverRedirectUrl injection token.
 */
export declare class DaffCartResolver implements Resolve<Observable<Action>> {
    private store;
    private dispatcher;
    private router;
    private redirectUrl;
    constructor(store: Store<DaffCartReducersState>, dispatcher: ActionsSubject, router: Router, redirectUrl: string);
    resolve(): Observable<Action>;
}
