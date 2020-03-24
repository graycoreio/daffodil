import { Injectable } from '@angular/core';
import { STATUS, RequestInfo } from 'angular-in-memory-web-api';

import { DaffCart } from '@daffodil/cart';

import { DaffInMemoryCartDataService } from '../cart-data.service';

@Injectable({
  providedIn: 'root'
})
export class DaffInMemoryBackendCartService {
  constructor(
    private cartDataService: DaffInMemoryCartDataService
  ) {}

  get(reqInfo: RequestInfo) {
    return reqInfo.utils.createResponse$(() => ({
      body: this.getCart(reqInfo),
      status: STATUS.OK
    }))
  }

  post(reqInfo: RequestInfo) {
    return reqInfo.utils.createResponse$(() => {
			let body;

      if (reqInfo.url.includes('/addToCart')) {
        // deprecated
        body = {};
      } else if (reqInfo.url.includes('/clear')) {
        body = this.clear(reqInfo);
      } else {
        body = this.create(reqInfo);
      }

      return {
        body,
        status: STATUS.OK
      };
    });
  }

  private clear(reqInfo: RequestInfo): DaffCart {
		this.cartDataService.get().items = [];

    return this.cartDataService.get();
  }

  private create(reqInfo: RequestInfo): Partial<{id: DaffCart['id']}> {
		return {
			id: this.cartDataService.getId()
    };
  }
	
  private getCart(reqInfo: RequestInfo): DaffCart {
    return this.cartDataService.get()
  }
}
