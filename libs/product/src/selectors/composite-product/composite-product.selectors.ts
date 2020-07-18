import { createSelector, MemoizedSelectorWithProps } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';

import { daffAdd, daffSubtract, daffMultiply } from '@daffodil/core';

import { DaffProductTypeEnum } from '../../models/product';
import { getDaffCompositeProductEntitiesSelectors } from '../composite-product-entities/composite-product-entities.selectors';
import { getDaffProductEntitiesSelectors } from '../product-entities/product-entities.selectors';
import { DaffCompositeProduct } from '../../models/composite-product';
import { DaffCompositeProductEntityItem } from '../../reducers/public_api';

export interface DaffCompositeProductMemoizedSelectors {
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

			return (<DaffCompositeProduct>product).items.reduce((acc, item) => {
				return daffAdd(
					acc, 
					daffMultiply(item.options.find(option => option.id === appliedOptions[item.id].value).price, appliedOptions[item.id].qty)
				);
			}, product.price);
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
		const itemOptionDiscount = item.options.find(option => option.id === appliedOptions[item.id].value).discount;

		return daffAdd(
			acc, 
			itemOptionDiscount && itemOptionDiscount.amount > 0 ? daffMultiply(itemOptionDiscount.amount, appliedOptions[item.id].qty) : 0
		);
	}, 0)
}
