import { Injectable } from '@angular/core';
import {
  InMemoryDbService,
  RequestInfoUtilities,
  ParsedRequestUrl,
  RequestInfo,
} from 'angular-in-memory-web-api';

import { DaffInMemoryBackendAuthService } from '@daffodil/auth/driver/in-memory';
import { DaffCart } from '@daffodil/cart';
import { DaffInMemoryBackendCartRootService } from '@daffodil/cart/driver/in-memory';
import { DaffInMemoryBackendCategoryService } from '@daffodil/category/driver/in-memory';
import { DaffInMemoryBackendGeographyService } from '@daffodil/geography/driver/in-memory';
import { DaffNavigationTree } from '@daffodil/navigation';
import { DaffInMemoryBackendNavigationService } from '@daffodil/navigation/driver/in-memory';
import { DaffOrder } from '@daffodil/order';
import { DaffProduct } from '@daffodil/product';
import { DaffInMemoryBackendProductService } from '@daffodil/product/driver/in-memory';

@Injectable({
  providedIn: 'root',
})
export class DemoInMemoryBackendService implements InMemoryDbService {
  constructor(
    private productTestingService: DaffInMemoryBackendProductService,
    private cartTestingService: DaffInMemoryBackendCartRootService,
    private navigationTestingService: DaffInMemoryBackendNavigationService,
    private authTestingService: DaffInMemoryBackendAuthService,
    private geographyTestingService: DaffInMemoryBackendGeographyService,
    private categoryTestingService: DaffInMemoryBackendCategoryService,
  ) {}

  parseRequestUrl(url: string, utils: RequestInfoUtilities): ParsedRequestUrl {
    return utils.parseRequestUrl(url);
  }

  post(reqInfo: any) {
    const collectionName = reqInfo.collectionName;
    if (this.cartTestingService.canHandle(collectionName)) {
      return this.cartTestingService.post(reqInfo);
    } else if (collectionName === 'auth') {
      return this.authTestingService.post(reqInfo);
    }

    return undefined;
  }

  get(reqInfo: any) {
    const collectionName = reqInfo.collectionName;
    if (collectionName === 'products') {
      return this.productTestingService.get(reqInfo);
    } else if (collectionName === 'navigation') {
      return this.navigationTestingService.get(reqInfo);
    } else if (this.cartTestingService.canHandle(collectionName)) {
      return this.cartTestingService.get(reqInfo);
    } else if (collectionName === 'countries') {
      return this.geographyTestingService.get(reqInfo);
    } else if (collectionName === 'category') {
      return this.categoryTestingService.get(reqInfo);
    }
  }

  put(reqInfo: any) {
    const collectionName = reqInfo.collectionName;
    if(this.cartTestingService.canHandle(collectionName)) {
      return this.cartTestingService.put(reqInfo);
    }
  }

  delete(reqInfo: any) {
    const collectionName = reqInfo.collectionName;
    if(this.cartTestingService.canHandle(collectionName)) {
      return this.cartTestingService.delete(reqInfo);
    }
  }

  createDb(reqInfo: RequestInfo): MockDaffDatabase {
    return {
      ...this.productTestingService.createDb(),
      ...this.cartTestingService.createDb(reqInfo),
      ...this.navigationTestingService.createDb(),
    };
  }
}

export interface MockDaffDatabase {
  products: DaffProduct[];
  cart: DaffCart;
  order: DaffOrder;
  navigation: DaffNavigationTree;
}
