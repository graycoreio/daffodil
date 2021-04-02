import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';

import {
  DaffCategory,
  DaffCategoryFilter,
  DaffCategoryPageMetadata,
} from '@daffodil/category';
import { DaffCategoryFacadeInterface } from '@daffodil/category/state';
import { DaffCategoryReducerState } from '@daffodil/category/state';
import { Dict } from '@daffodil/core';
import {
  DaffSortDirectionEnum,
  DaffSortOption,
  DaffStateError,
} from '@daffodil/core/state';
import { DaffProduct } from '@daffodil/product';

@Injectable({ providedIn: 'root' })
export class MockDaffCategoryFacade implements DaffCategoryFacadeInterface {

  category$: BehaviorSubject<DaffCategory> = new BehaviorSubject(null);
  metadata$: BehaviorSubject<DaffCategoryPageMetadata> = new BehaviorSubject(null);
  pageLoadingState$: BehaviorSubject<DaffCategoryReducerState['daffState']> = new BehaviorSubject(null);
  isPageMutating$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  isPageResolving$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  currentPage$: BehaviorSubject<number> = new BehaviorSubject(null);
	totalPages$: BehaviorSubject<number> = new BehaviorSubject(null);
	totalProducts$: BehaviorSubject<number> = new BehaviorSubject(null);
  pageSize$: BehaviorSubject<number> = new BehaviorSubject(null);
  filters$: BehaviorSubject<Dict<DaffCategoryFilter>> = new BehaviorSubject({});
  sortOptions$: BehaviorSubject<DaffSortOption[]> = new BehaviorSubject([]);
  appliedFilters$: BehaviorSubject<Dict<DaffCategoryFilter>> = new BehaviorSubject({});
  appliedSortOption$: BehaviorSubject<string> = new BehaviorSubject(null);
  appliedSortDirection$: BehaviorSubject<DaffSortDirectionEnum> = new BehaviorSubject(null);
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
