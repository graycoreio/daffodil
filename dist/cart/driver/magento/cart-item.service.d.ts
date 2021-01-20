import { Apollo } from 'apollo-angular';
import { DocumentNode } from 'graphql';
import { Observable } from 'rxjs';
import { DaffQueuedApollo } from '@daffodil/core/graphql';
import { DaffCartItem, DaffCartItemInput, DaffCart } from '@daffodil/cart';
import { DaffCartItemServiceInterface } from '@daffodil/cart/driver';
import { DaffMagentoCartTransformer } from './transforms/outputs/cart.service';
import { DaffMagentoCartItemUpdateInputTransformer } from './transforms/inputs/cart-item-update.service';
/**
 * A service for making Magento GraphQL queries for carts.
 */
export declare class DaffMagentoCartItemService implements DaffCartItemServiceInterface {
    private apollo;
    private mutationQueue;
    extraCartFragments: DocumentNode[];
    cartTransformer: DaffMagentoCartTransformer;
    cartItemUpdateInputTransformer: DaffMagentoCartItemUpdateInputTransformer;
    constructor(apollo: Apollo, mutationQueue: DaffQueuedApollo, extraCartFragments: DocumentNode[], cartTransformer: DaffMagentoCartTransformer, cartItemUpdateInputTransformer: DaffMagentoCartItemUpdateInputTransformer);
    list(cartId: string): Observable<DaffCartItem[]>;
    get(cartId: string, itemId: number): Observable<DaffCartItem>;
    add(cartId: string, cartItemInput: DaffCartItemInput): Observable<Partial<DaffCart>>;
    update(cartId: string, itemId: number, changes: Partial<DaffCartItem>): Observable<Partial<DaffCart>>;
    delete(cartId: string, itemId: number): Observable<Partial<DaffCart>>;
    private addBundledProduct;
    private addConfigurableProduct;
    private addSimpleProduct;
}
