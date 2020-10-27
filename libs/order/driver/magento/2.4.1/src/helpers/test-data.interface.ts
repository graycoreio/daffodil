import {
  DaffOrder,
} from '@daffodil/order';

import {
  MagentoOrder,
} from '../models/responses/public_api';

export interface MagentoOrderTestData {
  mockDaffOrder: DaffOrder;
  mockMagentoOrder: MagentoOrder
}
