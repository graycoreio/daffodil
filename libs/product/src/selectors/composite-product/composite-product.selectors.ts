import { createSelector, MemoizedSelectorWithProps } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';

import { daffAdd, daffSubtract, daffMultiply } from '@daffodil/core';

import { DaffProductTypeEnum } from '../../models/product';
import { getDaffCompositeProductEntitiesSelectors } from '../composite-product-entities/composite-product-entities.selectors';
import { getDaffProductEntitiesSelectors } from '../product-entities/product-entities.selectors';
import { DaffCompositeProduct } from '../../models/composite-product';
import { DaffCompositeProductItem, DaffCompositeProductItemOption } from '../../models/composite-product-item';

export interface DaffCompositeProductMemoizedSelectors {
	selectCompositeProductMinPossiblePrice: MemoizedSelectorWithProps<object, object, number>;
	selectCompositeProductMaxPossiblePrice: MemoizedSelectorWithProps<object, object, number>;
	selectCompositeProductPossiblyHasPriceRange: MemoizedSelectorWithProps<object, object, boolean>;
	selectCompositeProductMinPrice: MemoizedSelectorWithProps<object, object, number>;
	selectCompositeProductMaxPrice: MemoizedSelectorWithProps<object, object, number>;
	selectCompositeProductHasPriceRange: MemoizedSelectorWithProps<object, object, boolean>;
	selectCompositeProductPrice: MemoizedSelectorWithProps<object, object, number>;
	selectCompositeProductMinDiscountedPrice: MemoizedSelectorWithProps<object, object, number>;
	selectCompositeProductMaxDiscountedPrice: MemoizedSelectorWithProps<object, object, number>;
	selectCompositeProductDiscountAmount: MemoizedSelectorWithProps<object, object, number>;
	selectCompositeProductDiscountedPrice: MemoizedSelectorWithProps<object, object, number>;
	selectCompositeProductHasDiscount: MemoizedSelectorWithProps<object, object, boolean>;
}

const createCompositeProductSelectors = (): DaffCompositeProductMemoizedSelectors => {

	const {
		selectCompositeProductAppliedOptions,
		selectCompositeProductAppliedOptionsEntitiesState
	} = getDaffCompositeProductEntitiesSelectors();

	const {
		selectProductEntities,
		selectProduct,
		selectProductDiscountAmount
	} = getDaffProductEntitiesSelectors();

	/**
	 * Selector for the minimum price possible for a composite product, regardless of the current item option selection.
	 * This could be useful for a quick preview of the product.
	 */
	const selectCompositeProductMinPossiblePrice = createSelector(
		selectProductEntities,
		(products, props) => {
			const product = selectProduct.projector(products, { id: props.id });
			if(product.type !== DaffProductTypeEnum.Composite) {
				return undefined;
			}
			
			return (<DaffCompositeProduct>product).items.reduce((acc, item) => 
				daffAdd(
					acc, 
					getMinimumCompositeItemPrice(item)
				), product.price);
		}
	);

	/**
	 * Selector for the maximum price possible for a composite product, regardless of the current item option selection.
	 * This could be useful for a quick preview of the product.
	 */
	const selectCompositeProductMaxPossiblePrice = createSelector(
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

	/**
	 * Selector for whether the composite product could have a price range.
	 */
	const selectCompositeProductPossiblyHasPriceRange = createSelector(
		selectProductEntities,
		(products, props) => selectCompositeProductMinPossiblePrice.projector(products, { id: props.id }) 
			!== selectCompositeProductMaxPossiblePrice.projector(products, { id: props.id })
	)

	/**
	 * Selector for the minimum price for required items of a composite product, depending on the current selection of item options.
	 * This would be used for a composite product that has required items without default selections.
	 */
	const selectCompositeProductMinPrice = createSelector(
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
				appliedOptions[item.id] ? appliedOptions[item.id].price : getMinimumCompositeItemPrice(item)
			), product.price);
		}
	);

	/**
	 * Selector for the maximum price for required items of a composite product, depending on the current selection of item options.
	 * This would be used for a composite product that has required items without default selections.
	 */
	const selectCompositeProductMaxPrice = createSelector(
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
					appliedOptions[item.id] ? appliedOptions[item.id].price : getMaximumRequiredItemPrice(item)
				), product.price);
		}
	);

	/**
	 * Selector for whether the composite product has a price range based on the currently applied item options.
	 */
	const selectCompositeProductHasPriceRange = createSelector(
		selectProductEntities,
		selectCompositeProductAppliedOptionsEntitiesState,
		(products, appliedOptionsEntities, props) => selectCompositeProductMinPrice.projector(products, appliedOptionsEntities, { id: props.id }) 
			!== selectCompositeProductMaxPrice.projector(products, appliedOptionsEntities, { id: props.id })
	)

	/**
	 * Selector for the price for current configuration of the composite product.
	 */
	const selectCompositeProductPrice = createSelector(
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
				appliedOptions[item.id] ? daffMultiply(appliedOptions[item.id].price, appliedOptions[item.id].quantity) : 0
			), product.price);
		}
	);

	/**
	 * Selector for the minimum discounted price for required items of a composite product, depending on the current selection of item options.
	 * This would be used for a composite product that has required items without default selections.
	 */
	//todo use optional chaining where possible.
	const selectCompositeProductMinDiscountedPrice = createSelector(
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
					daffSubtract(appliedOptions[item.id].price, appliedOptions[item.id].discount && appliedOptions[item.id].discount.amount) : 
					getMinimumCompositeItemDiscountedPrice(item)
			), daffSubtract(product.price, product.discount ? product.discount.amount : 0));
		}
	);

	/**
	 * Selector for the minimum discounted price for required items of a composite product, depending on the current selection of item options.
	 * This would be used for a composite product that has required items without default selections.
	 */
	//todo use optional chaining where possible.
	const selectCompositeProductMaxDiscountedPrice = createSelector(
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
					daffSubtract(appliedOptions[item.id].price, appliedOptions[item.id].discount && appliedOptions[item.id].discount.amount) : 
					getMaximumCompositeItemDiscountedPrice(item)
			), daffSubtract(product.price, product.discount ? product.discount.amount : 0));
		}
	);

	/**
	 * Selector for the discount amount for current configuration of the composite product.
	 * @deprecated Use selectCompositeProductMinDiscountedPrice and selectCompositeProductMaxDiscountedPrice instead.
	 */
	const selectCompositeProductDiscountAmount = createSelector(
		selectProductEntities,
		selectCompositeProductAppliedOptionsEntitiesState,
		(products, appliedOptionsEntities, props) => {
			const product = selectProduct.projector(products, { id: props.id });
			if(product.type !== DaffProductTypeEnum.Composite) {
				return undefined;
			}
			const appliedOptions = selectCompositeProductAppliedOptions.projector(products, appliedOptionsEntities, { id: props.id });
			const productDiscountAmount = selectProductDiscountAmount.projector(products, { id: props.id });
			return daffAdd(productDiscountAmount, getOptionsDiscountAmount(<DaffCompositeProduct>product, appliedOptions));
		}
	);

	/**
	 * Selector for the discounted price for current configuration of the composite product.
	 * @deprecated Use selectCompositeProductMinDiscountedPrice and selectCompositeProductMaxDiscountedPrice instead.
 	 */
	const selectCompositeProductDiscountedPrice = createSelector(
		selectProductEntities,
		selectCompositeProductAppliedOptionsEntitiesState,
		(products, appliedOptionsEntities, props) => {
			const product = selectProduct.projector(products, { id: props.id });
			if(product.type !== DaffProductTypeEnum.Composite) {
				return undefined;
			}

			return daffSubtract(
				selectCompositeProductPrice.projector(products, appliedOptionsEntities, { id: props.id }), 
				selectCompositeProductDiscountAmount.projector(products, appliedOptionsEntities, { id: props.id })
			);
		}
	);

	/**
	 * Selector for whether the composite product has a discount.
	 */
	const selectCompositeProductHasDiscount = createSelector(
		selectProductEntities,
		selectCompositeProductAppliedOptionsEntitiesState,
		(products, appliedOptionsEntities, props) => {
			const product = selectProduct.projector(products, { id: props.id });
			if(product.type !== DaffProductTypeEnum.Composite) {
				return undefined;
			}

			return daffSubtract(
				selectCompositeProductMinPrice.projector(products, appliedOptionsEntities, { id: props.id }), 
				selectCompositeProductMinDiscountedPrice.projector(products, appliedOptionsEntities, { id: props.id })
			) > 0;
		}
	);

	return { 
		selectCompositeProductMinPossiblePrice,
		selectCompositeProductMaxPossiblePrice,
		selectCompositeProductPossiblyHasPriceRange,
		selectCompositeProductMinPrice,
		selectCompositeProductMaxPrice,
		selectCompositeProductHasPriceRange,
		selectCompositeProductPrice,
		selectCompositeProductMinDiscountedPrice,
		selectCompositeProductMaxDiscountedPrice,
		selectCompositeProductDiscountAmount,
		selectCompositeProductDiscountedPrice,
		selectCompositeProductHasDiscount
	}
}

export const getDaffCompositeProductSelectors = (() => {
	let cache;
	return (): DaffCompositeProductMemoizedSelectors => cache = cache 
		? cache 
		: createCompositeProductSelectors();
})();

function getOptionsDiscountAmount(product: DaffCompositeProduct, appliedOptions: Dictionary<DaffCompositeProductItemOption>): number {
	return product.items.reduce((acc, item) => {
		const itemOptionDiscount = appliedOptions[item.id] ? appliedOptions[item.id].discount : null;
		
		return daffAdd(
			acc, 
			itemOptionDiscount && itemOptionDiscount.amount > 0 && appliedOptions[item.id] ? daffMultiply(itemOptionDiscount.amount, appliedOptions[item.id].quantity) : 0
		);
	}, 0)
}

/**
 * The minimum price of an item is zero if the item is optional.
 * @param item DaffCompositeProductItem
 */
function getMinimumCompositeItemPrice(item: DaffCompositeProductItem): number {
	return item.required ? Math.min(...item.options.map(option => option.price)) : 0;
}

/**
 * The minimum discounted price of an item is zero if the item is optional.
 * @param item DaffCompositeProductItem
 */
//todo use optional chaining when possible
function getMinimumCompositeItemDiscountedPrice(item: DaffCompositeProductItem): number {
	return item.required ? Math.min(...item.options.map(option =>
		daffSubtract(option.price, option.discount ? option.discount.amount : 0)
	)) : 0;
}
/**
 * The maximum discounted price of an item is zero if the item is optional.
 * @param item DaffCompositeProductItem
 */
//todo use optional chaining when possible
function getMaximumCompositeItemDiscountedPrice(item: DaffCompositeProductItem): number {
	return item.required ? Math.max(...item.options.map(option => 
		daffSubtract(option.price, option.discount ? option.discount.amount : 0)
	)) : 0;
}

/**
 * The maximum price for an item is zero if the item is optional.
 * @param item DaffCompositeProductItem
 */
function getMaximumRequiredItemPrice(item: DaffCompositeProductItem): number {
	return item.required ? Math.max(...item.options.map(option => option.price)) : 0;
}
