import { DaffCustomerStoreCredit } from '@daffodil/customer-store-credit';

import { MagentoCustomerStoreCredit } from '../../models/public_api';

export const magentoCustomerStoreCreditTransform = (storeCredit: MagentoCustomerStoreCredit): DaffCustomerStoreCredit => ({
  balance: storeCredit.current_balance.value,
});
