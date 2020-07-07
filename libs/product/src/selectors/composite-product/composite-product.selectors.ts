import { createSelector, MemoizedSelectorWithProps } from '@ngrx/store';

import { DaffProductTypeEnum } from '../../models/product';
import { getDaffCompositeProductEntitiesSelectors } from '../composite-product-entities/composite-product-entities.selectors';
import { getDaffProductEntitiesSelectors } from '../product-entities/product-entities.selectors';
import { DaffCompositeProduct } from '../../models/composite-product';
import { Dictionary } from '@ngrx/entity';

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
				return acc + item.options.find(option => option.id === appliedOptions[item.id]).price;
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

			return productDiscountAmount + getOptionsDiscountAmount(<DaffCompositeProduct>product, appliedOptions);
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

			return Math.round(100*
				(selectCompositeProductPrice.projector(products, appliedOptionsEntities, { id: props.id }) - selectCompositeProductDiscountAmount.projector(products, appliedOptionsEntities, { id: props.id }))
			)/100;
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

function getOptionsDiscountAmount(product: DaffCompositeProduct, appliedOptions: Dictionary<string>): number {
	return product.items.reduce((acc, item) => {
		const itemOptionDiscount = item.options.find(option => option.id === appliedOptions[item.id]).discount;

		return acc + (itemOptionDiscount && itemOptionDiscount.amount > 0 ? itemOptionDiscount.amount : 0);
	}, 0)
}
