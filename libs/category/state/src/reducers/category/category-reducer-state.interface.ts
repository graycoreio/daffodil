import { DaffStatefulCategoryPageConfigurationState } from '../../models/stateful-category-page-configuration-state.interface';

export interface DaffCategoryReducerState {
	categoryPageConfigurationState: DaffStatefulCategoryPageConfigurationState;
  categoryLoading: boolean;
  productsLoading: boolean;
  errors: string[];
}
