import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';
import { DaffStoreFacade } from '@daffodil/core/state';
import { DaffCompositeProductItemOption, DaffCompositeProductItem } from '../../models/composite-product-item';
import { DaffCompositeProduct } from '../../models/composite-product';
import { DaffPriceRange } from '../../models/prices';
import { DaffCompositeConfigurationItem } from '../../models/composite-configuration-item';
/**
 * A facade for interacting with the composite product state.
 * Exposes many parts of the state for easy access and allows dispatching of actions.
 */
export interface DaffCompositeProductFacadeInterface extends DaffStoreFacade<Action> {
    /**
     * Get a DaffPriceRange for a composite product based on the configuration provided excluding unselected, optional item prices.
     * @param id an id for a composite product
     * @param configuration a Dictionary of DaffCompositeConfigurationItems
     */
    getRequiredItemPricesForConfiguration(id: string, configuration?: Dictionary<DaffCompositeConfigurationItem>): Observable<DaffPriceRange>;
    /**
     * Get the broadest possible DaffPriceRange for a composite product based on the configuration provided including optional item prices.
     * @param id the id of the composite product.
     */
    getOptionalItemPricesForConfiguration(id: string, configuration?: Dictionary<DaffCompositeConfigurationItem>): Observable<DaffPriceRange>;
    /**
     * Get the DaffPriceRange for a composite product based on the current configuration of selected item options in redux state and
     * excluding unselected, optional item prices.
     * @param id the id of the composite product.
     */
    getPricesAsCurrentlyConfigured(id: string): Observable<DaffPriceRange>;
    /**
     * Returns the applied options for a composite product.
     * @param id the id of the composite product.
     */
    getAppliedOptions(id: string): Observable<Dictionary<DaffCompositeProductItemOption>>;
    /**
     * Returns whether the item of a composite product is required.
     * @param id the id of the composite product.
     * @param item_id the id of the item_id.
     */
    isItemRequired(id: DaffCompositeProduct['id'], item_id: DaffCompositeProductItem['id']): Observable<boolean>;
    /**
     * Returns whether a DaffPriceRange has a discount.
     * @param priceRange a DaffPriceRange
     */
    hasDiscount(priceRange: DaffPriceRange): boolean;
    /**
     * Returns whether the min and max prices of a DaffPriceRange are different.
     * @param priceRange a DaffPriceRange
     */
    hasPriceRange(priceRange: DaffPriceRange): boolean;
}
