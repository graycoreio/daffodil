import { Injectable } from '@angular/core';
import {
  InMemoryDbService,
  RequestInfoUtilities,
  ParsedRequestUrl
} from 'angular-in-memory-web-api';

import { DaffCategory } from '@daffodil/category';
import { DaffInMemoryBackendProductService } from '@daffodil/product/testing';

import { DaffCategoryFactory } from '../factories/category.factory';

@Injectable({
  providedIn: 'root'
})
export class DaffInMemoryBackendCategoryService implements InMemoryDbService {
  category: DaffCategory;

  constructor(
    private categoryFactory: DaffCategoryFactory,
    private productInMemoryBackendService: DaffInMemoryBackendProductService
  ) {
    this.category = this.categoryFactory.create();

    this.category.productIds = productInMemoryBackendService.products
      .map(product => product.id)
      .slice(0, Math.floor(Math.random() * 8 + 1));
  }

  parseRequestUrl(url: string, utils: RequestInfoUtilities): ParsedRequestUrl {
    return utils.parseRequestUrl(url);
  }

  createDb(): any {
    return {
      category: this.category
    };
  }
}
