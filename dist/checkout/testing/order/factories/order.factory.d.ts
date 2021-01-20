import { DaffOrder } from '@daffodil/checkout';
import { DaffModelFactory } from '@daffodil/core/testing';
/**
 * @deprecated
 */
export declare class MockOrder implements DaffOrder {
    id: any;
    created_at: Date;
    updated_at: Date;
    store_to_base_rate: any;
    grand_total: any;
    checkout_method: string;
    customer_id: any;
    coupon_code: any;
    subtotal: any;
    subtotal_with_discount: any;
    items: any[];
    addresses: any[];
    payment: any;
}
/**
 * @deprecated
 */
export declare class DaffOrderFactory extends DaffModelFactory<DaffOrder> {
    constructor();
}
