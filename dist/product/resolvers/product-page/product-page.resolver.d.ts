import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { ActionsSubject, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DaffProductReducersState } from '../../reducers/public_api';
/**
 * Resolves product data for product pages, and will only resolve the url after a product request succeeds or fails. This resolver expects a url
 * of the form `some/url/{id}` where `{id}` is the product id.
 */
export declare class DaffProductPageResolver implements Resolve<Observable<boolean>> {
    private platformId;
    private store;
    private dispatcher;
    constructor(platformId: string, store: Store<DaffProductReducersState>, dispatcher: ActionsSubject);
    resolve(route: ActivatedRouteSnapshot): Observable<boolean>;
}
