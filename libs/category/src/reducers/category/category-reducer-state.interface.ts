import { DaffCategoryPageConfigurationState } from '../../models/category-page-configuration-state';

export interface DaffCategoryReducerState<T extends DaffCategoryPageConfigurationState> {
  categoryPageConfigurationState: T,
  categoryLoading: boolean,
  productsLoading: boolean,
  errors: string[]
}
