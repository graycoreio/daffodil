import {
  DaffCollectionRequestQueryParams,
  DaffCollectionRequestQueryParamTransforms,
} from '../models/public_api';

/**
 * An interface for providing `@daffodil/product/routing` with necessary config values.
 */
export interface DaffProductRoutingConfig {
  /**
   * The query params transforms for each product collection request field.
   *
   * See {@link DaffCollectionRequestQueryParamTransforms}.
   */
  transforms?: DaffCollectionRequestQueryParamTransforms;
  /**
   * The mapping of query param fields.
   *
   * See {@link DaffCollectionRequestQueryParams}.
   */
  params?: DaffCollectionRequestQueryParams;
}
