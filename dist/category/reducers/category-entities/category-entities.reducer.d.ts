import { EntityState } from '@ngrx/entity';
import { DaffProduct } from '@daffodil/product';
import { DaffCategoryActions } from '../../actions/category.actions';
import { DaffCategoryRequest } from '../../models/requests/category-request';
import { DaffCategoryPageConfigurationState } from '../../models/category-page-configuration-state';
import { DaffGenericCategory } from '../../models/generic-category';
import { DaffCategory } from '../../models/category';
export declare function daffCategoryEntitiesReducer<T extends DaffCategoryRequest = DaffCategoryRequest, V extends DaffGenericCategory<V> = DaffCategory, U extends DaffCategoryPageConfigurationState<T> = DaffCategoryPageConfigurationState<T>, W extends DaffProduct = DaffProduct>(state: EntityState<V>, action: DaffCategoryActions<T, V, U, W>): EntityState<V>;
