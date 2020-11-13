import { Inject, Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, Resolve } from '@angular/router'
import { ofType } from '@ngrx/effects';
import { ActionsSubject, Store } from '@ngrx/store';
import { Observable } from 'rxjs'
import { mapTo, take } from 'rxjs/operators';

import { DaffCategoryActionTypes, DaffCategoryLoad } from '../../actions/category.actions';
import { DaffCategoryReducersState } from '../../reducers/category-reducers.interface';
import { DaffDefaultCategoryPageSize } from './default-category-page-size.token';

/**
 * Resolves category data for category pages, and will only resolve the url after a category request succeeds or fails. This resolver expects a url
 * of the form `some/url/{id}` where `{id}` is the category id.
 */
@Injectable({
	providedIn: 'root'
})
export class DaffCategoryPageResolver implements Resolve<Observable<boolean>> {
  constructor(
		@Inject(DaffDefaultCategoryPageSize) private defaultCategoryPageSize: number,
    private store: Store<DaffCategoryReducersState>,
    private dispatcher: ActionsSubject,
	) {}
	
	resolve(route: ActivatedRouteSnapshot): Observable<boolean> {
		this.store.dispatch(new DaffCategoryLoad({
      id: route.paramMap.get('id'), page_size: this.defaultCategoryPageSize
		}));

		return this.dispatcher.pipe(
			ofType(DaffCategoryActionTypes.CategoryLoadSuccessAction, DaffCategoryActionTypes.CategoryLoadFailureAction),
			mapTo(true),
			take(1)
		);
	}
}
