import { DaffGenericNavigationTree } from '@daffodil/navigation';
import { DaffNavigationActions } from '../../actions/navigation.actions';
import { DaffNavigationReducerState } from './navigation-reducer-state.interface';
export declare const initialState: DaffNavigationReducerState<any>;
export declare function daffNavigationReducer<T extends DaffGenericNavigationTree<T>>(state: DaffNavigationReducerState<T>, action: DaffNavigationActions<T>): DaffNavigationReducerState<T>;
