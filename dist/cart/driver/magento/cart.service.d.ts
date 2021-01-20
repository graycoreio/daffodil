import { Apollo } from 'apollo-angular';
import { DocumentNode } from 'graphql';
import { Observable } from 'rxjs';
import { DaffQueuedApollo } from '@daffodil/core/graphql';
import { DaffCart, DaffCartItem, DaffCartItemInput } from '@daffodil/cart';
import { DaffCartServiceInterface, DaffCartItemServiceInterface } from '@daffodil/cart/driver';
import { DaffMagentoCartTransformer } from './transforms/outputs/cart.service';
/**
 * A service for making Magento GraphQL queries for carts.
 */
export declare class DaffMagentoCartService implements DaffCartServiceInterface<DaffCart> {
    private apollo;
    private mutationQueue;
    cartTransformer: DaffMagentoCartTransformer;
    private cartItemDriver;
    extraCartFragments: DocumentNode[];
    constructor(apollo: Apollo, mutationQueue: DaffQueuedApollo, cartTransformer: DaffMagentoCartTransformer, cartItemDriver: DaffCartItemServiceInterface<DaffCartItem, DaffCartItemInput, DaffCart>, extraCartFragments: DocumentNode[]);
    get(cartId: string): Observable<DaffCart>;
    create(): Observable<{
        id: string;
    }>;
    addToCart(productId: string, qty: number): Observable<DaffCart>;
    clear(cartId: string): Observable<Partial<DaffCart>>;
}
