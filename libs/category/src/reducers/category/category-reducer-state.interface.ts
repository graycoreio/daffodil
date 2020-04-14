import { DaffCategoryPageConfigurationState } from '../../models/category-page-configuration-state';
import { DaffCategoryRequest } from '../../models/requests/category-request';

export interface DaffCategoryReducerState<
	T extends DaffCategoryRequest = DaffCategoryRequest, 
	V extends DaffCategoryPageConfigurationState<T> = DaffCategoryPageConfigurationState<T>
> {
	categoryPageConfigurationState: V,
  categoryLoading: boolean,
  productsLoading: boolean,
  errors: string[]
}
