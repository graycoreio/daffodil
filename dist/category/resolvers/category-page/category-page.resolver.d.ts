import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { ActionsSubject, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DaffCategoryReducersState } from '../../reducers/category-reducers.interface';
/**
 * Resolves category data for category pages, and will only resolve the url after a category request succeeds or fails. This resolver expects a url
 * of the form `some/url/{id}` where `{id}` is the category id.
 */
export declare class DaffCategoryPageResolver implements Resolve<Observable<boolean>> {
    private platformId;
    private defaultCategoryPageSize;
    private store;
    private dispatcher;
    constructor(platformId: string, defaultCategoryPageSize: number, store: Store<DaffCategoryReducersState>, dispatcher: ActionsSubject);
    resolve(route: ActivatedRouteSnapshot): Observable<boolean>;
}
