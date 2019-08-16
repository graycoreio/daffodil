import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { DaffStoreFacade } from '@daffodil/core';

import { Store, select, Action } from '@ngrx/store';

import { DaffCategory } from '../models/category';
import * as fromCategory from '../reducers/index';
import { DaffCategoryModule } from '../category.module';

@Injectable({
  providedIn: DaffCategoryModule
})
export class DaffCategoriesFacade implements DaffStoreFacade<Action> {
  /**
   * The loading state for retrieving all categories.
   */
  loading$: Observable<boolean>;
  /**
   * All categories.
   */
  categories$: Observable<DaffCategory[]>;
  /**
   * Errors associated with retrieving all categories.
   */
  errors$: Observable<string[]>;

  constructor(private store: Store<fromCategory.State>) {
    this.loading$ = this.store.pipe(select(fromCategory.selectCategoriesLoading));
    this.categories$ = this.store.pipe(select(fromCategory.selectAllCategories));
    this.errors$ = this.store.pipe(select(fromCategory.selectCategoriesErrors));
  }

  /**
   * Dispatches the given action.
   * @param action action to dispatch.
   */
  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
