import { DaffCartAddress } from '@daffodil/cart';
import { MagentoBillingAddressInput } from '../../models/requests/billing-address';
import { DaffMagentoCartAddressInputTransformer } from './cart-address.service';
export declare class DaffMagentoBillingAddressInputTransformer {
    private cartAddressTransformer;
    constructor(cartAddressTransformer: DaffMagentoCartAddressInputTransformer);
    transform(cartAddress: Partial<DaffCartAddress>): MagentoBillingAddressInput;
}
