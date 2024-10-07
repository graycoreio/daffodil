import {
  Inject,
  Injectable,
} from '@angular/core';
import {
  RequestInfo,
  STATUS,
} from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

import { DAFF_IN_MEMORY_BACKENDS } from './backends.token';
import { DaffInMemoryDataServiceInterface } from './data-service.type';
import { DaffInMemoryBackendInterface } from './type';

/**
 * An in-memory backend that automatically delegates requests to backends provided to {@link DAFF_IN_MEMORY_BACKENDS}.
 *
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffInMemoryBackendDelegate implements DaffInMemoryDataServiceInterface {
  constructor(
    @Inject(DAFF_IN_MEMORY_BACKENDS) private backends: Array<DaffInMemoryBackendInterface>,
  ) {}

  protected delegateRequest(reqInfo: RequestInfo, method: keyof DaffInMemoryDataServiceInterface): Observable<any> {
    const backend = this.backends.find((b) => b.collectionName === reqInfo.collectionName);
    return backend?.[method](reqInfo) || reqInfo.utils.createResponse$(() => ({
      status: STATUS.NOT_FOUND,
      statusText: `Backend ${reqInfo.collectionName} not found or does not support the ${method} request method`,
    }));
  }

  get?(reqInfo: RequestInfo): Observable<any> {
    return this.delegateRequest(reqInfo, 'get');
  }

  post?(reqInfo: RequestInfo): Observable<any> {
    return this.delegateRequest(reqInfo, 'post');
  }

  put?(reqInfo: RequestInfo): Observable<any> {
    return this.delegateRequest(reqInfo, 'put');
  }

  delete?(reqInfo: RequestInfo): Observable<any> {
    return this.delegateRequest(reqInfo, 'delete');
  }
}
