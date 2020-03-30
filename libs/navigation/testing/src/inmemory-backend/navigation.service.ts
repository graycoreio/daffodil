import { Injectable } from '@angular/core';
import {
  InMemoryDbService,
  RequestInfoUtilities,
  ParsedRequestUrl,
  STATUS
} from 'angular-in-memory-web-api';

import { DaffSpecificNavigationTree } from '@daffodil/navigation';

import { DaffNavigationTreeFactory } from '../factories/navigation-tree.factory';

@Injectable({
  providedIn: 'root'
})
export class DaffInMemoryBackendNavigationService implements InMemoryDbService {
  navigationTree: DaffSpecificNavigationTree;

  constructor(private navigationTreeFactory: DaffNavigationTreeFactory) {
    this.navigationTree = this.navigationTreeFactory.create();
  }

  parseRequestUrl(url: string, utils: RequestInfoUtilities): ParsedRequestUrl {
    return utils.parseRequestUrl(url);
  }

  createDb(): any {
    return {
      navigation: [this.navigationTree]
    };
  }

  get(reqInfo: any) {
    return reqInfo.utils.createResponse$(() => {
      return {
        body: this.navigationTree,
        status: STATUS.OK
      };
    });
  }
}
