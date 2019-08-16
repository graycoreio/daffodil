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
  loading$: Observable<boolean>;
  categories$: Observable<DaffCategory[]>;
  errors$: Observable<string[]>;

  constructor(private store: Store<fromCategory.State>) {
    this.loading$ = this.store.pipe(select(fromCategory.selectCategoriesLoading));
    this.categories$ = this.store.pipe(select(fromCategory.selectAllCategories));
    this.errors$ = this.store.pipe(select(fromCategory.selectCategoriesErrors));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
