import { Observable } from 'rxjs';
import { Actions } from '@ngrx/effects';
import { DaffProductServiceInterface } from '../drivers/interfaces/product-service.interface';
import { DaffProduct } from '../models/product';
/**
 * Effects for handling best seller actions and best seller service requests.
 *
 * @param action$ - Redux action object
 * @param driver - A product service driver
 */
export declare class DaffBestSellersEffects<T extends DaffProduct> {
    private actions$;
    private driver;
    constructor(actions$: Actions, driver: DaffProductServiceInterface<T>);
    /**
     * Handles BestSellersLoadAction by making a service call for best selling products and returning a success or failure action
     * to the action stream.
     *
     * @returns An Observable of a BestSellersLoad action
     */
    loadBestSellers$: Observable<any>;
}
