import { MemoizedSelector } from '@ngrx/store';
import { DaffGenericNavigationTree } from '@daffodil/navigation';
import { DaffNavigationReducersState, DaffNavigationReducerState } from '../reducers/public_api';
export interface DaffNavigationMemoizedSelectors<T extends DaffGenericNavigationTree<T>> {
    selectNavigationFeatureState: MemoizedSelector<object, DaffNavigationReducersState<T>>;
    selectNavigationState: MemoizedSelector<object, DaffNavigationReducerState<T>>;
    selectNavigationTree: MemoizedSelector<object, T>;
    selectNavigationLoading: MemoizedSelector<object, boolean>;
    selectNavigationErrors: MemoizedSelector<object, string[]>;
}
export declare const getDaffNavigationSelectors: <T extends DaffGenericNavigationTree<T>>() => DaffNavigationMemoizedSelectors<T>;
