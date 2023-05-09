import { DaffOrder } from '@daffodil/order';

import { MagentoCustomerOrder } from '../models/public_api';

export type DaffMagentoCustomerOrderExtraTransform<T extends MagentoCustomerOrder = MagentoCustomerOrder, V extends DaffOrder = DaffOrder> =
  (daffOrder: DaffOrder, magentoOrder: T, email: string) => V;
