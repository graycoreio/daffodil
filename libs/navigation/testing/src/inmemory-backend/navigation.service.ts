import { Injectable } from '@angular/core';
import {
  InMemoryDbService,
  RequestInfoUtilities,
  ParsedRequestUrl
} from 'angular-in-memory-web-api';

import { DaffNavigationTree } from '@daffodil/navigation';

import { DaffNavigationTreeFactory } from '../factories/navigation-tree.factory';

@Injectable({
  providedIn: 'root'
})
export class DaffInMemoryBackendNavigationService implements InMemoryDbService {
  navigationTree: DaffNavigationTree;

  constructor(private navigationTreeFactory: DaffNavigationTreeFactory) {
    this.navigationTree = this.navigationTreeFactory.create();
  }

  parseRequestUrl(url: string, utils: RequestInfoUtilities): ParsedRequestUrl {
    return utils.parseRequestUrl(url);
  }

  createDb(): any {
    return {
      navigationTree: this.navigationTree
    };
  }
}
