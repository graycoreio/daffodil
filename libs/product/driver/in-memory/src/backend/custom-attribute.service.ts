import { isPlatformBrowser } from '@angular/common';
import {
  inject,
  Injectable,
  PLATFORM_ID,
  TransferState,
} from '@angular/core';
import {
  InMemoryDbService,
  RequestInfo,
  STATUS,
} from 'angular-in-memory-web-api';

import { DaffInMemorySingleRouteableBackend } from '@daffodil/driver/in-memory';
import { DaffProductCustomAttribute } from '@daffodil/product';
import { DaffProductCustomAttributeFactory } from '@daffodil/product/testing';

import { CUSTOM_ATTRIBUTE_TRANSFER_STATE_KEY } from './custom-attribute-transfer-state-key';
import { DAFF_PRODUCT_CUSTOM_ATTRIBUTE_IN_MEMORY_COLLECTION_NAME } from '../collection-name.const';

/**
 * An in-memory service that stubs out the backend service for listing product custom attributes.
 *
 * @Param customAttributeFactory: DaffProductCustomAttributeFactory instance
 */
@Injectable({
  providedIn: 'root',
})
export class DaffInMemoryBackendProductCustomAttributeService implements InMemoryDbService, DaffInMemorySingleRouteableBackend {
  readonly collectionName = DAFF_PRODUCT_CUSTOM_ATTRIBUTE_IN_MEMORY_COLLECTION_NAME;

  protected _customAttributes: DaffProductCustomAttribute[] = [];

  /**
   * The collection of custom attributes in the backend.
   */
  get customAttributes(): DaffProductCustomAttribute[] {
    return this._customAttributes;
  }

  constructor() {
    const transferState = inject(TransferState);
    const platform = inject(PLATFORM_ID);
    const customAttributeFactory = inject(DaffProductCustomAttributeFactory);

    if (isPlatformBrowser(platform)) {
      this._customAttributes = transferState.get(CUSTOM_ATTRIBUTE_TRANSFER_STATE_KEY, customAttributeFactory.createMany(10));
    } else {
      this._customAttributes = customAttributeFactory.createMany(10);
      transferState.set(CUSTOM_ATTRIBUTE_TRANSFER_STATE_KEY, this._customAttributes);
    }
  }

  /**
   * Creates a fake database of custom attributes for the product custom attribute inmemory backend service.
   *
   * @docs-private
   * @returns A fake database of an array of custom attributes
   */
  createDb(): any {
    return {
      customAttributes: this._customAttributes,
    };
  }

  /**
   * Responds to GET requests with the full list of custom attributes.
   *
   * @param reqInfo request object
   * @returns An http response object
   */
  get(reqInfo: RequestInfo) {
    return reqInfo.utils.createResponse$(() => ({
      body: this._customAttributes,
      status: STATUS.OK,
    }));
  }
}
