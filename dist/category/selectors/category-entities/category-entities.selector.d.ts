import { MemoizedSelector } from '@ngrx/store';
import { Dictionary, EntityState } from '@ngrx/entity';
import { DaffGenericCategory } from '../../models/generic-category';
import { DaffCategoryRequest } from '../../models/requests/category-request';
import { DaffCategoryPageConfigurationState } from '../../models/category-page-configuration-state';
import { DaffCategory } from '../../models/category';
export interface DaffCategoryEntitiesMemoizedSelectors<V extends DaffGenericCategory<V> = DaffCategory> {
    selectCategoryEntitiesState: MemoizedSelector<object, EntityState<V>>;
    selectCategoryIds: MemoizedSelector<object, EntityState<V>['ids']>;
    selectCategoryEntities: MemoizedSelector<object, Dictionary<V>>;
    selectAllCategories: MemoizedSelector<object, V[]>;
    selectCategoryTotal: MemoizedSelector<object, number>;
}
export declare const getDaffCategoryEntitiesSelectors: <T extends DaffCategoryRequest, V extends DaffGenericCategory<V>, U extends DaffCategoryPageConfigurationState<T>>() => DaffCategoryEntitiesMemoizedSelectors<V>;
