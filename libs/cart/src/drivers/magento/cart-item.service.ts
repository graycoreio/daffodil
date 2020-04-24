import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DaffCartItemServiceInterface } from '../interfaces/cart-item-service.interface';
import { DaffCart } from '../../models/cart';
import { DaffCartItem } from '../../models/cart-item';
import { DaffCartItemInput, DaffCartItemInputType, DaffCompositeCartItemInput } from '../../models/cart-item-input';
import { DaffMagentoCartTransformer } from './transforms/outputs/cart.service';
import {
  listCartItems,
	addBundleCartItem,
	addSimpleCartItem,
  removeCartItem,
  updateCartItem
} from './queries/public_api';
import { DaffMagentoCartItemTransformer } from './transforms/outputs/cart-item.service';
import { transformCompositeCartItem, transformSimpleCartItem } from './transforms/inputs/cart-item-input-transformers';
import { MagentoListCartItemsResponse } from './models/responses/list-cart-items';
import { MagentoAddSimpleCartItemResponse, MagentoAddBundleCartItemResponse } from './models/responses/add-cart-item';
import { MagentoRemoveCartItemResponse } from './models/responses/remove-cart-item';
import { DaffMagentoCartItemUpdateInputTransformer } from './transforms/inputs/cart-item-update.service';
import { MagentoUpdateCartItemResponse } from './models/responses/public_api';

/**
 * A service for making Magento GraphQL queries for carts.
 */
@Injectable({
  providedIn: 'root'
})
export class DaffMagentoCartItemService implements DaffCartItemServiceInterface {
  constructor(
    private apollo: Apollo,
    public cartTransformer: DaffMagentoCartTransformer,
    public cartItemTransformer: DaffMagentoCartItemTransformer,
    public cartItemUpdateInputTransformer: DaffMagentoCartItemUpdateInputTransformer
  ) {}

  list(cartId: string): Observable<DaffCartItem[]> {
    return this.apollo.query<MagentoListCartItemsResponse>({
      query: listCartItems,
      variables: {cartId}
    }).pipe(
      map(result => result.data.cart.items.map(item => this.cartItemTransformer.transform(item)))
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
			default:
				return this.addSimpleProduct(cartId, cartItemInput);		
		}
  }

  update(cartId: string, itemId: number, changes: Partial<DaffCartItem>): Observable<Partial<DaffCart>> {
    return this.apollo.mutate<MagentoUpdateCartItemResponse>({
      mutation: updateCartItem,
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
    return this.apollo.mutate<MagentoRemoveCartItemResponse>({
      mutation: removeCartItem,
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
		return this.apollo.mutate<MagentoAddBundleCartItemResponse>({
      mutation: addBundleCartItem,
      variables: {
        cartId,
				input: bundleInput.input,
				options: bundleInput.options
      }
    }).pipe(
      map(result => this.cartTransformer.transform(result.data.addBundleProductsToCart.cart))
    )
	}

	private addSimpleProduct(cartId: string, cartItemInput: DaffCartItemInput): Observable<Partial<DaffCart>> {
		return this.apollo.mutate<MagentoAddSimpleCartItemResponse>({
      mutation: addSimpleCartItem,
      variables: {
        cartId,
        input: transformSimpleCartItem(cartItemInput)
      }
    }).pipe(
      map(result => this.cartTransformer.transform(result.data.addSimpleProductsToCart.cart))
    )
	}
}
