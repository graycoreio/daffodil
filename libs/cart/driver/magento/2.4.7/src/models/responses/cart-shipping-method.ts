import { MagentoMoney } from '@daffodil/driver/magento/2.4.7';

export interface MagentoCartShippingMethod {
  carrier_code: string;
  method_code: string;
  carrier_title: string;
  method_title: string;
  amount: MagentoMoney;
}
