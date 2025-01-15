import { ActivatedRouteSnapshot } from '@angular/router';

import { DaffMergeStrategy } from '@daffodil/core';

/**
 * Configuration for {@link DaffRouterDataService}.
 */
export interface DaffRouterDataServiceConfig<T extends ActivatedRouteSnapshot['data'] = ActivatedRouteSnapshot['data']> {
  /**
   * The strategy to use for merging route data.
   */
  mergeStrategy?: DaffMergeStrategy<T>;
}
