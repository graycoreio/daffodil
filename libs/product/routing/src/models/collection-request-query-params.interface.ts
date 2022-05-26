import { DaffProductCollectionRequest } from '@daffodil/product';

/**
 * An object containing a mapping of a {@link DaffProductCollectionRequest} field to a query param name.
 * Setting a value for one of these fields will cause a resolver that operates on a product collection
 * to include the value of that specified query param after transforming it according to {@link DaffProductCollectionRequestQueryParamTransforms}.
 * Omitting a value for a field will disable using a query param for the request value.
 */
export type DaffProductCollectionRequestQueryParams = Partial<Record<keyof DaffProductCollectionRequest, string>>;
