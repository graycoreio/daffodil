import { DaffCartItem } from './cart-item';
export interface DaffConfigurableCartItem extends DaffCartItem {
    attributes: DaffConfigurableCartItemAttribute[];
}
export interface DaffConfigurableCartItemAttribute {
    attribute_label: string;
    value_label: string;
}
