import { Observable } from 'rxjs';
import { Store, Action } from '@ngrx/store';
import { DaffProductReducersState } from '../../reducers/product-reducers-state.interface';
import { DaffProduct } from '../../models/product';
import { DaffProductFacadeInterface } from './product-facade.interface';
/**
 * A facade for getting state about a particular product.
 *
 * See the <a href="docs/api/product/DaffProductFacadeInterface">DaffProductFacadeInterface docs</a> for more details.
 */
export declare class DaffProductFacade<T extends DaffProduct = DaffProduct> implements DaffProductFacadeInterface<T> {
    private store;
    loading$: Observable<boolean>;
    product$: Observable<T>;
    private selectors;
    constructor(store: Store<DaffProductReducersState<T>>);
    getProduct(id: string): Observable<T>;
    getPrice(id: string): Observable<number>;
    hasDiscount(id: string): Observable<boolean>;
    getDiscountAmount(id: string): Observable<number>;
    getDiscountedPrice(id: string): Observable<number>;
    getDiscountPercent(id: string): Observable<number>;
    isOutOfStock(id: string): Observable<boolean>;
    /**
     * Dispatches an action to the rxjs action stream.
     */
    dispatch(action: Action): void;
}
