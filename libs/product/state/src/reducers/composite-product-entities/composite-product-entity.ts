import { Dictionary } from '@ngrx/entity';

import {
  DaffProduct,
  DaffCompositeConfigurationItem,
} from '@daffodil/product';

export interface DaffCompositeProductEntity {
  id: DaffProduct['id'];
  items: Dictionary<DaffCompositeConfigurationItem>;
}
