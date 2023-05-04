import { DaffMagentoCustomerOrderExtraTransform } from '@daffodil/customer-order/driver/magento';
import { DAFF_CUSTOMER_STORE_CREDIT_ORDER_TOTAL_TYPE } from '@daffodil/customer-store-credit';
import { DaffOrder } from '@daffodil/order';

import { MagentoCustomerOrderWithStoreCredit } from '../../models/public_api';

export const magentoCustomerOrderWithStoreCreditTransform: DaffMagentoCustomerOrderExtraTransform<MagentoCustomerOrderWithStoreCredit> = (daffOrder: DaffOrder, magentoOrder: MagentoCustomerOrderWithStoreCredit, email: string): DaffOrder => ({
  ...daffOrder,
  totals: [
    ...daffOrder.totals,
    {
      type: DAFF_CUSTOMER_STORE_CREDIT_ORDER_TOTAL_TYPE,
      label: 'Store Credit',
      value: magentoOrder.total?.total_store_credit.value,
      // before grand total and after tax
      sort_order: 35,
    },
  ].sort((a, b) => a.sort_order - b.sort_order),
});
