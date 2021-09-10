import { Dictionary } from '@ngrx/entity';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffStoreFacade } from '@daffodil/core/state';
import {
  DaffCompositeProductItemOption,
  DaffCompositeProductItem,
  DaffCompositeProduct,
  DaffPriceRange,
  DaffCompositeConfigurationItem,
} from '@daffodil/product';

/**
 * A facade for interacting with the composite product state.
 * Exposes many parts of the state for easy access and allows dispatching of actions.
 *
 * @deprecated import from @daffodil/composite-product/state instead.
 */
export interface DaffCompositeProductFacadeInterface extends DaffStoreFacade<Action> {

	/**
	 * Get a DaffPriceRange for a composite product based on the configuration provided excluding unselected, optional item prices.
	 *
	 * @param id an id for a composite product
	 * @param configuration a Dictionary of DaffCompositeConfigurationItems
	 */
	getRequiredItemPricesForConfiguration(id: DaffCompositeProduct['id'], configuration?: Dictionary<DaffCompositeConfigurationItem>): Observable<DaffPriceRange>;

	/**
	 * Get the broadest possible DaffPriceRange for a composite product based on the configuration provided including optional item prices.
	 *
	 * @param id the id of the composite product.
	 * @param configuration a Dictionary of DaffCompositeConfigurationItems
	 */
	getOptionalItemPricesForConfiguration(id: DaffCompositeProduct['id'], configuration?: Dictionary<DaffCompositeConfigurationItem>): Observable<DaffPriceRange>;

	/**
	 * Get the DaffPriceRange for a composite product based on the current configuration of selected item options in redux state and
	 * excluding unselected, optional item prices.
	 *
	 * @param id the id of the composite product.
	 */
	getPricesAsCurrentlyConfigured(id: DaffCompositeProduct['id']): Observable<DaffPriceRange>;

	/**
	 * Returns the applied options for a composite product.
	 *
	 * @param id the id of the composite product.
	 */
	getAppliedOptions(id: DaffCompositeProduct['id']): Observable<Dictionary<DaffCompositeProductItemOption>>;

	/**
	 * Returns whether the item of a composite product is required.
	 *
	 * @param id the id of the composite product.
	 * @param item_id the id of the item_id.
	 */
	isItemRequired(id: DaffCompositeProduct['id'], item_id: DaffCompositeProductItem['id']): Observable<boolean>;

	/**
	 * Returns whether a DaffPriceRange has a discount.
	 *
	 * @param priceRange a DaffPriceRange
	 */
	hasDiscount(priceRange: DaffPriceRange): boolean;

	/**
	 * Returns the discount amount of a composite product based on the current configuration of the selected item options in redux
	 * state and excluding unselected, optional item prices. Will return undefined if all required options are not chosen.
	 *
	 * @param id the id of the composite product.
	 */
	getDiscountAmount(id: DaffCompositeProduct['id']): Observable<number>;

	/**
	 * Returns the discount percent of a composite product based on the current configuration of the selected item options in redux
	 * state and excluding unselected, optional item prices. Will return undefined if all required options are not chosen.
	 * Note: This percent is computed client-side and should be treated as an estimate rather than an exact value.
	 *
	 * @param id the id of the composite product.
	 */
	getDiscountPercent(id: DaffCompositeProduct['id']): Observable<number>;

	/**
	 * Returns whether the min and max prices of a DaffPriceRange are different.
	 *
	 * @param priceRange a DaffPriceRange
	 */
	hasPriceRange(priceRange: DaffPriceRange): boolean;
}
