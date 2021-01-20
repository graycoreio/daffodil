import { MemoizedSelector } from '@ngrx/store';
import { DaffOrder } from '@daffodil/order';
import { DaffOrderReducersState } from '../reducers/public_api';
export interface DaffOrderFeatureSelector<T extends DaffOrder = DaffOrder> {
    selectOrderFeatureState: MemoizedSelector<object, DaffOrderReducersState<T>>;
}
export declare const getDaffOrderReducersStateSelector: <T extends DaffOrder = DaffOrder>() => DaffOrderFeatureSelector<T>;
