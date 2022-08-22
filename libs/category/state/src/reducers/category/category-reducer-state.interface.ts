import { DaffCategory } from '@daffodil/category';
import {
  DaffStateError,
  DaffMutableLoadingState,
  DaffStateable,
} from '@daffodil/core/state';


export interface DaffCategoryReducerState extends DaffStateable<DaffMutableLoadingState> {
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

  /**
   * The ID of the currently loaded category.
   */
  id: DaffCategory['id'];
}
