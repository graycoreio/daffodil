import { DaffOrderTotal, DaffOrderTotalTypeEnum } from '@daffodil/order';
import { DaffModelFactory } from '@daffodil/core/testing';
export declare class MockOrderTotal implements DaffOrderTotal {
    label: any;
    value: any;
    sort_order: any;
    type: DaffOrderTotalTypeEnum;
}
export declare class DaffOrderTotalFactory extends DaffModelFactory<DaffOrderTotal> {
    constructor();
}
