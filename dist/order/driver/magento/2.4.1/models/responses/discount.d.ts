import { MagentoMoney } from '@daffodil/driver/magento';
export interface MagentoDiscount {
    amount: MagentoMoney;
    label: string;
}
