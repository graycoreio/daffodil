import { Apollo } from 'apollo-angular';
import { DocumentNode } from 'graphql';
import { Observable } from 'rxjs';
import { DaffCartShippingRate } from '@daffodil/cart';
import { DaffCartShippingMethodsServiceInterface } from '@daffodil/cart/driver';
import { DaffMagentoCartShippingRateTransformer } from './transforms/outputs/cart-shipping-rate.service';
/**
 * A service for making Magento GraphQL queries for carts' shipping methods.
 */
export declare class DaffMagentoCartShippingMethodsService implements DaffCartShippingMethodsServiceInterface {
    private apollo;
    extraCartFragments: DocumentNode[];
    shippingRateTransformer: DaffMagentoCartShippingRateTransformer;
    constructor(apollo: Apollo, extraCartFragments: DocumentNode[], shippingRateTransformer: DaffMagentoCartShippingRateTransformer);
    list(cartId: string): Observable<DaffCartShippingRate[]>;
}
