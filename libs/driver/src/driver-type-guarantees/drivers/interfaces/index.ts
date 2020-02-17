import { QueryOptions } from 'apollo-client';
import { Observable } from 'rxjs';

import { DaffRequest, DaffResponse } from '../models';

export interface TransformerOutInterface {
  transform(arg: DaffRequest): any
}

export interface TransformerInInterface<T extends DaffResponse> {
  transform(arg: any): T
}

export interface QueryManagerInterface {
  getPlatformResponse(request: any): QueryOptions
}

export interface ServiceInterface<T extends DaffResponse> {
  get(request: DaffRequest): Observable<T>
}
