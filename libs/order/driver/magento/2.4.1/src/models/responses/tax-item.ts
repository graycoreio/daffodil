import { MagentoMoney } from '@daffodil/driver/magento';

export interface MagentoTaxItem {
  amount: MagentoMoney;
  rate: number;
  title: string;
}
