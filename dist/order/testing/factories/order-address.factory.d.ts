import { DaffOrderAddress } from '@daffodil/order';
import { DaffModelFactory } from '@daffodil/core/testing';
import { MockDaffPersonalAddress } from '@daffodil/geography/testing';
export declare class MockOrderAddress extends MockDaffPersonalAddress implements DaffOrderAddress {
    order_id: any;
}
export declare class DaffOrderAddressFactory extends DaffModelFactory<DaffOrderAddress> {
    constructor();
}
