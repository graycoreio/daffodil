import { Observable } from 'rxjs';
import { DaffQueuedApollo } from '@daffodil/core/graphql';
import { DaffCart, DaffCartOrderResult } from '@daffodil/cart';
import { DaffCartOrderServiceInterface } from '@daffodil/cart/driver';
import { DaffMagentoCartTransformer } from './transforms/outputs/cart.service';
/**
 * A service for making Magento GraphQL queries for carts.
 */
export declare class DaffMagentoCartOrderService implements DaffCartOrderServiceInterface {
    private mutationQueue;
    cartTransformer: DaffMagentoCartTransformer;
    constructor(mutationQueue: DaffQueuedApollo, cartTransformer: DaffMagentoCartTransformer);
    placeOrder(cartId: DaffCart['id'], payment?: any): Observable<DaffCartOrderResult>;
}
