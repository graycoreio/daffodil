import { DaffProduct } from '@daffodil/product';

import {
  DaffRelatedProductsFeatureMemoizedSelector,
  getDaffRelatedProductsFeatureSelector,
} from './feature.selector';
import {
  DaffRelatedProductsMemoizedSelectors,
  getDaffRelatedProductsPageSelectors,
} from './related-products/selectors';

/**
 * An interface for all selectors in the entire related products feature area.
 */
export interface DaffRelatedProductsAllSelectors<T extends DaffProduct = DaffProduct> extends
  DaffRelatedProductsMemoizedSelectors<T>,
  DaffRelatedProductsFeatureMemoizedSelector<T>
{}

/**
 * A function that returns all selectors in the entire related products feature area.
 * Returns {@link DaffRelatedProductsAllSelectors}.
 */
export const getDaffRelatedProductsSelectors = <T extends DaffProduct = DaffProduct>(): DaffRelatedProductsAllSelectors<T> => ({
  ...getDaffRelatedProductsPageSelectors<T>(),
  ...getDaffRelatedProductsFeatureSelector<T>(),
});
