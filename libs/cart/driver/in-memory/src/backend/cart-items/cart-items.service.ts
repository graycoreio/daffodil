import {
  Injectable,
  Inject,
} from '@angular/core';
import {
  STATUS,
  RequestInfo,
} from 'angular-in-memory-web-api';

import {
  DaffCart,
  DaffCartItem,
  DaffCartItemInput,
} from '@daffodil/cart';
import { DaffCartItemFactory } from '@daffodil/cart/testing';
import { DaffInMemoryDataServiceInterface } from '@daffodil/driver/in-memory';
import { DaffInMemoryBackendProductService } from '@daffodil/product/driver/in-memory';

import { daffCartInMemoryComputeCartItemPrices } from '../../helpers/compute-cart-item-prices';
import { daffCartInMemoryComputeCartTotals } from '../../helpers/compute-cart-totals';
import {
  DAFF_CART_IN_MEMORY_EXTRA_ATTRIBUTES_HOOK,
  DaffCartInMemoryExtraAttributesHook,
} from '../../injection-tokens/public_api';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffInMemoryBackendCartItemsService implements DaffInMemoryDataServiceInterface {
  constructor(
    private cartItemFactory: DaffCartItemFactory,
    @Inject(DAFF_CART_IN_MEMORY_EXTRA_ATTRIBUTES_HOOK) private extraFieldsHook: DaffCartInMemoryExtraAttributesHook,
    private productBackend: DaffInMemoryBackendProductService,
  ) {}

  get(reqInfo: RequestInfo) {
    return reqInfo.utils.createResponse$(() => {
      let body;
      const action = this.getAction(reqInfo);

      if (action) {
        body = this.getItem(reqInfo, action);
      } else {
        body = this.listItems(reqInfo);
      }

      return {
        body,
        status: STATUS.OK,
      };
    });
  }

  put(reqInfo: RequestInfo) {
    return reqInfo.utils.createResponse$(() => ({
      body: this.updateItem(reqInfo, this.getAction(reqInfo)),
      status: STATUS.OK,
    }));
  }

  post(reqInfo: RequestInfo) {
    return reqInfo.utils.createResponse$(() => ({
      body: this.addItem(reqInfo),
      status: STATUS.OK,
    }));
  }

  delete(reqInfo: RequestInfo) {
    return reqInfo.utils.createResponse$(() => ({
      body: this.deleteItem(reqInfo, this.getAction(reqInfo)),
      status: STATUS.OK,
    }));
  }

  /**
   * Gets whatever follows the cart ID section of the request URL.
   */
  private getAction(reqInfo: RequestInfo): string {
    return reqInfo.url.replace(`/${reqInfo.resourceUrl}${reqInfo.id}/`, '');
  }

  private getCart(reqInfo: RequestInfo): DaffCart {
    return reqInfo.utils.findById<DaffCart>(reqInfo.collection, reqInfo.id);
  }

  private transformItemInput(itemInput: DaffCartItemInput) {
    return {
      ...this.cartItemFactory.fromProduct(this.productBackend.products.find((product) => product.id === itemInput.productId)),
      ...itemInput,
    };
  }

  private listItems(reqInfo): DaffCartItem[] {
    return this.getCart(reqInfo).items;
  }

  private getItem(reqInfo: RequestInfo, itemId: DaffCartItem['id']): DaffCartItem {
    const cart = this.getCart(reqInfo);

    return cart.items.find(({ id }) => itemId === id);
  }

  private updateItem(reqInfo: RequestInfo, itemId: DaffCartItem['id']): DaffCart {
    const cart = this.getCart(reqInfo);
    const cartIndex = reqInfo.collection.findIndex(c => c.id === reqInfo.id);
    const itemChanges = reqInfo.utils.getJsonBody(reqInfo.req);
    const itemIndex = cart.items.findIndex((item) => itemId === item.id);
    reqInfo.collection[cartIndex] = daffCartInMemoryComputeCartTotals({
      ...cart,
      items: cart.items.map(
        (item, index) => index === itemIndex ? daffCartInMemoryComputeCartItemPrices({
          ...cart.items[itemIndex],
          ...itemChanges,
        }, this.productBackend.products) : item,
      ),
      extra_attributes: this.extraFieldsHook(reqInfo, cart),
    }, this.productBackend.products);

    return reqInfo.collection[cartIndex];
  }

  private addItem(reqInfo: RequestInfo): DaffCart {
    const cart = this.getCart(reqInfo);
    const cartIndex = reqInfo.collection.findIndex(c => c.id === reqInfo.id);
    const itemInput = reqInfo.utils.getJsonBody(reqInfo.req);
    const existingCartItemIndex = cart.items.findIndex(item => item.product_id === itemInput.productId);
    if (existingCartItemIndex > -1) {
      const updatedCartItem = {
        ...cart.items[existingCartItemIndex],
        qty: cart.items[existingCartItemIndex].qty + itemInput.qty,
      };
      reqInfo.collection[cartIndex] = daffCartInMemoryComputeCartTotals({
        ...cart,
        items: cart.items.map(
          (item, index) => index === existingCartItemIndex ? daffCartInMemoryComputeCartItemPrices(updatedCartItem, this.productBackend.products) : item,
        ),
        extra_attributes: this.extraFieldsHook(reqInfo, cart),
      }, this.productBackend.products);
    } else {
      reqInfo.collection[cartIndex] = daffCartInMemoryComputeCartTotals({
        ...cart,
        items: [
          ...cart.items,
          daffCartInMemoryComputeCartItemPrices(this.transformItemInput(itemInput), this.productBackend.products),
        ],
        extra_attributes: this.extraFieldsHook(reqInfo, cart),
      }, this.productBackend.products);
    }

    return reqInfo.collection[cartIndex];
  }

  private deleteItem(reqInfo: RequestInfo, itemId: DaffCartItem['id']): DaffCart {
    const cart = this.getCart(reqInfo);
    const itemIndex = cart.items.findIndex(({ id }) => itemId === id);
    const cartIndex = reqInfo.collection.findIndex(c => c.id === reqInfo.id);
    reqInfo.collection[cartIndex] = daffCartInMemoryComputeCartTotals({
      ...cart,
      items: cart.items.filter((item, index) => index !== itemIndex),
      extra_attributes: this.extraFieldsHook(reqInfo, cart),
    }, this.productBackend.products);

    return reqInfo.collection[cartIndex];
  }
}
