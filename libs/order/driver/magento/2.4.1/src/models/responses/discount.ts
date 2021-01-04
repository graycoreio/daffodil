import { MagentoMoney } from '@daffodil/driver/magento';

export interface MagentoDiscount {
  __typename?: 'Discount';
  amount: MagentoMoney;
  label: string;
}
