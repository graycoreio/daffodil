import {
  DaffProductCollectionRequestQueryParams,
  DaffProductCollectionRequestQueryParamTransforms,
} from '../models/public_api';

/**
 * An interface for providing `@daffodil/product/routing` with necessary config values.
 */
export interface DaffProductRoutingConfig {
  /**
   * The query params transforms for each product collection request field.
   *
   * See {@link DaffProductCollectionRequestQueryParamTransforms}.
   */
  transforms?: DaffProductCollectionRequestQueryParamTransforms;
  /**
   * The mapping of query param fields.
   *
   * See {@link DaffProductCollectionRequestQueryParams}.
   */
  params?: DaffProductCollectionRequestQueryParams;
}
