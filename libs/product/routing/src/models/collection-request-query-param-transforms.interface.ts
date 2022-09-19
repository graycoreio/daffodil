import { DaffCollectionRequest } from '@daffodil/core';

type DaffCollectionRequestValue = DaffCollectionRequest[keyof DaffCollectionRequest];

/**
 * Transforms for storing and retrieving {@link DaffCollectionRequest} values in a route's query params.
 */
export interface DaffCollectionRequestQueryParamTransform<T extends DaffCollectionRequestValue = DaffCollectionRequestValue> {
  /**
   * A function that is given the value of a query param and
   * returns the value that will be set to the product collection request.
   */
  request?: (queryParam: string) => T;
  /**
   * A function that is given the value of a product collection request field and
   * returns the value that will be set to the query params.
   */
  queryParam?: (requestValue: T) => string;
}

/**
 * A collection of optional {@link DaffCollectionRequestQueryParamTransform}s.
 */
export type DaffCollectionRequestQueryParamTransforms = Partial<Record<keyof DaffCollectionRequest, DaffCollectionRequestQueryParamTransform>>;
