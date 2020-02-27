import { DaffCategoryPageConfigurationState } from '../../models/inputs/category-page-configuration-state';

export interface CategoryReducerState {
  categoryPageConfigurationState: DaffCategoryPageConfigurationState,
  loading: boolean,
  errors: string[]
}
