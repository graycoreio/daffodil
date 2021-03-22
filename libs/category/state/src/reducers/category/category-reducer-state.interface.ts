import { DaffStateError } from '@daffodil/core/state';

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
  errors: DaffStateError[];
}
