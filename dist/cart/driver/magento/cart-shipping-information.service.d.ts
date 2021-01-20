import { Apollo } from 'apollo-angular';
import { DocumentNode } from 'graphql';
import { Observable } from 'rxjs';
import { DaffQueuedApollo } from '@daffodil/core/graphql';
import { DaffCartShippingRate, DaffCart } from '@daffodil/cart';
import { DaffCartShippingInformationServiceInterface } from '@daffodil/cart/driver';
import { DaffMagentoCartShippingRateTransformer } from './transforms/outputs/cart-shipping-rate.service';
import { DaffMagentoShippingMethodInputTransformer } from './transforms/inputs/shipping-method.service';
import { DaffMagentoCartTransformer } from './transforms/outputs/cart.service';
/**
 * A service for making Magento GraphQL queries for carts.
 */
export declare class DaffMagentoCartShippingInformationService implements DaffCartShippingInformationServiceInterface {
    private apollo;
    private mutationQueue;
    extraCartFragments: DocumentNode[];
    cartTransformer: DaffMagentoCartTransformer;
    shippingRateTransformer: DaffMagentoCartShippingRateTransformer;
    shippingMethodInputTransformer: DaffMagentoShippingMethodInputTransformer;
    constructor(apollo: Apollo, mutationQueue: DaffQueuedApollo, extraCartFragments: DocumentNode[], cartTransformer: DaffMagentoCartTransformer, shippingRateTransformer: DaffMagentoCartShippingRateTransformer, shippingMethodInputTransformer: DaffMagentoShippingMethodInputTransformer);
    get(cartId: string): Observable<DaffCartShippingRate>;
    update(cartId: string, shippingInfo: Partial<DaffCartShippingRate>): Observable<Partial<DaffCart>>;
    delete(cartId: string, id?: string | number): Observable<Partial<DaffCart>>;
}
