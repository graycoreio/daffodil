import { Dictionary } from '@ngrx/entity';

import { DaffCompositeConfigurationItem } from '../../models/composite-configuration-item';
import { DaffProduct } from '../../models/product';

export interface DaffCompositeProductEntity {
	id: DaffProduct['id'];
	items: Dictionary<DaffCompositeConfigurationItem>;
}
