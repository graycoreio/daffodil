import { DaffCartPaymentMethod } from '@daffodil/cart';
import { DaffModelFactory } from '@daffodil/core/testing';
export declare class MockCartPayment implements DaffCartPaymentMethod {
    method: string;
}
export declare class DaffCartPaymentFactory extends DaffModelFactory<DaffCartPaymentMethod> {
    constructor();
}
