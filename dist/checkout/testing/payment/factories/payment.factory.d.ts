import { PaymentInfo } from '@daffodil/checkout';
import { DaffModelFactory } from '@daffodil/core/testing';
export declare class MockPaymentInfo implements PaymentInfo {
    name: string;
    cardnumber: number;
    month: number;
    year: number;
    securitycode: number;
}
export declare class DaffPaymentFactory extends DaffModelFactory<PaymentInfo> {
    constructor();
}
