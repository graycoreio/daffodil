import { DaffCartItem } from '@daffodil/cart';
import { MagentoCartItemUpdateInput } from '../../models/requests/cart-item-update';
export declare class DaffMagentoCartItemUpdateInputTransformer {
    transform(item: Partial<DaffCartItem>): MagentoCartItemUpdateInput;
}
