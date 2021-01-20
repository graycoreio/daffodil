import { DaffCompositeOrderItem, DaffOrderItemType } from '@daffodil/order';
import { DaffModelFactory } from '@daffodil/core/testing';
import { MockOrderItem } from './order-item.factory';
export declare class MockCompositeOrderItem extends MockOrderItem implements DaffCompositeOrderItem {
    type: DaffOrderItemType;
    options: {
        option_label: any;
        value_label: any;
    }[];
}
export declare class DaffCompositeOrderItemFactory extends DaffModelFactory<DaffCompositeOrderItem> {
    constructor();
}
