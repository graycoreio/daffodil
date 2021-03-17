import { Dictionary } from '@ngrx/entity';
import {
  createSelector,
  MemoizedSelector,
  MemoizedSelectorWithProps,
} from '@ngrx/store';

import {
  DaffGenericCategory,
  DaffCategory,
} from '@daffodil/category';
import { DaffProduct } from '@daffodil/product';
import { getDaffProductSelectors } from '@daffodil/product/state';

import { DaffCategoryEntitiesMemoizedSelectors } from './category-entities/category-entities.selector';
import { getDaffCategoryEntitiesSelectors } from './category-entities/category-entities.selector';
import {
  DaffCategoryFeatureMemoizedSelectors,
  getDaffCategoryFeatureSelector,
} from './category-feature.selector';
import {
  DaffCategoryPageMemoizedSelectors,
  getDaffCategoryPageSelectors,
} from './category-page/category-page.selector';

export interface DaffCategoryMemoizedSelectors<
	V extends DaffGenericCategory<V> = DaffCategory,
	W extends DaffProduct = DaffProduct
> extends
	DaffCategoryFeatureMemoizedSelectors<V>,
	DaffCategoryPageMemoizedSelectors<V>,
	DaffCategoryEntitiesMemoizedSelectors<V> {
	selectSelectedCategory: MemoizedSelector<Record<string, any>, V>;
	selectCategoryPageProducts: MemoizedSelector<Record<string, any>, W[]>;
	selectCategory: MemoizedSelectorWithProps<Record<string, any>, Record<string, any>, V>;
	selectProductsByCategory: MemoizedSelectorWithProps<Record<string, any>, Record<string, any>, W[]>;
	selectTotalProductsByCategory: MemoizedSelectorWithProps<Record<string, any>, Record<string, any>, number>;
}

const createCategorySelectors = <V extends DaffGenericCategory<V>, W extends DaffProduct>(): DaffCategoryMemoizedSelectors<V, W> => {
  const { selectProductEntities, selectAllProducts } = getDaffProductSelectors<W>();

  const {
    selectCategoryEntities,
  } = getDaffCategoryEntitiesSelectors<V>();
  const {
    selectSelectedCategoryId,
    selectCategoryPageProductIds,
  } = getDaffCategoryPageSelectors<V>();
  /**
   * Combinatoric Category Selectors
   */
  const selectSelectedCategory = createSelector(
    selectCategoryEntities,
    selectSelectedCategoryId,
    (entities: Dictionary<V>, selectedCategoryId: V['id']) => entities[selectedCategoryId],
  );

  const selectCategoryPageProducts = createSelector(
    selectCategoryPageProductIds,
    selectProductEntities,
    (ids, products: Dictionary<W>) => ids.map(id => products[id]).filter(p => p != null),
  );

  const selectCategory = createSelector(
    selectCategoryEntities,
    (entities: Dictionary<V>, props) =>  entities[props.id],
  );

  const selectProductsByCategory = createSelector(
    selectCategoryEntities,
    selectAllProducts,
    (entities, products, props) => entities[props.id] && entities[props.id].product_ids
      ? products.filter(product => entities[props.id].product_ids.indexOf(product.id) >= 0)
      : null,
  );

  const selectTotalProductsByCategory = createSelector(
    selectCategoryEntities,
    selectAllProducts,
    (entities, products, props) => selectProductsByCategory.projector(entities, products, { id: props.id })
      ? selectProductsByCategory.projector(entities, products, { id: props.id }).length
      : null,
  );

  return {
    ...getDaffCategoryFeatureSelector<V>(),
    ...getDaffCategoryEntitiesSelectors<V>(),
    ...getDaffCategoryPageSelectors<V>(),
    selectSelectedCategory,
    selectCategoryPageProducts,
    selectCategory,
    selectProductsByCategory,
    selectTotalProductsByCategory,
  };
};

export const getDaffCategorySelectors = (() => {
  let cache;
  return <
		V extends DaffGenericCategory<V> = DaffCategory,
		W extends DaffProduct = DaffProduct
	>(): DaffCategoryMemoizedSelectors<V, W> => cache = cache
    ? cache
    : createCategorySelectors<V,W>();
})();
