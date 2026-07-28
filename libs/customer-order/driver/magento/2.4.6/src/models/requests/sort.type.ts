import { MagentoSortEnum } from '@daffodil/driver/magento';

import { MagentoCustomerOrderSortableField } from './sortable-field.enum';

export interface MagentoCustomerOrderSortInput {
  sort_direction: MagentoSortEnum;
  sort_field: MagentoCustomerOrderSortableField;
}
