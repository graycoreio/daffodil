import { DaffConfigurableOrderItem, DaffOrderItemType } from '@daffodil/order';
import { DaffModelFactory } from '@daffodil/core/testing';
import { MockOrderItem } from './order-item.factory';
export declare class MockConfigurableOrderItem extends MockOrderItem implements DaffConfigurableOrderItem {
    type: DaffOrderItemType;
    attributes: {
        attribute_label: string;
        value_label: string;
    }[];
}
export declare class DaffConfigurableOrderItemFactory extends DaffModelFactory<DaffConfigurableOrderItem> {
    constructor();
}
