import { Injectable } from '@angular/core';
import { QueryOptions } from 'apollo-client';
import gql from 'graphql-tag';

import { DaffResponse, PlatformResponse, PlatformRequest, DaffRequest } from './drivers/models';
import { TransformerInInterface, QueryManagerInterface, TransformerOutInterface } from './drivers/interfaces';

// Customization by overriding lower level services and extending models

export interface CustomResponse extends DaffResponse {
  points: number
}

export interface CustomRequest extends DaffRequest {
  points: number
}

export interface CustomPlatformRequest extends PlatformRequest {
  points: number;
}

export interface CustomPlatformResponse extends PlatformResponse {
  points: number
}

@Injectable({
  providedIn: 'root'
})
export class CustomTransformerOut implements TransformerOutInterface {
  transform(arg: CustomRequest): CustomPlatformRequest {
    return {
      donovan: arg.steph,
      mitchell: arg.curry,
      points: arg.points
    }
  }
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
  getPlatformResponse(request: CustomPlatformRequest): QueryOptions {
    return {
      query: gql`
        query GetPlatformResponse($first: String!, $last: String!, $points: Number!) {
          damian,
          lillard,
          points
        }
      `,
      variables: {
        first: request.donovan,
        last: request.mitchell,
        points: request.points
      }
    }
  }
}
