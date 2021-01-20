import { DaffOrderPayment } from '@daffodil/order';
import { DaffModelFactory } from '@daffodil/core/testing';
export declare class MockOrderPayment implements DaffOrderPayment {
    payment_id: any;
    order_id: any;
    created_at: any;
    updated_at: any;
    method: string;
    cc_type: string;
    cc_last4: any;
    cc_owner: string;
    cc_exp_month: string;
    cc_exp_year: string;
}
export declare class DaffOrderPaymentFactory extends DaffModelFactory<DaffOrderPayment> {
    constructor();
}
