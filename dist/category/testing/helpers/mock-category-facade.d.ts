import { BehaviorSubject } from 'rxjs';
import { Action } from '@ngrx/store';
import { DaffProduct } from '@daffodil/product';
import { DaffCategoryFacadeInterface, DaffCategory, DaffCategoryPageConfigurationState, DaffCategoryFilter, DaffCategorySortOption, DaffCategoryAppliedFilter, DaffSortDirectionEnum } from '@daffodil/category';
export declare class MockDaffCategoryFacade implements DaffCategoryFacadeInterface {
    category$: BehaviorSubject<DaffCategory>;
    pageConfigurationState$: BehaviorSubject<DaffCategoryPageConfigurationState>;
    currentPage$: BehaviorSubject<number>;
    totalPages$: BehaviorSubject<number>;
    totalProducts$: BehaviorSubject<number>;
    pageSize$: BehaviorSubject<number>;
    filters$: BehaviorSubject<DaffCategoryFilter[]>;
    sortOptions$: BehaviorSubject<DaffCategorySortOption[]>;
    appliedFilters$: BehaviorSubject<DaffCategoryAppliedFilter[]>;
    appliedSortOption$: BehaviorSubject<string>;
    appliedSortDirection$: BehaviorSubject<DaffSortDirectionEnum>;
    products$: BehaviorSubject<DaffProduct[]>;
    categoryLoading$: BehaviorSubject<boolean>;
    productsLoading$: BehaviorSubject<boolean>;
    errors$: BehaviorSubject<string[]>;
    isCategoryEmpty$: BehaviorSubject<boolean>;
    getCategoryById(id: string): BehaviorSubject<DaffCategory>;
    getProductsByCategory(categoryId: string): BehaviorSubject<DaffProduct[]>;
    getTotalProductsByCategory(categoryId: string): BehaviorSubject<number>;
    dispatch(action: Action): void;
}
