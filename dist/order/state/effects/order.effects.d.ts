import { Actions } from '@ngrx/effects';
import { DaffCart } from '@daffodil/cart';
import { DaffOrder } from '@daffodil/order';
import { DaffOrderServiceInterface } from '@daffodil/order/driver';
import { DaffOrderLoadSuccess, DaffOrderLoadFailure, DaffOrderListSuccess, DaffOrderListFailure } from '../actions/order.actions';
export declare class DaffOrderEffects<T extends DaffOrder = DaffOrder, V extends DaffCart = DaffCart> {
    private actions$;
    private driver;
    constructor(actions$: Actions, driver: DaffOrderServiceInterface<T>);
    /**
     * An effect for the loading of an order.
     */
    get$: import("rxjs").Observable<DaffOrderLoadFailure | DaffOrderLoadSuccess<T>>;
    /**
     * An effect for the listing of orders.
     */
    list$: import("rxjs").Observable<DaffOrderListFailure | DaffOrderListSuccess<T>>;
}
