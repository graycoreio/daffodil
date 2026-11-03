import { DaffCart } from '@daffodil/cart';
import { DaffCartMagentoCartTransform } from '@daffodil/cart/driver/magento';
import { DaffCartWithStoreCredit } from '@daffodil/cart-store-credit';

import { MagentoCartWithStoreCredit } from '../../models/public_api';

export const magentoCartWithStoreCreditTransform:
DaffCartMagentoCartTransform<MagentoCartWithStoreCredit, DaffCartWithStoreCredit> =
  (daffCart: DaffCart, magentoCart: MagentoCartWithStoreCredit): DaffCartWithStoreCredit => ({
    ...daffCart,
    appliedStoreCredit: magentoCart.applied_store_credit?.applied_balance.value ?? 0,
  });
