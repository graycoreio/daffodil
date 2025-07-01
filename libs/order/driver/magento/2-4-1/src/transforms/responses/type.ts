import { DaffOrder } from '@daffodil/order';

import { MagentoOrder } from '../../models/responses/public_api';

export type MagentoOrderTransform<T extends MagentoOrder = MagentoOrder, V extends DaffOrder = DaffOrder> =
  (magentoOrder: T) => V;
