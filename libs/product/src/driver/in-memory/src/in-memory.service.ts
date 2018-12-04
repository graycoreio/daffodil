import { Injectable } from '@angular/core';

import {
  InMemoryDbService,
  RequestInfoUtilities,
  ParsedRequestUrl
} from 'angular-in-memory-web-api';
import { Product } from '../../../index';

import { DaffInMemoryProductTestingService } from './product/in-mem/product.testing.service';

@Injectable({
  providedIn: 'root'
})
export class DaffInMemoryService implements InMemoryDbService {
  constructor(
    private productTestingService: DaffInMemoryProductTestingService
  ) {}

  parseRequestUrl(url: string, utils: RequestInfoUtilities): ParsedRequestUrl {
    return utils.parseRequestUrl(url);
  }

  get(reqInfo: any) {
    const collectionName = reqInfo.collectionName;
    if (collectionName === 'products') {
      return this.productTestingService.get(reqInfo);
    }
  }

  createDb(): MockDaffDatabase {
    return {
      ...this.productTestingService.createDb()
    };
  }
}

export interface MockDaffDatabase {
  products: Product[];
}
