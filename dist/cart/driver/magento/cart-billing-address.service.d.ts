import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { DocumentNode } from 'graphql';
import { DaffQueuedApollo } from '@daffodil/core/graphql';
import { DaffCartAddress, DaffCart } from '@daffodil/cart';
import { DaffCartBillingAddressServiceInterface } from '@daffodil/cart/driver';
import { DaffMagentoBillingAddressInputTransformer } from './transforms/inputs/billing-address.service';
import { DaffMagentoCartTransformer } from './transforms/outputs/cart.service';
import { DaffMagentoBillingAddressTransformer } from './transforms/outputs/billing-address.service';
/**
 * A service for making Magento GraphQL queries for carts.
 */
export declare class DaffMagentoCartBillingAddressService implements DaffCartBillingAddressServiceInterface {
    private apollo;
    private mutationQueue;
    extraCartFragments: DocumentNode[];
    cartTransformer: DaffMagentoCartTransformer;
    billingAddressTransformer: DaffMagentoBillingAddressTransformer;
    billingAddressInputTransformer: DaffMagentoBillingAddressInputTransformer;
    constructor(apollo: Apollo, mutationQueue: DaffQueuedApollo, extraCartFragments: DocumentNode[], cartTransformer: DaffMagentoCartTransformer, billingAddressTransformer: DaffMagentoBillingAddressTransformer, billingAddressInputTransformer: DaffMagentoBillingAddressInputTransformer);
    get(cartId: string): Observable<DaffCartAddress>;
    update(cartId: string, address: Partial<DaffCartAddress>): Observable<Partial<DaffCart>>;
    private updateAddress;
    private updateAddressWithEmail;
}
