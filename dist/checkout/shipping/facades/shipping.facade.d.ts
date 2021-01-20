import { Observable } from 'rxjs';
import { Store, Action } from '@ngrx/store';
import { DaffAddress } from '@daffodil/core';
import { DaffStoreFacade } from '@daffodil/core/state';
import { DaffShippingReducersState } from '../reducers/shipping-reducers.interface';
/**
 * A facade for accessing state for shipping information.
 */
export declare class DaffShippingFacade implements DaffStoreFacade<Action> {
    private store;
    /**
     * The shipping address for the customer.
     */
    shippingAddress$: Observable<DaffAddress>;
    /**
     * The selected shipping option id.
     */
    selectedShippingOptionId$: Observable<string>;
    /**
     * Is the shipping address valid.
     */
    isShippingAddressValid$: Observable<boolean>;
    constructor(store: Store<DaffShippingReducersState>);
    /**
     * Dispatches the given action.
     * @param action action to dispatch.
     */
    dispatch(action: Action): void;
}
