import { DaffGenericNavigationTree } from '@daffodil/navigation';
import { DaffNavigationReducerState } from '../reducers/navigation/navigation-reducer-state.interface';
export interface DaffNavigationReducersState<T extends DaffGenericNavigationTree<T>> {
    navigation: DaffNavigationReducerState<T>;
}
