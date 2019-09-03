import { Injectable } from '@angular/core';
import {
  InMemoryDbService,
  RequestInfoUtilities,
  ParsedRequestUrl
} from 'angular-in-memory-web-api';

import { DaffCategory } from '@daffodil/category';

import { DaffCategoryFactory } from '../factories/category.factory';

@Injectable({
  providedIn: 'root'
})
export class DaffInMemoryBackendCategoryService implements InMemoryDbService {
  category: DaffCategory;

  constructor(private categoryFactory: DaffCategoryFactory) {
    this.category = this.categoryFactory.create();
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
