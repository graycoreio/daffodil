import { Injectable } from '@angular/core';
import {
  InMemoryDbService,
  RequestInfoUtilities,
  ParsedRequestUrl,
  STATUS
} from 'angular-in-memory-web-api';

import { DaffCategory, DaffCategoryPageConfigurationState } from '@daffodil/category';
import { DaffInMemoryBackendProductService } from '@daffodil/product/testing';

import { DaffCategoryFactory } from '../factories/category.factory';
import { DaffCategoryPageConfigurationStateFactory } from '../factories/category-page-configuration-state.factory';

@Injectable({
  providedIn: 'root'
})
export class DaffInMemoryBackendCategoryService implements InMemoryDbService {
  category: DaffCategory;
  categoryPageConfigurationState: DaffCategoryPageConfigurationState;

  constructor(
    private categoryFactory: DaffCategoryFactory,
    private categoryPageConfigurationFactory: DaffCategoryPageConfigurationStateFactory,
    private productInMemoryBackendService: DaffInMemoryBackendProductService
  ) {
    this.category = this.categoryFactory.create();
    this.categoryPageConfigurationState = this.categoryPageConfigurationFactory.create();

    this.category.productIds = productInMemoryBackendService.products
      .map(product => product.id)
      .slice(0, Math.floor(Math.random() * 8 + 1));
  }

  parseRequestUrl(url: string, utils: RequestInfoUtilities): ParsedRequestUrl {
    return utils.parseRequestUrl(url);
  }

  createDb(): any {
    return {};
  }

  get(reqInfo: any) {
    this.category.id = reqInfo.id;
    this.categoryPageConfigurationState.id = reqInfo.id;
    this.categoryPageConfigurationState.current_page = reqInfo.current_page ? reqInfo.current_page : 1;
    this.categoryPageConfigurationState.page_size = reqInfo.page_size ? reqInfo.page_size : this.categoryPageConfigurationState.page_size;
    return reqInfo.utils.createResponse$(() => {
      return {
        body: {
          category: this.category,
          categoryPageConfigurationState: this.categoryPageConfigurationState,
          products: this.productInMemoryBackendService.products
        },
        status: STATUS.OK
      };
    });
  }
}
