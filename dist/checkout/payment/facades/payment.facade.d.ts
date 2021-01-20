import { Observable } from 'rxjs';
import { Store, Action } from '@ngrx/store';
import { DaffStoreFacade } from '@daffodil/core/state';
import { DaffPaymentReducersState } from '../reducers/payment-reducers.interface';
import { PaymentInfo } from '../../models/payment/payment-info';
/**
 * A facade for accessing state for customer payment information.
 */
export declare class DaffPaymentFacade implements DaffStoreFacade<Action> {
    private store;
    /**
     * The payment information for a customer.
     */
    paymentInfo$: Observable<PaymentInfo>;
    constructor(store: Store<DaffPaymentReducersState>);
    /**
     * Dispatches the given action.
     * @param action action to dispatch.
     */
    dispatch(action: Action): void;
}
