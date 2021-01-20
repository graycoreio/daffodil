import { DaffCartAddress } from '@daffodil/cart';
import { DaffMagentoCartAddressTransformer } from './cart-address.service';
import { MagentoCartAddress } from '../../models/responses/cart-address';
/**
 * Transforms magento addresses into an object usable by daffodil.
 */
export declare class DaffMagentoBillingAddressTransformer {
    addressTransformer: DaffMagentoCartAddressTransformer;
    constructor(addressTransformer: DaffMagentoCartAddressTransformer);
    /**
     * Transforms the magento MagentoCart from the magento cart query into a DaffCartAddress.
     * @param address the address from a magento cart query.
     */
    transform(address: MagentoCartAddress): DaffCartAddress;
}
