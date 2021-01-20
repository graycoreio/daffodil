import { Observable } from 'rxjs';
import { Store, Action } from '@ngrx/store';
import { DaffStoreFacade } from '@daffodil/core/state';
import { DaffOrder } from '../../models/order/order';
import { DaffOrderReducersState } from '../reducers/order-reducers.interface';
/**
 * A facade for accessing state for the currently selected category.
 */
/**
 * @deprecated
 */
export declare class DaffOrderFacade implements DaffStoreFacade<Action> {
    private store;
    /**
     * The current order.
     */
    order$: Observable<DaffOrder>;
    /**
     * The loading state for the current order.
     */
    loading$: Observable<boolean>;
    /**
     * Any errors involved in loading the order.
     */
    errors$: Observable<string[]>;
    constructor(store: Store<DaffOrderReducersState>);
    /**
     * Dispatches the given action.
     * @param action action to dispatch.
     */
    dispatch(action: Action): void;
}
