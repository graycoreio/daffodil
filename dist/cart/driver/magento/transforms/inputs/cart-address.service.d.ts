import { DaffCartAddress } from '@daffodil/cart';
import { MagentoCartAddressInput } from '../../models/requests/cart-address';
export declare class DaffMagentoCartAddressInputTransformer {
    transform(cartAddress: Partial<DaffCartAddress>): MagentoCartAddressInput;
}
