import { DaffCart } from '@daffodil/cart';
import { DaffCartWithStoreCredit } from '@daffodil/cart-store-credit';
import { DaffCartMagentoCartTransform } from '@daffodil/cart/driver/magento';

import { MagentoCartWithStoreCredit } from '../../models/public_api';

export const magentoCartWithStoreCreditTransform: DaffCartMagentoCartTransform<MagentoCartWithStoreCredit, DaffCartWithStoreCredit> = (daffCart: DaffCart, storeCredit: MagentoCartWithStoreCredit): DaffCartWithStoreCredit => ({
  ...daffCart,
  appliedStoreCredit: storeCredit.applied_store_credit.applied_balance.value,
});
