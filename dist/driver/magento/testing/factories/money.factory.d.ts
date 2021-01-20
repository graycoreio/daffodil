import { DaffModelFactory } from '@daffodil/core/testing';
import { MagentoMoney } from '@daffodil/driver/magento';
export declare class MockMagentoMoney implements MagentoMoney {
    __typename: string;
    value: any;
    currency: any;
}
export declare class MagentoMoneyFactory extends DaffModelFactory<MagentoMoney> {
    constructor();
}
