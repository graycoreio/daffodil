import { DaffCollectionRequest } from '@daffodil/core';

/**
 * An object containing a mapping of a {@link DaffCollectionRequest} field to a query param name.
 * Setting a value for one of these fields will cause a resolver that operates on a product collection
 * to include the value of that specified query param after transforming it according to {@link DaffCollectionRequestQueryParamTransforms}.
 * Omitting a value for a field will disable using a query param for the request value.
 */
export type DaffCollectionRequestQueryParams = Partial<Record<keyof DaffCollectionRequest, string>>;
