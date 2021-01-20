import { DaffOrderItem } from './order-item';
export interface DaffCompositeOrderItem extends DaffOrderItem {
    options: DaffCompositeOrderItemOption[];
}
export interface DaffCompositeOrderItemOption {
    option_label: string;
    value_label: string;
}
