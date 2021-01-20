import { DaffCart, DaffCartTotalTypeEnum } from '@daffodil/cart';
import { DaffModelFactory } from '@daffodil/core/testing';
export declare class MockCart implements DaffCart {
    id: any;
    subtotal: number;
    grand_total: number;
    coupons: any[];
    items: any[];
    billing_address: any;
    shipping_address: any;
    shipping_information: any;
    totals: {
        name: DaffCartTotalTypeEnum;
        value: number;
        label: string;
    }[];
    payment: any;
    available_shipping_methods: any[];
    available_payment_methods: any[];
    extra_attributes: {};
}
export declare class DaffCartFactory extends DaffModelFactory<DaffCart> {
    constructor();
}
