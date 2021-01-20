import { DaffCart } from '@daffodil/cart';
import { MagentoCart } from '../../models/responses/cart';
export declare function transformCartTotals(cart: Partial<MagentoCart>): {
    totals: DaffCart['totals'];
};
