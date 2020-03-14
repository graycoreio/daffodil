import { DaffCategoryPageConfigurationState } from '../../models/category-page-configuration-state';

export interface CategoryReducerState {
  categoryPageConfigurationState: DaffCategoryPageConfigurationState,
  categoryLoading: boolean,
  productsLoading: boolean,
  errors: string[]
}
