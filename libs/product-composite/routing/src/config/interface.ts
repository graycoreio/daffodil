import {
  DaffCompositeProduct,
  DaffProductCompositeSelectionPayload,
} from '@daffodil/product-composite';

/**
 * An interface for providing `@daffodil/product-composite/routing` with necessary config values.
 */
export interface DaffProductCompositeRoutingConfig {
  /**
   * The name of the query param for which a composite product page preselection can be defined.
   * The value of this query param should be a {@link DaffProductCompositeSelectionPayload} after being base64 decoded and JSON parsed.
   *
   * Defaults to `composite_selection`.
   */
  compositeSelectionQueryParam?: string;
  /**
   * The function used to decode the value of the {@link DaffProductCompositeStateConfig#compositeSelectionQueryParam}
   * into a {@link DaffProductCompositeSelectionPayload}.
   *
   * Defaults to `(queryParam: string) => JSON.parse(atob(queryParam))`.
   */
  compositeSelectionQueryParamDecode?: (queryParam: string, product: DaffCompositeProduct) => DaffProductCompositeSelectionPayload;
}
