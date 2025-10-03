
import { DaffConfigurableProduct } from '@daffodil/product-configurable';

import {
  DaffConfigurableProductMemoizedSelectors,
  getDaffConfigurableProductSelectors,
} from './configurable-product/configurable-product.selectors';
import {
  DaffConfigurableProductEntitiesMemoizedSelectors,
  getDaffConfigurableProductEntitiesSelectors,
} from './configurable-product-entities/configurable-product-entities.selectors';
import {
  getDaffConfigurableProductFeatureSelector,
  DaffConfigurableProductFeatureMemoizedSelector,
} from './feature.selector';


/**
 * An interface for all selectors in the configurable product feature area.
 */
export interface DaffConfigurableProductAllSelectors<T extends DaffConfigurableProduct = DaffConfigurableProduct> extends
  DaffConfigurableProductEntitiesMemoizedSelectors<T>,
  DaffConfigurableProductMemoizedSelectors<T>,
  DaffConfigurableProductFeatureMemoizedSelector
{}

/**
 * A function that returns all selectors in the configurable product feature area.
 * Returns {@link DaffConfigurableProductAllSelectors}.
 */
export const getDaffConfigurableProductAllSelectors = <T extends DaffConfigurableProduct = DaffConfigurableProduct>(): DaffConfigurableProductAllSelectors<T> => ({
  ...getDaffConfigurableProductEntitiesSelectors<T>(),
  ...getDaffConfigurableProductSelectors<T>(),
  ...getDaffConfigurableProductFeatureSelector(),
});
