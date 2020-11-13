import { isPlatformBrowser } from '@angular/common'
import { Inject, Injectable, PLATFORM_ID } from '@angular/core'
import { ActivatedRouteSnapshot, Resolve } from '@angular/router'
import { ActionsSubject, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs'
import { filter, map, take } from 'rxjs/operators';

import { DaffProductActionTypes, DaffProductLoad, DaffProductLoadFailure, DaffProductLoadSuccess } from '../../actions/product.actions';
import { DaffProductReducersState } from '../../reducers/public_api';

/**
 * Resolves the product page immediately when in a browser, so client-side loading states can show immediately. 
 * When server-side, this resolver will wait until the product finishes loading to resolve the url mainly for seo considerations.
 */
@Injectable({
	providedIn: 'root'
})
export class DaffProductPageServerSideResolver implements Resolve<Observable<boolean>> {
  constructor(
		@Inject(PLATFORM_ID) private platformId: string,
    private store: Store<DaffProductReducersState>,
    private dispatcher: ActionsSubject,
	) {}
	
	resolve(route: ActivatedRouteSnapshot): Observable<boolean> {
		this.store.dispatch(new DaffProductLoad(route.paramMap.get('id')));

		return isPlatformBrowser(this.platformId) ? 
			of(true) : 
			this.dispatcher.pipe(
				filter((action: DaffProductLoadSuccess | DaffProductLoadFailure) => 
					action.type === DaffProductActionTypes.ProductLoadSuccessAction
					|| action.type === DaffProductActionTypes.ProductLoadFailureAction
				),
				map(() => true),
				take(1)
			);
	}
}
