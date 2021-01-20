import { DaffOrderShipmentItem } from '@daffodil/order';
import { DaffModelFactory } from '@daffodil/core/testing';
export declare class MockOrderShipmentItem implements DaffOrderShipmentItem {
    item: any;
    qty: any;
}
export declare class DaffOrderShipmentItemFactory extends DaffModelFactory<DaffOrderShipmentItem> {
    constructor();
}
