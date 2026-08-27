import { DaffCartStateRootSlice } from '@daffodil/cart/types/daffodil-cart-state';
import { DaffCartWithCrossSellProducts } from '@daffodil/cross-sell-products';
import { DaffProduct } from '@daffodil/product';
import { DaffProductStateRootSlice } from '@daffodil/product/state';

/**
 * The footprint of the cross-sell product feature in the root state.
 */
export interface DaffCrossSellProductStateRootSlice<T extends DaffProduct = DaffProduct> extends DaffProductStateRootSlice<T>, DaffCartStateRootSlice<DaffCartWithCrossSellProducts<T>> {}
