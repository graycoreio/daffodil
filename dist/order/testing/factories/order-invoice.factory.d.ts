import { DaffOrderInvoice } from '@daffodil/order';
import { DaffModelFactory } from '@daffodil/core/testing';
export declare class MockOrderInvoice implements DaffOrderInvoice {
    items: any[];
    totals: any[];
    billing_address: any;
    shipping_address: any;
    payment: any;
    shipping_method: any;
}
export declare class DaffOrderInvoiceFactory extends DaffModelFactory<DaffOrderInvoice> {
    constructor();
}
