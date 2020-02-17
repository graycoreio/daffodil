import { Injectable } from '@angular/core';

import { DaffResponse, PlatformResponse, PlatformRequest } from './drivers/models';
import { TransformerInInterface, QueryManagerInterface } from './drivers/interfaces';
import { QueryOptions } from 'apollo-client';
import gql from 'graphql-tag';

export interface CustomResponse extends DaffResponse {
  points: number
}

export interface CustomPlatformResponse extends PlatformResponse {
  points: number
}

@Injectable({
  providedIn: 'root'
})
export class CustomTransformerIn implements TransformerInInterface<CustomResponse> {
  transform(arg: CustomPlatformResponse): CustomResponse {
    return {
      luka: arg.damian,
      doncic: arg.lillard,
      points: arg.points
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class CustomQueryManager implements QueryManagerInterface {
  getPlatformResponse(request: PlatformRequest): QueryOptions {
    return {
      query: gql`
        query GetPlatformResponse($first: String!, $last: String!) {
          damian,
          lillard,
          points
        }
      `,
      variables: {
        first: request.donovan,
        last: request.mitchell,
      }
    }
  }
}
