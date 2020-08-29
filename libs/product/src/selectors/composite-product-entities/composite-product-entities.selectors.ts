import { createSelector, MemoizedSelector, MemoizedSelectorWithProps } from '@ngrx/store';
import { EntityState, Dictionary } from '@ngrx/entity';

import { getDaffProductFeatureSelector } from '../product-feature.selector';
import { DaffProductReducersState } from '../../reducers/product-reducers-state.interface';
import { DaffProduct, DaffProductTypeEnum } from '../../models/product';
import { daffCompositeProductAppliedOptionsEntitiesAdapter } from '../../reducers/composite-product-entities/composite-product-entities-reducer-adapter';
import { DaffCompositeProductEntity } from '../../reducers/composite-product-entities/composite-product-entity';
import { getDaffProductEntitiesSelectors } from '../product-entities/product-entities.selectors';
import { DaffCompositeProduct } from '../../models/composite-product';
import { DaffCompositeProductItemOption } from '../../models/composite-product-item';

export interface DaffCompositeProductEntitiesMemoizedSelectors {
	selectCompositeProductAppliedOptionsEntitiesState: MemoizedSelector<object, EntityState<DaffCompositeProductEntity>>;
	selectCompositeProductIds: MemoizedSelector<object, EntityState<DaffCompositeProductEntity>['ids']>;
	selectCompositeProductAppliedOptionsEntities: MemoizedSelector<object, EntityState<DaffCompositeProductEntity>['entities']>;
	selectCompositeProductTotal: MemoizedSelector<object, number>;
	selectCompositeProductAppliedOptions: MemoizedSelectorWithProps<object, object, Dictionary<DaffCompositeProductItemOption>>;
}

const createCompositeProductAppliedOptionsEntitiesSelectors = <T extends DaffProduct>(): DaffCompositeProductEntitiesMemoizedSelectors => {
	const {
		selectProductState
	} = getDaffProductFeatureSelector<T>();
	const {
		selectProductEntities,
		selectProduct,
	} = getDaffProductEntitiesSelectors();
	const adapterSelectors = daffCompositeProductAppliedOptionsEntitiesAdapter().getSelectors();
	/**
	 * Composite Product Entities State
	 */
	const selectCompositeProductAppliedOptionsEntitiesState = createSelector(
		selectProductState,
		(state: DaffProductReducersState<T>) => state.compositeProductOptions
	);

	/**
	 * Selector for composite product IDs.
	 */
	const selectCompositeProductIds = createSelector(
		selectCompositeProductAppliedOptionsEntitiesState,
		adapterSelectors.selectIds
	);

	/**
	 * Selector for all composite product applied attributes as entities (see ngrx/entity).
	 */
	const selectCompositeProductAppliedOptionsEntities = createSelector(
		selectCompositeProductAppliedOptionsEntitiesState,
		adapterSelectors.selectEntities
	);

	/**
	 * Selector for the total number of composite products.
	 */
	const selectCompositeProductTotal = createSelector(
		selectCompositeProductAppliedOptionsEntitiesState,
		adapterSelectors.selectTotal
	);

	/**
	 * Selector for the applied attributes of a particular composite product.
	 */
	const selectCompositeProductAppliedOptions = createSelector(
		selectProductEntities,
		selectCompositeProductAppliedOptionsEntitiesState,
		(products, appliedOptions, props) => {
			const product = selectProduct.projector(products, { id: props.id });
			if(product.type !== DaffProductTypeEnum.Composite) {
				return undefined;
			}

			return (<DaffCompositeProduct>product).items.reduce((acc, item) => ({
					...acc,
					[item.id]: appliedOptions.entities[product.id].items[item.id].value ? {
						...item.options.find(option => option.id === appliedOptions.entities[product.id].items[item.id].value),
						quantity: appliedOptions.entities[product.id].items[item.id].qty
					} : null
			}), {})
		}
	);

	return { 
		selectCompositeProductAppliedOptionsEntitiesState,
		selectCompositeProductIds,
		selectCompositeProductAppliedOptionsEntities,
		selectCompositeProductTotal,
		selectCompositeProductAppliedOptions
	}
}

export const getDaffCompositeProductEntitiesSelectors = (() => {
	let cache;
	return <T extends DaffProduct>(): DaffCompositeProductEntitiesMemoizedSelectors => cache = cache 
		? cache 
		: createCompositeProductAppliedOptionsEntitiesSelectors<T>();
})()
