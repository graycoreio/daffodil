import { DaffCategoryPageConfigurationState } from '@daffodil/category';
import {
  DaffMutableLoadingState,
  DaffStateable,
} from '@daffodil/core/state';

export interface DaffStatefulCategoryPageConfigurationState extends DaffCategoryPageConfigurationState, DaffStateable<DaffMutableLoadingState> {}
