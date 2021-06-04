import {
  Injectable,
  Inject,
} from '@angular/core';
import { Apollo } from 'apollo-angular';
import { DocumentNode } from 'graphql';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  DaffCartItem,
  DaffCartItemInput,
  DaffCart,
  DaffCartItemInputType,
  DaffCompositeCartItemInput,
  DaffConfigurableCartItemInput,
} from '@daffodil/cart';
import { DaffCartItemServiceInterface } from '@daffodil/cart/driver';
import { DaffQueuedApollo } from '@daffodil/core/graphql';

import { DAFF_MAGENTO_CART_MUTATION_QUEUE } from './injection-tokens/cart-mutation-queue.token';
import { DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS } from './injection-tokens/public_api';
import { MagentoCartItemInput } from './models/requests/cart-item';
import { addCartItem } from './queries/add-cart-item';
import {
  listCartItems,
  removeCartItem,
  updateCartItem,
} from './queries/public_api';
import { MagentoAddCartItemResponse } from './queries/responses/add-cart-item';
import { MagentoListCartItemsResponse } from './queries/responses/list-cart-items';
import { MagentoUpdateCartItemResponse } from './queries/responses/public_api';
import { MagentoRemoveCartItemResponse } from './queries/responses/remove-cart-item';
import {
  transformCompositeCartItem,
  transformSimpleCartItem,
  transformConfigurableCartItem,
} from './transforms/inputs/cart-item-input-transformers';
import { DaffMagentoCartItemUpdateInputTransformer } from './transforms/inputs/cart-item-update.service';
import { transformMagentoCartItem } from './transforms/outputs/cart-item/cart-item-transformer';
import { DaffMagentoCartTransformer } from './transforms/outputs/cart.service';

/**
 * A service for making Magento GraphQL queries for carts.
 *
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffMagentoCartItemService implements DaffCartItemServiceInterface {
  constructor(
    private apollo: Apollo,
    @Inject(DAFF_MAGENTO_CART_MUTATION_QUEUE) private mutationQueue: DaffQueuedApollo,
    @Inject(DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS) public extraCartFragments: DocumentNode[],
    public cartTransformer: DaffMagentoCartTransformer,
    public cartItemUpdateInputTransformer: DaffMagentoCartItemUpdateInputTransformer,
  ) {}

  list(cartId: DaffCart['id']): Observable<DaffCartItem[]> {
    return this.apollo.query<MagentoListCartItemsResponse>({
      query: listCartItems(this.extraCartFragments),
      variables: { cartId },
    }).pipe(
      map(result => result.data.cart.items.map(transformMagentoCartItem)),
    );
  }

  get(cartId: DaffCart['id'], itemId: DaffCartItem['item_id']): Observable<DaffCartItem> {
    return this.list(cartId).pipe(
      map(items => items.find(item => item.item_id === itemId)),
    );
  }

  add(cartId: DaffCart['id'], cartItemInput: DaffCartItemInput): Observable<Partial<DaffCart>> {
    switch(cartItemInput.type) {
      case (DaffCartItemInputType.Composite):
        return this.addBundledProduct(cartId, <DaffCompositeCartItemInput>cartItemInput);
      case (DaffCartItemInputType.Configurable):
        return this.addConfigurableProduct(cartId, <DaffConfigurableCartItemInput>cartItemInput);
      default:
        return this.addSimpleProduct(cartId, cartItemInput);
    }
  }

  update(cartId: DaffCart['id'], itemId: DaffCartItem['item_id'], changes: Partial<DaffCartItem>): Observable<Partial<DaffCart>> {
    return this.mutationQueue.mutate<MagentoUpdateCartItemResponse>({
      mutation: updateCartItem(this.extraCartFragments),
      variables: {
        cartId,
        input: this.cartItemUpdateInputTransformer.transform({
          ...changes,
          item_id: itemId,
        }),
      },
    }).pipe(
      map(result => this.cartTransformer.transform(result.data.updateCartItems.cart)),
    );
  }

  delete(cartId: DaffCart['id'], itemId: DaffCartItem['item_id']): Observable<Partial<DaffCart>> {
    return this.mutationQueue.mutate<MagentoRemoveCartItemResponse>({
      mutation: removeCartItem(this.extraCartFragments),
      variables: {
        cartId,
        itemId,
      },
    }).pipe(
      map(result => this.cartTransformer.transform(result.data.removeItemFromCart.cart)),
    );
  }

  private addBundledProduct(cartId: DaffCart['id'], cartItemInput: DaffCompositeCartItemInput): Observable<Partial<DaffCart>> {
    return this.addCartItemRequest(cartId, transformCompositeCartItem(cartItemInput));
  }

  private addConfigurableProduct(cartId: DaffCart['id'], cartItemInput: DaffConfigurableCartItemInput): Observable<Partial<DaffCart>> {
    return this.addCartItemRequest(cartId, transformConfigurableCartItem(cartItemInput));
  }

  private addSimpleProduct(cartId: DaffCart['id'], cartItemInput: DaffCartItemInput): Observable<Partial<DaffCart>> {
    return this.addCartItemRequest(cartId, transformSimpleCartItem(cartItemInput));
  }

  private addCartItemRequest(cartId: DaffCart['id'], input: MagentoCartItemInput): Observable<Partial<DaffCart>> {
    return this.mutationQueue.mutate<MagentoAddCartItemResponse>({
      mutation: addCartItem(this.extraCartFragments),
      variables: {
        cartId,
        input,
      },
    }).pipe(
      map(result => this.cartTransformer.transform(result.data.addProductsToCart.cart)),
    );
  }
}
