import { MemoizedSelector } from '@ngrx/store';
import { DaffOrder } from '@daffodil/order';
import { DaffOrderReducerState } from '../reducers/public_api';
export interface DaffOrderSelectors {
    selectOrderState: MemoizedSelector<object, DaffOrderReducerState>;
    selectOrderLoading: MemoizedSelector<object, boolean>;
    selectOrderErrors: MemoizedSelector<object, string[]>;
}
export declare const getOrderSelectors: <T extends DaffOrder = DaffOrder>() => DaffOrderSelectors;
