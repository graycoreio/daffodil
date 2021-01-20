import { Observable } from 'rxjs';
import { DocumentNode } from 'graphql';
import { DaffQueuedApollo } from '@daffodil/core/graphql';
import { DaffCartAddress, DaffCart } from '@daffodil/cart';
import { DaffCartAddressServiceInterface } from '@daffodil/cart/driver';
import { DaffMagentoCartTransformer } from './transforms/outputs/cart.service';
import { DaffMagentoShippingAddressTransformer } from './transforms/outputs/shipping-address.service';
import { DaffMagentoCartAddressInputTransformer } from './transforms/inputs/cart-address.service';
/**
 * A service for making Magento GraphQL queries for carts.
 */
export declare class DaffMagentoCartAddressService implements DaffCartAddressServiceInterface {
    private mutationQueue;
    extraCartFragments: DocumentNode[];
    cartTransformer: DaffMagentoCartTransformer;
    cartAddressTransformer: DaffMagentoShippingAddressTransformer;
    cartAddressInputTransformer: DaffMagentoCartAddressInputTransformer;
    constructor(mutationQueue: DaffQueuedApollo, extraCartFragments: DocumentNode[], cartTransformer: DaffMagentoCartTransformer, cartAddressTransformer: DaffMagentoShippingAddressTransformer, cartAddressInputTransformer: DaffMagentoCartAddressInputTransformer);
    update(cartId: string, address: Partial<DaffCartAddress>): Observable<Partial<DaffCart>>;
    private updateAddress;
    private updateAddressWithEmail;
}
