import { isPlatformBrowser } from '@angular/common'
import { Inject, Injectable, PLATFORM_ID } from '@angular/core'
import { ActivatedRouteSnapshot, Resolve } from '@angular/router'
import { ActionsSubject, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs'
import { filter, map, take } from 'rxjs/operators';

import { DaffCategoryActionTypes, DaffCategoryLoad, DaffCategoryLoadFailure, DaffCategoryLoadSuccess } from '../../actions/category.actions';
import { DaffCategoryReducersState } from '../../reducers/category-reducers.interface';
import { DaffDefaultCategoryPageSize } from './default-category-page-size.token';

/**
 * Resolves the category page immediately when in a browser, so client-side loading states can show immediately. 
 * When server-side, this resolver will wait until the category finishes loading to resolve the url mainly for seo considerations.
 */
@Injectable({
	providedIn: 'root'
})
export class DaffCategoryPageServerSideResolver implements Resolve<Observable<boolean>> {
  constructor(
		@Inject(PLATFORM_ID) private platformId: string,
		@Inject(DaffDefaultCategoryPageSize) private defaultCategoryPageSize: number,
    private store: Store<DaffCategoryReducersState>,
    private dispatcher: ActionsSubject,
	) {}
	
	resolve(route: ActivatedRouteSnapshot): Observable<boolean> {
		this.store.dispatch(new DaffCategoryLoad({
      id: route.paramMap.get('id'), page_size: this.defaultCategoryPageSize
		}));

		return isPlatformBrowser(this.platformId) ? 
			of(true) : 
			this.dispatcher.pipe(
				filter((action: DaffCategoryLoadSuccess | DaffCategoryLoadFailure) => 
					action.type === DaffCategoryActionTypes.CategoryLoadSuccessAction
					|| action.type === DaffCategoryActionTypes.CategoryLoadFailureAction
				),
				map(() => true),
				take(1)
			);
	}
}
