import { DaffCategoryPageConfigurationState } from '../../models/category-page-configuration-state';

export interface CategoryReducerState {
  categoryPageConfigurationState: DaffCategoryPageConfigurationState,
  loading: boolean,
  errors: string[]
}
