import { DaffCartItemInput, DaffCompositeCartItemInput, DaffConfigurableCartItemInput } from '@daffodil/cart';
import { MagentoCartItemInput, MagentoBundledCartItemInput, MagentoConfigurableCartItemInput } from '../../models/requests/cart-item';
export declare function transformCompositeCartItem(item: DaffCompositeCartItemInput): MagentoBundledCartItemInput;
export declare function transformSimpleCartItem(item: DaffCartItemInput): MagentoCartItemInput;
export declare function transformConfigurableCartItem(item: DaffConfigurableCartItemInput): MagentoConfigurableCartItemInput;
