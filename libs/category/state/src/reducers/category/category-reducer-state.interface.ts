import { DaffCategoryPageMetadata } from '@daffodil/category';
import {
  DaffStateError,
  DaffMutableLoadingState,
  DaffStateable,
} from '@daffodil/core/state';


export interface DaffCategoryReducerState extends DaffStateable<DaffMutableLoadingState> {
	/**
	 * The metadata for the current category page.
	 */
	categoryPageMetadata: DaffCategoryPageMetadata;
  /**
   * @deprecated
   */
  categoryLoading: boolean;
  /**
   * @deprecated
   */
  productsLoading: boolean;
	/**
	 * Errors associated with loading categories.
	 */
  errors: DaffStateError[];
}
