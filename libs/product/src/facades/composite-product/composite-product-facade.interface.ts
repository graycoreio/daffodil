import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';

import { DaffStoreFacade } from '@daffodil/core/state';

import { DaffCompositeProductItemOption, DaffCompositeProductItem } from '../../models/composite-product-item';
import { DaffCompositeProduct } from '../../models/composite-product';
import { DaffCompositeConfigurationItem } from '../../models/composite-configuration-item';
import { DaffProductPriceRange } from '../../models/pricing/public_api';

/**
 * A facade for interacting with the composite product state.
 * Exposes many parts of the state for easy access and allows dispatching of actions.
 */
export interface DaffCompositeProductFacadeInterface extends DaffStoreFacade<Action> {

	/**
	 * Get a DaffProductPriceRange for a composite product based on the configuration provided excluding unselected, optional item prices.
	 * @param id an id for a composite product
	 * @param configuration a Dictionary of DaffCompositeConfigurationItems
	 */
	getRequiredItemPricesForConfiguration(id: string, configuration?: Dictionary<DaffCompositeConfigurationItem>): Observable<DaffProductPriceRange>;

	/**
	 * Get the broadest possible DaffProductPriceRange for a composite product based on the configuration provided including optional item prices.
	 * @param id the id of the composite product.
	 */
	getOptionalItemPricesForConfiguration(id: string, configuration?: Dictionary<DaffCompositeConfigurationItem>): Observable<DaffProductPriceRange>;

	/**
	 * Get the DaffProductPriceRange for a composite product based on the current configuration of selected item options in redux state and
	 * excluding unselected, optional item prices.
	 * @param id the id of the composite product.
	 */
	getPricesAsCurrentlyConfigured(id: string): Observable<DaffProductPriceRange>;

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
	 * Returns whether a DaffProductPriceRange has a discount.
	 * @param priceRange a DaffProductPriceRange
	 */
	hasDiscount(priceRange: DaffProductPriceRange): boolean;

	/**
	 * Returns whether the min and max prices of a DaffProductPriceRange are different.
	 * @param priceRange a DaffProductPriceRange
	 */
	hasPriceRange(priceRange: DaffProductPriceRange): boolean;
}
