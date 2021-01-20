import { Observable } from 'rxjs';
import { Store, Action } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';
import { DaffProductReducersState } from '../../reducers/product-reducers-state.interface';
import { DaffProduct } from '../../models/product';
import { DaffConfigurableProductFacadeInterface } from './configurable-product-facade.interface';
import { DaffConfigurableProductVariant } from '../../models/configurable-product';
/**
 * A facade for interacting with the configurable product state.
 * Exposes many parts of the state for easy access and allows dispatching of actions.
 *
 * See the <a href="docs/api/product/DaffConfigurableProductFacadeInterface">DaffConfigurableProductFacadeInterface docs</a> for more details.
 */
export declare class DaffConfigurableProductFacade<T extends DaffProduct = DaffProduct> implements DaffConfigurableProductFacadeInterface {
    private store;
    selectors: import("../../selectors/all-selectors.selectors").DaffProductAllSelectors<T>;
    constructor(store: Store<DaffProductReducersState<T>>);
    getAllAttributes(id: string): Observable<Dictionary<string[]>>;
    getAllVariants(id: string): Observable<DaffConfigurableProductVariant[]>;
    getAppliedAttributes(id: string): Observable<Dictionary<string>>;
    getMinimumPrice(id: string): Observable<number>;
    getMaximumPrice(id: string): Observable<number>;
    getMinimumDiscountedPrice(id: string): Observable<number>;
    getMaximumDiscountedPrice(id: string): Observable<number>;
    getMinimumPercentDiscount(id: string): Observable<number>;
    getMaximumPercentDiscount(id: string): Observable<number>;
    isPriceRanged(id: string): Observable<boolean>;
    hasDiscount(id: string): Observable<boolean>;
    getSelectableAttributes(id: string): Observable<Dictionary<string[]>>;
    getMatchingVariants(id: string): Observable<DaffConfigurableProductVariant[]>;
    /**
     * Dispatches an action to the rxjs action stream.
     */
    dispatch(action: Action): void;
}
