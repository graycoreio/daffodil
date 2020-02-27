import { MagentoMoney } from './money';

export interface MagentoProduct {
  id: number;
  image: {
    label: string;
    url: string;
  };
  manufacturer: number;
  name: string;
  description: string;
  price_range: {
    maximum_price: MagentoMoney;
    minumum_price: MagentoMoney;
  };
  sku: string;
}
