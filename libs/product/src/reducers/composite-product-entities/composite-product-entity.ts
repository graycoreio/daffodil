import { Dictionary } from '@ngrx/entity';

import { ID } from '@daffodil/core';

import { DaffCompositeConfigurationItem } from '../../models/composite-configuration-item';

export interface DaffCompositeProductEntity {
	id: ID;
	items: Dictionary<DaffCompositeConfigurationItem>;
}
