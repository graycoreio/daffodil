import { DaffProductCollectionRequest } from '@daffodil/product';

type DaffProductCollectionRequestValue = DaffProductCollectionRequest[keyof DaffProductCollectionRequest];

/**
 * A function that is given the value of a query param and
 * returns the value that will be set to the product collection request.
 */
export type DaffProductCollectionRequestQueryParamTransform<T extends DaffProductCollectionRequestValue = DaffProductCollectionRequestValue> = (queryParam: string) => T;

/**
 * A collection of optional {@link DaffProductCollectionRequestQueryParamTransform}s.
 */
export type DaffProductCollectionRequestQueryParamTransforms = Partial<Record<keyof DaffProductCollectionRequest, DaffProductCollectionRequestQueryParamTransform>>;
