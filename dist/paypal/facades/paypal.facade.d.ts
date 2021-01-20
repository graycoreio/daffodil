import { Observable } from 'rxjs';
import { Store, Action } from '@ngrx/store';
import { DaffPaypalReducersState } from '../reducers/paypal-reducers.interface';
import { DaffPaypalFacadeInterface } from '../interfaces/paypal-facade.interface';
import { DaffPaypalTokenResponse } from '../models/paypal-token-response';
export declare class DaffPaypalFacade<T extends DaffPaypalTokenResponse = DaffPaypalTokenResponse> implements DaffPaypalFacadeInterface<T> {
    private store;
    /**
     * The entire DaffPaypalTokenResponse object.
     */
    paypalTokenResponse$: Observable<T>;
    /**
     * The paypal token nonce.
     */
    paypalToken$: Observable<string>;
    /**
     * A URL for the PayPal login page.
     */
    paypalStartUrl$: Observable<string>;
    /**
     * A PayPal URL that allows a customer to edit their checkout details.
     */
    paypalEditUrl$: Observable<string>;
    /**
     * The loading state for retrieving a single paypal.
     */
    loading$: Observable<boolean>;
    /**
     * Errors associated with retrieving a single paypal.
     */
    error$: Observable<string>;
    constructor(store: Store<DaffPaypalReducersState<T>>);
    /**
     * Dispatches the given action.
     * @param action action to dispatch.
     */
    dispatch(action: Action): void;
}
