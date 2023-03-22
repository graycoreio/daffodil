import { DaffCategory } from '@daffodil/category';
import { DaffOperationState } from '@daffodil/core/state';


export interface DaffCategoryReducerState extends DaffOperationState {
  /**
   * The ID of the currently loaded category.
   */
  id: DaffCategory['id'];
}
