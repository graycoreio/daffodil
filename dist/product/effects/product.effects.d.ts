import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { DaffProductServiceInterface } from '../drivers/interfaces/product-service.interface';
import { DaffProduct } from '../models/product';
/**
 * Effects for handling product actions and for triggering corresponding service requests.
 *
 * @param action$ - Redux action object
 * @param driver - A product service driver
 */
export declare class DaffProductEffects<T extends DaffProduct> {
    private actions$;
    private driver;
    constructor(actions$: Actions, driver: DaffProductServiceInterface<T>);
    /**
    * Handles ProductLoadAction by making a service call for a product and returning a success or
    * failure action to the action stream.
    *
    * @returns An Observable of a ProductLoadAction
    */
    load$: Observable<any>;
}
