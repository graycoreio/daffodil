import {Apollo} from 'apollo-angular';
import { Injectable, Inject } from '@angular/core';
import { DocumentNode } from 'graphql';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DaffQueuedApollo } from '@daffodil/core/graphql'
import { DaffCartItem, DaffCartItemInput, DaffCart, DaffCartItemInputType, DaffCompositeCartItemInput, DaffConfigurableCartItemInput } from '@daffodil/cart';
import { DaffCartItemServiceInterface } from '@daffodil/cart/driver';

import { DaffMagentoCartTransformer } from './transforms/outputs/cart.service';
import {
	listCartItems,
	addConfigurableCartItem,
	addBundleCartItem,
	addSimpleCartItem,
  removeCartItem,
  updateCartItem
} from './queries/public_api';
import { MagentoConfigurableCartItemInput } from './models/requests/cart-item';
import { transformCompositeCartItem, transformSimpleCartItem, transformConfigurableCartItem } from './transforms/inputs/cart-item-input-transformers';
import { MagentoListCartItemsResponse } from './queries/responses/list-cart-items';
import { MagentoAddSimpleCartItemResponse, MagentoAddBundleCartItemResponse, MagentoAddConfigurableCartItemResponse } from './queries/responses/add-cart-item';
import { MagentoRemoveCartItemResponse } from './queries/responses/remove-cart-item';
import { DaffMagentoCartItemUpdateInputTransformer } from './transforms/inputs/cart-item-update.service';
import { MagentoUpdateCartItemResponse } from './queries/responses/public_api';
import { transformMagentoCartItem } from './transforms/outputs/cart-item/cart-item-transformer';
import { DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS } from './injection-tokens/public_api';
import { DAFF_MAGENTO_CART_MUTATION_QUEUE } from './injection-tokens/cart-mutation-queue.token';

/**
 * A service for making Magento GraphQL queries for carts.
 */
@Injectable({
  providedIn: 'root'
})
export class DaffMagentoCartItemService implements DaffCartItemServiceInterface {
  constructor(
    private apollo: Apollo,
    @Inject(DAFF_MAGENTO_CART_MUTATION_QUEUE) private mutationQueue: DaffQueuedApollo,
    @Inject(DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS) public extraCartFragments: DocumentNode[],
    public cartTransformer: DaffMagentoCartTransformer,
    public cartItemUpdateInputTransformer: DaffMagentoCartItemUpdateInputTransformer
  ) {}

  list(cartId: string): Observable<DaffCartItem[]> {
    return this.apollo.query<MagentoListCartItemsResponse>({
      query: listCartItems(this.extraCartFragments),
      variables: {cartId}
    }).pipe(
      map(result => result.data.cart.items.map(transformMagentoCartItem))
    )
  }

  get(cartId: string, itemId: number): Observable<DaffCartItem> {
    return this.list(cartId).pipe(
      map(items => items.find(item => Number(item.item_id) === itemId))
    )
  }

  add(cartId: string, cartItemInput: DaffCartItemInput): Observable<Partial<DaffCart>> {
		switch(cartItemInput.type) {
			case (DaffCartItemInputType.Composite):
				return this.addBundledProduct(cartId, <DaffCompositeCartItemInput>cartItemInput);
			case (DaffCartItemInputType.Configurable):
				return this.addConfigurableProduct(cartId, <DaffConfigurableCartItemInput>cartItemInput);
			default:
				return this.addSimpleProduct(cartId, cartItemInput);
		}
  }

  update(cartId: string, itemId: number, changes: Partial<DaffCartItem>): Observable<Partial<DaffCart>> {
    return this.mutationQueue.mutate<MagentoUpdateCartItemResponse>({
      mutation: updateCartItem(this.extraCartFragments),
      variables: {
        cartId,
        input: this.cartItemUpdateInputTransformer.transform({
          ...changes,
          item_id: itemId
        })
      }
    }).pipe(
      map(result => this.cartTransformer.transform(result.data.updateCartItems.cart))
    )
  }

  delete(cartId: string, itemId: number): Observable<Partial<DaffCart>> {
    return this.mutationQueue.mutate<MagentoRemoveCartItemResponse>({
      mutation: removeCartItem(this.extraCartFragments),
      variables: {
        cartId,
        itemId
      }
    }).pipe(
      map(result => this.cartTransformer.transform(result.data.removeItemFromCart.cart))
    )
  }

	private addBundledProduct(cartId: string, cartItemInput: DaffCompositeCartItemInput): Observable<Partial<DaffCart>> {
		const bundleInput = transformCompositeCartItem(cartItemInput);
		return this.mutationQueue.mutate<MagentoAddBundleCartItemResponse>({
      mutation: addBundleCartItem(this.extraCartFragments),
      variables: {
        cartId,
				input: bundleInput.input,
				options: bundleInput.options
      }
    }).pipe(
      map(result => this.cartTransformer.transform(result.data.addBundleProductsToCart.cart))
    )
	}

	private addConfigurableProduct(cartId: string, cartItemInput: DaffConfigurableCartItemInput): Observable<Partial<DaffCart>> {
		const configurableInput: MagentoConfigurableCartItemInput = transformConfigurableCartItem(cartItemInput);
		return this.mutationQueue.mutate<MagentoAddConfigurableCartItemResponse>({
      mutation: addConfigurableCartItem(this.extraCartFragments),
      variables: {
				cartId,
				parentSku: configurableInput.parentSku,
				data: configurableInput.data
      }
    }).pipe(
      map(result => this.cartTransformer.transform(result.data.addConfigurableProductsToCart.cart))
    )
	}

	private addSimpleProduct(cartId: string, cartItemInput: DaffCartItemInput): Observable<Partial<DaffCart>> {
		return this.mutationQueue.mutate<MagentoAddSimpleCartItemResponse>({
      mutation: addSimpleCartItem(this.extraCartFragments),
      variables: {
        cartId,
        input: transformSimpleCartItem(cartItemInput)
      }
    }).pipe(
      map(result => this.cartTransformer.transform(result.data.addSimpleProductsToCart.cart))
    )
	}
}
