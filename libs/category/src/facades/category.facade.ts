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
  loading$: Observable<boolean>;
  errors$: Observable<string[]>;

  constructor(private store: Store<fromCategory.State>) {
    this.loading$ = this.store.pipe(select(fromCategory.selectCategoryLoading));
    this.errors$ = this.store.pipe(select(fromCategory.selectCategoryErrors));
  }

  getCategory(id: string): Observable<DaffCategory> {
    return this.store.pipe(select(fromCategory.selectCategory, { id: id }));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
