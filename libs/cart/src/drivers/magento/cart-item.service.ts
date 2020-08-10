import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DaffCartItemServiceInterface } from '../interfaces/cart-item-service.interface';
import { DaffCart } from '../../models/cart';
import { DaffCartItem } from '../../models/cart-item';
import { DaffCartItemInput, DaffCartItemInputType, DaffCompositeCartItemInput, DaffConfigurableCartItemInput } from '../../models/cart-item-input';
import { DaffMagentoCartTransformer } from './transforms/outputs/cart.service';
import {
	listCartItems,
	addConfigurableCartItem,
	addBundleCartItem,
	addSimpleCartItem,
  removeCartItem,
  updateCartItem
} from './queries/public_api';
import { MagentoConfigurableCartItemInput } from './models/inputs/cart-item';
import { transformCompositeCartItem, transformSimpleCartItem, transformConfigurableCartItem } from './transforms/inputs/cart-item-input-transformers';
import { MagentoListCartItemsResponse } from './models/responses/list-cart-items';
import { MagentoAddSimpleCartItemResponse, MagentoAddBundleCartItemResponse, MagentoAddConfigurableCartItemResponse } from './models/responses/add-cart-item';
import { MagentoRemoveCartItemResponse } from './models/responses/remove-cart-item';
import { DaffMagentoCartItemUpdateInputTransformer } from './transforms/inputs/cart-item-update.service';
import { MagentoUpdateCartItemResponse } from './models/responses/public_api';
import { transformMagentoCartItem } from './transforms/outputs/cart-item/cart-item-transformer';

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
    public cartItemUpdateInputTransformer: DaffMagentoCartItemUpdateInputTransformer
  ) {}

  list(cartId: string): Observable<DaffCartItem[]> {
    return this.apollo.query<MagentoListCartItemsResponse>({
      query: listCartItems,
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

	private addConfigurableProduct(cartId: string, cartItemInput: DaffConfigurableCartItemInput): Observable<Partial<DaffCart>> {
		const configurableInput: MagentoConfigurableCartItemInput = transformConfigurableCartItem(cartItemInput);
		return this.apollo.mutate<MagentoAddConfigurableCartItemResponse>({
      mutation: addConfigurableCartItem,
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
