import { Observable } from 'rxjs';
import { Store, Action } from '@ngrx/store';
import { DaffAddress } from '@daffodil/core';
import { DaffStoreFacade } from '@daffodil/core/state';
import { DaffBillingReducersState } from '../reducers/billing-reducers.interface';
import { PaymentInfo } from '../../models/payment/payment-info';
/**
 * A facade for accessing state for the billing information of a customer
 */
export declare class DaffBillingFacade implements DaffStoreFacade<Action> {
    private store;
    /**
     * The billing address for a customer.
     */
    billingAddress$: Observable<DaffAddress>;
    /**
     * Whether or not the billing address is the same as the shipping address.
     */
    billingAddressIsShippingAddress$: Observable<boolean>;
    /**
     * The payment information for a customer.
     */
    paymentInfo$: Observable<PaymentInfo>;
    constructor(store: Store<DaffBillingReducersState>);
    /**
     * Dispatches the given action.
     * @param action action to dispatch.
     */
    dispatch(action: Action): void;
}
