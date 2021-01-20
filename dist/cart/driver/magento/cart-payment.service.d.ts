import { Apollo } from 'apollo-angular';
import { DocumentNode } from 'graphql';
import { Observable } from 'rxjs';
import { DaffQueuedApollo } from '@daffodil/core/graphql';
import { DaffCartPaymentMethod, DaffCart, DaffCartAddress } from '@daffodil/cart';
import { DaffCartPaymentServiceInterface } from '@daffodil/cart/driver';
import { DaffMagentoCartPaymentTransformer } from './transforms/outputs/cart-payment.service';
import { DaffMagentoPaymentMethodInputTransformer } from './transforms/inputs/payment-method.service';
import { DaffMagentoCartTransformer } from './transforms/outputs/cart.service';
import { DaffMagentoBillingAddressInputTransformer } from './transforms/inputs/billing-address.service';
/**
 * A service for making Magento GraphQL queries for carts.
 */
export declare class DaffMagentoCartPaymentService implements DaffCartPaymentServiceInterface {
    private apollo;
    private mutationQueue;
    cartTransformer: DaffMagentoCartTransformer;
    paymentTransformer: DaffMagentoCartPaymentTransformer;
    paymentInputTransformer: DaffMagentoPaymentMethodInputTransformer;
    cartAddressInputTransformer: DaffMagentoBillingAddressInputTransformer;
    extraCartFragments: DocumentNode[];
    constructor(apollo: Apollo, mutationQueue: DaffQueuedApollo, cartTransformer: DaffMagentoCartTransformer, paymentTransformer: DaffMagentoCartPaymentTransformer, paymentInputTransformer: DaffMagentoPaymentMethodInputTransformer, cartAddressInputTransformer: DaffMagentoBillingAddressInputTransformer, extraCartFragments: DocumentNode[]);
    get(cartId: string): Observable<DaffCartPaymentMethod>;
    update(cartId: string, payment: Partial<DaffCartPaymentMethod>): Observable<Partial<DaffCart>>;
    updateWithBilling(cartId: string, payment: Partial<DaffCartPaymentMethod>, address: Partial<DaffCartAddress>): Observable<Partial<DaffCart>>;
    remove(cartId: string): Observable<void>;
    private updateWithBillingAddress;
    private updateWithBillingAddressAndEmail;
}
