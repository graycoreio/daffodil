import { MagentoMoney } from '@daffodil/driver/magento';
import { MagentoDiscount } from './discount';
export interface MagentoOrderTotal {
    discounts: MagentoDiscount[];
    grand_total: MagentoMoney;
    subtotal: MagentoMoney;
    total_shipping: MagentoMoney;
    total_tax: MagentoMoney;
}
