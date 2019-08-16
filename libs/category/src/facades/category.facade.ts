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
export class DaffCategoryFacade implements DaffStoreFacade<Action> {
  /**
   * The loading state for retrieving a single category.
   */
  loading$: Observable<boolean>;
  /**
   * Errors associated with retrieving a single category.
   */
  errors$: Observable<string[]>;

  constructor(private store: Store<fromCategory.State>) {
    this.loading$ = this.store.pipe(select(fromCategory.selectCategoryLoading));
    this.errors$ = this.store.pipe(select(fromCategory.selectCategoryErrors));
  }

  /**
   * Returns an Observable<DaffCategory> from a given id.
   * @param id The id of the category.
   */
  getCategory(id: string): Observable<DaffCategory> {
    return this.store.pipe(select(fromCategory.selectCategory, { id: id }));
  }

  /**
   * Dispatches the given action.
   * @param action action to dispatch.
   */
  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
