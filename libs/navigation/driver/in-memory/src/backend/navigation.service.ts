import {
  Inject,
  Injectable,
  Optional,
} from '@angular/core';
import {
  InMemoryDbService,
  RequestInfoUtilities,
  ParsedRequestUrl,
  STATUS,
} from 'angular-in-memory-web-api';

import { DaffNavigationTree } from '@daffodil/navigation';
import { DaffNavigationTreeFactory } from '@daffodil/navigation/testing';

import {
  DAFF_NAVIGATION_IN_MEMORY_SEED_DATA_PROVIDER,
  DaffNavigationInMemorySeedDataProvider,
} from '../seed-data-provider/public_api';

@Injectable({
  providedIn: 'root',
})
export class DaffInMemoryBackendNavigationService implements InMemoryDbService {
  private _navigationTree: DaffNavigationTree;

  get navigationTree(): DaffNavigationTree {
    return this.seedDataProvider?.() || this._navigationTree;
  }

  constructor(
    private navigationTreeFactory: DaffNavigationTreeFactory,
    @Inject(DAFF_NAVIGATION_IN_MEMORY_SEED_DATA_PROVIDER) @Optional() private seedDataProvider: DaffNavigationInMemorySeedDataProvider | null,
  ) {
    this._navigationTree = seedDataProvider?.() || this.navigationTreeFactory.create();
  }

  parseRequestUrl(url: string, utils: RequestInfoUtilities): ParsedRequestUrl {
    return utils.parseRequestUrl(url);
  }

  createDb(): any {
    return {
      navigation: [this.navigationTree],
    };
  }

  get(reqInfo: any) {
    return reqInfo.utils.createResponse$(() => ({
      body: this.navigationTree,
      status: STATUS.OK,
    }));
  }
}
