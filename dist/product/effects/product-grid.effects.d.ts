import { Observable } from 'rxjs';
import { Actions } from '@ngrx/effects';
import { DaffProductServiceInterface } from '../drivers/interfaces/product-service.interface';
import { DaffProduct } from '../models/product';
/**
 * Effects for handling product grid actions and for triggering corresponding service requests.
 *
 * @param action$ - Redux action object
 * @param driver - A product service driver
 */
export declare class DaffProductGridEffects<T extends DaffProduct> {
    private actions$;
    private driver;
    constructor(actions$: Actions, driver: DaffProductServiceInterface<T>);
    /**
     * Handles ProductGridLoadAction by making a service call for products and returning a success or failure action
     * to the action stream.
     *
     * @returns An Observable of a DaffProductGridAction
     */
    loadAll$: Observable<any>;
}
