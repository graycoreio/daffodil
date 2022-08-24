import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';

import {
  DaffCategory,
  DaffCategoryPageMetadata,
} from '@daffodil/category';
import { DaffCategoryFacadeInterface } from '@daffodil/category/state';
import { DaffCategoryReducerState } from '@daffodil/category/state';
import {
  DaffSortDirectionEnum,
  DaffSortOption,

} from '@daffodil/core';
import { DaffStateError } from '@daffodil/core/state';
import {
  DaffProduct,
  DaffProductFilter,
} from '@daffodil/product';

/**
 * Can be used to mock out the {@link DaffCategoryFacade} in testing environments.
 *
 * @inheritdoc
 */
@Injectable({ providedIn: 'root' })
export class MockDaffCategoryFacade implements DaffCategoryFacadeInterface {

  category$: BehaviorSubject<DaffCategory> = new BehaviorSubject(null);
  pageLoadingState$: BehaviorSubject<DaffCategoryReducerState['daffState']> = new BehaviorSubject(null);
  isPageMutating$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  isPageResolving$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  products$: BehaviorSubject<DaffProduct[]> = new BehaviorSubject([]);
  categoryLoading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  productsLoading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  errors$: BehaviorSubject<DaffStateError[]> = new BehaviorSubject([]);
  isCategoryEmpty$: BehaviorSubject<boolean> = new BehaviorSubject(true);

  getCategoryById(id: DaffCategory['id']): BehaviorSubject<DaffCategory> {
	  return new BehaviorSubject(null);
  };
  getProductsByCategory(categoryId: DaffCategory['id']): BehaviorSubject<DaffProduct[]> {
	  return new BehaviorSubject([]);
  };
  getTotalProductsByCategory(categoryId: DaffCategory['id']): BehaviorSubject<number> {
	  return new BehaviorSubject(null);
  };
  dispatch(action: Action) {};
}
