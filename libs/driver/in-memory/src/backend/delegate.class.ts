import {
  RequestInfo,
  STATUS,
} from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

import { DaffInMemoryDataServiceInterface } from './data-service.type';
import { DaffInMemoryRouteableBackend } from './routeable.type';

enum Method {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  DELETE = 'delete',
}

/**
 * An class that automatically delegates requests to in-memory backends.
 *
 * @inheritdoc
 */
export class DaffInMemoryBackendDelegate implements DaffInMemoryDataServiceInterface {
  constructor(
    protected backends: Array<DaffInMemoryRouteableBackend>,
  ) {}

  protected delegateRequest(reqInfo: RequestInfo, method: Method): Observable<any> {
    const backend = this.backends.find((b) => 'collectionName' in b ? b.collectionName === reqInfo.collectionName : b.canHandle(reqInfo.collectionName));
    const request = backend?.[method];
    return request
      // allow child backends to return nully values
      // which will fall back to default request behavior (https://github.com/angular/angular/tree/main/packages/misc/angular-in-memory-web-api#http-request-handling)
      ? request.call(backend, reqInfo)
      : reqInfo.utils.createResponse$(() => ({
        status: STATUS.NOT_FOUND,
        statusText: `Backend ${reqInfo.collectionName} not found or does not support the ${method} request method`,
      }));
  }

  get?(reqInfo: RequestInfo): Observable<any> {
    return this.delegateRequest(reqInfo, Method.GET);
  }

  post?(reqInfo: RequestInfo): Observable<any> {
    return this.delegateRequest(reqInfo, Method.POST);
  }

  put?(reqInfo: RequestInfo): Observable<any> {
    return this.delegateRequest(reqInfo, Method.PUT);
  }

  delete?(reqInfo: RequestInfo): Observable<any> {
    return this.delegateRequest(reqInfo, Method.DELETE);
  }
}
