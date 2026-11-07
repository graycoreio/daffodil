import { MagentoSortEnum } from '@daffodil/driver/magento/2.4.7';

import { MagentoCustomerOrderSortableField } from './sortable-field.enum';

export interface MagentoCustomerOrderSortInput {
  sort_direction: MagentoSortEnum;
  sort_field: MagentoCustomerOrderSortableField;
}
