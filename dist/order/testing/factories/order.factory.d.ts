import { DaffOrder } from '@daffodil/order';
import { DaffModelFactory } from '@daffodil/core/testing';
export declare class MockOrder implements DaffOrder {
    id: any;
    customer_id: any;
    created_at: any;
    updated_at: any;
    status: any;
    totals: any[];
    applied_codes: any[];
    items: any[];
    billing_addresses: any[];
    shipping_addresses: any[];
    shipments: any[];
    payment: any;
    invoices: any[];
    credits: any[];
}
export declare class DaffOrderFactory extends DaffModelFactory<DaffOrder> {
    constructor();
}
