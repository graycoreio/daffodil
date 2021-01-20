import { Observable } from 'rxjs';
import { Store, Action } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';
import { DaffProductReducersState } from '../../reducers/product-reducers-state.interface';
import { DaffProduct } from '../../models/product';
import { DaffCompositeProductFacadeInterface } from './composite-product-facade.interface';
import { DaffCompositeProductItemOption, DaffCompositeProductItem } from '../../models/composite-product-item';
import { DaffCompositeProduct } from '../../models/composite-product';
import { DaffPriceRange } from '../../models/prices';
import { DaffCompositeConfigurationItem } from '../../models/composite-configuration-item';
/**
 * A facade for interacting with the composite product state.
 * Exposes many parts of the state for easy access and allows dispatching of actions.
 *
 * See the <a href="docs/api/product/DaffCompositeProductFacadeInterface">DaffCompositeProductFacadeInterface docs</a> for more details.
 */
export declare class DaffCompositeProductFacade<T extends DaffProduct = DaffProduct> implements DaffCompositeProductFacadeInterface {
    private store;
    constructor(store: Store<DaffProductReducersState<T>>);
    selectors: import("../../selectors/all-selectors.selectors").DaffProductAllSelectors<T>;
    /**
     * Returns whether a DaffPriceRange has a discount.
     * @param priceRange a DaffPriceRange
     */
    hasDiscount: (priceRange: DaffPriceRange) => boolean;
    /**
     * Returns whether the min and max prices of a DaffPriceRange are different.
     * @param priceRange a DaffPriceRange
     */
    hasPriceRange: (priceRange: DaffPriceRange) => boolean;
    getRequiredItemPricesForConfiguration(id: string, configuration?: Dictionary<DaffCompositeConfigurationItem>): Observable<DaffPriceRange>;
    getOptionalItemPricesForConfiguration(id: string, configuration?: Dictionary<DaffCompositeConfigurationItem>): Observable<DaffPriceRange>;
    getPricesAsCurrentlyConfigured(id: string): Observable<DaffPriceRange>;
    getAppliedOptions(id: string): Observable<Dictionary<DaffCompositeProductItemOption>>;
    isItemRequired(id: DaffCompositeProduct['id'], item_id: DaffCompositeProductItem['id']): Observable<boolean>;
    /**
     * Dispatches an action to the rxjs action stream.
     */
    dispatch(action: Action): void;
}
