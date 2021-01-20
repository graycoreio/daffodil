import { ID } from '@daffodil/core';
import { DaffCartItem } from './cart-item';
export interface DaffCompositeCartItem extends DaffCartItem {
    options: DaffCompositeCartItemOption[];
}
export interface DaffCompositeCartItemOption {
    option_id: ID;
    option_label: string;
    value_label: string;
}
