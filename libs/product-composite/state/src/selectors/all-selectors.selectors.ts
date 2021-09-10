import { DaffProduct } from '@daffodil/product';

import {
  DaffCompositeProductEntitiesMemoizedSelectors,
  getDaffCompositeProductEntitiesSelectors,
} from './composite-product-entities/composite-product-entities.selectors';
import {
  DaffCompositeProductMemoizedSelectors,
  getDaffCompositeProductPriceSelectors,
} from './composite-product/composite-product.selectors';

/**
 * An interface for all selectors in the composite product feature area.
 */
export interface DaffCompositeProductAllSelectors<T extends DaffProduct = DaffProduct> extends
	DaffCompositeProductEntitiesMemoizedSelectors<T>,
	DaffCompositeProductMemoizedSelectors<T> { }

/**
 * A function that returns all selectors in the composite product feature area.
 * Returns {@link DaffCompositeProductAllSelectors}.
 */
export const getDaffCompositeProductSelectors = <T extends DaffProduct>(): DaffCompositeProductAllSelectors<T> => ({
  ...getDaffCompositeProductEntitiesSelectors<T>(),
  ...getDaffCompositeProductPriceSelectors<T>(),
});
