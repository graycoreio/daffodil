import { DaffProduct } from '@daffodil/product';

import {
  DaffUpsellProductsFeatureMemoizedSelector,
  getDaffUpsellProductsFeatureSelector,
} from './feature.selector';
import {
  DaffUpsellProductsMemoizedSelectors,
  getDaffUpsellProductsPageSelectors,
} from './upsell-products/selectors';

/**
 * An interface for all selectors in the entire upsell products feature area.
 */
export interface DaffUpsellProductsAllSelectors<T extends DaffProduct = DaffProduct> extends
  DaffUpsellProductsMemoizedSelectors<T>,
  DaffUpsellProductsFeatureMemoizedSelector<T>
{}

/**
 * A function that returns all selectors in the entire upsell products feature area.
 * Returns {@link DaffUpsellProductsAllSelectors}.
 */
export const getDaffUpsellProductsSelectors = <T extends DaffProduct = DaffProduct>(): DaffUpsellProductsAllSelectors<T> => ({
  ...getDaffUpsellProductsPageSelectors<T>(),
  ...getDaffUpsellProductsFeatureSelector<T>(),
});
