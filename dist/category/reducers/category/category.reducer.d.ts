import { DaffProduct } from '@daffodil/product';
import { DaffCategoryActions } from '../../actions/category.actions';
import { DaffCategoryReducerState } from './category-reducer-state.interface';
import { DaffCategoryRequest } from '../../models/requests/category-request';
import { DaffCategoryPageConfigurationState } from '../../models/category-page-configuration-state';
import { DaffGenericCategory } from '../../models/generic-category';
export declare function daffCategoryReducer<T extends DaffCategoryRequest, U extends DaffGenericCategory<U>, V extends DaffCategoryPageConfigurationState<T>, W extends DaffProduct>(state: DaffCategoryReducerState<any, any>, action: DaffCategoryActions<T, U, V, W>): DaffCategoryReducerState<T, V>;
