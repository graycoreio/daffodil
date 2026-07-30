import { DaffSortOptions } from '@daffodil/core';

import { MagentoCustomerOrderSortableField } from '../../models/public_api';

export const magentoCustomerOrderSortFields: DaffSortOptions = {
  options: [
    {
      label: 'Date',
      value: MagentoCustomerOrderSortableField.CREATED_AT,
    },
    {
      label: 'Number',
      value: MagentoCustomerOrderSortableField.NUMBER,
    },
  ],
  default: MagentoCustomerOrderSortableField.CREATED_AT,
};
