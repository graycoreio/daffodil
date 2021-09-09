import { Dictionary } from '@ngrx/entity';

import {
  DaffProduct,
  DaffCompositeConfigurationItem,
} from '@daffodil/product';

/**
 * Describes how composite product configurations are stored in rxjs entity state.
 *
 * @deprecated import from @daffodil/composite-product/state instead.
 */
export interface DaffCompositeProductEntity {
	/**
	 * The id of the composite product.
	 */
	id: DaffProduct['id'];
	/**
	 * A dictionary of the configurations set for a composite product.
	 */
	items: Dictionary<DaffCompositeConfigurationItem>;
}
