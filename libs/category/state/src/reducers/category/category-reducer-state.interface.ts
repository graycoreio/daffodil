import { DaffStatefulCategoryPageConfigurationState } from '../../models/stateful-category-page-configuration-state.interface';

export interface DaffCategoryReducerState {
	categoryPageConfigurationState: DaffStatefulCategoryPageConfigurationState;
  /**
   * @deprecated
   */
  categoryLoading: boolean;
  /**
   * @deprecated
   */
  productsLoading: boolean;
  errors: string[];
}
