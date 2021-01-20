import { DaffCartAddress } from '@daffodil/cart';
import { MagentoShippingAddressInput } from '../../models/requests/shipping-address';
import { DaffMagentoCartAddressInputTransformer } from './cart-address.service';
export declare class DaffMagentoShippingAddressInputTransformer {
    private cartAddressTransformer;
    constructor(cartAddressTransformer: DaffMagentoCartAddressInputTransformer);
    transform(cartAddress: Partial<DaffCartAddress>): MagentoShippingAddressInput;
}
