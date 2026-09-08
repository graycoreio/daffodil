import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InMemoryBackendConfig } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

import { DaffInMemoryDriverBase } from '@daffodil/driver/in-memory';
import { DaffProductCustomAttribute } from '@daffodil/product';
import { DaffProductCustomAttributeServiceInterface } from '@daffodil/product/driver';

import { DAFF_PRODUCT_CUSTOM_ATTRIBUTE_IN_MEMORY_COLLECTION_NAME } from '../collection-name.const';

/**
 * The product custom attribute inmemory driver to mock the custom attribute backend service.
 *
 * @inheritdoc
 * @Param HttpClient
 */
@Injectable()
export class DaffInMemoryProductCustomAttributeService extends DaffInMemoryDriverBase implements DaffProductCustomAttributeServiceInterface {
  constructor(
    private http: HttpClient,
    config: InMemoryBackendConfig,
  ) {
    super(config, DAFF_PRODUCT_CUSTOM_ATTRIBUTE_IN_MEMORY_COLLECTION_NAME);
  }

  list(): Observable<DaffProductCustomAttribute[]> {
    return this.http.get<DaffProductCustomAttribute[]>(`${this.url}/`);
  }
}
