import { DaffOrderPayment } from '@daffodil/checkout';
import { DaffModelFactory } from '@daffodil/core/testing';
/**
 * @deprecated
 */
export declare class MockOrderPayment implements DaffOrderPayment {
    payment_id: any;
    quote_id: any;
    created_at: Date;
    updated_at: Date;
    method: string;
    cc_type: string;
    cc_number_enc: any;
    cc_last4: any;
    cc_cid_enc: any;
    cc_owner: string;
    cc_exp_month: string;
    cc_exp_year: string;
    cc_ss_owner: string;
    cc_ss_start_month: string;
    cc_ss_start_year: string;
    po_number: string;
    cc_ss_issue: string;
}
/**
 * @deprecated
 */
export declare class DaffOrderPaymentFactory extends DaffModelFactory<DaffOrderPayment> {
    constructor();
}
