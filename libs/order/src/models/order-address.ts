import { DaffPersonalAddress } from '@daffodil/geography';

import { DaffOrder } from './order';

export interface DaffOrderAddress extends DaffPersonalAddress {
  order_id: DaffOrder['id'];
}
