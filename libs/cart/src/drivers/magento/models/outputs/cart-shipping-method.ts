import { MagentoMoney } from '@daffodil/driver/magento'

export interface MagentoCartShippingMethod {
  carrier_code: string;
  method_code: string;
  carrier_title: string;
  method_title: string;
  amount: MagentoMoney;
}
