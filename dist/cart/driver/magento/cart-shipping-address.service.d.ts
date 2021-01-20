import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { DocumentNode } from 'graphql';
import { DaffQueuedApollo } from '@daffodil/core/graphql';
import { DaffCartAddress, DaffCart } from '@daffodil/cart';
import { DaffCartShippingAddressServiceInterface } from '@daffodil/cart/driver';
import { DaffMagentoShippingAddressInputTransformer } from './transforms/inputs/shipping-address.service';
import { DaffMagentoCartTransformer } from './transforms/outputs/cart.service';
import { DaffMagentoShippingAddressTransformer } from './transforms/outputs/shipping-address.service';
/**
 * A service for making Magento GraphQL queries for a cart's shipping address.
 */
export declare class DaffMagentoCartShippingAddressService implements DaffCartShippingAddressServiceInterface {
    private apollo;
    private mutationQueue;
    extraCartFragments: DocumentNode[];
    cartTransformer: DaffMagentoCartTransformer;
    shippingAddressTransformer: DaffMagentoShippingAddressTransformer;
    shippingAddressInputTransformer: DaffMagentoShippingAddressInputTransformer;
    constructor(apollo: Apollo, mutationQueue: DaffQueuedApollo, extraCartFragments: DocumentNode[], cartTransformer: DaffMagentoCartTransformer, shippingAddressTransformer: DaffMagentoShippingAddressTransformer, shippingAddressInputTransformer: DaffMagentoShippingAddressInputTransformer);
    get(cartId: string): Observable<DaffCartAddress>;
    update(cartId: string, address: Partial<DaffCartAddress>): Observable<Partial<DaffCart>>;
    private updateAddress;
    private updateAddressWithEmail;
}
