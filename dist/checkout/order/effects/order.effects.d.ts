import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { DaffCheckoutServiceInterface } from '../../drivers/interfaces/checkout-service.interface';
/**
 * @deprecated
 */
export declare class OrderEffects {
    private actions$;
    private checkoutDriver;
    constructor(actions$: Actions, checkoutDriver: DaffCheckoutServiceInterface);
    onPlaceOrder$: Observable<any>;
}
