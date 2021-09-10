import { ID } from '@daffodil/core';

/**
 * An object to denote the configuration chosen for a particular {@link DaffCompositeProductItem}.
 *
 * @deprecated import from @daffodil/composite-product instead.
 */
export interface DaffCompositeConfigurationItem {
	/**
	 * The quantity chosen for the configuration of the {@link DaffCompositeProductItem}.
	 */
	qty?: number;
	/**
	 * The value of the {@link DaffCompositeProductItemOption} chosen for the configuration of the {@link DaffCompositeProductItem}.
	 */
	value?: ID;
}
