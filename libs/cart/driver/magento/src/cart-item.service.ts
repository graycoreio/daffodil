import {
  Injectable,
  Inject,
} from '@angular/core';
import { Apollo } from 'apollo-angular';
import { DocumentNode } from 'graphql';
import {
  Observable,
  of,
  throwError,
} from 'rxjs';
import {
  catchError,
  map,
  switchMap,
} from 'rxjs/operators';

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

import {
  magentoCartTransformUserError,
  transformCartMagentoError,
} from './errors/transform';
import { DAFF_MAGENTO_CART_MUTATION_QUEUE } from './injection-tokens/cart-mutation-queue.token';
import {
  DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS,
  DAFF_CART_MAGENTO_CART_ITEM_TRANSFORMS,
} from './injection-tokens/public_api';
import { DaffCartMagentoCartItemTransform } from './interfaces/public_api';
import { MagentoCartItemInput } from './models/requests/cart-item';
import {
  MagentoAddCartItemResponse,
  MagentoListCartItemsResponse,
  MagentoRemoveCartItemResponse,
  addCartItem,
  listCartItems,
  removeCartItem,
  updateCartItem,
} from './queries/public_api';
import { MagentoUpdateCartItemResponse } from './queries/public_api';
import {
  transformCompositeCartItem,
  transformSimpleCartItem,
  transformConfigurableCartItem,
} from './transforms/inputs/cart-item-input-transformers';
import { DaffMagentoCartItemUpdateInputTransformer } from './transforms/inputs/cart-item-update.service';
import {
  daffTransformMagentoCartItem,
  transformMagentoCartItem,
} from './transforms/outputs/cart-item/cart-item-transformer';
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
    @Inject(DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS) private extraCartFragments: DocumentNode[],
    @Inject(DAFF_CART_MAGENTO_CART_ITEM_TRANSFORMS) private cartItemTransforms: DaffCartMagentoCartItemTransform[],
    private cartTransformer: DaffMagentoCartTransformer,
    private cartItemUpdateInputTransformer: DaffMagentoCartItemUpdateInputTransformer,
  ) {}

  list(cartId: DaffCart['id']): Observable<DaffCartItem[]> {
    return this.apollo.query<MagentoListCartItemsResponse>({
      query: listCartItems(this.extraCartFragments),
      variables: { cartId },
      fetchPolicy: 'network-only',
    }).pipe(
      map(result => result.data.cart.items.filter(item => !!item)),
      map(items => items.map(item => transformMagentoCartItem(daffTransformMagentoCartItem(item), item, this.cartItemTransforms))),
      catchError(error => throwError(() => transformCartMagentoError(error))),
    );
  }

  get(cartId: DaffCart['id'], itemId: DaffCartItem['id']): Observable<DaffCartItem> {
    return this.list(cartId).pipe(
      map(items => items.find(item => item.id === itemId)),
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

  update(cartId: DaffCart['id'], itemId: DaffCartItem['id'], changes: Partial<DaffCartItem>): Observable<Partial<DaffCart>> {
    return this.mutationQueue.mutate<MagentoUpdateCartItemResponse>({
      mutation: updateCartItem(this.extraCartFragments),
      variables: {
        cartId,
        input: this.cartItemUpdateInputTransformer.transform({
          ...changes,
          id: itemId,
        }),
      },
      fetchPolicy: 'network-only',
    }).pipe(
      map(result => this.cartTransformer.transform(result.data.updateCartItems.cart)),
      catchError(err => throwError(() => transformCartMagentoError(err))),
    );
  }

  delete(cartId: DaffCart['id'], itemId: DaffCartItem['id']): Observable<Partial<DaffCart>> {
    return this.mutationQueue.mutate<MagentoRemoveCartItemResponse>({
      mutation: removeCartItem(this.extraCartFragments),
      variables: {
        cartId,
        itemId,
      },
      fetchPolicy: 'network-only',
    }).pipe(
      map(result => this.cartTransformer.transform(result.data.removeItemFromCart.cart)),
      catchError(error => throwError(() => transformCartMagentoError(error))),
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
      fetchPolicy: 'network-only',
    }).pipe(
      switchMap((result) =>
        result.data.addProductsToCart.user_errors.length > 0
          ? throwError(() => magentoCartTransformUserError(result.data.addProductsToCart.user_errors[0]))
          : of(this.cartTransformer.transform(result.data.addProductsToCart.cart)),
      ),
      catchError(err => throwError(() => transformCartMagentoError(err))),
    );
  }
}
