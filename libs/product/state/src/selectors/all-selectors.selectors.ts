import { DaffProduct } from '@daffodil/product';

import {
  DaffProductPageMemoizedSelectors,
  getDaffProductPageSelectors,
} from './product/product.selectors';
import {
  DaffProductEntitiesMemoizedSelectors,
  getDaffProductEntitiesSelectors,
} from './product-entities/product-entities.selectors';
import {
  DaffProductFeatureMemoizedSelector,
  getDaffProductFeatureSelector,
} from './product-feature.selector';
import {
  DaffProductGridMemoizedSelectors,
  getDaffProductGridSelectors,
} from './product-grid/product-grid.selectors';

/**
 * An interface for all selectors in the entire product feature area.
 */
export interface DaffProductAllSelectors<T extends DaffProduct = DaffProduct> extends
  DaffProductPageMemoizedSelectors<T>,
  DaffProductEntitiesMemoizedSelectors<T>,
  DaffProductGridMemoizedSelectors<T>,
  DaffProductFeatureMemoizedSelector<T>
{}

/**
 * A function that returns all selectors in the entire product feature area.
 * Returns {@link DaffProductAllSelectors}.
 */
export const getDaffProductSelectors = <T extends DaffProduct = DaffProduct>(): DaffProductAllSelectors<T> => ({
  ...getDaffProductPageSelectors<T>(),
  ...getDaffProductGridSelectors<T>(),
  ...getDaffProductEntitiesSelectors<T>(),
  ...getDaffProductFeatureSelector<T>(),
});
