import { Injectable } from '@angular/core';
import { STATUS, RequestInfo } from 'angular-in-memory-web-api';

import {
  DaffCart,
  DaffCartItem
} from '@daffodil/cart';

import { DaffInMemoryCartDataService } from '../cart-data.service';
import { DaffCartItemFactory } from '../../factories/cart-item.factory';

@Injectable({
  providedIn: 'root'
})
export class DaffInMemoryBackendCartItemService {
  constructor(
		private cartDataService: DaffInMemoryCartDataService,
		private cartItemFactory: DaffCartItemFactory
	) {}

  get(reqInfo: RequestInfo) {
		let response;
		
		if(this.getAction(reqInfo) === '') {
			response = this.cartDataService.getItems();
		} else {
			response = this.getItem(parseInt(this.getAction(reqInfo), 10));
		}

    return reqInfo.utils.createResponse$(() => {
      return {
        body: response,
        status: STATUS.OK
      };
    });
  }

  put(reqInfo: RequestInfo) {
    return reqInfo.utils.createResponse$(() => ({
      body: this.updateItem(reqInfo),
      status: STATUS.OK
    }));
  }

  post(reqInfo: RequestInfo) {
    return reqInfo.utils.createResponse$(() => ({
      body: this.addItem(reqInfo),
      status: STATUS.OK
    }));
  }

  delete(reqInfo: RequestInfo) {
    return reqInfo.utils.createResponse$(() => ({
      body: this.deleteItem(reqInfo, this.getAction(reqInfo)),
      status: STATUS.OK
    }));
  }

  /**
   * Gets whatever follows the cart ID section of the request URL.
   */
  private getAction(reqInfo: RequestInfo): string {
    return reqInfo.url.replace(`/${reqInfo.resourceUrl}${reqInfo.id}/`, '')
	}
	
	private getItem(item_id: number): DaffCartItem {
		return this.cartDataService.getItems()
			.filter(item => item.item_id === item_id)
			.shift();
	}

  private updateItem(reqInfo): DaffCart {
		const itemIndex = this.cartDataService.getItems()
			.findIndex((item) => item.item_id === reqInfo.req.body.itemId);
		const updatedItem = {
			...this.cartDataService.getItem(itemIndex),
			...reqInfo.req.body.item
		};

		this.cartDataService.setItem(itemIndex, updatedItem);

		return this.cartDataService.get();
  }

  private addItem(reqInfo): DaffCart {
    const cartItem = this.cartItemFactory.create({ product_id: reqInfo.req.body.productId, qty: reqInfo.req.body.qty});

    this.cartDataService.getItems().push(cartItem);

    return this.cartDataService.get();
  }

  private deleteItem(reqInfo, itemId: DaffCartItem['item_id']): DaffCart {
		const itemIndex = this.cartDataService.getItems()
			.findIndex((item) => item.item_id.toString() === itemId);
		this.cartDataService.removeItem(itemIndex);

    return this.cartDataService.get();
  }
}
