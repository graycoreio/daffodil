import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select, Action } from '@ngrx/store';

import { DaffStoreFacade } from '@daffodil/core';

import { DaffCategory } from '../models/category';
import { DaffCategoryModule } from '../category.module';
import { DaffCategorySelectors } from '../selectors/category.selector';
import { CategoryReducersState } from '../reducers/category-reducers.interface';

@Injectable({
  providedIn: DaffCategoryModule
})
export class DaffCategoryFacade implements DaffStoreFacade<Action> {
  /**
   * The category retrieved in a single category call.
   */
  category$: Observable<DaffCategory>;
  /**
   * The loading state for retrieving a single category.
   */
  loading$: Observable<boolean>;
  /**
   * Errors associated with retrieving a single category.
   */
  errors$: Observable<string[]>;

  constructor(private store: Store<CategoryReducersState>) {
    this.category$ = this.store.pipe(select(DaffCategorySelectors.selectCategory));
    this.loading$ = this.store.pipe(select(DaffCategorySelectors.selectCategoryLoading));
    this.errors$ = this.store.pipe(select(DaffCategorySelectors.selectCategoryErrors));
  }

  /**
   * Dispatches the given action.
   * @param action action to dispatch.
   */
  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
