import { Observable } from 'rxjs';

import { DaffContentSchemaPage } from '@daffodil/content';
import { createSingletonInjectionToken } from '@daffodil/core';

/**
 * Query CMS pages that return DaffContentSchemaPage.
 */
export interface DaffContentPageSchemaServiceInterface<
  T extends DaffContentSchemaPage = DaffContentSchemaPage,
> {
  /**
   * Get a content page with the specified ID.
   */
  get(id: T['id']): Observable<T>;
}

export const {
  token: DaffContentPageSchemaDriver,
  /**
   * Provider function for {@link DaffContentPageSchemaDriver}.
   */
  provider: provideDaffContentSchemaPageDriver,
} = createSingletonInjectionToken<DaffContentPageSchemaServiceInterface<DaffContentSchemaPage>>('DaffContentPageSchemaDriver');
