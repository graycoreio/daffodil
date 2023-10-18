import { DaffOrder } from '@daffodil/order';
import { MagentoOrder } from '@daffodil/order/driver/magento/2-4-1';

export interface MagentoOrderTestData {
  mockDaffOrder: DaffOrder;
  mockMagentoOrder: MagentoOrder;
}
