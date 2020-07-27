import { createSelector, MemoizedSelectorWithProps } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';

import { daffAdd, daffSubtract, daffMultiply } from '@daffodil/core';

import { DaffProductTypeEnum } from '../../models/product';
import { getDaffCompositeProductEntitiesSelectors } from '../composite-product-entities/composite-product-entities.selectors';
import { getDaffProductEntitiesSelectors } from '../product-entities/product-entities.selectors';
import { DaffCompositeProduct } from '../../models/composite-product';
import { DaffCompositeProductEntityItem } from '../../reducers/public_api';
import { DaffCompositeProductItem } from '../../models/composite-product-item';

export interface DaffCompositeProductMemoizedSelectors {
	selectCompositeProductMinPossiblePrice: MemoizedSelectorWithProps<object, object, number>;
	selectCompositeProductMaxPossiblePrice: MemoizedSelectorWithProps<object, object, number>;
	selectCompositeProductPossiblyHasPriceRange: MemoizedSelectorWithProps<object, object, boolean>;
	selectCompositeProductMinPrice: MemoizedSelectorWithProps<object, object, number>;
	selectCompositeProductMaxPrice: MemoizedSelectorWithProps<object, object, number>;
	selectCompositeProductHasPriceRange: MemoizedSelectorWithProps<object, object, boolean>;
	selectCompositeProductPrice: MemoizedSelectorWithProps<object, object, number>;
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
			const appliedOptions = selectCompositeProductAppliedOptions.projector(appliedOptionsEntities, { id: props.id });

			return (<DaffCompositeProduct>product).items.reduce((acc, item) => daffAdd(
				acc, 
				appliedOptions[item.id].value ? findAppliedCompositeOptionPrice(item, appliedOptions) : getMinimumCompositeItemPrice(item)
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
			const appliedOptions = selectCompositeProductAppliedOptions.projector(appliedOptionsEntities, { id: props.id });

			return (<DaffCompositeProduct>product).items.reduce((acc, item) => 
				daffAdd(
					acc, 
					appliedOptions[item.id].value ? findAppliedCompositeOptionPrice(item, appliedOptions) : getMaximumRequiredItemPrice(item)
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
			
			const appliedOptions = selectCompositeProductAppliedOptions.projector(appliedOptionsEntities, { id: props.id });

			return (<DaffCompositeProduct>product).items.reduce((acc, item) => daffAdd(
				acc, 
				appliedOptions[item.id].value ? daffMultiply(findAppliedCompositeOptionPrice(item, appliedOptions), appliedOptions[item.id].qty) : 0
			), product.price);
		}
	);


	/**
	 * Selector for the discount amount for current configuration of the composite product.
	 */
	const selectCompositeProductDiscountAmount = createSelector(
		selectProductEntities,
		selectCompositeProductAppliedOptionsEntitiesState,
		(products, appliedOptionsEntities, props) => {
			const product = selectProduct.projector(products, { id: props.id });
			if(product.type !== DaffProductTypeEnum.Composite) {
				return undefined;
			}
			const appliedOptions = selectCompositeProductAppliedOptions.projector(appliedOptionsEntities, { id: props.id });
			const productDiscountAmount = selectProductDiscountAmount.projector(products, { id: props.id });

			return daffAdd(productDiscountAmount, getOptionsDiscountAmount(<DaffCompositeProduct>product, appliedOptions));
		}
	);

	/**
	 * Selector for the discounted price for current configuration of the composite product.
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

			return selectCompositeProductDiscountAmount.projector(products, appliedOptionsEntities, { id: props.id }) > 0;
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

function getOptionsDiscountAmount(product: DaffCompositeProduct, appliedOptions: Dictionary<DaffCompositeProductEntityItem>): number {
	return product.items.reduce((acc, item) => {
		const itemOptionDiscount = appliedOptions[item.id].value ? item.options.find(option => option.id === appliedOptions[item.id].value).discount : null;

		return daffAdd(
			acc, 
			itemOptionDiscount && itemOptionDiscount.amount > 0 ? daffMultiply(itemOptionDiscount.amount, appliedOptions[item.id].qty) : 0
		);
	}, 0)
}

function findAppliedCompositeOptionPrice(item: DaffCompositeProductItem, appliedOptions: Dictionary<DaffCompositeProductEntityItem>): number {
	return item.options.find(option => option.id === appliedOptions[item.id].value).price
}

/**
 * The minimum price of an item is zero if the item is optional.
 * @param item DaffCompositeProductItem
 */
function getMinimumCompositeItemPrice(item: DaffCompositeProductItem): number {
	return item.required ? Math.min(...item.options.map(option => option.price)) : 0;
}

/**
 * The maximum price for an item is zero if the item is optional.
 * @param item DaffCompositeProductItem
 */
function getMaximumRequiredItemPrice(item: DaffCompositeProductItem): number {
	return item.required ? Math.max(...item.options.map(option => option.price)) : 0;
}
