import { DaffStateError } from '@daffodil/core/state';
import { DaffGenericNavigationTree } from '@daffodil/navigation';

export interface DaffNavigationReducerState<T extends DaffGenericNavigationTree<T>> {
  navigationTree: T;
  loading: boolean;
  errors: DaffStateError[];
}
