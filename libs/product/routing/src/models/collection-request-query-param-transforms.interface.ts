import { DaffProductCollectionRequest } from '@daffodil/product';

type DaffProductCollectionRequestValue = DaffProductCollectionRequest[keyof DaffProductCollectionRequest];

/**
 * Transforms for storing and retrieving {@link DaffProductCollectionRequest} values in a route's query params.
 */
export interface DaffProductCollectionRequestQueryParamTransform<T extends DaffProductCollectionRequestValue = DaffProductCollectionRequestValue> {
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
 * A collection of optional {@link DaffProductCollectionRequestQueryParamTransform}s.
 */
export type DaffProductCollectionRequestQueryParamTransforms = Partial<Record<keyof DaffProductCollectionRequest, DaffProductCollectionRequestQueryParamTransform>>;
