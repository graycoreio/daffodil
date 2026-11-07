import { MagentoMoney } from './money';

export interface MagentoDiscount {
  __typename?: string;
  amount: MagentoMoney;
  label: string;
}
