import { Apollo } from 'apollo-angular';
import { DocumentNode } from 'graphql';
import { Observable } from 'rxjs';
import { DaffCartPaymentMethod } from '@daffodil/cart';
import { DaffCartPaymentMethodsServiceInterface } from '@daffodil/cart/driver';
import { DaffMagentoCartPaymentTransformer } from './transforms/outputs/cart-payment.service';
/**
 * A service for making Magento GraphQL queries for carts.
 */
export declare class DaffMagentoCartPaymentMethodsService implements DaffCartPaymentMethodsServiceInterface {
    private apollo;
    extraCartFragments: DocumentNode[];
    paymentTransformer: DaffMagentoCartPaymentTransformer;
    constructor(apollo: Apollo, extraCartFragments: DocumentNode[], paymentTransformer: DaffMagentoCartPaymentTransformer);
    list(cartId: string): Observable<DaffCartPaymentMethod[]>;
}
