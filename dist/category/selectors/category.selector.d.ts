import { MemoizedSelector, MemoizedSelectorWithProps } from '@ngrx/store';
import { DaffProduct } from '@daffodil/product';
import { DaffCategoryPageConfigurationState } from '../models/category-page-configuration-state';
import { DaffGenericCategory } from '../models/generic-category';
import { DaffCategoryRequest } from '../models/requests/category-request';
import { DaffCategoryFeatureMemoizedSelectors } from './category-feature.selector';
import { DaffCategoryPageMemoizedSelectors } from './category-page/category-page.selector';
import { DaffCategoryEntitiesMemoizedSelectors } from './category-entities/category-entities.selector';
import { DaffCategory } from '../models/category';
export interface DaffCategoryMemoizedSelectors<T extends DaffCategoryRequest = DaffCategoryRequest, V extends DaffGenericCategory<V> = DaffCategory, U extends DaffCategoryPageConfigurationState<T> = DaffCategoryPageConfigurationState<T>, W extends DaffProduct = DaffProduct> extends DaffCategoryFeatureMemoizedSelectors<T, V, U>, DaffCategoryPageMemoizedSelectors<T, V, U>, DaffCategoryEntitiesMemoizedSelectors<V> {
    selectSelectedCategory: MemoizedSelector<object, V>;
    selectCategoryPageProducts: MemoizedSelector<object, W[]>;
    selectCategory: MemoizedSelectorWithProps<object, object, V>;
    selectProductsByCategory: MemoizedSelectorWithProps<object, object, W[]>;
    selectTotalProductsByCategory: MemoizedSelectorWithProps<object, object, number>;
}
export declare const getDaffCategorySelectors: <T extends DaffCategoryRequest = DaffCategoryRequest, V extends DaffGenericCategory<V> = DaffCategory, U extends DaffCategoryPageConfigurationState<T> = DaffCategoryPageConfigurationState<T>, W extends DaffProduct = DaffProduct>() => DaffCategoryMemoizedSelectors<T, V, U, W>;
