import { DaffOrder } from '@daffodil/order';

import { MagentoOrder } from '../../models/responses/public_api';

export type MagentoOrderExtraTransform<T extends MagentoOrder = MagentoOrder, V extends DaffOrder = DaffOrder> =
  (daffOrder: DaffOrder, magentoOrder: T) => V;
