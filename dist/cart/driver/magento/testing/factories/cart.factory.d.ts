import { MagentoCart } from '@daffodil/cart/driver/magento';
import { DaffModelFactory } from '@daffodil/core/testing';
import { MagentoMoney } from '@daffodil/driver/magento';
export declare class MockMagentoCart implements MagentoCart {
    __typename: string;
    id: any;
    prices: {
        __typename: string;
        subtotal_excluding_tax: MagentoMoney;
        grand_total: MagentoMoney;
        subtotal_including_tax: MagentoMoney;
        subtotal_with_discount_excluding_tax: MagentoMoney;
        applied_taxes: {
            __typename: string;
            amount: MagentoMoney;
            label: string;
        }[];
        discounts: {
            __typename: string;
            amount: MagentoMoney;
            label: string;
        }[];
    };
    applied_coupons: any[];
    items: any[];
    billing_address: any;
    shipping_addresses: any[];
    available_payment_methods: any[];
    selected_payment_method: any;
    email: any;
    private money;
}
export declare class MagentoCartFactory extends DaffModelFactory<MagentoCart> {
    constructor();
}
