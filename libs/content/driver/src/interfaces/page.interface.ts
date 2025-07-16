import { Observable } from 'rxjs';

import { DaffContentPage } from '@daffodil/content';
import { createSingletonInjectionToken } from '@daffodil/core';

/**
 * Query CMS pages.
 */
export interface DaffContentPageServiceInterface<
  T extends DaffContentPage = DaffContentPage,
> {
  /**
   * Get a content page with the specified ID.
   */
  get(id: T['id']): Observable<T>;
}

export const {
  token: DaffContentPageDriver,
  /**
   * Provider function for {@link DaffContentPageDriver}.
   */
  provider: provideDaffContentPageDriver,
} = createSingletonInjectionToken<DaffContentPageServiceInterface>('DaffContentPageDriver');
