import { Injectable, Inject } from '@angular/core';
import { QueryOptions } from 'apollo-client';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { TransformerOutInterface, TransformerInInterface, QueryManagerInterface, ServiceInterface } from '../interfaces';
import { DaffRequest, PlatformRequest, PlatformResponse, DaffResponse } from '../models';

@Injectable({
  providedIn: 'root'
})
export class TransformerOut implements TransformerOutInterface {
  transform(arg: DaffRequest): PlatformRequest {
    return {
      donovan: arg.steph,
      mitchell: arg.curry
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class TransformerIn implements TransformerInInterface<DaffResponse> {
  transform(arg: PlatformResponse): DaffResponse {
    return {
      luka: arg.damian,
      doncic: arg.lillard
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class QueryManager implements QueryManagerInterface {
  getPlatformResponse(request: PlatformRequest): QueryOptions {
    return {
      query: gql`
        query GetPlatformResponse($first: String!, $last: String!) {
          damian,
          lillard,
        }
      `,
      variables: {
        first: request.donovan,
        last: request.mitchell,
      }
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class Driver<
  T extends DaffResponse
> implements ServiceInterface<T> {
  constructor(
    private apollo: Apollo,
    @Inject(TransformerOut) private outTransformer: TransformerOutInterface,
    @Inject(TransformerIn) private inTransformer: TransformerInInterface<T>,
    @Inject(QueryManager) private queryManager: QueryManagerInterface
  ) {}
  get(request: DaffRequest): Observable<T> {
    const platformRequest: PlatformRequest = this.outTransformer.transform(request);
    const query = this.queryManager.getPlatformResponse(platformRequest);

    return this.apollo.query<PlatformResponse>(query).pipe(
      map(({data}) => {
        const platformResponse: PlatformResponse = data;

        return this.inTransformer.transform(platformResponse);
      })
    );
  }
}
