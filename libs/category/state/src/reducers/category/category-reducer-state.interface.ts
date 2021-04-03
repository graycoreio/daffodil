import { DaffCategoryPageMetadata } from '@daffodil/category';
import {
  DaffStateError,
  DaffMutableLoadingState,
  DaffStateable,
} from '@daffodil/core/state';


export interface DaffCategoryReducerState extends DaffStateable<DaffMutableLoadingState> {
	categoryPageMetadata: DaffCategoryPageMetadata;
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
