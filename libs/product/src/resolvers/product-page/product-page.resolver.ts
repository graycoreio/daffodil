import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, Resolve } from '@angular/router'
import { ofType } from '@ngrx/effects';
import { ActionsSubject, Store } from '@ngrx/store';
import { Observable } from 'rxjs'
import { mapTo, take } from 'rxjs/operators';

import { DaffProductActionTypes, DaffProductLoad } from '../../actions/product.actions';
import { DaffProductReducersState } from '../../reducers/public_api';

/**
 * Resolves product data for product pages, and will only resolve the url after a product request succeeds or fails. This resolver expects a url
 * of the form `some/url/{id}` where `{id}` is the product id.
 */
@Injectable({
	providedIn: 'root'
})
export class DaffProductPageResolver implements Resolve<Observable<boolean>> {
  constructor(
    private store: Store<DaffProductReducersState>,
    private dispatcher: ActionsSubject,
	) {}
	
	resolve(route: ActivatedRouteSnapshot): Observable<boolean> {
		this.store.dispatch(new DaffProductLoad(route.paramMap.get('id')));

		return this.dispatcher.pipe(
			ofType(DaffProductActionTypes.ProductLoadSuccessAction || DaffProductActionTypes.ProductLoadFailureAction),
			mapTo(true),
			take(1)
		);
	}
}
