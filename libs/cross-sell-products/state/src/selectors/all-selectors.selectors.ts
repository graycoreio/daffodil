import { DaffProduct } from '@daffodil/product';

import {
  DaffCrossSellProductsMemoizedSelectors,
  getDaffCrossSellProductsPageSelectors,
} from './cross-sell-products/selectors';

/**
 * An interface for all selectors in the entire cross-sell products feature area.
 */
export interface DaffCrossSellProductsAllSelectors<T extends DaffProduct = DaffProduct> extends
  DaffCrossSellProductsMemoizedSelectors<T>
{}

/**
 * A function that returns all selectors in the entire cross-sell products feature area.
 * Returns {@link DaffCrossSellProductsAllSelectors}.
 */
export const getDaffCrossSellProductsSelectors = <T extends DaffProduct = DaffProduct>(): DaffCrossSellProductsAllSelectors<T> => ({
  ...getDaffCrossSellProductsPageSelectors<T>(),
});
