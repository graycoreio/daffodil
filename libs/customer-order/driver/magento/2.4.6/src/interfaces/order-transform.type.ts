import { DaffOrder } from '@daffodil/order';

import { MagentoCustomerOrder } from '../models/public_api';

export type DaffMagentoCustomerOrderTransform<T extends MagentoCustomerOrder = MagentoCustomerOrder, V extends DaffOrder = DaffOrder> =
  (magentoOrder: T, email: string) => V;
