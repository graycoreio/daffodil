import { Injectable } from '@angular/core';
import {
  InMemoryDbService,
  RequestInfoUtilities,
  ParsedRequestUrl
} from 'angular-in-memory-web-api';

import { DaffProduct } from '@daffodil/product';
import { DaffCart } from '@daffodil/cart';
import { Order } from '@daffodil/checkout';
import { DaffInMemoryBackendProductService } from '@daffodil/product/testing';
import { DaffInMemoryBackendCartRootService } from '@daffodil/cart/testing';
import { DaffInMemoryBackendCheckoutService } from '@daffodil/checkout/testing';
import { DaffInMemoryBackendNavigationService } from '@daffodil/navigation/testing';
import { DaffNavigationTree } from '@daffodil/navigation';
import { DaffInMemoryBackendCategoryService } from '@daffodil/category/testing';
import { DaffCategory } from '@daffodil/category';

@Injectable({
  providedIn: 'root'
})
export class DemoInMemoryService implements InMemoryDbService {
  constructor(
    private productTestingService: DaffInMemoryBackendProductService,
    private cartTestingService: DaffInMemoryBackendCartRootService,
    private checkoutTestingService: DaffInMemoryBackendCheckoutService,
    private navigationTestingService: DaffInMemoryBackendNavigationService,
    private categoryTestingService: DaffInMemoryBackendCategoryService
  ) {}

  parseRequestUrl(url: string, utils: RequestInfoUtilities): ParsedRequestUrl {
    return utils.parseRequestUrl(url);
  }

  post(reqInfo: any) {
		const collectionName = reqInfo.collectionName;
    if (DaffInMemoryBackendCartRootService.COLLECTION_NAMES.indexOf(collectionName) > -1) {
      return this.cartTestingService.post(reqInfo);
    } else if (collectionName === 'checkout') {
      return this.checkoutTestingService.post(reqInfo);
    }

    return undefined;
  }

  get(reqInfo: any) {
    const collectionName = reqInfo.collectionName;
    if (collectionName === 'products') {
      return this.productTestingService.get(reqInfo);
    } else if (collectionName === 'navigation') {
      return this.navigationTestingService.get(reqInfo);
    } else if (collectionName === 'category') {
			return this.categoryTestingService.get(reqInfo);
		} else if(DaffInMemoryBackendCartRootService.COLLECTION_NAMES.indexOf(collectionName) > -1) {
			return this.cartTestingService.get(reqInfo);
		}
	}
	
	put(reqInfo: any) {
		const collectionName = reqInfo.collectionName;
		if(DaffInMemoryBackendCartRootService.COLLECTION_NAMES.indexOf(collectionName) > -1) {
			return this.cartTestingService.put(reqInfo);
		}
	}

	delete(reqInfo: any) {
		const collectionName = reqInfo.collectionName;
		if(DaffInMemoryBackendCartRootService.COLLECTION_NAMES.indexOf(collectionName) > -1) {
			return this.cartTestingService.delete(reqInfo);
		}
	}

  createDb(): MockDaffDatabase {
    return {
      ...this.productTestingService.createDb(),
      ...this.cartTestingService.createDb(),
      ...this.checkoutTestingService.createDb(),
			...this.navigationTestingService.createDb(),
			...this.categoryTestingService.createDb()
    };
  }
}

export interface MockDaffDatabase {
  products: DaffProduct[];
  cart: DaffCart;
  order: Order;
	navigation: DaffNavigationTree;
	category: DaffCategory;
}
