import { createSelector, MemoizedSelectorWithProps } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';

import { daffAdd, daffMultiply, daffSubtract } from '@daffodil/core';

import { DaffProduct, DaffProductTypeEnum } from '../../models/product';
import { getDaffCompositeProductEntitiesSelectors } from '../composite-product-entities/composite-product-entities.selectors';
import { getDaffProductEntitiesSelectors } from '../product-entities/product-entities.selectors';
import { DaffCompositeProduct } from '../../models/composite-product';
import { DaffCompositeProductItem, DaffCompositeProductItemOption } from '../../models/composite-product-item';
import { DaffProductPrices, DaffPriceRange } from '../../models/prices';
import { DaffCompositeConfigurationItem } from '../../models/composite-configuration-item';

export interface DaffCompositeProductMemoizedSelectors {
	/**
	 * Get a DaffPriceRange for a composite product based on the configuration provided excluding unselected, optional item prices.
	 */
	selectCompositeProductPricesForConfiguration: MemoizedSelectorWithProps<object, { id: string, configuration?: Dictionary<DaffCompositeConfigurationItem> }, DaffPriceRange>;
	/**
	 * Get the broadest possible DaffPriceRange for a composite product excluding optional item prices.
	 */
	selectCompositeProductPrices: MemoizedSelectorWithProps<object, { id: string }, DaffPriceRange>;
	/**
	 * Get the DaffPriceRange for a composite product based on the current configuration of selected item options in redux state and
	 * excluding unselected, optional item prices.
	 */
	selectCompositeProductPricesAsCurrentlyConfigured: MemoizedSelectorWithProps<object, { id: string }, DaffPriceRange>;
}

const createCompositeProductSelectors = (): DaffCompositeProductMemoizedSelectors => {

	const {
		selectProductEntities,
		selectProduct
	} = getDaffProductEntitiesSelectors();

	const {
		selectCompositeProductAppliedOptionsEntitiesState
	} = getDaffCompositeProductEntitiesSelectors();

	const selectCompositeProductPricesForConfiguration = createSelector(
		selectProductEntities,
		(products, props) => {
			const product = selectProduct.projector(products, { id: props.id });
			if(product.type !== DaffProductTypeEnum.Composite) {
				return undefined;
			}

			const appliedOptions = props.configuration ? getAppliedOptionsForConfiguration(<DaffCompositeProduct>product, props.configuration) : null;
			return {
				minPrice: getMinPricesForConfiguration(<DaffCompositeProduct>product, appliedOptions),
				maxPrice: getMaxPricesForConfiguration(<DaffCompositeProduct>product, appliedOptions)
			}
		}
	);

	const selectCompositeProductPrices = createSelector(
		selectProductEntities,
		(products, props) => {
			const product = selectProduct.projector(products, { id: props.id });
			if(product.type !== DaffProductTypeEnum.Composite) {
				return undefined;
			}

			return {
				minPrice: getMinPricesForConfiguration(<DaffCompositeProduct>product, null),
				maxPrice: getMaxPricesIncludingOptionalItems(<DaffCompositeProduct>product)
			}
		}
	);

	const selectCompositeProductPricesAsCurrentlyConfigured = createSelector(
		selectProductEntities,
		selectCompositeProductAppliedOptionsEntitiesState,
		//todo use optional chaining when possible
		(products, appliedOptionsEntities, props) => selectCompositeProductPricesForConfiguration.projector(products, {
			id: props.id, 
			configuration: appliedOptionsEntities.entities[props.id] ? appliedOptionsEntities.entities[props.id].items : null
		})
	);

	return { 
		selectCompositeProductPricesForConfiguration,
		selectCompositeProductPrices,
		selectCompositeProductPricesAsCurrentlyConfigured
	}
}

export const getDaffCompositeProductSelectors = (() => {
	let cache;
	return (): DaffCompositeProductMemoizedSelectors => cache = cache 
		? cache 
		: createCompositeProductSelectors();
})();

/**
 * The minimum price of an item is zero if the item is optional.
 * @param item DaffCompositeProductItem
 */
function getMinimumRequiredCompositeItemPrice(item: DaffCompositeProductItem): number {
	return item.required ? Math.min(...item.options.map(option => option.price)) : 0;
}

/**
 * The maximum price for an item is zero if the item is optional.
 * @param item DaffCompositeProductItem
 */
function getMaximumRequiredCompositeItemPrice(item: DaffCompositeProductItem): number {
	return item.required ? Math.max(...item.options.map(option => option.price)) : 0;
}

/**
 * The minimum discounted price of an item is zero if the item is optional.
 * @param item DaffCompositeProductItem
 */
//todo use optional chaining when possible
function getMinimumRequiredCompositeItemDiscountedPrice(item: DaffCompositeProductItem): number {
	return item.required ? Math.min(...item.options.map(option =>
		daffSubtract(option.price, option.discount ? option.discount.amount : 0)
	)) : 0;
}
/**
 * The maximum discounted price of an item is zero if the item is optional.
 * @param item DaffCompositeProductItem
 */
//todo use optional chaining when possible
function getMaximumRequiredCompositeItemDiscountedPrice(item: DaffCompositeProductItem): number {
	return item.required ? Math.max(...item.options.map(option => 
		daffSubtract(option.price, option.discount ? option.discount.amount : 0)
	)) : 0;
}

/**
 * Gets the minimum prices of a composite product for the configuration provided excluding unselected, optional item prices.
 * @param product a DaffCompositeProduct
 * @param appliedOptions a Dictionary<DaffCompositeProductItemOption> that determines the current configuration of the composite product.
 */
function getMinPricesForConfiguration(product: DaffCompositeProduct, appliedOptions: Dictionary<DaffCompositeProductItemOption>): DaffProductPrices {
	return {
		discountedPrice: product.items.reduce((acc, item) => daffAdd(
			acc, 
			appliedOptions && appliedOptions[item.id] ? 
				daffMultiply(
					appliedOptions[item.id].discount ? daffSubtract(appliedOptions[item.id].price, appliedOptions[item.id].discount.amount) : appliedOptions[item.id].price, 
					appliedOptions[item.id].quantity
				) : 
				getMinimumRequiredCompositeItemDiscountedPrice(item)
		), getDiscountedPrice(product)),
		discount: { amount: null, percent: null },
		originalPrice: product.items.reduce((acc, item) => daffAdd(
			acc, 
			appliedOptions && appliedOptions[item.id] ? 
				daffMultiply(
					appliedOptions[item.id].price, 
					appliedOptions[item.id].quantity
				) : getMinimumRequiredCompositeItemPrice(item)
		), product.price)
	}
}

/**
 * Gets the maximum prices of a composite product for the configuration provided excluding unselected, optional item prices.
 * @param product a DaffCompositeProduct
 * @param appliedOptions a Dictionary<DaffCompositeProductItemOption> that determines the current configuration of the composite product.
 */
function getMaxPricesForConfiguration(product: DaffCompositeProduct, appliedOptions: Dictionary<DaffCompositeProductItemOption>): DaffProductPrices {
	return {
		discountedPrice: product.items.reduce((acc, item) => daffAdd(
			acc, 
			appliedOptions && appliedOptions[item.id] ? 
				daffMultiply(
					appliedOptions[item.id].discount ? daffSubtract(appliedOptions[item.id].price, appliedOptions[item.id].discount.amount) : appliedOptions[item.id].price, 
					appliedOptions[item.id].quantity
				) : 
				getMaximumRequiredCompositeItemDiscountedPrice(item)
		), getDiscountedPrice(product)),
		discount: { amount: null, percent: null },
		originalPrice: product.items.reduce((acc, item) => daffAdd(
			acc,
			appliedOptions && appliedOptions[item.id] ? 
				daffMultiply(
					appliedOptions[item.id].price, 
					appliedOptions[item.id].quantity
				) : getMaximumRequiredCompositeItemPrice(item)
		), product.price)
	}
}

function getDiscountedPrice(product: DaffProduct): number {
  return product.discount ? daffSubtract(product.price, product.discount.amount) : product.price
}

/**
 * Gets the maximum prices of a composite product including optional item prices.
 * @param product a DaffCompositeProduct
 */
function getMaxPricesIncludingOptionalItems(product: DaffCompositeProduct): DaffProductPrices {
	return {
		discountedPrice: (<DaffCompositeProduct>product).items.reduce((acc, item) => daffAdd(
			acc, 
			Math.max(...item.options.map(getDiscountedPrice))
		), getDiscountedPrice(product)),
		discount: { amount: null, percent: null },
		originalPrice: (<DaffCompositeProduct>product).items.reduce((acc, item) => daffAdd(
			acc,
			Math.max(...item.options.map(option => option.price))
		), product.price)
	}
}

/**
 * Takes a product and a set of option configurations and convert it into a dictionary of the full option objects.
 * @param product a DaffCompositeProduct
 * @param configuration a Dictionary<DaffCompositeConfigurationItem> used to build the appliedOptions object.
 */
function getAppliedOptionsForConfiguration(product: DaffCompositeProduct, configuration: Dictionary<DaffCompositeConfigurationItem>): Dictionary<DaffCompositeProductItemOption> {
	return (<DaffCompositeProduct>product).items.reduce((acc, item) => ({
		...acc,
		[item.id]: configuration[item.id] && configuration[item.id].value ? {
			...item.options.find(option => option.id === configuration[item.id].value),
			quantity: configuration[item.id].qty
		} : null
}), {})
}
