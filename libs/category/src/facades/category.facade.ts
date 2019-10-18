import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select, Action } from '@ngrx/store';

import { DaffStoreFacade } from '@daffodil/core';

import { DaffCategory } from '../models/category';
import { DaffCategoryModule } from '../category.module';
import { selectCategoryLoading, selectCategoryErrors, selectSelectedCategory, selectCategoryPageConfigurationState } from '../selectors/category.selector';
import { CategoryReducersState } from '../reducers/category-reducers.interface';
import { DaffCategoryPageConfigurationState } from '../models/category-page-configuration-state';

@Injectable({
  providedIn: DaffCategoryModule
})
export class DaffCategoryFacade implements DaffStoreFacade<Action> {
  /**
   * The currently selected category.
   */
  selectedCategory$: Observable<DaffCategory>;
  /**
   * The page configuration state for the selected category.
   */
  selectCategoryPageConfigurationState$: Observable<DaffCategoryPageConfigurationState>;
  /**
   * The loading state for retrieving a single category.
   */
  loading$: Observable<boolean>;
  /**
   * Errors associated with retrieving a single category.
   */
  errors$: Observable<string[]>;

  constructor(private store: Store<CategoryReducersState>) {
    this.selectedCategory$ = this.store.pipe(select(selectSelectedCategory));
    this.selectCategoryPageConfigurationState$ = this.store.pipe(select(selectCategoryPageConfigurationState));
    this.loading$ = this.store.pipe(select(selectCategoryLoading));
    this.errors$ = this.store.pipe(select(selectCategoryErrors));
  }

  /**
   * Dispatches the given action.
   * @param action action to dispatch.
   */
  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
