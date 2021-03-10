import {
  DaffCategoryRequest,
  DaffCategoryPageConfigurationState,
} from '@daffodil/category';

export interface DaffCategoryReducerState<
	T extends DaffCategoryRequest = DaffCategoryRequest,
	V extends DaffCategoryPageConfigurationState<T> = DaffCategoryPageConfigurationState<T>
> {
	categoryPageConfigurationState: V;
  categoryLoading: boolean;
  productsLoading: boolean;
  errors: string[];
}
