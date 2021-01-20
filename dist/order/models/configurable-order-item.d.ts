import { DaffOrderItem } from './order-item';
export interface DaffConfigurableOrderItem extends DaffOrderItem {
    attributes: DaffConfigurableOrderItemAttribute[];
}
export interface DaffConfigurableOrderItemAttribute {
    attribute_label: string;
    value_label: string;
}
