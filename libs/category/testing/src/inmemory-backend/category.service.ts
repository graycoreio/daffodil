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
  categories: DaffCategory[];

  constructor(private categoryFactory: DaffCategoryFactory) {
    this.categories = this.categoryFactory.createMany(9);
  }

  parseRequestUrl(url: string, utils: RequestInfoUtilities): ParsedRequestUrl {
    return utils.parseRequestUrl(url);
  }

  createDb(): any {
    return {
      categories: this.categories
    };
  }
}
