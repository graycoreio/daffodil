import { MemoizedSelector } from '@ngrx/store';
import { DaffCategoryRequest } from '../../models/requests/category-request';
import { DaffGenericCategory } from '../../models/generic-category';
import { DaffCategoryPageConfigurationState } from '../../models/category-page-configuration-state';
import { DaffCategoryReducerState } from '../../reducers/category/category-reducer-state.interface';
import { DaffCategoryAppliedFilter } from '../../models/category-applied-filter';
import { DaffCategory } from '../../models/category';
export interface DaffCategoryPageMemoizedSelectors<T extends DaffCategoryRequest = DaffCategoryRequest, V extends DaffGenericCategory<V> = DaffCategory, U extends DaffCategoryPageConfigurationState<T> = DaffCategoryPageConfigurationState<T>> {
    selectCategoryState: MemoizedSelector<object, DaffCategoryReducerState<T, U>>;
    selectCategoryPageConfigurationState: MemoizedSelector<object, U>;
    selectCategoryCurrentPage: MemoizedSelector<object, U['current_page']>;
    selectCategoryTotalPages: MemoizedSelector<object, U['total_pages']>;
    selectCategoryPageSize: MemoizedSelector<object, U['page_size']>;
    selectCategoryFilters: MemoizedSelector<object, U['filters']>;
    selectCategorySortOptions: MemoizedSelector<object, U['sort_options']>;
    selectCategoryPageProductIds: MemoizedSelector<object, U['product_ids']>;
    selectIsCategoryPageEmpty: MemoizedSelector<object, boolean>;
    selectCategoryPageTotalProducts: MemoizedSelector<object, U['total_products']>;
    selectCategoryPageFilterRequests: MemoizedSelector<object, U['filter_requests']>;
    selectCategoryPageAppliedFilters: MemoizedSelector<object, DaffCategoryAppliedFilter[]>;
    selectCategoryPageAppliedSortOption: MemoizedSelector<object, U['applied_sort_option']>;
    selectCategoryPageAppliedSortDirection: MemoizedSelector<object, U['applied_sort_direction']>;
    selectSelectedCategoryId: MemoizedSelector<object, U['id']>;
    selectCategoryLoading: MemoizedSelector<object, boolean>;
    selectCategoryProductsLoading: MemoizedSelector<object, boolean>;
    selectCategoryErrors: MemoizedSelector<object, string[]>;
}
export declare const getDaffCategoryPageSelectors: <T extends DaffCategoryRequest, V extends DaffGenericCategory<V>, U extends DaffCategoryPageConfigurationState<T>>() => DaffCategoryPageMemoizedSelectors<T, V, U>;
