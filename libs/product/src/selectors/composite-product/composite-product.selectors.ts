import { createSelector, MemoizedSelectorWithProps } from '@ngrx/store';

import { daffAdd, daffSubtract, daffMultiply } from '@daffodil/core';

import { DaffProductTypeEnum } from '../../models/product';
import { getDaffCompositeProductEntitiesSelectors } from '../composite-product-entities/composite-product-entities.selectors';
import { getDaffProductEntitiesSelectors } from '../product-entities/product-entities.selectors';
import { DaffCompositeProduct } from '../../models/composite-product';
import { DaffCompositeProductItem } from '../../models/composite-product-item';

export interface DaffCompositeProductMemoizedSelectors {
	/**
	 * Selector for the minimum price for a composite product, including the optional items and regardless of the current item option selection.
	 * This could be useful for a quick preview of the product.
	 */
	selectCompositeProductMinOptionalItemPrice: MemoizedSelectorWithProps<object, object, number>;
	/**
	 * Selector for the maximum price for a composite product, including the optional items and regardless of the current item option selection.
	 * This could be useful for a quick preview of the product.
	 */
	selectCompositeProductMaxOptionalItemPrice: MemoizedSelectorWithProps<object, object, number>;
	/**
	 * Selector for whether the composite product could have a price range in any configuration,
	 * including the optional items and regardless of the current item option selection.
	 * This could be useful for a quick preview of the product.
	 */
	selectCompositeProductHasOptionalItemPriceRange: MemoizedSelectorWithProps<object, object, boolean>;
	/**
	 * Selector for the minimum discounted price for a composite product, including optional items and regardless of the current selection of item options.
	 * This could be useful for a quick preview of the product.
	 */
	selectCompositeProductMinOptionalItemDiscountedPrice: MemoizedSelectorWithProps<object, object, number>;
	/**
	 * Selector for the maximum discounted price for a composite product, including optional items and regardless of the current selection of item options.
	 * This could be useful for a quick preview of the product.
	 */
	selectCompositeProductMaxOptionalItemDiscountedPrice: MemoizedSelectorWithProps<object, object, number>;
	/**
	 * Selector for whether the composite product could have a discounted price range in any configuration,
	 * including the optional items and regardless of the current item option selection.
	 * This could be useful for a quick preview of the product.
	 */
	selectCompositeProductHasOptionalItemDiscountedPriceRange: MemoizedSelectorWithProps<object, object, boolean>;
	/**
	 * Selector for whether the minimum and maximum composite product discounted prices equal the minimum and maximum
	 * pre discount prices, including optional items. Note: this intentionally misses a usecase where there is a discount
	 * in between the minimum and maximum prices. This is because the resulting UI would be non-sensical to the customer for
	 * this usecase. For example, if we have a set of item options' prices: (price, discount), (10, 0), (20, 0), (15, 4).
	 * While it is true that there is technically a discounted price, the user would see the original price range (10-20) followed
	 * by the discounted price range (10-20). This would happen, because the 15-4=11 price would fall between the two extremes
	 * of the discounted prices and it wouldn't make sense to the customer what is happening.
	 */
	selectCompositeProductHasOptionalItemDiscount: MemoizedSelectorWithProps<object, object, boolean>;
	/**
	 * Selector for the minimum price for a composite product, excluding unselected optional items and depending on the current selection of item options.
	 * This would be used for a composite product that has required items without default selections.
	 */
	selectCompositeProductMinRequiredItemPrice: MemoizedSelectorWithProps<object, object, number>;
	/**
	 * Selector for the maximum price for a composite product, excluding unselected optional items and depending on the current selection of item options.
	 * This would be used for a composite product that has required items without default selections.
	 */
	selectCompositeProductMaxRequiredItemPrice: MemoizedSelectorWithProps<object, object, number>;
	/**
	 * Selector for whether the composite product has a price range, excluding unselected optional items and based on the currently applied item options.
	 */
	selectCompositeProductHasRequiredItemPriceRange: MemoizedSelectorWithProps<object, object, boolean>;
	/**
	 * Selector for the minimum discounted price for a composite product, excluding unselected optional items and depending on the current selection of item options.
	 * This would be used for a composite product that has required items without default selections or just the final price of a product with no price range.
	 */
	selectCompositeProductMinRequiredItemDiscountedPrice: MemoizedSelectorWithProps<object, object, number>;
	/**
	 * Selector for the maximum discounted price for a composite product, excluding unselected optional items and depending on the current selection of item options.
	 * This would be used for a composite product that has required items without default selections or just the final price of a product with no price range.
	 */
	selectCompositeProductMaxRequiredItemDiscountedPrice: MemoizedSelectorWithProps<object, object, number>;
	/**
	 * Selector for whether the composite product has a discounted price range, excluding unselected optional items and based on the currently applied item options.
	 */
	selectCompositeProductHasRequiredItemDiscountedPriceRange: MemoizedSelectorWithProps<object, object, boolean>;
	/**
	 * Selector for whether the minimum and maximum composite product discounted prices equal the minimum and maximum
	 * pre discount prices, excluding unselected optional items. Note: this intentionally misses a usecase where there is a discount
	 * in between the minimum and maximum prices. This is because the resulting UI would be non-sensical to the customer for
	 * this usecase. For example, if we have a set of item options' prices: (price, discount), (10, 0), (20, 0), (15, 4).
	 * While it is true that there is technically a discounted price, the user would see the original price range (10-20) followed
	 * by the discounted price range (10-20). This would happen, because the 15-4=11 price would fall between the two extremes
	 * of the discounted prices and it wouldn't make sense to the customer what is happening.
	 */
	selectCompositeProductHasRequiredItemDiscount: MemoizedSelectorWithProps<object, object, boolean>;
}

const createCompositeProductSelectors = (): DaffCompositeProductMemoizedSelectors => {

	const {
		selectCompositeProductAppliedOptions,
		selectCompositeProductAppliedOptionsEntitiesState
	} = getDaffCompositeProductEntitiesSelectors();

	const {
		selectProductEntities,
		selectProduct
	} = getDaffProductEntitiesSelectors();

	const selectCompositeProductMinOptionalItemPrice = createSelector(
		selectProductEntities,
		(products, props) => {
			const product = selectProduct.projector(products, { id: props.id });
			if(product.type !== DaffProductTypeEnum.Composite) {
				return undefined;
			}
			
			return (<DaffCompositeProduct>product).items.reduce((acc, item) => 
				daffAdd(
					acc, 
					Math.min(...item.options.map(option => option.price))
				), product.price);
		}
	);

	const selectCompositeProductMaxOptionalItemPrice = createSelector(
		selectProductEntities,
		(products, props) => {
			const product = selectProduct.projector(products, { id: props.id });
			if(product.type !== DaffProductTypeEnum.Composite) {
				return undefined;
			}
			
			return (<DaffCompositeProduct>product).items.reduce((acc, item) => 
				daffAdd(
					acc, 
					Math.max(...item.options.map(option => option.price))
				), product.price);
		}
	);

	const selectCompositeProductHasOptionalItemPriceRange = createSelector(
		selectProductEntities,
		(products, props) => selectCompositeProductMinOptionalItemPrice.projector(products, { id: props.id }) 
			!== selectCompositeProductMaxOptionalItemPrice.projector(products, { id: props.id })
	)

	const selectCompositeProductMinOptionalItemDiscountedPrice = createSelector(
		selectProductEntities,
		(products, props) => {
			const product = selectProduct.projector(products, { id: props.id });
			if(product.type !== DaffProductTypeEnum.Composite) {
				return undefined;
			}
			return (<DaffCompositeProduct>product).items.reduce((acc, item) => daffAdd(
				acc, 
				Math.min(...getItemDiscountedPrices(item))
			), product.discount ? daffSubtract(product.price, product.discount.amount) : product.price);
		}
	);

	const selectCompositeProductMaxOptionalItemDiscountedPrice = createSelector(
		selectProductEntities,
		(products, props) => {
			const product = selectProduct.projector(products, { id: props.id });
			if(product.type !== DaffProductTypeEnum.Composite) {
				return undefined;
			}
			return (<DaffCompositeProduct>product).items.reduce((acc, item) => daffAdd(
				acc, 
				Math.max(...getItemDiscountedPrices(item))
			), product.discount ? daffSubtract(product.price, product.discount.amount) : product.price);
		}
	);

	const selectCompositeProductHasOptionalItemDiscountedPriceRange = createSelector(
		selectProductEntities,
		(products, props) => selectCompositeProductMinOptionalItemDiscountedPrice.projector(products, { id: props.id }) 
			!== selectCompositeProductMaxOptionalItemDiscountedPrice.projector(products, { id: props.id })
	)

	const selectCompositeProductHasOptionalItemDiscount = createSelector(
		selectProductEntities,
		(products, props) => {
			const product = selectProduct.projector(products, { id: props.id });
			if(product.type !== DaffProductTypeEnum.Composite) {
				return undefined;
			}

			return selectCompositeProductMinOptionalItemPrice.projector(products, { id: props.id }) !==
				selectCompositeProductMinOptionalItemDiscountedPrice.projector(products, { id: props.id })
		 || selectCompositeProductMaxOptionalItemPrice.projector(products, { id: props.id }) !==
				selectCompositeProductMaxOptionalItemDiscountedPrice.projector(products, { id: props.id });
		}
	);

	const selectCompositeProductMinRequiredItemPrice = createSelector(
		selectProductEntities,
		selectCompositeProductAppliedOptionsEntitiesState,
		(products, appliedOptionsEntities, props) => {
			const product = selectProduct.projector(products, { id: props.id });
			if(product.type !== DaffProductTypeEnum.Composite) {
				return undefined;
			}
			const appliedOptions = selectCompositeProductAppliedOptions.projector(products, appliedOptionsEntities, { id: props.id });
			return (<DaffCompositeProduct>product).items.reduce((acc, item) => daffAdd(
				acc, 
				appliedOptions[item.id] ? daffMultiply(appliedOptions[item.id].price, appliedOptions[item.id].quantity) : getMinimumRequiredCompositeItemPrice(item)
			), product.price);
		}
	);

	const selectCompositeProductMaxRequiredItemPrice = createSelector(
		selectProductEntities,
		selectCompositeProductAppliedOptionsEntitiesState,
		(products, appliedOptionsEntities, props) => {
			const product = selectProduct.projector(products, { id: props.id });
			if(product.type !== DaffProductTypeEnum.Composite) {
				return undefined;
			}
			const appliedOptions = selectCompositeProductAppliedOptions.projector(products, appliedOptionsEntities, { id: props.id });

			return (<DaffCompositeProduct>product).items.reduce((acc, item) => 
				daffAdd(
					acc, 
					appliedOptions[item.id] ? daffMultiply(appliedOptions[item.id].price, appliedOptions[item.id].quantity) : getMaximumRequiredCompositeItemPrice(item)
				), product.price);
		}
	);

	const selectCompositeProductHasRequiredItemPriceRange = createSelector(
		selectProductEntities,
		selectCompositeProductAppliedOptionsEntitiesState,
		(products, appliedOptionsEntities, props) => selectCompositeProductMinRequiredItemPrice.projector(products, appliedOptionsEntities, { id: props.id }) 
			!== selectCompositeProductMaxRequiredItemPrice.projector(products, appliedOptionsEntities, { id: props.id })
	)

	const selectCompositeProductMinRequiredItemDiscountedPrice = createSelector(
		selectProductEntities,
		selectCompositeProductAppliedOptionsEntitiesState,
		(products, appliedOptionsEntities, props) => {
			const product = selectProduct.projector(products, { id: props.id });
			if(product.type !== DaffProductTypeEnum.Composite) {
				return undefined;
			}
			const appliedOptions = selectCompositeProductAppliedOptions.projector(products, appliedOptionsEntities, { id: props.id });
			return (<DaffCompositeProduct>product).items.reduce((acc, item) => daffAdd(
				acc, 
				appliedOptions[item.id] ? 
					daffMultiply(
						appliedOptions[item.id].discount ? daffSubtract(appliedOptions[item.id].price, appliedOptions[item.id].discount.amount) : appliedOptions[item.id].price, 
						appliedOptions[item.id].quantity
					) : 
					getMinimumRequiredCompositeItemDiscountedPrice(item)
			), product.discount ? daffSubtract(product.price, product.discount.amount) : product.price);
		}
	);

	const selectCompositeProductMaxRequiredItemDiscountedPrice = createSelector(
		selectProductEntities,
		selectCompositeProductAppliedOptionsEntitiesState,
		(products, appliedOptionsEntities, props) => {
			const product = selectProduct.projector(products, { id: props.id });
			if(product.type !== DaffProductTypeEnum.Composite) {
				return undefined;
			}
			const appliedOptions = selectCompositeProductAppliedOptions.projector(products, appliedOptionsEntities, { id: props.id });
			return (<DaffCompositeProduct>product).items.reduce((acc, item) => daffAdd(
				acc, 
				appliedOptions[item.id] ? 
					daffMultiply(
						appliedOptions[item.id].discount ? daffSubtract(appliedOptions[item.id].price, appliedOptions[item.id].discount.amount) : appliedOptions[item.id].price,
						appliedOptions[item.id].quantity
					) : 
					getMaximumRequiredCompositeItemDiscountedPrice(item)
			), product.discount.amount ? daffSubtract(product.price, product.discount.amount) : product.price);
		}
	);

	const selectCompositeProductHasRequiredItemDiscountedPriceRange = createSelector(
		selectProductEntities,
		selectCompositeProductAppliedOptionsEntitiesState,
		(products, appliedOptionsEntities, props) => selectCompositeProductMinRequiredItemDiscountedPrice.projector(products, appliedOptionsEntities, { id: props.id }) 
			!== selectCompositeProductMaxRequiredItemDiscountedPrice.projector(products, appliedOptionsEntities, { id: props.id })
	)

	const selectCompositeProductHasRequiredItemDiscount = createSelector(
		selectProductEntities,
		selectCompositeProductAppliedOptionsEntitiesState,
		(products, appliedOptionsEntities, props) => {
			const product = selectProduct.projector(products, { id: props.id });
			if(product.type !== DaffProductTypeEnum.Composite) {
				return undefined;
			}

			return selectCompositeProductMinRequiredItemPrice.projector(products, appliedOptionsEntities, { id: props.id }) !==
				selectCompositeProductMinRequiredItemDiscountedPrice.projector(products, appliedOptionsEntities, { id: props.id })
			|| selectCompositeProductMaxRequiredItemPrice.projector(products, appliedOptionsEntities, { id: props.id }) !==
				selectCompositeProductMaxRequiredItemDiscountedPrice.projector(products, appliedOptionsEntities, { id: props.id });
		}
	);

	return { 
		selectCompositeProductMinOptionalItemPrice,
		selectCompositeProductMaxOptionalItemPrice,
		selectCompositeProductHasOptionalItemPriceRange,
		selectCompositeProductMinOptionalItemDiscountedPrice,
		selectCompositeProductMaxOptionalItemDiscountedPrice,
		selectCompositeProductHasOptionalItemDiscountedPriceRange,
		selectCompositeProductHasOptionalItemDiscount,
		selectCompositeProductMinRequiredItemPrice,
		selectCompositeProductMaxRequiredItemPrice,
		selectCompositeProductHasRequiredItemPriceRange,
		selectCompositeProductMinRequiredItemDiscountedPrice,
		selectCompositeProductMaxRequiredItemDiscountedPrice,
		selectCompositeProductHasRequiredItemDiscountedPriceRange,
		selectCompositeProductHasRequiredItemDiscount
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

function getItemDiscountedPrices(item: DaffCompositeProductItem): number[] {
	return item.options.map(option => option.discount ? daffSubtract(option.price, option.discount.amount) : option.price);
}
