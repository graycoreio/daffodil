import {
  DaffCategoryRequest,
  DaffCategoryPageConfigurationState,
} from '@daffodil/category';

export interface DaffCategoryReducerState {
	categoryPageConfigurationState: DaffCategoryPageConfigurationState;
  categoryLoading: boolean;
  productsLoading: boolean;
  errors: string[];
}
